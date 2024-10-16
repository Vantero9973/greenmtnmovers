import Image from "next/image";
import truck from "../../public/media/truck_black.png";
import box from "../../public/media/box_black.png";
import office from "../../public/media/office-black.png";
import apartment from "../../public/media/apartment-black.png";
import muscle from "../../public/media/muscle_black.png";
import delivery from "../../public/media/delivery-black.png";

const actions = [
  {
    title: "Long Distance Household Moving Services",
    description:
      "Moving your household across the country is a significant undertaking, and we're here to ensure it's a smooth transition. Our professional movers not only handle your belongings with care but also assist in planning every aspect of your move. From packing your cherished possessions to safely transporting your furniture and valuables across state lines, we make sure your long distance move is hassle-free and memorable.",
    image: truck,
  },
  {
    title: "Long Distance Apartment Moving Services",
    description:
      "Apartment moving across state lines can be a complex process, especially when dealing with different regulations and logistics. Our specialized apartment movers are skilled at navigating these challenges efficiently. We provide the necessary equipment, including dollies, furniture sliders, and lifting straps, to ensure a smooth apartment move regardless of the distance.",
    image: apartment,
  },
  {
    title: "Long Distance Office Moving Services",
    description:
      "Office relocations across state lines require precision and efficiency to minimize downtime for your business. Green Mountain Movers is your partner in ensuring a successful office move. Our experienced team works closely with your organization to create a tailored moving plan that accommodates your schedule and minimizes disruption. With Green Mountain Movers, you can focus on your business while we take care of your office move across the United States.",
    image: office,
  },
  {
    title: "Packing Services",
    description:
      "Proper packing is the foundation of a successful long distance move. Our professional packers are experts in protecting your belongings. We provide high-quality packing materials, including sturdy boxes, shrink wrap, bubble wrap, and packing tape, to ensure everything is secure during transport. Our meticulous approach includes labeling and organizing boxes, making unpacking a breeze.",
    image: box,
  },
  {
    title: "Labor Only Moving Help",
    description:
      "Need an extra set of hands for your long distance move? Our local labor-only moving services are here to help. Our skilled and experienced team can assist with loading and unloading rental trucks, containers, and more. You can trust Green Mountain Movers to handle your items with care, making your long distance move a stress-free experience.",
    image: muscle,
  },
  {
    title: "Long Distance Delivery services",
    description:
      "For smaller long-distance moves, such as shipping items to a different state, our delivery services offer a cost-effective solution. We ensure the safe and efficient transport of your belongings. Our delivery services are designed for your convenience and peace of mind. You can trust Green Mountain Movers to handle your items with care during the entire journey.",
    image: delivery,
  },
];

export default function LongDistanceMovingCards() {
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
