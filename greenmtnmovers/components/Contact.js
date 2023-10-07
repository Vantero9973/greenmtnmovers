import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="max-w-screen-xl px-5 md:px-10 pb-20 flex flex-col justify-center gap-[1vh] w-full"
        id="contact"
      >
        <div className="flex flex-col justify-evenly items-evenly gap-[1vh] my-[10px]">
          <div className="flex flex-wrap gap-x-2.5 text-[32px] font-bold w-full">
            Get a
            <span className="relative text-[32px] font-bold">
              <p className="underline">Free Quote</p>
            </span>
          </div>
          <p className="text-gray-500">Please fill out all fields</p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
