import React from "react";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation()
  return (
    <div className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center  mt-10 gap-5  px-[8vw]">
      <div className="w-full flex flex-col md:flex-row mt-20 md:justify-between gap-5 md:gap-0">
        <div className="flex flex-col items-start gap-5 w-full  md:w-[40%]">
          <img src={assets.logo} alt="" />
          <p>{t("footer-d")}</p>
          <div className="flex gap-4 ">
            <img
              src={assets.facebook_icon}
              alt=""
              className="hover:bg-blue-600 rounded-full"
            />
            <img
              src={assets.twitter_icon}
              alt=""
              className="hover:bg-blue-300 rounded-full"
            />
            <img
              src={assets.linkedin_icon}
              alt=""
              className="hover:bg-red-500 rounded-full"
            />
          </div>
        </div>

        <div className="flex flex-col items-start md:gap-5 ">
          <h2 className="font-semibold text-xl">{t("footer-c")}</h2>
          <ul className="mx-5 text-sm md:text-base">
            <li>+971 542395425</li>
            <li>eng.kreem.96@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-2" />
      <p>{t("footer-p")}</p>
    </div>
  );
};

export default Footer;
