import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

export default function MenuMobileCategory({ handle }) {
  return (
    <>
      <a className="d-flex justify-content-between" onClick={() => handle()}>
        Productos <HiOutlineChevronDown />
      </a>
    </>
  );
}
