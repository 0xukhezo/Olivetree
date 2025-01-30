// Next
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
// Icons
import { Disclosure } from "@headlessui/react";
// Images
import Logo from "../../../public/Logo.svg";

export default function Navbar() {
  const router = useRouter();

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
                  className="logo"
                />
              </Link>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="flex space-x-10 text-neutral6">
                  <Link
                    href={router.route !== "/" ? "/#early" : "#early"}
                    className="underline-hover"
                  >
                    Early access
                  </Link>
                  <a
                    href="https://mirror.xyz/0xb936B1557BEC98b2C86CFd26176430e0FD22E794"
                    target="_blank"
                    className="underline-hover"
                  >
                    Resources
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-9 text-neutral6 items-center">
                <a href="https://x.com/olivetreeyield" target="_blank">
                  <button className="btn text-white border-2 border-neutral3 px-3.5 py-3 rounded-lg hover:border-neutral6">
                    X
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden fixed inset-x-0 bottom-0 w-full z-50 ">
          <div className="mx-5 flex items-center justify-between mb-[25px] bg-greenDark text-white p-5 rounded-lg border-white border-1">
            <Link href={router.route !== "/" ? "/#early" : "#early"}>
              Early access
            </Link>
            <a
              target="_blank"
              href="https://mirror.xyz/0xb936B1557BEC98b2C86CFd26176430e0FD22E794"
            >
              Resources
            </a>
          </div>
        </div>
      </>
    </Disclosure>
  );
}
