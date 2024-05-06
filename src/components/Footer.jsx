import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center mt-10 gap-5  px-[8vw]">
      <div className="w-full flex flex-row mt-20 justify-between">
        <div className="flex flex-col items-start gap-5 w-[40%]">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
            exercitationem ea asperiores quidem cum ipsam vero veritatis at
            nulla? Provident, quas tempore. Aspernatur, sit. Magnam, architecto?
            Iusto sunt optio soluta.
          </p>
          <div className="flex gap-4 ">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-xl font-semibold ">Company</h2>
          <ul className="flex flex-col gap-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+971 542395425</li>
            <li>eng.kreem.96@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-2"/>
      <p>Copyright 2024 - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
