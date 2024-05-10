import React from "react";
import { menu_list } from "../assets/assets";
import { useTranslation } from "react-i18next";
const ExploreMenu = ({ category, setCategory }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col mx-5  gap-5 mt-10" id="menu">
      <h1 className="text-gray-500 font-semibold text-base md:text-4xl">
        {t("explore-header")}
      </h1>
      <div className="flex justify-between items-center gap-7 text-center my-5 mx-0 overflow-scroll">
        {menu_list.map((item, index) => (
          <div key={index} onClick={() => setCategory(item.menu_name)}>
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`w-[7.5vw]  min-w-[80px] cursor-pointer rounded-full ${
                category === item.menu_name
                  ? "border-4  border-red-500 px-0.5"
                  : ""
              }`}
            />
            <p
              className={`mt-3 text-gray-800 text-[max(1.4vw,12px)]] cursor-pointer ${
                category === item.menu_name
                  ? "border-2 rounded-full border-red-500 px-0.5 text-red-800 font-semibold"
                  : ""
              }`}
            >
              {t(item.menu_name)}
            </p>
          </div>
        ))}
      </div>
      <hr className="my-3 h-[1px] bg-[#e2e2e2] w-full text-center border-none" />
    </div>
  );
};

export default ExploreMenu;
