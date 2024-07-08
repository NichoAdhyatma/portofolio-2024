import {PortofolioCard} from "@/components/molecules/PortofolioCard";
import {portfolioItems} from "@/core/data/portofolioItems";



export default function Portofolio() {
    return (
        <div className={"my-4"}>
            <p className="text-2xl font-bold underline">Portofolio </p>
            <div className="flex flex-col gap-5 w-full mt-4">
                {portfolioItems.map((item, index) => (
                    <PortofolioCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        logo={item.logo}
                        techStack={item.techStack}
                        links={item.links}
                        images={item.images}
                    />
                ))}
            </div>
        </div>
    );
}
