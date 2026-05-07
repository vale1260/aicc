from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship

db = SQLAlchemy()

class Usuario(db.Model):
    __tablename__ = 'usuario'

    id = db.Column(db.Integer, primary_key=True, unique=True)
    nombre = db.Column(db.String(35), nullable=False)
    apellido = db.Column(db.String(35), nullable=False)
    rut = db.Column(db.Integer, nullable=False)
    dv = db.Column(db.String(1), nullable=False)
    telefono = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.Text, nullable=False)
    rol = db.Column(db.String(50))

    __mapper_args__ = {
        'polymorphic_identity':'usuario',
        'polymorphic_on':rol
    }


class Estudiante(Usuario):
    __tablename__ = "estudiante"
    
    id = db.Column(db.Integer, db.ForeignKey('usuario.id'), primary_key=True)

    __mapper_args__ = {
        'polymorphic_identity':'estudiante',
    }


class Profesor(Usuario):
    __tablename__ = 'profesor'

    id = db.Column(db.Integer, db.ForeignKey('usuario.id'), primary_key=True)
    curso_id = db.Column(db.Integer, db.ForeignKey('curso.id'), nullable=False)
    
    curso = relationship('Curso', foreign_keys=[curso_id])

    __mapper_args__ = {
        'polymorphic_identity':'profesor',
    }


class Administrador(Usuario):
    __tablename__ = 'administrador'

    id = db.Column(db.Integer, db.ForeignKey('usuario.id'), primary_key=True)

    __mapper_args__ = {
        'polymorphic_identity':'administrador',
    }


class Curso(db.Model):
    __tablename__ = 'curso'

    id = db.Column(db.Integer, primary_key=True, unique=True)
    nombre = db.Column(db.String(35), nullable=False)
    descripcion = db.Column(db.Text, nullable=False)


class Matricula(db.Model):
    __tablename__ = 'matricula'

    id = db.Column(db.Integer, primary_key=True, unique=True)
    estudiante_id = db.Column(db.Integer, db.ForeignKey('estudiante.id'), nullable=False)
    curso_id = db.Column(db.Integer, db.ForeignKey('curso.id'), nullable=False)
    fecha = db.Column(db.DateTime, nullable=False)
    estado = db.Column(db.Boolean, nullable=False)
    
    estudiante = relationship('Estudiante', foreign_keys=[estudiante_id])
    curso = relationship('Curso', foreign_keys=[curso_id])


class Evaluacion(db.Model):
    __tablename__ = 'evaluacion'

    id = db.Column(db.Integer, primary_key=True, unique=True)
    matricula_id = db.Column(db.Integer, db.ForeignKey('matricula.id'), nullable=False)
    nombre = db.Column(db.String(100), nullable=False)
    nota = db.Column(db.Float, nullable=False)
    comentario = db.Column(db.Text, nullable=False)
    
    matricula = relationship('Matricula', foreign_keys=[matricula_id])


class Material(db.Model):
    __tablename__ = 'material'

    id = db.Column(db.Integer, primary_key=True, unique=True)
    nombre = db.Column(db.String(100), nullable=False)
    curso_id = db.Column(db.Integer, db.ForeignKey('curso.id'), nullable=False)
    path = db.Column(db.String, nullable=False)
    subido = db.Column(db.DateTime, nullable=False)
    
    curso = relationship('Curso', foreign_keys=[curso_id])


class Horario(db.Model):
    __tablename__ = 'horario'

    id = db.Column(db.Integer, primary_key=True, unique=True)
    inicio = db.Column(db.Time, nullable=False)
    fin = db.Column(db.Time, nullable=False)
    curso_id = db.Column(db.Integer, db.ForeignKey('curso.id'), nullable=False)
    
    curso = relationship('Curso', foreign_keys=[curso_id])