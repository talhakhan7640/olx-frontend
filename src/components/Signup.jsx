import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import "../assets/styles/Login.css";
import logo from "../assets/google-logo.png";
import { Link } from "react-router-dom";

function Signup() {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [alertMsg, setAlertMsg] = useState("");
  const [statusCode, setStatusCode] = useState("");
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("pressed");
    const url = "https://olx-api-k7zv.onrender.com/registration";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    response.json().then((data) => {
      setStatusCode(response.status);
      setAlertMsg(data.message);
      if(response.status === 201)
        window.location.replace("/crumpled/users/login");
    });
  };

  return (
    <div>
      <div className="login-form container mx-auto">
        <div className="loginForm my-40">
          {alertMsg ? (
            <div
              className={
                statusCode === 201
                  ? "bg-green-300 alert_msg py-2 px-3 my-6 rounded-lg text-sm"
                  : "bg-red-300 alert_msg py-2 px-3 my-6 rounded-lg text-sm"
              }
            >
              {alertMsg}
            </div>
          ) : (
            <div> </div>
          )}
          <form
            method="post"
            className=" border-2 rounded-lg lg:w-96 mx-auto p-6"
            onSubmit={handleSubmit}
          >
            <h1 className=" font-semibold text-xl -mb-1">
              Create an account 🚀
            </h1>
            <span className=" text-xs">
              A modern way to buy the used quality products
            </span>
            <br />
            <button
              onClick={() => login()}
              className="login-with-google font-bold w-full border-2 rounded-md py-2 my-5"
            >
              <span className="flex justify-center">
                <img src={logo} alt="" className="google-logo mx-1" /> Sign up
                with Google{" "}
              </span>{" "}
            </button>{" "}
            <div className="flex justify-center justify-items-center">
              <div className="horizontal-line my-auto"></div>
              <div className="my-auto mx-2">or</div>
              <div className="horizontal-line my-auto"></div>
            </div>
            <div className="forUsername mt-3">
              <label for="username" className="">
                Username
              </label>
              <br />
              <input
                type="text"
                name="username"
                value={credentials.usernameOrEmail}
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    username: e.target.value,
                  });
                }}
                className="login-input-field p-2 w-full my-1 border-2 rounded-md "
              />
            </div>
            <div className="forEmail mt-3">
              <label for="email" className="">
                Email
              </label>
              <br />
              <input
                type="text"
                name="email"
                value={credentials.usernameOrEmail}
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    email: e.target.value,
                  });
                }}
                className="login-input-field p-2 w-full my-1 border-2 rounded-md "
              />
            </div>
            <div className="forPassword mt-3">
              <label for="password" className="">
                Password
              </label>
              <br />
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    password: e.target.value,
                  });
                }}
                className="login-input-field p-2 w-full my-1  border-2 rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <div>
                <Link to="/crumpled/users/login" className="text-xs">
                  Alredy have an accout? Login
                </Link>
              </div>
              <div className="forget-password">
                <a href="#">
                  {/* <span className="text-xs">Forget Password</span> */}
                </a>
              </div>
            </div>
            <button
              className="login-button font-bold w-full border-2 rounded-md py-3 my-3"
              onClick={handleSubmit}
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
