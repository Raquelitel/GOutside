"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Administration, Competitor, Rol
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import (
    JWTManager, jwt_required, get_jwt_identity,
    create_access_token, get_jwt)
import json

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


@api.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    if data.get("password1") != data.get("password2"):
        return jsonify({"message": "Las contraseñas no coinciden"}), 403

    if Competitor.query.filter_by(email=data.get("email")).first() == None:
        new_competitor = Competitor(
            email=data.get("email"),
            password=data.get("password1")
        )
        db.session.add(new_competitor)
        db.session.commit()
        access_token = create_access_token(identity=new_competitor.id)
        return jsonify({"logged": True, "token": access_token, "message": "Usuario creado correctamente", "Competitor": new_competitor.serialize()}), 200
    else:
        return jsonify({"message": "Error, el email ya existe como usuario"}), 400
