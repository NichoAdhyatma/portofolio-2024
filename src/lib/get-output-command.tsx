import ProfileSection from "@/components/output/ProfileSection";


export const getOutputCommand = (input: string) => {
  switch (input) {
    case "ls":
      return <ProfileSection />;
    default:
      return "";
  }
};
