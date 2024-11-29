"use client";
import React from "react";
import { WobbleCard } from "./wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-900 min-h-[500px] lg:min-h-[300px]"
        className="relative h-full w-full"
      >
        <a 
          href="https://www.linkedin.com/in/facundofierro-frontend/"
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex flex-col justify-between h-full p-4"
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white opacity-70">
              Linkedin
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200 opacity-70">
              Mi trayectoria en el mundo empresarial de Linkedin
            </p>
          </div>
          <div
            className="absolute inset-0 w-full h-full scale-[1.0] transform opacity-50 [mask-image:radial-gradient(#fff,transparent,75%)]"
            style={{
              backgroundImage: "url(/linkedin.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </a>
      </WobbleCard>

      <WobbleCard
        containerClassName="col-span-1 min-h-[300px] relative"
        className="relative h-full w-full"
      >
        <a 
          href="https://github.com/facufr12"
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex flex-col justify-between h-full"
        >
          <div
            className="absolute inset-0 w-full h-full scale-[1] transform opacity-50 [mask-image:radial-gradient(#fff,transparent,75%)]"
            style={{
              backgroundImage: "url(/github.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="max-w-sm">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white opacity-70">
              Github
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200 opacity-70">
              Te invito a explorar mis proyectos en mi repositorio
            </p>
          </div>
        </a>
      </WobbleCard>

      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-green-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] relative"
        className="relative h-full w-full"
      >
        <a 
          href="https://wa.me/1525315884?text=Hola%20Facundo,%20me%20interesa%20tu%20perfil"
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex flex-col justify-between h-full p-4"
        >
          <div className="max-w-sm">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white opacity-70">
              Si te interesó mi perfil puedes enviarme un mensaje via Whatsapp.
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200 opacity-70">
              No dudes en enviarme un mensaje.
            </p>
          </div>
          <div
            className="absolute inset-0 w-full h-full scale-[1.0] transform opacity-50 [mask-image:radial-gradient(#fff,transparent,75%)]"
            style={{
              backgroundImage: "url(/whatsapp.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </a>
      </WobbleCard>
    </div>
  );
}
