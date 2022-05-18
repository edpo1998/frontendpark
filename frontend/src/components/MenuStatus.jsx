import React, {useState,useEffect}from 'react';
import FetchData from "../containers/Administrador/modulesadmin/moduleaction/api/Api.js"
// Menu para mostar el estado actual de la caja
const MenuStatus = () => {

  const [status,setStatus] = useState({})

  useEffect(  () => {
    const getResponse = async () => {
        const url = "api/parqueo/status/"
        const data = new FetchData()
        const response = await data.request(url,"GET")
        return response
      }
  
    let timer = setTimeout(() => {
        getResponse()
        .then(response => setStatus(response.body))
        .catch(data => console.log(data))  
    }, 1000);

    return () => clearTimeout(timer)

  });

  return(
  <>
    <table className="table table-bordered table-dark">
    <thead>
        <tr >
        <th scope="col" >🟢 Disponibles</th>
        <th scope="col" >🔴 Ocupados</th>
        <th scope="col" >🔼 Ultimo Ingreso</th>
        <th scope="col" >🔽 Ultimo Egreso</th>
        </tr>
    </thead>
    {
      Object.keys(status).length>0?
      <tbody>
        <tr >
          <th scope="row" >{status.libres}</th>
          <td>{status.ocupados}</td>
          <td>{localStorage.getItem("lastingreso")?localStorage.getItem("lastingreso"):""}</td>
          <td>{localStorage.getItem("lastsalida")?localStorage.getItem("lastsalida"):""}</td>
        </tr>
      </tbody> :
      <tbody>
      <tr >
        <th scope="row" ></th>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>

    }
    
    </table>  
  </>
)};

export default MenuStatus;