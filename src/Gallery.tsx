import { useEffect, useRef } from "react";
import AudiR8 from "./assets/Cars-image/pexels-mayday-1545743.jpg";
import Amg from "./assets/Cars-image/pexels-mikebirdy-112460.jpg";
import Bmw from "./assets/Cars-image/pexels-mikebirdy-170811.jpg";
import ferrari from "./assets/Cars-image/pexels-pashal-337909.jpg";
import hyundai from "./assets/Cars-image/pexels-svonhorst-2920064.jpg";
import jeep from "./assets/Cars-image/pexels-zsolt-joo-483255-2882234.jpg";

import "./Gallery.css";

import { Info } from "./Info";

export const Gallery = () => {
  const carsImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carsDiv = carsImgRef.current;
    if (!carsDiv) return;

    const imgs = carsDiv.querySelectorAll("img");

    const observer = new IntersectionObserver(
      (entries) => {
        // console.log(entries);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -200px 0px",
      }
    );

    imgs.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, [carsImgRef]);

  return (
    <div>
      <h1 className="text-center  text-2xl sm:text-5xl font-bold text-[#43334C] ">
        Virtual Scroll List & Gallery
      </h1>

      <Info />

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center font-bold text-3xl  font-extrabold sm:text-5xl mt-30 mb-5">
          Cars
        </h1>
        <div
          ref={carsImgRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto p-5"
        >
          <div className="rounded-xl overflow-hidden">
            <img src={AudiR8} className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={Amg} className="w-full   object-cover" />
            <img src={Bmw} className="w-full mt-2 rounded-b-xl object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={ferrari} className="w-full   object-cover" />
            <img
              src={hyundai}
              className="w-full mt-2 rounded-b-xl object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={jeep} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};
