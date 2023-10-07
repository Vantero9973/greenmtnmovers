"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ContactForm from "../../components/ContactForm";
import assemblyImage from "../../public/media/movers.jpg";
import BookingProcess from "../../components/BookingProcess";

export default function FurnitureAssembly() {
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
          Furniture Assembly Services
        </header>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-screen-xl pt-20 px-5">
          <div className="mx-auto">
            {/* Introduction */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">
                Welcome to Green Mountain Movers
              </h2>
              <p className="text-gray-700">
                At Green Mountain Movers, we specialize in professional
                furniture assembly services to simplify your life. Whether
                you've purchased new furniture, moved to a new location, or need
                help with existing pieces, our skilled technicians are here to
                ensure that your furniture is assembled correctly, securely, and
                ready for use.
              </p>
            </div>

            <div className="py-5 md:pt-5 md:pb-10">
              {/* Furniture Assembly */}
              <div className="flex flex-col gap-5 mb-8">
                <h2 className="text-2xl font-semibold mb-2">
                  Furniture Assembly Expertise
                </h2>
                <p className="text-gray-700">
                  At Green Mountain Movers, we take pride in our extensive
                  furniture assembly expertise. Our highly skilled team is
                  well-versed in assembling a wide variety of furniture,
                  ensuring that your pieces are expertly put together for both
                  aesthetic appeal and functionality. Here's a more detailed
                  look at our furniture assembly capabilities:
                </p>
                <ul className="list-disc list-inside text-gray-700 pl-5">
                  <li>
                    Chairs of All Types: Whether it's a classic dining chair, a
                    comfortable recliner, or stylish accent chairs, we have the
                    knowledge and tools to assemble them with precision.
                  </li>
                  <li>
                    Tables Galore: From elegant dining tables to practical
                    coffee tables, our experts can assemble various table
                    styles, ensuring stability and an even surface for your
                    daily needs.
                  </li>
                  <li>
                    Beds, Beds, Beds: Whether you have a luxurious platform bed
                    or a functional bunk bed, our team can efficiently assemble
                    them, ensuring a safe and comfortable night's sleep.
                  </li>
                  <li>
                    Bookshelves for Organization: We specialize in assembling
                    bookshelves of various designs and sizes, allowing you to
                    showcase your book collection or decorative items with
                    style.
                  </li>
                  <li>
                    Dressers for Style and Storage: Our expertise extends to
                    dressers, providing you with beautifully assembled storage
                    solutions that complement your bedroom decor and keep your
                    belongings organized.
                  </li>
                  <li>
                    Desks and Office Furniture: Need to set up your home office?
                    We've got you covered with the assembly of desks, office
                    chairs, and other office furniture to create a productive
                    workspace.
                  </li>
                  <li>
                    Other Furniture: Beyond the items listed above, we're
                    capable of assembling various other types of furniture
                    pieces, ensuring that your entire furniture collection is
                    expertly put together to enhance your living or workspace.
                  </li>
                </ul>

                <p className="text-gray-700">
                  We understand that each piece of furniture is unique, and our
                  meticulous attention to detail ensures that your furniture not
                  only looks great but also functions flawlessly. Whether you're
                  furnishing your home, office, or any other space, you can
                  trust Green Mountain Movers for top-notch furniture assembly
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingProcess />

      <div className="flex justify-center items-center">
        <div className="max-w-screen-xl py-20 px-5">
          {/* Request a Quote */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              Get a Quote for Furniture Assembly Services
            </h2>
            <p className="text-gray-700">
              Enjoy hassle-free furniture assembly by requesting a quote from
              Green Mountain Movers. We provide transparent pricing and ensure
              that your furniture is assembled with precision. Contact us today
              for a free quote tailored to your specific furniture assembly
              needs.
            </p>
            <div className="pt-5 pb-10">
              <ContactForm />
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="flex max-md:flex-col justify-start items-stretch md:gap-20">
            <div className="mb-8 w-full md:w-2/4">
              <h2 className="text-2xl font-semibold mb-2">
                Why Choose Green Mountain Movers for Furniture Assembly?
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Experienced and skilled technicians for precise furniture
                  assembly.
                </li>
                <li>
                  Wide range of furniture types, from chairs to bookshelves,
                  assembled with care.
                </li>
                <li>
                  Attention to detail to ensure the longevity and functionality
                  of your furniture.
                </li>
                <li>
                  Furniture repair services available to fix any damages or
                  issues.
                </li>
                <li>
                  Transparent pricing with no hidden fees for your peace of
                  mind.
                </li>
                <li>
                  Committed to delivering exceptional service and customer
                  satisfaction.
                </li>
              </ul>
            </div>
            <div className="w-full md:w-2/4">
              <Image
                src={assemblyImage}
                alt="Furniture Assembly"
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Furniture Assembly Information */}
      <div className="service-areas-clippath-bg flex justify-center items-center">
        <div className="max-w-screen-xl flex flex-col justify-center items-center gap-3 py-20 px-5 text-white text-center">
          <h2 className="text-2xl font-semibold mb-2">
            <u>Furniture Assembly Information</u>
          </h2>
          <p>
            Our furniture assembly services are designed to simplify your life.
            Whether you've purchased new furniture or need assistance with
            existing pieces, our skilled technicians are here to ensure that
            your furniture is assembled correctly, securely, and ready for use.
            We take pride in our attention to detail, ensuring that your
            furniture not only looks great but also functions as intended.
          </p>
        </div>
      </div>
    </>
  );
}
