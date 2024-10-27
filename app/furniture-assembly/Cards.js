import { FaCouch, FaTools, FaBoxOpen, FaBed, FaChair } from "react-icons/fa";
import { GiOfficeChair } from "react-icons/gi";

const actions = [
  {
    title: "Residential Furniture Assembly",
    description:
      "From IKEA furniture to custom cabinetry, our team ensures that your home furniture is assembled quickly and correctly. We handle all types of residential furniture assembly, from bed frames and cabinets to complex shelving systems, making sure everything is securely and safely put together.",
    icon: FaCouch,
  },
  {
    title: "Office Furniture Assembly",
    description:
      "Setting up a new office or rearranging your workspace? Our professional furniture assembly services can help streamline the process. We assemble office desks, chairs, shelving units, and more with precision and efficiency, ensuring your office is ready to go with minimal downtime.",
    icon: GiOfficeChair,
  },
  {
    title: "IKEA Furniture Assembly",
    description:
      "IKEA furniture can be notoriously tricky to assemble. Let our skilled team take care of it for you. Whether it’s a new wardrobe, dining table, or bookcase, we specialize in assembling IKEA and other flat-pack furniture so you can avoid the hassle.",
    icon: FaBoxOpen,
  },
  {
    title: "Custom Cabinet Assembly",
    description:
      "Installing custom cabinets in your home or office? Our professional team has the tools and expertise to assemble and secure them with care. We provide meticulous assembly services for all types of cabinets, ensuring your storage solutions are perfectly fitted and functional.",
    icon: FaTools,
  },
  {
    title: "Bed and Frame Assembly",
    description:
      "Need help assembling a new bed frame or bunk bed? Our team can efficiently put together any type of bed, ensuring a sturdy and secure setup. Let us handle the assembly, so you can enjoy your new bedroom setup right away.",
    icon: FaBed,
  },
  {
    title: "Custom Furniture Solutions",
    description:
      "For bespoke or custom-made furniture, we offer tailored assembly services. Our experienced team ensures that each unique piece is expertly put together, giving you peace of mind that your custom furniture is in safe hands.",
    icon: FaChair,
  },
];

export default function FurnitureAssemblyCards() {
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
              className="h-16 w-16 text-zinc-900 z-[1000] ml-8"
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
