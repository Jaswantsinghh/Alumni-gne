import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SocialIcon } from "react-social-icons";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { constants } from "../constant";

export const Alumni = () => {
  const { alumniId } = useParams();
  const [user, setUser] = useState({});
  const [photos, setPhotos] = useState([]);

  const CONSTANTS = constants();
  const handleAlumni = () => {
    axios
      .get(`${CONSTANTS.API_BASE_URL}user/${alumniId}`)
      .then((res) => {
        console.log(res);
        setUser(res.data);
        if (photos.length === 0) {
            for(let i=0; i<res.data.photos.length; i++){
                setPhotos((photos) => [...photos, i])
            }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleAlumni();
    console.log(photos);
  }, []);

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
  return (
    <div className="alumni">
      <div className="alumni-body">
        <div className="alumni-details">
          <h1>
            {user.firstName} {user.lastName}
          </h1>
          <b>Branch: </b><span>{user.branch}</span><br/>
          <b>Batch: </b><span>{user.graduationYear}</span><br/>
          <b>Roll no.: </b><span>{user.rollNo}</span><br/>
          <p>{user.about}</p>
        </div>
        <Slider className="alumni-slider" {...settings}>
            {photos.map((index) => {
                return (
                    <div className="slider-component" id={index}>
                        <img className="slider-img" src={`${CONSTANTS.DO_BUCKET_URL}${user.photos[index]}`}></img>
                    </div>
                )
            }
            )}
        </Slider>
      </div>
      <div className="alumni-cards">
        <div className="alumni-card">
          <div>
            <h2 className="alumni-card-heading">CALL ME</h2>
          </div>
          <p>{user.phoneNumber}</p>
        </div>
        <div className="alumni-card">
          <div>
            <h2 className="alumni-card-heading">ADDRESS</h2>
          </div>
          <p>{user.address}</p>
        </div>
        <div className="alumni-card">
          <div>
            <h2 className="alumni-card-heading">SOCIAL LINKS</h2>
          </div>
          <div className="branch-card-social">
            <SocialIcon className="social-icons" url="https://twitter.com/" />
            <SocialIcon className="social-icons" url="https://instagram.com/" />
            <SocialIcon className="social-icons" url="https://facebook.com/" />
          </div>
        </div>
      </div>
    </div>
  );
};
