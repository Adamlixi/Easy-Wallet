from fastapi import APIRouter, Depends, Request, HTTPException
import response_util
import logging
from pydantic import BaseModel
import service
import error
from fastapi.encoders import jsonable_encoder
from fastapi.responses import Response
from starlette.background import BackgroundTask
import typing
import json

class JSONResponse(Response):
    media_type = "application/json"

    def __init__(
        self,
        content: typing.Any,
        status_code: int = 200,
        headers: typing.Optional[typing.Dict[str, str]] = None,
        media_type: typing.Optional[str] = None,
        background: typing.Optional[BackgroundTask] = None,
    ) -> None:
        super().__init__(content, status_code, headers, media_type, background)

    def render(self, content: typing.Any) -> bytes:
        return json.dumps(
            content,
            ensure_ascii=False,
            allow_nan=True,
            indent=None,
            separators=(",", ":"),
        ).encode("utf-8")

logger = logging.getLogger()


router = APIRouter()

class EmailCheckReq(BaseModel):
    email: str

class GetMappingReq(BaseModel):
    email: str
    code: str

@router.post("/getList")
async def getList():
    l = service.getList()
    ans = service.GetMappingRes(l)
    js = jsonable_encoder(response_util.result(error.RETCODE.OK,"",ans))
    return JSONResponse(content=js)

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
        return response_util.result(code=co, msg=error.err_msg[co], data=None)
