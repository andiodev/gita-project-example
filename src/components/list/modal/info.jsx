import Modal_ from '../../modal'

const InfoUserModal = ({show, handlerClose, data={}}) => {
    
    return (
        <Modal_ show={show} handlerClose={handlerClose} title={'اطلاعات کارمند'}>
            <p>آقا / خانم {data.name}</p>
            <p>نام پدر: {data.father}</p>
            <p>کدملی: {data.useId}</p>
            <p>کد پرسنلی: {data.useJob}</p>
            <p>با سمت / مسئولیت: {data.position}</p>
        </Modal_>
    )
}

export default InfoUserModal