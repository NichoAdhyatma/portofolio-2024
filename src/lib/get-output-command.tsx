import Experience from "@/components/output/Experience";
import ProfileSection from "@/components/output/ProfileSection";


export const getOutputCommand = (input: string) => {
  switch (input) {
    case "about":
      return <ProfileSection />;
    case "exp":
      return <Experience/>
    default:
      return "";
  }
};
