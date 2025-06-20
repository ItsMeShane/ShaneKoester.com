"use client"

import { Timeline, TimelineItem } from "./timeline";
import { Briefcase, Code, GraduationCap, LucideIcon } from "lucide-react";

interface TimelineEntry {
  startDate: string;
  endDate: string;
  title: string;
  establishment: string;
  establishmentURL: string;
  icon: LucideIcon;
  iconColor: string;
  position: 'left' | 'right';
  description: string;
}

const timelineData: TimelineEntry[] = [
  {
    startDate: 'Sep. 2024',
    endDate: 'Present',
    title: 'Intelligent Automation Engineer',
    establishment: 'Ontario Power Generation',
    establishmentURL: 'https://www.opg.com/',
    icon: Briefcase,
    iconColor: 'bg-[#00bc7d]',
    position: 'left',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.',
  },
  {
    startDate: 'Jan. 2024',
    endDate: 'May 2024',
    title: 'Web Developer Intern',
    establishment: 'Mind by Design',
    establishmentURL: 'https://www.mindbydesign.ca/',
    icon: Code,
    iconColor: 'bg-[#fb2c36]',
    position: 'right',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.',
  },
  {
    startDate: 'Jan. 2023',
    endDate: 'Aug. 2026',
    title: "Artificial Intelligence Engineering",
    establishment: 'Centennial College',
    establishmentURL: 'https://www.centennialcollege.ca/',
    icon: GraduationCap,
    iconColor: 'bg-[#fe9a00]',
    position: 'left',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.',
  },
];

export default function WorkWidget() {
  return (
    <div className="h-full p-6 flex flex-col gap-12 items-center overflow-x-hidden overflow-y-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">My Professional Journey</h1>
        <Timeline>
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              startDate={item.startDate}
              endDate={item.endDate}
              title={item.title}
              establishment={item.establishment}
              establishmentURL={item.establishmentURL}
              icon={item.icon}
              iconColor={item.iconColor}
              position={item.position}
            >
              <p className="text-sm">{item.description}</p>
              <button className="mt-4 text-sm font-medium hover:underline">Read more</button>
            </TimelineItem>
          ))}
        </Timeline>
    </div>
  );
}