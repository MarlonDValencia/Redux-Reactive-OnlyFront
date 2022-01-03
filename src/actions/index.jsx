export const GET_PACIENTE = "GET_PACIENTE";
export const GET_CITA = "GET_CITA";
const HOST_API = "https://reactive-spring-app.herokuapp.com/citasReactivas/";

export function getPaciente(id) {
  return async function(dispatch) {
      return await fetch(HOST_API + id + "/byidPaciente")
          .then(response => response.json())
          .then(json => {
              dispatch({ type: GET_PACIENTE, payload: {paciente: json} })
          })
          .catch(error => console.error('Error:', error))
  };
}

export function getCita(fecha,hora) {
  return async function(dispatch) {
      return await fetch(HOST_API + fecha + "/" +hora+"/findByFechaYHora")
          .then(response => response.json())
          .then(json => {
              dispatch({ type: GET_CITA, payload: {cita: json}})
          })
          .catch(error => console.error('Error:', error))
  };
}