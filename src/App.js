import React from "react";
import { Route, Routes } from "react-router-dom";
import {Header} from "./components/index";
import {Cart, Home} from "./pages"

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} exact></Route>
          <Route path="/cart" element={<Cart/>} exact></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
