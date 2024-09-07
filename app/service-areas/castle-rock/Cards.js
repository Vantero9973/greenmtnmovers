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
      "Moving within Castle Rock? Our local moving services are designed to get you settled into your new home quickly and efficiently. We handle everything from packing to unloading, so you can focus on making your new house feel like home.",
    href: "/local-moving",
    image: truck,
  },
  {
    title: "Long-Distance Relocation Services",
    description:
      "Planning a move across the state or even across the country? Our long-distance moving services provide you with peace of mind during this major transition. We coordinate every detail, from packing and loading to transportation and delivery, ensuring that your belongings arrive safely and on time.",
    href: "/long-distance",
    image: box,
  },
  {
    title: "Furniture Assembly",
    description:
      "We know that moving doesn’t end with getting your boxes into your new home. That’s why we offer furniture assembly services to help you get set up quickly. Whether it’s a complex bed frame or a simple dining table, our team has the tools and expertise to get the job done right.",
    href: "/furniture-assembly",
    image: furniture,
  },
  {
    title: "Junk Hauling",
    description:
      "Decluttering before a move can be overwhelming, but we’re here to help. Our junk hauling services make it easy to dispose of unwanted items, ensuring that your new home is free from clutter from day one.",
    href: "/junk-hauling",
    image: trash,
  },
  {
    title: "Labor Only Moving Help",
    description:
      "Sometimes, you just need an extra pair of hands—or two, or three. Our labor-only moving help is perfect for those who need assistance with the heavy lifting but prefer to handle the packing and transportation themselves. We’re here to provide the muscle you need to get the job done.",
    image: muscle,
  },
  {
    title: "Heavy Furniture Moving",
    description:
      "Got a piano, a pool table, or other heavy items? We’ve got the expertise to move even the heaviest and most delicate pieces with care. Our castle rock moving company team is trained in handling bulky furniture, ensuring that it’s moved safely and without damage.",
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
