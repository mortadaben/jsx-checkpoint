import { useState } from "react";

import "./App.css";
import FullName from "./Profile/FullName";
import img1 from "./assets/images/Logo.png";

function App() {
  return (
    <>
      <FullName
        fullName="Samy Benbahmed"
        bio="Web dev junior junior junior"
        profession="walou"
      >
        <img src={img1} alt="my picture" />
      </FullName>
    </>
  );
}

export default App;
