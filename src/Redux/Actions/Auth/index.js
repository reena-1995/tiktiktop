import {instance} from '../../../../src/index'

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
            return Promise.resolve(res)
        }).catch(error=>{
            dispatch({type:"REGISTER_ERROR",payload:error.data})
            return Promise.reject(error)
        })
    }
}

export const loginSubmit  = () => {
    return (dispatch) => {
        return instance.get("/login").then(res =>{
            dispatch({type:"LOGIN_SUCCESS",payload:res.data})
            return Promise.resolve(res)
        }).catch(error=>{
            dispatch({type:"LOGIN_ERROR",payload:error.data})
            return Promise.reject(error)
        })
    }
}

