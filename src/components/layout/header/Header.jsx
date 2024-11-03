import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import rasm from "../../../assets/images/logo.jfif";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav container">
        <NavLink to={"/"} className="header__nav__logo">
          <img src={rasm} alt="Logo" />
          <h2>
            Bobur <br /> Korpus
          </h2>
        </NavLink>
        <ul className="header__nav__list">
          <li className="header__nav__item">
            <NavLink to={"/"}>Bosh Sahifa</NavLink>
          </li>
          <li className="header__nav__item">
            <NavLink to={"/about"}>Muallif haqida</NavLink>
          </li>
          <li className="header__nav__item">
            <NavLink to={"/blog"}>Boburnoma</NavLink>
          </li>
          <li className="header__nav__item">
            <NavLink to={"/devon"}>Bobur Devoni</NavLink>
          </li>
          <li className="header__nav__item">
            <NavLink to={"/contact"}>Biz bilan Aloqa</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
