from fastapi import APIRouter, Depends, Request, HTTPException
import response_util
import logging

logger = logging.getLogger()


router = APIRouter()

@router.get("/echo")
async def echo(val:int, str:str):
    logger.info(f"test val {val} str {str}")
    return response_util.success()

