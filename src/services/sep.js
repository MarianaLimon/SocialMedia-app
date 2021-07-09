
const API_SEP = 'https://www.cedulaprofesional.sep.gob.mx/cedula/buscaCedulaJson.action'
const URL_CORS = 'https://api.allorigins.win/raw'

export const getProfessionalLicense = async (data) => {
    try {
        const json = {
            maxResult: 1,
            nombre: "",
            paterno: "",
            materno: "",
            idCedula: data,

        }
        const response = await fetch(`${URL_CORS}?url=${API_SEP}?json=${JSON.stringify(json)}&wt=json&callback=&charset=ISO-8859-1`)
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};
