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
    title: "Local Movers in Eagle-Vail Area",
    description:
      "Planning a move within Eagle or Vail? Our local movers know the area well and bring professional expertise to short-distance moves. Whether you’re moving from a cozy mountain cabin or a spacious suburban home, we handle all the logistics so you can focus on enjoying your new space.",
    href: "/local-moving-eagle-vail",
    image: truck,
  },
  {
    title: "Long Distance Movers Serving Eagle and Vail, Colorado",
    description:
      "Thinking of relocating beyond Eagle or Vail? Long-distance moving can be overwhelming, but with Green Mountain Movers, it’s stress-free. From packing to delivering, we offer customized solutions for every step, making sure your belongings arrive safely no matter the distance.",
    href: "/long-distance-moving-eagle-vail",
    image: box,
  },
  {
    title: "Furniture Assembly and Disassembly Services",
    description:
      "Need help with that heavy dresser or complex bed frame? Our team manages all furniture assembly and disassembly so you don’t have to. From careful disassembly to secure transport and reassembly, we handle each piece with precision and care.",
    href: "/furniture-assembly-eagle-vail",
    image: furniture,
  },
  {
    title: "Junk Removal Services for Eagle and Vail",
    description:
      "Moving is often the perfect time to clear out unwanted items. Our junk removal services ensure you don’t have to worry about disposal—just let us handle it. We remove everything from old furniture to clutter, giving you a fresh start in your new home.",
    href: "/junk-removal-eagle-vail",
    image: trash,
  },
  {
    title: "Labor-Only Movers for Eagle and Vail Residents",
    description:
      "Have a truck but need some help loading or unloading? Our labor-only moving service offers the muscle and expertise without the full-service cost. Let us take care of the heavy lifting, whether you need help loading or unloading.",
    image: muscle,
  },
  {
    title: "Heavy Item Moving Services in Eagle-Vail",
    description:
      "Got a grand piano or a massive safe that needs moving? Our experienced movers specialize in handling heavy, challenging items with ease. Equipped with the right tools and techniques, we ensure your large items are moved safely.",
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
