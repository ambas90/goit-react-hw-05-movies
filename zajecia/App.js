import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import axios from "axios";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Characters = lazy(() => import("./components/Characters"));

const Login = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const login = async () => {
      const { data } = await axios.get("http://localhost:3000/auth");
      console.log(data);
      if (data.success) {
        navigate("/");
        // setIsLoggedIn(true);
      } else {
        // setError(true);
      }
    };
    login();
  };

  // if (isLoggedIn) {
  //   return <Navigate to="/" replace />;
  // }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Login</label>
      <input type="text" />
      {/* <p>{error && "Niepoprawny login lub haslo"}</p> */}
    </form>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/characters" element={<Characters />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
