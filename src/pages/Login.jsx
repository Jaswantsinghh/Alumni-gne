import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useStoreActions, useStoreState } from "easy-peasy";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // action to set user
  const setUser = useStoreActions((actions) => actions.setUser);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("inside handel submit");

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      if (response.status === 200) {
        setUser(response.data);
        toast.success("Login successful", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h1 className="register-heading">Login</h1>
        <div className="register-form">
          <input
            className="register-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          ></input>
          <input
            className="register-input"
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
    </div>
  );
};
