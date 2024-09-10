import Image from "next/image";
import Link from "next/link";
import truck from "../../../public/media/truck_black.png";
import trash from "../../../public/media/trash_black.png";
import weight from "../../../public/media/weight_black.png";
import furniture from "../../../public/media/furniture_black.png";
import box from "../../../public/media/box_black.png";
import muscle from "../../../public/media/muscle_black.png";

const actions = [
  {
    title: "Local Moves",
    description:
      "Expertise in navigating the streets of Arvada and surrounding areas.",
    href: "/local-moving",
    image: truck,
  },
  {
    title: "Long-Distance Moves",
    description: "Specialized handling for moves across state lines.",
    href: "/long-distance-moving",
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
