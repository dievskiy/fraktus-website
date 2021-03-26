import os


class Config(object):
    MAIL_PORT = 465
    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_USE_SSL = True
    MAIL_USERNAME = os.getenv('MAIL_USERNAME')
    MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')
    RECIPIENTS = os.getenv('RECIPIENTS')
    SENDER = os.getenv('SENDER')
