import * as React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <img loading="lazy" src={src} alt={alt} className="shrink-0 max-w-full aspect-[0.48] w-[161px]" />;
};

const images = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3b22bfe269f89462a05b6a9979d13e0ebf40454f623ff09ece7ef60ffa40386?apiKey=8bb55e60ed164c3885dc3e2ec7400011&", alt: "Image 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8cab7968c4599ad4afe13f2e68f3cd2d33e9293cdc69567a287fdec2a3dd0e8d?apiKey=8bb55e60ed164c3885dc3e2ec7400011&", alt: "Image 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cf67e9d2d4cd8f2e560557443e174f61d897ec232ae829d2d07d779ea56e4c3?apiKey=8bb55e60ed164c3885dc3e2ec7400011&", alt: "Image 3" },
];

const AgileTeam: React.FC = () => {
  return (
    <main>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 px-16">
        <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-5 mt-20 max-md:mt-10 max-md:max-w-full">
            <h1 className="text-5xl font-semibold text-black capitalize max-md:max-w-full max-md:text-4xl">
              Agile team on <br /> demand
            </h1>
            <p className="mt-3 text-base capitalize text-neutral-700 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Ultricies curabitur tempus turpis aliquam lectus. Enim donec
              facilisi vel amet accumsan nunc amet.
            </p>
            <button className="justify-center px-12 py-3.5 mt-12 text-2xl font-medium leading-9 text-center text-white bg-[linear-gradient(127deg,#1AD9DF_0%,#A824FE_100%)] rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              See How It Works
            </button>
          </div>
        </section>
        <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="grow px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`flex flex-col w-[33%] max-md:ml-0 max-md:w-full ${
                    index === 0 ? "mt-20 max-md:mt-10" : index === 1 ? "ml-5 max-md:mt-3.5" : "ml-5 my-auto max-md:mt-10"
                  }`}
                >
                  <Image src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AgileTeam;