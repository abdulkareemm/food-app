import React from "react";
import { useStoreContext } from "../context/Store";
import FoodItem from "./FoodItem";
import { useTranslation } from "react-i18next";

const FoodDisplay = ({ category }) => {
  const { food_list } = useStoreContext();
  const { t } = useTranslation();
  return (
    <div className="mx-5">
      <h2 className="text-[max(2vw,24px)] font-semibold text-gray-500">
        {t("Top dishes near you")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-7 gap-y-7 gap-x-10 ">
        {food_list.map((item, index) => {
          if(category==="All" || category===item.category){
            return <FoodItem key={index} {...item} />;
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
