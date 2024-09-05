"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { send } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
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
    <div className="flex justify-center items-center">
      <div className="max-w-screen-xl w-full relative isolate bg-white px-6 py-24 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-white to-[#0e5933] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#0e5933]">
              Contact
            </h2>
            <h3 className="text-4xl font-bold">
              Get Your Free Moving Quote Today from Our Moving Specialists
            </h3>
          </div>
          <p>
            Embarking on a move can be a monumental task, but with Green
            Mountain Movers, you'll have Denver's leading moving specialists
            assisting you at every turn. Our comprehensive moving services are
            tailored to meet your individual relocation needs, ensuring a
            seamless move. Whether you're considering local movers or need
            reliable movers for a long-distance move, our free moving quote will
            set the foundation for a smooth transition. As a premier
            full-service moving company, we pride ourselves on efficiency and
            meticulous attention to detail. Green Mountain Movers stands out
            among moving companies with our professional furniture assembly and
            junk hauling services, added to make your move as straightforward as
            possible. Contact us today for your moving quote, and let us
            demonstrate why we are the mover of choice for Denver's community.
            Experience stress-free moving when you choose to move with us,
            because at Green Mountain Movers, we're more than just a moving
            company—we're your partners in relocation.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-12">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="sender_name"
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Date
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="date"
                  required
                  value={toSend.date}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="phone"
                  required
                  value={toSend.phone}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="moving_to"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Moving To
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="moving_to"
                  value={toSend.moving_to}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="moving_from"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Moving From
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="moving_from"
                  value={toSend.moving_from}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Describe Your Project
              </label>
              <div className="mt-2.5">
                <textarea
                  type="text"
                  name="description"
                  required
                  value={toSend.description}
                  onChange={handleChange}
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="rounded-md bg-[#0e5933] bg-opacity-90 px-10 py-2.5 text-center font-semibold text-white shadow-sm hover:bg-opacity-100"
            >
              Submit
            </button>
          </div>
        </form>
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
    </div>
  );
}
