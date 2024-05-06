import React from "react";
import { Meteors } from "../components/meteors";
import { AnimatedTooltipPreview } from "./tooltipdemo";
import github from "../assets/github.png"
import {linkedin} from "../assets/linkedin.png"


export function MeteorsDemo() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
    <div className="relative max-w-md mx-auto">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-8 py-20 overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        {/* Componente AnimatedTooltipPreview a la izquierda del h3 */}
        <div className="left-0 top-0 transform -translate-x-full">
          
        </div>

        <h2 className="font-bold text-3xl text-white mb-6">
          Hi! Im Facundo,
        </h2>

        <div>
          {/* h3 después del componente AnimatedTooltipPreview */}
          <h1 className="font-bold text-3xl text-white mb-8">
            Frontend Developer.
            <p className="font-normal text-lg text-slate-500 mb-8">
          I don&apos;t know what to write so I&apos;ll just paste something
          cool here. One more sentence because lorem ipsum is just
          unacceptable. Won&apos;t ChatGPT the shit out of this.
        </p>
          </h1>

          {/* Enlaces a LinkedIn y GitHub */}
          <div className="flex">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mr-4"
            >
              linkedin
            </a>
            <a
              
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              asd
            </a>
          </div>
        </div>

      

        {/* Meaty part - Meteor effect */}
        <Meteors number={15} />
      </div>
    </div>
  </div>
  );
}
