import Select from "react-select";
import { SocialIcon } from "react-social-icons";
import avatar from "../images/avatar.webp";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { constants } from "../constant";
import FeatureCard from "../components/FeatureCard";

export const Batch = () => {
  const navigateTo = useNavigate();
  const { branch } = useParams();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

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
        setFilteredUsers(filteredUsers);
        console.log(filteredUsers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearchBatch = (value, inputType) => {
    let filteredUsers = [];
    if (inputType === "select") {
      console.log(value);
      filteredUsers = users.filter((user) => user.graduationYear === value);
    } else {
      filteredUsers = users.filter((user) => {
        const regex = new RegExp(value, "i"); // 'i' flag for case-insensitive search
        return regex.test(user.firstName) || regex.test(user.lastName);
      });
    }

    setFilteredUsers(filteredUsers);

    console.log(users);
  };

  return (
    <div className="batches ">
      <h1 className="sm:text-3xl text-lg font-semibold text-center text-gray-900 mt-4">
        Explore by batches
      </h1>
      <div className="batch-dropdown-container mt-8 space-x-4">
        <p className="batch-year">Batch Year</p>
        <Select
          className="batch-dropdown z-10"
          options={options}
          onChange={(value) => handleSearchBatch(value.value, "select")}
        />
      </div>
      <div className="batch-filters ">
        <input
          className="w-1/3 px-4 border rounded border-gray"
          placeholder="Search by keyword"
          onChange={(e) => handleSearchBatch(e.target.value, "input")}
        />
        <button className="text-white bg-indigo-600 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-xl">
          Search
        </button>
      </div>
      <div className="grid mt-12 grid-cols-4 gap-6">
        {filteredUsers.length === 0 && (
          <p className="text-center text-3xl">No results found</p>
        )}
        {filteredUsers.map((user) => {
          return (
            <div className="h-[25rem]">
              <FeatureCard
                key={user._id}
                id={user._id}
                avatar={user?.photos.length > 0 && user?.photos[0]}
                name={user.firstName + user?.lastName}
                branch={`${user?.branch} ${user?.graduationYear}`}
                description={user?.about}
              />
            </div>
            // <div
            //   className="branch-card cursor-pointer"
            //   onClick={() => handleClick(user._id)}
            //   key={user._id}
            // >
            //   <img
            //     className="branch-card-avatar"
            //     src={
            //       user?.photos?.length > 0
            //         ? `${CONSTANTS.DO_BUCKET_URL}${user.photos[0]}`
            //         : avatar
            //     }
            //   />
            //   <p className="branch-card-branch">
            //     {user.branch} {user.graduationYear} | Roll No.: {user.rollNo}
            //   </p>
            //   <p className="branch-card-name">
            //     {user.firstName + " " + user.lastName}
            //   </p>
            //   <p>
            //     {user.aboutMe?.length > 100
            //       ? user.about.slice(0, 100) + "..."
            //       : user.about}
            //   </p>
            // </div>
          );
        })}
      </div>
    </div>
  );
};
