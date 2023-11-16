"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Abilità",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Formazione",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Digitazon Tech School</li>
        <li>Tech Academy</li>
      </ul>
    ),
  },
  {
    title: "Certificazioni",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Digitazon Tech School</li>
        <li>Api FCC</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/utility/about-image.jpg" alt="about-img" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 p-5 text-center">Su di Me...</h2>
          <p className="text-base lg:text-lg">
          Sono un professionista esperto nel campo dello sviluppo web, con competenze avanzate nelle seguenti tecnologie:
          HTML, CSS , JAVASCRIPT , REACT.JS , NODE & EXPRESS.</p>
          <p className="text-base lg:text-lg">Il mio impegno per l`&apos;`apprendimento continuo e la mia passione per la creazione di soluzioni tecnologiche innovative mi rendono  versatile e pronto a contribuire in modo significativo a progetti ambiziosi.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Abilità{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Formazione{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificazioni{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
