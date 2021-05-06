const Incidente = require('./../models/Incidente');
const Lugar = require('./../models/lugar');
const TipoIncidente = require('./../models/tipoincidente');

exports.getBuscar =  (request, response, next) => {

    console.log("Busqueda Asincrona");
    console.log(request.params.criterio);

    Incidente.fetch(request.params.criterio)
        .then(([rows, fieldData]) => {
            return response.status(200).json({Incidentes: rows});
        })
        .catch(err => {
            console.log(err)
        });
}

exports.regIncidente = (request, response, next) => {

    console.log("Registro asincrono");
    console.log(request.body);
    const incidente = new Incidente(request.body.idLugarIn, request.body.idTIncidenteIn, request.body.descIncidente);

    incidente.save()
        .then(([rows, fieldData]) => {
            Incidente.fetchAll()
            .then(([rows_Incidentes, fieldData_Incidentes]) => {
                return response.status(200).json({Incidentes: rows_Incidentes});
            })
            .catch(err => {
                console.log(err);
                return response.status(500).json({message: "Error al recuperar registro"});
            });
        }).catch( err => {
            console.log(err);
            return response.status(500).json({message: "Error al hacer registro"});    
        });
    
}