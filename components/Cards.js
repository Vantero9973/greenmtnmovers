import Image from "next/image";
import Link from "next/link";
import truck from "../public/media/truck_black.png";
import trash from "../public/media/trash_black.png";
import furniture from "../public/media/furniture_black.png";
import box from "../public/media/box_black.png";

const actions = [
  {
    title: "LOCAL MOVING",
    description:
      "Smooth local moves made easy! Our friendly and experienced team handles the logistics while you settle in. Stress-free and efficient. Trust us with your local move.",
    href: "/local-moving",
    image: truck,
  },
  {
    title: "LONG-DISTANCE MOVING",
    description:
      "Relocate with peace of mind! Our experienced team ensures a seamless long-distance move. Timely and secure delivery of your belongings. Start your new chapter worry-free.",
    href: "/long-distance-moving",
    image: box,
  },
  {
    title: "FURNITURE ASSEMBLY",
    description:
      "No more assembly headaches! Our skilled team saves you time and effort. Let us handle the nuts and bolts. Enjoy a fully furnished space hassle-free. Your furniture, perfectly assembled.",
    href: "/furniture-assembly",
    image: furniture,
  },
  {
    title: "JUNK HAULING",
    description:
      "Clear the clutter effortlessly! Our reliable junk hauling services remove unwanted items. We handle the heavy lifting and responsible disposal. Say goodbye to clutter and hello to a clean space.",
    href: "/junk-hauling",
    image: trash,
  },
];

export default function Cards() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-10">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#0e5933]">
          Moving Services
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Trusted by countless clients for smooth and reliable moves
        </p>
      </div>
      <div className="divide-y divide-gray-200 rounded-lg sm:grid sm:grid-cols-4 gap-6 sm:divide-y-0 mt-16">
        {actions.map((action) => (
          <div
            key={action.title}
            className="group relative bg-white p-6 ring-1 ring-inset ring-zinc-100 shadow-xl sm:transition-transform sm:transform sm:hover:scale-105 sm:duration-300 sm:ease-in-out rounded-lg"
          >
            <div>
              <div className="bg-[rgba(14,89,51,0.6)] h-20 w-20 rounded-full absolute transition ease-in-out duration-500" />
              <Image
                src={action.image}
                placeholder="blur"
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
    </div>
  );
}
