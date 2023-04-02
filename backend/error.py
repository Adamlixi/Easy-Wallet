from enum import Enum
class RETCODE():
    OK                  = "0"
    ERROR               = "-1"
    USERDATANOTEXIST    = "1"
    SENDEMAILFAILED     = "2"
    EMAILEXPIRED        = "3"
    CODEERROR           = "4"
    USERHASREGISTERED   = "5"   

err_msg = {
    RETCODE.OK                 : "成功",
    RETCODE.USERDATANOTEXIST   : "USER NOT EXIST",
    RETCODE.SENDEMAILFAILED     : "2",
    RETCODE.EMAILEXPIRED        : "3",
    RETCODE.CODEERROR           : "4",
    RETCODE.USERHASREGISTERED   : "5"
}