import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NotFound404 from "./Pages/NotFound404";
import HeadBodyGrid from "./components/HeadBodyGrid";

const Home = React.lazy(() => import("./Pages/Home"));
const Projet = React.lazy(() => import("./Pages/Projet"));
const Cv = React.lazy(() => import("./Pages/Cv"));
const Contact = React.lazy(() => import("./Pages/Contact"));
// import Projet from  './Pages/Projet'
// import Cv from  './Pages/Cv'
// import Contact from  './Pages/Contact'

function App() {
  return (
    <Suspense fallback={HeadBodyGrid}>
      <Router>
        <nav>
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
      </Router>
    </Suspense>
  );
}

export default App;
