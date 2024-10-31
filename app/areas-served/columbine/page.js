import Image from "next/image";
import Link from "next/link";
import moving from "../../../public/media/stock6.jpg";
import {
  ChevronRightIcon,
  ClockIcon,
  HomeIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import ContactForm from "../../../components/ContactForm";
import BookingProcess from "../../../components/BookingProcess";
import Cards from "./Cards";
import FAQ from "./FAQ";

export const metadata = {
  title:
    "Movers in Columbine CO – Trusted Moving Company for All Your Moving Needs | Columbine Moving Services",
  description:
    "Looking for reliable movers in Columbine, CO? Our expert team offers local and long-distance moving services, furniture assembly, and junk hauling. Contact us for a stress-free move!",
};

const features = [
  {
    name: "Efficiency and Speed",
    description:
      "We’ve been moving homes and businesses for years, so we know how to do it quickly and efficiently. Our team works together like a well-oiled machine, getting the job done fast without cutting corners.",
    icon: ClockIcon,
  },
  {
    name: "Safety of Your Belongings",
    description:
      "Your belongings are more than just items—they're part of your life. We use professional-grade packing materials and careful handling techniques to ensure your valuables arrive in perfect condition.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Peace of Mind",
    description:
      "Moving can feel overwhelming, but when you have Green Mountain Movers on your side, you don’t have to worry. We’ll handle the logistics so you can focus on starting your next chapter.",
    icon: UserGroupIcon,
  },
];

export default function Columbine() {
  return (
    <>
      <div className="flex justify-center items-center py-5 px-5 md:px-10 z-1 relative max-lg:overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <section id="columbine" className="mt-5 sm:mt-10 mb-10">
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
                        href="/areas-served/columbine"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Columbine
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Movers in Columbine CO – Trusted Moving Company for All Your
                Moving Needs | Columbine Moving Services
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
                        Introduction to Columbine Movers
                      </h2>
                    </div>
                  </div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg mt-6">
                    <p>
                      Moving can be one of the most challenging events in life,
                      but it doesn't have to be. Imagine this: you’re standing
                      in your living room, surrounded by boxes, overwhelmed with
                      the thought of getting everything packed and moved safely
                      to your new home. For many, the stress of moving can
                      overshadow the excitement of a fresh start. But at Green
                      Mountain Movers, we’re here to turn that around.
                    </p>
                    <p className="mt-6">
                      We’ve helped countless families and businesses in{" "}
                      <Link
                        href="https://maps.app.goo.gl/Yanu8sSftyhuWULc6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-link"
                      >
                        Columbine, CO
                      </Link>
                      , make that exciting transition—without the headaches.
                      Like Sarah, who was moving her family into their dream
                      bedroom across town. She’d had her share of nightmare
                      moves in the past, but after working with us, her story
                      changed. “Green Mountain Movers took care of everything,”
                      she said. “It felt like they were family, making sure each
                      box was handled with care. My kids were thrilled, and I
                      was finally able to relax!”
                    </p>
                    <p className="mt-6">
                      Whether you’re moving across the street or across the
                      state, we approach every long distance move with the same
                      level of care and professionalism, making sure your
                      belongings arrive safely and on time.{" "}
                      <i>
                        Let us help you enjoy your move and focus on what truly
                        matters—creating new memories in your new space.
                      </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Our Moving Company in Columbine, CO?
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                At Green Mountain Movers, we understand that every Columbine
                moving experience is unique. Whether you’re relocating to a cozy
                home on the quiet streets of Columbine or moving your business
                to a new office, our goal is the same: to provide a seamless,
                stress-free experience. We’re not just moving boxes—we’re moving
                your memories, your treasures, and your future.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-4">
                Our experienced team of movers takes pride in being more than
                just a moving company in Columbine. We see ourselves as partners
                in your journey. With each step of the process, we prioritize
                clear communication, reliability, and care. We don’t just show
                up on moving day—we plan ahead with you, so you know exactly
                what to expect. It's this attention to detail that makes us the
                go-to truck movers in Columbine, CO.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-4">
                We also work with families in the{" "}
                <Link
                  href="https://www.greenmtnmovers.com/areas-served/commerce-city"
                  className="custom-link"
                >
                  Commerce City
                </Link>{" "}
                area.
              </p>
            </div>

            <div className="mt-10 sm:mt-20">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Comprehensive Columbine Moving Services in Colorado
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  <i>No two moves are alike</i>, which is why we offer a full
                  service approach tailored to your needs. Whether it’s a local
                  move down the street or a long-distance relocation across the
                  state, Green Mountain Movers has you covered.
                </p>
                <Cards />
              </div>
            </div>

            <div className="mt-10 sm:mt-14">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Benefits of Hiring Professional Moving Companies in Columbine,
                  CO
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  We get it—moving is no easy task, and you might be wondering
                  if hiring professional moving companies in the area is really
                  worth it. <i>The answer is a resounding yes. Here’s why:</i>
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
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Discover Columbine, CO: A Community We’re Proud to Serve
              </h3>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Nestled in Jefferson County, Columbine, CO, is a charming
                suburban area known for its peaceful atmosphere and tight-knit
                community. Residents enjoy the proximity to Denver while
                benefiting from a quieter lifestyle. With zip codes such as
                80123 and 80128, Columbine offers easy access to both urban and
                outdoor amenities, making it an ideal location for families and
                professionals alike. Whether you're moving into or out of this
                lovely area, Green Mountain Movers is here to ensure your
                transition is smooth and hassle-free.
              </p>
            </div>

            <FAQ />
          </section>
        </div>
      </div>
      <BookingProcess />

      <div className="flex justify-center items-center pb-5 px-5 md:px-10 z-1 relative">
        <div className="mx-auto max-w-7xl">
          <div className="mt-10 sm:mt-20">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How Our Movers in Columbine can Benefit Columbine Residents
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                As locals, we understand the unique needs of Columbine
                residents. The area’s family-oriented vibe means that many
                people are moving in or around the community to be closer to
                good schools, parks, and recreational activities. Whether you're
                relocating for a new job, upgrading to a bigger home, or moving
                closer to the mountains, our{" "}
                <Link
                  href="https://greenmtnmovers.com/areas-served"
                  className="custom-link"
                >
                  Columbine movers
                </Link>{" "}
                know the best routes and can handle all the logistics of your
                move, so you can focus on settling into your new surroundings.
                We take the stress out of moving, making it easy for you to
                enjoy everything this vibrant community has to offer.
              </p>
            </div>
            <h3 className="mt-10 sm:mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Top Attractions in Columbine, CO
            </h3>
            <p className="text-base leading-7 text-gray-700 mt-6">
              Columbine and the surrounding area offer plenty of attractions for
              locals and visitors alike. Here’s a look at some of the top spots
              that make this community special:
            </p>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Columbine Hills Park
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    This beautiful park offers open green spaces, playgrounds,
                    and trails, making it a popular spot for families and
                    outdoor enthusiasts. Whether you're going for a morning jog
                    or a picnic with the family,{" "}
                    <Link
                      href="https://www.ifoothills.org/columbine-hills-park/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Columbine Hills Park
                    </Link>{" "}
                    has something for everyone.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Robert F. Clement Park
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Known for its serene lakeside views, walking paths, and
                    sports facilities,{" "}
                    <Link
                      href="https://maps.app.goo.gl/rsedn3QLRTJSC5Aw6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Robert F. Clement Park
                    </Link>{" "}
                    is a favorite among locals. The park also hosts community
                    events, making it a hub of activity in Columbine.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Columbine Country Club
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Golf enthusiasts can enjoy a round at the prestigious{" "}
                    <Link
                      href="https://www.columbinecc.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Columbine Country Club
                    </Link>
                    , which boasts a championship-level course, as well as
                    dining and social events for members.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Southwest Plaza Mall
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    If you love shopping,{" "}
                    <Link
                      href="https://www.southwestplaza.com/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Southwest Plaza Mall
                    </Link>{" "}
                    is a must-visit. The mall features a wide variety of stores,
                    from popular brands to local boutiques, as well as dining
                    options and entertainment for all ages.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Chatfield State Park
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Just a short drive from Columbine,{" "}
                    <Link
                      href="https://maps.app.goo.gl/UaL8w2fB3nctJi2R6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Chatfield State Park
                    </Link>{" "}
                    is an outdoor paradise offering hiking, boating, camping,
                    and fishing. It's a great spot for nature lovers looking to
                    escape the city and enjoy Colorado's natural beauty.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Historic Littleton Downtown
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    A nearby gem,{" "}
                    <Link
                      href="https://www.downtownlittleton.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Historic Downtown Littleton
                    </Link>{" "}
                    is filled with unique shops, art galleries, and locally
                    owned restaurants. Strolling through its charming streets is
                    a great way to spend an afternoon.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Denver Botanic Gardens Chatfield Farms
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <Link
                      href="https://www.botanicgardens.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Chatfield Farms
                    </Link>{" "}
                    is a 700-acre native plant refuge and working farm, perfect
                    for family outings. Visitors can enjoy seasonal events,
                    beautiful gardens, and historic farm tours.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Denver Art Museum
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    A short trip into the city will bring you to the{" "}
                    <Link
                      href="https://www.denverartmuseum.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Denver Art Museum
                    </Link>
                    , known for its impressive collection of Native American
                    art, modern and contemporary works, and traveling exhibits.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-10 sm:mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Us Today for Reliable Move Services: Free Quote
            </h2>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Ready to make your move stress-free and smooth? Contact Green
              Mountain Movers today for a free, no-obligation quote! Whether
              you’re moving across town or across the state, we’re here to help
              you every step of the way.{" "}
              <i>
                Let us handle the heavy lifting so you can focus on the exciting
                new chapter ahead.
              </i>
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
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Columbine,%20CO&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
