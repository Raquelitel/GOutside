"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Rol, Competition
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import (
    JWTManager, jwt_required, get_jwt_identity,
    create_access_token, get_jwt)
import json


api = Blueprint('api', __name__)


@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data["email"], password=data["password"]).first(
    )
    if user is None:
        return "Usuario incorrecto", 401
    accesss_token = create_access_token(identity=user.id)
    response_body = {
        "token": accesss_token,
        "user_id": user.id,
        "message": "Ususario registrado correctamente, acceso permitido",
        "rol": str(user.rol)
    }
    return jsonify(response_body), 200


@api.route('/competitions', methods=['GET'])
def get_all_competitions():
    all_competitions = Competition.query.order_by(Competition.id.asc()).all()
    competition_serializer = list(
        map(lambda param: param.serialize(), all_competitions))
    response_body = {
        "result": "obtenidas competiciones correctamente",
        "competitions": competition_serializer
    }
    return jsonify(response_body), 200


@api.route('/competition/<int:id>', methods=['GET'])
def get_one_competition(id):
    competition = Competition.query.get(id)
    competition_serializer = competition.serialize()
    response_body = {
        "result": "competición obtenida",
        "competition": competition_serializer
    }
    return jsonify(response_body), 200


@api.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    if data.get("password1") != data.get("password2"):
        return jsonify({"message": "Las contraseñas no coinciden"}), 403

    if User.query.filter_by(email=data.get("email")).first() == None:
        new_user = User(
            email=data.get("email"),
            password=data.get("password1")
        )
        db.session.add(new_user)
        db.session.commit()
        access_token = create_access_token(identity=new_user.id)
        return jsonify({"logged": True, "token": access_token, "message": "Usuario creado correctamente", "Competitor": new_user.serialize()}), 200
    else:
        return jsonify({"message": "Error, el email ya existe como usuario"}), 400


@api.route('/create-competition', methods=['POST'])
def create_competition():
    data = request.get_json()
    competition = Competition(
        competition_name=data["competition_name"],
        qualifier_date=data["qualifier_date"],
        location=data["location"],
        category=data["category"],
        requirements=data["requirements"],
        description=data["description"],
        create_at=data["create_at"],
        stage=data["stage"],
        competition_competitor=data["competition_competitor"]
    )
    db.session.add(competition)
    db.session.commit()
    response_body = {
        "result": "Competición añadida correctamente"
    }
    return jsonify(response_body), 200


@api.route('/create-competition/<int:competition_id>', methods=['PUT'])
def modify_competition(competition_id):
    data = request.get_json()
    competition = Competition.query.get(competition_id)
    if data is not None and competition:
        competition.competition_name = data["competition_name"],
        competition.qualifier_date = data["qualifier_date"],
        competition.location = data["location"],
        competition.category = data["category"],
        competition.requirements = data["requirements"],
        competition.description = data["description"],
        competition.create_at = data["create_at"],
        competition.stage = data["stage"],
        competition.competition_competitor = data["competition_competitor"]
        db.session.commit()

        response_body = {
            "result": "competición modificada correctamente"
        }

        return jsonify(response_body), 200

    return jsonify({"result": "competición no modificada"}), 400


@api.route('/upload', methods=['POST'])
def handle_upload():
    data = request.get_json()
    user = Competitor.query.filter_by(
        id=data["id"])

    if user is not None:
        result = cloudinary.uploader.upload(
            request.files["profile_image"], public_id=f'my_folder/photo')
        user.profile_image_url = result["secure_url"]

       # db.session.add(user)
        db.session.commit()
        return jsonify("all good"), 200
    return jsonify("error id doesn't exist"), 405
