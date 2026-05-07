from flask import Blueprint, request, jsonify, current_app
from config import db
from werkzeug.utils import secure_filename
from models import Estudiante, Profesor, Matricula, Material, Evaluacion
import time
import datetime
import os
from flask_jwt_extended import get_jwt_identity, jwt_required

profesor = Blueprint('profesor', __name__)

# Subir material
@profesor.route('/upload/<curso_id>', methods=['POST'])
@jwt_required()
def upload_file(curso_id):
    current_app.config['UPLOAD_FOLDER'] = '../uploads/'  # Ruta donde se guardan los archivos (dos puntos para subir un nivel)
    
    # Verificar que el usuario sea profesor
    current_user = get_jwt_identity()
    if current_user['rol'] != 'profesor':
        return "Unauthorized", 403
    
    if 'file' not in request.files:
        return "No file part", 400

    file = request.files['file']

    if file.filename == '':
        return "No selected file", 400

    if file:
        # Generar un nombre único para el archivo
        timestamp = str(time.time())
        filename, file_extension = os.path.splitext(file.filename)
        filename = secure_filename(filename + "_" + timestamp + file_extension)

        # Crear una subcarpeta con el id del curso
        curso_folder = os.path.join(current_app.config['UPLOAD_FOLDER'], curso_id)
        if not os.path.exists(curso_folder):
            os.makedirs(curso_folder)

        # Almacenar el archivo en la subcarpeta
        file_path = os.path.join(curso_folder, filename)
        file.save(file_path)

        new_material = Material(
            nombre=filename,
            curso_id=curso_id,
            path=file_path,
            subido=datetime.datetime.utcnow()
        )

        db.session.add(new_material)
        db.session.commit()

        return "File successfully uploaded", 200
    else:
        return "File type not allowed", 400


# Obtener los estudiantes de un curso
@profesor.route('/get_students_in_course', methods=['GET'])
@jwt_required()
def get_students_in_course():
    # Verificar que el usuario sea profesor
    current_user = get_jwt_identity()
    if current_user['rol'] != 'profesor':
        return "Unauthorized", 403

    # Obtener el ID del curso del profesor actual
    profesor = Profesor.query.get(current_user['id'])
    curso_id = profesor.curso_id

    # Buscar las matrículas del curso
    matriculas = Matricula.query.filter_by(curso_id=curso_id).all()

    # Buscar los estudiantes de cada matrícula
    students = []
    for matricula in matriculas:
        estudiante = Estudiante.query.get(matricula.estudiante_id)
        students.append({
            'id': estudiante.id,
            'nombre': estudiante.nombre,
            'apellido': estudiante.apellido,
            'rut': estudiante.rut,
            'dv': estudiante.dv,
            'telefono': estudiante.telefono,
            'email': estudiante.email
        })

    # Devolver los estudiantes
    return jsonify(students)


# Obtener las evaluaciones de un estudiante en un curso específico
@profesor.route('/get_student_grades/<int:student_id>', methods=['GET'])
@jwt_required()
def get_student_grades(student_id):
    # Verificar que el usuario sea profesor
    current_user = get_jwt_identity()
    if current_user['rol'] != 'profesor':
        return "Unauthorized", 403

    # Obtener el ID del curso del profesor actual
    profesor = Profesor.query.get(current_user['id'])
    curso_id = profesor.curso_id

    # Buscar la matrícula del estudiante en el curso del profesor
    matricula = Matricula.query.filter_by(estudiante_id=student_id, curso_id=curso_id).first()
    if not matricula:
        return "Student is not enrolled in this course", 404

    # Buscar las evaluaciones de la matrícula
    evaluaciones = Evaluacion.query.filter_by(matricula_id=matricula.id).all()

    # Crear la lista de calificaciones
    grades = []
    for evaluacion in evaluaciones:
        grades.append({
            'estudiante': matricula.estudiante.nombre,
            'curso': matricula.curso.nombre,
            'nombre': evaluacion.nombre,
            'nota': evaluacion.nota,
            'comentario': evaluacion.comentario
        })

    # Devolver las calificaciones
    return jsonify(grades)