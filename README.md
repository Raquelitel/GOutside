# GOutsiede

<img src="./src/front/img/responsive.jpg"/>


## Tabla de Contenido.
1. [Descripción](#descripción)
2. [Stack](#Stack)
3. [Instalación](#Instalación)

### 📝 Descripción
GOutside es una aplicación web pensada para gestionar eventos deportivos. 
- ¿Quieres crear y controlar tus propios eventos deportivos?
   * Los administradores podrán crear los eventos y en una única plataforma permitir que los deportistas se inscriban a las mismas
- ¿Quieres estar al tanto de todas las competiciones de tu país?
    * Regístrate como Goutsider, revisa las competiciones que se encuentran en fase de inscripción y apúntate a las de tu elección

### 💻 Stack


FRONT-END

<p align="left">
<a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
<a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> 
<a href="https://getbootstrap.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a>
  

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="60" height="40" alt="React" /></a>


BACK-END


<a href="https://www.python.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" width="36" height="36" alt="Python" /></a>
<a href="https://flask.palletsprojects.com/en/2.0.x/" target="_blank" rel="noreferrer"><img src="https://miro.medium.com/max/1198/1*80vkyHOABsohPadzQjfEbQ.png" width="100" height="36" alt="Flask" /></a>
<a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="36" height="36" alt="MySQL" /></a>

API's EXTERNAS

<a href="https://antoniofernandez.com/assets/blog/cloudinary.png" target="_blank" rel="noreferrer"><img src="https://antoniofernandez.com/assets/blog/cloudinary.png" width="36" height="36" alt="MySQL" /></a>
<a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/YouTube_social_white_squircle.svg/2048px-YouTube_social_white_squircle.svg.png" width="36" height="36" alt="MySQL" /></a>



### 💾 Instalación:

#### Instalación Back-End:

Es recomendable instalar primero el back-end, asegurate de tener Python 3.8, Pipenv y un motor de base de datos (se recomienda Posgress)

1. Instalar los paquetes de python: `$ pipenv install`
2. Crear un archivo .env basado en el .env.example: `$ cp .env.example .env`
3. Instala tu motor de base de datos y crea tu base de datos, dependiendo de tu base de datos tienes que crear una variable DATABASE_URL con uno de los posibles valores, asegúrate de reemplazar con la información de tu base de datos:

| Engine    | DATABASE_URL                                        |
| --------- | --------------------------------------------------- |
| SQLite    | sqlite:////test.db                                  |
| MySQL     | mysql://username:password@localhost:port/example    |
| Postgress | postgres://username:password@localhost:5432/example |
 
 ###

4. Migrar las migraciones: `$ pipenv run migrate` (omitir si no ha realizado cambios en los modelos `./src/api/models.py`)
5. Ejecutar las migraciones: `$ pipenv run upgrade`
6. Instalar JWT : `$ pipenv install Flask-JWT`
7. Instalar Bcrypt: `$ pipenv install flask-bcrypt`
8. Instalar Flask-Mail: `$ pipenv install Flask-Mail`
9. Ejecutar la aplicación: `$ pipenv run start`


#### Instalación Front-End:

-   Asegúrate de que utilizas la versión 14+ de Node y de que ya has instalado y ejecutado con éxito el backend.

1. Instalar los paquetes: `$ npm install`
2. Comienza a codificar! inicia el servidor de desarrollo de webpack `$ npm run start`
###

## 🚀 Proyecto desplegado :

https://goutside.herokuapp.com/
