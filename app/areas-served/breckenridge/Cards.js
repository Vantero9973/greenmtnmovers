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
      "Whether you’re moving within Breckenridge or to a nearby town, our local moving services are designed to make your transition smooth and hassle-free.",
    href: "/local-moving",
    image: truck,
  },
  {
    title: "Long-Distance Moving",
    description:
      "Planning a move out of state? Our long-distance moving services ensure your belongings arrive safely and on time, no matter where you’re headed.",
    href: "/long-distance-moving",
    image: box,
  },
  {
    title: "Furniture Assembly",
    description:
      "Moving large furniture pieces? We offer assembly and disassembly services to make sure your items are moved securely and set up correctly in your new home.",
    href: "/furniture-assembly",
    image: furniture,
  },
  {
    title: "Junk Hauling",
    description:
      "Need to clear out some space before the move? Our junk hauling services help you declutter, so you only bring what you really need to your new place.",
    href: "/junk-hauling",
    image: trash,
  },
  {
    title: "Labor Only Moving Help",
    description:
      "Sometimes, you just need an extra pair of hands. Our labor-only services provide the manpower you need to load, unload, or rearrange your belongings.",
    image: muscle,
  },
  {
    title: "Heavy Furniture Moving",
    description:
      "Got a piano or a heavy antique? No problem. Our team is equipped to handle heavy furniture moving with care and expertise.",
    image: weight,
  },
];

export default function Cards() {
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
