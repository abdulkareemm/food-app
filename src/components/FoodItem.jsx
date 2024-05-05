import React from "react";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";
import { useStoreContext } from "../context/Store";

const FoodItem = ({ _id, name, price, description, image }) => {
  const { t } = useTranslation();
  const { cartItems, addToCart, removeFromCart } = useStoreContext();
  return (
    <div className="w-full relative m-auto rounded-md overflow-hidden shadow-md animate-fade min-h-[365px] cursor-pointer hover:bg-slate-100">
      <div className="w-full relative">
        <img src={image} alt="" />
        {!cartItems[_id] ? (
          <img
            src={assets.add_icon_white}
            alt=""
            onClick={() => addToCart(_id)}
            className="w-8 absolute bottom-3 ltr:right-3 rtl:left-3 hover:scale-125 duration-300 active:scale-95"
          />
        ) : (
          <div className="absolute flex bottom-0 items-center gap-3 p-1 ltr:right-0 rtl:left-0   bg-white rounded-full">
            <img
              className="w-7"
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(_id)}
              alt=""
            />
            <p>{cartItems[_id]}</p>
            <img
              className="w-7"
              src={assets.add_icon_green}
              onClick={() => addToCart(_id)}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">{t(name)}</p>
          <img src={assets.rating_starts} alt="" className="w-[70px] " />
        </div>
        <p className="text-gray-600 text-sm mt-2">{t(`${name}-d`)}</p>
        <div className="absolute bottom-3 ltr:right-4 rtl:left4 bg-gray-200 px-3  rounded-full">
          <p className="text-red-500 font-semibold text-base">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
