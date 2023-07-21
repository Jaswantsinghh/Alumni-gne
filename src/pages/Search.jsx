import Select from "react-select";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { constants } from "../constant";
import FeatureCard from "../components/FeatureCard";

export const SearchPage = () => {
  const navigateTo = useNavigate();
  const { searchUrl } = useParams();
  const [users, setUsers] = useState([]);

  const CONSTANTS = constants();

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
        const filteredUsers = res.data.filter((user) => {
          const regex = new RegExp(searchUrl, "i"); // 'i' flag for case-insensitive search
          return regex.test(user.firstName) || regex.test(user.lastName);
        });
        console.log(filteredUsers);
        setUsers(filteredUsers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="batches ">
      <h1 className="sm:text-3xl text-lg font-semibold text-center text-gray-900 mt-4">
        Search Results
      </h1>

      <div className="grid mt-12 grid-cols-1 md:grid-cols-4 gap-6">
        {users.length === 0 && (
          <p className="text-center text-3xl">No results found</p>
        )}
        {users.map((user) => {
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
          );
        })}
      </div>
    </div>
  );
};
