import { React, useState, useEffect } from "react";
import "../../css/MenuMobile.css";
import CartWidget from "../CartWidget";
import { IoCloseOutline } from "react-icons/io5";
import {
  HiOutlineSearch,
  HiOutlineUser,
  HiOutlineChevronDown,
} from "react-icons/hi";
import MenuMobileProducts from "./MenuMobileProducts";
import MenuMobileCategory from "./MenuMobileCategory";
import MenuMobileProductsArray from "../../json/MenuMobileProductsArray.json";

export default function MenuMobile({ handle }) {
  const [listProdsOpen, setListProdsOpen] = useState(false);

  const ArrayProducts = MenuMobileProductsArray;

  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav__top d-flex flex-row justify-content-between">
          <button onClick={() => handle()} className="nav-icon icon-close">
            <IoCloseOutline />
          </button>
          <button onClick={() => console.log("busqueda")} className="nav-icon">
            <HiOutlineSearch />
          </button>
          <button onClick={() => console.log("usuario")} className="nav-icon">
            <HiOutlineUser />
          </button>
          <CartWidget />
        </div>
        <div className="mobile-nav__inner">
          <nav>
            <div className="container">
              <ul className="nav-list">
                <li className="nav-item m-1">Descarga el Catalogo</li>
                <li className="m-1 nav-item">
                  <MenuMobileCategory
                    handle={() => setListProdsOpen(!listProdsOpen)}
                  />
                  {listProdsOpen && (
                    <MenuMobileProducts prods={ArrayProducts} />
                  )}
                </li>
                <li
                  onClick={() => console.log("click!")}
                  className="nav-item m-1 d-flex justify-content-between"
                >
                  Soy Sustrato <HiOutlineChevronDown />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
