
def success(data=None):
    return result(1, "", data)

def fail(msg=None):
    return {"code":0, "msg":msg}

def result(code, msg, data):
    if data:
        return {"code":code, "msg":msg, "data":data}
    else:
        return {"code":code, "msg":msg}
