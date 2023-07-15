import React, { useState } from "react";
import "../style/register.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

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

  const handleOtpSubmit = async (event) => {

    event.preventDefault();
    axios.post(`http://localhost:3000/verify/user/${user._id}`, { "otp": otp }, {
      headers: {
        'Content-Type': 'application/JSON'
      }
    })
    .then((res) => {
      setModalIsOpen(false);
      toast.success('Email verified successful !', {
        position: toast.POSITION.TOP_RIGHT
    });
    navigate('/login');
    })
    .catch((err) => {
      console.log(err);
      toast.error('Incorrect OTP !', {
        position: toast.POSITION.TOP_RIGHT
    });
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
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

    for(let i=0; i<photos.length; i++) {
        formData.append("photos", photos[i]);
    }
    axios.post("http://localhost:3000/register", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    .then((res) => {
        console.log(res)
        if(res.status === 200) {
            toast.success('Registration successful !', {
                position: toast.POSITION.TOP_RIGHT
            });
            localStorage.setItem("user", JSON.stringify(res.data.user));
            setUser(res.data.user)
            setModalIsOpen(true);
        } else {
            console.log("Error occured", err);
            toast.error('Registration failed !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    })
    .catch((err) => {
        console.log("Error occured", err);
        toast.error('Registration failed !', {
            position: toast.POSITION.TOP_RIGHT
        });
    });
  };

  return (
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
        <div className="form-group">
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
        <button type="submit" onClick={handleSubmit}>Submit</button>
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
  );
}
