from flask import Flask , jsonify
from alumnos import alumnos





app = Flask(__name__)




@app.route("/prueba" , methods=["GET"])
def prueba():
    return jsonify({"msg" : "Ruta funcionando correctamente"})


@app.route("/alumnos" , methods=["GET"])
def traer_alumnos():
    return jsonify({"msg" : "Estos son los alumnos del curso" , "listado": alumnos}







if __name__ == "__main__":
    app.run(debug=True , port=5000)