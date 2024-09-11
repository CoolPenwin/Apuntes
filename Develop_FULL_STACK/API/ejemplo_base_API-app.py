### INSTRUCCIONES CREAR API DESDE 0  ###

## instalar python
##   pip install python(?)

## instalar flask
##   pip install flask


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

   # return jsonify({"KEY" : "VALUE"}) FORMATO .json

# Definimos una ruta para obtener la lista de alumnos que responde a solicitudes GET
@app.route("/alumnos" , methods=["GET"])
def traer_alumnos():
    # Devolvemos un mensaje y la lista de alumnos en formato JSON
    return jsonify({"msg" : "Estos son los alumnos del curso" , "listado": alumnos}





# AL FINAL  Ejecutamos la aplicación en modo debug en el puerto 5000
if __name__ == "__main__":
    app.run(debug=True , port=5000)


##----------------------------------------------------------------
## UNA VEZ CREADO

## iniciar archivo app
##  python3 app.py

## esto genera una direccion tipo 123.0.0.1:5000 <---puerto asignado en linea 42
## esta direccion la usaremos en POSTMAN y la pagina que hemos asignado en @app.route linea 23
##     [GET] 
##          123.0.0.1:5000/prueba
 
## devuelve lo que hay asignado en linea 26
##
##          {
##              "msg" : "Ruta funcionando correctamente"
##           }