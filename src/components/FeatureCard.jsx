import React from "react";
import { SocialIcon } from "react-social-icons";
import { constants } from "../constant";

function FeatureCard({
  name,
  branch,
  avatar,
  description,
  twitterLink,
  instagramLink,
  facebookLink,
}) {
  const CONSTANTS = constants();
  return (
    <div className="branch-card bg-slate-200 transition">
      <img
        className="branch-card-avatar h-48 w-full"
        src={avatar ? CONSTANTS.DO_BUCKET_URL + avatar : avatar}
      />
      <p className="branch-card-branch">{branch}</p>
      <p className="branch-card-name mt-4">{name}</p>
      <p className="text-gray-100 text-sm mt-2">{description}</p>
      <div className="branch-card-social mt-4">
        {twitterLink && <SocialIcon url={twitterLink} />}
        {instagramLink && <SocialIcon url={instagramLink} />}
        {facebookLink && <SocialIcon url={twitterLink} />}
      </div>
    </div>
  );
}

export default FeatureCard;
