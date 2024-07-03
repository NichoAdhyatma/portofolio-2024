import Experience from "@/components/organisms/Experience";
import Portofolio from "@/components/organisms/Portofolio";
import ProfileSection from "@/components/organisms/ProfileSection";
import SkillSection from "@/components/organisms/SkillSection";


export const getOutputCommand = (input: string) => {
  switch (input) {
    case "about":
      return <ProfileSection />;
    case "exp":
      return <Experience/>
    case "porto":
      return <Portofolio/>
    case "skill":
      return <SkillSection/>
    default:
      return "";
  }
};
