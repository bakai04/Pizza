import axios from "axios";

export const setLoaded=(payload)=>({
    type: "SET_LOADED",
    payload,
})
export const fetchPizzas=(category, filtersBy)=>(dispatch)=>{
    dispatch(setLoaded(false))
    axios(`http://localhost:3001/pizzas?${category!==null ? 'category='+category:""}&_sort=${filtersBy.type}&_order=${filtersBy.order}`).then(({data})=> dispatch(setPizzas(data)))
}

const setPizzas=(items)=>({
    type:"SET_PIZZAS",
    payload:items,
})
export default setPizzas;