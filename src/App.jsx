import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Layout from "./components/layout/Layout";
import Devon from "./pages/devon/Devon";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Default route for "/" */}
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="devon" element={<Devon />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
