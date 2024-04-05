import * as React from "react";

interface QuestionsSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
}

const QuestionsSection: React.FC<QuestionsSectionProps> = ({
  title,
  description,
  imageUrl,
  buttonText,
}) => {
  return (
    <section className="flex justify-center items-center px-16 py-14 text-center text-black bg-[linear-gradient(126deg,#C1EBF3_0%,#E4D0F4_100%)] rounded-[32px] max-md:px-5">
      <div className="flex flex-col items-center max-w-full w-[716px]">
        <h2 className="text-4xl font-semibold max-md:max-w-full">{title}</h2>
        <p className="self-stretch mt-6 text-xl max-md:max-w-full">
          {description}
        </p>
        <img
          loading="lazy"
          src={imageUrl}
          alt="Support team"
          className="mt-8 max-w-full rounded-full aspect-[2.44] w-[118px]"
        />
        <button className="justify-center px-12 py-3.5 mt-12 text-2xl font-medium leading-9 text-white bg-[linear-gradient(127deg,#1AD9DF_0%,#A824FE_100%)] rounded-[30px] max-md:px-5 max-md:mt-10">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

const StillHaveQuestions: React.FC = () => {
  return (
    <QuestionsSection
      title="Still have questions?"
      description="Can't find the answer you're looking for? Please talk to our friendly team."
      imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/37847c10e84e0b9628421a782fedc5cc2c6de905bb98712b4d91d8d1a3c3c049?apiKey=8bb55e60ed164c3885dc3e2ec7400011&"
      buttonText="Contact Us"
    />
  );
};

export default StillHaveQuestions;