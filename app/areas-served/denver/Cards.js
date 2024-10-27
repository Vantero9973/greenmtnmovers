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
    title: "Local Movers in Denver Area",
    description:
      "Moving across town? We’ve got you covered. Our local movers are perfect for those short-distance moves where you still want professional care. As locals, we know the neighborhoods, the shortcuts, and how to navigate even the busiest streets. Whether you’re moving from a downtown apartment or a suburban house, we handle every detail so you can focus on settling into your new place.",
    href: "/local-moving",
    image: truck,
  },
  {
    title: "Long Distance Denver Movers in Colorado",
    description:
      "Planning a move beyond the city limits? Long-distance moving can feel daunting, but with Green Mountain Movers, it doesn’t have to be. We provide custom moving solutions that ensure your belongings arrive safely, no matter the distance. From the moment we pack up your items to the second we deliver them to your new home, we keep you informed and reassured every step of the way. It’s like having a trusted friend on the road with you.",
    href: "/long-distance-moving",
    image: box,
  },
  {
    title: "Furniture Assembly and Disassembly",
    description:
      "Worried about how to move that heavy bookshelf or dining room table? Our team handles all the assembly and disassembly, so you don’t have to lift a finger. Whether it’s a complicated bed frame or a bulky office desk, we ensure your furniture is safely taken apart, transported, and reassembled at your new location without a scratch.",
    href: "/furniture-assembly",
    image: furniture,
  },
  {
    title: "Junk Hauling Mover Services",
    description:
      "Moving often means discovering things you no longer need. Instead of stressing about how to get rid of them, let us handle it for you. We offer junk hauling services to clear out unwanted items before or after your move. From old furniture to household clutter, we’ll ensure your space is clean and clutter-free.",
    href: "/junk-hauling",
    image: trash,
  },
  {
    title: "Labor-Only Movers Denver Residents Trust",
    description:
      "If you’ve got a truck but need some muscle, our labor-only moving service is perfect for you. We provide the expertise and manpower to load or unload your vehicle, ensuring everything is packed securely and efficiently. This flexible option allows you to get the professional help you need without the full-service commitment.",
    image: muscle,
  },
  {
    title: "Heavy Furniture Moving in Denver CO",
    description:
      "Got something that seems impossible to move? No worries! Our experienced movers specialize in handling heavy and awkward items like pianos, safes, and large furniture. We’ve got the tools, techniques, and strength to move your heaviest belongings safely and securely.",
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
