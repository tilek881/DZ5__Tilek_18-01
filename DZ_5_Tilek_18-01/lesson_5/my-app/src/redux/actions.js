import {types} from "./types";


function preloaderOn() {
    return {
        type: types.PRELOADER_ON
    }
}
function preloaderOff() {
    return {
        type: types.PRELOADER_OFF
    }
}

export function alertShow (info) {
    return {
        type: types.ALERT_ON,
        payload: info
    }
}

function alertHidden () {
    return {
        type: types.ALERT_OFF
    }
}


function addUsersAction (user) {
    return {
        type: types.ADD_USER,
        payload: user
    }
}

export function clearUsers (){
    return {
        type: types.CLEAR_USERS
    }
}


export function addUserAction (user) {
    return async function (dispatch) {

        dispatch(preloaderOn())
        dispatch(alertHidden())


        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/users', options)

        if (response.status === 201) {
            dispatch(addUsersAction(user))
            dispatch(alertShow({message: 'Пользователь зарегистрирован', variant: 'success'}))
            dispatch(preloaderOff())
        } else if (response.status === 404) {
            dispatch(alertShow({message: 'Ошибка', variant: 'danger'}))
            dispatch(preloaderOff())
        }

        setTimeout( ()=>{
            dispatch(alertHidden())
        }, 3000)
    }
}