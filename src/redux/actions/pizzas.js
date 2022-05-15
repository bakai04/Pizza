import axios from "axios";

export const setLoaded=(payload)=>({
    type: "SET_LOADED",
    payload,
})
export const fetchPizzas=(category, filtersBy)=>(dispatch)=>{
    dispatch(setLoaded(false))
    axios(`http://localhost:3001/pizzas?category=${category}`).then(({data})=> dispatch(setPizzas(data)))
    console.log("Sdfsdf")
}

const setPizzas=(items)=>({
    type:"SET_PIZZAS",
    payload:items,
})
export default setPizzas;