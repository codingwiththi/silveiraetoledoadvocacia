"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import HeroImage from "../../public/logo.png";

export default function Header() {
  const [top, setTop] = useState(true);

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={
        !top
          ? "fixed top-0 left-0 right-0 z-40 bg-white"
          : "fixed top-0 left-0 right-0 z-40 "
      }
    >
      <nav className="main-nav">
        <div className="container xl:max-w-6xl mx-auto px-4">
          <div className="lg:flex lg:justify-between">
            <div className="flex justify-between">
              <Image
                src={HeroImage}
                className="w-full max-w-full h-auto"
                alt="Silveira & Toledo Advogados"
                height={100}
                width={200}
                quality={100}
              />
              <div className="flex flex-row items-center py-4 lg:py-0">
                <div className="relative text-gray-900 hover:text-black block lg:hidden">
                  <button
                    type="button"
                    className="menu-mobile block py-3 px-6 border-b-2 border-transparent"
                  >
                    <span className="sr-only">Mobile menu</span>
                    <svg
                      className="open h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="close bi bi-x-lg h-8 w-8"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-row">
              <ul className="navbar bg-white lg:bg-transparent w-full hidden text-center lg:text-left lg:flex lg:flex-row text-gray-900 text-sm items-center font-bold">
                <li className="relative hover:text-black">
                  <a
                    className="active block py-3 lg:py-7 px-6 border-b-2 border-transparent"
                    href="#hero"
                  >
                    Home
                  </a>
                </li>
                <li className="relative hover:text-black">
                  <a
                    className="block py-3 lg:py-7 px-6 border-b-2 border-transparent"
                    href="#services"
                  >
                    O que fazemos
                  </a>
                </li>
                {/* <li className="relative hover:text-black">
                  <a
                    className="block py-3 lg:py-7 px-6 border-b-2 border-transparent"
                    href="#portfolio"
                  >
                    Nossos trabalhos
                  </a>
                </li> */}
                <li className="relative hover:text-black">
                  <a
                    className="block py-3 lg:py-7 px-6 border-b-2 border-transparent"
                    href="#clients"
                  >
                    Clientes
                  </a>
                </li>
                <li className="relative hover:text-black">
                  <a
                    className="block py-3 lg:py-7 px-6 border-b-2 border-transparent"
                    href="#team"
                  >
                    Advogados
                  </a>
                </li>
                <li className="relative hover:text-black">
                  <a
                    className="block py-3 lg:py-7 px-6 border-b-2 border-transparent"
                    href="#contact"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
