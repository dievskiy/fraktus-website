from main import bp
from flask import render_template


@bp.route("/privacy-policy", methods=['GET'])
def privacy():
    return render_template('privacy-policy.html')