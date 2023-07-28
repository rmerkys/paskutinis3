import React from "react";
import Leftside from "./Leftside";
import RightSide from "./RightSide";

export default function Container() {
  return (
    <div className="combined">
      <Leftside />
      <RightSide />
    </div>
  );
}
