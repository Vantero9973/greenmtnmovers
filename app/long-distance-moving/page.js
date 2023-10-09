"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ContactForm from "../../components/ContactForm";
import truckBlack from "../../public/media/truck_black.png";
import truckWhite from "../../public/media/truck_white.png";
import boxBlack from "../../public/media/box_black.png";
import boxWhite from "../../public/media/box_white.png";
import officeBlack from "../../public/media/office-black.png";
import officeWhite from "../../public/media/office-white.png";
import apartmentBlack from "../../public/media/apartment-black.png";
import apartmentWhite from "../../public/media/apartment-white.png";
import muscleWhite from "../../public/media/muscle_white.png";
import muscleBlack from "../../public/media/muscle_black.png";
import deliveryWhite from "../../public/media/delivery-white.png";
import deliveryBlack from "../../public/media/delivery-black.png";
import movers from "../../public/media/movers.jpg";
import BookingProcess from "../../components/BookingProcess";
import Navbar from "../../components/Navbar";

export default function LongDistanceMoving() {
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
          Long-Distance Moving Services
        </header>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-screen-xl py-20 px-5">
          <div className="mx-auto">
            {/* Introduction */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">
                Welcome to Green Mountain Movers
              </h2>
              <p className="text-gray-700">
                As your trusted partner for long-distance moves across the
                United States, Green Mountain Movers is dedicated to providing
                seamless and stress-free relocation experiences. Whether you're
                moving across state lines or from coast to coast, we offer a
                wide range of services tailored to your specific needs. Let's
                explore how we can make your long-distance move a smooth and
                memorable journey.
              </p>
            </div>

            <div className="py-5 md:pt-5 md:pb-10">
              <div className="cards">
                {/* Card 1 - Household Moving */}
                <div className="services-card-container">
                  <div className="cardsTextContainer">
                    <div className="cardsAccent" />
                    <Image
                      src={truckBlack}
                      alt="black long-distance moving truck icon"
                      className="cardsImage"
                    />
                    <Image
                      src={truckWhite}
                      alt="white long-distance moving truck icon"
                      className="cardsImageHover"
                    />
                    <h2 className="card-title">
                      LONG-DISTANCE HOUSEHOLD MOVING SERVICES
                    </h2>
                  </div>
                  <p className="card-body">
                    Moving your household across the country is a significant
                    undertaking, and we're here to ensure it's a smooth
                    transition. Our professional movers not only handle your
                    belongings with care but also assist in planning every
                    aspect of your move. From packing your cherished possessions
                    to safely transporting your furniture and valuables across
                    state lines, we make sure your long-distance move is
                    hassle-free and memorable.
                  </p>
                </div>

                {/* Card 2 - Apartment Moving */}
                <div className="services-card-container">
                  <div className="cardsTextContainer">
                    <div className="cardsAccent" />
                    <Image
                      src={apartmentBlack}
                      alt="black moving box long-distance moving icon"
                      className="cardsImage"
                    />
                    <Image
                      src={apartmentWhite}
                      alt="white moving box long-distance moving icon"
                      className="cardsImageHover"
                    />
                    <h2 className="card-title">
                      LONG-DISTANCE APARTMENT MOVING SERVICES
                    </h2>
                  </div>
                  <div className="card-body">
                    Apartment moving across state lines can be a complex
                    process, especially when dealing with different regulations
                    and logistics. Our specialized apartment movers are skilled
                    at navigating these challenges efficiently. We provide the
                    necessary equipment, including dollies, furniture sliders,
                    and lifting straps, to ensure a smooth apartment move
                    regardless of the distance.
                  </div>
                </div>

                {/* Card 3 - Office Moving */}
                <div className="services-card-container">
                  <div className="cardsTextContainer">
                    <div className="cardsAccent" />
                    <Image
                      src={officeBlack}
                      alt="black office moving icon"
                      className="cardsImage"
                    />
                    <Image
                      src={officeWhite}
                      alt="white office moving icon"
                      className="cardsImageHover"
                    />
                    <h2 className="card-title">
                      LONG-DISTANCE OFFICE MOVING SERVICES
                    </h2>
                  </div>
                  <p className="card-body">
                    Office relocations across state lines require precision and
                    efficiency to minimize downtime for your business. Green
                    Mountain Movers is your partner in ensuring a successful
                    office move. Our experienced team works closely with your
                    organization to create a tailored moving plan that
                    accommodates your schedule and minimizes disruption. With
                    Green Mountain Movers, you can focus on your business while
                    we take care of your office move across the United States.
                  </p>
                </div>

                {/* Card 4 - Packing Services */}
                <div className="services-card-container">
                  <div className="cardsTextContainer">
                    <div className="cardsAccent" />
                    <Image
                      src={boxBlack}
                      alt="black packing services icon"
                      className="cardsImage"
                    />
                    <Image
                      src={boxWhite}
                      alt="white packing services icon"
                      className="cardsImageHover"
                    />
                    <h2 className="card-title">PACKING SERVICES</h2>
                  </div>
                  <p className="card-body">
                    Proper packing is the foundation of a successful
                    long-distance move. Our professional packers are experts in
                    protecting your belongings. We provide high-quality packing
                    materials, including sturdy boxes, shrink wrap, bubble wrap,
                    and packing tape, to ensure everything is secure during
                    transport. Our meticulous approach includes labeling and
                    organizing boxes, making unpacking a breeze.
                  </p>
                </div>

                {/* Card 5 - Labor-Only Moving Help */}
                <div className="services-card-container">
                  <div className="cardsTextContainer">
                    <div className="cardsAccent" />
                    <Image
                      src={muscleBlack}
                      alt="black labor-only moving help icon"
                      className="cardsImage"
                    />
                    <Image
                      src={muscleWhite}
                      alt="white labor-only moving icon"
                      className="cardsImageHover"
                    />
                    <h2 className="card-title">LABOR-ONLY MOVING HELP</h2>
                  </div>
                  <p className="card-body">
                    Need an extra set of hands for your long-distance move? Our
                    local labor-only moving services are here to help. Our
                    skilled and experienced team can assist with loading and
                    unloading rental trucks, containers, and more. You can trust
                    Green Mountain Movers to handle your items with care, making
                    your long-distance move a stress-free experience.
                  </p>
                </div>

                {/* Card 6 - Delivery Services */}
                <div className="services-card-container">
                  <div className="cardsTextContainer">
                    <div className="cardsAccent" />
                    <Image
                      src={deliveryBlack}
                      alt="black long-distance delivery icon"
                      className="cardsImage"
                    />
                    <Image
                      src={deliveryWhite}
                      alt="white long-distance delivery icon"
                      className="cardsImageHover"
                    />
                    <h2 className="card-title">
                      LONG-DISTANCE DELIVERY SERVICES
                    </h2>
                  </div>
                  <p className="card-body">
                    For smaller long-distance moves, such as shipping items to a
                    different state, our delivery services offer a
                    cost-effective solution. We ensure the safe and efficient
                    transport of your belongings. Our delivery services are
                    designed for your convenience and peace of mind. You can
                    trust Green Mountain Movers to handle your items with care
                    during the entire journey.
                  </p>
                </div>
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
              Get a Quote for Long-Distance Moving Services
            </h2>
            <p className="text-gray-700">
              Planning your long-distance move across the United States starts
              with gathering quotes from reputable moving companies. Green
              Mountain Movers offers complimentary estimates tailored to your
              unique needs. Our detailed quotes provide a breakdown of every
              aspect of your move, ensuring transparency and clarity throughout
              the process.
            </p>
            <p className="text-gray-700">
              Long-distance moves require meticulous planning, taking into
              account factors such as distance, route, and the size of your
              move. Contact Green Mountain Movers today to receive your free
              quote and, if needed, an on-site estimate for your long-distance
              move.
            </p>
            <div className="pt-5 pb-10">
              <ContactForm />
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="flex max-md:flex-col justify-start items-stretch md:gap-20">
            <div className="mb-8 w-full md:w-2/4">
              <h2 className="text-2xl font-semibold mb-2">
                Why Choose Green Mountain Movers?
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Flat rate pricing available for transparent and predictable
                  costs.
                </li>
                <li>
                  Detailed estimate with a breakdown of every part of your move,
                  so you know exactly what to expect.
                </li>
                <li>
                  Free use of high-quality moving blankets for added protection
                  of your furniture and belongings.
                </li>
                <li>
                  Expert disassembly and reassembly of furniture at no
                  additional charge, saving you time and effort.
                </li>
                <li>
                  No fuel surcharge, so you don't have to worry about hidden
                  fees.
                </li>
                <li>
                  Flexible packing services, whether you need full-service
                  packing or assistance with specific items.
                </li>
                <li>
                  Our team consists of knowledgeable, experienced, and reliable
                  movers who treat your possessions with the utmost care.
                </li>
                <li>
                  Specialized custom moving trucks equipped with all necessary
                  equipment and materials for a safe and efficient move.
                </li>
                <li>
                  We take pride in our commitment to punctuality,
                  professionalism, and customer satisfaction, ensuring a
                  stress-free moving experience.
                </li>
              </ul>
            </div>
            <div className="w-full md:w-2/4">
              <Image
                src={movers}
                alt="Movers"
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Long-Distance Move Information */}
      <div className="service-areas-clippath-bg flex justify-center items-center">
        <div className="max-w-screen-xl flex flex-col justify-center items-center gap-3 py-20 px-5 text-white text-center">
          <h2 className="text-2xl font-semibold mb-2">
            <u>Long-Distance Move Information</u>
          </h2>
          <p>
            A long-distance move typically involves crossing state lines and
            covering a significant distance. Green Mountain Movers understands
            the complexities involved in planning and executing long-distance
            moves, and we're committed to providing you with a seamless and
            stress-free experience. Whether you're moving from coast to coast or
            to a neighboring state, we have the expertise to ensure a successful
            and memorable relocation.
          </p>
        </div>
      </div>
    </>
  );
}
