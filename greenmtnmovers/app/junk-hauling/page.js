"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ContactForm from "../../components/ContactForm";
import truckBlack from "../../public/media/truck_black.png";
import truckWhite from "../../public/media/truck_white.png";
import junkHauling from "../../public/media/movers.jpg";
import BookingProcess from "../../components/BookingProcess";

export default function JunkHauling() {
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
          Junk Hauling Services
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
                When it comes to efficient and eco-friendly junk hauling, Green
                Mountain Movers has you covered. We are committed to providing
                top-notch junk removal services that not only free up your space
                but also contribute to a cleaner environment. Our expert team is
                equipped to handle a wide range of items and debris, ensuring
                your property is clutter-free and organized. Let's explore how
                we can simplify your junk removal needs.
              </p>
            </div>

            <div className="py-5 md:pt-5 md:pb-10">
              <div className="cards">
                {/* Card 1 - Furniture Hauling */}
                <div className="services-card-container">
                  <div className="cardsTextContainer">
                    <div className="cardsAccent" />
                    <Image
                      src={truckBlack}
                      alt="black sofa junk hauling icon"
                      className="cardsImage"
                    />
                    <Image
                      src={truckWhite}
                      alt="white sofa junk hauling icon"
                      className="cardsImageHover"
                    />
                    <h2 className="card-title">FURNITURE HAULING</h2>
                  </div>
                  <p className="card-body">
                    Getting rid of old furniture can be a hassle. Whether it's a
                    worn-out sofa, a bulky dining table, or other unwanted
                    pieces, our team can efficiently haul them away. We ensure
                    responsible disposal, including recycling or donating usable
                    items, to reduce environmental impact. We handle the heavy
                    lifting, ensuring the safe removal and disposal of your
                    furniture. Whether you're redecorating, moving, or simply
                    making space, our furniture hauling service is here to
                    simplify your life.
                  </p>
                </div>

                {/* Card 2 - Appliance Removal */}
                <div className="services-card-container">
                  <div className="cardsTextContainer">
                    <div className="cardsAccent" />
                    <Image
                      src={truckBlack}
                      alt="black fridge junk hauling icon"
                      className="cardsImage"
                    />
                    <Image
                      src={truckWhite}
                      alt="white fridge junk hauling icon"
                      className="cardsImageHover"
                    />
                    <h2 className="card-title">APPLIANCE REMOVAL</h2>
                  </div>
                  <p className="card-body">
                    Old appliances taking up space? We can remove them safely
                    and responsibly. Whether it's a refrigerator, washing
                    machine, or other appliances, we handle the heavy lifting
                    and proper disposal, ensuring eco-friendly practices. Our
                    appliance removal service is designed to make your life
                    easier. We take care of the logistics and ensure that your
                    old appliances are properly disposed of, so you don't have
                    to worry about a thing.
                  </p>
                </div>

                {/* Card 3 - Mattress Disposal */}
                <div className="services-card-container">
                  <div className="cardsTextContainer">
                    <div className="cardsAccent" />
                    <Image
                      src={truckBlack}
                      alt="black mattress junk hauling icon"
                      className="cardsImage"
                    />
                    <Image
                      src={truckWhite}
                      alt="white mattress junk hauling icon"
                      className="cardsImageHover"
                    />
                    <h2 className="card-title">MATTRESS DISPOSAL</h2>
                  </div>
                  <p className="card-body">
                    Disposing of an old mattress can be tricky, but we make it
                    easy. Our team can haul away your mattress and ensure proper
                    disposal, adhering to responsible waste management
                    practices. Say goodbye to that old, uncomfortable mattress.
                    We'll take care of the heavy lifting and ensure that your
                    mattress is disposed of in an eco-friendly manner, leaving
                    you with a peaceful night's sleep.
                  </p>
                </div>

                {/* Card 4 - Electronics Recycling */}
                <div className="services-card-container">
                  <div className="cardsTextContainer">
                    <div className="cardsAccent" />
                    <Image
                      src={truckBlack}
                      alt="black electronics recycling icon"
                      className="cardsImage"
                    />
                    <Image
                      src={truckWhite}
                      alt="white electronics recycling icon"
                      className="cardsImageHover"
                    />
                    <h2 className="card-title">ELECTRONICS RECYCLING</h2>
                  </div>
                  <p className="card-body">
                    Don't let old electronics clutter your space. Our team can
                    collect and recycle electronics responsibly, ensuring that
                    valuable materials are reclaimed, and hazardous components
                    are safely disposed of. Upgrade your devices without the
                    guilt of environmental impact. We'll handle the recycling
                    process, so you can enjoy the latest gadgets with a clear
                    conscience.
                  </p>
                </div>

                {/* Card 5 - Debris Removal */}
                <div className="services-card-container">
                  <div className="cardsTextContainer">
                    <div className="cardsAccent" />
                    <Image
                      src={truckBlack}
                      alt="black debris removal icon"
                      className="cardsImage"
                    />
                    <Image
                      src={truckWhite}
                      alt="white debris removal icon"
                      className="cardsImageHover"
                    />
                    <h2 className="card-title">DEBRIS REMOVAL</h2>
                  </div>
                  <p className="card-body">
                    Whether it's construction debris or yard waste, we can
                    handle the removal. Our team ensures that debris is
                    collected, hauled away, and disposed of properly, leaving
                    your property clean and clutter-free. Tackling a renovation
                    project or cleaning up your outdoor space? Our debris
                    removal service has got you covered. We'll clear away the
                    mess so you can enjoy your space again.
                  </p>
                </div>

                {/* Card 6 - Junk Hauling Booking */}
                <div className="services-card-container">
                  <div className="cardsTextContainer">
                    <div className="cardsAccent" />
                    <Image
                      src={truckBlack}
                      alt="black junk hauling truck icon"
                      className="cardsImage"
                    />
                    <Image
                      src={truckWhite}
                      alt="white junk hauling truck icon"
                      className="cardsImageHover"
                    />
                    <h2 className="card-title">SCHEDULE A PICKUP</h2>
                  </div>
                  <p className="card-body">
                    Ready to reclaim your space? Schedule a pickup with Green
                    Mountain Movers today. Our convenient booking process makes
                    it easy to get rid of unwanted items and enjoy a
                    clutter-free environment. Whether you have a single item or
                    a whole load of junk to haul, we're here to help. Book a
                    pickup, and we'll take care of the rest, so you can enjoy a
                    cleaner, more spacious living or working area.
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
              Get a Quote for Junk Hauling Services
            </h2>
            <p className="text-gray-700">
              Ready to declutter your space? Contact Green Mountain Movers for a
              free quote on our junk hauling services. We offer transparent
              pricing and efficient removal, ensuring your property is clean and
              clutter-free.
            </p>
            <div className="pt-5 pb-10">
              <ContactForm />
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="flex max-md:flex-col justify-start items-stretch md:gap-20">
            <div className="mb-8 w-full md:w-2/4">
              <h2 className="text-2xl font-semibold mb-2">
                Why Choose Green Mountain Movers for Junk Hauling?
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Eco-Friendly Disposal: We prioritize responsible disposal
                  practices to minimize environmental impact.
                </li>
                <li>
                  Efficient Removal: Our expert team ensures quick and
                  hassle-free removal of junk and unwanted items.
                </li>
                <li>
                  Transparent Pricing: We provide upfront pricing with no hidden
                  fees.
                </li>
                <li>
                  Versatile Services: From furniture to electronics, we handle a
                  wide range of items.
                </li>
                <li>
                  Professional Team: Our trained professionals ensure safe and
                  secure removal.
                </li>
                <li>
                  Convenient Booking: Schedule a pickup at your convenience and
                  enjoy a clutter-free space.
                </li>
              </ul>
            </div>
            <div className="w-full md:w-2/4">
              <Image
                src={junkHauling}
                alt="Junk Hauling"
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Junk Hauling Information */}
      <div className="service-areas-clippath-bg flex justify-center items-center">
        <div className="max-w-screen-xl flex flex-col justify-center items-center py-20 px-5 text-white text-center">
          <h2 className="text-2xl font-semibold mb-2">
            <u>Junk Hauling Information</u>
          </h2>
          <p>
            Junk hauling is more than just removing unwanted items; it's about
            creating a cleaner and clutter-free space. Green Mountain Movers is
            your trusted partner for eco-friendly junk removal services. Whether
            you're clearing out your home, office, or construction site, we're
            here to simplify the process and contribute to a cleaner
            environment. Contact us today to schedule a pickup and experience
            hassle-free junk hauling.
          </p>
        </div>
      </div>
    </>
  );
}
