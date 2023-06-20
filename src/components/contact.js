import React from "react";

export default function Contact() {
  return (
    <div id="contact" class="section relative pb-20 bg-white dark:bg-gray-800">
      <div class="container xl:max-w-6xl mx-auto px-4">
        <div class="flex flex-wrap flex-row -mx-4 justify-center">
          <div class="max-w-ful px-4 w-full lg:w-8/12">
            <div
              class="bg-gray-50 border-b border-gray-100 w-full p-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".5s"
            >
              {/* <!-- section header --> */}
              <header class="text-center mx-auto mb-12 lg:px-20">
                <h2 class="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
                  <span class="font-light">Entre em</span> contato
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
                <p class="text-gray-600 leading-relaxed font-light text-xl mx-auto pb-2">
                  Dúvidas sobre o serviço, entre em contato conosco.
                </p>
              </header>
              {/* <!-- end section header --> */}

              {/* <!-- contact form --> */}
              <form action="#">
                <div class="flex flex-wrap flex-row -mx-4">
                  <div class="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                    <label class="inline-block mb-2" for="name">
                      Seu nome
                    </label>
                    <input
                      type="text"
                      name="name"
                      class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                      id="name"
                    />
                    <div class="validate"></div>
                  </div>
                  <div class="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                    <label class="inline-block mb-2" for="email">
                      Seu Email
                    </label>
                    <input
                      type="email"
                      class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                      name="email"
                      id="email"
                    />
                    <div class="validate"></div>
                  </div>
                </div>
                <div class="mb-6">
                  <label class="inline-block mb-2" for="subject">
                    Assunto
                  </label>
                  <input
                    type="text"
                    class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                    name="subject"
                    id="subject"
                  />
                  <div class="validate"></div>
                </div>
                <div class="mb-6">
                  <label class="inline-block mb-2" for="messages">
                    Mensagem
                  </label>
                  <textarea
                    class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                    name="message"
                    rows="10"
                    id="messages"
                  ></textarea>
                  <div class="validate"></div>
                </div>
                <div class="text-center mb-6">
                  <a
                    class="py-2.5 px-10 inline-block text-center leading-normal text-gray-100 bg-black border border-black hover:text-white hover:ring-0 focus:outline-none focus:ring-0"
                    href="#project"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5rem"
                      height="1.5rem"
                      className="inline-block mr-1"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <rect
                        x="48"
                        y="96"
                        width="416"
                        height="320"
                        rx="40"
                        ry="40"
                        style={{
                          fill: "none",
                          stroke: "currentColor",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "32px",
                        }}
                      />
                      <polyline
                        points="112 160 256 272 400 160"
                        style={{
                          fill: "none",
                          stroke: "currentColor",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "32px",
                        }}
                      />
                    </svg>
                    Envie sua mensagem
                  </a>
                </div>
              </form>
              {/* <!-- end contact form --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
