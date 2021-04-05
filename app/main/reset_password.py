from main import bp
from flask import render_template
from flask import request


@bp.route("/reset-password", methods=['GET'])
def reset():
    token = request.args.get('token')

    if not token:
        return 'Please, follow instructions in email to reset password'

    return render_template('reset-password.html'), 200


@bp.route("/restore-password", methods=['GET'])
def restore():
    return render_template('restore-password.html'), 200
