import React from "react";
import { useLocation } from "react-router";
import { LinkStyled, NavList } from "./Navs.styled";

const LINKS = [
  { to: "/", text: "Home" },
  { to: "/starred", text: "starred" },
  { to: "/about", text: "about" },
];

function Navs() {
  const location = useLocation()
  return (
    <>
      <NavList>
        {LINKS.map((item) => (
          <li key={item.to}>
            <LinkStyled to={item.to} className={item.to === location.pathname ? "active" : ''}>{item.text}</LinkStyled>
          </li>
        ))}
      </NavList>
    </>
  );
}

export default Navs;
