const initialState={
    confirmedCases:'',
    recoveredCases:'',
    deaths:'',
    isFetching:false,
    date:'',
    error:''
}

export const cardReducer=(state=initialState,action)=>{

    switch(action.type){

     case "FETCH_CASES_START":
     return{
         ...state,
         isFetching: true
     }

     case "FETCH-CASES-SUCCESS":
        return{
            ...state,
            isFetching:false,
            confirmedCases:action.payload.confirmed.value,
            recoveredCases:action.payload.recovered.value,
            deaths:action.payload.deaths.value,
            date: action.payload.lastUpdate
        }
     default:
         return state;
    }

}