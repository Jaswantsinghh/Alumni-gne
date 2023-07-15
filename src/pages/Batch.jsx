import Select from "react-select";
import { SocialIcon } from "react-social-icons";
import avatar from "../images/avatar.webp";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { constants } from "../constant";

export const Batch = () => {
  const navigateTo = useNavigate();
  const { branch } = useParams();
  const [users, setUsers] = useState([]);

  const CONSTANTS = constants();
  const handleClick = (id) => {
    navigateTo(`/alumni/${id}`);
  };

  const options = [
    {
      value: 1973,
      label: "1973",
    },
    {
      value: 1974,
      label: "1974",
    },
    {
      value: 1975,
      label: "1975",
    },
    {
      value: 1976,
      label: "1976",
    },
  ];

  useEffect(() => {
    axios
      .get(`${CONSTANTS.API_BASE_URL}verified-users`)
      .then((res) => {
        const filteredUsers = res.data.filter((user) => user.branch === branch);
        setUsers(filteredUsers);
        console.log(filteredUsers)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="batches">
      <h1 className="batch-heading">Explore By Batches</h1>
      <div className="batch-dropdown-container">
        <p className="batch-year">Batch Year</p>
        <Select className="batch-dropdown" options={options} />
      </div>
      <div className="batch-filters">
        <input className="batch-search" placeholder="Search by keyword"></input>
        <div className="batch-search-button">Search</div>
      </div>
      <div className="batch-grid">
        {users.map((user) => {
          return (
            <div className="branch-card" onClick={() => handleClick(user._id)} key={user._id}>
              <img className="branch-card-avatar" src={user?.photos?.length > 0 ? `http://localhost:3000/public/uploads/${user.photos[0]}` : avatar} />
              <p className="branch-card-branch">{user.branch} {user.graduationYear} | Roll No.: {user.rollNo}</p>
              <p className="branch-card-name">
                {user.firstName + " " + user.lastName}
              </p>
              <p>
                {user.aboutMe?.length > 100
                  ? user.about.slice(0, 100) + "..."
                  : user.about}
              </p>
              <div className="branch-card-social">
                <SocialIcon url="https://twitter.com/" />
                <SocialIcon url="https://instagram.com/" />
                <SocialIcon url="https://facebook.com/" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
