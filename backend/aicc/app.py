from config import app
from flask import jsonify
from models import Usuario, Curso, Horario
from flask_jwt_extended import get_jwt_identity, jwt_required
from routes.auth import auth
from routes.estudiante import estudiante
from routes.profesor import profesor
from routes.admin import admin

# Registro de Blueprints
app.register_blueprint(auth, url_prefix='/auth')
app.register_blueprint(estudiante, url_prefix='/estudiante')
app.register_blueprint(profesor, url_prefix='/profesor')
app.register_blueprint(admin, url_prefix='/admin')


@app.route('/')
def bienvenida():
    return "AICC BACKEND"


# Obtener nombre de todos los cursos
@app.route('/get_all_courses', methods=['GET'])
def get_all_courses():
    # Buscar todos los cursos
    cursos = Curso.query.all()

    # Extraer los nombres de los cursos
    course_names = [curso.nombre for curso in cursos]

    # Devolver los nombres de los cursos
    return jsonify(course_names)


# Obtener datos del usuario de la sesión actual
@app.route("/get_user_data", methods=["GET"])
@jwt_required()
def get_user_data():
    # Obtener la identidad del usuario actual
    current_user = get_jwt_identity()

    # Buscar el usuario en la base de datos
    user = Usuario.query.filter_by(email=current_user['email']).first()

    if user:
        # Devolver los datos del usuario
        return jsonify({
            "nombre": user.nombre,
            "apellido": user.apellido,
            "rut": user.rut,
            "dv": user.dv,
            "telefono": user.telefono,
            "email": user.email,
            "rol": user.rol
        }), 200
    else:
        return jsonify({"error": "User not found"}), 404


# Obtener todos los horarios
@app.route('/horarios', methods=['GET'])
def get_all_horarios():
    # Obtener todos los horarios
    horarios = Horario.query.all()

    # Convertir los horarios en diccionarios
    horarios_dict = [{
        "id": horario.id,
        "inicio": str(horario.inicio),
        "fin": str(horario.fin),
        "curso_id": horario.curso_id
    } for horario in horarios]

    # Devolver los horarios en la respuesta
    return jsonify(horarios_dict), 200


# Obtener los horarios de un curso
@app.route('/cursos/<int:curso_id>/horarios', methods=['GET'])
def get_horarios(curso_id):
    # Obtener los horarios del curso
    horarios = Horario.query.filter_by(curso_id=curso_id).all()

    # Convertir los horarios en diccionarios
    horarios_dict = [{
        "id": horario.id,
        "inicio": str(horario.inicio),
        "fin": str(horario.fin),
        "curso_id": horario.curso_id
    } for horario in horarios]

    # Devolver los horarios en la respuesta
    return jsonify(horarios_dict), 200


if __name__ == "__main__":
    app.run(debug=True)