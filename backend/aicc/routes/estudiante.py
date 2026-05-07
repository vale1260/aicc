from flask import Blueprint, request, jsonify
from config import db
from models import Curso, Matricula
import datetime
from flask_jwt_extended import get_jwt_identity, jwt_required

estudiante = Blueprint('estudiante', __name__)

# Matricular a un estudiante en un curso
@estudiante.route('/enroll_in_course', methods=['POST'])
@jwt_required()
def enroll_in_course():
    # Verificar que el usuario sea estudiante
    current_user = get_jwt_identity()
    if current_user['rol'] != 'estudiante':
        return "Unauthorized", 403

    # Obtener el ID del curso del cuerpo de la solicitud
    curso_id = request.json.get('curso_id')

    # Buscar el curso en la base de datos
    curso = Curso.query.get(curso_id)
    if not curso:
        return "Course not found", 404

    # Crear la nueva matrícula
    matricula = Matricula(
        estudiante_id=current_user['id'],
        curso_id=curso_id,
        fecha=datetime.datetime.utcnow(),
        estado=True
    )

    # Agregar la matrícula a la base de datos
    db.session.add(matricula)
    db.session.commit()

    return "Enrollment successful", 200


# Obtener los cursos en los que está matriculado un estudiante
@estudiante.route('/get_enrolled_courses', methods=['GET'])
@jwt_required()
def get_enrolled_courses():
    # Verificar que el usuario sea estudiante
    current_user = get_jwt_identity()
    if current_user['rol'] != 'estudiante':
        return "Unauthorized", 403

    # Buscar las matrículas del estudiante en la base de datos
    matriculas = Matricula.query.filter_by(estudiante_id=current_user['id']).all()
    if not matriculas:
        return "You are not enrolled in any courses", 404

    # Crear la lista de cursos
    courses = []
    for matricula in matriculas:
        if matricula.estado:
            courses.append({
                'curso_id': matricula.curso_id,
                'nombre': matricula.curso.nombre,
                'descripcion': matricula.curso.descripcion
            })
        else:
            courses.append({
                'curso_id': matricula.curso_id,
                'nombre': matricula.curso.nombre,
                'descripcion': matricula.curso.descripcion,
                'mensaje': 'Your enrollment in this course is invalidated'
            })

    # Devolver los cursos
    return jsonify(courses)