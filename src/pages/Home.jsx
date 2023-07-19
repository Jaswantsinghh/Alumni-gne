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
      const slicedData = data.slice(0, 4);
      setFeaturedUsers(slicedData);
    };
    featureUsers();
  }, []);

  return (
    <div className="home">
      <div className="home-pic-container">
        <img className="home-pic" src={grad} />
        <div className="home-pic-overlay">
          <p style={{ color: "white" }}>
            Celebrating the Golden Jubliee of GNDEC graduated batch of 1973.
          </p>
          {!user?.token && (
            <button
              onClick={() => {
                navigateTo("/register");
              }}
              class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-4 px-8 focus:outline-none hover:bg-indigo-600 rounded text-xl"
            >
              Register Now
            </button>
          )}
        </div>
      </div>
      <div className="home-branch-container">
        <h1 className="text-3xl text-bold font-serif">
          Featured Alumni from 1973 Batch
        </h1>
        <div className="grid grid-cols-4 gap-8 py-14">
          {featuredUsers &&
            featuredUsers.map((user) => {
              return (
                <FeatureCard
                  key={user._id}
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
