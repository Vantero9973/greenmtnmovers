import Image from "next/image";
import bl from "../public/media/review1.png";
import av from "../public/media/review2.png";
import ek from "../public/media/review3.png";
import lg from "../public/media/review4.png";
import ss from "../public/media/review5.png";
import sm from "../public/media/review6.png";
import jh from "../public/media/review7.png";
import rb from "../public/media/review8.png";
import kd from "../public/media/review9.png";
import es from "../public/media/review10.png";
import mp from "../public/media/review11.png";

const testimonials = [
  [
    [
      {
        body: "Green Mountain Movers did an incredible job unloading our moving truck at the end of a cross country drive. We had a weather delay on the drive and they were very accommodating with our schedule. They took great care of our belongings and made our moving day stress free. Couldn't recommend this company more!",
        author: {
          name: "Blake Lattier",
          imageUrl: bl,
        },
      },
      {
        body: "Aaron and his team were fantastic! Got us moved in two hours and made sure everything went where we needed it. Highly recommend!!!",
        author: {
          name: "Samantha Miller",
          imageUrl: sm,
        },
      },
      {
        body: "I have worked with Green Mountain movers several times. Always very punctual and prepared with the proper equipment to ensure that everything is moved safely with out damage or injury. Too notch company!",
        author: {
          name: "Ross Baldwin",
          imageUrl: rb,
        },
      },
    ],
    [
      {
        body: "Green Mountain Movers were great to work with — communicative, professional, punctual, helpful, and got the job done quickly and perfectly. Would use them again in a heartbeat.",
        author: {
          name: "Eileen Kiernan-Johnson",
          imageUrl: ek,
        },
      },
      {
        body: "Aaron was SO professional and did such a great job communicating with me and the other parties involved with this furniture move. Very trustworthy and hardworking! Would recommend to anyone!",
        author: {
          name: "Megan Peters",
          imageUrl: mp,
        },
      },
    ],
  ],
  [
    [
      {
        body: "Professional, timely, friendly. Aaron has the equipment to get the job done. Moved us with nothing lost or broken. Definitely recommend them and would use them again",
        author: {
          name: "Lisa Georgetown",
          imageUrl: lg,
        },
      },
      {
        body: "Very efficient, took care of our things and moved everything out and in with precision and care for the property and belongings. They are the guys. They rock. 😎🤘🏼",
        author: {
          name: "Ella Solberg",
          imageUrl: es,
        },
      },
    ],
    [
      {
        body: "My experience with Green Mountain Movers was phenomenal. They came prepared and were efficient, professional, detail oriented, careful and respectful. They took the stress out of my moving day. 10/10 recommend.",
        author: {
          name: "Sophia M. Shanley",
          imageUrl: ss,
        },
      },
      {
        body: "Super professional, communication is on par!! Had everything needed overall. All equipment and supplies needed!! Wonderful experience !!! Would highly recommend, Green Mountain Movers !!",
        author: {
          name: "Jason Hancock",
          imageUrl: jh,
        },
      },
      {
        body: "Green Mountain Movers is the best moving company I've ever used! They arrived on time and got everything packed and loaded up quickly. They even went above and beyond to help me assemble and rearrange furniture in my new home. Highly recommended!",
        author: {
          name: "Alex Van Vleet",
          imageUrl: av,
        },
      },
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-white to-[#0e5933]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 lg:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-white to-[#0e5933] lg:ml-0 lg:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#0e5933]">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We have worked with thousands of amazing people
          </p>
        </div>
        <div className="mx-auto mt-16 grid grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-flow-col lg:grid-cols-4">
          <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 lg:col-start-2 lg:row-end-1">
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
              <p>
                "Love these guys. I have hired them multiple times throughout
                the last 2-3 years. They do a great job moving me from place to
                place. They take all necessary precautions to prevent dings and
                scratches while moving. Super affordable, quick, professional
                and very personable. I 100% will only hire them for any moving
                or furniture deliveries. I definitely recommend them!"
              </p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <Image
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src={kd}
                placeholder="blur"
                alt="Featured Review User Profile"
              />
              <div className="flex flex-col justify-center">
                <div className="font-semibold text-md">Kai Davis</div>
                <div className="text-gray-700 text-sm">
                  <span className="font-semibold">Positive:</span>{" "}
                  Professionalism, Quality, Responsiveness, Value
                </div>
              </div>
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 lg:contents lg:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "lg:row-span-2"
                      : "lg:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <Image
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src={testimonial.author.imageUrl}
                          alt=""
                          placeholder="blur"
                        />
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// import Image from "next/image";
// import google_reviews from "../public/media/google_reviews.png";
// import Reviews from "./Reviews";
// import CarouselComponent from "./CarouselComponent";

// export default function Testimonials() {
//   return (
//     <div className="flex flex-col justify-center items-center">
//       <div
//         className="reviewsContainer max-w-screen-xl px-5 md:px-10 pt-20 pb-10"
//         id="reviews"
//       >
//         <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
//           <h1 className="reviewsTitleDesktop">
//             <span
//               className="flex flex-wrap gap-x-2.5 text-[32px] font-bold w-full"
//               data-aos="fade-up"
//               data-aos-once="true"
//               data-aos-easing="ease-in-out"
//               data-aos-duration="1000"
//             >
//               Read Our
//               <span style={{ position: "relative", zIndex: "1" }}>
//                 <p className="underline">Awesome</p>
//               </span>
//               Reviews
//             </span>
//           </h1>
//           <h1 className="reviewsTitleMobile">
//             <div className="reviewsTitle">
//               Read Our
//               <span style={{ position: "relative", zIndex: "1" }}>
//                 <p className="underline">Awesome</p>
//               </span>
//               Reviews
//             </div>
//           </h1>
//           <h2 className="testimonialsBody">
//             Discover what our customers have to say about their moving
//             experiences with us. Our reviews and testimonials section showcases
//             honest feedback from satisfied clients who have used our moving
//             services. We take pride in offering top-quality, reliable, and
//             personalized moving solutions to meet your specific needs
//           </h2>
//         </div>
//         <div className="reviewsDesktop">
//           <Reviews />
//         </div>
//         <div className="reviewsMobile">
//           <CarouselComponent />
//         </div>
//         <a
//           href="https://www.google.com/maps/place/Green+Mountain+Movers/@39.6577034,-105.448454,9.81z/data=!4m8!3m7!1s0xa9d50c0a7bbc9c15:0x2227dd3fdd89cee0!8m2!3d39.3801284!4d-105.984378!9m1!1b1!16s%2Fg%2F11s5g2ckvt"
//           target="_blank"
//           rel="noreferrer"
//           className="z-index"
//           style={{ width: "fit-content" }}
//         >
//           <button className="reviewsButton">
//             Read All
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
//               alt="google logo"
//               style={{ height: "25px", width: "25px" }}
//             />
//             Reviews
//           </button>
//         </a>
//       </div>
//       <div className="flex flex-col items-center gap-[1vh] py-10 px-5 md:px-10">
//         <p
//           style={{
//             textAlign: "center",
//             fontSize: "clamp(16px, 1.5vw, 20px)",
//           }}
//         >
//           WE WOULD LOVE TO HEAR FROM YOU.
//           <br />
//           TAP HERE TO LEAVE US A REVIEW ON GOOGLE!
//         </p>
//         <Image
//           src={google_reviews}
//           alt="google reviews icon"
//           style={{ width: "300px" }}
//         />
//         <a
//           href="https://g.page/r/CeDOid0_3SciEBM/review"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <button className="headerButton">Leave a Review</button>
//         </a>
//       </div>
//     </div>
//   );
// }
