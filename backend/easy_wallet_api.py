from fastapi import APIRouter, Depends, Request, HTTPException
import response_util
import logging
from pydantic import BaseModel
import service
import error

logger = logging.getLogger()


router = APIRouter()

class EmailCheckReq(BaseModel):
    email: str

class GetMappingReq(BaseModel):
    email: str
    code: str

@router.post("/getList")
async def getList():
    return response_util.success()

@router.post("/user/login")
async def loginEmail(item:EmailCheckReq):
    res = service.loginEmail(item.email)
    if res == error.RETCODE.OK:
        return response_util.success()
    else:
        return response_util.result(res, error.err_msg[res], None)

@router.post("/user/register")
async def registerEmail(item:EmailCheckReq):
    res = service.registerEmail(item.email)
    if res == error.RETCODE.OK:
        return response_util.success()
    else:
        return response_util.result(res, error.err_msg[res], None)


@router.post("/user/upload")
async def uploadMapping(mapping:service.UploadMappingReq):
    ans = service.uploadMapping(mapping=mapping)
    if ans == error.RETCODE.OK:
        return response_util.success()
    else:
        return response_util.result(ans, error.err_msg[ans], None)


@router.post("/user/getUserMapping")
async def getUserList(getMapping: service.GetMappingReq):
    ans, co = service.getUserList(getMapping)
    if co == error.RETCODE.OK:
        return response_util.result(code=error.RETCODE.OK, msg="", data=ans)
    else:
        return response_util.result(code=co, msg=error.err_msg[ans], data=None)
