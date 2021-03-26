from flask import Blueprint

bp = Blueprint('main', __name__)

from main import main
from main import blog
from main import privacy
from main import reset_password