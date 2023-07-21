import React, { useState } from "react";
import "../style/register.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { constants } from "../constant";
import { validateFormFields } from "../services/validations";

export const Register = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [branch, setBranch] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [email, setEmail] = useState("");
  const [photos, setPhotos] = useState([]);
  const [twitterProfile, setTwitterProfile] = useState("");
  const [instagramProfile, setInstagramProfile] = useState("");
  const [facebookProfile, setFacebookProfile] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState({});

  const CONSTANTS = constants();

  const handleOtpSubmit = async (event) => {
    event.preventDefault();
    axios
      .post(
        `${CONSTANTS.API_BASE_URL}verify/user/${user._id}`,
        { otp: otp },
        {
          headers: {
            "Content-Type": "application/JSON",
          },
        }
      )
      .then((res) => {
        setModalIsOpen(false);
        toast.success("Email verified successful !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Incorrect OTP !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationError = validateFormFields(
      firstName,
      lastName,
      rollNo,
      branch,
      gradYear,
      email,
      password
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
    formData.append("password", password);

    for (let i = 0; i < photos.length; i++) {
      formData.append("photos", photos[i]);
    }
    axios
      .post(`${CONSTANTS.API_BASE_URL}register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success(
            "Registration successful wait until admin verifies you!",
            {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 5000,
            }
          );
          localStorage.setItem("user", JSON.stringify(res.data.user));
          setUser(res.data.user);
          setTimeout(() => {
            navigate("/login");
          }, 5000);

          // setModalIsOpen(true);
        } else {
          console.log("Error occured", err);
          toast.error("Registration failed !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 409) {
          toast.error("Email already exists !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          console.log("Error occured", err);
          toast.error("Registration failed !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-headings">
          <h1 className="register-heading--primary text-xl md:text-2xl">
            Register
          </h1>
          <p className="text-sm md:text-base">
            Please fill all the details so you can have a good profile to share
            with others
          </p>
        </div>
        <form className="register-form grid-cols-1" onSubmit={handleSubmit}>
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
          <div className="form-group ">
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
              className="py-2 px-1"
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
              className=""
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

          <div className="form-group ">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
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
          <div className="form-group col-span-2">
            <label htmlFor="aboutMe">Tell Us About Yourself:</label>
            <textarea
              id="aboutMe"
              name="aboutMe"
              value={aboutMe}
              rows={3}
              className="p-2"
              onChange={(event) => setAboutMe(event.target.value)}
              required
            ></textarea>
          </div>
          <button
            className="register-btn "
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        <ToastContainer />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Example Modal"
          className="modal"
        >
          <div className="form-group">
            <label htmlFor="otp">OTP:</label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={otp}
              onChange={(event) => setOtp(event.target.value)}
              required
            />
            <button onClick={handleOtpSubmit}>Submit</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};
