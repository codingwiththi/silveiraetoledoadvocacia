import Image from "next/image";
import React from "react";
import image1 from "../../public/dummy/img1.png";
import image2 from "../../public/dummy/img2.png";
import image3 from "../../public/dummy/img3.png";
import image4 from "../../public/dummy/img4.png";

export default function Clients() {
  return (
    <div
      id="clients"
      className="section relative py-8 bg-white dark:bg-gray-800"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
            Nossos Clients
          </h2>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 60"
            style={{ margin: "0 auto", height: "35px" }}
            xmlSpace="preserve"
          >
            <circle
              cx="50.1"
              cy="30.4"
              r="5"
              className="stroke-primary"
              style={{
                fill: "transparent",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
            />
            <line
              x1="55.1"
              y1="30.4"
              x2="100"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
            />
            <line
              x1="45.1"
              y1="30.4"
              x2="0"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
            />
          </svg>
          {/* <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            We create engaging experiences that are innovatingand beautiful.
          </p> */}
        </header>
      </div>
      <div className="container xl:max-w-6xl mx-auto px-4 ">
        <div className="flex flex-wrap flex-row -mx-4 justify-center ">
          <div className="w-full px-4  flex flex-col sm:flex-row">
            <div className="w-full px-4 text-center pb-3 ">
              <a href="#" target="_blank">
                <Image
                  className="grayscale mx-auto opacity-80 hover:opacity-100"
                  src={image1}
                  alt="Image Description"
                  width={100}
                  height={100}
                />{" "}
              </a>
            </div>
            <div className="w-full px-4 text-center pb-3 ">
              <a href="#" target="_blank">
                <Image
                  className="grayscale mx-auto opacity-80 hover:opacity-100"
                  src={image2}
                  alt="Image Description"
                  width={100}
                  height={100}
                />{" "}
              </a>
            </div>
            <div className="w-full px-4 text-center pb-3 ">
              <a href="#" target="_blank">
                <Image
                  className="grayscale mx-auto opacity-80 hover:opacity-100"
                  src={image3}
                  alt="Image Description"
                  width={100}
                  height={100}
                />{" "}
              </a>
            </div>
            <div className="w-full px-4 text-center pb-3 ">
              <a href="#" target="_blank">
                <Image
                  className="grayscale mx-auto opacity-80 hover:opacity-100"
                  src={image4}
                  alt="Image Description"
                  width={100}
                  height={100}
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
