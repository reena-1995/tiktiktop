const initialState ={ 
    businessListing :[],
    isAuthenticated:false,
    isLoading:false
}

export const businessList = (state=initialState,action) =>{
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