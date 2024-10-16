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
    title: "Local Moving Services",
    description:
      "Whether you’re moving across town or just down the street, our local moving services are designed to make your move as easy as possible. We handle everything from packing and loading to transportation and unloading, so you can focus on settling into your new home.",
    href: "/local-moving",
    image: truck,
  },
  {
    title: "Long-Distance Moving",
    description:
      "Moving out of Broomfield? No problem. Our long-distance moving services are perfect for those making a bigger move. We’ll take care of every detail, ensuring that your belongings arrive safely at your new destination, no matter how far away it may be.",
    href: "/long-distance-moving",
    image: box,
  },
  {
    title: "Furniture Assembly and Disassembly",
    description:
      "Moving large or complex furniture can be a challenge, but not for us. Our team is skilled in the assembly and disassembly of all types of furniture, ensuring that everything is moved safely and reassembled correctly in your new home.",
    href: "/furniture-assembly",
    image: furniture,
  },
  {
    title: "Junk Hauling and Disposal",
    description:
      "Moving is a great time to declutter. If you have items you no longer need, we can help. Our junk hauling and disposal service will take care of everything, leaving you with a clean, clutter-free space.",
    href: "/junk-hauling",
    image: trash,
  },
  {
    title: "Labor Only Moving Help",
    description:
      "Sometimes, you just need an extra pair of hands. Our labor-only moving help is perfect for those who need assistance with loading, unloading, or rearranging items. We provide the muscle, you provide the direction.",
    image: muscle,
  },
  {
    title: "Heavy Furniture Moving",
    description:
      "Have a piano, safe, or other heavy items? We specialize in moving heavy furniture with care and precision. No item is too big or too bulky for our team to handle.",
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
              placeholder="empty"
              className="h-20 w-20 z-[100] ml-8"
            />
          </div>
          <div className="mt-8">
            <span className="text-lg font-semibold leading-6 text-gray-900">
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
            </span>
            <p className="mt-2 text-[15px] text-gray-600">
              {action.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
