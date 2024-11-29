import React from "react";
import { Meteors } from "../components/meteors";
import { AnimatedTooltipPreview } from "./tooltipdemo";
import github from "../assets/github.png";
import { linkedin } from "../assets/linkedin.png";
import HoverBorderGradientDemo from "./hoverborderDemo";
import FacundoFrontend from "../assets/FacundoFrontend.pdf";

export function MeteorsDemo() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center">
        {/* Avatar */}
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light"
          alt="Avatar"
          className="w-25 h-25 rounded-full mb-10 md:mb-0 md:mr-14"
        />

        <div className="relative max-w-md mx-auto">
          <div className="absolute inset-0 h-full w-full rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-8 py-20 overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <h2 className="font-bold text-3xl text-white mb-4">
              Hola!, Soy Facundo
            </h2>

            <div>
              <h1 className="font-bold text-3xl text-white mb-10">
                Frontend Developer.
                <p className="font-normal text-lg text-slate-500 mt-6">
                  Desarrollador Frontend con experiencia en tecnologías como
                  React y Next.js, Apasionado por la innovación tecnológica y el
                  desarrollo de soluciones que impulsen el éxito empresarial.
                  Actualmente trabajando en Grupo Cober, desarrollando software
                  a medida para prepagas medicinales.
                </p>
              </h1>
              <button
                className="relative overflow-hidden bg-blue-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-1000"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "FacundoFrontend.pdf";
                  link.download = "FacundoFrontend.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <span className="absolute h-full w-full bg-white opacity-5 rounded-full animate-spin"></span>
                Curriculum
              </button>
            </div>

            <Meteors number={14} />
          </div>
        </div>
      </div>
    </div>
  );
}
