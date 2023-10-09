"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import { Dialog, Menu, Transition, Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { cities } from "../app/data/cities";
import logo from "../public/media/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const formattedCityName = (city) => city.toLowerCase().replace(/\s+/g, "-");

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <header className="flex justify-center items-center z-50 bg-white h-[70px]">
      <nav
        className="flex max-w-7xl w-full  items-center justify-between px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Green Mountain Movers</span>
            <Image
              src={logo}
              alt="Green Mountain Movers Logo"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 h-[70px]">
          <a
            href="#"
            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-700 hover:border-[#0e5933] hover:text-gray-900"
          >
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-1 lg:px-3 py-2 text-sm">
                  Services
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      <a
                        href="/local-moving"
                        className="hover:bg-gray-100 text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
                      >
                        Local Moving
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        href="/long-distance-moving"
                        className="hover:bg-gray-100 text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
                      >
                        Long Distance Moving
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        href="/furniture-assembly"
                        className="hover:bg-gray-100 text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
                      >
                        Furniture Assembly
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        href="/junk-hauling"
                        className="hover:bg-gray-100 text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
                      >
                        Junk Hauling
                      </a>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </a>
          <a
            href="#"
            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-700 hover:border-[#0e5933] hover:text-gray-900"
          >
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-1 lg:px-3 py-2 text-sm">
                  Service Areas
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1 max-h-[66vh] overflow-scroll">
                    {cities.map((city) => (
                      <Menu.Item key={city}>
                        <a
                          href={`/service-areas/${formattedCityName(city)}`}
                          className="hover:bg-gray-100 text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
                        >
                          {city}
                        </a>
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </a>
          <a
            href="#"
            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-700 hover:border-[#0e5933] hover:text-gray-900"
          >
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-1 lg:px-3 py-2 text-sm">
                  Resources
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      <a
                        href="/faq"
                        className="hover:bg-gray-100 text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
                      >
                        FAQ
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        href="/reviews"
                        className="hover:bg-gray-100 text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
                      >
                        Reviews
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        href="/blog"
                        className="hover:bg-gray-100 text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
                      >
                        Blog
                      </a>
                    </Menu.Item>
                    {/* <Menu.Item>
                      <a
                        href="/careers"
                        className="hover:bg-gray-100 text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
                      >
                        Careers
                      </a>
                    </Menu.Item> */}
                    <Menu.Item>
                      <a
                        href="/moving-checklist"
                        className="hover:bg-gray-100 text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
                      >
                        Moving Checklist
                      </a>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </a>
          <a
            href="/about"
            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-700 hover:border-[#0e5933] hover:text-gray-900"
          >
            <button className="px-1 lg:px-3 py-2">About</button>
          </a>
          <a
            href="/contact"
            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-700 hover:border-[#0e5933] hover:text-gray-900"
          >
            <button className="px-1 lg:px-3 py-2">Contact</button>
          </a>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Green Mountain Movers</span>
              <Image
                src={logo}
                alt="Green Mountain Movers Logo"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col py-5">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  <li>
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700">
                            <ChevronRightIcon
                              className={classNames(
                                open
                                  ? "rotate-90 text-gray-500"
                                  : "text-gray-400",
                                "h-5 w-5 shrink-0"
                              )}
                              aria-hidden="true"
                            />
                            Services
                          </Disclosure.Button>
                          <Disclosure.Panel as="ul" className="mt-1 px-2">
                            <li>
                              <Disclosure.Button
                                as="a"
                                href="/local-moving"
                                className="block rounded-md py-1 pr-2 pl-9 text-sm leading-6 text-gray-700"
                              >
                                Local Moving
                              </Disclosure.Button>
                            </li>
                            <li>
                              <Disclosure.Button
                                as="a"
                                href="/long-distance-moving"
                                className="block rounded-md py-1 pr-2 pl-9 text-sm leading-6 text-gray-700"
                              >
                                Long Distance Moving
                              </Disclosure.Button>
                            </li>
                            <li>
                              <Disclosure.Button
                                as="a"
                                href="/furniture-assembly"
                                className="block rounded-md py-1 pr-2 pl-9 text-sm leading-6 text-gray-700"
                              >
                                Furniture Assembly
                              </Disclosure.Button>
                            </li>
                            <li>
                              <Disclosure.Button
                                as="a"
                                href="/junk-hauling"
                                className="block rounded-md py-1 pr-2 pl-9 text-sm leading-6 text-gray-700"
                              >
                                Junk Hauling
                              </Disclosure.Button>
                            </li>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </li>
                  <li>
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700">
                            <ChevronRightIcon
                              className={classNames(
                                open
                                  ? "rotate-90 text-gray-500"
                                  : "text-gray-400",
                                "h-5 w-5 shrink-0"
                              )}
                              aria-hidden="true"
                            />
                            Service Areas
                          </Disclosure.Button>
                          <Disclosure.Panel as="ul" className="mt-1 px-2">
                            {cities.map((city) => (
                              <li key={city}>
                                <Disclosure.Button
                                  as="a"
                                  href={`/service-areas/${formattedCityName(
                                    city
                                  )}`}
                                  className="hover:bg-gray-100 text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
                                >
                                  {city}
                                </Disclosure.Button>
                              </li>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </li>
                  <li>
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700">
                            <ChevronRightIcon
                              className={classNames(
                                open
                                  ? "rotate-90 text-gray-500"
                                  : "text-gray-400",
                                "h-5 w-5 shrink-0"
                              )}
                              aria-hidden="true"
                            />
                            Resources
                          </Disclosure.Button>
                          <Disclosure.Panel as="ul" className="mt-1 px-2">
                            <li>
                              <Disclosure.Button
                                as="a"
                                href="/blog"
                                className="block rounded-md py-1 pr-2 pl-9 text-sm leading-6 text-gray-700"
                              >
                                Blog
                              </Disclosure.Button>
                            </li>
                            {/* <li>
                              <Disclosure.Button
                                as="a"
                                href="/careers"
                                className="block rounded-md py-1 pr-2 pl-9 text-sm leading-6 text-gray-700"
                              >
                                Careers
                              </Disclosure.Button>
                            </li> */}
                            <li>
                              <Disclosure.Button
                                as="a"
                                href="/faq"
                                className="block rounded-md py-1 pr-2 pl-9 text-sm leading-6 text-gray-700"
                              >
                                FAQ
                              </Disclosure.Button>
                            </li>
                            <li>
                              <Disclosure.Button
                                as="a"
                                href="/moving-checklist"
                                className="block rounded-md py-1 pr-2 pl-9 text-sm leading-6 text-gray-700"
                              >
                                Moving Checklist
                              </Disclosure.Button>
                            </li>
                            <li>
                              <Disclosure.Button
                                as="a"
                                href="/reviews"
                                className="block rounded-md py-1 pr-2 pl-9 text-sm leading-6 text-gray-700"
                              >
                                Reviews
                              </Disclosure.Button>
                            </li>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="block rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold text-gray-700"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="block rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold text-gray-700"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
