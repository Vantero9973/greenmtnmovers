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
      "Columbine feels like home, and when you're just moving across town, you want the process to be quick and painless. Our local movers know the streets and neighborhoods of Columbine, making sure your belongings arrive safely at their destination—whether it's around the block or across town.",
    href: "/local-moving",
    image: truck,
  },
  {
    title: "Long-Distance Moving",
    description:
      "Planning a bigger move? Maybe you're heading to the mountains or moving out of state. We offer long-distance moving services that give you peace of mind every mile of the way. Our team ensures your belongings are protected and transported with care, so you can focus on settling into your new home.",
    href: "/long-distance-moving",
    image: box,
  },
  {
    title: "Furniture Assembly & Disassembly",
    description:
      "That huge dining table? No problem. The intricate bookshelf that took hours to build? We’ve got it handled. Our movers are experts in assembling and disassembling furniture, so you don’t have to stress about a thing.",
    href: "/furniture-assembly",
    image: furniture,
  },
  {
    title: "Junk Hauling & Disposal",
    description:
      "Moving often means leaving behind things you no longer need. We offer junk hauling services to clear out unwanted items before or after your move, making your new space clutter-free from day one.",
    href: "/junk-hauling",
    image: trash,
  },
  {
    title: "Labor Only Moving Help",
    description:
      "Just need an extra set of hands? Our labor-only moving help is perfect for loading and unloading heavy items, packing trucks, or moving things around within your home.",
    image: muscle,
  },
  {
    title: "Specialty Moving for Heavy Furniture",
    description:
      "If you’ve got large, heavy furniture that needs special care, we have the equipment and expertise to move it without damaging your property. Whether it's a grand piano or a heavy massage chair, we’ll ensure it arrives safely.",
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
