import React, { useState } from "react";
import { useStoreState } from "easy-peasy";
import { updateFormValidations } from "../services/validations";
import axios from "axios";
import { constants } from "../constant";
import { ToastContainer, toast } from "react-toastify";

export const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const [firstName, setFirstName] = useState(user?.user?.firstName);
  const [lastName, setLastName] = useState(user?.user?.lastName);
  const [rollNo, setRollNo] = useState(user?.user?.rollNo);
  const [branch, setBranch] = useState(user?.user?.branch);
  const [gradYear, setGradYear] = useState(user?.user?.graduationYear);
  const [phoneNumber, setPhoneNumber] = useState(user?.user?.phoneNumber);
  const [address, setAddress] = useState(user?.user?.address);
  const [country, setCountry] = useState(user?.user?.country);
  const [pincode, setPincode] = useState(user?.user?.pincode);
  const [email, setEmail] = useState(user?.user?.email);
  // const [photos, setPhotos] = useState([]);
  const [twitterProfile, setTwitterProfile] = useState(
    user?.user?.twitterProfileUrl
  );
  const [instagramProfile, setInstagramProfile] = useState(
    user?.user?.instagramProfileUrl
  );
  const [facebookProfile, setFacebookProfile] = useState(
    user?.user?.facebookProfileUrl
  );
  const [aboutMe, setAboutMe] = useState(user?.user?.about);

  const CONSTANTS = constants();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationError = updateFormValidations(
      firstName,
      lastName,
      rollNo,
      branch,
      gradYear,
      email
    );
    if (validationError)
      return toast.error(validationError, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("rollNo", rollNo);
    formData.append("branch", branch);
    formData.append("gradYear", gradYear);
    formData.append("phoneNumber", phoneNumber);
    formData.append("address", address);
    formData.append("country", country);
    formData.append("pincode", pincode);
    formData.append("email", email);
    formData.append("twitterProfile", twitterProfile);
    formData.append("instagramProfile", instagramProfile);
    formData.append("facebookProfile", facebookProfile);
    formData.append("aboutMe", aboutMe);

    // for (let i = 0; i < photos.length; i++) {
    //   formData.append("photos", photos[i]);
    // }
    axios
      .patch(
        `${CONSTANTS.API_BASE_URL}update/user/${user.user._id} `,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("User updated", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
          });
        } else {
          console.log("Error occured", err);
          toast.error("Updated failed !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        console.log("Error occured", err);
        toast.error("Update failed !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
  return (
    <>
      <div className="ml-16 mt-8">
        <ToastContainer />
        <h1 className="">User's Profile</h1>
        <p>
          Status: <span>{user?.user?.isVerified ? "Active" : "Pending"} </span>
        </p>
      </div>
      <div className="register-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rollNo">Roll No.:</label>
            <input
              type="text"
              id="rollNo"
              name="rollNo"
              value={rollNo}
              onChange={(event) => setRollNo(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="branch">Branch:</label>
            <select
              id="branch"
              name="branch"
              value={branch}
              onChange={(event) => setBranch(event.target.value)}
              required
            >
              <option value="">Select Branch</option>
              <option value="CSE">Computer Science Engineering</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="CE">Civil Engineering</option>
              <option value="IT">Information Technology</option>
              <option value="EE">Electrical Engineering</option>
              <option value="ECE">
                Electronics and Communication Engineering
              </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="gradYear">Graduation Year:</label>
            <input
              type="number"
              id="gradYear"
              name="gradYear"
              value={gradYear}
              onChange={(event) => setGradYear(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Pincode:</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={pincode}
              onChange={(event) => setPincode(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="twitterProfile">Twitter Profile URL:</label>
            <input
              type="url"
              id="twitterProfile"
              name="twitterProfile"
              value={twitterProfile}
              onChange={(event) => setTwitterProfile(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="instagramProfile">Instagram Profile URL:</label>
            <input
              type="url"
              id="instagramProfile"
              name="instagramProfile"
              value={instagramProfile}
              onChange={(event) => setInstagramProfile(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="facebookProfile">Facebook Profile URL:</label>
            <input
              type="url"
              id="facebookProfile"
              name="facebookProfile"
              value={facebookProfile}
              onChange={(event) => setFacebookProfile(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="aboutMe">Tell Me About Yourself:</label>
            <textarea
              id="aboutMe"
              name="aboutMe"
              value={aboutMe}
              onChange={(event) => setAboutMe(event.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Update Profile</button>
        </form>
      </div>
    </>
  );
};
