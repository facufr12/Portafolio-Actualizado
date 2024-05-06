import { useState } from "react";
import Card from "./components/card";
import "./App.css";
import { MeteorsDemo } from "./components/meteorsdemo";
import linkedin from "./assets/linkedin.png";
import { NavbarDemo } from "./components/navbardemo";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <NavbarDemo />
        <MeteorsDemo />
      </div>
    </div>
  );
}

export default App;
