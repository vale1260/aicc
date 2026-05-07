from flask import Blueprint, request, jsonify
from config import db, bcrypt
from models import Usuario, Matricula, Evaluacion, Estudiante, Profesor, Administrador, Curso
from flask_jwt_extended import get_jwt_identity, jwt_required

admin = Blueprint('admin', __name__)

# Registro de usuario (estudiante, profesor o administrador)
@admin.route("/signup", methods=["POST"])
@jwt_required()
def signup():
    # Verificar que el usuario sea administrador
    current_user = get_jwt_identity()
    if current_user['rol'] != 'administrador':
        return "Unauthorized", 403
    
    nombre = request.json["nombre"]
    apellido = request.json["apellido"]
    rut = request.json["rut"]
    dv = request.json["dv"]
    telefono = request.json["telefono"]
    email = request.json["email"]
    password = request.json["password"]
    # El frontend debe especificar el rol del usuario estáticamente en el código, dependiendo del tipo de usuario que se esté registrando
    rol = request.json["rol"]

    user_exists = Usuario.query.filter_by(email=email).first()

    if user_exists:
        return jsonify({"error": "Email already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Crear directamente una instancia de Estudiante, Profesor o Administrador
    if rol == 'estudiante':
        new_user = Estudiante(
            nombre=nombre,
            apellido=apellido,
            rut=rut,
            dv=dv,
            telefono=telefono,
            email=email,
            password=hashed_password,
            rol=rol
        )
    elif rol == 'profesor':
        if "curso_id" not in request.json or request.json["curso_id"] is None:
            return jsonify({"error": "Missing required field: curso_id"}), 400
        curso_id = request.json["curso_id"]
        curso_exists = Curso.query.get(curso_id)
        if not curso_exists:
            return jsonify({"error": "Course does not exist"}), 404
        new_user = Profesor(
            nombre=nombre,
            apellido=apellido,
            rut=rut,
            dv=dv,
            telefono=telefono,
            email=email,
            password=hashed_password,
            rol=rol,
            curso_id=curso_id
        )
    elif rol == 'administrador':
        new_user = Administrador(
            nombre=nombre,
            apellido=apellido,
            rut=rut,
            dv=dv,
            telefono=telefono,
            email=email,
            password=hashed_password,
            rol=rol
        )
    else:
        return jsonify({"error": "Invalid role"}), 400

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201


# Eliminar un usuario y sus datos asociados
@admin.route("/delete_user", methods=["POST"])
@jwt_required()
def delete_user():
    # Verificar que el usuario sea administrador
    current_user = get_jwt_identity()
    if current_user['rol'] != 'administrador':
        return "Unauthorized", 403

    # Obtener el correo del usuario de la petición
    email = request.json["email"]

    # Buscar el usuario
    user = Usuario.query.filter_by(email=email).first()

    if user:
        # Verificar que el usuario no sea un administrador
        if user.rol == 'administrador':
            return jsonify({"error": "Cannot delete an administrator"}), 403

        if user.rol == 'estudiante':
            # Buscar las matriculas del estudiante
            matriculas = Matricula.query.filter_by(estudiante_id=user.id).all()
            for matricula in matriculas:
                # Buscar y eliminar las evaluaciones asociadas a la matricula
                evaluaciones = Evaluacion.query.filter_by(matricula_id=matricula.id).all()
                for evaluacion in evaluaciones:
                    db.session.delete(evaluacion)
                db.session.commit()  # Asegurarse de que se eliminen las evaluaciones antes de eliminar la matricula

                # Eliminar la matricula
                db.session.delete(matricula)
            db.session.commit()  # Asegurarse de que se eliminen las matriculas antes de eliminar el estudiante

        # Eliminar el usuario (y el estudiante/profesor asociado)
        db.session.delete(user)
        db.session.commit()
        return jsonify({"message": "User deleted"}), 200
    else:
        return jsonify({"error": "User not found"}), 404