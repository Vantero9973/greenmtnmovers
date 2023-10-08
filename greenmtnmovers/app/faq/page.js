"use client";
import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Navbar from "../../components/Navbar";

export default function Example() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const faqs = [
    {
      title: "What services does Green Mountain Movers offer?",
      content:
        "Green Mountain Movers offers a wide range of moving services, including residential moving, commercial moving, packing and unpacking, piano moving, and more. We can handle both local and long-distance moves with professionalism and care.",
    },
    {
      title: "How can I get a moving quote?",
      content:
        "Getting a moving quote from Green Mountain Movers is easy. You can fill out our online quote form, and we will provide you with a free estimate based on your specific moving needs. Alternatively, you can contact our team directly to discuss your move.",
    },
    {
      title: "Are Green Mountain Movers insured?",
      content:
        "Yes, Green Mountain Movers is fully insured. We carry all the necessary insurance to protect your belongings during the moving process, providing you with peace of mind throughout your move.",
    },
    {
      title: "How do I prepare for moving day?",
      content:
        "To prepare for moving day, we recommend packing your essentials separately, labeling boxes, and ensuring all fragile items are well protected. Our team will guide you through the process and provide any necessary assistance.",
    },
    {
      title: "Can I move on weekends or holidays?",
      content:
        "Yes, Green Mountain Movers offers flexible scheduling, including weekends and holidays, to accommodate your moving needs. Contact us to discuss your preferred moving date.",
    },
    {
      title: "Do I need to be present during the move?",
      content:
        "While your presence is not mandatory during the entire move, we recommend having someone available to answer questions and provide access to your belongings. It ensures a smoother moving process.",
    },
    {
      title: "What happens in case of bad weather?",
      content:
        "In the event of bad weather, our experienced movers are equipped to handle challenging conditions. We take precautions to protect your belongings and ensure a safe and efficient move.",
    },
    {
      title: "Are there any items Green Mountain Movers cannot move?",
      content:
        "There are some items we cannot move due to safety and legal restrictions. These may include hazardous materials, flammable substances, and perishable items. Our team will provide guidance on such items.",
    },
    {
      title: "Do you provide packing materials?",
      content:
        "Yes, we offer packing materials and services. Our professional packers can pack your belongings securely to ensure safe transportation. We also provide boxes, bubble wrap, and other packing supplies.",
    },
    {
      title: "How can I track my shipment?",
      content:
        "You can track your shipment by contacting our customer support team. We will provide you with updates on the status and location of your belongings during transit.",
    },
    {
      title: "Do you offer storage solutions?",
      content:
        "Yes, Green Mountain Movers provides short-term and long-term storage options. Whether you need temporary storage between moves or a more extended storage solution, we have you covered.",
    },
    {
      title: "What payment methods do you accept?",
      content:
        "We accept various payment methods, including credit cards, debit cards, and cash. Our team will provide you with detailed information on payment options during the booking process.",
    },
    {
      title: "Can you handle special items like pianos?",
      content:
        "Yes, we have experience in handling special items like pianos. Our dedicated piano moving service ensures that your precious instrument is transported safely and securely.",
    },
    {
      title: "What should I do if I have more questions?",
      content:
        "If you have more questions or need additional information, feel free to contact our friendly customer support team. We are here to assist you and provide all the information you need for a successful move.",
    },
    {
      title: "How far in advance should I book my move?",
      content:
        "It is advisable to book your move with Green Mountain Movers as early as possible to secure your preferred moving date. Advance booking ensures better availability and allows for efficient planning.",
    },
    {
      title: "What happens if my belongings are damaged during the move?",
      content:
        "While we take utmost care in handling your belongings, accidents can happen. In the rare event of damage, our comprehensive insurance coverage will help cover the cost of repairs or replacement.",
    },
    {
      title: "Are there any hidden fees or charges?",
      content:
        "No, Green Mountain Movers is transparent with our pricing. We provide detailed quotes with a breakdown of all costs, ensuring you have a clear understanding of your moving expenses.",
    },
    {
      title: "Can I change my moving date after booking?",
      content:
        "Yes, you can change your moving date after booking, but we recommend notifying us as soon as possible to accommodate the change. We will do our best to accommodate your new date.",
    },
    {
      title: "Are you licensed and regulated?",
      content:
        "Yes, Green Mountain Movers is a licensed and regulated moving company. We comply with all state and federal regulations to ensure a safe and legal move for our customers.",
    },
    {
      title:
        "What sets Green Mountain Movers apart from other moving companies?",
      content:
        "At Green Mountain Movers, our commitment to excellence, experienced team, and dedication to customer satisfaction set us apart. We prioritize the safety and satisfaction of our clients, making your move a stress-free experience.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="service-areas-clippath-bg flex justify-center items-center relative h-[200px] max-md:hidden">
        <div className="mtnBorder--bottom absolute bottom-0 shadow" />
        <header
          className="text-5xl font-semibold h-max w-full absolute p-10 text-center mb-10 drop-shadow-3xl opacity-90 text-white"
          style={{
            transform: `translateY(${scrollPosition * 0.4}px)`,
          }}
        >
          Frequently Asked Questions
        </header>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-screen-xl w-full mx-auto px-6 py-16 lg:px-8">
          <div className="mx-auto divide-y divide-gray-900/10">
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.title} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.title}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">
                          {faq.content}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
