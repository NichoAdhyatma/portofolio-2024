import Experience from "@/components/output/Experience";
import Portofolio from "@/components/output/Portofolio";
import ProfileSection from "@/components/output/ProfileSection";


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
