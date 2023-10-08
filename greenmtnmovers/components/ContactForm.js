"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [agreed, setAgreed] = useState(false);

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
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#0e5933]">
            Contact
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get a Quote
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
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
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-[#0e5933] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// "use client";
// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import { send } from "emailjs-com";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Contact() {
//   const [toSend, setToSend] = useState({
//     sender_name: "",
//     email: "",
//     description: "",
//     date: "",
//     moving_from: "",
//     moving_to: "",
//     phone: "",
//   });

//   const { register, handleSubmit } = useForm();

//   const onSubmit = () => {
//     send(
//       process.env.REACT_APP_SERVICE_ID,
//       process.env.REACT_APP_TEMPLATE_ID,
//       toSend,
//       process.env.REACT_APP_USER_ID
//     )
//       .then((response) => {
//         console.log("SUCCESS!", response.status, response.text);
//       })
//       .catch((err) => {
//         console.log("FAILED...", err);
//       });
//     setToSend({
//       sender_name: "",
//       email: "",
//       description: "",
//       date: "",
//       moving_from: "",
//       moving_to: "",
//       phone: "",
//     });
//     toastifySuccess();
//   };

//   const handleChange = (e) => {
//     setToSend({ ...toSend, [e.target.name]: e.target.value });
//   };

//   const toastifySuccess = () =>
//     toast.success("Form sent!", {
//       position: "bottom-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//     });

//   return (
//     <div id="contact">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="contactFormInputContainer">
//           <input
//             type="text"
//             name="sender_name"
//             placeholder="Name*"
//             required
//             value={toSend.sender_name}
//             onChange={handleChange}
//             id="contactFormInput"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email*"
//             required
//             value={toSend.email}
//             onChange={handleChange}
//             id="contactFormInput"
//           />
//         </div>
//         <div className="contactFormInputContainer">
//           <input
//             type="text"
//             name="date"
//             placeholder="Requested Date*"
//             required
//             value={toSend.date}
//             onChange={handleChange}
//             id="contactFormInput"
//           />
//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone Number*"
//             required
//             value={toSend.phone}
//             onChange={handleChange}
//             id="contactFormInput"
//           />
//         </div>
//         <div className="contactFormInputContainer">
//           <input
//             type="text"
//             name="moving_to"
//             placeholder="Moving To"
//             value={toSend.moving_to}
//             onChange={handleChange}
//             id="contactFormInput"
//           />
//           <input
//             type="text"
//             name="moving_from"
//             placeholder="Moving From"
//             value={toSend.moving_from}
//             onChange={handleChange}
//             id="contactFormInput"
//           />
//         </div>
//         <div className="contactFormTextareaContainer">
//           <textarea
//             type="text"
//             name="description"
//             placeholder="Describe Your Project*"
//             required
//             value={toSend.description}
//             onChange={handleChange}
//             id="contactFormTextarea"
//           />
//         </div>
//         <div className="my-[1vh]">
//           <button variant="outlined" type="submit" className="headerButton">
//             Send Message!
//           </button>
//         </div>
//       </form>
//       <ToastContainer
//         position="bottom-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//     </div>
//   );
// }
