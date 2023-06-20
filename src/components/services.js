import React from "react";
import ServiceBlock from "./serviceBlock";

export default function Services() {
  return (
    <div
      id="services"
      className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        {/* <!-- Heading start --> */}
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
            O que fazemos
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
                strokeWidth: "2",
                strokeMiterlimit: "10",
              }}
            />
            <line
              x1="55.1"
              y1="30.4"
              x2="100"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
            />
            <line
              x1="45.1"
              y1="30.4"
              x2="0"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
            />
          </svg>
          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            Oferecemos os mais diverços serviços para sua você
          </p>
        </header>
        {/* <!-- End heading --> */}

        {/* <!-- row --> */}
        <div className="flex flex-wrap flex-row -mx-4 text-center">
          <ServiceBlock
            title="Empresarial"
            description="Oferecemos serviços jurídicos especializados para empresas, auxiliando em questões contratuais, societárias, tributárias e outros assuntos relacionados ao ambiente empresarial."
            icon={true}
          />
          <ServiceBlock
            title="Trabalhista"
            description="Atuamos na defesa dos direitos dos trabalhadores e empregadores, prestando serviços de consultoria, elaboração de contratos, representação em processos judiciais e administrativos, entre outros assuntos trabalhistas."
            icon={true}
          />
          <ServiceBlock
            title="Família"
            description="Oferecemos suporte jurídico em questões relacionadas ao direito de família, como divórcio, pensão alimentícia, guarda de filhos, adoção, inventário, entre outros assuntos familiares."
            icon={true}
          />
          <ServiceBlock
            title="Consumidor"
            description="Prestamos assessoria jurídica para consumidores em casos de problemas com produtos, serviços, contratos, propaganda enganosa, cobranças indevidas e outras questões relacionadas ao direito do consumidor."
            icon={true}
          />
          <ServiceBlock
            title="Previdenciário"
            description="Atuamos na área previdenciária, auxiliando segurados do INSS em questões relacionadas a benefícios previdenciários, como aposentadoria, pensão por morte, auxílio-doença, entre outros direitos previdenciários."
            icon={true}
          />
          <ServiceBlock
            title="Inventários"
            description="Oferecemos serviços de assessoria em inventários, auxiliando na regularização e partilha de bens após o falecimento de uma pessoa, seguindo os trâmites legais e assegurando os direitos dos herdeiros."
            icon={true}
          />
        </div>
      </div>
    </div>
  );
}
