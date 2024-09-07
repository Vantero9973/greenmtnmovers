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
      "Moving within Brighton, CO, or the surrounding areas? Our local moving services are designed to get you from point A to point B with ease. We know the area well and can navigate even the trickiest routes.",
    href: "/local-moving",
    image: truck,
  },
  {
    title: "Long-Distance Moving",
    description:
      "Moving out of state? No problem. Our team is experienced in long-distance moves, ensuring your belongings arrive safely and on time, no matter the distance across states.",
    href: "/long-distance",
    image: box,
  },
  {
    title: "Furniture Assembly",
    description:
      "Don’t stress over complicated furniture assembly. Our team can handle it for you, making sure everything is set up exactly the way you want it.",
    href: "/furniture-assembly",
    image: furniture,
  },
  {
    title: "Junk Hauling",
    description:
      "Clearing out clutter before or after your move? We offer junk hauling services to help you get rid of unwanted items, leaving your new space clean and organized.",
    href: "/junk-hauling",
    image: trash,
  },
  {
    title: "Labor Only Moving Help",
    description:
      "Need an extra pair of hands? Our moving labor is perfect for loading, unloading, or any other moving tasks where you need some muscle.",
    image: muscle,
  },
  {
    title: "Heavy Furniture Moving",
    description:
      "Got a piano or other heavy furniture? We have the expertise and equipment to move your heavy items safely, without damage to your belongings or your home.",
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
