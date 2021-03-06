const db = require('../util/database');

module.exports = class TipoIncidente {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(idTipoIncidente, nombre, descripcion) {
        this.idTipoIncidente = idTipoIncidente;
        this.nombre = nombre;
        this.descripcion = descripcion;
        //this.fecha = new Date().toLocaleString('ES');
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM tipo_incidentes');
    }

}