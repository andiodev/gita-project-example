import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Modal_ = ({show, handlerClose, title, handlerAction, positiveBtn, btnActive, modelBtn, children}) => {

    return (
        <Modal show={show} onHide={()=>handlerClose(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>handlerClose(false)}>بستن</Button>
                {positiveBtn && <Button variant={btnActive ? modelBtn : "secondary"} onClick={handlerAction} disabled={!btnActive} >{positiveBtn}</Button>}
            </Modal.Footer>
        </Modal>
    )
}

export default Modal_