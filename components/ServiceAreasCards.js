import Image from "next/image";
import Link from "next/link";
import truck from "../public/media/truck_black.png";
import trash from "../public/media/trash_black.png";
import weight from "../public/media/weight_black.png";
import furniture from "../public/media/furniture_black.png";
import box from "../public/media/box_black.png";
import muscle from "../public/media/muscle_black.png";

const actions = [
  {
    title: "Local Moves",
    description: "Expertise in navigating streets and neighborhoods with ease.",
    href: "/local-moving",
    image: truck,
  },
  {
    title: "Long-Distance Moves",
    description: "Specialized handling for moves across state lines.",
    href: "/long-distance",
    image: box,
  },
  {
    title: "Residential Moves",
    description: "Careful packing and transport of household items.",
    image: furniture,
  },
  {
    title: "Commercial Moves",
    description: "Efficient relocation of office equipment and furniture.",
    image: muscle,
  },
  {
    title: "Packing and Unpacking Services",
    description:
      "Professional packing to ensure the safety of your belongings.",
    image: trash,
  },
  {
    title: "Specialty Item Handling",
    description:
      "Expertise in moving pianos, artwork, and other delicate items.",
    image: weight,
  },
];

export default function ServiceAreasCards() {
  return (
    <div className="divide-y divide-gray-200 rounded-lg sm:grid sm:grid-cols-3 gap-6 sm:divide-y-0 mt-10">
      {actions.map((action) => (
        <div
          key={action.title}
          className="group relative bg-white p-6 ring-1 ring-inset ring-zinc-100 shadow-xl sm:transition-transform sm:transform sm:hover:scale-105 sm:duration-300 sm:ease-in-out rounded-lg"
        >
          <div>
            <div className="bg-[rgba(14,89,51,0.6)] h-20 w-20 rounded-full absolute transition ease-in-out duration-500" />
            <Image
              src={action.image}
              alt="black local moving truck icon"
              placeholder="empty"
              className="h-20 w-20 z-[100] ml-8"
            />
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold leading-6 text-gray-900">
              {action.href ? (
                <Link href={action.href} className="focus:outline-none">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {action.title}
                </Link>
              ) : (
                <div className="focus:outline-none">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {action.title}
                </div>
              )}
            </h3>
            <p className="mt-2 text-[15px] text-gray-600">
              {action.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// import Image from "next/image";
// import truckBlack from "../public/media/truck_black.png";
// import boxBlack from "../public/media/box_black.png";
// import furnitureBlack from "../public/media/furniture_black.png";
// import trashBlack from "../public/media/trash_black.png";
// import muscleBlack from "../public/media/muscle_black.png";
// import weightBlack from "../public/media/weight_black.png";

// export default function ServiceAreasCards() {
//   return (
//     <div className="py-5 md:pt-5 md:pb-10">
//       <div className="cards">
//         <div className="card-container">
//           <div className="cardsTextContainer">
//             <div className="cardsAccent" />
//             <Image
//               src={truckBlack}
//               alt="black local moving truck icon"
//               className="cardsImage"
//             />
//             <h2 className="card-title">LOCAL MOVING</h2>
//           </div>
//           <p className="card-body">
//             Smooth local moves made easy! Our friendly and experienced team
//             handles the logistics while you settle in. Stress-free and
//             efficient. Trust us with your local move.
//           </p>
//         </div>
//         <div className="card-container">
//           <div className="cardsTextContainer">
//             <div className="cardsAccent" />
//             <Image
//               src={boxBlack}
//               alt="black moving box long distance moving icon"
//               className="cardsImage"
//             />
//             <h2 className="card-title">LONG-DISTANCE MOVING</h2>
//           </div>
//           <p className="card-body">
//             Relocate with peace of mind! Our experienced team ensures a seamless
//             long-distance move. Timely and secure delivery of your belongings.
//             Start your new chapter worry-free.
//           </p>
//         </div>
//         <div className="card-container">
//           <div className="cardsTextContainer">
//             <div className="cardsAccent" />
//             <Image
//               src={furnitureBlack}
//               alt="black furniture assembly icon"
//               className="cardsImage"
//             />
//             <h2 className="card-title">FURNITURE ASSEMBLY</h2>
//           </div>
//           <p className="card-body">
//             No more assembly headaches! Our skilled team saves you time and
//             effort. Let us handle the nuts and bolts. Enjoy a fully furnished
//             space hassle-free. Your furniture, perfectly assembled.
//           </p>
//         </div>
//         <div className="card-container">
//           <div className="cardsTextContainer">
//             <div className="cardsAccent" />
//             <Image
//               src={trashBlack}
//               alt="black junk removal and hauling icon"
//               className="cardsImage"
//             />
//             <h2 className="card-title">JUNK HAULING</h2>
//           </div>
//           <p className="card-body">
//             Clear the clutter effortlessly! Our reliable junk hauling services
//             remove unwanted items. We handle the heavy lifting and responsible
//             disposal. Say goodbye to clutter and hello to a clean space.
//           </p>
//         </div>
//         <div className="card-container">
//           <div className="cardsTextContainer">
//             <div className="cardsAccent" />
//             <Image
//               src={muscleBlack}
//               alt="black labor only moving help icon"
//               className="cardsImage"
//             />
//             <h2 className="card-title">LABOR ONLY MOVING HELP</h2>
//           </div>
//           <p className="card-body">
//             Need a hand with the heavy lifting? Our labor-only moving assistance
//             is here to make your relocation a breeze. Our experienced team will
//             handle the strenuous tasks, so you don't have to break a sweat.
//           </p>
//         </div>
//         <div className="card-container">
//           <div className="cardsTextContainer">
//             <div className="cardsAccent" />
//             <Image
//               src={weightBlack}
//               alt="black heavy furniture moving icon"
//               className="cardsImage"
//             />
//             <h2 className="card-title">HEAVY FURNITURE MOVING</h2>
//           </div>
//           <p className="card-body">
//             Tackling the challenge of moving bulky and heavy furniture? Our
//             heavy furniture moving service has got you covered. Rest easy
//             knowing your valuable furniture is in capable hands.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
