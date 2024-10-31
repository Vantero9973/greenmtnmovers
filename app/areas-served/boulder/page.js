import Image from "next/image";
import Link from "next/link";
import moving from "../../../public/media/moving-6.jpg";
import moving3 from "../../../public/media/moving-8.jpg";
import {
  ChatBubbleLeftEllipsisIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  HeartIcon,
  HomeIcon,
} from "@heroicons/react/20/solid";
import ContactForm from "../../../components/ContactForm";
import BookingProcess from "../../../components/BookingProcess";
import Cards from "../../../components/ServiceAreasCards";
import FAQ from "./FAQ";

export const metadata = {
  title:
    "Movers in Boulder CO - Professional Moving Services by Your Trusted Boulder Moving Company",
  description:
    "Looking for reliable movers in Boulder, CO? Our top-rated moving services offer comprehensive residential and commercial solutions. Request your free quote today!",
};

const features = [
  {
    name: "Transparent Pricing",
    description:
      "We provide clear, upfront quotes with no hidden fees, so you know exactly what to expect.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Dependable Service",
    description:
      "Our team arrives on time, every time, ready to get the job done efficiently and professionally.",
    icon: CheckCircleIcon,
  },
  {
    name: "Clear Communication",
    description:
      "We keep you informed throughout the moving process, so you’re never left in the dark.",
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    name: "Customer Satisfaction",
    description:
      "Your satisfaction is our top priority, and we go the extra mile to ensure your move is as smooth as possible.",
    icon: HeartIcon,
  },
];

export default function Boulder() {
  return (
    <>
      <div className="flex justify-center items-center py-5 px-5 md:px-10 z-1 relative max-lg:overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <section id="boulder" className="mt-5 sm:mt-10 mb-10">
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
                        href="/areas-served/boulder"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Boulder
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Movers in Boulder CO - Professional Moving Services by Your
                Trusted Boulder Moving Company
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
                        Introduction to Boulder Movers
                      </h2>
                    </div>
                  </div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg mt-6">
                    <p>
                      Moving can be one of life’s most stressful events,
                      especially when you’re leaving behind a place filled with
                      memories. I recall helping a local Boulder family move
                      from their first apartment to the home they had saved for
                      years. Each box we packed represented a piece of their
                      lives—the scuffed floors where their children took their
                      first steps, the well-worn armchair that held countless
                      stories. For them, this move was more than just a change
                      of address; it was the beginning of a new chapter.
                    </p>
                    <p className="mt-6">
                      At Green Mountain Movers, we understand that every move
                      tells a unique story. Whether you’re relocating within
                      Boulder or across town, our mission is to make your
                      transition as smooth and stress-free as possible. With
                      years of experience in the Boulder area, we’ve earned a
                      reputation as the go-to mover you can trust—reliable,
                      professional, and always ready to go the extra mile.
                    </p>
                    <p className="mt-6">
                      We know Boulder like the back of our hand, from the
                      vibrant downtown to the tranquil suburbs. We’re not just
                      another boulder moving company; we’re your neighbors,
                      committed to treating your move with the care and
                      attention it deserves.{" "}
                      <i>
                        Let us handle the heavy lifting so you can focus on
                        making your new place feel like home
                      </i>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Boulder Moving Company You Can Trust
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                When it comes to moving, trust is everything. At Green Mountain
                Movers, we've built our reputation by providing dependable,
                top-notch service to every customer, every time. We know that
                you're entrusting us with more than just your belongings—you're
                trusting us with pieces of your life, memories, and future.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Our team of experienced professionals takes this responsibility
                seriously, treating your items with the utmost care from the
                moment we arrive with our truck until the last box is placed in
                your new home. Whether you’re moving down the street or across
                Boulder, we’re committed to delivering a seamless experience
                that you can rely on.
              </p>
            </div>

            <div className="mt-10 sm:mt-20">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Residential Mover Experts in Boulder
              </h3>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Your home is your sanctuary, and we treat it as such. Our
                residential moving services are designed to make your transition
                to a new home as smooth as possible. Whether you’re moving into
                a cozy apartment downtown or a sprawling house in the suburbs,
                Green Mountain Movers is equipped to handle moves of all sizes.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                We take pride in our attention to detail, ensuring that every
                box is packed securely, every piece of furniture is protected,
                and every item is delivered to its new location without a
                scratch. Our goal is to make you feel at home in your new place
                from the moment you walk in the door.
              </p>
            </div>

            <div className="overflow-hidden bg-white mt-10 sm:mt-20">
              <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:grid-cols-2">
                <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                  <div>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Experience the Honesty and Reliability You Deserve
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      At Green Mountain Movers, we believe that honesty and
                      reliability are the cornerstones of a successful move.
                      From the initial quote to the final box, we pride
                      ourselves on delivering a transparent and trustworthy
                      service that you can count on. Here’s what sets us apart:
                    </p>
                    <dl className="mt-10 space-y-8 text-base leading-7 text-gray-600">
                      {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                          <dt className="inline font-semibold text-gray-900">
                            <feature.icon
                              aria-hidden="true"
                              className="absolute left-1 top-1 h-5 w-5 text-[#0e5933]/80"
                            />
                            {feature.name}
                          </dt>{" "}
                          <dd className="inline">{feature.description}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
                <div className="flex items-start justify-end lg:order-first">
                  <Image
                    alt="movers moving things"
                    src={moving3}
                    placeholder="blur"
                    width={2432}
                    height={1442}
                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Commercial Moving Services in Boulder, CO
              </h3>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Moving a business requires precision, efficiency, and minimal
                disruption. At Green Mountain Movers, we understand the unique
                challenges of commercial relocations, and we’re here to make the
                process as smooth as possible. Whether you’re a small startup or
                a large corporation, our team is equipped to handle your move
                with the utmost professionalism.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                We specialize in moving office equipment, sensitive documents,
                and other business assets with care, ensuring that your
                operations can continue seamlessly in your new location. Trust
                us to handle the logistics, so you can focus on what matters
                most—running your business.
              </p>
            </div>

            <div className="mt-10 sm:mt-20">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Comprehensive Moving and Packing Services in Boulder, CO
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  No two moves are the same, which is why we offer a full range
                  of moving services tailored to fit your specific needs. From
                  residential moves to commercial relocations,{" "}
                  <Link
                    href="https://greenmtnmovers.com/areas-served"
                    className="custom-link"
                  >
                    Our Boulder movers
                  </Link>{" "}
                  have the expertise to handle it all. We provide everything
                  from packing and loading to transportation and unloading,
                  ensuring that every aspect of your move is covered.
                </p>
                <p className="mt-4 leading-6 text-gray-600">
                  Need help with fragile items or specialty furniture? Our team
                  is trained to handle even the most delicate items with
                  precision and care. With us, you get a{" "}
                  <i>
                    comprehensive moving solution that’s customized just for you
                  </i>
                  .
                </p>
                <Cards />
                <h3 className="mt-10 sm:mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Boulder County's Home Town Movers
                </h3>
                <p className="mt-4 leading-6 text-gray-600">
                  Being a part of the Boulder community means everything to us.
                  We’re not just another moving company in Boulder—we’re your
                  hometown movers, deeply rooted in the local community. We
                  understand the unique charm of Boulder and the pride that
                  comes with living in such a vibrant area.
                </p>
                <p className="mt-4 leading-6 text-gray-600">
                  Our local expertise allows us to navigate Boulder’s
                  neighborhoods with ease, ensuring your move is efficient and
                  hassle-free. When you choose Green Mountain Movers, you’re not
                  just hiring a moving service; you’re partnering with a team
                  that’s as invested in Boulder as you are.{" "}
                </p>
                <FAQ />
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Business: We Move Mountains So That You Don’t Have To
              </h3>
              <p className="text-base leading-7 text-gray-700 mt-6">
                At Green Mountain Movers, we believe in going above and beyond
                for our customers. Moving can be overwhelming, but with our
                expert team by your side, you don’t have to lift a finger. We
                take care of everything, from packing your belongings to
                arranging them in your new home, so you can focus on settling
                into your new space. We move mountains—literally and
                figuratively—so you don’t have to. Our commitment to making your
                move as easy and stress-free as possible is what sets us apart.
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
                Discover Boulder, CO
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Nestled against the stunning backdrop of the Rocky Mountains,{" "}
                <Link
                  href="https://maps.app.goo.gl/Tt99DFuWadG7VrhK9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-link"
                >
                  Boulder, Colorado
                </Link>
                , is a vibrant city known for its natural beauty, progressive
                culture, and thriving community. With a population that enjoys
                both the serenity of nature and the bustle of urban life,
                Boulder offers something for everyone.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                The city is home to several zip codes, including 80301, 80302,
                80303, 80304, and 80305, covering diverse neighborhoods from the
                historic downtown to the sprawling suburbs. Boulder’s unique
                blend of outdoor recreation, educational excellence, and
                cultural attractions makes it a desirable place to live—and when
                it’s time to move, having reliable moving companies in Boulder
                CO, can make all the difference.
              </p>
            </div>
            <h3 className="mt-10 sm:mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Top Attractions in Boulder, CO
            </h3>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Pearl Street Mall
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    A vibrant pedestrian shopping district in downtown Boulder,{" "}
                    <Link
                      href="https://maps.app.goo.gl/WJfGZtvMhRvzLbRw6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Pearl Street Mall
                    </Link>{" "}
                    is home to an eclectic mix of shops, restaurants, and street
                    performers. It’s the perfect place to spend an afternoon
                    exploring local boutiques or dining al fresco.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Chautauqua Park
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Located at the base of the Flatirons,{" "}
                    <Link
                      href="https://bouldercolorado.gov/locations/chautauqua-park"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Chautauqua Park
                    </Link>{" "}
                    offers breathtaking views and a range of outdoor activities,
                    from hiking and rock climbing to picnicking. This historic
                    park is a favorite among locals and visitors alike.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Boulder Theater
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    An iconic venue in the heart of Boulder, the{" "}
                    <Link
                      href="https://www.bouldertheater.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Boulder Theater
                    </Link>{" "}
                    hosts a variety of performances, including live music, film
                    screenings, and comedy shows. Its art-deco design and
                    vibrant atmosphere make it a cultural hub.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    University of Colorado Boulder
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    The{" "}
                    <Link
                      href="https://www.colorado.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      University of Colorado Boulder
                    </Link>{" "}
                    is a top public research university with a beautiful campus
                    that features historic buildings, lush landscapes, and
                    stunning mountain views. It’s a major part of the community,
                    drawing students, faculty, and visitors from around the
                    world.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Boulder Farmers Market
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Held on Wednesdays and Saturdays, the{" "}
                    <Link
                      href="https://bcfm.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Boulder Farmers Market
                    </Link>{" "}
                    is a must-visit for fresh, locally-grown produce, artisan
                    goods, and delicious prepared foods. It’s a great way to
                    support local farmers and enjoy the vibrant Boulder
                    community.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Folsom Field
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Home to the University of Colorado Buffaloes football team,{" "}
                    <Link
                      href="https://maps.app.goo.gl/U1AbWtDewm35VWRL9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Folsom Field
                    </Link>{" "}
                    is an exciting place to catch a game during the fall season.
                    The stadium offers breathtaking views of the Flatirons,
                    making it one of the most picturesque college football
                    venues in the country.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Boulder Museum of Contemporary Art (BMoCA)
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Located near Pearl Street, the{" "}
                    <Link
                      href="https://bmoca.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Boulder Museum of Contemporary Art
                    </Link>{" "}
                    is dedicated to presenting innovative contemporary art
                    exhibitions and programs. The museum is a dynamic cultural
                    center that engages visitors with thought-provoking art and
                    educational experiences.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10 sm:mt-20">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How Boulder Residents Benefit from Our Moving Services
              </h3>
              <p className="mt-4 leading-6 text-gray-600">
                Living in Boulder means you’re likely balancing an active
                lifestyle with a busy schedule. Whether you’re a student at the
                University of Colorado, a tech professional commuting to Denver,
                or a family enjoying the city’s outdoor amenities, moving can be
                a daunting task. That’s where Green Mountain Movers comes in.
              </p>
              <p className="mt-4 leading-6 text-gray-600">
                We understand the specific needs of Boulder residents—from
                navigating the hilly terrain and narrow streets to ensuring your
                gear for mountain biking or hiking is safely transported. Our
                local knowledge and experience allow us to offer tailored moving
                solutions that save you time and reduce stress, so you can focus
                on enjoying everything Boulder has to offer.
              </p>
              <p className="mt-4 leading-6 text-gray-600">
                We also work with families in the{" "}
                <Link
                  href="https://greenmtnmovers.com/areas-served/breckenridge"
                  className="custom-link"
                >
                  Breckenridge
                </Link>{" "}
                area.
              </p>
            </div>
          </div>

          <div className="mt-10 sm:mt-20">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Request a Free Moving Quote in Boulder, Colorado
            </h3>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Ready to make your move? Call Green Mountain Movers today to
              request your free, no-obligation moving quote. Our team is here to
              answer any questions you have and help you create a customized
              moving plan that fits your needs.{" "}
              <i>Let us handle the heavy lifting</i>, so you can focus on what’s
              next. We look forward to making your move in Boulder, CO, as
              smooth and stress-free as possible.
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
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Boulder,%20CO&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
