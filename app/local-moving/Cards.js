import Image from "next/image";
import Link from "next/link";
import truck from "../../public/media/truck_black.png";
import box from "../../public/media/box_black.png";
import office from "../../public/media/office-black.png";
import apartment from "../../public/media/apartment-black.png";
import muscle from "../../public/media/muscle_black.png";
import delivery from "../../public/media/delivery-black.png";

const actions = [
  {
    title: "Residential Moving Services",
    description:
      "Moving your household within Colorado is a significant event, and we're here to ensure it's a smooth transition. Our professional movers not only handle your belongings with care but also assist in planning every aspect of your move. From packing fragile items to safely transporting your furniture across Colorado's scenic routes, we make sure your local move is hassle-free and memorable.",
    image: truck,
  },
  {
    title: "Local Apartment Moving Services",
    description:
      "Apartment moving in Colorado can be an adventure, especially in urban areas like Denver, where elevators, stairs, and narrow hallways are common. Our specialized apartment movers are skilled at maneuvering through these challenges efficiently. We provide the necessary equipment, including dollies, furniture sliders, and lifting straps, to ensure a smooth apartment move.",
    image: apartment,
  },
  {
    title: "Local Office Moving Services",
    description:
      "Office relocations in Colorado require precision and efficiency to minimize downtime for your business. Green Mountain Movers is your partner in ensuring a successful office move. Our experienced team works closely with your organization to create a tailored moving plan that accommodates your schedule and minimizes disruption. With Green Mountain Movers, you can focus on your business while we take care of your office move in Colorado.",
    image: office,
  },
  {
    title: "Local Packing Services",
    description: (
      <span>
        Proper packing is the foundation of a successful move in Colorado. Our
        professional packers are experts in protecting your belongings. We
        provide high-quality{" "}
        <Link
          href="https://www.nytimes.com/wirecutter/reviews/make-moving-less-miserable/"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link w-fit"
        >
          packing materials
        </Link>
        , including sturdy boxes, shrink wrap, bubble wrap, and packing tape, to
        ensure everything is secure during transport. Our meticulous approach
        includes labeling and organizing boxes, making unpacking a breeze.
      </span>
    ),
    image: box,
  },
  {
    title: "Local Labor Only Moving Help",
    description:
      "Need an extra set of hands for your move in Colorado? Our local labor-only moving services are here to help. Our skilled and experienced team can assist with loading and unloading rental trucks, containers, and more. You can trust Green Mountain Movers to handle your items with care, making your move a stress-free experience.",
    image: muscle,
  },
  {
    title: "Local Delivery services",
    description:
      "For smaller moves in Colorado, such as studio apartments or just a few items, our local delivery services offer a cost-effective solution. We ensure the safe and efficient transport of your belongings. Our delivery services in Colorado are designed for your convenience. You can trust Green Mountain Movers to handle your items with care.",
    image: delivery,
  },
];

export default function LocalMovingCards() {
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
              placeholder="empty"
              alt="black local moving truck icon"
              className="h-20 w-20 z-[100] ml-8"
            />
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-semibold leading-6 text-gray-900">
              <div className="focus:outline-none">
                <span aria-hidden="true" className="absolute inset-0" />
                {action.title}
              </div>
            </h2>
            <p className="mt-2 text-[15px] text-gray-600">
              {action.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
