import uvicorn
from fastapi import FastAPI, APIRouter, Depends, Request, Response, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import response_util
import sys
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)
ch = logging.StreamHandler()
fh = logging.FileHandler(filename='./server.log')
BASIC_FORMAT = "%(asctime)s %(filename)s[%(lineno)d] %(levelname)s %(message)s"
formatter = logging.Formatter(BASIC_FORMAT)
ch.setFormatter(formatter)
fh.setFormatter(formatter)
logger.addHandler(ch) #将日志输出至屏幕
logger.addHandler(fh) #将日志输出至文件

import test_api


# http://127.0.0.1:8000/docs
app = FastAPI()
# app = FastAPI(docs_url=None)

origins = [
    "http://localhost",
    "http://localhost:8081",
    "http://127.0.0.1:8081"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 捕获全部异常
@app.exception_handler(Exception)
async def all_exception_handler(request: Request, exc: Exception):
    # logging.error(f"全局异常\n{request.method}URL:{request.url}\nHeaders:{request.headers}\n{traceback.format_exc()}")
    raise HTTPException(status_code=500, detail="server error")



@app.get("/")
async def home():
    return {"message": "/"}


router = APIRouter()
router.include_router(test_api.router, prefix="/test", tags=["test"])

app.include_router(router)

logging.info("web server start...")

uvicorn.run(app, host="127.0.0.1", port=8000)


