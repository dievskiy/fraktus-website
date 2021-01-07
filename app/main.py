from flask import Flask
from config import Config
from mail import mail_server


def create_app(config_class=Config):
    app = Flask(__name__)

    app.config.from_object(config_class)

    from api import bp as api_bp
    app.register_blueprint(api_bp)

    from errors import bp as error_bp
    app.register_blueprint(error_bp)

    from main import bp as main_bp
    app.register_blueprint(main_bp)

    mail_server.init_app(app)

    return app


app = create_app()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=False)
