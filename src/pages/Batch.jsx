import Select from "react-select";
import { SocialIcon } from "react-social-icons";
import avatar from "../images/avatar.webp";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const Batch = () => {
  const navigateTo = useNavigate();
  const { branch } = useParams();
  const [users, setUsers] = useState([]);

  const onClick = (e) => {
    e.preventDefault();
    navigateTo("/alumni");
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
      .get("http://localhost:3000/users")
      .then((res) => {
        const filteredUsers = res.data.filter((user) => user.branch === branch);
        setUsers(filteredUsers);
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
            <div className="branch-card" onClick={onClick} key={user._id}>
              <img className="branch-card-avatar" src={avatar} />
              <p className="branch-card-branch">{user.branch} '73</p>
              <p className="branch-card-name">
                {user.firstName + " " + user.lastName}
              </p>
              <p>
                Glavi amet ritnisl libero molestie ante ut fringilla purus eros
                quis glavrid from dolor amet iquam lorem bibendum
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
