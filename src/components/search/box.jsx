import { useState } from 'react';
import { Form , InputGroup , CloseButton , useAccordionButton} from 'react-bootstrap';

const BoxSearch = ({ eventKey }) => {
    const [showCloseButton,setShowCloseButton] = useState(false)
        const decoratedOnClick = useAccordionButton(eventKey, ()=>{
            setShowCloseButton(!showCloseButton)
        });

        function a(b){
            if(b) return
            return decoratedOnClick
        }
        
        return (
            <div className="input-group">
                <InputGroup>
                    <Form.Control
                        type="text"
                        className="form-control"
                        placeholder='جستجوی کارمند'
                        onFocus={a(showCloseButton)}
                    />
                    {showCloseButton && <InputGroup.Text id="btnGroupAddon"><CloseButton onClick={decoratedOnClick}/></InputGroup.Text>}
                </InputGroup>
            </div>
        );
}

export default BoxSearch