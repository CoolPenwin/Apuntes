# Importamos Flask y jsonify para crear la aplicación y devolver respuestas en formato JSON
from flask import Flask , jsonify 
# Importamos la lista de alumnos desde un módulo llamado alumnos
from alumnos import alumnos 




# Creamos una instancia de la aplicación Flask
app = Flask(__name__)



# Definimos una ruta de prueba que responde a solicitudes GET
@app.route("/prueba" , methods=["GET"])
def prueba():
    # Devolvemos un mensaje en formato JSON para verificar que la ruta funciona
    return jsonify({"msg" : "Ruta funcionando correctamente"})


# Definimos una ruta para obtener la lista de alumnos que responde a solicitudes GET
@app.route("/alumnos" , methods=["GET"])
def traer_alumnos():
    # Devolvemos un mensaje y la lista de alumnos en formato JSON
    return jsonify({"msg" : "Estos son los alumnos del curso" , "listado": alumnos}






# AL FINAL  Ejecutamos la aplicación en modo debug en el puerto 5000
if __name__ == "__main__":
    app.run(debug=True , port=5000)