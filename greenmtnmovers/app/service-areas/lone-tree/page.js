"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import lonetreeImage from "../../../public/media/movers.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import ContactForm from "../../../components/ContactForm";
import BookingProcess from "../../../components/BookingProcess";
import MovingTips from "../../../components/MovingTips";
import ServiceAreasCards from "../../../components/ServiceAreasCards";

export default function LoneTree() {
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
      <div className="service-areas-clippath-bg flex justify-center items-center relative h-[200px] max-md:hidden">
        <div className="mtnBorder--bottom absolute bottom-0 shadow" />
        <header
          className="text-5xl font-semibold h-max w-full absolute p-10 text-center mb-10 drop-shadow-3xl opacity-90 text-white"
          style={{
            transform: `translateY(${scrollPosition * 0.4}px)`,
          }}
        >
          Lone Tree Moving Services
        </header>
      </div>
      <div className="flex justify-center items-center py-5 px-5 md:px-10 z-1 relative bg-[#f7f7f7]">
        <div className="flex flex-col items-center justify-center max-w-screen-xl">
          <section id="lonetree" className="my-10">
            <h2 className="text-2xl font-semibold md:hidden">
              Expert Moving Services in Lone Tree, Colorado
            </h2>
            <div className="flex max-md:flex-col-reverse items-stretch justify-between gap-5 md:gap-10 my-5">
              <div className="flex flex-col justify-start gap-3 w-full md:w-2/4 lg:w-3/5">
                <h2 className="text-2xl font-semibold max-md:hidden">
                  Trusted Lone Tree Moving Company - Local & Long-Distance Moves
                </h2>
                <p className="text-gray-700">
                  Welcome to Green Mountain Movers, your trusted Lone Tree, CO
                  moving company. We are dedicated to providing top-notch moving
                  services to the picturesque city of Lone Tree and its
                  surrounding areas. Whether you're planning a local or
                  long-distance move, our team of licensed and insured
                  professionals is here to ensure a smooth and hassle-free
                  transition for you and your belongings.
                </p>
                <p className="text-gray-700">
                  Lone Tree is a vibrant city known for its beautiful
                  landscapes, upscale communities, and thriving business
                  environment. Our Lone Tree moving services are designed to
                  cater to the specific needs of this dynamic city.
                </p>
                <p className="text-gray-700">
                  At Green Mountain Movers, we understand that every move is
                  unique. Whether you're moving to or from Lone Tree, our team
                  is committed to providing a seamless and stress-free
                  experience. We take pride in being a part of this community
                  and aim to make your move a positive and memorable experience.
                </p>
              </div>
              <div className="flex items-start w-full md:w-2/4 lg:w-2/5">
                <Image
                  src={lonetreeImage}
                  alt="Lone Tree"
                  className="object-cover h-full rounded-2xl"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <h3 className="text-2xl font-semibold mt-8">
                Comprehensive Moving Services in Lone Tree, CO
              </h3>
              <ServiceAreasCards />
            </div>

            <div className="flex flex-wrap justify-center items-stretch">
              <div className="flex flex-col justify-start gap-3 md:w-2/4 md:pr-5">
                <h3 className="text-xl font-semibold mt-8">
                  Lone Tree, Colorado Zip Codes We Serve
                </h3>
                <p className="text-gray-700">
                  Our service area covers a wide range of Lone Tree zip codes,
                  including 80111 and surrounding areas. If you're in the Lone
                  Tree area, Green Mountain Movers has you covered.
                </p>
              </div>
              <div className="flex flex-col justify-start gap-3 md:w-2/4 md:pl-5">
                <h3 className="text-lg font-semibold mt-8">
                  Residential and Commercial Moving Solutions in Lone Tree
                </h3>
                <p className="text-gray-700">
                  Welcome to Green Mountain Movers, your trusted partner for
                  seamless residential and commercial moves in the picturesque
                  city of Lone Tree, Colorado. Whether you're relocating your
                  home or office, we take pride in offering tailored moving
                  solutions that cater to your unique needs.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-stretch">
              <div className="flex flex-col justify-start gap-3 md:w-2/4 md:pr-5">
                <h3 className="text-lg font-semibold mt-8">
                  Lone Tree Residential Moving Services
                </h3>
                <p className="text-gray-700">
                  Our Lone Tree residential moving services are designed to make
                  your transition to a new home a stress-free experience. Our
                  dedicated team understands the sentimental value of your
                  belongings, and we handle them with utmost care. From packing
                  and loading to transportation and unpacking, we ensure every
                  step of your residential move is executed flawlessly. Our
                  services are backed by years of experience and a commitment to
                  customer satisfaction.
                </p>
              </div>
              <div className="flex flex-col justify-start gap-3 md:w-2/4 md:pl-5">
                <h3 className="text-lg font-semibold mt-8">
                  Commercial Moving Expertise in Lone Tree
                </h3>
                <p className="text-gray-700">
                  At Green Mountain Movers, we recognize the importance of
                  minimizing downtime during office relocations. Our commercial
                  moving expertise is geared towards ensuring your business can
                  resume operations as quickly as possible. We specialize in
                  handling valuable equipment and sensitive documents, making
                  your office relocation in Lone Tree secure and efficient.
                  Trust us to handle your commercial move with precision,
                  allowing you to focus on what matters most - your business.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-3 w-full md:pr-5">
              <h3 className="text-xl font-semibold mt-8">
                More About Lone Tree
              </h3>
              <p className="text-gray-700">
                Lone Tree, Colorado, is a city that seamlessly combines urban
                convenience with natural beauty. It's known for its upscale
                neighborhoods, shopping districts, and proximity to outdoor
                recreational areas. Whether you're moving to or from Lone Tree,
                our experienced team is here to ensure a smooth transition for
                you and your family or business, so you can fully immerse
                yourself in the charming lifestyle that this city offers.
              </p>
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
              Request a Free Moving Quote in Lone Tree, Colorado
            </h3>
            <p className="text-gray-700">
              Obtaining a free moving quote from Green Mountain Movers is a
              straightforward process. Our dedicated business representatives
              are ready to work with you to determine the services you need,
              providing an accurate moving estimate based on your specific
              requirements. Whether you're moving within Lone Tree or to another
              destination, our experienced team is here to assist you. Contact
              us today via phone, email, or the convenient contact form on this
              page to request your free moving quote. We look forward to
              ensuring a successful move for you!
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-2 text-gray-700 text-lg">
                <BsFillTelephoneFill />
                <a href="tel:7201234567">(720) 123-4567</a>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-lg">
                <BsFillEnvelopeFill />
                <a href="mailto:info@lonetree-movers.com">
                  info@lonetree-movers.com
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
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Lone%20Tree,%20CO&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
