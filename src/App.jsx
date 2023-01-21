import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ProfilePhoto from "./Profile/ProfilePhoto";
import FullName from "./Profile/FullName";
import Adresse from "./Profile/Adresse";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProfilePhoto />
      <FullName />
      <Adresse />
    </>
  );
}

export default App;
