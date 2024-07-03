import Experience from "@/components/organisms/Experience";
import Portofolio from "@/components/organisms/Portofolio";
import ProfileSection from "@/components/organisms/ProfileSection";
import SkillSection from "@/components/organisms/SkillSection";


export const getOutputCommand = (input: string) => {
    switch (input) {
        case "about":
            return <ProfileSection/>;
        case "exp":
            return <Experience/>
        case "porto":
            return <Portofolio/>
        case "skill":
            return <SkillSection/>
        case "all":
            return <div className="flex flex-col gap-2 items-start">
                <ProfileSection/>
                <SkillSection/>
                <Portofolio/>
                <Experience/>
            </div>
        default:
            return "";
    }
};
