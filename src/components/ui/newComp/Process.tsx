import * as React from "react";

interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  imageSrc: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  stepNumber,
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-16 max-md:mt-10">
        <div className="flex flex-col justify-center items-center self-center px-2 text-3xl font-semibold text-white capitalize whitespace-nowrap rounded-full bg-zinc-100 h-[72px] w-[72px]">
          <div className="justify-center items-center px-6 w-full h-14 rounded-full bg-[linear-gradient(127deg,#1AD9DF_0%,#A824FE_100%)] max-md:px-5">
            {stepNumber}
          </div>
        </div>
        <div className="flex overflow-hidden relative flex-col px-7 pt-16 pb-7 mt-1.5 w-full text-black aspect-[1.11] fill-zinc-100 max-md:px-5">
          <img src={imageSrc} alt="" className="object-cover absolute inset-0 size-full" />
          <h3 className="relative text-2xl">{title}</h3>
          <p className="relative mt-5 text-base font-light">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Process: React.FC = () => {
  const processSteps = [
    {
      stepNumber: 1,
      title: "Brief",
      description:
        "We work with you to create a tailored brief to meet your senior talent requirements, ensuring a perfect match for your team.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9533fcd2f6710ac4ea176eb1328f0a532e255d48aa561d1e182078f7cd5ce9c5?apiKey=8bb55e60ed164c3885dc3e2ec7400011&",
    },
    {
      stepNumber: 2,
      title: "Headhunt",
      description:
        "We tap into our extensive network of professionals ensuring we find you only best candidates for your role.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9533fcd2f6710ac4ea176eb1328f0a532e255d48aa561d1e182078f7cd5ce9c5?apiKey=8bb55e60ed164c3885dc3e2ec7400011&",
    },
    {
      stepNumber: 3,
      title: "Shortlist",
      description:
        "We present you with an initial candidate shortlist, brief realignment , then you decide who you want to take forward to interview.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9533fcd2f6710ac4ea176eb1328f0a532e255d48aa561d1e182078f7cd5ce9c5?apiKey=8bb55e60ed164c3885dc3e2ec7400011&",
    },
    {
      stepNumber: 4,
      title: "Offer & Beyond",
      description:
        "We manage the offer process and follow us with monthly placement after care to ensure the smoothest onboarding process",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9533fcd2f6710ac4ea176eb1328f0a532e255d48aa561d1e182078f7cd5ce9c5?apiKey=8bb55e60ed164c3885dc3e2ec7400011&",
    },
  ];

  return (
    <section className="flex flex-col justify-center px-px">
      <div className="flex justify-center items-center px-16 py-20 bg-sky-50 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mb-3.5 w-full max-w-[1112px] max-md:max-w-full">
          <h2 className="self-center text-5xl font-medium text-center text-black capitalize bg-clip-text bg-[linear-gradient(127deg,#1AD9DF_0%,#A824FE_100%)] max-md:max-w-full max-md:text-4xl">
            The perfect process to help you <br /> achieve your mission
          </h2>
          <div className="mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={index}
                  stepNumber={step.stepNumber}
                  title={step.title}
                  description={step.description}
                  imageSrc={step.imageSrc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;