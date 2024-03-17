import Modal_ from '../../modal'

const RemoveUserModal = ({show, handlerClose, handlerRemove}) => {
    return (
        <Modal_ show={show} handlerClose={handlerClose} handlerAction={handlerRemove} title={'حذف کارمند'} positiveBtn={'حذف'} btnActive={true} modelBtn={'danger'}>
            <p>آیا این کارمند حذف شود؟</p>
        </Modal_>
    )
}

export default RemoveUserModal