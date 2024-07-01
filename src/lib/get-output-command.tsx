import Experience from "@/components/organisms/Experience";
import Portofolio from "@/components/organisms/Portofolio";
import ProfileSection from "@/components/organisms/ProfileSection";


export const getOutputCommand = (input: string) => {
  switch (input) {
    case "about":
      return <ProfileSection />;
    case "exp":
      return <Experience/>
    case "portofolio":
      return <Portofolio/>
    default:
      return "";
  }
};
