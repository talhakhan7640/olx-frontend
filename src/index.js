import React from "react"; 
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Home from "./pages/Home.jsx";
import AuthRoute from "./components/AuthRoute.jsx";
import Messages from "./pages/Messages.jsx";
import Favorite from "./pages/Favorite";
import Profile from "./pages/Profile";
import Tvs from './pages/categories/Tvs.jsx';
import Beds from './pages/categories/Beds'
import Mobiles from './pages/categories/Mobiles'
import Motorcycles from './pages/categories/Motorcycles'
import Sell from "./components/Sell";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="411630756280-vg58gn56n5uetu7ba0518e0cvuo7ae1u.apps.googleusercontent.com">
      <BrowserRouter>
        <App>
          <Routes>
            <Route path="/" element={<Navigate to="/crumpled/users/login" />} />

            <Route path="crumpled/">
              <Route path="users/">
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
              </Route>

              <Route
                path="home/"
                element={<AuthRoute component={<Home />} />}
              />
              <Route
                path="messages/"
                element={<AuthRoute component={<Messages />} />}
              />
              <Route
                path="favorite/"
                element={<AuthRoute component={<Favorite />} />}
              />
              <Route
                path="profile/"
                element={<AuthRoute component={<Profile />} />}
              />

              <Route path="categories/">
                <Route path="tvs" element={<AuthRoute component={<Tvs />} />} />
                <Route path="beds" element={<AuthRoute component={<Beds />} />} />
                <Route path="mobiles" element={<AuthRoute component={<Mobiles />} />} />
                <Route path="motorcycles" element={<AuthRoute component={<Motorcycles/>} />} />
              </Route>

              <Route path="items/sell-item/" element={<AuthRoute component={<Sell/>} />} />
            </Route>
          </Routes>
        </App>
      </BrowserRouter>
      {/* <BrowserRouter>
        <App>
          <Routes>
            <Route path="/" element={<Navigate to="/crumpled/users/login" />} />

              <Route path="users/">
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
              </Route>

              <Route
                path="home/"
                element={<AuthRoute component={<Home />} />}
              />
              <Route
                path="messages/"
                element={<AuthRoute component={<Messages />} />}
              />
              <Route
                path="favorite/"
                element={<AuthRoute component={<Favorite />} />}
              />
              <Route
                path="profile/"
                element={<AuthRoute component={<Profile />} />}
              />
          </Routes>
        </App>
      </BrowserRouter> */}
    </GoogleOAuthProvider>
  </Provider>
);
