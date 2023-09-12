import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import Logo from "../../../public/Logo.svg";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const route = useRouter();
  return (
    <Disclosure as="nav" id="navbar" className="primary-navigation">
      <>
        <div className="mx-auto pt-5">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src={Logo.src}
                  alt="Your Company"
                  width={205}
                  height={50}
                />
              </Link>
            </div>
            <div className="flex items-center">
              <div className="hidden sm:ml-6 md:block">
                <div className="flex space-x-10 text-neutral6">
                  <Link
                    href={route.route !== "/" ? "/#why" : "#why"}
                    className="underline-hover"
                  >
                    Why
                  </Link>
                  <Link
                    href={route.route !== "/" ? "/#roadmap" : "#roadmap"}
                    className="underline-hover"
                  >
                    Roadmap
                  </Link>
                  <Link
                    href={route.route !== "/" ? "/#faq" : "#faq"}
                    className="underline-hover"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-9 text-neutral6 items-center">
                <a href="/contact">Contact</a>
                <a href="https://twitter.com/olivetreecredit" target="_blank">
                  <button className="border-2 border-neutral3 px-3.5 py-3 rounded-lg hover:border-neutral6">
                    Join our X
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden fixed inset-x-0 bottom-0 w-full z-50 ">
          <div className="mx-5 flex items-center justify-between mb-[25px] bg-greenDark text-white p-5 rounded-lg border-white border-1">
            <Link href={route.route !== "/" ? "/#why" : "#why"}>Why</Link>
            <Link href={route.route !== "/" ? "/#roadmap" : "#roadmap"}>
              Roadmap
            </Link>
            <Link href={route.route !== "/" ? "/#faq" : "#faq"}>FAQ</Link>
          </div>
        </div>
      </>
    </Disclosure>
  );
}
