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
    title: "Local Moving",
    description:
      "Our local moving services are designed to make your in-town move as seamless as possible. We handle everything from packing and loading to unloading and unpacking, so you don't have to lift a finger.",
    href: "/local-moving",
    image: truck,
  },
  {
    title: "Long-Distance Moving",
    description:
      "Moving far from Berkley? Our long-distance moving services provide the same level of care and professionalism, ensuring your belongings arrive safely at your new home, no matter the distance.",
    href: "/long-distance",
    image: box,
  },
  {
    title: "Furniture Assembly",
    description:
      "Need help assembling or disassembling furniture? Our expert team can handle it, making your move even more convenient.",
    image: furniture,
  },
  {
    title: "Junk Hauling",
    description:
      "Clearing out the clutter before your move? We offer efficient junk hauling Berkley local services to dispose of unwanted items responsibly.",
    image: trash,
  },
  {
    title: "Labor Only Moving Help",
    description:
      "If you only need a helping hand, our labor-only moving services provide the skilled assistance required for loading, unloading, and other labor-intensive tasks.",
    image: muscle,
  },
  {
    title: "Heavy Furniture Moving",
    description:
      "Berkley moving heavy furniture can be a daunting task. Our team is trained to handle bulky items with care, ensuring they are moved safely and securely.",
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
