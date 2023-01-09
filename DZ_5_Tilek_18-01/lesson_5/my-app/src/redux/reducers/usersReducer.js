import {types} from "../types";

const initialState = {
    users:[]
}


export default function usersReducer(state= initialState, action){

    switch (action.type) {
        case types.ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case types.CLEAR_USERS:
            return {
                ...state,
                users: []
            }
        default:
            return state

    }


}