from pydantic import BaseModel
import entity
import logging
import error
import tool
import pandas as pd
import random

loginTTLDict = tool.TTLDict()
registerTTLDict = tool.TTLDict()
logger = logging.getLogger()
wordlist = pd.read_excel('./backend/wordlist.xlsx', header=0)
wordlist = list(wordlist.iloc[:, 1])

def getList():
    wl = wordlist.copy()
    random.shuffle(wl)
    return wl

TTLTime = 300

def loginEmail(email:str):
    ans = entity.getUser(email)
    if len(ans) == 0 :
        return error.RETCODE.USERDATANOTEXIST
    ans, randomeCode = tool.sendEmail(email)
    loginTTLDict.setex(email, TTLTime, randomeCode)
    return ans

def registerEmail(email:str):
    ans = entity.getUser(email)
    if len(ans) > 0 :
        return error.RETCODE.USERHASREGISTERED
    ans, randomeCode = tool.sendEmail(email)
    registerTTLDict.setex(email, TTLTime, randomeCode)
    return ans


class UploadMappingReq(BaseModel):
    email: str
    code: str
    wordlist: list


def uploadMapping(mapping:UploadMappingReq):
    code = registerTTLDict.get(mapping.email)
    if code == None:
        return error.RETCODE.EMAILEXPIRED
    elif code != mapping.code:
        return error.RETCODE.CODEERROR
    entity.newUser(email=mapping.email, mapping=','.join(str(i) for i in mapping.wordlist))        
    return error.RETCODE.OK


class GetMappingReq(BaseModel):
    email: str
    code: str

class GetMappingRes():
    def __init__(self, wd):
        self.wordlist = wd     # 列表

def getUserList(getMapping:GetMappingReq):
    code = loginTTLDict.get(getMapping.email)
    if code == None:
        return None, error.RETCODE.EMAILEXPIRED
    elif code != getMapping.code:
        return None, error.RETCODE.CODEERROR
    mapping = entity.fetchMapping(getMapping.email)
    mapp = mapping.split(',')
    ans = GetMappingRes(mapp)
    return ans, error.RETCODE.OK