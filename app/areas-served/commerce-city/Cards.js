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
      "Whether you're relocating within Commerce City or nearby areas, we provide fast and reliable local moving services. Our team knows the area inside and out, ensuring a smooth and timely move.",
    href: "/local-moving",
    image: truck,
  },
  {
    title: "Long-Distance Movers in Commerce City",
    description:
      "Planning a move out of the area? Our distance movers will ensure your belongings arrive safely, no matter how far you're going. As experienced interstate movers, we have the knowledge and equipment to handle long-distance relocations with ease.",
    href: "/long-distance-moving",
    image: box,
  },
  {
    title: "Furniture Assembly and Disassembly",
    description:
      "Large furniture pieces can be tricky to move. Our movers commerce team is skilled in disassembling and reassembling furniture, ensuring safe and efficient transport.",
    href: "/furniture-assembly",
    image: furniture,
  },
  {
    title: "Junk Hauling",
    description:
      "Need to declutter before your move? Our junk hauling service makes it easy to get rid of unwanted items, so you can start fresh in your new space.",
    href: "/junk-hauling",
    image: trash,
  },
  {
    title: "Labor-Only Moving Help",
    description:
      "Already have a truck but need help with the heavy lifting? We offer labor-only services to assist with loading and unloading, so you don’t have to worry about the heavy work.",
    image: muscle,
  },
  {
    title: "Heavy Furniture Moving",
    description:
      "From pianos to oversized furniture, our team has the expertise and equipment to move heavy items safely and securely, preventing damage to your belongings or property.",
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
              alt={`${action.title} icon`}
              placeholder="empty"
              className="h-20 w-20 z-[100] ml-8"
            />
          </div>
          <div className="mt-8">
            <span className="text-lg font-semibold leading-6 text-gray-900">
              {action.href ? (
                <Link href={action.href} className="focus:outline-none">
                  <span aria-hidden="true" className="absolute inset-0" />
                  <h3>{action.title}</h3>
                </Link>
              ) : (
                <div className="focus:outline-none">
                  <span aria-hidden="true" className="absolute inset-0" />
                  <h3>{action.title}</h3>
                </div>
              )}
            </span>
            <div className="mt-2 text-[15px] text-gray-600">
              {action.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
