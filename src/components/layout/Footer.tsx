// React
import React from "react";
// Next
import Image from "next/image";
import { useRouter } from "next/router";
// Images
import WhiteLogo from "../../../public/WhiteLogo.svg";
import Logo from "../../../public/Logo.svg";

export default function Footer() {
  const router = useRouter();

  return (
    <div
      className={`${
        router.route !== "/"
          ? "bg-white text-greenDark"
          : "bg-greenDark text-white"
      }  pt-[57px] xl:pt-[114px] px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[152px]`}
    >
      <div className="centered">
        <div className="grid md:grid-cols-4 gap-x-[55px] gap-y-[36px] md:gap-y-0 md:justify-items-center">
          <div>
            <Image
              src={router.route !== "/" ? Logo.src : WhiteLogo.src}
              alt="Your Company"
              width={175}
              height={50}
              className="ml-[15px] md:ml-0"
            />
            <p className="mt-[25px]">The next-generation lending protocol.</p>
          </div>
          <div>
            <h1 className="font-semibold">Company</h1>
            <p
              className={`md:mt-[25px] mt-[12px] ${
                router.route !== "/" ? "footer-links-pc" : "footer-links"
              }`}
            >
              Careers (Coming Soon)
            </p>
          </div>
          <div>
            <h1 className="md:mb-[25px] mb-[12px] font-semibold">Support</h1>
            <button
              onClick={() =>
                router.push(
                  "mailto:hello@inclusiolabs.com?subject=Learn%20more%20about%20Olivetree"
                )
              }
              className={`${
                router.route !== "/" ? "footer-links-pc" : "footer-links"
              }`}
            >
              Contact Us
            </button>
          </div>
          <div>
            <h1 className="md:mb-[25px] mb-[12px] font-semibold">Follow Us</h1>
            <a
              href="https://twitter.com/olivetreecredit"
              target="_blank"
              className={`${
                router.route !== "/" ? "footer-links-pc" : "footer-links"
              }`}
            >
              X
            </a>
          </div>
        </div>
        <div className="flex justify-around sm:justify-start md:justify-end md:mt-[150px] mt-[40px] border-b-1 border-[#d1d1d1] gap-x-[67px] pb-[17px]">
          <a
            href="/privacy"
            target="_blank"
            className={` ${
              router.route !== "/" ? "footer-links-pc" : "footer-links"
            }`}
          >
            Privacy Policy
          </a>
          <a
            href="/conditions"
            target="_blank"
            className={` ${
              router.route !== "/" ? "footer-links-pc" : "footer-links"
            }`}
          >
            Terms & Conditions
          </a>
        </div>
        <div
          className={`pb-[100px] pt-[42px] ${
            router.route !== "/" ? "text-greenDark" : "text-white"
          } text-center`}
        >
          Copyright © 2023 Inclusio Labs. All Rights Reserved
        </div>
      </div>
    </div>
  );
}
