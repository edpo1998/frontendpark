// Componentes
import {
  Button,
  Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

// Estilos
import "../../../assets/styles/components/ModalMessage.scss"

const Message = ({statemessage,handleMessage}) => {

    const closeMessage =() => handleMessage("state",false)

  return(
  <>
    <Modal isOpen={statemessage.state} className="Message">
        <ModalHeader>
            <span>{statemessage.header}</span>
        </ModalHeader> 
     
        <ModalBody className='FormModal'>
            <span>
                {statemessage.message}
            </span>
        </ModalBody>
        
        <ModalFooter>
            <Button className="btn-ls bg-dark btncustom" onClick={closeMessage}> Ok</Button>
        </ModalFooter>
    </Modal>
  </>

);
}
export default Message;