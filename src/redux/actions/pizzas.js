import axios from "axios";
export const fetchPizzas=()=>(dispatch)=>{
    axios("http://localhost:3001/pizzas").then(({data})=> dispatch(setPizzas(data)))
}

const setPizzas=(items)=>({
    type:"SET_PIZZAS",
    payload:items,
})
export default setPizzas;