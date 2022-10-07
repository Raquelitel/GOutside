import json
import enum
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Enum, DateTime
from datetime import datetime


db = SQLAlchemy()


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


class User(db.Model):
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
        'Competition_user', backref='user', lazy=True)
    qualifier_competitor = db.relationship(
        'Qualifier_competitor', backref='user', lazy=True)

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


class Competition_user(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    competitor_id = db.Column(db.Integer, db.ForeignKey(
        'user.id'), nullable=False)
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
        'Competition_user', backref='competition', lazy=True)

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
    user_id = db.Column(db.Integer, db.ForeignKey(
        'user.id'), nullable=False)


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
