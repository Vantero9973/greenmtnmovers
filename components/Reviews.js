"use client";
import Image from "next/image";
import review1 from "../public/media/review1.png";
import review2 from "../public/media/review2.png";
import review3 from "../public/media/review3.png";
import review4 from "../public/media/review4.png";
import review5 from "../public/media/review5.png";
import review6 from "../public/media/review6.png";
import review7 from "../public/media/review7.png";
import review8 from "../public/media/review8.png";
import review9 from "../public/media/review9.png";
import Masonry from "react-masonry-css";
import stars from "../public/media/google_stars.png";

export default function Reviews() {
  const breakpointColumnsObj = {
    default: 3,
    1000: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
      id="parent"
    >
      <div className="reviewsDiv">
        <div className="reviewsSecondaryContainer">
          <Image
            src={review1}
            alt="google user profile"
            className="reviewsProfileImage"
          />
          <div>
            <p>Blake Lattier</p>
            <Image src={stars} alt="five star review" className="stars" />
          </div>
        </div>
        <p className="reviewBody">
          Green Mountain Movers did an incredible job unloading our moving truck
          at the end of a cross country drive. We had a weather delay on the
          drive and they were very accommodating with our schedule. They took
          great care of our belongings and made our moving day stress free.
          Couldn't recommend this company more!
        </p>
      </div>
      <div className="reviewsDiv">
        <div className="reviewsSecondaryContainer">
          <Image
            src={review2}
            alt="google user profile"
            className="reviewsProfileImage"
          />
          <div>
            <p>Alex Van Vleet</p>
            <Image src={stars} alt="five star review" className="stars" />
          </div>
        </div>
        <p className="reviewBody">
          Green Mountain Movers is the best moving company I've ever used! They
          arrived on time and got everything packed and loaded up quickly. They
          even went above and beyond to help me assemble and rearrange furniture
          in my new home. Highly recommended!
        </p>
      </div>
      <div className="reviewsDiv">
        <div className="reviewsSecondaryContainer">
          <Image
            src={review3}
            alt="google user profile"
            className="reviewsProfileImage"
          />
          <div>
            <p>Eileen Kiernan-Johnson</p>
            <Image src={stars} alt="five star review" className="stars" />
          </div>
        </div>
        <p className="reviewBody">
          Green Mountain Movers were great to work with — communicative,
          professional, punctual, helpful, and got the job done quickly and
          perfectly. Would use them again in a heartbeat.
        </p>
      </div>
      <div className="reviewsDiv">
        <div className="reviewsSecondaryContainer">
          <Image
            src={review4}
            alt="google user profile"
            className="reviewsProfileImage"
          />
          <div>
            <p>Lisa Georgetown</p>
            <Image src={stars} alt="five star review" className="stars" />
          </div>
        </div>
        <p className="reviewBody">
          Professional, timely, friendly. Aaron has the equipment to get the job
          done. Moved us with nothing lost or broken. Definitely recommend them
          and would use them again
        </p>
      </div>
      <div className="reviewsDiv">
        <div className="reviewsSecondaryContainer">
          <Image
            src={review5}
            alt="google user profile"
            className="reviewsProfileImage"
          />
          <div>
            <p>Sophia M. Shanley</p>
            <Image src={stars} alt="five star review" className="stars" />
          </div>
        </div>
        <p className="reviewBody">
          My experience with Green Mountain Movers was phenomenal. They came
          prepared and were efficient, professional, detail oriented, careful
          and respectful. They took the stress out of my moving day. 10/10
          recommend.
        </p>
      </div>
      <div className="reviewsDiv">
        <div className="reviewsSecondaryContainer">
          <Image
            src={review6}
            alt="google user profile"
            className="reviewsProfileImage"
          />
          <div>
            <p>Samantha Miller</p>
            <Image src={stars} alt="five star review" className="stars" />
          </div>
        </div>
        <p className="reviewBody">
          Aaron and his team were fantastic! Got us moved in two hours and made
          sure everything went where we needed it. Highly recommend!!!
        </p>
      </div>
      <div className="reviewsDiv">
        <div className="reviewsSecondaryContainer">
          <Image
            src={review7}
            alt="google user profile"
            className="reviewsProfileImage"
          />
          <div>
            <p>Jason Hancock</p>
            <Image src={stars} alt="five star review" className="stars" />
          </div>
        </div>
        <p className="reviewBody">
          Super professional, communication is on par!! Had everything needed
          overall. All equipment and supplies needed!! Wonderful experience !!!
          Would highly recommend, Green Mountain Movers !!
        </p>
      </div>
      <div className="reviewsDiv">
        <div className="reviewsSecondaryContainer">
          <Image
            src={review8}
            alt="google user profile"
            className="reviewsProfileImage"
          />
          <div>
            <p>Ross Baldwin</p>
            <Image src={stars} alt="five star review" className="stars" />
          </div>
        </div>
        <p className="reviewBody">
          I have worked with Green Mountain movers several times. Always very
          punctual and prepared with the proper equipment to ensure that
          everything is moved safely with out damage or injury. Too notch
          company!
        </p>
      </div>
      <div className="reviewsDiv">
        <div className="reviewsSecondaryContainer">
          <Image
            src={review9}
            alt="google user profile"
            className="reviewsProfileImage"
          />
          <div>
            <p>Kai Davis</p>
            <Image src={stars} alt="five star review" className="stars" />
          </div>
        </div>
        <p className="reviewBody">
          Love these guys. I have hired them multiple times throughout the last
          2-3 years. They do a great job moving me from place to place. They
          take all necessary precautions to prevent dings and scratches while
          moving. Super affordable, quick, professional and very personable. I
          100% will only hire them for any moving or furniture deliveries. I
          definitely recommend them!
        </p>
      </div>
    </Masonry>
  );
}
