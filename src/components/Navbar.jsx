import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useStoreContext } from "../context/Store";

const naves = [
  { name: "home", l: "/food-app/" },
  { name: "menu", l: "#menu" },
  { name: "mobile-app", l: "#mobile-app" },
  { name: "contact us", l: "#footer" },
];

export default function Navbar() {
  const rootHtml = document.getElementById("root-html");
  const {cartItems}   = useStoreContext()
  const [menu, setMenu] = useState("home");
  const { i18n, t } = useTranslation();
  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ar");
      rootHtml.setAttribute("dir", "rtl");
    } else {
      i18n.changeLanguage("en");
      rootHtml.setAttribute("dir", "ltr");
    }
  };
  return (
    <header className="px-5 py-4 flex justify-between items-center">
      <Link to={"/food-app/"}>
        <img src={assets.logo} alt="logo" className="w-28  md:w-[150px]  " />
      </Link>
      <ul className="hidden text-sm lg:text-base md:flex gap-2 lg:gap-5 text-gray-700">
        {naves.map((nav) => (
          <a
            href={nav.l}
            key={nav.name}
            className={`${
              menu === nav.name ? "text-red-500 font-semibold" : ""
            } cursor-pointer`}
            onClick={() => setMenu(nav.name)}
          >
            {t(nav.name)}
          </a>
        ))}
      </ul>
      <div className="flex items-center gap-2 lg:gap-[40px] ">
        <button
          onClick={changeLanguage}
          className=" bg-gray-50 rounded-full p-1 "
        >
          {i18n.language === "en" ? "AR" : "EN"}
        </button>

        <img
          src={assets.search_icon}
          alt="search"
          className="hidden md:flex w-7"
        />

        <Link className="relative cursor-pointer" to={"/cart"}>
          <img src={assets.basket_icon} alt="basket" className="w-7" />
          {Object.keys(cartItems).length > 0 && (
            <div className="absolute bg-red-600 -top-3 ltr:-right-2 rtl:-left-2 px-1 text-sm md:text-base  md:px-2  rounded-full text-slate-200">
              {Object.keys(cartItems).length}
            </div>
          )}
        </Link>
        <button
          className="text-gray-700 py-2 px-8 md:px-2 lg:px-10 text-base md:text-sm  lg:text-base  border-2 rounded-3xl border-fuchsia-300 
         hover:bg-[#fff4f2] duration-300"
        >
          {t("sign-in")}
        </button>
      </div>
    </header>
  );
}
