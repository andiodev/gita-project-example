import { Button, Col, Form, Row , Accordion } from 'react-bootstrap';

const AccordionSearch = () => {
    return (
        <Accordion.Collapse eventKey="0">
            <Form>
                <Row className='align-items-end px-3 py-3'>
                    <Col>
                        <Form.Label>شماره پرسنلی</Form.Label>
                        <Form.Control type="tel" placeholder="اختیاری" maxLength={8} className='text-center'/>
                    </Col>

                    <Col>
                        <Form.Label>کد ملی</Form.Label>
                        <Form.Control type="tel" placeholder="اختیاری" maxLength={10} className='text-center'/>
                    </Col>

                    <Col>
                        <Form.Label>نام پدر</Form.Label>
                        <Form.Control type="text" placeholder="اختیاری" maxLength={18} className='text-center'/>
                    </Col>

                    <Col>
                        <Button variant="primary" className='w-100'>جستجو</Button>
                    </Col>
                </Row>
            </Form>
        </Accordion.Collapse>
    )
}

export default AccordionSearch