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
    title: "Local Residential Moves",
    description:
      "Moving within Centennial, Colorado? Our team knows the local area inside and out, so we can easily navigate your move. We handle everything from carefully packing your belongings to safely transporting them to your new home. Our local moving services are designed to make your transition seamless so you can enjoy your new space immediately.",
    href: "/local-moving",
    image: truck,
  },
  {
    title: "Long-Distance Moves",
    description: (
      <span>
        Relocating to a new state or even across the country? Our long-distance
        moving services are crafted to give you peace of mind. We manage every
        detail, from secure packing and loading to timely delivery at your new
        destination. With our{" "}
        <span className="relative z-[200]">
          <Link
            href="https://greenmtnmovers.com/areas-served"
            className="custom-link z-[200]"
          >
            Centennial Movers
          </Link>
        </span>
        , you can trust that your belongings are in expert hands, no matter the
        distance.
      </span>
    ),
    href: "/long-distance-moving",
    image: box,
  },
  {
    title: "Furniture Assembly and Disassembly",
    description:
      "Furniture assembly can be one of the most time-consuming parts of a move. Our expert team is here to take that burden off your shoulders. We handle the disassembly of your furniture before the move and ensure everything is correctly reassembled in your new home. From complex bed frames to delicate dining sets, we treat every piece with the utmost care.",
    href: "/furniture-assembly",
    image: furniture,
  },
  {
    title: "Junk Hauling and Decluttering",
    description:
      "Moving is the perfect time to declutter. Our professional junk hauling service helps you get rid of unwanted items before or after your move, so you can start fresh in your new space. We handle everything from old furniture to general clutter, making your move lighter and more organized.",
    href: "/junk-hauling",
    image: trash,
  },
  {
    title: "Labor Only Moving Help",
    description:
      "Sometimes you just need a helping hand. Our labor-only moving help is perfect for situations where you need extra muscle to load or unload your truck, rearrange furniture, or tackle other heavy lifting tasks. Our team is strong, efficient, and ready to assist with whatever you need.",
    image: muscle,
  },
  {
    title: "Heavy Item Moving",
    description:
      "Got a piano, safe, or other heavy items? Our heavy furniture moving services are designed to handle the toughest jobs. We use specialized equipment and techniques to move your heavy and valuable items safely, ensuring they arrive at your new home without a scratch.",
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
