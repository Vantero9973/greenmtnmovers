import Image from "next/image";
import Link from "next/link";
import moving from "../../public/media/moving-9.jpg";
import {
  AdjustmentsHorizontalIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  ClipboardDocumentIcon,
  CubeIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  HandThumbUpIcon,
  HomeIcon,
  NoSymbolIcon,
  PaperAirplaneIcon,
  ShieldCheckIcon,
  TruckIcon,
  UserGroupIcon,
  UsersIcon,
  WrenchIcon,
} from "@heroicons/react/20/solid";

import ContactForm from "../../components/ContactForm";
import BookingProcess from "../../components/BookingProcess";
import Cards from "./Cards";
import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Trusted Long Distance Movers in Lakewood, CO | Green Mountain Movers",
  description:
    "Planning a long-distance move near Lakewood, CO? Green Mountain Movers offers top-rated, affordable long-distance moving services. Serving Lakewood and the greater Denver area, our expert team ensures a seamless and stress-free relocation. Contact us today for a free quote!",
};

const features = [
  {
    title: "Highly Experienced Team",
    description:
      "Our long-distance movers bring years of experience to ensure your move is handled with professionalism and care.",
    icon: UserGroupIcon,
  },
  {
    title: "Comprehensive Moving Quotes",
    description:
      "We provide detailed, transparent moving quotes with no hidden costs, ensuring you can budget effectively for your move.",
    icon: DocumentTextIcon,
  },
  {
    title: "Customized Moving Services",
    description:
      "Whether it’s a household, apartment, or office move, we tailor our services to meet your specific needs, making us the go-to long distance mover for any situation.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    title: "Expert Packing and Unloading",
    description:
      "With our expert packing services, your belongings are secured, minimizing the risk during transport. Our efficient unloading ensures everything arrives in your new space as it left the old one.",
    icon: TruckIcon,
  },
  {
    title: "Labor-Only Moving Help",
    description:
      "Need assistance with heavy lifting? Our labor-only service moves offer the essential help you need to load and unload your belongings, making your move quicker and easier.",
    icon: HandThumbUpIcon,
  },
  {
    title: "Dependable Delivery Services for Small Moves",
    description:
      "For smaller interstate moves or when you need to send items across state lines, count on our reliable long-distance delivery services.",
    icon: PaperAirplaneIcon,
  },
];

const featuresTwo = [
  {
    description:
      "Flat rate pricing available for transparent and predictable costs.",
    icon: CurrencyDollarIcon,
  },
  {
    description:
      "Detailed estimate with a breakdown of every part of your move, so you know exactly what to expect.",
    icon: ClipboardDocumentIcon,
  },
  {
    description:
      "Free use of high-quality moving blankets for added protection of your furniture and belongings.",
    icon: ShieldCheckIcon,
  },
  {
    description:
      "Expert disassembly and reassembly of furniture at no additional charge, saving you time and effort.",
    icon: WrenchIcon,
  },
  {
    description:
      "No fuel surcharge, so you don’t have to worry about hidden fees.",
    icon: NoSymbolIcon,
  },
  {
    description:
      "Flexible packing services, whether you need full-service packing or assistance with specific items.",
    icon: CubeIcon,
  },
  {
    description:
      "Our team consists of knowledgeable, experienced, and reliable movers who treat your possessions with the utmost care.",
    icon: UsersIcon,
  },
  {
    description:
      "Specialized custom moving trucks equipped with all necessary equipment and materials for a safe and efficient move.",
    icon: TruckIcon,
  },
  {
    description:
      "We take pride in our commitment to punctuality, professionalism, and customer satisfaction, ensuring a stress-free moving experience.",
    icon: CheckCircleIcon,
  },
];

export default function LongDistanceMoving() {
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
                        href="/long-distance-moving"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Long Distance Moving
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Trusted Long Distance Movers in Lakewood, CO | Green Mountain
                Movers
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
                        Trusted Long Distance Moving Services in Denver
                      </h2>
                    </div>
                  </div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg mt-6">
                    <p>
                      Welcome to Green Mountain Movers, your premier choice for
                      long distance moving services in Denver. At our company,
                      we understand that moving long distance can be a daunting
                      task. That's why we offer comprehensive movers services
                      tailored to meet your unique needs. Our trusted team of
                      movers are experts in handling everything from careful
                      packing to efficient unloading, ensuring your belongings
                      are safely transported.
                    </p>
                    <p className="mt-6">
                      With Green Mountain Movers, you aren't just choosing a
                      moving company; you're selecting a partner who is
                      committed to making your long-distance move as seamless as
                      possible. Whether it's across the state or the country,
                      our long-distance services are designed to provide you a
                      stress-free transition. Trust our service excellence, and
                      let us show you why we are the best movers in Denver for
                      your long distance needs.
                    </p>
                    <p className="mt-6">
                      Our priority is ensuring your move is as smooth as
                      possible, with clear communication at every stage. From
                      the initial consultation to the moment your items arrive
                      at their destination, we keep you updated so you always
                      know what to expect. With years of experience in the
                      industry, we’ve earned a reputation for reliability,
                      punctuality, and exceptional customer care, ensuring your
                      move is handled with precision and professionalism.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Comprehensive Long-Distance Moving Services
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  At Green Mountain Movers, we're renowned for our comprehensive
                  long-distance moving services that cater to all your
                  interstate moving needs. Understanding the complexities
                  involved in distance moving, our team is dedicated to
                  providing a seamless transition from your current location to
                  your new home. Whether you're relocating across state lines or
                  planning a long distance move within the region, our experts
                  offer customized solutions to facilitate your journey.
                </p>

                <Cards />
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Experienced Long Distance Mover Dedicated to You
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Moving can be a daunting task, and we understand that finding a
                reliable long distance mover is crucial to ensuring a successful
                relocation. At Green Mountain Movers, we are committed to
                providing exceptional service and personalized care for every
                client's unique needs.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                To begin the process of{" "}
                <Link
                  href="https://www.realsimple.com/home-organizing/organizing/moving/moving-checklist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-link"
                >
                  planning your move
                </Link>
                , our team will provide you with a comprehensive moving quote
                that outlines all costs associated with your interstate move. We
                believe in transparency and will never surprise you with hidden
                fees or charges.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Once you have confirmed your moving details, our experienced
                team will get to work. With a proven track record of over 1K
                successful moves, we are well-equipped to handle any
                long-distance relocation efficiently and professionally.
              </p>
            </div>

            <div className="mt-10 sm:mt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Us for Your Long Distance Move?
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Choosing Green Mountain Movers for your long distance move means
                opting for peace of mind, unparalleled service, and a commitment
                to excellence. Our dedication to making your move as smooth and
                stress-free as possible sets us apart. Here are just a few
                reasons why our clients highly recommend us for their interstate
                and long-distance moving needs:
              </p>
              <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                {features.map((feature) => (
                  <div key={feature.title} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-[#0e5933]/80"
                      />
                      {feature.title}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-base leading-7 text-gray-700 mt-10">
                Choose Green Mountain Movers and experience a hassle-free
                transition to your new beginning. Our commitment to quality,
                reliability, and customer satisfaction makes us the preferred
                choice for your next long distance move.
              </p>
            </div>
          </section>
        </div>
      </div>
      <BookingProcess />

      <div className="flex justify-center items-center pb-5 px-5 md:px-10 z-1 relative">
        <div className="mx-auto max-w-7xl">
          <div className="mt-10 sm:mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Expert Packing and Unloading Services for Long-Distance Moves
            </h2>
            <p className="text-base leading-7 text-gray-700 mt-6">
              As premier{" "}
              <Link href="https://greenmtnmovers.com/" className="custom-link">
                long distance moving companies
              </Link>
              , we understand the importance of proper packing and unloading
              techniques. Our team of experienced movers is trained in expert
              packing methods to ensure that your items are secure and protected
              during transport. We use high-quality materials to wrap and pack
              your belongings, minimizing the risk of damage during the long
              distance move.
            </p>
            <p className="text-base leading-7 text-gray-700 mt-6">
              We also excel at unloading, ensuring that each piece arrives in
              your new home in the same condition it left your old one. With our
              dedicated moving services, we are committed to easing the stress
              typically associated with moving. Trust us to manage every aspect
              of your move, from thorough packing to efficient unloading, making
              us one of the top long-distance moving company in Denver.{" "}
              <i>
                Choose Green Mountain Movers for a flawless transition to your
                new space
              </i>
              .
            </p>
          </div>

          <div className="flex flex-col gap-5 mt-10">
            <h2 className="font-semibold text-2xl">
              Preparing for Your Interstate Move
            </h2>
            <h3 className="text-lg font-semibold">
              Checklist and Tips for Efficient Moving Long Distance
            </h3>
            <p>
              Moving across states requires meticulous planning and
              organization. To help you streamline the process and ensure a
              smooth transition, we've compiled a{" "}
              <Link
                href="https://www.nytimes.com/wirecutter/reviews/the-ultimate-moving-checklist/"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-link"
              >
                moving checklist
              </Link>{" "}
              and tips for a quick and efficient long distance move.
            </p>
            <ol className="list-decimal list-inside">
              <li className="mt-2">
                Create an inventory of all your belongings, including personal
                documents such as birth certificates and passports.
              </li>
              <li className="mt-2">
                Declutter and get rid of any items you no longer need or use to
                minimize the cost of the move.
              </li>
              <li className="mt-2">
                Notify your utility companies, internet providers, and other
                service providers about your move.
              </li>
              <li className="mt-2">
                Pack a separate bag with essential items such as medication,
                toiletries, clothes, and important documents for easy access on
                moving day.
              </li>
              <li className="mt-2">
                Label all boxes with the contents and designated room in your
                new home.
              </li>
              <li className="mt-2">
                Keep important documents, such as moving contracts, in a safe
                and easily accessible place.
              </li>
            </ol>
          </div>

          <div className="mt-10 sm:mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Green Mountain Movers?
            </h2>
            <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              {featuresTwo.map((feature, index) => (
                <div key={index} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon
                      aria-hidden="true"
                      className="absolute left-1 top-1 h-5 w-5 text-[#0e5933]/80"
                    />
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 sm:mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get A Free Moving Quote Today for Long-Distance Moving Services
            </h2>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Planning your long distance move across the United States starts
              with gathering quotes from reputable moving companies. Moving
              costs can vary greatly, so it's important to compare prices and
              services before deciding. Green Mountain Movers offers
              complimentary estimates tailored to your unique needs. Our
              detailed quotes provide a breakdown of every aspect of your move,
              ensuring transparency and clarity throughout the process.
            </p>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Contact Green Mountain Movers today to receive your free quote
              and, if needed, an on-site estimate for your long distance move.{" "}
              <i>
                Don't trust your precious belongings to just any moving company
                - choose Green Mountain Movers for the utmost care and
                professionalism
              </i>
              .
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="service-areas-clippath-bg flex justify-center items-center">
        <div className="max-w-screen-xl flex flex-col justify-center items-center gap-3 py-20 px-5 text-white text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Long-Distance Move Information
          </h2>
          <p className="mx-auto mt-6 leading-8 text-gray-200">
            A long-distance move typically involves crossing state lines and
            covering a significant distance. Green Mountain Movers understands
            the complexities involved in planning and executing long-distance
            moves, and we're committed to providing you with a seamless and
            stress-free experience. Whether you're moving from coast to coast or
            to a neighboring state, we have the expertise to ensure a successful
            and memorable relocation.
          </p>
        </div>
      </div>
    </>
  );
}
