import React, { useState } from "react";
import {
  updateFormValidations,
  validateFormFields,
} from "../services/validations";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { constants } from "../constant";

function ProfileModal({ user, setModalIsOpen }) {
  const CONSTANTS = constants();
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [rollNo, setRollNo] = useState(user?.rollNo);
  const [branch, setBranch] = useState(user?.branch);
  const [gradYear, setGradYear] = useState(user?.graduationYear);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);
  const [address, setAddress] = useState(user?.address);
  const [country, setCountry] = useState(user?.country);
  const [pincode, setPincode] = useState(user?.pincode);
  const [email, setEmail] = useState(user?.email);
  const [photos, setPhotos] = useState([]);
  const [twitterProfile, setTwitterProfile] = useState(user?.twitterProfileUrl);
  console.log(user);
  const [instagramProfile, setInstagramProfile] = useState(
    user?.instagramProfileUrl
  );
  const [facebookProfile, setFacebookProfile] = useState(
    user?.facebookProfileUrl
  );
  const [aboutMe, setAboutMe] = useState(user?.about);

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

    for (let i = 0; i < photos.length; i++) {
      formData.append("photos", photos[i]);
    }
    axios
      .patch(`${CONSTANTS.API_BASE_URL}update/user/${user._id} `, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("User updated", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
          });

          // setModalIsOpen(true);
        } else {
          console.log("Error occured", err);
          toast.error("Updated failed !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        console.log("Error occured", err);
        toast.error("Registration failed !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .finally(() => {
        setModalIsOpen(false);
      });
  };

  return (
    <div className="h-full absolute z-30 top-0 left-0 w-full flex justify-center items-center ">
      <div
        className="overlay absolute
        h-full w-full bg-black/50
        "
        onClick={() => setModalIsOpen(false)}
      ></div>
      <ToastContainer />
      <div className="wrapper !py-12 px-8 z-50 top-0 left-0 overflow-y-scroll max-h-[30rem] w-1/2 bg-white  rounded shadow-md">
        <div className="px-4 mt-0">
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
              <label htmlFor="photos">Photos:</label>
              <input
                type="file"
                id="photos"
                name="photos"
                multiple
                onChange={(event) => setPhotos(Array.from(event.target.files))}
                required
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
      </div>
    </div>
  );
}

export default ProfileModal;
