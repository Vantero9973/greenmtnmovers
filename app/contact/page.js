"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { send } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import contact from "../../public/media/contact.jpg";

export default function Contact() {
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
    toastifySuccess();
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const toastifySuccess = () =>
    toast.success("Form sent!", {
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
    <>
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
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0 lg:left-1/2">
          <Image
            alt=""
            src={contact}
            placeholder="blur"
            priority={true}
            className="h-64 w-full bg-gray-50 object-cover object-top sm:h-80 lg:absolute lg:h-full"
          />
        </div>
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Let's work together
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                At Green Mountain Movers, your satisfaction is our priority.
                We're here to assist with any questions or concerns for a smooth
                moving experience.
              </p>
              <dl className="mt-6 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      className="my-auto h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a className="hover:text-gray-900" href="tel:7196801538">
                      (719) 680-1538
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="my-auto h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900"
                      href="mailto:aaron@greenmtnmovers.com"
                    >
                      aaron@greenmtnmovers.com
                    </a>
                  </dd>
                </div>
              </dl>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="sender-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="sender_name"
                        required
                        value={toSend.sender_name}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0e5933] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        required
                        value={toSend.email}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0e5933] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Requested Date
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="date"
                        required
                        value={toSend.date}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0e5933] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Phone Number
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="phone"
                        required
                        value={toSend.phone}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0e5933] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm leading-6">
                      <label
                        htmlFor="moving_to"
                        className="block font-semibold text-gray-900"
                      >
                        Moving To
                      </label>
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="moving_to"
                        value={toSend.moving_to}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0e5933] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm leading-6">
                      <label
                        htmlFor="moving_from"
                        className="block font-semibold text-gray-900"
                      >
                        Moving From
                      </label>
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="moving_from"
                        value={toSend.moving_from}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0e5933] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label
                        htmlFor="description"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Describe Your Project
                      </label>
                    </div>
                    <div className="mt-2.5">
                      <textarea
                        type="text"
                        name="description"
                        required
                        value={toSend.description}
                        onChange={handleChange}
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0e5933] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex justify-end">
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-[#0e5933] bg-opacity-90 hover:bg-opacity-100 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm"
                  >
                    Let's talk
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <p id="phone-description" className="text-gray-400">
Optional
</p> */
}
