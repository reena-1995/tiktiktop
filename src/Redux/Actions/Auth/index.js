import {instance} from '../../../../src/index'
import notification from '../../../Components/Notification/Notification'
import {history} from '../../../../src/history'
export const businessTypeList  = () => {
    return (dispatch) => {
        return instance.get("/business-type-list").then(res =>{
            dispatch({type:"BUSINESS_LIST",payload:res.data})
            return Promise.resolve(res)
        }).catch(error=>{
            dispatch({type:"BUSINESS_LIST_ERROR",payload:error.data})
            return Promise.reject(error)
        })
    }
}

export const registerSubmit  = (values) => {
    return (dispatch) => {
        return instance.post("/register",values).then(res =>{
            dispatch({type:"REGISTER_SUCCESS",payload:res.data})
            notification('Manewayz',res.data.message,'success')
            return Promise.resolve(res)
        }).catch(error=>{
            const errorMessage = (error.response.data.message) ? error.response.data.message : "Something went wrong. Please try again."
            notification('Manewayz',errorMessage,'danger')
            dispatch({type:"REGISTER_ERROR",payload:error})
            return Promise.reject(error)
        })
    }
}

export const loginSubmit  = (values) => {
    return (dispatch) => {
        return instance.post("/login",values).then(res =>{
            dispatch({type:"LOGIN_SUCCESS",payload:res.data})
            notification('Manewayz',res.data.message,'success')
            return Promise.resolve(res)
        }).catch(error=>{
            const errorMessage = (error.response.data.message) ? error.response.data.message : "Something went wrong. Please try again."
            dispatch({type:"LOGIN_ERROR",payload:error.data})
            notification('Manewayz',errorMessage,'danger')
            return Promise.reject(error)
        })
    }
}

