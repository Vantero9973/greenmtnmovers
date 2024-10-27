import {
  FaTrashAlt,
  FaRecycle,
  FaTruckLoading,
  FaWarehouse,
} from "react-icons/fa";
import { GiHouseKeys, GiOfficeChair } from "react-icons/gi";

const actions = [
  {
    title: "Residential Junk Removal",
    description:
      "We offer professional junk hauling services for residential properties. Whether you’re cleaning out your garage, decluttering your home, or getting rid of old appliances and furniture, our team ensures quick and eco-friendly removal of your unwanted items.",
    icon: GiHouseKeys,
  },
  {
    title: "Commercial Junk Removal",
    description:
      "Our commercial junk removal services are designed to help businesses clear out old office furniture, equipment, and debris. We work efficiently to ensure your business operations are not disrupted while we handle the cleanup and hauling.",
    icon: GiOfficeChair,
  },
  {
    title: "Eco-Friendly Disposal",
    description:
      "We prioritize eco-friendly disposal by recycling and donating as much of the junk as possible. Our team sorts through your unwanted items, ensuring that reusable materials go to the right place, reducing the environmental impact of your junk removal.",
    icon: FaRecycle,
  },
  {
    title: "Construction Debris Removal",
    description:
      "Clearing up construction sites can be a hassle, but our construction debris removal services handle it all. From wood scraps to drywall, we ensure safe and efficient hauling, so you can focus on finishing your project.",
    icon: FaTruckLoading,
  },
  {
    title: "Storage Unit Cleanouts",
    description:
      "Have an old storage unit full of unwanted items? We offer complete storage unit cleanouts, making it easy for you to clear out space and dispose of what you no longer need. Our team handles the heavy lifting and disposal.",
    icon: FaWarehouse,
  },
  {
    title: "Appliance and Furniture Disposal",
    description:
      "Large, bulky items like old appliances and furniture can be difficult to remove on your own. Our junk hauling service specializes in the safe and efficient disposal of these items, ensuring they are properly recycled or disposed of.",
    icon: FaTrashAlt,
  },
];

export default function JunkHaulingCards() {
  return (
    <div className="divide-y divide-gray-200 rounded-lg sm:grid sm:grid-cols-3 gap-6 sm:divide-y-0 mt-10">
      {actions.map((action) => (
        <div
          key={action.title}
          className="group relative bg-white p-6 ring-1 ring-inset ring-zinc-100 shadow-xl sm:transition-transform sm:transform sm:hover:scale-105 sm:duration-300 sm:ease-in-out rounded-lg"
        >
          <div className="flex items-center">
            <div className="bg-[rgba(14,89,51,0.6)] h-20 w-20 rounded-full absolute transition ease-in-out duration-500" />
            <action.icon
              className="h-16 w-16 text-zinc-900 z-[100] ml-8"
              aria-hidden="true"
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
