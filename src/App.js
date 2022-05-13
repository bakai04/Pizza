import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {Header} from "./components/index";
import {Cart, Home} from "./pages"
import store from "./redux/Store";
function App() {
  const [pizzas, setPizzas]=useState([]);
  useEffect(()=>{
    axios("http://localhost:3000/db.json").then(({data})=>setPizzas(data.pizzas))
   // fetch("http://localhost:3000/db.json").then((resp)=>resp.json()).then(json=>setPizzas(json.pizzas));
  })
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home pizzas={pizzas}/>} exact></Route>
          <Route path="/cart" element={<Cart/>} exact></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
