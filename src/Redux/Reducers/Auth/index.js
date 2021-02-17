const businessInitialState ={ 
    businessListing :[],
    isAuthenticated:false,
    isLoading:false,
    
}

const authInitialState={
    userDetail:{
        email:"",
        name:"",
        profile_pic:"",
        address:"",
        mobile_number:""
    },
    isAuthenticated:false,
    isLoading:false,
}
export const businessList = (state=businessInitialState,action) =>{
    switch (action.type) {
        case "BUSINESS_LIST":
            return {
                ...state,
                businessListing:action.payload.data
            }
    
        default:
            return{
                ...state
            }
          
    }

}

export const AuthRedux = (state=authInitialState,action) =>{
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                userDetail:{
                    email:action.payload.data.userDetail.email,
                    name:action.payload.data.userDetail.name,
                    profile_pic:action.payload.data.userDetail.profile_pic,
                    mobile_number:action.payload.data.userDetail.mobile_number,
                    address:action.payload.data.userDetail.address,
                }
            }
    
        default:
            return{
                ...state
            }
          
    }

}

