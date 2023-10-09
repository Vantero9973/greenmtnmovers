"use client";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

export default function MovingChecklist() {
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
          Moving Checklist
        </header>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-screen-lg py-10 px-5 md:px-10 text-gray-800">
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-2">
              6 to 8 Weeks Before Moving Date
            </h3>
            <ul className="list-disc list-inside">
              <li>
                Create a budget for your moving expenses and keep track of it
                throughout the process.
              </li>
              <li>
                Research local moving companies, including Green Mountain
                Movers, and collect moving quotes.
              </li>
              <li>
                Organize a folder (either physical or digital) for all
                moving-related documents.
              </li>
              <li>
                Declutter your belongings by hosting a garage/online sale or
                donating to charity.
              </li>
              <li>
                Arrange for school and medical records to be transferred to your
                new location.
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-2">
              4 to 6 Weeks Before Moving Date
            </h3>
            <ul className="list-disc list-inside">
              <li>
                Choose Green Mountain Movers and schedule your move. The earlier
                you book, the more date options you'll have.
              </li>
              <li>
                Gather packing supplies, including boxes and wrapping materials.
                Consider using free boxes from liquor stores or online listings.
              </li>
              <li>
                Inform your friends about your upcoming move through social
                media or personal communication.
              </li>
              <li>
                Start packing seasonal or infrequently used items, and remember
                to label boxes appropriately.
              </li>
              <li>
                Update accounts with your new address, including banks,
                subscriptions, insurance, and utilities.
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-2">
              2 to 4 Weeks Before Moving Date
            </h3>
            <ul className="list-disc list-inside">
              <li>
                Continue packing and organizing your belongings, avoiding
                last-minute rushes.
              </li>
              <li>
                If downsizing, arrange for storage near your new home with Green
                Mountain Movers.
              </li>
              <li>
                Notify the post office of your move through their online form or
                in person.
              </li>
              <li>
                Separate valuable items that you plan to transport personally.
              </li>
              <li>
                If moving long distance, make hotel arrangements for your
                journey.
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-2">
              1 to 2 Weeks Before Moving Date
            </h3>
            <ul className="list-disc list-inside">
              <li>
                Pack essential items for a 2-day stay, ensuring you have
                immediate access to necessities upon arrival.
              </li>
              <li>
                Make an inventory list of the items you'll be moving with Green
                Mountain Movers.
              </li>
              <li>
                Reconfirm your move with Green Mountain Movers, verifying
                contact details, address, date, and time.
              </li>
              <li>
                Clean out your safe deposit box if you're changing bank
                locations.
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-2">Moving Day</h3>
            <ul className="list-disc list-inside">
              <li>
                Keep your moving folder handy for expense verification during
                tax filing.
              </li>
              <li>
                Before leaving, ensure all utilities are turned off, windows and
                doors are closed, and keys are left behind.
              </li>
              <li>
                Stay attentive and assist the Green Mountain Movers team with
                any questions they may have.
              </li>
              <li>
                Guide the movers to your new location and sign any required
                paperwork.
              </li>
              <li>
                Take one last look at your old house and prepare for your new
                journey at your new home.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
