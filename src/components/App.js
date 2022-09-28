import React from "react";
import { Route, Routes } from "react-router-dom";
import "../style/App.css";
import {
  Birmingham,
  Homepage,
  Title,
  
  NavigationBar,
  Footer,
  Griswold,
  Lodge,
  Wagner,
  Foundry,
  Contact,
  About
} from "./";

function App() {
  return (
    <>
      <Title />
      <NavigationBar />
      <Routes>
        <Route path="" element={<Homepage />} />
        
          <Route path="birmingham" element={<Birmingham />} />
          <Route path="griswold" element={<Griswold />} />
          <Route path="lodge" element={<Lodge />} />
          <Route path="foundry" element={<Foundry />} />
          <Route path="wagner" element={<Wagner />} />
        
        <Route path="contact" element={<Contact/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
     
      <Footer />
    </>
  );
}

export default App;
