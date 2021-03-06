const initialState={
    category: null,
    filtersBy:{
    type:'rating',
    order:"desc"
    }
}
const filters=(state=initialState, action)=>{
    if(action.type==='SET_SORT_BY'){
        return{
            ...state, 
            filtersBy: action.payload
        }
    }
    if(action.type==='SET_CATEGORY'){
        return{
            ...state,
            category:action.payload
        }
    }
    return state

}
export default filters;