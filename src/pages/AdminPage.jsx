import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/admin.css";
import Modal from "react-modal";

export const AdminPage = () => {
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selected, setSelected] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleView = (id) => {
    let entry = data.find((entry) => entry._id === id);
    setModalIsOpen(true);
    setSelected(entry);
  };

  return (
    <div className="admin-table">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Roll No</th>
            <th>Branch</th>
            <th>Graduation Year</th>
            {/* <th>Phone Number</th>
            <th>Address</th>
            <th>Country</th>
            <th>Pincode</th>
            <th>Email</th>
            <th>Photos</th>
            <th>Twitter Profile Url</th>
            <th>Instagram Profile Url</th>
            <th>Facebook Profile Url</th>
            <th>About</th>
            <th>Is Verified</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry._id}>
              <td>{entry.firstName}</td>
              <td>{entry.lastName}</td>
              <td>{entry.rollNo}</td>
              <td>{entry.branch}</td>
              <td>{entry.graduationYear}</td>
              {/* <td>{entry.phoneNumber}</td>
              <td>{entry.address}</td>
              <td>{entry.country}</td>
              <td>{entry.pincode}</td>
              <td>{entry.email}</td>
              <td>{entry.photos.join(', ')}</td>
              <td>{entry.twitterProfileUrl}</td>
              <td>{entry.instagramProfileUrl}</td>
              <td>{entry.facebookProfileUrl}</td>
              <td>{entry.about}</td> */}
              <td>
                <button
                  className="view-more"
                  onClick={() => handleView(entry._id)}
                >
                  View more
                </button>
              </td>
              <td>
                <button
                  className={`verify ${
                    entry.isVerified ? "verified" : "unverified"
                  }`}
                >
                  {entry.isVerified ? "Unverify" : "Verify"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
      >
        <h2>Student's Detail</h2>
        {selected && (
          <>
            <p>First Name: {selected.firstName}</p>
            <p>Last Name: {selected.lastName}</p>
            <p>Roll No: {selected.rollNo}</p>
            <p>Branch: {selected.branch}</p>
            <p>Graduation Year: {selected.graduationYear}</p>
            <p>Phone Number: {selected.phoneNumber}</p>
            <p>Address: {selected.address}</p>
            <p>Country: {selected.country}</p>
            <p>Pincode: {selected.pincode}</p>
            <p>Email: {selected.email}</p>
            <p>Photos: {selected.photos?.join(", ")}</p>
            <p>Twitter Profile Url: {selected.twitterProfileUrl}</p>
            <p>Instagram Profile Url: {selected.instagramProfileUrl}</p>
            <p>Facebook Profile Url: {selected.facebookProfileUrl}</p>
            <p>About: {selected.about}</p>
            <p>Is Verified: {selected.isVerified ? "Yes" : "No"}</p>
          </>
        )}
        <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
};
