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
      "Castle Pines is a beautiful community, and we’re proud to be the local Castle Pines movers who know the area inside and out. Our local moving service is perfect for those looking to move within Castle Pines or nearby areas.",
    href: "/local-moving",
    image: truck,
  },
  {
    title: "Long-Distance Moving",
    description:
      "Planning a move beyond Castle Pines? No problem. Our long-distance moving services are designed to ensure that your belongings are transported safely and securely, no matter the distance. We take extra precautions to protect your items during transit, giving you peace of mind throughout the entire process.",
    href: "/long-distance-moving",
    image: box,
  },
  {
    title: "Furniture Assembly and Disassembly",
    description:
      "One of the most time-consuming aspects of moving can be dealing with furniture. That’s why we offer professional furniture assembly and disassembly services. Our team has the skills and tools to handle everything from beds to complex furniture pieces, making your move as smooth and hassle-free as possible.",
    href: "/furniture-assembly",
    image: furniture,
  },
  {
    title: "Junk Hauling and Disposal",
    description:
      "Moving is the perfect time to declutter, and our junk hauling service makes it easy to get rid of items you no longer need. We’ll handle the heavy lifting and disposal, so you can focus on what’s most important—starting fresh in your new home.",
    href: "/junk-hauling",
    image: trash,
  },
  {
    title: "Labor Only Moving Help",
    description:
      "Sometimes, you just need an extra pair of hands (or two). Our labor-only moving help is ideal for those who need assistance with loading, unloading, or rearranging furniture. We’re here to provide the muscle, so you don’t have to worry about the heavy lifting.",
    image: muscle,
  },
  {
    title: "Heavy Furniture Moving",
    description:
      "Some items require a little extra care and expertise to move, especially heavy or bulky furniture. Our team is experienced in handling and moving heavy items, ensuring that they’re transported safely and efficiently.",
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
