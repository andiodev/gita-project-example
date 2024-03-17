export const ACTION = {
    ADD_USER: 'add-user',
    EDIT_USER: 'edit-user',
    REMOVE_USER: 'remove-user',
    INFO_USER: 'info-user',
    LOADING: 'loading',
}

export const initialState = {
    users: [
        {
            id: 868679,
            name: "علی مرادی",
            useId: "1200345088",
            useJob: 98051237,
            father: "احمد",
            position: "کارشناس"
        }
    ],
    loading: false,
    error: null
}


const userControllerReducer = (state, action) => {
    switch(action.type){
        case ACTION.ADD_USER:
            return{
                ...state,
                users: [...state.users,action.payload]
            }
        
        case ACTION.EDIT_USER:
            return{
                ...state,
                users: state.users.map((user) =>user.id === action.payload.id ? action.payload.update : user)
            }
        
        case ACTION.REMOVE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload.id)
            }
        
        case ACTION.LOADING:
            return{
                ...state,
                loading: action.payload.loading
            }

        default:
            return state
    }
}

export default userControllerReducer

