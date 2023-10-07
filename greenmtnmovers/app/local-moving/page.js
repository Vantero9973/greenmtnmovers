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

export default function LocalMoving() {
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
          Local Moving Services
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
                As your trusted partner for local moves in Colorado, Green
                Mountain Movers is dedicated to providing seamless and
                stress-free relocation experiences. With a deep understanding of
                Colorado's diverse landscapes and cities, we offer a wide range
                of services tailored to your specific needs. Let's explore how
                we can make your Colorado move an unforgettable journey.
              </p>
            </div>

            <div className="py-5 md:pt-5 md:pb-10">
              <div className="cards">
                <div className="services-card-container">
                  <div className="cardsTextContainer">
                    <div className="cardsAccent" />
                    <Image
                      src={truckBlack}
                      alt="black local moving truck icon"
                      className="cardsImage"
                    />
                    <Image
                      src={truckWhite}
                      alt="white local moving truck icon"
                      className="cardsImageHover"
                    />
                    <h2 className="card-title">HOUSEHOLD MOVING SERVICES</h2>
                  </div>
                  <p className="card-body">
                    Moving your household within Colorado is a significant
                    event, and we're here to ensure it's a smooth transition.
                    Our professional movers not only handle your belongings with
                    care but also assist in planning every aspect of your move.
                    From packing fragile items to safely transporting your
                    furniture across Colorado's scenic routes, we make sure your
                    local move is hassle-free and memorable.
                  </p>
                </div>
                <div className="services-card-container">
                  <div className="cardsTextContainer">
                    <div className="cardsAccent" />
                    <Image
                      src={apartmentBlack}
                      alt="black moving box long distance moving icon"
                      className="cardsImage"
                    />
                    <Image
                      src={apartmentWhite}
                      alt="white moving box long distance moving icon"
                      className="cardsImageHover"
                    />
                    <h2 className="card-title">
                      LOCAL APARTMENT MOVING SERVICES
                    </h2>
                  </div>
                  <div className="card-body">
                    Apartment moving in Colorado can be an adventure, especially
                    in urban areas like Denver, where elevators, stairs, and
                    narrow hallways are common. Our specialized apartment movers
                    are skilled at maneuvering through these challenges
                    efficiently. We provide the necessary equipment, including
                    dollies, furniture sliders, and lifting straps, to ensure a
                    smooth apartment move.
                  </div>
                </div>
                <div className="services-card-container">
                  <div className="cardsTextContainer">
                    <div className="cardsAccent" />
                    <Image
                      src={officeBlack}
                      alt="black furniture assembly icon"
                      className="cardsImage"
                    />
                    <Image
                      src={officeWhite}
                      alt="white furniture assembly icon"
                      className="cardsImageHover"
                    />
                    <h2 className="card-title">LOCAL OFFICE MOVING SERVICES</h2>
                  </div>
                  <p className="card-body">
                    Office relocations in Colorado require precision and
                    efficiency to minimize downtime for your business. Green
                    Mountain Movers is your partner in ensuring a successful
                    office move. Our experienced team works closely with your
                    organization to create a tailored moving plan that
                    accommodates your schedule and minimizes disruption. With
                    Green Mountain Movers, you can focus on your business, while
                    we take care of your office move in Colorado.
                  </p>
                </div>
                <div className="services-card-container">
                  <div className="cardsTextContainer">
                    <div className="cardsAccent" />
                    <Image
                      src={boxBlack}
                      alt="black moving box long distance moving icon"
                      className="cardsImage"
                    />
                    <Image
                      src={boxWhite}
                      alt="white moving box long distance moving icon"
                      className="cardsImageHover"
                    />
                    <h2 className="card-title">LOCAL PACKING SERVICES</h2>
                  </div>
                  <p className="card-body">
                    Proper packing is the foundation of a successful move in
                    Colorado. Our professional packers are experts in protecting
                    your belongings. We provide high-quality packing materials,
                    including sturdy boxes, shrink wrap, bubble wrap, and
                    packing tape, to ensure everything is secure during
                    transport. Our meticulous approach includes labeling and
                    organizing boxes, making unpacking a breeze.
                  </p>
                </div>
                <div className="services-card-container">
                  <div className="cardsTextContainer">
                    <div className="cardsAccent" />
                    <Image
                      src={muscleBlack}
                      alt="black labor only moving help icon"
                      className="cardsImage"
                    />
                    <Image
                      src={muscleWhite}
                      alt="white labor only moving icon"
                      className="cardsImageHover"
                    />
                    <h2 className="card-title">LOCAL LABOR-ONLY MOVING HELP</h2>
                  </div>
                  <p className="card-body">
                    Need an extra set of hands for your move in Colorado? Our
                    local labor-only moving services are here to help. Our
                    skilled and experienced team can assist with loading and
                    unloading rental trucks, containers, and more. You can trust
                    Green Mountain Movers to handle your items with care, making
                    your move a stress-free experience.
                  </p>
                </div>
                <div className="services-card-container">
                  <div className="cardsTextContainer">
                    <div className="cardsAccent" />
                    <Image
                      src={deliveryBlack}
                      alt="black heavy furniture moving icon"
                      className="cardsImage"
                    />
                    <Image
                      src={deliveryWhite}
                      alt="white heavy furniture moving icon"
                      className="cardsImageHover"
                    />
                    <h2 className="card-title">LOCAL DELIVERY SERVICES</h2>
                  </div>
                  <p className="card-body">
                    For smaller moves in Colorado, such as studio apartments or
                    just a few items, our local delivery services offer a
                    cost-effective solution. We ensure the safe and efficient
                    transport of your belongings. Our delivery services in
                    Colorado are designed for your convenience. You can trust
                    Green Mountain Movers to handle your items with care.
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
          {/* Local Moving Quotes */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              Get a Quote for Local Moving Services
            </h2>
            <p className="text-gray-700">
              Planning your local move in Colorado starts with gathering quotes
              from reputable moving companies. Green Mountain Movers offers
              complimentary estimates tailored to your unique needs. Our
              detailed quotes provide a breakdown of every aspect of your move,
              ensuring transparency and clarity throughout the process.
            </p>
            <p className="text-gray-700">
              Colorado's diverse terrain and cities require customized moving
              solutions. Our team considers factors such as distance, location,
              and the size of your move when providing quotes. Contact Green
              Mountain Movers today to receive your free quote and, if needed,
              an on-site estimate for your Colorado move.
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

      {/* Local Move Information */}
      <div className="service-areas-clippath-bg flex justify-center items-center">
        <div className="max-w-screen-xl flex flex-col justify-center items-center gap-3 py-20 px-5 text-white text-center">
          <h2 className="text-2xl font-semibold mb-2">
            <u>Local Move Information</u>
          </h2>
          <p>
            A local move in Colorado typically stays within a 100-mile radius
            and remains within the state of origin. With its diverse geography,
            Colorado offers a unique backdrop for your move, whether you're
            exploring the majestic mountains or the vibrant cities. Various
            factors, including your level of preparedness, packing, and
            proximity to the truck, influence the final cost of your move. Green
            Mountain Movers is your trusted partner for a seamless and
            stress-free local move in beautiful Colorado. We have a deep
            understanding of the state's geography and are committed to
            providing you with a memorable moving experience in this stunning
            part of the country.
          </p>
        </div>
      </div>
    </>
  );
}
