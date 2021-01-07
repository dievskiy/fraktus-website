import os


class Config(object):
    SECRET_KEY = os.environ['SECRET_KEY']
    MAIL_PORT = 465
    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_USE_SSL = True
    MAIL_USERNAME = os.environ['MAIL_USERNAME']
    MAIL_PASSWORD = os.environ['MAIL_PASSWORD']
    RECIPIENTS = os.environ['RECIPIENTS']
    SENDER = os.environ['SENDER']
