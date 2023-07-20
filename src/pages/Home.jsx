import grad from "../images/grad.webp";
import avatar from "../images/avatar.webp";
import { SocialIcon } from "react-social-icons";
import { useNavigate } from "react-router";
import Slider from "react-slick";
import engineering from "../images/engineering.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ss1 from "../images/ss1.png";
import ss2 from "../images/ss2.png";
import FeatureCard from "../components/FeatureCard";
import { useEffect, useState } from "react";
import SliderOne from "../images/college-slider-1.jpeg";
import SliderTwo from "../images/college-slider-2.avif";
import SliderThree from "../images/college-slider-3.jpeg";

export const Homepage = () => {
  const navigateTo = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const [user, setUser] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (!user?.token) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const [featuredUsers, setFeaturedUsers] = useState();

  useEffect(() => {
    const featureUsers = async () => {
      const res = await fetch(
        "https://hammerhead-app-9bqxa.ondigitalocean.app/verified-users"
      );
      const data = await res.json();
      console.log(data);
      const slicedData = data.slice(0, 8);
      setFeaturedUsers(slicedData);
    };
    featureUsers();
  }, []);

  const hanldeSearch = async (e) => {
    e.preventDefault();
    navigateTo(`/search/${searchValue}`);
  };

  return (
    <div className="home ">
      <div className="home-pic-container">
        <img className="home-pic" src={grad} />
        <form className="home-pic-overlay " onSubmit={hanldeSearch}>
          <p
            style={{ color: "white" }}
            className="text-5xl w-3/4 font-medium text-center text-gray-900 mb-8"
          >
            Celebrating the Golden Jubliee of GNDEC graduated batch of 1973.
          </p>
          <div class="w-[60%] mx-auto">
            <div class="relative flex items-center w-full h-14 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <div class="grid place-items-center h-full w-14  text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search here.."
              />
            </div>
          </div>

          <button
            // onClick={}
            type="submit"
            class="flex items-center gap-4  mt-6 text-white bg-indigo-600 border-0 py-4 px-4 focus:outline-none hover:bg-indigo-700 rounded text-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-flex mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="inline-flex mt-1">Search</span>
          </button>
        </form>
      </div>
      <div className="home-branch-container mt-12">
        <h1 className="text-3xl text-bold font-serif">
          Featured Alumni from 1973 Batch
        </h1>
        <div className="grid grid-cols-4 grid-rows-2 gap-8 py-14">
          {featuredUsers &&
            featuredUsers.map((user) => {
              return (
                <FeatureCard
                  key={user._id}
                  id={user._id}
                  name={user.firstName + user?.lastName}
                  branch={`${user?.branch} ${user?.graduationYear}`}
                  avatar={user?.photos.length > 0 && user?.photos[0]}
                  description={user?.about}
                  twitterLink={user?.twitterProfileUrl}
                  instagramLink={user?.instagramProfileUrl}
                  facebookLink={user?.facebookProfileUrl}
                />
              );
            })}
        </div>
        <div className="home-slider-container">
          <h1 className="text-3xl text-bold font-serif">
            A Glimpse of Golden Jublee of 1973 Batch
          </h1>
          <Slider className="alumni-slider !z-10" {...settings}>
            <div className="slider-component">
              <img className="slider-img" src={SliderOne}></img>
            </div>
            <div className="slider-component">
              <img className="slider-img" src={SliderTwo}></img>
            </div>
            <div className="slider-component">
              <img className="slider-img" src={SliderThree}></img>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
