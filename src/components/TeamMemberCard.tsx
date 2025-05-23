import React from "react";
import { type TeamMember } from "../assets/data";
import defualtAvatar from "../assets/default-avatar.png";
import linkedinIcon from "../assets/linkedin-logo.svg";

const TeamMemberCard: React.FC<TeamMember> = ({
  name,
  title,
  avatar_url,
  linkedin_url,
}) => {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg bg-gray-100 p-3 shadow-sm ">
      {
        <img
          src={avatar_url ?? defualtAvatar}
          alt={`${name}'s avatar`}
          className="h-35 w-35 rounded-full drop-shadow-xl"
        />
      }
      <div className="flex flex-col items-center">
        <div className="pb-4 items-center flex flex-col justify-center">
          <text className="text-gray-900 font-medium text-left text-lg pb-1">
            {name}
          </text>
          <p className="text-gray-700 font-normal text-left text-wrap text-base">
            {title}
          </p>
        </div>
        <div className="flex w-28 gap-1 items-center justify-center bg-blue-400 rounded-3xl p-3 drop-shadow-xl hover:bg-blue-500 transition-colors duration-300 ease-in-out">
          <img src={linkedinIcon} alt="LinkedIn icon" className="w-5 h-5"></img>
          {linkedin_url && (
            <a
              className="text-white font-normal text-sm"
              href={linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
