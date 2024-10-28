import Image from "next/image";
import Link from "next/link";
import moving from "../../../public/media/stock8.jpg";
import moving2 from "../../../public/media/stock6.jpg";
import moving3 from "../../../public/media/stock4.jpg";
import {
  BriefcaseIcon,
  ChevronRightIcon,
  ClockIcon,
  HomeIcon,
  StarIcon,
  TagIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import ContactForm from "../../../components/ContactForm";
import BookingProcess from "../../../components/BookingProcess";
import Cards from "./Cards";
import Navbar from "../../../components/Navbar";
import FAQ from "./FAQ";

export const metadata = {
  title:
    "Your Go-To Movers in Berkley CO: The Best Berkley Colorado Moving Company for Expert Moving Services",
  description:
    "Looking for reliable movers in Berkley CO? Our professional team offers comprehensive moving services with transparent pricing. Request your free moving quote today!",
};

const features = [
  {
    name: "Start Early",
    description: "Begin packing well in advance to avoid last-minute stress.",
    icon: ClockIcon,
  },
  {
    name: "Declutter",
    description:
      "Use your move as an opportunity to get rid of items you no longer need.",
    icon: TrashIcon,
  },
  {
    name: "Label Boxes",
    description:
      "Clearly label each box with its contents and the room it belongs to.",
    icon: TagIcon,
  },
  {
    name: "Pack Essentials Separately",
    description:
      "Keep a box of essential items you'll need immediately after moving.",
    icon: BriefcaseIcon,
  },
];

export default function Berkley() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center py-5 px-5 md:px-10 z-1 relative max-lg:overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <section id="berkley" className="mt-5 sm:mt-10 mb-10">
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
                        href="/areas-served/berkley"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Berkley
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Your Go-To Movers in Berkley CO: The Best Berkley Colorado
                Moving Company for Expert Moving Services
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
                        Introduction to Berkley Movers
                      </h2>
                    </div>
                  </div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg mt-6">
                    <p>
                      Moving can be one of the most stressful experiences in
                      life, but it doesn't have to be. Imagine a moving day
                      where everything goes smoothly, where you can feel the
                      excitement of your new beginning rather than the stress of
                      the transition. That's exactly what we aim to provide at
                      Green Mountain Movers in{" "}
                      <Link
                        href="https://maps.app.goo.gl/WPgyistWW4ZstBLUA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-link"
                      >
                        Berkley, Colorado
                      </Link>
                      .
                    </p>
                    <p className="mt-6">
                      When John and Mary decided to move their family to a
                      bigger home in Berkley, they were overwhelmed with the
                      thought of packing up their entire lives and starting
                      fresh. They had heard countless horror stories from
                      friends about moving mishaps—broken valuables, unreliable
                      movers, and unexpected costs. However, their experience
                      with us was nothing short of amazing. From the moment our
                      team arrived, John and Mary felt a sense of relief,
                      knowing they were in capable hands.
                    </p>
                    <p className="mt-6">
                      Our mover mission is to turn your moving day into a
                      positive, stress-free experience, just like we did for
                      John and Mary. We take pride in being the{" "}
                      <i>#1 moving company in Berkley, CO</i>, trusted by
                      countless families and businesses to handle their moves
                      with care and professionalism.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The #1 Berkley Moving Company
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                At Green Mountain Movers, we're not just a moving company; we're
                your neighbors, committed to making your move as smooth as
                possible. We understand the unique needs of our Berkley, CO
                community, and we're dedicated to providing top-notch service
                every step of the way. Our reputation as the #1 movers Berkley
                is built on our unwavering commitment to professionalism,
                reliability, and customer satisfaction.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                From the initial consultation to the final box being unpacked,
                our team is with you, ensuring every detail is handled with the
                utmost care. Our experienced{" "}
                <Link
                  href="https://greenmtnmovers.com/areas-served"
                  className="custom-link"
                >
                  Berkley movers
                </Link>{" "}
                are trained to manage all types of moves, whether it's a small
                apartment or a large family home. We use high-quality packing
                materials and state-of-the-art equipment to protect your
                belongings and ensure they arrive at your new home safely.
              </p>
            </div>

            <div className="mx-auto grid grid-cols-1 items-start gap-x-8 gap-y-16 lg:mx-0 lg:grid-cols-2 mt-10 sm:mt-20">
              <div className="lg:pr-4">
                <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                  <Image
                    alt="movers doing moving things"
                    src={moving2}
                    placeholder="blur"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gray-900/50 mix-blend-multiply" />
                  <figure className="relative isolate">
                    <svg
                      fill="none"
                      viewBox="0 0 162 128"
                      aria-hidden="true"
                      className="absolute -left-2 -top-4 -z-10 h-32 stroke-white/20"
                    >
                      <path
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                        id="0ef284b8-28c2-426e-9442-8655d393522e"
                      />
                      <use
                        x={86}
                        href="#0ef284b8-28c2-426e-9442-8655d393522e"
                      />
                    </svg>
                    <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                      <p>
                        "The team was amazing," "They were professional,
                        efficient, and so careful with all my belongings. I
                        couldn’t have asked for a better experience."
                      </p>
                    </blockquote>
                  </figure>
                </div>
              </div>
              <div>
                <div className="text-base leading-7 text-gray-700">
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Berkley CO Moving Services You Can Trust
                  </h2>
                  <div>
                    <p className="mt-6">
                      Trust is the cornerstone of our service. We know how
                      important it is to feel confident that your possessions
                      are in good hands. That's why our customers consistently
                      describe their experience with Green Mountain Movers using
                      words like "trustworthy," "reliable," and "professional."
                    </p>
                    <p className="mt-6">
                      One of our clients, Sarah, shared her story of moving into
                      her first home. She had heard horror stories of moves gone
                      wrong, but with us, she felt nothing but relief.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Check Out the Mover Services We Offer in Your Area
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  We offer a comprehensive range of residential moving services
                  tailored to meet the diverse needs of our Berkley, CO clients:
                </p>
                <Cards />
                <h3 className="mt-10 sm:mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Service Reflects Our Move Professionalism
                </h3>
                <p className="mt-4 leading-6 text-gray-600">
                  At Green Mountain Movers, we pride ourselves on
                  professionalism. Every member of our team is dedicated to
                  providing the <i>highest-quality service</i>. We show up on
                  time, in uniform, and ready to work. Our movers are trained to
                  handle your belongings with the utmost care and respect,
                  treating every item as if it were their own.
                </p>
                <FAQ />
              </div>
            </div>

            <div className="overflow-hidden bg-white mt-10 sm:mt-20">
              <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:grid-cols-2">
                <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                  <div>
                    <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Moving Tips from Green Mountain Movers
                    </h3>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      Moving doesn't have to be stressful. Here are some tips
                      from our expert movers to <i>make your move easier</i>:
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
                We Let Our Customers Speak For Our Berkley Movers
              </h3>
              <p className="mt-4 leading-6 text-gray-600">
                Our greatest reward is our customers' satisfaction. We believe
                that the best way to demonstrate the quality of our Berkley
                moving services is through the voices of those we've helped.
              </p>
              <div className="mt-10 grid grid-cols-1 lg:mx-0 lg:grid-cols-2">
                <div className="flex flex-col pb-5 sm:pb-10 lg:pb-0 lg:pr-8 xl:pr-20">
                  <figure>
                    <div className="flex gap-x-1 text-[#0e5933]">
                      <StarIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none"
                      />
                      <StarIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none"
                      />
                      <StarIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none"
                      />
                      <StarIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none"
                      />
                      <StarIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none"
                      />
                    </div>
                    <blockquote className="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
                      <p>
                        “I had a nightmare experience with movers in the past,
                        but Green Mountain Movers restored my faith. They were
                        efficient, careful, and incredibly friendly.”
                      </p>
                    </blockquote>
                    <figcaption className="mt-10 flex items-center gap-x-6">
                      <div className="text-sm leading-6">
                        <div className="font-semibold text-gray-900">
                          Michael
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="flex flex-col border-t border-gray-900/10 pt-5 sm:pt-10 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
                  <figure>
                    <p className="sr-only">5 out of 5 stars</p>
                    <div className="flex gap-x-1 text-[#0e5933]">
                      <StarIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none"
                      />
                      <StarIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none"
                      />
                      <StarIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none"
                      />
                      <StarIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none"
                      />
                      <StarIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none"
                      />
                    </div>
                    <blockquote className="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
                      <p>
                        “I can't recommend them enough. They made a stressful
                        move feel like a breeze. The team was professional and
                        took great care of my belongings.”
                      </p>
                    </blockquote>
                    <figcaption className="mt-10 flex items-center gap-x-6">
                      <div className="text-sm leading-6">
                        <div className="font-semibold text-gray-900">
                          Jessica
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
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
                Discover Berkley, CO
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Berkley, CO is a charming community located in Adams County,
                offering a mix of suburban comfort and urban convenience. This
                vibrant area, known for its friendly residents and beautiful
                landscapes, is home to the zip codes 80221 and 80212. Berkley
                boasts a rich history and a thriving local culture that make it
                an ideal place to live, work, and play.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Whether you're moving within Berkley or coming from another
                city, our moving services are designed to help you transition
                smoothly and enjoy everything this wonderful community has to
                offer.
              </p>
            </div>
            <div className="mt-10">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                How Local People Benefit from Our Services
              </h3>
              <p className="mt-4 leading-6 text-gray-600">
                Living in Berkley means enjoying a close-knit community with
                easy access to Denver's amenities and the scenic beauty of
                Colorado. As long-distance movers, we understand the unique
                needs of Berkley's residents.
              </p>
              <p className="mt-4 leading-6 text-gray-600">
                Our services are tailored to help you{" "}
                <i>relocate efficiently</i>, whether you're moving to a new home
                within the 80221 zip code, setting up a new business in the
                80212 area, or expanding your horizons beyond Berkley. With
                Green Mountain Movers, you can focus on settling into your new
                surroundings while we handle the heavy lifting.
              </p>
            </div>
            <h4 className="mt-10 sm:mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Top Attractions in Berkley, CO
            </h4>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Berkeley Park
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <Link
                      href="https://maps.app.goo.gl/btRbLFR8cnCehetX7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Berkeley Park
                    </Link>{" "}
                    is a popular destination for families and outdoor
                    enthusiasts. This expansive park features a beautiful lake,
                    sports fields, playgrounds, and picnic areas, making it
                    perfect for a day out in nature. Visit Berkeley Park -
                    denvergov.org
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Regis University
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Located in the neighboring area,{" "}
                    <Link
                      href="https://www.regis.edu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Regis University
                    </Link>{" "}
                    is a renowned institution offering a picturesque campus and
                    a vibrant academic community. It's a significant landmark
                    for higher education in the region.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Lakeside Amusement Park
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    A historic amusement park offering fun rides and attractions
                    for all ages. This classic park has been entertaining
                    families since 1908 and remains a beloved spot for a day of
                    excitement. Explore{" "}
                    <Link
                      href="http://www.lakesideamusementpark.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Lakeside Amusement Park
                    </Link>
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Historic Elitch Gardens Theatre
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    This historic venue has been a cultural hub since its
                    opening in 1891. It hosts a variety of performances and
                    events, contributing to Berkley's rich cultural scene. Visit{" "}
                    <Link
                      href="https://historicelitchtheatre.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Elitch Gardens Theatre
                    </Link>
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Westminster Center Park
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Also known as “Peter Pan Park,” this whimsical park features
                    a playground themed after the beloved story of Peter Pan,
                    making it a hit with kids and families. Explore{" "}
                    <Link
                      href="https://www.westminsterco.gov/www.cityofwestminster.us/ParksRecreation/ParksTrailsOpenSpace/WestminsterCenterPark"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Westminster Center Park
                    </Link>
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Rocky Mountain Arsenal National Wildlife Refuge
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Just a short drive from Berkley, this{" "}
                    <Link
                      href="https://maps.app.goo.gl/1DUJABYBkBJykUkZA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Rocky Mountain Arsenal National Wildlife Refuge
                    </Link>{" "}
                    offers miles of trails and opportunities to see diverse
                    wildlife in their natural habitats.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Downtown Denver
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Easily accessible from Berkley,{" "}
                    <Link
                      href="https://www.denver.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Downtown Denver
                    </Link>{" "}
                    offers endless entertainment options, including museums,
                    restaurants, and sports arenas.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    The Oriental Theater
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    A historic venue hosting live music, comedy, and other
                    performances. It's a cornerstone of the local entertainment
                    scene. Check out{" "}
                    <Link
                      href="https://theorientaltheater.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      The Oriental Theater
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-10 sm:mt-20">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Request a Free Quote with Our Local Movers
            </h3>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Ready to make your move? Contact us today for a free quote. We’ll
              provide you with a detailed estimate and answer any questions you
              may have about our relocation services. Let us{" "}
              <i>show you why we're the best movers in Berkley, CO</i>. You may
              also be interested in seeing our services for the neighboring
              community of{" "}
              <Link
                href="https://greenmtnmovers.com/areas-served/boulder"
                className="custom-link"
              >
                Boulder, CO
              </Link>
              .
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
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Berkley,%20CO&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
