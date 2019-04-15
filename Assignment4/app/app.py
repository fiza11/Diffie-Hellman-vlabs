from flask import Flask
from .controller import main
from .models import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.register_blueprint(main)

db.init_app(app)


if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
