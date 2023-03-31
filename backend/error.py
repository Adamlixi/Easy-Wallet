class RETCODE:
    OK                  = "0"
    ERROR               = "-1"
    USERDATANOTEXIST    = "1"
    SENDEMAILFAILED     = "2"
    EMAILEXPIRED        = "3"
    CODEERROR           = "4"
    USERHASREGISTERED   = "5"
    

err_msg = {
    RETCODE.OK                 : "成功",
    RETCODE.USERDATANOTEXIST   : "USER NOT EXIST"
}