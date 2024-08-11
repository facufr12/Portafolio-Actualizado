import { useState } from "react";
import Card from "./components/card";
import "./App.css";
import { MeteorsDemo } from "./components/meteorsdemo";
import linkedin from "./assets/linkedin.png";
import { NavbarDemo } from "./components/navbardemo";
import DownloadIcon from "./assets/svgdownload.svg";
import HoverBorderGradientDemo from "./components/hoverborderDemo";
import Projects from "./components/projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/contact"
import Meteorskills from "./components/meteorsskills"
import Navbarnueva from "./components/Navbarnueva";
import { LayoutGridDemo } from "./components/layoutgriddemo";
import { AnimatedTooltipPreview } from "./components/tooltipdemo.tsx";
import { WobbleCardDemo}  from "./components/woobledemo.tsx";
function App() {
  return (
    <div className=" items-center justify-center h-screen">
      <div>
            
        <Router>
          
        <Navbarnueva />
          <Routes>
            
            <Route path="/" element={<MeteorsDemo />} >  </Route>

            <Route path="/projects" element={<LayoutGridDemo/>}> </Route>
            
            <Route path="/contact" element={<Contact/>}> </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
