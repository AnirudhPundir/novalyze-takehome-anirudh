import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home.tsx";
import Login from "../pages/Login.tsx";
import NewLogin from "../pages/NewLogin.tsx";
import Content from "../pages/Content.tsx";
import CreateUser from "../pages/CreateUser.tsx";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newLogin" element={<NewLogin/>} />
        <Route path="/content" element={<Content/>} />
        <Route path="/signup" element={<CreateUser/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
