import React, { useState } from "react";
import { useStoreState } from "easy-peasy";

export const Profile = () => {

    const user = JSON.parse(localStorage.getItem("user"));
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
  const [photos, setPhotos] = useState([]);
  const [twitterProfile, setTwitterProfile] = useState(user?.user?.twitterProfileUrl);
  const [instagramProfile, setInstagramProfile] = useState(user?.user?.instagramProfileUrl);
  const [facebookProfile, setFacebookProfile] = useState(user?.user?.facebookProfileUrl);
  const [aboutMe, setAboutMe] = useState(user?.user?.about);
  return (
    <>
      <h1>User's Profile</h1>
      <p>Status: <span>{user?.user?.isVerified ? "Active" : "Pending"} </span></p>
      <div className="register-container">
        <form>
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
          <button type="submit">
            Update Profile
          </button>
        </form>
      </div>
    </>
  );
};