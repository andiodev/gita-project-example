import { useReducer, useState } from 'react';
import userControllerReducer, { initialState , ACTION, Info} from '../../reducer';
import './list.css'
import ItemAction from './itemAction';
import Button from 'react-bootstrap/Button';
import AddUserModal from './modal/add';
import RemoveUserModal from './modal/remove';
import InfoUserModal from './modal/info';
import EditUserModal from './modal/edit';
import ChartUserModal from './modal/chart';
import MapUserModal from './modal/map';


const List = () => {

    const [showAddUser,setShowAddUser] = useState(false)
    const [showRemoveUser,setShowRemoveUser] = useState(false)
    const [showInfoUser,setShowInfoUser] = useState(false)
    const [showEditUser,setShowEditUser] = useState(false)
    const [showMapUser,setShowMapUser] = useState(false)
    const [showChartUser,setShowChartUser] = useState(false)
    const [idUserSelect,setIdUserSelect] = useState(null)

    const [state,dispatch] = useReducer(userControllerReducer, initialState)
    const { users } = state

    const handlerAddUser = (payload)=>{
        setShowAddUser(false)
        dispatch({type: ACTION.ADD_USER,payload })
    }

    const handlerEditUser = {

        set: (id)=>{    
            setIdUserSelect(id)
            setShowEditUser(true)
        },

        get: ()=>{
            const id = idUserSelect
            return users.find((user) => user.id === id)
        },

        edit: (payload)=>{
            setShowEditUser(false)
            dispatch({type: ACTION.EDIT_USER,payload})
        }

    }

    const handlerRemoveUser = {
        set: (id) => {
            setIdUserSelect(id);
            setShowRemoveUser(true);
        },

        get: () => {
            setShowRemoveUser(false);
            const id = idUserSelect
            dispatch({
                type: ACTION.REMOVE_USER,
                payload: { id }
            });
        }
    };

    const handlerInfoUser = {

        set: (id) => {
            setIdUserSelect(id)
            setShowInfoUser(true)
        },

        get: () => {
            const id = idUserSelect
            return users.find((user) => user.id === id)
        }
        
    }

    const userItem = users.map(user => <ItemAction data={user} edit={handlerEditUser.set} remove={handlerRemoveUser.set} info={handlerInfoUser.set} map={setShowMapUser} chart={setShowChartUser}/>)

    return (
        <div className='list-user-body'>
            <Button variant="btn btn-success mb-3 align-items-center" onClick={()=> setShowAddUser(true)}>
                <i className="bi bi-plus-circle me-2"></i>
                افزودن
            </Button>

            <table>
                <tr>
                    <th>نام</th>
                    <th>کد پرسنلی</th>
                    <th>کد ملی</th>
                    <th>نام پدر</th>
                    <th>سمت / مسئولیت</th>
                    <th></th>
                </tr>
                {userItem}                    
            </table>

            <AddUserModal show={showAddUser} handlerClose={setShowAddUser} handlerAdd={handlerAddUser}/>
            <RemoveUserModal show={showRemoveUser} handlerClose={setShowRemoveUser} handlerRemove={handlerRemoveUser.get}/>
            <InfoUserModal show={showInfoUser} handlerClose={setShowInfoUser} data={handlerInfoUser.get()}/>
            <EditUserModal show={showEditUser} handlerClose={setShowEditUser} handlerEdit={handlerEditUser.edit} data={handlerInfoUser.get()}/>
            <MapUserModal show={showMapUser} handlerClose={setShowMapUser}/>
            <ChartUserModal show={showChartUser} handlerClose={setShowChartUser}/>
            
        </div>
    )
}

export default List