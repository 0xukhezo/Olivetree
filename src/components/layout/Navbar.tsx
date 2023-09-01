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
                  <a href="#roadmap">
                    <button className="border-2 border-neutral3 px-3.5 py-3 rounded-lg hover:border-neutral6">
                      Join our X
                    </button>
                  </a>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Disclosure.Button
                as="a"
                href="#why"
                className="block rounded-md bg-neutral6 px-3 py-2 text-base font-medium text-white"
              >
                Why
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#roadmap"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Roadmap
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#faq"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                FAQ
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="mt-3 space-y-1 px-2">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Contact
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  <button className="border-2 border-neutral3 px-3.5 py-3 rounded-lg hover:border-neutral6 w-full">
                    Join our X
                  </button>
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
