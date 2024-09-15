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
    title: "Local Residential Moving",
    description: (
      <div>
        <p>
          Moving within Colorado Springs may seem straightforward, but we know
          that even a local move can come with its own challenges. Whether
          you're relocating from a bustling downtown apartment or a quiet
          suburban home, our local moving services are designed to take the
          stress off your shoulders. We focus on efficiency without sacrificing
          care, ensuring your belongings are packed, transported, and delivered
          with precision. You can trust our team to handle everything from
          navigating narrow streets to carrying heavy furniture up multiple
          flights of stairs, making sure your items arrive safely in your new
          home.
        </p>
        <p className="mt-4">
          With Green Mountain Movers, a local move doesn’t have to feel like a
          big ordeal. We plan ahead, account for traffic, and make sure we’re
          working on your schedule, so you can settle into your new place
          without any delays.
        </p>
      </div>
    ),
    href: "/local-moving",
    image: truck,
  },
  {
    title: "Long-Distance Moving",
    description: (
      <div>
        <p>
          Moving out of state or across the country is a big undertaking, but
          with our long-distance moving services, it doesn’t have to be
          overwhelming. From the initial planning stages to the final delivery,
          we’ll be with you every step of the way. Long-distance moves require
          careful coordination, and our team excels at creating detailed moving
          plans tailored to your timeline and specific requirements.
        </p>
        <p className="mt-4">
          We take extra care to protect your belongings for the long haul, using
          high-quality packing materials and secure loading techniques. Whether
          you’re moving to the next state or across the country, our drivers are
          experienced in long-distance routes and make sure that everything
          arrives in perfect condition. When you choose Green Mountain Movers
          for your long-distance move, you can rest easy knowing that your
          possessions are in safe, capable hands.
        </p>
      </div>
    ),
    href: "/long-distance-moving",
    image: box,
  },
  {
    title: "Furniture Assembly Services",
    description: (
      <div>
        <p>
          Furniture assembly can be one of the most time-consuming and
          frustrating parts of any move. Fortunately, you don’t have to tackle
          it on your own. Our team is skilled in disassembling and reassembling
          all types of furniture, from bed frames to office desks and even
          complex pieces like entertainment centers. Whether you need help with
          a heavy dining table or intricate shelving units, we’ve got the tools
          and expertise to get the job done efficiently.
        </p>
        <p className="mt-4">
          We carefully label and organize each part during disassembly to ensure
          a smooth reassembly process at your new home. Our goal is to have your
          furniture set up quickly so you can start enjoying your space as soon
          as possible. Save yourself the headache of trying to figure out which
          screw goes where—let us handle it for you.
        </p>
      </div>
    ),
    href: "/furniture-assembly",
    image: furniture,
  },
  {
    title: "Junk Hauling Services",
    description: (
      <div>
        <p>
          Moving is the perfect opportunity to declutter and get rid of items
          you no longer need. Over the years, it's easy to accumulate things
          that don’t serve a purpose anymore, and rather than moving them to
          your new home, you can take advantage of our junk hauling services.
          We’ll help you clear out unwanted furniture, appliances, and
          miscellaneous items, leaving your old home clean and clutter-free.
        </p>
        <p className="mt-4">
          Our team handles everything, from loading up the truck to responsibly
          disposing of your junk. Whether it’s donating reusable items or
          ensuring proper disposal of broken or outdated electronics, you can
          trust us to do it in an eco-friendly way. By the time you reach your
          new home, you’ll have a fresh start without the burden of unnecessary
          clutter.
        </p>
      </div>
    ),
    href: "/junk-hauling",
    image: trash,
  },
  {
    title: "Labor Only Moving Help",
    description: (
      <div>
        <p>
          Sometimes you don’t need a full-service move, but rather just a
          helping hand. That’s where our labor-only moving services come in.
          Whether you need help loading or unloading a truck, rearranging heavy
          furniture within your home, or organizing a storage unit, our team is
          ready to provide the muscle and expertise. This flexible service is
          ideal for those who are handling a DIY move but want the peace of mind
          that comes with professional assistance.
        </p>
        <p className="mt-4">
          Our movers are trained to lift heavy items safely and efficiently, so
          you don’t have to worry about straining yourself or damaging your
          belongings. We’ll bring the manpower, and you can take it easy knowing
          everything is handled with care.
        </p>
      </div>
    ),
    image: muscle,
  },
  {
    title: "Heavy Furniture Moving",
    description: (
      <div>
        <p>
          Large, bulky items like pianos, pool tables, or massive sectional
          couches can be a real challenge to move. But with our heavy furniture
          moving service, you don’t have to worry about how to get these items
          out the door and into your new home. We have the specialized equipment
          and techniques to safely move your heaviest pieces without causing
          damage to your furniture or your home.
        </p>
        <p className="mt-4">
          Whether it’s navigating narrow hallways or maneuvering up tight
          staircases, our team has the expertise to move large furniture without
          a hitch. You can trust that even your most valuable and
          difficult-to-move items will arrive in perfect condition at your new
          location.
        </p>
      </div>
    ),
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
              placeholder="blur"
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
