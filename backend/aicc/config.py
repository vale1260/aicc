from flask import Flask
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_cors import CORS
import secrets
from models import db
from flask_jwt_extended import JWTManager

app = Flask(__name__)

# Configuración de SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg://postgres:kj2aBv6f33cZ@postgresql:5432/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

# Configuración de JWT
app.config["JWT_SECRET_KEY"] = secrets.token_hex(16)

# Configuración de clave secreta, si quieren ver la llave, le pueden hacer un print nomas
app.secret_key = secrets.token_hex(16)

# Inicialización de extensiones
migrate = Migrate(app, db)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
CORS(app, supports_credentials=True)
db.init_app(app)