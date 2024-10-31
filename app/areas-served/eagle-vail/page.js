import Image from "next/image";
import Link from "next/link";
import moving from "../../../public/media/stock3.jpg";
import {
  ChatBubbleLeftRightIcon,
  ChevronRightIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  CubeIcon,
  CurrencyDollarIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import ContactForm from "../../../components/ContactForm";
import BookingProcess from "../../../components/BookingProcess";
import Cards from "./Cards";
import FAQ from "./FAQ";

export const metadata = {
  title:
    "Movers in Eagle-Vail CO - Trusted Moving Company in Eagle and Vail, Colorado",
  description:
    "Searching for reliable movers in Eagle and Vail CO? Our expert moving services cover local and long-distance moves, furniture assembly, and more. Get a free moving quote today!",
};

const features = [
  {
    name: "Professional and Experienced Team",
    description:
      "Our movers are trained professionals with extensive experience in all types of moves, from residential relocations to commercial moves.",
    icon: UserGroupIcon,
  },
  {
    name: "Reliable and On-Time",
    description:
      "We know punctuality is essential. Our team arrives on time and works efficiently to keep your move on schedule.",
    icon: ClockIcon,
  },
  {
    name: "Customized Moving Plans",
    description:
      "Every move is unique, and we tailor our services to suit your needs, whether it's a local move or a long-distance journey.",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Careful Handling of Belongings",
    description:
      "From fragile items to heavy furniture, we handle every item with care, ensuring safe transport. We also offer packing services and provide supplies to make the process seamless.",
    icon: CubeIcon,
  },
  {
    name: "Affordable Moving Services",
    description:
      "Our top-notch services come at affordable rates, giving you the best value for your money, with no hidden costs.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Clear Communication",
    description:
      "We keep you informed at every step, so you're always in the loop about your move.",
    icon: ChatBubbleLeftRightIcon,
  },
];

export default function EagleVail() {
  return (
    <>
      <div className="flex justify-center items-center py-5 px-5 md:px-10 z-1 relative max-lg:overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <section id="eagle-vail" className="mt-5 sm:mt-10 mb-10">
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
                        href="/areas-served/eagle-vail"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Eagle-Vail
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Movers in Eagle-Vail CO - Trusted Moving Company in Eagle and
                Vail, Colorado
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
                        Introduction to Eagle and Vail Movers
                      </h2>
                    </div>
                  </div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg mt-6">
                    <p>
                      Moving can be challenging, from damaged items to late
                      arrivals. At Green Mountain Movers, we know the
                      difficulties of relocating and strive to make your move to
                      or within Eagle and Vail stress-free. Whether you're
                      moving within the area or across the state, we’re here to
                      handle the heavy lifting with care.
                    </p>
                    <p className="mt-6">
                      Think of us as your guides in this journey. With years of
                      experience in Eagle and Vail, we help families and
                      businesses move smoothly. From packing cherished heirlooms
                      to handling large furniture, we approach each item with
                      caution and each move with flexibility.
                    </p>
                    <p className="mt-6">
                      At Green Mountain Movers, we’re more than just movers in
                      Eagle and Vail—we’re your partners in this transition. You
                      can count on us for excellent service, reliable
                      communication, and peace of mind throughout your move.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-14">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Why Choose Our Movers in Eagle and Vail?
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  Moving is more than packing boxes and loading trucks—it’s
                  about ensuring every part of your life transfers smoothly. At
                  Green Mountain Movers, we approach each move with attention to
                  detail, clear communication, and respect for your belongings.
                </p>
                <p className="mt-4 leading-6 text-gray-600">
                  <i>
                    We don’t just move items—we move lives. Here’s why you
                    should trust us with your next move:
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
                  Our Comprehensive Services as Eagle-Vail Moving Company
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  We understand each move is unique. Whether you’re relocating a
                  home or business, our services are designed to meet your
                  individual needs.
                </p>
                <Cards />
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Hiring a Moving Company in Eagle-Vail is the Best Choice
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                The DIY approach to moving is tempting, but it often results in
                more stress, work, and potential damage. Choosing a professional
                moving company in Eagle and Vail means reducing risk and gaining
                peace of mind.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-4">
                At Green Mountain Movers, we specialize in treating your
                belongings with the care they deserve. Opting for professionals
                lets you avoid physical strain, tight schedules, and unexpected
                issues. Our experienced team ensures your belongings are secure,
                leaving you free to focus on settling in.
              </p>
            </div>

            <div className="mt-10 sm:mt-20">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Discover Eagle-Vail, CO
              </h3>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Eagle and Vail, nestled in the stunning Colorado mountains,
                offer a blend of natural beauty and vibrant community life.
                Known for outdoor recreation and charming small-town atmosphere,
                both areas are prime destinations for residents and businesses
                alike.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Moving to this scenic region means access to skiing, hiking, and
                more. As movers familiar with Eagle and Vail, we help make
                transitions easy and enjoyable for everyone relocating here.
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
                How Locals Can Benefit from Our Moving Services
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Moving in Eagle and Vail can be challenging, with diverse home
                types from modern condos to rustic mountain cabins. Whether
                upgrading, downsizing, or relocating, our movers handle it all.
                This beautiful area attracts residents with its job market,
                cultural scene, and outdoor adventures, and we're here to help
                locals with seamless moves.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                With local expertise, we understand Eagle and Vail residents'
                unique needs, from navigating mountain roads to managing moves
                in varied weather conditions.
              </p>
            </div>
            <h3 className="mt-10 sm:mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Top Attractions in Eagle-Vail, CO
            </h3>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Vail Ski Resort
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    World-renowned for its ski slopes,{" "}
                    <Link
                      href="https://www.vail.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Vail Ski Resort
                    </Link>{" "}
                    offers year-round activities and scenic views. A must-visit
                    for winter sports enthusiasts and mountain adventurers
                    alike.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Eagle River
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    The{" "}
                    <Link
                      href="https://www.fisheagle.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Eagle River
                    </Link>{" "}
                    is a local favorite for fishing, rafting, and scenic views.
                    Experience the tranquil beauty of Colorado’s waterways.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Betty Ford Alpine Gardens
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Nestled in Vail, the{" "}
                    <Link
                      href="https://www.bettyfordalpinegardens.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Betty Ford Alpine Gardens
                    </Link>{" "}
                    is a serene botanical escape featuring high-altitude plants
                    and scenic trails.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-10 sm:mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get a Free Moving Quote Today!
            </h2>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Ready to make your move? Contact Green Mountain Movers for a free,
              no-obligation quote. Let us handle the heavy lifting—call today!
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
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Eagle%20and%20Vail,%20CO&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
