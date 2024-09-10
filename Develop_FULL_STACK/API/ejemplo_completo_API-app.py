# Importamos Flask y jsonify para crear la aplicación y devolver respuestas en formato JSON
from flask import Flask, jsonify, request  # Añadimos request para manejar datos de las solicitudes
# Importamos la lista de alumnos desde un módulo llamado alumnos
from alumnos import alumnos 

# Creamos una instancia de la aplicación Flask
app = Flask(__name__)

# Definimos una ruta de prueba que responde a solicitudes GET
@app.route("/prueba", methods=["GET"])
def prueba():
    # Devolvemos un mensaje en formato JSON para verificar que la ruta funciona
    return jsonify({"msg": "Ruta funcionando correctamente"})

# Definimos una ruta para obtener la lista de alumnos que responde a solicitudes GET
@app.route("/alumnos", methods=["GET"])
def traer_alumnos():
    # Devolvemos un mensaje y la lista de alumnos en formato JSON
    return jsonify({"msg": "Estos son los alumnos del curso", "listado": alumnos})

# Aquí puedes añadir más rutas y funcionalidades

# Ruta para agregar un nuevo alumno
@app.route("/alumnos", methods=["POST"])
def agregar_alumno():
    nuevo_alumno = request.json  # Obtenemos los datos del nuevo alumno desde la solicitud
    alumnos.append(nuevo_alumno)  # Añadimos el nuevo alumno a la lista
    return jsonify({"msg": "Alumno agregado correctamente", "alumno": nuevo_alumno}), 201  # Devolvemos una respuesta con el nuevo alumno

# Ruta para actualizar un alumno existente
@app.route("/alumnos/<int:id>", methods=["PUT"])
def actualizar_alumno(id):
    alumno_actualizado = request.json  # Obtenemos los datos actualizados del alumno desde la solicitud
    for alumno in alumnos:
        if alumno['id'] == id:
            alumno.update(alumno_actualizado)  # Actualizamos los datos del alumno
            return jsonify({"msg": "Alumno actualizado correctamente", "alumno": alumno})
    return jsonify({"msg": "Alumno no encontrado"}), 404  # Devolvemos un mensaje de error si el alumno no se encuentra

# Ruta para eliminar un alumno
@app.route("/alumnos/<int:id>", methods=["DELETE"])
def eliminar_alumno(id):
    for alumno in alumnos:
        if alumno['id'] == id:
            alumnos.remove(alumno)  # Eliminamos el alumno de la lista
            return jsonify({"msg": "Alumno eliminado correctamente"})
    return jsonify({"msg": "Alumno no encontrado"}), 404  # Devolvemos un mensaje de error si el alumno no se encuentra

# AL FINAL Ejecutamos la aplicación en modo debug en el puerto 5000
if __name__ == "__main__":
    app.run(debug=True, port=5000)