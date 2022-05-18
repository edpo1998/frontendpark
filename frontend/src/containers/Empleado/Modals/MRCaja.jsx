// React
import React,{useState,useEffect} from 'react';
// Components
import {
  Button,
  Form,
  FormGroup,
  Input,
  Modal, ModalHeader, ModalBody, 
  Label,
  } from 'reactstrap'
// Api
import FetchData from "../../Administrador/modulesadmin/moduleaction/api/Api.js"
import "./styles/MRCaja.scss"


const MRCaja = ({stateopen,handlechangeModal}) => {
  // Campos del registro de un ticket 
  const [activo,setActivo] = useState(0)
  
  const [message,setMessage]= useState({})
  // Funcion para actualizar los campos del formulario
  const handleChange = (e) => setActivo(e.target.value)

  // Funcion para abrir caja
  const EntryRegister = () =>{
    const getResponse = async () => {
        const url = "api/caja/caja/"
        const data = new FetchData()
        const datos = await data.request(url,"POST",{activo:activo})
        return datos
      }
      getResponse()
      .then(datos =>{
          setMessage({
              error: datos.error,
              message: datos.message
          })
      })
      .catch(error => console.log(error))
  }

  const closeBox = () =>{
    const getResponse = async () => {
        const url = "api/caja/close/"
        const data = new FetchData()
        const datos = await data.request(url,"GET")
        return datos
      }
      getResponse()
      .then(datos =>{
          setMessage({
              error: datos.error,
              message: datos.message
          })
      })
      .catch(error => console.log(error))
  }



  return(
  <>
    <Modal isOpen={stateopen} className="ModalStyle">
      <ModalHeader>
        💼 Abrir Caja
      </ModalHeader> 
      {
          Object.keys(message).length>0?
          <p className={message.error?"alert mt-2 alert-danger":"alert mt-2 alert-success"}>{message.message}</p>:
          ""
      }
      <ModalBody className='FormModal'>
        <Form className='container-fluid' onSubmit={EntryRegister}>
            {/* Monto Inicial: */}
            <FormGroup>
                <Label>Monto Inicial</Label>
                <Input name="activo" type='number' value={activo} onChange={handleChange}></Input> 
            </FormGroup>
          <div className='buttonactions'>
            <Button className="btn-lg bg-info" onClick={EntryRegister}>Aperturar</Button>
            <Button className="btn-lg bg-danger" onClick={closeBox}>Cerrar Caja</Button>
            <Button className="btn-lg bg-primary btnclose" onClick={()=>handlechangeModal("box",false)}>⬅️</Button>
          </div>
          
        </Form>
      </ModalBody>
    </Modal> 
  </>

);
}
export default MRCaja;