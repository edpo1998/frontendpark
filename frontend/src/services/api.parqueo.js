
const BASE_URL = process.env.VITE_BACKEND_ADDR;

// Funcion para la llamada a la api
async function callApi(endpoint, options = {}) {
  options.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };
  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

// Configuraciones y definicion de la llamada
const api_parqueo ={
   estacion:{

       // Retorna una estacion libre
       getdata(){
        return callApi('api/parqueo/estacion/free', {
          method: 'GET'
        });
       },

       // Llama al endpoint para la generacion de un ticket
       generateTicket(ticket){
        return callApi('api/registros/ticket/', {
          method: 'POST',
          body: JSON.stringify(ticket),
        });
       },

       // Obtiene las estaciones ocupadas
       getRegisterBussy(){
        return callApi('api/registros/display', {
          method: 'GET'
        });
       },
      
   },
}

export default api_parqueo;