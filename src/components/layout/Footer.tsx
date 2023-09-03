import React from "react";
import Image from "next/image";
import WhiteLogo from "../../../public/WhiteLogo.svg";

export default function Footer() {
  return (
    <div className="bg-greenDark text-white pt-[114px] px-[20px] sm:px-[30px] md:px-[60px] lg:px-[100px] xl:px-[152px]">
      <div className="grid grid-cols-4 justify-items-center">
        <div>
          <Image
            src={WhiteLogo.src}
            alt="Your Company"
            width={175}
            height={50}
          />
          <p className="mt-[25px]">The next-generation lending protocol.</p>
        </div>
        <div>
          <h1>Company</h1>
          <p className="mt-[25px]">Careers (Coming Soon)</p>
        </div>
        <div>
          <h1 className="mb-[25px]">Support</h1>
          <a>Contact Us</a>
        </div>
        <div>
          <h1 className="mb-[25px]">Follow Us</h1>
          <a>X</a>
        </div>
      </div>
      <div className="flex justify-end mt-[150px] border-b-1 border-neutral6 text-neutral6 gap-x-[67px] pb-[17px]">
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
      </div>
      <div className="py-[42px] text-white text-center">
        Copyright © 2023 Inclusio Labs. All Rights Reserved
      </div>
    </div>
  );
}
