import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";

const naves = ["home", "menu", "mobile-app", "contact us"];

export default function Navbar() {
  const rootHtml = document.getElementById("root-html");
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
      <img src={assets.logo} alt="logo" className="w-[150px]" />
      <ul className="flex gap-5 text-gray-700">
        {naves.map((nav) => (
          <li
            key={nav}
            className={`${menu === nav ? "text-red-500 font-semibold" : ""} cursor-pointer`}
            onClick={() => setMenu(nav)}
          >
            {t(nav)}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-[40px] ">
        <button onClick={changeLanguage} className="">
          {i18n.language === "en" ? "AR" : "EN"}
        </button>
        <img src={assets.search_icon} alt="search" />
        <div className="relative">
          <img src={assets.basket_icon} alt="basket" />
          <div className="absolute bg-red-600 -top-3 ltr:-right-2 rtl:-left-2 px-2  rounded-full text-slate-200">5</div>
        </div>
        <button
          className="text-base text-gray-700 py-2 px-10 border-2 rounded-3xl border-fuchsia-300 
         hover:bg-[#fff4f2] duration-300"
        >
          {t("sign-in")}
        </button>
      </div>
    </header>
  );
}
