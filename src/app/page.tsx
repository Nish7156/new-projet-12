import CustomButton from "@/components/Elements/CustomButton";
import Process from "@/components/ui/newComp/Process";
import OurServices from "@/components/ui/newComp/OurServices";
import StillHaveQuestions from "@/components/ui/newComp/StillHaveQuestions";
import Values from "@/components/ui/newComp/Values";
import AgileTeam from "@/components/ui/newComp/AgileTeam";
import Section1 from "@/components/ui/newComp/Section1";

export default function Home() {
  return (
    <>
      {/* <CustomButton/> */}
      <Section1 />
      <Values />
      <OurServices />
      <Process />
      <AgileTeam />
     

      <Industries />
      <StillHaveQuestions />



    </>
  );
}
