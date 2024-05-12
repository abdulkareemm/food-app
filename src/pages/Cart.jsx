import React from "react";
import { useStoreContext } from "../context/Store";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const { food_list, cartItems, removeFromCart } = useStoreContext();
  const { t } = useTranslation();
  return (
    <div className="mt-[100px] overflow-scroll min-h-[29vh] mx-4 md:mx-0">
      <div className="mx-4  min-w-[600px]">
        <div className="cart-items-title text-gray-600">
          <p className="">{t("Items")}</p>
          <p className="">{t("Title")}</p>
          <p>{t("Price")}</p>
          <p>{t("Quantity")}</p>
          <p>{t("Total")}</p>
          <p>{t("Remove")}</p>
        </div>
        <br />
        <hr className="h-2 bg-[#e2e2e2] " />
        {food_list.map((item, index) => {
          if (cartItems[item._id]) {
            return (
              <div key={index}>
                <div className="cart-items-title text-black my-2">
                  <img src={item.image} alt="" className="w-12" />
                  <p>{t(item.name)}</p>
                  <p>{t(item.price)}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p
                    className="text-center cursor-pointer text-red-700"
                    onClick={() => removeFromCart(item._id)}
                  >
                    x
                  </p>
                </div>
                <br />
              </div>
            );
          }
        })}
      </div>
      <div className="mt-20 flex flex-col lg:flex-row justify-between gap-[max(12vw,20px)]">
        <div className="lg:flex-1 flex flex-col gap-5">
          <h2>{t("Cart Totals")}</h2>
          <div className="">
            <div className="flex justify-between text-gray-500">
              <p>{t("Subtotal")}</p>
              <p>0</p>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between text-gray-500">
              <p>{t("Deliver Fee")}</p>
              <p>0</p>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between text-gray-500">
              <p>{t("Total")}</p>
              <p>0</p>
            </div>
          </div>
          <button className="text-white bg-red-500 w-[max(15vw,200px)] py-3 rounded-md cursor-pointer">
            {t("cart-button")}
          </button>
        </div>
        <div className="lg:flex-1">
          <div>
            <p className="text-gray-500">{t("promo")}</p>
            <div className="mt-2 flex justify-between items-center bg-[#eaeaea] rounded-md">
              <input
                type="text"
                className="bg-transparent focus:ring-0 border-none mx-4 py-4"
              />
              <button className="w-[max(10vw,150px)] py-4 px-1 bg-black border-none text-white rounded-l-md ltr:rounded-r-md">
                {t("submit")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
