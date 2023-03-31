import sqlite3
import os
import logging
logger = logging.getLogger()

class simpleToolSql():
    """
    simpleToolSql for sqlite3
    简单数据库工具类
    编写这个类主要是为了封装sqlite 继承此类复用方法
    """

    def __init__(self,filename="stsql"):
        """
        初始化数据库，默认文件名 stsql.db
        filename 文件名
        """
        self.filename = filename + ".db"
        self.db = sqlite3.connect(self.filename)
        self.c = self.db.cursor()
        
    def close(self):
        """
        关闭数据库
        """
        self.c.close()
        self.db.close()

    def execute(self,sql,param=None):
        """
        执行数据库的增、删、改
        sql:sql语句
        param:数据 可以是list或tuple,亦可是None
        retutn:成功返回True
        """
        try:
            if param is None:
                self.c.execute(sql)
            else:
                if type(param) is list:
                    self.c.executemany(sql,param)
                else :
                    self.c.execute(sql,param)
            count = self.db.total_changes
            self.db.commit()
        except Exception as e:
            print(e)
            return False,e
        if count > 0 :
            return True
        else :
            return False

    def query(self,sql,param=None):
        """
        查询语句
        sql:sql语句
        param:参数,可为None
        retutn:成功返回True
        """
        if param is None:
            self.c.execute(sql)
        else:
            self.c.execute(sql,param)
        return self.c.fetchall()
        
    # def set(self,table,field=" * ",where="",isWhere=False):
    #     self.table = table
    #     self.filed = field
    #     if where != "" :
    #         self.where = where
    #         self.isWhere = True
    #     return True


sql = simpleToolSql("test")

def newUser(email:str, mapping:str):
    f = sql.execute("insert into user (email, mapping) values (?, ?);", email, mapping)
    return f

def fetchMapping(email:str):
    r = sql.query("select * from user where email=?;", email)
    return r

def getUser(email:str):
    r = sql.query("select * from user where email=?;", email)
    return r

if __name__ == "__main__":
    """
    测试代码
    """
    sql = simpleToolSql("test")
    f = sql.execute("create table test (id int not null,name text not null,age int);")
    print("ok")
    sql.execute("insert into test (id,name,age) values (?,?,?);",[(1,'abc',15),(2,'bca',16)])
    res = sql.query("select * from test;")
    print(res)
    res = sql.query("select * from test where id=100;")
    print(res)
    sql.execute("insert into test (id,name) values (?,?);",(3,'bac'))
    res = sql.query("select * from test where id=?;",(3,))
    print(res)
    sql.close()