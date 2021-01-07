from main import bp
from flask import render_template


@bp.route("/blog", methods=['GET'])
def blog():
    return render_template('blog.html')


@bp.route("/blogpost-001", methods=['GET'])
def blog_1():
    return render_template('blogpost-001.html')
