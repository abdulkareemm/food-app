import React from "react";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";

const AppDownload = () => {
    const {t} = useTranslation()
  return (
    <div className="mx-5  mt-24 text-[max(3vw,20px)] text-start md:text-center font-semibold">
      <p className=" text-gray-600 text-xl md:text-4xl">
        {t("download-app")} <br className="hidden md:flex" />
        <span className="font-bold text-red-600">Tomato App</span>
      </p>
      <div className="flex justify-center gap-[max(2vw,10px)] mt-10">
        <img
          src={assets.play_store}
          alt=""
          className="w-[max(30vh,120px)] max-w-44 duration-300 cursor-pointer hover:scale-110"
        />
        <img
          src={assets.app_store}
          alt=""
          className="w-[max(30vh,120px)] max-w-44 duration-300 cursor-pointer hover:scale-110"
        />
      </div>
    </div>
  );
};

export default AppDownload;
