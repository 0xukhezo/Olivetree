import React from "react";
import Image from "next/image";
import WhiteLogo from "../../../public/WhiteLogo.svg";
import Logo from "../../../public/Logo.svg";
import { useRouter } from "next/router";

export default function Footer() {
  const route = useRouter();

  return (
    <div
      className={`${
        route.route !== "/"
          ? "bg-white text-greenDark"
          : "bg-greenDark text-white"
      }  pt-[57px] xl:pt-[114px] px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[152px]`}
    >
      <div className="grid md:grid-cols-4 gap-x-[55px] gap-y-[36px] md:gap-y-0 md:justify-items-center">
        <div>
          <Image
            src={route.route !== "/" ? Logo.src : WhiteLogo.src}
            alt="Your Company"
            width={175}
            height={50}
            className="ml-[15px] md:ml-0"
          />
          <p className="mt-[25px]">The next-generation lending protocol.</p>
        </div>
        <div>
          <h1>Company</h1>
          <p
            className={`md:mt-[25px] mt-[12px] ${
              route.route !== "/" ? "text-neutral6" : "text-neutral3"
            }`}
          >
            Careers (Coming Soon)
          </p>
        </div>
        <div>
          <h1 className="md:mb-[25px] mb-[12px]">Support</h1>
          <a
            className={`underline underline-offset-4 ${
              route.route !== "/" ? "text-neutral6" : "text-neutral3"
            }`}
          >
            Contact Us
          </a>
        </div>
        <div>
          <h1 className="md:mb-[25px] mb-[12px]">Follow Us</h1>
          <a
            href="https://twitter.com/olivetreecredit"
            target="_blank"
            className={`underline underline-offset-4 ${
              route.route !== "/" ? "text-neutral6" : "text-neutral3"
            }`}
          >
            X
          </a>
        </div>
      </div>
      <div className="flex justify-around sm:justify-start md:justify-end md:mt-[150px] mt-[24px] border-b-1 border-neutral6 text-neutral6 gap-x-[67px] pb-[17px]">
        <a
          href="/privacy"
          target="_blank"
          className={` ${
            route.route !== "/" ? "footer-links-pc" : "footer-links"
          }`}
        >
          Privacy Policy
        </a>
        <a
          href="/conditions"
          target="_blank"
          className={` ${
            route.route !== "/" ? "footer-links-pc" : "footer-links"
          }`}
        >
          Terms & Conditions
        </a>
      </div>
      <div
        className={`pb-[100px] pt-[42px] ${
          route.route !== "/" ? "text-greenDark" : "text-white"
        } text-center`}
      >
        Copyright © 2023 Inclusio Labs. All Rights Reserved
      </div>
    </div>
  );
}
