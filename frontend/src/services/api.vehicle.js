
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


// Parametros de configuracion para la llamadas
const data_vehicle ={
   modelos:{
      // Obtiene los modelos de los vehiculos
       getdata(){
        return callApi('api/vehicles/modelo/', {
          method: 'GET'
        });
       }
   },

   marcas:{
    // Obtiene las marcas de los vehiculos
    getdata(){
     return callApi('api/vehicles/brand/', {
       method: 'GET'
     });
    }
  },
  tiposvehiculo:{
    // Obtiene los tipos de los vehiculos
    getdata(){
     return callApi('api/vehicles/typevehicle/', {
       method: 'GET'
     });
    }
  },
  tipoconductor:{
    // Obtiene los tipos de conductores
    getdata(){
     return callApi('api/vehicles/typepropietary/', {
       method: 'GET'
     });
    }
  },

  vehicle:{
    // inserta un nuevo vehiculo
    insert(vehicle){
     return callApi('api/vehicles/vehicle/', {
       method: 'POST',
       body: JSON.stringify(vehicle),
     });
    }
} 
}

  
export default data_vehicle;