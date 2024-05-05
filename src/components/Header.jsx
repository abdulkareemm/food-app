import React from 'react'
import { useTranslation } from 'react-i18next';
import Image from "../assets/header_img.png"

const Header = () => {
const { t } = useTranslation();

  return (
    <div className="h-[70vh] mx-5 my-2 relative">
      <img src={Image} alt="" className="w-full h-full " />
      <div
        className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] 
      ltr:left-[6vw] rtl:right-[6vh] animate-fade"
      >
        <h2 className="font-semibold text-white text-4xl">{t("header")}</h2>
        <p className="text-slate-200 text-[1vw]">{t("header1")}</p>
        <button className="text-gray-500 font-semibold bg-white rounded-[50px] px-[2.3vw] py-[1vw]">
          {t("header-btn")}
        </button>
      </div>
    </div>
  );
}

export default Header