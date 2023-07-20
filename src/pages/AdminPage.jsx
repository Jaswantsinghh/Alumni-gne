import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/admin.css";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { constants } from "../constant";

export const AdminPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const CONSTANTS = constants();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (!user) {
      navigate("/");
    } else {
      if (user?.user?.userType !== "admin") {
        navigate("/");
      }
    }
  }, []);
  const handleView = (id) => {
    let entry = data.find((entry) => entry._id === id);
    setModalIsOpen(true);
    setSelected(entry);
  };

  const handleVerify = (id) => {
    let entry = data.find((entry) => entry._id === id);
    entry.isVerified = !entry.isVerified;
    axios
      .patch(`${CONSTANTS.API_BASE_URL}verify/${id}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Verification successful !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Verification failed !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const handleUnverify = (id) => {
    axios
      .patch(`${CONSTANTS.API_BASE_URL}unverify/${id}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Unverification successful !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Unverification failed !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`${CONSTANTS.API_BASE_URL}user/${id}`)
      .then((res) => {
        console.log(res);
        toast.success("Deletion successful !");
        fetchUsers();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchUsers = () => {
    axios
      .get(`${CONSTANTS.API_BASE_URL}users`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchUsers();
  }, []);

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
            <th>Updation Request</th>
            <th>More Details</th>
            <th>Verify/Unverify</th>
            <th>Edit</th>
            <th>Delete</th>
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
              <td>
                {entry.updationReq && entry.updationReq === 1
                  ? "Updated"
                  : "New"}
              </td>

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
                  onClick={() =>
                    entry.isVerified
                      ? handleUnverify(entry._id)
                      : handleVerify(entry._id)
                  }
                  className={`verify ${
                    entry.isVerified ? "verified" : "unverified"
                  }`}
                >
                  {entry.isVerified ? "Unverify" : "Verify"}
                </button>
              </td>
              <td>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  version="1.1"
                  id="Capa_1"
                  width="800px"
                  height="800px"
                  viewBox="0 0 494.936 494.936"
                >
                  <g>
                    <g>
                      <path d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157    c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21    s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741    c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z" />
                      <path d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069    c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963    c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692    C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107    l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005    c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z" />
                    </g>
                  </g>
                </svg>
              </td>
              <td>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  onClick={() => handleDelete(entry._id)}
                >
                  <path
                    d="M4 7H20"
                    stroke="#000000"
                    strokeWidth="2"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 10L7.70141 19.3578C7.87432 20.3088 8.70258 21 9.66915 21H14.3308C15.2974 21 16.1257 20.3087 16.2986 19.3578L18 10"
                    stroke="#000000"
                    strokeWidth="2"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    stroke="#000000"
                    strokeWidth="2"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
        className="modal"
      >
        <div className="bg-white shadow-md rounded-lg p-6 w-[80%]">
          <h2 className="text-3xl font-bold mb-4">Student's Detail</h2>
          {selected && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-lg mb-2">
                    <span className="font-semibold">Full Name:</span>{" "}
                    {selected.firstName} {selected.lastName}
                  </p>
                  <p className="text-lg mb-2">
                    <span className="font-semibold">Roll No:</span>{" "}
                    {selected.rollNo}
                  </p>
                  <p className="text-lg mb-2">
                    <span className="font-semibold">Branch:</span>{" "}
                    {selected.branch}
                  </p>
                  <p className="text-lg mb-2">
                    <span className="font-semibold">Graduation Year:</span>{" "}
                    {selected.graduationYear}
                  </p>
                  <p className="text-lg mb-2">
                    <span className="font-semibold">Email:</span>{" "}
                    {selected.email}
                  </p>
                  <p className="text-lg mb-2">
                    <span className="font-semibold">Phone Number:</span>{" "}
                    {selected.phoneNumber}
                  </p>
                </div>
                <div>
                  <p className="text-lg mb-2">
                    <span className="font-semibold">Address:</span>{" "}
                    {selected.address}
                  </p>
                  <p className="text-lg mb-2">
                    <span className="font-semibold">Country:</span>{" "}
                    {selected.country}
                  </p>
                  <p className="text-lg mb-2">
                    <span className="font-semibold">Pincode:</span>{" "}
                    {selected.pincode}
                  </p>
                  <p className="text-lg mb-2">
                    <span className="font-semibold">Photos:</span>{" "}
                    {selected.photos?.join(", ")}
                  </p>
                  <p className="text-lg mb-2">
                    <span className="font-semibold">Social Media:</span>
                  </p>
                  <div className="flex space-x-4">
                    <p>
                      <span className="font-semibold">Twitter:</span>{" "}
                      {selected.twitterProfileUrl}
                    </p>
                    <p>
                      <span className="font-semibold">Instagram:</span>{" "}
                      {selected.instagramProfileUrl}
                    </p>
                    <p>
                      <span className="font-semibold">Facebook:</span>{" "}
                      {selected.facebookProfileUrl}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-lg mt-4">
                <span className="font-semibold">About:</span> {selected.about}
              </p>
              <p className="text-lg mt-4">
                <span className="font-semibold">Is Verified:</span>{" "}
                {selected.isVerified ? "Yes" : "No"}
              </p>
            </>
          )}
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-md mt-6 hover:bg-indigo-700"
            onClick={() => setModalIsOpen(false)}
          >
            Close Modal
          </button>
        </div>

        {/* <h2>Student's Detail</h2>
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
        <button onClick={() => setModalIsOpen(false)}>Close Modal</button> */}
      </Modal>
      <ToastContainer />
    </div>
  );
};
