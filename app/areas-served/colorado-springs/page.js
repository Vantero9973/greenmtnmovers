import Image from "next/image";
import Link from "next/link";
import moving from "../../../public/media/moving-7.jpg";
import {
  CalendarIcon,
  ChevronRightIcon,
  ClockIcon,
  HomeIcon,
  MapIcon,
  ShieldCheckIcon,
  StarIcon,
  TagIcon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import ContactForm from "../../../components/ContactForm";
import BookingProcess from "../../../components/BookingProcess";
import Cards from "./Cards";
import FAQ from "./FAQ";

export const metadata = {
  title:
    "Movers in Colorado Springs CO – Reliable Moving Company & Professional Moving Services",
  description:
    "Looking for reliable movers in Colorado Springs CO? Our professional team offers local and long-distance moving services, furniture assembly, and more. Get a free quote today!",
};

const features = [
  {
    name: "Efficient & Reliable Moving Services",
    description:
      "We respect your time. Our team is known for prompt arrivals and completing moves within the estimated time frame, so you can plan your day without any surprises.",
    icon: ClockIcon,
  },
  {
    name: "Experienced and Fully Licensed",
    description:
      "With years of experience, our Colorado Springs movers are licensed, insured, and ready to handle your local or long-distance move.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Friendly and Professional Staff",
    description:
      "Moving can be stressful, but our team brings a positive, can-do attitude that helps make the process as stress-free as possible.",
    icon: UserGroupIcon,
  },
];

const featuresTwo = [
  {
    name: "Start Packing Early",
    description:
      "Give yourself at least 6-8 weeks to pack before your moving day. Starting early allows you to pack thoughtfully and avoid last-minute chaos.",
    icon: CalendarIcon,
  },
  {
    name: "Choose the Right Moving Day",
    description:
      "Mid-week moves often have less traffic and are easier to schedule. If possible, avoid weekends and the end of the month, which are typically busier.",
    icon: TruckIcon,
  },
  {
    name: "Label Everything",
    description:
      "Labeling your boxes with both contents and the room they belong to can save hours of unpacking frustration.",
    icon: TagIcon,
  },
];

const featuresThree = [
  {
    name: "Proven Track Record",
    description:
      "We take pride in the glowing reviews we receive from satisfied customers, many of whom return to us for multiple moves over the years.",
    icon: StarIcon,
  },
  {
    name: "Local Knowledge",
    description:
      "Moving in Colorado Springs isn’t just about transporting items—it’s about understanding the community. We know the neighborhoods, the shortcuts, and the best ways to ensure your move goes off without a hitch.",
    icon: MapIcon,
  },
];

export default function ColoradoSprings() {
  return (
    <>
      <div className="flex justify-center items-center py-5 px-5 md:px-10 z-1 relative max-lg:overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <section id="colorado-springs" className="mt-5 sm:mt-10 mb-10">
            <div className="mx-auto max-w-4xl lg:mx-0">
              <nav aria-label="Breadcrumb" className="flex">
                <ol className="flex items-center space-x-4">
                  <li>
                    <div>
                      <Link
                        href="/"
                        className="text-gray-500 hover:text-gray-600"
                      >
                        <HomeIcon
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0"
                        />
                        <span className="sr-only">Home</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <ChevronRightIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-shrink-0 text-gray-500"
                      />
                      <Link
                        href="/areas-served"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Areas Served
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <ChevronRightIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-shrink-0 text-gray-500"
                      />
                      <Link
                        href="/areas-served/colorado-springs"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Colorado Springs
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Movers in Colorado Springs CO – Reliable Moving Company &
                Professional Moving Services
              </h1>
            </div>

            <div className="mx-auto grid grid-cols-1 gap-x-8 lg:mx-0 lg:grid-cols-2 lg:items-start mt-10 sm:mt-20">
              <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <Image
                  alt="movers"
                  src={moving}
                  placeholder="blur"
                  className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                />
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
                <div className="lg:pr-4">
                  <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Introduction to Colorado Springs Movers
                      </h2>
                    </div>
                  </div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg mt-6">
                    <p>
                      At Green Mountain Movers, we understand that moving is
                      more than just transporting boxes from one place to
                      another. It’s about new beginnings and letting go of old
                      spaces that have held years of memories. Whether it’s
                      packing up your childhood home or relocating your
                      business, each move is unique, filled with its own mix of
                      excitement and stress. We’ve been there—many of our team
                      members have experienced challenging moves themselves,
                      which is why we’re so committed to making your move as
                      smooth and seamless as possible.
                    </p>
                    <p className="mt-6">
                      Think of us as your moving partners, ready to lift not
                      only your belongings but also the weight of the process
                      off your shoulders. Whether it’s navigating{" "}
                      <Link
                        href="https://maps.app.goo.gl/DaiFNe21MhXULks19"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-link"
                      >
                        Colorado Springs, CO
                      </Link>{" "}
                      busy streets or carefully packing fragile items, we treat
                      your move as if it were our own. From the very first call,
                      we listen to your needs, tailoring our services to make
                      sure every detail is covered.
                    </p>
                    <p className="mt-6">
                      Our goal? To turn what can often feel like chaos into a
                      well-organized journey to your new home.{" "}
                      <i>
                        With Green Mountain Movers, you don’t just get a moving
                        service—you get peace of mind.
                      </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-14">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Why Choose Our Moving Company in Colorado Springs, CO?
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  When it comes to selecting a moving service, trust and
                  reliability are everything. Our{" "}
                  <Link
                    href="https://www.greenmtnmovers.com/areas-served"
                    className="custom-link"
                  >
                    Colorado Springs movers
                  </Link>{" "}
                  have built a reputation in the local community as one of the
                  top moving companies in the region. We specialize in both
                  residential moving and business relocations, ensuring that
                  every client’s experience is smooth and hassle-free. As a
                  leading moving company in Colorado Springs, our team is known
                  for its attention to detail and customer-first approach,
                  making us the preferred mover for countless families and
                  businesses.
                </p>
                <p className="mt-4 leading-6 text-gray-600">
                  <i>
                    Here’s why locals in Colorado Springs trust us with their
                    most important moves:
                  </i>
                </p>
              </div>
              <div className="mt-6">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.name} className="flex flex-col">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                        <feature.icon
                          aria-hidden="true"
                          className="h-5 w-5 flex-none text-[#0e5933]/90"
                        />
                        {feature.name}
                      </dt>
                      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                        <p className="flex-auto">{feature.description}</p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Comprehensive Moving Services in Colorado Springs
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  At Green Mountain Movers, we know that no two moves are alike,
                  which is why we offer a wide range of services to meet your
                  specific needs. Our team is prepared to handle everything from
                  local moves to long-distance relocations with the same level
                  of care, professionalism, and attention to detail. Here’s a
                  closer look at how each of our services can make your move as
                  seamless as possible.
                </p>
                <Cards />
              </div>
            </div>

            <FAQ />

            <div className="mt-10 sm:mt-14">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Moving Tips for a Stress-Free Experience From Trusted Colorado
                  Springs Movers
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  Moving can feel overwhelming, but with a bit of preparation,
                  the process can be much smoother. Here are a few tips from our
                  team to help you stay organized and stress-free:
                </p>
              </div>
              <div className="mt-6">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
                  {featuresTwo.map((feature) => (
                    <div key={feature.name} className="flex flex-col">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                        <feature.icon
                          aria-hidden="true"
                          className="h-5 w-5 flex-none text-[#0e5933]/90"
                        />
                        {feature.name}
                      </dt>
                      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                        <p className="flex-auto">{feature.description}</p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>
        </div>
      </div>
      <BookingProcess />

      <div className="flex justify-center items-center pb-5 px-5 md:px-10 z-1 relative">
        <div className="mx-auto max-w-7xl">
          <div className="mt-10 sm:mt-20">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Colorado Springs Locals Trust Our Mover Team
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                We’re more than just movers—we’re your neighbors, too. As a
                local business, we know Colorado Springs inside and out, and
                that local knowledge allows us to deliver more efficient,
                personalized service. Whether it’s navigating tricky traffic
                patterns or knowing the best places to grab a bite after a long
                day of moving, we’ve got you covered.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                <i>Our customers consistently recommend us for our:</i>
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {featuresThree.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-[#0e5933]"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-base leading-7 text-gray-700 mt-6">
                We also work with families in the{" "}
                <Link
                  href="https://greenmtnmovers.com/areas-served/columbine"
                  className="custom-link"
                >
                  Columbine
                </Link>{" "}
                area.
              </p>
            </div>
            <h3 className="mt-10 sm:mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Moving in Colorado Springs, CO – A City with Scenic Beauty and
              Rich History
            </h3>
            <p className="text-base leading-7 text-gray-700 mt-6">
              Colorado Springs is a city that thrives on both its close-knit
              community and the transient nature of military families and
              outdoor enthusiasts. Whether you’re a local homeowner upgrading to
              a bigger house or a service member relocating to or from one of
              the military bases, our moving services offer the reliability and
              efficiency you need.
            </p>
            <p className="text-base leading-7 text-gray-700 mt-6">
              Whether you're a new resident or a longtime local, Colorado
              Springs is packed with exciting places to explore.{" "}
              <i>
                Here’s a list of some must-visit attractions that make this city
                such a vibrant place to live.
              </i>
            </p>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Garden of the Gods
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    This stunning public park is famous for its towering red
                    rock formations, making it a favorite spot for hiking, rock
                    climbing, and photography. The park is free to the public
                    and offers scenic trails with views of{" "}
                    <Link
                      href="https://gardenofgods.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Garden of the Gods
                    </Link>
                    .
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    United States Air Force Academy
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    One of the top military institutions in the nation, the U.S.
                    Air Force Academy is not only a hub of education but also an
                    architectural marvel. The Cadet Chapel is a must-see, and
                    visitors can tour the grounds at the{" "}
                    <Link
                      href="https://www.usafa.af.mil/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      United States Air Force Academy
                    </Link>
                    .
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Cheyenne Mountain Zoo
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Known for being the highest zoo in the country, the Cheyenne
                    Mountain Zoo offers unique experiences like feeding giraffes
                    and taking in stunning views of Colorado Springs from its
                    mountainside location. Enjoy a family-friendly day at the{" "}
                    <Link
                      href="https://www.cmzoo.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Cheyenne Mountain Zoo
                    </Link>
                    .
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    The Broadmoor
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    This luxurious resort has been a Colorado Springs staple for
                    over 100 years. With world-class golf, spa services, and
                    fine dining,{" "}
                    <Link
                      href="https://www.broadmoor.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      The Broadmoor
                    </Link>{" "}
                    is a destination for relaxation and luxury.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Old Colorado City
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    A historic district just west of downtown,{" "}
                    <Link
                      href="https://www.shopoldcoloradocity.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Old Colorado City
                    </Link>{" "}
                    offers charming boutiques, art galleries, and restaurants.
                    The area dates back to the 1800s and maintains much of its
                    Old West charm.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Manitou Springs
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Nestled at the base of Pikes Peak,{" "}
                    <Link
                      href="https://manitousprings.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Manitou Springs
                    </Link>{" "}
                    is known for its mineral springs and eclectic shops. It’s a
                    popular destination for both tourists and locals looking to
                    enjoy the artsy vibe and stunning natural surroundings.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Colorado Springs Pioneers Museum
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Dive into the history of the Pikes Peak region at the{" "}
                    <Link
                      href="https://www.cspm.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Colorado Springs Pioneers Museum
                    </Link>{" "}
                    located in the heart of downtown. From Native American
                    artifacts to exhibits on the city’s founding, the museum
                    offers a fascinating glimpse into the past.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Seven Falls
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Just minutes from The Broadmoor,{" "}
                    <Link
                      href="https://maps.app.goo.gl/V4o19ErdtC8k4kGF7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Seven Falls
                    </Link>{" "}
                    is a series of seven cascading waterfalls that are a natural
                    wonder. Visitors can hike, take a tram, or even zip-line
                    across the scenic canyon.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Red Rock Canyon Open Space
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Often considered the local’s version of{" "}
                    <Link
                      href="https://maps.app.goo.gl/pswKKT9Aku9BfSq1A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Red Rock Canyon Open Space
                    </Link>
                    , it offers beautiful red rock formations, hiking trails,
                    and picnic areas. It’s a quieter alternative for those
                    looking to enjoy Colorado’s natural beauty.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-10 sm:mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Request and Schedule Your Move with the Best Movers in Colorado
              Springs CO Today!
            </h2>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Moving can be stressful, but getting started doesn’t have to be.
              Whether you’re planning a residential moving project or looking to
              relocate your business, Green Mountain Movers offers a free quote
              to help you plan your move with confidence. Reach out to us today
              to discuss your moving needs and find out how we can assist with
              your relocation.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="w-full">
        <iframe
          width="100%"
          height="400"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Colorado%20Springs,%20CO&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
