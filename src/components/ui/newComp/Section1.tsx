import * as React from "react";

interface GradientButtonProps {
  text: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({ text }) => {
  return (
    <button className="justify-center self-start px-12 py-3.5 mt-12 text-2xl font-medium leading-9 text-center text-white bg-[linear-gradient(127deg,#1AD9DF_0%,#A824FE_100%)] rounded-[30px] max-md:px-5 max-md:mt-10">
      {text}
    </button>
  );
};

const Section1: React.FC = () => {
  return (
    <div className="flex gap-5 justify-between  bg-white max-md:flex-wrap ">
    <div className="flex flex-col px-5 my-auto max-md:max-w-full lg:ml-16">
      <div className=" text-6xl font-semibold text-black bg-clip-text bg-[linear-gradient(127deg,#1AD9DF_0%,#A824FE_100%)] leading-[80px] max-md:max-w-full max-md:text-4xl max-md:leading-[59px] ">
        Unlock Growth
        <br />
        Leverage Expertise
      </div>
    
        <p className="mt-9 text-lg text-neutral-500 max-md:max-w-full">
          Lorem ipsum dolor sit amet consectetur. Purus magna quam gravida
          feugiat orci Lorem ipsum dolor sit amet consectetur. Purus magna quam
          gravida feugiat orci{" "}
        </p>
        <GradientButton text="Contact Us" />
      </div>
      <img
        loading="lazy"
        src=""
        alt="Decorative image"
        className="w-full aspect-[1.05] max-md:max-w-full"
      />
    </div>
  );
};

export default Section1;