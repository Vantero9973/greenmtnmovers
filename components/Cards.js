import Image from "next/image";
import truckBlack from "../public/media/truck_black.png";
import boxBlack from "../public/media/box_black.png";
import furnitureBlack from "../public/media/furniture_black.png";
import trashBlack from "../public/media/trash_black.png";

export default function Cards() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-screen-xl relative isolate bg-white py-10 px-6 lg:px-8">
        <div className="cards mt-10">
          <div className="cardContainer">
            <div className="cardsTextContainer">
              <div className="cardsAccent" />
              <Image
                src={truckBlack}
                alt="black local moving truck icon"
                className="cardsImage"
              />
              <h2 className="card-title">LOCAL MOVING</h2>
            </div>
            <p className="card-body">
              Smooth local moves made easy! Our friendly and experienced team
              handles the logistics while you settle in. Stress-free and
              efficient. Trust us with your local move.
            </p>
          </div>
          <div className="cardContainer">
            <div className="cardsTextContainer">
              <div className="cardsAccent" />
              <Image
                src={boxBlack}
                alt="black moving box long distance moving icon"
                className="cardsImage"
              />
              <h2 className="card-title">LONG-DISTANCE MOVING</h2>
            </div>
            <p className="card-body">
              Relocate with peace of mind! Our experienced team ensures a
              seamless long-distance move. Timely and secure delivery of your
              belongings. Start your new chapter worry-free.
            </p>
          </div>
          <div className="cardContainer">
            <div className="cardsTextContainer">
              <div className="cardsAccent" />
              <Image
                src={furnitureBlack}
                alt="black furniture assembly icon"
                className="cardsImage"
              />
              <h2 className="card-title">FURNITURE ASSEMBLY</h2>
            </div>
            <p className="card-body">
              No more assembly headaches! Our skilled team saves you time and
              effort. Let us handle the nuts and bolts. Enjoy a fully furnished
              space hassle-free. Your furniture, perfectly assembled.
            </p>
          </div>
          <div className="cardContainer">
            <div className="cardsTextContainer">
              <div className="cardsAccent" />
              <Image
                src={trashBlack}
                alt="black junk removal and hauling icon"
                className="cardsImage"
              />
              <h2 className="card-title">JUNK HAULING</h2>
            </div>
            <p className="card-body">
              Clear the clutter effortlessly! Our reliable junk hauling services
              remove unwanted items. We handle the heavy lifting and responsible
              disposal. Say goodbye to clutter and hello to a clean space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
