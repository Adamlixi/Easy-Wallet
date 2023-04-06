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
    RETCODE.OK                 : "Succeed.",
    RETCODE.USERDATANOTEXIST   : "USER NOT EXIST.",
    RETCODE.SENDEMAILFAILED     : "Send email failed.",
    RETCODE.EMAILEXPIRED        : "Email code expired.",
    RETCODE.CODEERROR           : "Error.",
    RETCODE.USERHASREGISTERED   : "User has registered.",
    RETCODE.ERROR               : "ERROR."
}