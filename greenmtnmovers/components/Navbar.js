"use client";
import { useState } from "react";
import Image from "next/image";
import { Dialog, Menu, Transition, Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { cities } from "../app/data/cities";
import logo from "../public/media/logo.png";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
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
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
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
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
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
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

// export default function Navbar() {
//   function classNames(...classes) {
//     return classes.filter(Boolean).join(" ");
//   }

//   const formattedCityName = (city) => city.toLowerCase().replace(/\s+/g, "-");

//   return (
//     <Disclosure as="nav" className="bg-white shadow">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="flex h-16 justify-between">
//               <div className="flex justify-between w-full">
//                 <div className="flex flex-shrink-0 items-center">
//                   <a href="/">
//                     <img
//                       src="/media/logo.png"
//                       alt="Green Mountain Movers Logo"
//                       className="mr-3 h-10"
//                     />
//                   </a>
//                 </div>
//                 <div className="hidden ml-2 lg:ml-6 sm:flex">
//                   <a
//                     href="#"
//                     className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-700 hover:border-[#0e5933] hover:text-gray-900"
//                   >
//                     <Menu as="div" className="relative inline-block text-left">
//                       <div>
//                         <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-1 lg:px-3 py-2 text-sm">
//                           Services
//                           <ChevronDownIcon
//                             className="-mr-1 h-5 w-5 text-gray-400"
//                             aria-hidden="true"
//                           />
//                         </Menu.Button>
//                       </div>

//                       <Transition
//                         as={Fragment}
//                         enter="transition ease-out duration-100"
//                         enterFrom="transform opacity-0 scale-95"
//                         enterTo="transform opacity-100 scale-100"
//                         leave="transition ease-in duration-75"
//                         leaveFrom="transform opacity-100 scale-100"
//                         leaveTo="transform opacity-0 scale-95"
//                       >
//                         <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                           <div className="py-1">
//                             <Menu.Item>
//                               <a
//                                 href="/local-moving"
//                                 className="hover:bg-gray-100 text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
//                               >
//                                 Local Moving
//                               </a>
//                             </Menu.Item>
//                             <Menu.Item>
//                               <a
//                                 href="/long-distance-moving"
//                                 className="hover:bg-gray-100 text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
//                               >
//                                 Long Distance Moving
//                               </a>
//                             </Menu.Item>
//                             <Menu.Item>
//                               <a
//                                 href="/furniture-assembly"
//                                 className="hover:bg-gray-100 text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
//                               >
//                                 Furniture Assembly
//                               </a>
//                             </Menu.Item>
//                             <Menu.Item>
//                               <a
//                                 href="/junk-hauling"
//                                 className="hover:bg-gray-100 text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
//                               >
//                                 Junk Hauling
//                               </a>
//                             </Menu.Item>
//                           </div>
//                         </Menu.Items>
//                       </Transition>
//                     </Menu>
//                   </a>
//                   <a
//                     href="#"
//                     className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-700 hover:border-[#0e5933] hover:text-gray-900"
//                   >
//                     <Menu as="div" className="relative inline-block text-left">
//                       <div>
//                         <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-1 lg:px-3 py-2 text-sm">
//                           Service Areas
//                           <ChevronDownIcon
//                             className="-mr-1 h-5 w-5 text-gray-400"
//                             aria-hidden="true"
//                           />
//                         </Menu.Button>
//                       </div>

//                       <Transition
//                         as={Fragment}
//                         enter="transition ease-out duration-100"
//                         enterFrom="transform opacity-0 scale-95"
//                         enterTo="transform opacity-100 scale-100"
//                         leave="transition ease-in duration-75"
//                         leaveFrom="transform opacity-100 scale-100"
//                         leaveTo="transform opacity-0 scale-95"
//                       >
//                         <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                           <div className="py-1 max-h-[66vh] overflow-scroll">
//                             {cities.map((city) => (
//                               <Menu.Item>
//                                 <a
//                                   href={`/service-areas/${formattedCityName(
//                                     city
//                                   )}`}
//                                   className="hover:bg-gray-100 text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
//                                 >
//                                   {city}
//                                 </a>
//                               </Menu.Item>
//                             ))}
//                           </div>
//                         </Menu.Items>
//                       </Transition>
//                     </Menu>
//                   </a>
//                   <a
//                     href="#"
//                     className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-700 hover:border-[#0e5933] hover:text-gray-900"
//                   >
//                     <Menu as="div" className="relative inline-block text-left">
//                       <div>
//                         <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-1 lg:px-3 py-2 text-sm">
//                           Resources
//                           <ChevronDownIcon
//                             className="-mr-1 h-5 w-5 text-gray-400"
//                             aria-hidden="true"
//                           />
//                         </Menu.Button>
//                       </div>

//                       <Transition
//                         as={Fragment}
//                         enter="transition ease-out duration-100"
//                         enterFrom="transform opacity-0 scale-95"
//                         enterTo="transform opacity-100 scale-100"
//                         leave="transition ease-in duration-75"
//                         leaveFrom="transform opacity-100 scale-100"
//                         leaveTo="transform opacity-0 scale-95"
//                       >
//                         <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                           <div className="py-1">
//                             <Menu.Item>
//                               <a
//                                 href="/faq"
//                                 className="hover:bg-gray-100 text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
//                               >
//                                 FAQ
//                               </a>
//                             </Menu.Item>
//                             <Menu.Item>
//                               <a
//                                 href="/reviews"
//                                 className="hover:bg-gray-100 text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
//                               >
//                                 Reviews
//                               </a>
//                             </Menu.Item>
//                             <Menu.Item>
//                               <a
//                                 href="/blog"
//                                 className="hover:bg-gray-100 text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
//                               >
//                                 Blog
//                               </a>
//                             </Menu.Item>
//                             <Menu.Item>
//                               <a
//                                 href="/careers"
//                                 className="hover:bg-gray-100 text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
//                               >
//                                 Careers
//                               </a>
//                             </Menu.Item>
//                             <Menu.Item>
//                               <a
//                                 href="/moving-checklist"
//                                 className="hover:bg-gray-100 text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
//                               >
//                                 Moving Checklist
//                               </a>
//                             </Menu.Item>
//                           </div>
//                         </Menu.Items>
//                       </Transition>
//                     </Menu>
//                   </a>
//                   <a
//                     href="/about"
//                     className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-700 hover:border-[#0e5933] hover:text-gray-900"
//                   >
//                     <button className="px-1 lg:px-3 py-2">About</button>
//                   </a>
//                   <a
//                     href="/contact"
//                     className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-700 hover:border-[#0e5933] hover:text-gray-900"
//                   >
//                     <button className="px-1 lg:px-3 py-2">Contact</button>
//                   </a>
//                 </div>
//               </div>
//               <div className="-mr-2 flex items-center sm:hidden">
//                 {/* Mobile menu button */}
//                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 pb-3 pt-2">
//               <Disclosure.Button
//                 as="a"
//                 href="#"
//                 className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
//               >
//                 Dashboard
//               </Disclosure.Button>
//               <Disclosure.Button
//                 as="a"
//                 href="#"
//                 className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
//               >
//                 Team
//               </Disclosure.Button>
//               <Disclosure.Button
//                 as="a"
//                 href="#"
//                 className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
//               >
//                 Projects
//               </Disclosure.Button>
//               <Disclosure.Button
//                 as="a"
//                 href="#"
//                 className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
//               >
//                 Calendar
//               </Disclosure.Button>
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }

// // "use client";
// // import Link from "next/link";
// // import { Dropdown, Navbar } from "flowbite-react";
// // import { cities } from "../app/data/cities";

// // export default function NavbarWithDropdown() {
// // const formattedCityName = (city) => city.toLowerCase().replace(/\s+/g, "-");

// //   return (
// //     <div className="flex justify-center items-center shadow-xl">
// //       <Navbar
// //         rounded
// //         className="max-w-screen-xl w-full px-2 md:px-5 bg-[transparent]"
// //       >
// //         <div className="flex justify-center items-center">
// //           <a href="/">
// //             <img
// //               src="/media/logo.png"
// //               alt="Green Mountain Movers Logo"
// //               className="mr-3 h-10"
// //             />
// //           </a>
// //           {/* <span className="self-center whitespace-nowrap text-xl font-semibold text-[#0e5933] font-[OPTIBank]">
// //             Green Mountain Movers
// //           </span> */}
// //         </div>
// //         <div className="md:hidden flex md:order-2">
// //           <Navbar.Toggle />
// //         </div>
// //         <Navbar.Collapse>
// //           <Dropdown inline placement="bottom" label="Services">
// //             <Link href="/local-moving">
// //               <Dropdown.Item className="px-5 py-1">Local Moving</Dropdown.Item>
// //             </Link>
// //             <Link href="/long-distance-moving">
// //               <Dropdown.Item className="px-5 py-1">
// //                 Long Distance Moving
// //               </Dropdown.Item>
// //             </Link>
// //             <Link href="/furniture-assembly">
// //               <Dropdown.Item className="px-5 py-1">
// //                 Furniture Assembly
// //               </Dropdown.Item>
// //             </Link>
// //             <Link href="/junk-hauling">
// //               <Dropdown.Item className="px-5 py-1">Junk Hauling</Dropdown.Item>
// //             </Link>
// //           </Dropdown>
// //           <Dropdown
// //             inline
// //             placement="bottom"
// //             label="Service Areas"
// //             className="max-h-[500px] overflow-scroll"
// //           >
// // {cities.map((city) => (
// //   <Link href={`/service-areas/${formattedCityName(city)}`}>
// //     <Dropdown.Item className="px-5 py-1" key={city}>
// //       {city}
// //     </Dropdown.Item>
// //   </Link>
// // ))}
// //           </Dropdown>
// //           <Dropdown inline placement="bottom" label="Resources">
// //             <Link href="/moving-checklist">
// //               <Dropdown.Item className="px-5 py-1">
// //                 Moving Checklist
// //               </Dropdown.Item>
// //             </Link>
// //             <Link href="/faq">
// //               <Dropdown.Item className="px-5 py-1">FAQ</Dropdown.Item>
// //             </Link>
// //             <Link href="/blog">
// //               <Dropdown.Item className="px-5 py-1">Blog</Dropdown.Item>
// //             </Link>
// //             <Link href="/careers">
// //               <Dropdown.Item className="px-5 py-1">Careers</Dropdown.Item>
// //             </Link>
// //           </Dropdown>
// //           <Navbar.Link href="/about">About</Navbar.Link>
// //           <Navbar.Link href="/contact">Contact</Navbar.Link>
// //         </Navbar.Collapse>
// //       </Navbar>
// //     </div>
// //   );
// // }
