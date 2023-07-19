import React from "react";
import { useNavigate } from "react-router-dom";

function BranchCard({ branchName, branchIcon, naviagteUrl }) {
  const navigateTo = useNavigate();

  const onClick = (branch) => {
    // e.preventDefault();
    navigateTo("/batches/" + branch);
  };

  return (
    <div className="branches-card" onClick={() => onClick(naviagteUrl)}>
      <p className="branch-name mb-4">{branchName}</p>
      <img className="branch-icon rounded w-full" src={branchIcon}></img>
    </div>
  );
}

export default BranchCard;
