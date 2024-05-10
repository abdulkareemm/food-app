import React from "react";
import { useStoreContext } from "../context/Store";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const { food_list,cartItems ,removeFromCart} = useStoreContext();
  const { t } = useTranslation();
  return (
    <div className="mt-[100px] overflow-scroll min-h-[29vh]">
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
    </div>
  );
};

export default Cart;
