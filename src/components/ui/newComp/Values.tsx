import * as React from "react";

interface ValueCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, imageSrc, imageAlt }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow px-6 py-7 mx-auto w-full font-medium bg-white rounded-3xl border-cyan-400 border-solid shadow-2xl border-[0.5px] max-md:px-5 max-md:mt-3.5">
      <div className="flex gap-5 justify-between pr-2.5 text-3xl text-black">
        <div>{title}</div>
        <img loading="lazy" src={imageSrc} alt={imageAlt} className="shrink-0 self-start w-12 aspect-square" />
      </div>
      <div className="shrink-0 mt-4 h-0.5 blur-[0.5px]" />
      <div className="mt-4 text-base text-zinc-500">{description}</div>
    </div>
  </div>
);

const Values: React.FC = () => {
  const valueCardsData = [
    {
      title: "Commitment & Conviction",
      description:
        "We go over and beyond for our customers to ensure they have the best possible experience. We always carry out tasks with conviction and passion.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a20a40cc91479f9f08734e6e112eb3150e91bc15896d853d4c3d55de97e61516?apiKey=8bb55e60ed164c3885dc3e2ec7400011&",
      imageAlt: "Commitment & Conviction",
    },
    {
      title: "Collaboration is key",
      description:
        "We discuss and solve challenges together. Being human is key, so we embrace teamwork and are sympathetic to our differences.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/172b0964b1c37b881a05c4f7a21820a570d3c11d0a98f12e354432fd3e1b1ca7?apiKey=8bb55e60ed164c3885dc3e2ec7400011&",
      imageAlt: "Collaboration is key",
    },
    {
      title: "No Compromise Delivery",
      description:
        "Our client needs to SMILE, that's it. Its that simple! We will go to the end of the earth for customer delight.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b83bd6ccea1b47825d1f23b0852e2ce0d990f228c7aba9ae3186434e37098f1?apiKey=8bb55e60ed164c3885dc3e2ec7400011&",
      imageAlt: "No Compromise Delivery",
    },
  ];

  return (
    <div className="flex flex-col">
      <header className="flex flex-col justify-center items-start px-16 py-20 w-full text-5xl font-semibold backdrop-blur-[25px] bg-[linear-gradient(126deg,#C1EBF3_0%,#E4D0F4_100%)] text-neutral-700 max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <div className="mt-3 mb-16 ml-28 bg-clip-text bg-[linear-gradient(127deg,#1AD9DF_0%,#A824FE_100%)] max-md:mb-10 max-md:max-w-full max-md:text-4xl">
          Values Incorporated <br />
          <span className="font-medium text-neutral-700">Shaping Our Every Step</span>
        </div>
      </header>
      <main className="z-10 self-center px-5 mt-0 w-full max-w-[1120px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {valueCardsData.map((card, index) => (
            <ValueCard
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
export default Values;