import Engineering from "../images/engineering.png";
import BranchCard from "../components/BranchCard";
import CSEBranch from "../images/cse-branch.jpeg";
import MEBranch from "../images/mechanical-branch.jpeg";
import CEBranch from "../images/civil-branch.jpeg";
import ECEBranch from "../images/ece-branch.jpeg";
import EEBranch from "../images/ee-branch.jpeg";
import ITBranch from "../images/it-branch.jpeg";

const BRANCHES = [
  {
    branchName: "Computer Science",
    branchIcon: CSEBranch,
    navigateUrl: "CSE",
  },
  {
    branchName: "Mechanical",
    branchIcon: MEBranch,
    navigateUrl: "ME",
  },
  {
    branchName: "Civil",
    branchIcon: CEBranch,
    navigateUrl: "CE",
  },
  {
    branchName: "Electrical",
    branchIcon: ECEBranch,
    navigateUrl: "EE",
  },
  {
    branchName: "Electronics and Communication",
    branchIcon: EEBranch,
    navigateUrl: "ECE",
  },
  {
    branchName: "Information Technology",
    branchIcon: ITBranch,
    navigateUrl: "IT",
  },
];

export const Branches = () => {
  return (
    <div className="branches">
      <h1 className="branches-heading text-4xl mt-8">Explore By Branches</h1>
      <div className="branches-card-container">
        {BRANCHES.map(({ branchIcon, branchName, navigateUrl }) => (
          <BranchCard
            branchIcon={branchIcon}
            branchName={branchName}
            naviagteUrl={navigateUrl}
          />
        ))}
      </div>
    </div>
  );
};
