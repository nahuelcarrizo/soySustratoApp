import React from "react";
import "../../css/Shop.css";
import FilterBtns from "./RigContainer/FilterBtns";
import RigContainer from "./RigContainer/RigContainer";
import Welcome from "./Welcome";

export default function Shop() {
  return (
    <>
      <main>
        <Welcome />
        <FilterBtns />
        <RigContainer />
      </main>
    </>
  );
}
