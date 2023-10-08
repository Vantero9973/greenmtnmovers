"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import kenCarylImage from "../../../public/media/movers.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import ContactForm from "../../../components/ContactForm";
import BookingProcess from "../../../components/BookingProcess";
import MovingTips from "../../../components/MovingTips";
import ServiceAreasCards from "../../../components/ServiceAreasCards";
import Navbar from "../../../components/Navbar";

export default function KenCaryl() {
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
          Ken Caryl Moving Services
        </header>
      </div>
      <div className="flex justify-center items-center py-5 px-5 md:px-10 z-1 relative bg-[#f7f7f7]">
        <div className="flex flex-col items-center justify-center max-w-screen-xl">
          <section id="ken-caryl" className="my-10">
            <h2 className="text-2xl font-semibold md:hidden">
              Expert Moving Services in Ken Caryl, Colorado
            </h2>
            <div className="flex max-md:flex-col-reverse items-stretch justify-between gap-5 md:gap-10 my-5">
              <div className="flex flex-col justify-start gap-3 w-full md:w-2/4 lg:w-3/5">
                <h2 className="text-2xl font-semibold max-md:hidden">
                  Trusted Ken Caryl Moving Company - Local & Long-Distance Moves
                </h2>
                <p className="text-gray-700">
                  Welcome to Green Mountain Movers, your trusted Ken Caryl, CO
                  moving company. We are dedicated to providing top-notch moving
                  services to the beautiful community of Ken Caryl and its
                  surrounding areas. Whether you're planning a local or
                  long-distance move, our team of licensed and insured
                  professionals is here to ensure a smooth and hassle-free
                  transition for you and your belongings.
                </p>
                <p className="text-gray-700">
                  Ken Caryl is known for its picturesque landscapes and vibrant
                  community. Our Ken Caryl moving services are designed to cater
                  to the specific needs of this wonderful neighborhood.
                </p>
                <p className="text-gray-700">
                  At Green Mountain Movers, we understand that every move is
                  unique. Whether you're moving to or from Ken Caryl, our team
                  is committed to providing a seamless and stress-free
                  experience. We have extensive knowledge of the local
                  neighborhoods and can navigate the area with ease.
                </p>
              </div>
              <div className="flex items-start w-full md:w-2/4 lg:w-2/5">
                <Image
                  src={kenCarylImage}
                  alt="Ken Caryl"
                  className="object-cover h-full rounded-2xl"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <h3 className="text-2xl font-semibold mt-8">
                Comprehensive Moving Services in Ken Caryl, CO
              </h3>
              <ServiceAreasCards />
            </div>

            <div className="flex flex-wrap justify-center items-stretch">
              <div className="flex flex-col justify-start gap-3 md:w-2/4 md:pr-5">
                <h3 className="text-xl font-semibold mt-8">
                  Ken Caryl, Colorado Zip Codes We Serve
                </h3>
                <p className="text-gray-700">
                  Our service area covers a wide range of Ken Caryl zip codes,
                  including 80127, 80128, and 80162. If you're in the Ken Caryl
                  area, Green Mountain Movers has you covered.
                </p>
              </div>
              <div className="flex flex-col justify-start gap-3 md:w-2/4 md:pl-5">
                <h3 className="text-lg font-semibold mt-8">
                  Residential and Commercial Moving Solutions in Ken Caryl
                </h3>
                <p className="text-gray-700">
                  Welcome to Green Mountain Movers, your trusted partner for
                  seamless residential and commercial moves in Ken Caryl,
                  Colorado. Whether you're relocating your home or office, we
                  take pride in offering tailored moving solutions that cater to
                  your unique needs.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-stretch">
              <div className="flex flex-col justify-start gap-3 md:w-2/4 md:pr-5">
                <h3 className="text-lg font-semibold mt-8">
                  Ken Caryl Residential Moving Services
                </h3>
                <p className="text-gray-700">
                  Our Ken Caryl residential moving services are designed to make
                  your transition to a new home a stress-free experience. Our
                  dedicated team understands the importance of your belongings,
                  and we handle them with the utmost care. From packing and
                  loading to transportation and unpacking, we ensure every step
                  of your residential move is executed flawlessly. Our services
                  are backed by years of experience and a commitment to customer
                  satisfaction.
                </p>
              </div>
              <div className="flex flex-col justify-start gap-3 md:w-2/4 md:pl-5">
                <h3 className="text-lg font-semibold mt-8">
                  Commercial Moving Expertise in Ken Caryl
                </h3>
                <p className="text-gray-700">
                  At Green Mountain Movers, we recognize the importance of
                  minimizing downtime during office relocations. Our commercial
                  moving expertise is geared towards ensuring your business can
                  resume operations as quickly as possible. We specialize in
                  handling valuable equipment and sensitive documents, making
                  your office relocation in Ken Caryl secure and efficient.
                  Trust us to handle your commercial move with precision,
                  allowing you to focus on what matters most - your business.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-stretch">
              <div className="flex flex-col justify-start gap-3 md:w-2/4 md:pr-5">
                <h3 className="text-lg font-semibold mt-8">
                  Furniture Assembly Services in Ken Caryl
                </h3>
                <p className="text-gray-700">
                  In addition to our top-notch moving services, we proudly offer
                  professional furniture assembly services in Ken Caryl. Our
                  skilled team is adept at quickly and efficiently assembling
                  your furniture, whether it's for your new home or office. We
                  understand that assembling furniture can be a time-consuming
                  and frustrating task, and our goal is to save you time and
                  hassle. With our expertise, your furniture will be ready for
                  use in no time, ensuring a comfortable and functional living
                  or working space.
                </p>
              </div>
              <div className="flex flex-col justify-start gap-3 md:w-2/4 md:pl-5">
                <h3 className="text-lg font-semibold mt-8">
                  Junk Hauling Services in Ken Caryl
                </h3>
                <p className="text-gray-700">
                  Green Mountain Movers goes beyond just moving. We also provide
                  reliable junk hauling services in Ken Caryl to help you
                  declutter your space and dispose of unwanted items
                  responsibly. Whether it's old furniture, appliances,
                  electronics, or general household clutter, our team is here to
                  assist. We take pride in eco-friendly disposal methods,
                  ensuring that items are recycled or donated whenever possible.
                  Let us help you regain valuable space in your home or office
                  while contributing to a greener environment.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-stretch">
              <div className="flex flex-col justify-start gap-3 w-full md:pr-5">
                <h3 className="text-xl font-semibold mt-8">
                  More About Ken Caryl
                </h3>
                <p className="text-gray-700">
                  Ken Caryl, Colorado, is a picturesque suburban community
                  located in the foothills of the Rocky Mountains. With its
                  scenic beauty and close-knit neighborhoods, Ken Caryl offers a
                  peaceful retreat from the hustle and bustle of the city. As
                  you settle into your new life in Ken Caryl, you'll have the
                  opportunity to enjoy outdoor activities, explore local parks,
                  and experience the charm of this beautiful community.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <BookingProcess />
      <MovingTips />
      <div className="flex justify-center items-center pt-10 pb-20 px-5 md:px-10 z-1 relative bg-[#f7f7f7]">
        <div className="flex flex-col items-center justify-center max-w-screen-xl">
          <div className="flex flex-col justify-center gap-3">
            <h3 className="text-2xl font-semibold mt-8">
              Request a Free Moving Quote in Ken Caryl, Colorado
            </h3>
            <p className="text-gray-700">
              Obtaining a free moving quote from Green Mountain Movers is a
              straightforward process. Our dedicated business representatives
              are ready to work with you to determine the services you need,
              providing an accurate moving estimate based on your specific
              requirements. Whether you're moving within Ken Caryl or across the
              country, our experienced team is here to assist you. Contact us
              today via phone, email, or the convenient contact form on this
              page to request your free moving quote. We look forward to
              ensuring a successful move for you!
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-2 text-gray-700 text-lg">
                <BsFillTelephoneFill />
                <a href="tel:1234567890">(123) 456-7890</a>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-lg">
                <BsFillEnvelopeFill />
                <a href="mailto:info@greenmtnmovers.com">
                  info@greenmtnmovers.com
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="w-full">
        <iframe
          width="100%"
          height="400"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Ken%20Caryl,%20CO&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
