"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Administration, Competition
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import (
    JWTManager, jwt_required, get_jwt_identity,
    create_access_token, get_jwt)

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data["email"], password=data["password"]).first(
    ) or Administration.query.filter_by(email=data["email"], password=data["password"]).first()
    if user is None:
        return "Usuario incorrecto", 401
    accesss_token = create_access_token(identity=user.id)
    response_body = {
        "token": accesss_token,
        "user_id": user.id,
        "message": "Ususario registrado correctamente, acceso permitido"
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


@api.route('/competition/<int:id>')
def get_one_competition(id):
    competition = Competition.query.get(id)
    competition_serializer = competition.serialize()
    response_body = {
        "result": "competición obtenida",
        "competition": competition_serializer
    }
    return jsonify(response_body), 200
