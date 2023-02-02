import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
       <Routes>
        
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/update" element={<h1>Update Produts components</h1>}/>
        <Route path="/logout" element={<h1>Logout components</h1>}/>
        <Route path="/profile" element={<h1>Profile  components</h1>}/>
        </Route>

        <Route path="/signup" element={<SignUp/>} > </Route>
        <Route path="/login" element={< Login />}> </Route>
       </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
};

export default App;
