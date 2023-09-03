import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../../public/Logo.svg";

export default function Navbar() {
  return (
    <Disclosure as="nav" id="navbar">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-shrink-0">
                <a href="#navbar">
                  <Image
                    src={Logo.src}
                    alt="Your Company"
                    width={205}
                    height={50}
                  />
                </a>
              </div>
              <div className="flex items-center">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-10 text-neutral6">
                    <a href="#why" className="underline-hover">
                      Why
                    </a>
                    <a href="#roadmap" className="underline-hover">
                      Roadmap
                    </a>
                    <a href="#faq" className="underline-hover">
                      FAQ
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-9 text-neutral6 items-center">
                  <a href="/contact" className="underline underline-offset-4">
                    Contact
                  </a>
                  <a href="https://twitter.com/olivetreecredit" target="_blank">
                    <button className="border-2 border-neutral3 px-3.5 py-3 rounded-lg hover:border-neutral6">
                      Join our X
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:hidden fixed inset-x-0 bottom-0 w-full z-50">
            <div className="mx-5 flex items-center justify-between mb-[25px] bg-greenDark text-white p-5 rounded-lg">
              <a href="#why" className="underline-hover">
                Why
              </a>
              <a href="#roadmap" className="underline-hover">
                Roadmap
              </a>
              <a href="#faq" className="underline-hover">
                FAQ
              </a>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
