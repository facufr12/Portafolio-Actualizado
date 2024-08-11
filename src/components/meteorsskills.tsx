import React from "react";
import { Meteors } from "../components/meteors";
import { AnimatedTooltipPreview } from "./tooltipdemo";
import github from "../assets/github.png";
import { linkedin } from "../assets/linkedin.png";
import HoverBorderGradientDemo from "./hover-border-gradient";

export default function Meteorskills() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="relative max-w-md mx-auto">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-8 py-20 overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          {/* Componente AnimatedTooltipPreview a la izquierda del h3 */}
          <div className="left-0 top-0 transform -translate-x-full"></div>

          <h2 className="font-bold text-3xl text-white mb-4">Skills</h2>

          <div>
            {/* h3 después del componente AnimatedTooltipPreview */}
            <h1 className="font-bold text-3xl text-white mb-10 ">
              Frontend Developer.
              <p className="font-normal text-lg  text-slate-500 mt-6">
                Desarrollador Frontend con experiencia en tecnologías como React
                y Next.js, Apasionado por la innovación tecnológica y el
                desarrollo de soluciones que impulsen el éxito empresarial
              </p>
            </h1>
            <button
              className="relative overflow-hidden bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-1000"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "FacundoFrontend.pdf";
                link.download = "FacundoFrontend.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <span className="absolute h-full w-full bg-white opacity-20 rounded-full animate-spin"></span>
              Curriculum
            </button>

            {/* Enlaces a LinkedIn y GitHub */}
            <div className="flex">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mr-4"
              ></a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              ></a>
            </div>
          </div>

          {/* Meaty part - Meteor effect */}
          <Meteors number={15} />
        </div>
      </div>
    </div>
  );
}
