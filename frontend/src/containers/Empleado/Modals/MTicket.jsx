import { useState } from 'react'
import {
  Button,
  Modal, ModalHeader, ModalBody, ModalFooter,
  } from 'reactstrap'

import "./styles/MRSalida.scss"


const MTicket = ({stateopen}) => {

const [state,setState] =useState(stateopen)

  const setError = () =>{
    setState(false)
   // localStorage.removeItem("ticket")
  }

  return(
    <>
    <Modal isOpen={state} className="ModalStyleSalida">
      <ModalHeader>
        Ticket
      </ModalHeader> 
     
      <ModalBody className='FormTicket'>
         
      </ModalBody>
      <ModalFooter>
        <Button className="btn-lg bg-secondary" onClick={setError}>Ok</Button>
      </ModalFooter>
    </Modal> 
  </>

);
}
export default MTicket;