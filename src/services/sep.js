
const API_SEP = 'https://www.cedulaprofesional.sep.gob.mx/cedula/buscaCedulaJson.action'
const toda = 'https://www.cedulaprofesional.sep.gob.mx/cedula/buscaCedulaJson.action?json={"maxResult":"1","nombre":"","paterno":"","materno":"",idCedula:"5517083"}&wt=json&callback=&charset=UTF-8'


export const getProfessionalLicense = async (data) => {
    const json = {
        maxResult: 1,
        nombre: "",
        paterno: "",
        materno: "",
        idCedula: data,

    }

    const response = await fetch(API_SEP, {
        method: "POST",
        headers: {
            "dataType": 'json',
            "cache": false,
            "contentType": 'application/JSON',
            "processData": false,
            "type": 'post',
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(json),
    });
    return await response.json();
};
