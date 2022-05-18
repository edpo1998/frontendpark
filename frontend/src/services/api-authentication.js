
const BASE_URL = process.env.VITE_BACKEND_ADDR;


// Funcion para llamada a la api
async function callApi(endpoint, options = {}) {
  options.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };
  const url = BASE_URL + endpoint;
  console.log(BASE_URL)
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}


// Configuraciones para las llamadas a la api
const authentication ={
   users:{
       login(user){
        return callApi('auth/', {
          method: 'POST',
          body: JSON.stringify(user),
        });
       }
   } 
}

  
export default authentication;