import React from "react";
import { SocialIcon } from "react-social-icons";
import { constants } from "../constant";
import { Link } from "react-router-dom";
import DummyAvatar from "../images/avatar.webp";
function FeatureCard({
  id,
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
    <Link to={`/alumni/${id}`}>
      <div className="branch-card h-full bg-slate-200 transition">
        <div className="relative h-64 w-full overflow-hidden">
          <img
            className="absolute w-full object-bottom object-contain "
            src={avatar ? CONSTANTS.DO_BUCKET_URL + avatar : DummyAvatar}
          />
        </div>
        <p className="branch-card-branch">{branch}</p>
        <p className="text-xl mt-4">{name}</p>
        <p className="text-gray-100 text-sm mt-2 line-clamp-1 text-gray-600">
          {description}
        </p>
        <div className="branch-card-social mt-4">
          {twitterLink && <SocialIcon url={twitterLink} />}
          {instagramLink && <SocialIcon url={instagramLink} />}
          {facebookLink && <SocialIcon url={twitterLink} />}
        </div>
      </div>
    </Link>
  );
}

export default FeatureCard;
