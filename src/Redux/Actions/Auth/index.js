import {instance} from '../../../../src/index'

export const businessTypeList  = () => {
    return (dispatch) => {
        instance.get("/business-type-list").then(res =>{
            dispatch({type:"BUSINESS_LIST",payload:res.data})
        }).catch(error=>{
            dispatch({type:"BUSINESS_LIST_ERROR",payload:error.data})
        })
    }
}

