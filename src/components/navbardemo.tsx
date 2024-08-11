import linkedin from "../assets/linkedin.png";
import whatsapp from "../assets/whatsapp.png";
import github from "../assets/github.png";
import Geosystems from "../assets/Geosystems.png";
import letraf from "../assets/letraf.jpeg";
import Generadordeimagenes from "../assets/Generadordeimagenes.png";
import Rickandmorty from "../assets/Rickandmorty.png";
import React, { useState } from "react";
import Projects from "./projects"
import { NavLink, BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Contact from "./contact";

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/navbar-menu";
import { cn } from "../lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
    <div className="absolute top-0 right-5 mt-10 ">
      <Navbar className="top-2" />
    </div>
  </div>
  

  

  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
         
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contact">
       
        
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://www.linkedin.com/in/facundofierro-frontend/">
              <img src={linkedin} className="w-9" alt="" />
            </HoveredLink>

            <HoveredLink href="https://wa.me/541125315884">
              <img src={whatsapp} className="w-9" alt="" />
            </HoveredLink>
            <HoveredLink href="https://github.com/facufr12">
              <img src={github} className="w-9" alt="" />
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem  setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Rick and Morty app"
              href="https://rickandmortyremaster-facufrs-projects.vercel.app/"
              src={Rickandmorty}
              description="Consumption of the Rick and Morty API using React and styled with Bootstrap."
            />
            <ProductItem
              title="IA Generator"
              href="https://imagen-generator-seven.vercel.app/"
              src={Generadordeimagenes}
              description="Consumption of the OpenAI API, made in React and styled with Tailwind."
            />
            <ProductItem
              title="Geosystems"
              href="https://entrevista-tecnica-geosysytems.vercel.app/"
              src={Geosystems}
              description="Geosystems Services Sales Page."
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
