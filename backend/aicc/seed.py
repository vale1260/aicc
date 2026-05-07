# Este archivo se encarga de crear datos falsos para la base de datos.
# Su ejecución se realiza al momento de crear el contenedor del backend. Esto está definido en el archivo "entrypoint.sh"

from faker import Faker
from models import Estudiante, Profesor, Administrador, Curso, Matricula, Material, Horario, Evaluacion
from config import app, db, bcrypt
import random
import csv

fake = Faker()

numero_datos = 10   # Cantidad de datos a insertar en cada tabla


def create_fake_data():
    with app.app_context():
        # Primero, crear todos los cursos
        for _ in range(numero_datos):
            create_fake_curso()

        # Luego, crear los estudiantes
        for _ in range(numero_datos):
            create_fake_estudiante()

        # Luego, crear los profesores y administradores
        for _ in range(numero_datos):
            create_fake_profesor()
            create_fake_administrador()

        # Finalmente, crear el resto de los datos
        for _ in range(numero_datos):
            create_fake_matricula()
            create_fake_evaluacion()
            create_fake_material()
            create_fake_horario()

        db.session.commit()


def write_to_csv(email, password, rol):
    # Almacenar email y password en un diccionario
    dictionary = {
        "email": email,
        "password": password,
        "rol": rol
    }
    
    # Almacenar el diccionario en un archivo csv
    with open("fake_usuario.csv", "a") as file:
        writer = csv.DictWriter(file, fieldnames=dictionary.keys())
        # Si el archivo está vacío, escribir el header
        if file.tell() == 0:
            writer.writeheader()
        writer.writerow(dictionary)


def create_fake_curso():
    curso = Curso(
        nombre=fake.word(),
        descripcion=fake.text()
    )
    db.session.add(curso)


def create_fake_estudiante():
    # Generar password aleatorio
    password=fake.password()
    
    # Encriptar password con bcrypt
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    
    email=fake.email()  # Generar email aleatorio
    
    estudiante = Estudiante(
        nombre=fake.first_name(),
        apellido=fake.last_name(),
        rut=random.randint(10000000, 30000000),
        dv=str(random.randint(0, 9)),
        email=email,
        telefono=fake.phone_number(),
        password=hashed_password,
    )
    
    db.session.add(estudiante)
    db.session.commit()
    
    # Escribir los datos en el archivo CSV
    write_to_csv(email, password, 'estudiante')


def create_fake_profesor():
    # Generar password aleatorio
    password=fake.password()
    
    # Encriptar password con bcrypt
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    
    email=fake.email()  # Generar email aleatorio
    
    profesor = Profesor(
        nombre=fake.first_name(),
        apellido=fake.last_name(),
        rut=random.randint(10000000, 30000000),
        dv=str(random.randint(0, 9)),
        email=email,
        telefono=fake.phone_number(),
        password=hashed_password,
        curso_id=random.randint(1, numero_datos)
    )
    
    db.session.add(profesor)
    db.session.commit()
    
    # Escribir los datos en el archivo CSV
    write_to_csv(email, password, 'profesor')


def create_fake_administrador():
    # Generar password aleatorio
    password=fake.password()
    
    # Encriptar password con bcrypt
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    
    email=fake.email()  # Generar email aleatorio
    
    administrador = Administrador(
        nombre=fake.first_name(),
        apellido=fake.last_name(),
        rut=random.randint(10000000, 30000000),
        dv=str(random.randint(0, 9)),
        email=email,
        telefono=fake.phone_number(),
        password=hashed_password,
    )
    
    db.session.add(administrador)
    db.session.commit()
    
    # Escribir los datos en el archivo CSV
    write_to_csv(email, password, 'administrador')


def create_fake_matricula():
    matricula = Matricula(
        estudiante_id=random.randint(1, numero_datos),
        curso_id=random.randint(1, numero_datos),
        fecha=fake.date_between(start_date='-1y', end_date='today'),
        estado=bool(random.getrandbits(1))
    )
    db.session.add(matricula)


def create_fake_evaluacion():
    evaluacion = Evaluacion(
        matricula_id=random.randint(1, numero_datos),
        nombre=fake.sentence(nb_words=6),
        nota=round(random.uniform(1.0, 7.0), 1),
        comentario=fake.text(max_nb_chars=200)
    )
    db.session.add(evaluacion)


def create_fake_material():
    material = Material(
        nombre=fake.file_name(),
        curso_id=random.randint(1, numero_datos),
        path=fake.file_path(),
        subido=fake.date_time_this_year()
    )
    db.session.add(material)


def create_fake_horario():
    horario = Horario(
        inicio=fake.time(),
        fin=fake.time(),
        curso_id=random.randint(1, numero_datos)
    )
    db.session.add(horario)


if __name__ == "__main__":
    create_fake_data()