import React from "react";
import Navs from "./Navs";
import Title from "./Title";

const MainPageLayout = ({ children }) => {
  return (
    <>
      <Title title="Box Office" subtitle="Are you looking for a move or an actor" />
      <Navs />
      {children}
    </>
  );
};

export default MainPageLayout;
