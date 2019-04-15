from flask_sqlalchemy import SQLAlchemy
import datetime
db = SQLAlchemy()

class Quiz(db.Model):
    __tablename__='quiz'
    
    id= db.Column( 'id', db.Integer, primary_key=True)
    date_time = db.Column( db.DateTime, default = datetime.datetime.now )
    ans_q1 = db.Column('q1', db.String(6))
    ans_q2 = db.Column('q2', db.String(6))
    ans_q3 = db.Column('q3', db.String(6))
    ans_q4 = db.Column('q4', db.String(6))

    def __init__(self,ans1,ans2,ans3,ans4):
        self.ans_q1=ans1
        self.ans_q2=ans2
        self.ans_q3=ans3
        self.ans_q4=ans4
