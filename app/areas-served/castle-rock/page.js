import Image from "next/image";
import Link from "next/link";
import moving from "../../../public/media/stock3.jpg";
import {
  AcademicCapIcon,
  ChevronRightIcon,
  HeartIcon,
  HomeIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";
import ContactForm from "../../../components/ContactForm";
import BookingProcess from "../../../components/BookingProcess";
import Cards from "./Cards";
import FAQ from "./FAQ";
import Navbar from "../../../components/Navbar";

export const metadata = {
  title:
    "Movers in Castle Rock CO - Your Trusted Mover and Moving Company for Comprehensive Moving Services in Colorado",
  description:
    "Looking for reliable movers in Castle Rock, CO? Our expert team offers comprehensive local and long-distance moving services. Get a free quote today and enjoy a stress-free move!",
};

const features = [
  {
    name: "Expertise and Experience",
    description:
      "With years of experience under our belts, we’ve encountered just about every moving challenge you can imagine. From navigating narrow staircases to carefully packing fragile heirlooms, our team is trained to handle it all. Our movers are experts in their field, known for their precision and attention to detail. We treat your belongings as if they were our own, ensuring everything arrives safely and on time.",
    icon: AcademicCapIcon,
  },
  {
    name: "Local and Long-Distance Moves",
    description:
      "Whether you’re moving within Castle Rock or venturing to a new city, our services are tailored to meet your specific needs. Local moves benefit from our deep knowledge of the area, allowing us to navigate the quickest routes and avoid potential delays. For long-distance moves, we offer comprehensive planning and coordination to ensure that your belongings are in good hands every step of the way.",
    icon: MapPinIcon,
  },
  {
    name: "Customer Satisfaction",
    description:
      "Our customers are at the heart of everything we do. We’ve had the pleasure of helping countless families and businesses move to new locations, and their satisfaction speaks volumes. Many of our clients come to us through word-of-mouth recommendations, and we take that trust seriously. We strive to exceed expectations with every move, providing top-notch service that leaves our clients smiling.",
    icon: HeartIcon,
  },
];

export default function CastleRock() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center py-5 px-5 md:px-10 z-1 relative max-lg:overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <section id="castle-rock" className="mt-5 sm:mt-10 mb-10">
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
                        href="/areas-served/castle-rock"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Castle Rock
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Movers in Castle Rock CO - Your Trusted Mover and Moving Company
                for Comprehensive Moving Services in Colorado
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
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
                <div className="lg:pr-4">
                  <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Introduction to Castle Rock Movers
                      </h2>
                    </div>
                  </div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg mt-6">
                    <p>
                      Moving can be one of life’s most stressful events, but it
                      doesn’t have to be. Imagine this: you’re standing in your
                      new living room, surrounded by neatly stacked boxes, the
                      afternoon sunlight filtering through the windows.
                      Everything you own has arrived safely, just as you left
                      it. You take a deep breath and feel a wave of relief. This
                      isn’t just any move—this is your fresh start, and you
                      didn’t have to lift a finger.
                    </p>
                    <p className="mt-6">
                      That’s why we’ve made it our mission to turn what could be
                      a stressful day into a smooth, hassle-free experience.
                      Picture this: it's moving day, and instead of feeling
                      overwhelmed, you're sipping your coffee, watching the
                      sunrise over the Rockies, while our professional team
                      takes care of everything. From carefully packing your most
                      treasured belongings to ensuring that everything arrives
                      at your new home safe and sound, we handle it all with the
                      care and attention you'd expect from a company that treats
                      every move as if it were their own.
                    </p>
                    <p className="mt-6">
                      <i>We’re here to take the weight off your shoulders</i>,
                      literally and figuratively. Let us handle the heavy
                      lifting so you can focus on what really matters: settling
                      into your new space and making it feel like home.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Why Choose Our Castle Rock Moving Services?
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  When it comes to moving in{" "}
                  <Link
                    href="https://maps.app.goo.gl/aTwNNmXhtSXGvf6eA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link"
                  >
                    Castle Rock, Colorado
                  </Link>
                  , you need a team that not only understands the logistics but
                  also the emotions involved in leaving one place and settling
                  into another. At Green Mountain Movers, our reputation for
                  excellence as a moving company in Castle Rock is built on our
                  commitment to making your relocation as seamless and
                  stress-free as possible.
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
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Residential & Commercial Moving Services
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Whether you’re moving your home or your business, Green Mountain
                Movers has the experience and resources to make your relocation
                as smooth as possible.
              </p>
              <h3 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl mt-6">
                Residential Moves
              </h3>
              <p className="text-base leading-7 text-gray-700 mt-4">
                Your home is your sanctuary, and we treat it as such. Our
                residential moving services are designed to minimize disruption
                and maximize efficiency, so you can get back to your normal
                routine as quickly as possible. We take care of everything, from
                packing and loading to transportation and unloading, so you
                don’t have to lift a finger.
              </p>
              <h3 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl mt-6">
                Commercial Moves
              </h3>
              <p className="text-base leading-7 text-gray-700 mt-4">
                Moving a business is no small feat, but we’re up to the
                challenge. Our commercial moving services are tailored to meet
                the unique needs of businesses, ensuring minimal downtime and a
                smooth transition. Whether you’re moving a small office or a
                large corporation, we have the expertise and equipment to handle
                the job.
              </p>
            </div>

            <div className="mt-10 sm:mt-20">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Comprehensive Moving Services in Castle Rock, CO
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  At Green Mountain Movers, we understand that no two
                  relocations are alike. That’s why we offer a{" "}
                  <i>wide range of Castle Rock moving services</i> to meet the
                  diverse needs of our clients. Whether you need help with a
                  simple local move or require specialized services for a
                  complex relocation, we’ve got you covered.
                </p>
                <Cards />
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Moving Tips from Castle Rock's Trusted Movers
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                We’ve learned a lot over the years, and we’re happy to share our
                knowledge with you. Here are some tips to help make your move as
                smooth as possible.
              </p>
              <h4 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl mt-6">
                Planning Your Move
              </h4>
              <p className="text-base leading-7 text-gray-700 mt-4">
                Start planning your move as early as possible to avoid
                last-minute stress. Create a moving checklist and timeline to
                stay organized, and don’t hesitate to ask us for advice—we’re
                here to help.
              </p>
              <h4 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl mt-6">
                Packing Essentials
              </h4>
              <p className="text-base leading-7 text-gray-700 mt-4">
                Invest in high-quality packing materials to protect your
                belongings during the move. Use sturdy boxes, packing paper,
                bubble wrap, and packing tape. Label each box with its contents
                and the room it belongs in to make unpacking easier.
              </p>
              <h4 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl mt-6">
                Moving Day Preparation
              </h4>
              <p className="text-base leading-7 text-gray-700 mt-4">
                On moving day, make sure you have all the essentials on hand:
                important documents, medications, and a change of clothes. Stay
                hydrated and take breaks when needed. Our group of professionals
                will handle the heavy lifting, but it’s important to take care
                of yourself, too.
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
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Discover Castle Rock, CO
              </h3>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Nestled between Denver and Colorado Springs, Castle Rock, CO, is
                a charming town known for its stunning scenery, rich history,
                and friendly community. Named after a prominent, castle-shaped
                butte that overlooks the town, Castle Rock is a place where
                natural beauty meets modern convenience.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                The area is home to a population that values both its outdoor
                spaces and its vibrant downtown, making it a sought-after
                location for families and businesses alike. With zip codes like
                80104, 80108, and 80109, Castle Rock offers a range of
                neighborhoods that cater to diverse lifestyles, all within easy
                reach of the town's amenities and attractions.
              </p>
            </div>
            <h3 className="mt-10 sm:mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Top Attractions in Castle Rock, CO
            </h3>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Castle Rock Outlets
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    A premier shopping destination, the{" "}
                    <Link
                      href="https://www.outletsatcastlerock.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Outlets at Castle Rock
                    </Link>{" "}
                    offer over 100 brand-name stores and eateries. It's a
                    must-visit for both residents and visitors looking for great
                    deals in a beautiful outdoor setting.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Rock Park
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    For those who love hiking and panoramic views,{" "}
                    <Link
                      href="https://maps.app.goo.gl/d1fMP4daH4tfhXWLA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Rock Park
                    </Link>{" "}
                    offers a scenic trail leading to the base of the iconic
                    Castle Rock. It’s a short but rewarding hike with stunning
                    views of the town and surrounding areas.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Castle Rock Historical Museum
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Learn about the rich history of the town at the{" "}
                    <Link
                      href="https://www.castlerockmuseum.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Castle Rock Historical Museum
                    </Link>
                    , located in the town’s original train depot. The museum
                    offers a glimpse into Castle Rock’s past with exhibits and
                    artifacts from the late 1800s.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Cherokee Ranch & Castle
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Step back in time with a visit to the{" "}
                    <Link
                      href="https://cherokeeranch.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Cherokee Ranch & Castle
                    </Link>
                    , a stunning Scottish-style castle perched on a hilltop. The
                    property offers tours, cultural events, and breathtaking
                    views of the surrounding countryside.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Castle Rock Zip Line Tours
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    For a bit of adventure,{" "}
                    <Link
                      href="https://www.castlerockziplinetours.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Castle Rock Zip Line Tours
                    </Link>{" "}
                    provides a thrilling experience with over 10 ziplines that
                    stretch across the town’s scenic landscape. It’s a fun
                    activity for all ages.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Red Hawk Ridge Golf Course
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Golf enthusiasts will enjoy a round at the{" "}
                    <Link
                      href="https://www.redhawkridge.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Red Hawk Ridge Golf Course
                    </Link>
                    , known for its challenging layout and beautiful mountain
                    views. The course is a favorite among locals and visitors
                    alike.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    The Barn at Castle Rock
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Shop for unique antiques, gifts, and home decor at{" "}
                    <Link
                      href="https://thebarncastlerock.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      The Barn at Castle Rock
                    </Link>
                    , a local treasure housed in a historic building. It’s the
                    perfect place to find one-of-a-kind items.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Douglas County Fairgrounds
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Home to the annual{" "}
                    <Link
                      href="https://www.douglascountyfairandrodeo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Douglas County Fair & Rodeo
                    </Link>
                    , the fairgrounds host various events throughout the year,
                    including rodeos, concerts, and community festivals.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    The Castle Pines Golf Club
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Another excellent golf venue,{" "}
                    <Link
                      href="https://maps.app.goo.gl/3MW7UHMafzF1tWbv5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      The Castle Pines Golf Club
                    </Link>
                    , offers an exclusive golfing experience with a course
                    designed by Jack Nicklaus. It’s a top-tier destination for
                    serious golfers.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10 sm:mt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How Our Moving Services Benefit Castle Rock Residents
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Living in Castle Rock comes with the advantage of being close to
                both urban centers and outdoor adventures. Whether you're moving
                into one of the town’s family-friendly neighborhoods, relocating
                your business to a bustling commercial area, or downsizing to a
                smaller home, our moving services are tailored to meet your
                needs.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                We understand the unique layout of Castle Rock, from its scenic
                hills to its historic downtown, and we're equipped to handle the
                specific challenges that come with moving in this area. Our
                local expertise ensures that your move is efficient, smooth, and
                stress-free, allowing you to quickly settle into your new Castle
                Rock home or office.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                We also work with families in the{" "}
                <Link
                  href="https://greenmtnmovers.com/areas-served/centennial"
                  className="custom-link"
                >
                  Centennial
                </Link>{" "}
                area.
              </p>
            </div>
          </div>

          <div className="mt-10 sm:mt-20">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Green Mountain Movers for a Reliable Team of Movers in
              Castle Rock
            </h3>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Ready to make your move? Contact Green Mountain Movers today for a
              free, no-obligation quote. Whether you’re moving across town or
              across the country, our team is here to provide you with the
              top-notch service you deserve.{" "}
              <i>
                Let us handle the logistics so you can focus on what matters
                most—enjoying your new home.
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
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Castle%20Rock,%20CO&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
