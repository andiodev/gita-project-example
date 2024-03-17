import { useEffect, useState } from "react";
import { Col , Row } from "react-bootstrap";
import Modal_ from "../../modal"
import Form from 'react-bootstrap/Form';

const EditUserModal = ({show, handlerClose, handlerEdit, data=null}) => {

    const [name,setName] = useState('')
    const [father,setFather] = useState('')
    const [useId,setUserId] = useState('')
    const [position,setPosition] = useState("کارمند")
    const [active,setActive] = useState(false)

    useEffect(()=>{
        if(data){
            setName(data.name)
            setFather(data.father)
            setUserId(data.useId)
            setPosition(data.position)
        }
    },[data])

    useEffect(()=>{
        if(name.length>0 && father.length>0 && useId.length>0) setActive(true)
        else setActive(false)
    },[name,father,useId])

    const edit = ()=>{       
        handlerEdit({
            id:data.id,
            update: {
                id: data.id, 
                name: name, 
                useId: useId, 
                useJob: data.useJob, 
                father: father, 
                position:position
            }
        })

        setName('')
        setFather('')
        setUserId('')
        setPosition('کارمند')
    }

    return (
        <Modal_ show={show} handlerClose={handlerClose} handlerAction={edit} title={'ویرایش کارمند'} positiveBtn={'ویرایش'} btnActive={active} modelBtn={'warning'}>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>نام</Form.Label>
                            <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="اسم + فامیلی" />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group>
                            <Form.Label>نام پدر</Form.Label>
                            <Form.Control value={father} onChange={(e)=>setFather(e.target.value)} type="text" placeholder="" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-4 mb-2">
                    <Col>
                        <Form.Group>
                            <Form.Label>کد ملی</Form.Label>
                            <Form.Control  value={useId} onChange={(e)=>setUserId(e.target.value)} type="tel" maxLength={10} />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group>
                            <Form.Label>سمت / مسئولیت</Form.Label>
                            <Form.Select  value={position} onChange={(e)=>setPosition(e.target.value)}>
                                <option value="کارمند">کارمند</option>
                                <option value="کارشناس">کارشناس</option>
                                <option value="مدیریت">مدیریت</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <p style={{color:'red', width:'100%'}}>تکمیل بودن تمام فیلد ها اجباری می باشد</p>
            </Form>
        </Modal_>
    )
}

export default EditUserModal