"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { send } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_USER_ID
    )
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
    <div id="contact">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contactFormInputContainer">
          <input
            type="text"
            name="sender_name"
            placeholder="Name*"
            required
            value={toSend.sender_name}
            onChange={handleChange}
            id="contactFormInput"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            value={toSend.email}
            onChange={handleChange}
            id="contactFormInput"
          />
        </div>
        <div className="contactFormInputContainer">
          <input
            type="text"
            name="date"
            placeholder="Requested Date*"
            required
            value={toSend.date}
            onChange={handleChange}
            id="contactFormInput"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number*"
            required
            value={toSend.phone}
            onChange={handleChange}
            id="contactFormInput"
          />
        </div>
        <div className="contactFormInputContainer">
          <input
            type="text"
            name="moving_to"
            placeholder="Moving To"
            value={toSend.moving_to}
            onChange={handleChange}
            id="contactFormInput"
          />
          <input
            type="text"
            name="moving_from"
            placeholder="Moving From"
            value={toSend.moving_from}
            onChange={handleChange}
            id="contactFormInput"
          />
        </div>
        <div className="contactFormTextareaContainer">
          <textarea
            type="text"
            name="description"
            placeholder="Describe Your Project*"
            required
            value={toSend.description}
            onChange={handleChange}
            id="contactFormTextarea"
          />
        </div>
        <div className="my-[1vh]">
          <button variant="outlined" type="submit" className="headerButton">
            Send Message!
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
  );
}
