import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStoreActions } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import { constants } from "../constant";
import { validateLoginFormFields } from "../services/validations";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const CONSTANTS = constants();

  // action to set user
  const setUser = useStoreActions((actions) => actions.setUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("inside handel submit");

    const validationError = validateLoginFormFields(email, password);

    if (validationError) {
      toast.error(validationError, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    try {
      const response = await axios.post(`${CONSTANTS.API_BASE_URL}login`, {
        email,
        password,
      });
      if (response.status === 200) {
        if (
          !response.data.user.isVerified &&
          response.data.user.userType !== "admin"
        ) {
          toast.error("Admin has not verified your account yet!");
          return;
        }

        setUser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        toast.success("Login successful", {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.log(response);
        setTimeout(() => {
          response.data.user.userType === "admin"
            ? (window.location.href = "/admin")
            : navigate("/");
        }, 2000);
      } else {
        toast.error("Login failed!\nIncorrect Email or Password!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (err) {
      console.log(err);
      toast.error("Login failed!\nIncorrect Email or Password!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h1 className="register-heading">Login</h1>
        <div className="login-form">
          <label htmlFor="email">Email:</label>
          <input
            className="login-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          ></input>
          <br />
          <br />
          <label htmlFor="email">Password:</label>
          <input
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          ></input>
        </div>
        <div className="register-button-container">
          <button className="register-button" type="submit">
            Login
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
