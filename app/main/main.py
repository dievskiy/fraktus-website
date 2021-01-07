from main import bp
from flask import render_template


@bp.route("/", methods=['GET'])
def main():
    return render_template('index.html'), 200
