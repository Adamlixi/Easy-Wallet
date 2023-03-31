from pydantic import BaseModel
import entity
import logging
import error
import tool

ttlDict = tool.TTLDict()
logger = logging.getLogger()

def getList():
    return

TTLTime = 30

def loginEmail(email:str):
    ans = entity.getUser(email)
    if len(ans) == 0 :
        return error.RETCODE.USERDATANOTEXIST
    ans, randomeCode = tool.sendEmail(email)
    ttlDict.setex(email, TTLTime, randomeCode)
    return ans

def registerEmail(email:str):
    ans = entity.getUser(email)
    if len(ans) > 0 :
        return error.RETCODE.USERHASREGISTERED
    ans, randomeCode = tool.sendEmail(email)
    ttlDict.setex(email, TTLTime, randomeCode)
    return ans


class UploadMappingReq(BaseModel):
    email: str
    code: str
    worldlist: str[65536]

def uploadMapping(mapping:UploadMappingReq):
    code = ttlDict.get(mapping.email)
    if code == None:
        return error.RETCODE.EMAILEXPIRED
    elif code != mapping.code:
        return error.RETCODE.CODEERROR
    entity.newUser(email=mapping.email, mapping=','.join(mapping.worldlist))        
    return error.RETCODE.OK


class GetMappingReq(BaseModel):
    email: str
    code: str

class GetMappingRes(BaseModel):
    worldlist: str[65536]

def getUserList(getMapping:GetMappingReq):
    ans = GetMappingRes()
    code = ttlDict.get(getMapping.email)
    if code == None:
        return error.RETCODE.EMAILEXPIRED
    elif code != getMapping.code:
        return error.RETCODE.CODEERROR
    mapping, co = entity.fetchMapping(getMapping.email)
    if co != error.RETCODE.OK:
        return ans, co
    mapp = mapping.split(',')
    ans.worldlist = mapp
    return ans, co
