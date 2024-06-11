import React from "react";
import LogoAt from "@/assets/log-at.png";
import Image from "next/image";

type TimeLineWork = {
  index: number;
  company: string;
  location: string;
  position: string;
  bullets: string[];
  imgSrc?: string;
  duration?: string;
};

const TimeLineWorkComponent = (props: TimeLineWork) => {
  return (
    <div className="flex gap-4 items-start h-full">
      <div className="flex flex-1 flex-col items-center gap-1">
        <div className="bg-primary rounded-full w-4 h-4 text-xs text-secondary text-center font-bold hover:cursor-pointer">
          {props.index}
        </div>
        <div className="bg-primary w-[1px] h-72"></div>
      </div>

      <div className="flex flex-col items-start gap-2">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-4 items-center">
            {props.imgSrc && (
              <Image
                src={props.imgSrc}
                alt="company-logo"
                width={40}
                height={40}
              />
            )}
            <p className="text-sm">
              {props.company}{" "}
              <span className="text-gray-500 dark:text-gray-400 ">
                - {props.location}
              </span>
            </p>
          </div>

          <p className="text-sm">{props.duration}</p>
        </div>

        <p className="italic mt-1 text-sm font-semibold">{props.position}</p>

        <ul className="flex gap-3 flex-col text-sm font-normal">
          {props.bullets.map((bullet, index) => (
            <li key={index * Math.random()} className="flex items-start gap-1">
              <div>🎯</div> <p>{bullet}</p>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <div>
      <p className="text-xl font-bold">Experience</p>

      <div className="p-4">
        <TimeLineWorkComponent
          index={1}
          company="Agile Teknik - PT. Maulidan Teknologi Kreatif"
          location={"Surabaya, Indonesia"}
          position={"Software Developer"}
          bullets={[
            "Developed high-performance mobile and web apps in agile teams, ensuring timely delivery of working software each sprint.",
            "Successfully developed and monetized multiple apps through strategic in-app ads and premium features, leading to a 50% revenue increase in the first year.",
            "Enhanced MC Call Quality App from Level 3 to Level 5, optimizing user experience, leading to a 40% increase in satisfaction.",
            "Successfully launched three apps—Niko Mood, Seci Note, and Daily Plan—on Play Store and web platforms, totaling 200+ downloads with an average rating of 4.5 stars, indicating widespread popularity and user satisfaction.",
          ]}
          imgSrc={LogoAt.src}
          duration="Jan 2024 - Jun 2024"
        />
        <TimeLineWorkComponent
          index={2}
          company="Agile Product Based Learning IT PENS 2023"
          location={"Surabaya, Indonesia"}
          position={"Mobile Developer"}
          bullets={[
            "Developed high-quality mobile and web apps in an agile environment, consistently meeting sprint goals.",
            "Enhanced MC Call Quality App to Level 3 (Usability), yielding a 25% NPS increase, indicating substantial improvements in user-friendliness and satisfaction.",
            "Optimized client-side data fetching for mobile and web apps, achieving 30% faster load times and boosting user engagement by 25%.",
            "Successfully launched 'Note Taker' on the Play Store, amassing 100+ downloads and earning a stellar 4.5-star rating within the first month, showcasing its immediate popularity and positive user feedback.",
          ]}
          imgSrc={LogoAt.src}
          duration="Feb 2023 - Dec 2023"
        />
        <TimeLineWorkComponent
          index={3}
          company="Program Mahasiswa Wirausaha PENS 2023 - JadiUMKM.id "
          location={"Surabaya, Indonesia"}
          position={"Chief Technology Officer | Web Developer"}
          bullets={[
            "Directed a dynamic technology team, driving a 20% improvement in project efficiency and delivery time.",
            "Led a team to develop a full-stack web app platform for UMKM, sharpening my project management skills and culminating in a 30% boost in my ability to coordinate and lead complex software projects.",
            "Developed and executed technology strategies to meet the unique needs of UMKM and ensure platform readiness for scalable growth, resulting in a 40% improvement in platform performance and adaptability.",
            "Implemented cutting-edge tools and best practices to streamline workflows and enhance team collaboration, leading to a measurable 25% increase in overall team productivity.",
          ]}
          duration="Jan 2024 - Jun 2024"
        />
      </div>
    </div>
  );
}
