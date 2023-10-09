import Image from "next/image";
import truckBlack from "../public/media/truck_black.png";
import truckWhite from "../public/media/truck_white.png";
import boxBlack from "../public/media/box_black.png";
import boxWhite from "../public/media/box_white.png";
import furnitureBlack from "../public/media/furniture_black.png";
import furnitureWhite from "../public/media/furniture_white.png";
import trashBlack from "../public/media/trash_black.png";
import trashWhite from "../public/media/trash_white.png";
import muscleWhite from "../public/media/muscle_white.png";
import muscleBlack from "../public/media/muscle_black.png";
import weightWhite from "../public/media/weight_white.png";
import weightBlack from "../public/media/weight_black.png";

export default function ServiceAreasCards() {
  return (
    <div className="py-5 md:pt-5 md:pb-10">
      <div className="cards">
        <div className="card-container">
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
            <h2 className="card-title">LOCAL MOVING</h2>
          </div>
          <p className="card-body">
            Smooth local moves made easy! Our friendly and experienced team
            handles the logistics while you settle in. Stress-free and
            efficient. Trust us with your local move.
          </p>
        </div>
        <div className="card-container">
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
            <h2 className="card-title">LONG-DISTANCE MOVING</h2>
          </div>
          <p className="card-body">
            Relocate with peace of mind! Our experienced team ensures a seamless
            long-distance move. Timely and secure delivery of your belongings.
            Start your new chapter worry-free.
          </p>
        </div>
        <div className="card-container">
          <div className="cardsTextContainer">
            <div className="cardsAccent" />
            <Image
              src={furnitureBlack}
              alt="black furniture assembly icon"
              className="cardsImage"
            />
            <Image
              src={furnitureWhite}
              alt="white furniture assembly icon"
              className="cardsImageHover"
            />
            <h2 className="card-title">FURNITURE ASSEMBLY</h2>
          </div>
          <p className="card-body">
            No more assembly headaches! Our skilled team saves you time and
            effort. Let us handle the nuts and bolts. Enjoy a fully furnished
            space hassle-free. Your furniture, perfectly assembled.
          </p>
        </div>
        <div className="card-container">
          <div className="cardsTextContainer">
            <div className="cardsAccent" />
            <Image
              src={trashBlack}
              alt="black junk removal and hauling icon"
              className="cardsImage"
            />
            <Image
              src={trashWhite}
              alt="white junk removal and hauling icon"
              className="cardsImageHover"
            />
            <h2 className="card-title">JUNK HAULING</h2>
          </div>
          <p className="card-body">
            Clear the clutter effortlessly! Our reliable junk hauling services
            remove unwanted items. We handle the heavy lifting and responsible
            disposal. Say goodbye to clutter and hello to a clean space.
          </p>
        </div>
        <div className="card-container">
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
            <h2 className="card-title">LABOR ONLY MOVING HELP</h2>
          </div>
          <p className="card-body">
            Need a hand with the heavy lifting? Our labor-only moving assistance
            is here to make your relocation a breeze. Our experienced team will
            handle the strenuous tasks, so you don't have to break a sweat.
          </p>
        </div>
        <div className="card-container">
          <div className="cardsTextContainer">
            <div className="cardsAccent" />
            <Image
              src={weightBlack}
              alt="black heavy furniture moving icon"
              className="cardsImage"
            />
            <Image
              src={weightWhite}
              alt="white heavy furniture moving icon"
              className="cardsImageHover"
            />
            <h2 className="card-title">HEAVY FURNITURE MOVING</h2>
          </div>
          <p className="card-body">
            Tackling the challenge of moving bulky and heavy furniture? Our
            heavy furniture moving service has got you covered. Rest easy
            knowing your valuable furniture is in capable hands.
          </p>
        </div>
      </div>
    </div>
  );
}
