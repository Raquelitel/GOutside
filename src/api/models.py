import json
import enum
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Enum, DateTime
from datetime import datetime


db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }


class Rol(enum.Enum):
    competitor = 1
    administration = 2

    def serialize(self):
        return {
            "administration": self.administration,
            "competitor": self.competitor
        }


class Gender(enum.Enum):
    masculino = 1
    femenino = 2


class Competitor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(40), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=True)
    last_name = db.Column(db.String(120), unique=False, nullable=True)
    adress = db.Column(db.String(240), unique=False, nullable=True)
    gender = db.Column(Enum(Gender), nullable=True)
    phone = db.Column(db.Integer, unique=False, nullable=True)
    rol = db.Column(Enum(Rol, name="name"),
                    default="competitor", nullable=False)
    competition_competitor = db.relationship(
        'Competition_competitor', backref='competitor', lazy=True)
    qualifier_competitor = db.relationship(
        'Qualifier_competitor', backref='competitor', lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "adress": self.adress,
            "gender": self.gender,
            "phone": self.phone,
            "rol": str(self.rol)
        }


class Administration(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(40), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=True)
    last_name = db.Column(db.String(120), unique=False, nullable=True)
    adress = db.Column(db.String(240), unique=False, nullable=True)
    phone = db.Column(db.Integer, unique=False, nullable=True)
    vat = db.Column(db.Integer, unique=False, nullable=True)
    rol = db.Column(db.Enum(Rol))

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "adress": self.adress,
            "phone": self.phone,
            "vat": self.vat,
            "rol": self.rol
        }


class Competition_competitor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    competitor_id = db.Column(db.Integer, db.ForeignKey(
        'competitor.id'), nullable=False)
    competition_id = db.Column(db.Integer, db.ForeignKey(
        'competition.id'), nullable=False)


class Category(enum.Enum):
    rx_femenino = 1
    rx_masculino = 2
    scalled_femenino = 3
    scalled_masculino = 4
    elite_femenino = 5
    elite_masculino = 6
    equipos = 7


class Competition(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    competition_name = db.Column(db.String(120), unique=False, nullable=False)
    qualifier_date = db.Column(db.DateTime())
    location = db.Column(db.String(240), unique=False, nullable=False)
    category = db.Column(Enum(Category), nullable=False)
    requirements = db.Column(db.String(500), unique=False, nullable=False)
    description = db.Column(db.String(500), unique=False, nullable=False)
    create_at = db.Column(db.DateTime())
    stage = db.Column(db.String(80), unique=False, nullable=False)
    competition_competitor = db.relationship(
        'Competition_competitor', backref='competition', lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "competition_name": self.competition_name,
            "qualifier_date": self.qualifier_date,
            "location": self.location,
            "category": self.category,
            "requirements": self.requirements,
            "description": self.description,
            "create_at": self.create_at,
            "stage": self.stage
        }


class Qualifier_competitor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    qualifier_id = db.Column(db.Integer, db.ForeignKey(
        'qualifier.id'), nullable=False)
    competitor_id = db.Column(db.Integer, db.ForeignKey(
        'competitor.id'), nullable=False)


class Qualifier(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    media = db.Column(db.String(240), unique=False, nullable=True)
    comment = db.Column(db.String(500), unique=False, nullable=True)
    previous_result = db.Column(db.Integer, unique=False, nullable=True)
    qualifier_competitor = db.relationship(
        'Qualifier_competitor', backref='qualifier', lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "media": self.media,
            "comment": self.comment,
            "previous_result": self.previous_result
        }
