import React from "react";
import { type TeamMember } from "../assets/data";
import TeamMemberCard from "./TeamMemberCard";

export interface TeamSectionProps {
  title: string;
  description: string;
  members: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({
  title,
  description,
  members,
}) => {
  return (
    <div className="flex flex-col items-start">
      <text className="text-gray-900 font-semibold text-left pb-2 text-2xl md:text-3xl md:pb-4">
        {title}
      </text>
      <p className="text-gray-900 font-normal text-left text-base pb-8 md:text-xl">
        {description}
      </p>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-12">
        {members.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
