import React, {useState} from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import '../assets/styles/Login.css'
import logo from '../assets/google-logo.png';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setAuthenticatedUser, unsetAuthenticatedUser } from '../features/users/authenticatedUserSlice';
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";

function Login() {
  const cookie = new Cookies();
  const dispatch = useDispatch()
  const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        usernameOrEmail: "",
        password: "",
    });
     const [alertMsg, setAlertMsg] = useState("");
     const [statusCode, setStatusCode] = useState("");
     const login = useGoogleLogin({
       onSuccess: (tokenResponse) => console.log(tokenResponse),
     });

    const handleSubmit = async (e) => {
      e.preventDefault();
      const url = "https://olx-api-k7zv.onrender.com/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: credentials.usernameOrEmail,
          password: credentials.password,
        }),
      });
      response.json().then((data) => {
        setStatusCode(response.status)
        setAlertMsg(data.message)
        if(response.status === 200){
          dispatch(setAuthenticatedUser(credentials.usernameOrEmail));
          cookie.set("TOKEN", data.token, { path: "/" });
          navigate("/crumpled/home");
        }
      });
    }

    return (
      <div>
        {}
        <div className="login-form container mx-auto ">
          <div className="loginForm my-40">
             {alertMsg ? (
            <div
              className={
                statusCode === 200
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
                Welcome back, To Crumpled 🚀
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
                  <img src={logo} alt="" className="google-logo mx-1" /> Log In
                  with Google{" "}
                </span>{" "}
              </button>
              <div className="flex justify-center justify-items-center">
                <div className="horizontal-line my-auto"></div>
                <div className="my-auto mx-2">or</div>
                <div className="horizontal-line my-auto"></div>
              </div>
              <div className="forUsername mt-3">
                <label for="usernameEmail" className="">
                  Username or Email
                </label>
                <br />
                <input
                  type="text"
                  name="usernameEmail"
                  value={credentials.usernameOrEmail}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      usernameOrEmail: e.target.value,
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
                  <Link to="/crumpled/users/signup" className="text-xs">
                    Not a memeber? signup here
                  </Link>
                </div>
                <div className="forget-password">
                  <a href="#">
                    <span className="text-xs">Forget Password</span>
                  </a>
                </div>
              </div>
              <button className="login-button font-bold w-full border-2 rounded-md py-3 my-3" onClick={handleSubmit}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Login;
