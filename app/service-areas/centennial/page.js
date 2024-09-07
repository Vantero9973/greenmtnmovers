import Image from "next/image";
import Link from "next/link";
import moving from "../../../public/media/moving-6.jpg";
import moving3 from "../../../public/media/moving-8.jpg";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  HomeIcon,
  MapPinIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import ContactForm from "../../../components/ContactForm";
import BookingProcess from "../../../components/BookingProcess";
import Cards from "./Cards";
import FAQ from "./FAQ";
import Navbar from "../../../components/Navbar";

export const metadata = {
  title:
    "Movers in Centennial CO – Your Trusted Moving Company for Top-Rated Moving Services in Centennial",
  description:
    "Looking for reliable movers in Centennial, CO? Our professional and experienced moving team offers comprehensive services tailored to your needs. Get a free quote today and experience a stress-free move!",
};

const features = [
  {
    name: "Top-Rated and Dependable",
    description:
      "Our reputation speaks for itself. We've earned top ratings from our customers by consistently delivering on our promises.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Comprehensive Moving Services",
    description:
      "Whether it's a local or long-distance move, we've got the expertise and services to meet your needs.",
    icon: MapPinIcon,
  },
  {
    name: "Fully Licensed and Professional",
    description:
      "Rest easy knowing your move is in the hands of licensed professionals who prioritize your satisfaction.",
    icon: ShieldCheckIcon,
  },
];

const featuresTwo = [
  {
    name: "Professionalism and Experience",
    description:
      "With years of experience under our belt, our centennial movers are trained to handle every situation with professionalism and care. We know that each move is unique, and we approach every job with the attention it deserves.",
    icon: AcademicCapIcon,
  },
  {
    name: "Affordability and Transparency",
    description:
      "Moving can be expensive, but it doesn’t have to break the bank. We offer competitive pricing with no hidden fees, so you know exactly what to expect from the start.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Customer-Centric Approach",
    description:
      "We put our customers first. From the initial consultation to the final delivery, our focus is on making your move as smooth as possible.",
    icon: UserGroupIcon,
  },
];

export default function Centennial() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center py-5 px-5 md:px-10 z-1 relative max-lg:overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <section id="centennial" className="mt-5 sm:mt-10 mb-10">
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
                        href="/service-areas"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Service Areas
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
                        href="/service-areas/centennial"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Centennial
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Movers in Centennial CO – Your Trusted Moving Company for
                Top-Rated Moving Services in Centennial
              </h1>
            </div>

            <div className="mx-auto grid grid-cols-1 gap-x-8 lg:mx-0 lg:grid-cols-2 lg:items-start mt-10 sm:mt-20">
              <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <Image
                  alt="movers"
                  src={moving3}
                  placeholder="blur"
                  className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                />
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
                <div className="lg:pr-4">
                  <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Introduction to Centennial Movers
                      </h2>
                    </div>
                  </div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg mt-6">
                    <p>
                      Moving can feel like stepping into the unknown—a mix of
                      excitement and anxiety as you prepare to leave behind the
                      familiar and embrace a new chapter. At Green Mountain
                      Movers, we understand that every move is more than just a
                      change of address; it's a significant life event. That's
                      why we're here to make your transition as smooth and
                      stress-free as possible.
                    </p>
                    <p className="mt-6">
                      As your trusted movers in{" "}
                      <Link
                        href="https://maps.app.goo.gl/CLSQ4QQK7XK8jJu39"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-link"
                      >
                        Centennial, CO
                      </Link>
                      , we bring years of experience, a deep understanding of
                      the community, and a commitment to treating every move
                      with the care and professionalism it deserves. Whether
                      you're relocating within Centennial or moving across state
                      lines, our team is dedicated to ensuring your belongings
                      arrive safely and on time. With Green Mountain Movers by
                      your side, you can focus on the excitement of your new
                      journey while we handle the heavy lifting.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-14">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Why Choose Our Movers in Centennial, Colorado?
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  Choosing the right mover is about more than just getting from
                  point A to point B—it's about peace of mind.{" "}
                  <i>
                    Here’s why Colorado residents continue to choose Green
                    Mountain Movers:
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
                  Comprehensive Moving Services
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  At Green Mountain Movers, we offer a full suite of moving
                  services in Centennial, CO designed to meet all your needs.
                  Our comprehensive approach ensures that every aspect of your
                  move is handled with care and professionalism. Whether you're
                  moving locally or across the country, our residential movers
                  are tailored to provide you with a stress-free experience.
                </p>
                <p className="mt-4 leading-6 text-gray-600">
                  Local Centennial residents benefit from our deep knowledge of
                  the area, ensuring that we can navigate your move with ease.
                  We also provide moving supplies and other essentials to make
                  your move as smooth as possible. Whether you’re handling a
                  small apartment or a large family home, our team is prepared
                  to assist with everything from packing to heavy item moves.
                </p>
                <p className="mt-4 leading-6 text-gray-600">
                  <i>Moving is the perfect time to declutter</i>, and our
                  services moving include professional junk hauling to help you
                  start fresh in your new space. We’ve also gathered some
                  essential tips to make your move more efficient and
                  stress-free.
                </p>
                <Cards />
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  What Sets Our Company Apart from Other Moving Companies?
                </h3>
                <p className="mt-4 leading-6 text-gray-600">
                  At Green Mountain Movers, we’re not just another moving
                  company—we're a part of your community. Here’s what makes us
                  stand out:
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

            <FAQ />

            <div className="mt-10 sm:mt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Top Rated, Dependable, and Affordable Movers Centennial CO – The
                Best Centennial Moving Company
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                When you choose Green Mountain Movers, you're not just hiring a
                moving company; you're partnering with a centennial moving
                company that's earned a reputation for being top-rated and
                dependable. Our customers consistently praise us for delivering
                exceptional service at an affordable price. We believe that
                everyone deserves a stress-free move, which is why we offer
                competitive pricing without compromising on quality.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-4">
                Our trustful approach means we treat your belongings as if they
                were our own, ensuring they arrive at your new home in the same
                condition they left. It's this dedication to excellence that has
                earned us the trust of Centennial moving companies and a long
                list of glowing reviews.{" "}
                <i>
                  We're here to turn your relocation into a seamless experience
                </i>{" "}
                so you can focus on settling into your new space.
              </p>
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
                How Local Residents Benefit from Our Moving Service
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Living in Centennial means enjoying all the perks of suburban
                life while being close to the bustling city of Denver. Whether
                you're a growing family looking to upgrade to a larger home or a
                professional relocating for work, our moving services cater to
                the unique needs of Centennial residents. Our deep understanding
                of the area allows us to navigate its neighborhoods with ease,
                ensuring a smooth and efficient move.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                With Green Mountain Movers, you'll experience the convenience of
                local services expertise combined with the care and
                professionalism that makes every move seamless. Whether you're
                moving within Centennial or to a new state, we’re here to handle
                the heavy lifting, so you can focus on settling into your new
                home.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                We also work with families in the{" "}
                <Link
                  href="https://greenmtnmovers.com/service-areas/colorado-springs"
                  className="custom-link"
                >
                  Colorado Springs
                </Link>{" "}
                area.
              </p>
            </div>
            <h4 className="mt-10 sm:mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Top Attractions in Centennial, CO
            </h4>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Centennial Center Park
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <Link
                      href="https://maps.app.goo.gl/oApPqafBsvED1n759"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Centennial Center Park
                    </Link>{" "}
                    is a community favorite, offering 11 acres of open space,
                    playgrounds, and a splash pad. It's the perfect spot for
                    family outings, picnics, and community events.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    The Streets at SouthGlenn
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    The{" "}
                    <Link
                      href="https://maps.app.goo.gl/EfoKFGVnGf2Z7ZLb7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Streets at SouthGlenn
                    </Link>{" "}
                    is a premier shopping and dining destination in Centennial.
                    With a mix of national retailers, local boutiques, and a
                    variety of restaurants, it’s the go-to spot for shopping and
                    entertainment.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Cherry Creek State Park
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Just a short drive from Centennial,{" "}
                    <Link
                      href="https://maps.app.goo.gl/UrrsDrGAf12K2YRv6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Cherry Creek State Park
                    </Link>{" "}
                    offers a natural oasis with 4,000 acres of open space,
                    trails, and a large reservoir for boating and fishing. It’s
                    a haven for outdoor enthusiasts and a great escape from the
                    city.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Centennial Civic Center
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    The{" "}
                    <Link
                      href="https://www.centennialco.gov/Home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Centennial Civic Center
                    </Link>{" "}
                    is the heart of the city’s government and a hub for
                    community activities. This modern facility hosts public
                    meetings, cultural events, and more, making it a cornerstone
                    of the community.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Centennial Gun Club
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    The{" "}
                    <Link
                      href="https://centennialgunclub.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Centennial Gun Club
                    </Link>{" "}
                    is a state-of-the-art indoor shooting range and training
                    facility, catering to both novices and experienced shooters.
                    It's a top destination for those interested in firearms
                    safety and practice.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Highlands Ranch Mansion
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    While technically just outside Centennial, the{" "}
                    <Link
                      href="https://highlandsranchmansion.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Highlands Ranch Mansion
                    </Link>{" "}
                    is a historical site worth visiting. This stunning estate
                    offers tours, special events, and a glimpse into Colorado’s
                    past.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-10 sm:mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Our Moving Company in Centennial Today!
            </h2>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Ready to make your move? Contact Green Mountain Movers today for a
              free moving quote and let us show you why we’re the trusted choice
              for movers in Centennial, CO. Whether you're moving across town or
              across the country, our team is here to make the process as smooth
              and stress-free as possible. Don’t wait—get in touch with us today
              and start your journey with confidence!
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
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Centennial,%20CO&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
