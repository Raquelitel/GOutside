from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Enum, DateTime, datetime
from enum import Enum
from datetime import datetime

db = SQLAlchemy()


class Rol(enum.Enum):
    admin = 1
    competitor = 2

class Gender(enum.Enum):
    masculino = 1
    femenino = 2


class Competitor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=True)
    password = db.Column(db.String(40), unique=False, nullable=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    adress = db.Column(db.String(240), unique=False, nullable=False)
    gender = db.Column(Enum(Gender))
    phone = db.Column(db.Integer, unique=False, nullable=False)
    rol = db.Column(Enum(Rol))
    competition_competitor = db.relationship(
        'Competition_competitor', backref='competitor', lazy=True)
    qualifier_competitor = db.relationship(
        'Qualifier_competitor', backref='competitor', lazy=True)


class Admin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=True)
    password = db.Column(db.String(40), unique=False, nullable=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    adress = db.Column(db.String(240), unique=False, nullable=False)
    phone = db.Column(db.Integer, unique=False, nullable=False)
    vat = db.Column(db.Integer, unique=False, nullable=False)


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
    qualifier_date = db.Column(db.DateTime(default=datetime.datetime.utcnow))
    location = db.Column(db.String(240), unique=False, nullable=False)
    category = db.Column(Enum(Category))
    requirements = db.Column(db.String(500), unique=False, nullable=False)
    description = db.Column(db.String(500), unique=False, nullable=False)
    create_at = db.Column(db.DateTime(default=datetime.datetime.utcnow))
    stage = db.Column(db.String(80), unique=False, nullable=False)
    competition_competitor = db.relationship(
        'Competition_competitor', backref='competition', lazy=True)


class Qualifier_competitor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    qualifier_id = db.Column(db.Integer, db.ForeignKey(
        'qualifier.id'), nullable=False)
    competitor_id = db.Column(db.Integer, db.ForeignKey(
        'competitor.id'), nullable=False)


class Qualifier(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    media = db.Column(db.String(240), unique=False, nullable=False)
    comment = db.Column(db.String(500), unique=False, nullable=False)
    previous_result = db.Column(db.Integer, unique=False, nullable=False)
    qualifier_competitor = db.relationship(
        'Qualifier_competitor', backref='qualifier', lazy=True)
