import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import NotFound404 from "../Pages/NotFound404";
import HeadBodyGrid from "../components/HeadBodyGrid";

const Home = React.lazy(() => import("../Pages/Home"));
const Projet = React.lazy(() => import("../Pages/Projet"));
const Cv = React.lazy(() => import("../Pages/Cv"));
const Contact = React.lazy(() => import("../Pages/Contact"));

const Router = () => {
  return (
    <Suspense fallback={HeadBodyGrid}>
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/"> Home </Link>
        <Link to="/projet"> Projet </Link>
        <Link to="/cv"> CV </Link>
        <Link to="/contact"> Contact </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
  )
}

export default Router