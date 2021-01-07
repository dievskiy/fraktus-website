from api import bp
from flask import request
from schemas.contact_message import ContactMessage
from flask_pydantic import validate
from flask_mail import Message
from mail import mail_server
from config import Config


@bp.route("/send-message", methods=['POST'])
@validate(body=ContactMessage)
def send_message():
    message_info = ContactMessage(**request.json)
    send_email(message_info)
    return {}, 201


def send_email(message_info):
    message = Message("fraktus", sender=Config.SENDER, recipients=[Config.RECIPIENTS])
    message.body = str(message_info)
    mail_server.send(message)
