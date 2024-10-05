"use client";

import Image from "next/image";
import Link from "next/link";
import hero from "../public/media/hero.jpg";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { send } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Hero() {
  const [toSend, setToSend] = useState({
    sender_name: "",
    email: "",
    description: "",
    date: "",
    moving_from: "",
    moving_to: "",
    phone: "",
  });

  const { handleSubmit } = useForm();

  const onSubmit = () => {
    send("service_vrcfz1i", "template_wylxjes", toSend, "GSu7c8HKQQ1CYrr6c")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toastifySuccess();
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    setToSend({
      sender_name: "",
      email: "",
      description: "",
      date: "",
      moving_from: "",
      moving_to: "",
      phone: "",
    });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const toastifySuccess = () =>
    toast.success("Form sent successfully!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={hero}
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          className="absolute inset-0 object-cover object-right-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent opacity-40" />
      </div>

      <div className="relative overflow-hidden sm:py-10">
        <div className="max-md:hidden mtnBorder--bottom absolute bottom-0 shadow" />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:inset-0 sm:block"
        ></div>
        <div className="relative pb-16 sm:pb-40">
          <main className="mt-16 sm:mt-24">
            <div className="mx-auto max-w-7xl">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                  <div>
                    <h2 className="mt-6 sm:text-shadow OPTIBank text-[32px] font-semibold text-white sm:text-4xl xl:text-[54px] !leading-[1.1]">
                      A Seamless Moving Experience
                    </h2>
                    <p className="mt-3 sm:text-shadow-sm text-base text-zinc-50 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Green Mountain Movers is locally owned and operated. We're
                      here to help make your move as stress-free as possible and
                      take great pride in serving our customers with a genuine
                      commitment to excellence. Serving the Denver-metro and
                      surrounding areas.
                    </p>
                    <div className="mt-8 flex sm:justify-center lg:justify-start items-center gap-x-6">
                      <Link
                        href="/contact"
                        className="rounded-md bg-[#0e5933] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0e5933]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Get started
                      </Link>
                      <Link
                        href="/areas-served"
                        className="text-sm font-semibold leading-6 text-white"
                      >
                        See our service areas <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
                  <div className="sm:bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
                    <div className="px-6 sm:py-8 sm:px-10">
                      <div>
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          className="grid grid-cols-2 gap-5"
                        >
                          <div className="col-span-2">
                            <label htmlFor="sender_name" className="sr-only">
                              Name
                            </label>
                            <input
                              id="sender_name"
                              name="sender_name"
                              type="text"
                              required
                              placeholder="Name"
                              autoComplete="name"
                              value={toSend.sender_name}
                              onChange={handleChange}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div className="col-span-2">
                            <label htmlFor="email" className="sr-only">
                              Email
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              placeholder="Email"
                              autoComplete="email"
                              value={toSend.email}
                              onChange={handleChange}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div className="col-span-2">
                            <label htmlFor="phone" className="sr-only">
                              Phone
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              required
                              placeholder="Phone"
                              autoComplete="tel"
                              value={toSend.phone}
                              onChange={handleChange}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div>
                            <label htmlFor="moving_to" className="sr-only">
                              Moving To
                            </label>
                            <input
                              id="moving_to"
                              name="moving_to"
                              type="text"
                              required
                              placeholder="Moving To"
                              value={toSend.moving_to}
                              onChange={handleChange}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div>
                            <label htmlFor="moving_from" className="sr-only">
                              Moving From
                            </label>
                            <input
                              id="moving_from"
                              name="moving_from"
                              type="text"
                              required
                              placeholder="Moving From"
                              value={toSend.moving_from}
                              onChange={handleChange}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div className="col-span-2">
                            <label htmlFor="date" className="sr-only">
                              Date
                            </label>
                            <input
                              id="date"
                              name="date"
                              type="text"
                              placeholder="Requested Date"
                              required
                              value={toSend.date}
                              onChange={handleChange}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div className="col-span-2">
                            <label htmlFor="description" className="sr-only">
                              Describe Your Project
                            </label>
                            <textarea
                              id="description"
                              name="description"
                              required
                              placeholder="Describe Your Project"
                              value={toSend.description}
                              onChange={handleChange}
                              rows={4}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div className="col-span-2">
                            <button
                              type="submit"
                              className="flex w-full justify-center rounded-md border border-transparent bg-[#0e5933]/90 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#0e5933] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              Let's Talk
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

// import Image from "next/image";
// import Link from "next/link";
// import headerImg from "../public/media/header-img.jpg";
// import headerImg2 from "../public/media/header-img2.jpg";
// import headerImg3 from "../public/media/header-img3.jpg";
// import headerImg4 from "../public/media/header-img4.jpg";
// import headerImg5 from "../public/media/header-img5.jpg";

// export default function Header() {
//   return (
//     <div className="bg-white">
//       <main>
//         <div className="relative isolate">
//           <svg
//             className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
//             aria-hidden="true"
//           >
//             <defs>
//               <pattern
//                 id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
//                 width={200}
//                 height={200}
//                 x="50%"
//                 y={-1}
//                 patternUnits="userSpaceOnUse"
//               >
//                 <path d="M.5 200V.5H200" fill="none" />
//               </pattern>
//             </defs>
//             <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
//               <path
//                 d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
//                 strokeWidth={0}
//               />
//             </svg>
//             <rect
//               width="100%"
//               height="100%"
//               strokeWidth={0}
//               fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
//             />
//           </svg>
//           <div
//             className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
//             aria-hidden="true"
//           >
//             <div
//               className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-white to-[#0e5933] opacity-50"
//               style={{
//                 clipPath:
//                   "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
//               }}
//             />
//           </div>
//           <div className="overflow-hidden">
//             <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
//               <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
//                 <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
// <h2 className="OPTIBank text-[28px] font-semibold text-gray-900 sm:text-4xl xl:text-5xl">
//   A <span className="OPTIBank text-[#0e5933]">Seamless</span>{" "}
//   Moving Experience
// </h2>
//                   <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
// Green Mountain Movers is locally owned and operated. We're
// here to help make your move as stress-free as possible and
// take great pride in serving our customers with a genuine
// commitment to excellence. Serving the Denver-metro and
// surrounding areas.
//                   </p>
//                   <div className="mt-10 flex items-center gap-x-6">
//                     <Link
//                       href="/contact"
//                       className="rounded-md bg-[#0e5933] bg-opacity-90 px-5 py-3 font-semibold text-white shadow-sm hover:[#0e5933] hover:bg-opacity-100 transition"
//                     >
//                       Get a Quote
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
//                   <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
//                     <div className="relative">
//                       <Image
//                         src={headerImg}
//                         alt="Back of moving truck"
//                         placeholder="blur"
//                         className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
//                       />
//                       <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
//                     </div>
//                   </div>
//                   <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
//                     <div className="relative">
//                       <Image
//                         src={headerImg4}
//                         alt="Two movers moving a couch"
//                         placeholder="blur"
//                         className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
//                       />
//                       <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
//                     </div>
//                     <div className="relative">
//                       <Image
//                         src={headerImg3}
//                         alt="One mover moving a couch"
//                         placeholder="blur"
//                         className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
//                       />
//                       <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
//                     </div>
//                   </div>
//                   <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
//                     <div className="relative">
//                       <Image
//                         src={headerImg2}
//                         alt="Other mover moving a couch"
//                         placeholder="blur"
//                         className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
//                       />
//                       <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
//                     </div>
//                     <div className="relative">
//                       <Image
//                         src={headerImg5}
//                         alt="Two movers holding moving boxes"
//                         placeholder="blur"
//                         className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
//                       />
//                       <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
