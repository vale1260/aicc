from flask import Blueprint, request, jsonify
from config import db, bcrypt
from models import Usuario
from flask_jwt_extended import create_access_token

auth = Blueprint('auth', __name__)

# Inicio de sesión
@auth.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]

    user = Usuario.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorized Access"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401

    # Crear un diccionario con la información del usuario
    user_info = {
        "id": user.id,
        "nombre": user.nombre,
        "apellido": user.apellido,
        "rut": user.rut,
        "dv": user.dv,
        "telefono": user.telefono,
        "email": user.email,
        "rol": user.rol
    }

    access_token = create_access_token(identity=user_info)
    return jsonify(access_token=access_token)