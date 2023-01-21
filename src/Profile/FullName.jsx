import React from "react";
import HandleName from "../handleName";

export default function FullName({ fullName, bio, profession }) {
  return (
    <>
      <HandleName fullName={fullName} />
      <div>my name is {fullName} </div>;<div>I am a {bio}</div>
      <div>a I do {profession}</div>
    </>
  );
}
