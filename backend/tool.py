import error
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart 
import random
import string
 
from collections import UserDict
from threading import RLock, Lock
import time



msg_from = '675212976@qq.com'  # 发送方邮箱
passwd = 'tnvqpbjhojctbbgb'   #就是上面的授权码

def sendEmail(userEmail:str):
    #设置邮件内容
    #MIMEMultipart类可以放任何内容
    msg = MIMEMultipart()
    randomCode = ''.join(random.sample(string.ascii_lowercase + string.ascii_uppercase, 5))
    conntent="Your verification code is: " + randomCode
    #把内容加进去
    msg.attach(MIMEText(conntent,'plain','utf-8'))
    #设置邮件主题
    msg['Subject']="Easy Wallet Login Verification Code"
    #发送方信息
    msg['From']=msg_from
    #开始发送
    try:
        #通过SSL方式发送，服务器地址和端口
        s = smtplib.SMTP_SSL("smtp.qq.com", 465)
        # 登录邮箱
        s.login(msg_from, passwd)
        #开始发送
        s.sendmail(msg_from,[userEmail],msg.as_string())
    except smtplib.SMTPException:
        return error.RETCODE.SENDEMAILFAILED, ""
    return error.RETCODE.OK, randomCode



class TTLDict(UserDict):
    def __init__(self, *args, **kwargs):
        self._rlock = RLock()
        self._lock = Lock()

        super().__init__(*args, **kwargs)

    def __repr__(self):
        return '<TTLDict@%#08x; %r;>' % (id(self), self.data)

    def expire(self, key, ttl, now=None):
        if now is None:
            now = time.time()
        with self._rlock:
            _expire, value = self.data[key]
            self.data[key] = (now + ttl, value)

    def ttl(self, key, now=None):
        if now is None:
            now = time.time()
        with self._rlock:
            expire, _value = self.data[key]
            if expire is None:
                # Persistent keys
                return -1
            elif expire <= now:
                # Expired keys
                del self[key]
                return -2
            return expire - now

    def setex(self, key, ttl, value):
        with self._rlock:
            expire = time.time() + ttl
            self.data[key] = (expire, value)

    def __len__(self):
        with self._rlock:
            for key in list(self.data.keys()):
                self.ttl(key)
            return len(self.data)

    def __iter__(self):
        with self._rlock:
            for k in self.data.keys():
                ttl = self.ttl(k)
                if ttl != -2:
                    yield k

    def __setitem__(self, key, value):
        with self._lock:
            self.data[key] = (None, value)

    def __delitem__(self, key):
        with self._lock:
            del self.data[key]

    def __getitem__(self, key):
        with self._rlock:
            self.ttl(key)
            return self.data[key][1]


if __name__ == "__main__":
    sendEmail("handsomeadam@126.com")
    