import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import { AppProvider } from "./Context/AppContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import SingleProductPage from "./Pages/SingleProductPage/SingleProductPage";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="App">
           <Navbar/>
           <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/product/:productId" element={<SingleProductPage/>}/>

           </Routes>
          
        </div>
      </BrowserRouter>
 
    </AppProvider>
  );
}

export default App;
