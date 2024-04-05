import * as React from "react";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description }) => (
  <div className="flex flex-col grow capitalize max-md:mt-10">
    <img src={imageSrc} alt={title} className="w-16 aspect-square" />
    <h3 className="mt-4 mr-5 text-3xl font-medium text-black max-md:mr-2.5">{title}</h3>
    <p className="mt-4 text-sm text-neutral-700">{description}</p>
  </div>
);

const services = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c6d50f12ecc7a9139597c04dc18e791a1634f86d0becb953982dbf3df15b3fc?apiKey=8bb55e60ed164c3885dc3e2ec7400011&",
    title: "Product Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ultricies curabitur tempus turpis aliquam lectus. Enim donec facilisi vel amet accumsan nunc amet.",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/48939a920af7ed293c225caa92782e35f86d2b0d46a70301bb10dbc74bb039ba?apiKey=8bb55e60ed164c3885dc3e2ec7400011&",
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ultricies curabitur tempus turpis aliquam lectus. Enim donec facilisi vel amet accumsan nunc amet.",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/815840570547b79945c3d666f98826c3327613271e0d2d6fbbbdc04d095a7405?apiKey=8bb55e60ed164c3885dc3e2ec7400011&",
    title: "Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ultricies curabitur tempus turpis aliquam lectus. Enim donec facilisi vel amet accumsan nunc amet.",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/18e7778669bd390f386fc35005d929338a196c15f6cff7028687f49ad98108dc?apiKey=8bb55e60ed164c3885dc3e2ec7400011&",
    title: "Staffing Solutions",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ultricies curabitur tempus turpis aliquam lectus. Enim donec facilisi vel amet accumsan nunc amet.",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/769906a444f60c46bbd16e72052f9753d0c469b133609440db9657d4c84c183a?apiKey=8bb55e60ed164c3885dc3e2ec7400011&",
    title: "AI/ML",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ultricies curabitur tempus turpis aliquam lectus. Enim donec facilisi vel amet accumsan nunc amet.",
  },
];

const OurServices: React.FC = () => {
  return (
    <section className="flex flex-col py-16 bg-white">
      <h2 className="self-start ml-40 text-5xl font-medium text-black capitalize max-md:ml-2.5 max-md:text-4xl">
        Our Services
      </h2>
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-4 mt-14 w-full min-h-[668px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd4b77e0ce161b5928cc8eba15a95040601255b4f285d840bb3fa61a329f30c3?apiKey=8bb55e60ed164c3885dc3e2ec7400011&"
          alt="Background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col w-full max-w-[1119px] max-md:max-w-full">
          <div className="shrink-0 h-1 rounded-sm bg-zinc-300 max-md:max-w-full" />
          <div className="px-px mt-14 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {services.slice(0, 3).map((service, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index === 0 ? "w-[33%] max-md:ml-0" : "ml-5 w-[33%]"
                  } max-md:w-full`}
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 max-w-full w-[691px] max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {services.slice(3).map((service, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index === 0 ? "w-[58%] max-md:ml-0" : "ml-5 w-[42%]"
                  } max-md:w-full`}
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;