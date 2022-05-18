// React
import React,{useState,useEffect} from 'react';
// Componentes
import {
  Button,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Label,
  Input,
  FormGroup
} from 'reactstrap'
// Estilos
import "./styles/MRSalida.scss"
//Api
import api_parqueo from "../../../services/api.register.js"

import qr from "../../../assets/static/qr.png"

import MTicket from './MTicket';
const MRSalida = ({stateopen,handlechangeModal}) => {
    // Datos para la tabla
    const [data,setData] = useState({})

    // Barra de Busqueda
    const [search, setSearch] = useState("")

    const [monto,setMonto] = useState(0)

    const [ticket,setTicket] = useState(false)

    const [dataticket,setDataticket] = useState({})
    // Format Datea

    const getDate= (date)=>{
      const fecha = new Date(date)
      
      return fecha.getDay()+"/"+fecha.getMonth()+"/"+fecha.getFullYear()+" - "+ fecha.getHours()+":"+ fecha.getMinutes() 
    }
    // Verifica y actualiza el estado de la tabla
    useEffect(() => {
      const getResponse = async () => {
        const response = await api_parqueo.estacion.getRegisterBussy({id:search.toString()})
        return response
      }
      
      // Verificar Simulacion de Loading...
      let timer = setTimeout(() => {
          getResponse()
          .then(response => setData(response))
          .catch(data => console.log(data))  
      }, 500);
  
    return () => clearTimeout(timer)
    });
    

    // Hanlde para actualizar la barra de busqueda
    const handleChangeSearch = (e) => {
      setSearch(e.target.value)
    }

    const handleChangeMonto = (e) => {
      setMonto(e.target.value)
    }

    // Funcion para realizar el registro de la salida
    const EntryRegister =async (e) =>{
        const postRequest = async () => {
          const response = await api_parqueo.estacion.registrarSalida({id_register:e.target.value})
          return response
        }
        postRequest()
        .then(response => {
          //localStorage.setItem("ticket",JSON.stringify(response))
          if(!response.error){
            setDataticket({
              ticket: "T-"+(Math.floor(Math.random() * 100) + 1)+"-"+response.body.ticket[0].id,
              placa: response.body.ticket[0].vehiculo,
              parqueo: response.body.ticket[0].estacion,
              entrada: getDate(response.body.ticket[0].date_entry),
              salida: getDate(response.body.ticket[0].date_exit),
              tiempo: response.body.tiempo,
              total: response.body.total
            });
            localStorage.setItem("lastsalida",response.body.ticket[0].vehiculo)
          }
          else
            setDataticket({})
          setTicket(true)  
           
        })
        .catch(data => localStorage.setItem("err",JSON.stringify(data.message)))
        
    }


    const Imprimir = () =>{
      console.log(ticketdata)
    }
  
  return(
  <>{
    
    Object.keys(data).length >0 ?
    <Modal isOpen={stateopen} className="ModalSalida" size="lg">
      <ModalHeader>
      🆓 Registrar Salida
      </ModalHeader> 
     
      <ModalBody className='FormModal'>
        {/**/}
        <div>
          <FormGroup>
            <Label>Busqueda</Label>
            <Input
              name="search" 
              value={search}  
              onChange={handleChangeSearch}
            />
          </FormGroup>
        <div className='table-wrapper-scroll-y my-custom-scrollbar'>
            <table className="table table-bordered table-striped mb-0">
                <thead>
                    <tr>
                        <th scope="col" >Ticket</th>
                        <th scope="col" >Tipo</th>
                        <th scope="col">No. Placa</th>
                        <th scope="col">Parqueo Asignado</th>
                        <th scope="col">Datos de Ingreso</th>
                        <th scope="col">Registrar Salida</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.body.map(registro =>(
                            <tr key={registro.id}>
                                <th scope="row" >{registro.ticket}</th>
                                <td >{registro.tipo=="Residente"?"⭐️":"👤"}</td>
                                <td >{registro.vehiculo}</td>
                                <td>{registro.estacion}</td>
                                <td>{getDate(registro.date_entry)}</td>
                                <td><Button value={registro.id} className="btn-ls bg-danger btncustom" onClick={EntryRegister}>Salida</Button></td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div> 
        </div>
        <MTicket stateopen={ticket} response={{}}></MTicket>
        <div className='ticket__container'>
          <div className='ticket'>
            <div className='imgqr'><img src={qr}/></div>
            <div>
              <div className='ticket_content'><span>No. Ticket:</span>{Object.keys(dataticket).length>0?<div className='detail_ticket'>{dataticket.ticket}</div>:""} </div>
              <div className='ticket_content'><span>No. Placa:</span>{Object.keys(dataticket).length>0?<div className='detail_ticket'>{dataticket.placa}</div>:""}</div>
              <div className='ticket_content'><span>Parqueo Asignado:</span>{Object.keys(dataticket).length>0?<div className='detail_ticket'>{dataticket.parqueo}</div>:""}</div>
              <div className='ticket_content'><span>Ingreso:</span>{Object.keys(dataticket).length>0?<div className='detail_ticket'>{dataticket.entrada}</div>:""}</div>
              <div className='ticket_content'><span>Salida:</span>{Object.keys(dataticket).length>0?<div className='detail_ticket'>{dataticket.salida}</div>:""}</div>
              <div className='ticket_content'><span>Tiempo Estimado:</span>{Object.keys(dataticket).length>0?<div className='detail_ticket'>{dataticket.tiempo}</div>:""}</div>
              <div className='ticket_content'><span>Valor Aproximado:</span>{Object.keys(dataticket).length>0?<div className='detail_ticket'>{dataticket.total}</div>:""}</div>
              <div className='ticket_content'><span>Cambio:</span>{Object.keys(dataticket).length>0?<div className='detail_ticket'>{monto>0?monto-dataticket.total:0}</div>:""}</div>
            </div>
          </div> 
          <hr />
            <FormGroup>
              <Label>Monto</Label>
              <Input
                name="monto" 
                type='number'
                onChange={handleChangeMonto}
              />
            </FormGroup>
            <Button onClick={Imprimir}>Imprimir</Button>
        </div>
      </ModalBody>
      <ModalFooter><Button className="btn-lg bg-primary btnclose" onClick={()=>handlechangeModal("bussy",false)}>⬅️</Button></ModalFooter>
    </Modal>:
    <h1>Loading...</h1>
  } 
  </>

);
}
export default MRSalida;