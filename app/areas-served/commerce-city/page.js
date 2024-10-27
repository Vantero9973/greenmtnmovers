import Image from "next/image";
import Link from "next/link";
import moving from "../../../public/media/moving-6.jpg";
import {
  AdjustmentsHorizontalIcon,
  ChevronRightIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  CubeIcon,
  CurrencyDollarIcon,
  FaceSmileIcon,
  HandThumbUpIcon,
  HeartIcon,
  HomeIcon,
  ShieldCheckIcon,
  TruckIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/20/solid";
import ContactForm from "../../../components/ContactForm";
import BookingProcess from "../../../components/BookingProcess";
import Cards from "./Cards";
import FAQ from "./FAQ";
import Navbar from "../../../components/Navbar";

export const metadata = {
  title:
    "Movers in Commerce City CO – Trusted Moving Company and Moving Services from Expert Commerce City Movers",
  description:
    "Looking for reliable movers in Commerce City CO? Our professional moving services ensure a stress-free experience, offering local and long-distance moves, packing, furniture assembly, and more. Call today for a free quote!",
};

const features = [
  {
    name: "Expertise in Every Type of Move",
    description:
      "From small apartments to large office relocations, we handle all types of moves with ease and efficiency.",
    icon: TruckIcon,
  },
  {
    name: "Personalized Moving Plans",
    description:
      "Every move is different, and we take the time to create a plan that fits your schedule, budget, and requirements.",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Careful Handling of Belongings",
    description:
      "Our movers treat your items like they’re our own, ensuring everything is packed, transported, and delivered safely.",
    icon: CubeIcon,
  },
  {
    name: "Friendly and Reliable Service",
    description:
      "We know how stressful moving can be, so we’re here to make your experience as pleasant as possible with our friendly and professional team.",
    icon: HandThumbUpIcon,
  },
  {
    name: "Transparent Pricing",
    description:
      "With Green Mountain Movers, there are no hidden fees. You’ll know exactly what to expect from the start.",
    icon: CurrencyDollarIcon,
  },
];

const featuresTwo = [
  {
    name: "Safety and Care",
    description:
      "Moving can be risky, especially when it comes to heavy or fragile items. Our team is trained to handle your belongings with care, reducing the risk of damage during the move.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Efficiency and Time-Saving",
    description:
      "With professional movers, your move is completed faster and more efficiently than if you were to do it on your own. We handle everything from start to finish, allowing you to focus on settling into your new space.",
    icon: ClockIcon,
  },
  {
    name: "Stress-Free Experience",
    description:
      "Moving can be stressful, but it doesn’t have to be. With Green Mountain Movers, you can relax knowing that every detail is being taken care of by experienced professionals.",
    icon: FaceSmileIcon,
  },
  {
    name: "Professional Equipment and Expertise",
    description:
      "We have all the right tools and equipment to ensure a smooth move, from dollies to moving blankets. Plus, our team is trained in the best practices for safe and efficient moving.",
    icon: WrenchScrewdriverIcon,
  },
];

const featuresThree = [
  {
    name: "Experienced Team",
    description:
      "Our movers have years of experience and are trained to handle any type of move with care and professionalism.",
    icon: UserGroupIcon,
  },
  {
    name: "Personalized Approach",
    description:
      "We take the time to understand your unique needs and customize our services to meet them.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "Commitment to Customer Satisfaction",
    description:
      "We’re not happy until you’re happy. From start to finish, we make sure every aspect of your move goes smoothly.",
    icon: HeartIcon,
  },
];

export default function Columbine() {
  return (
    <>
      <Navbar />
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
                        href="/areas-served/commerce-city"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Commerce City
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Movers in Commerce City CO – Trusted Moving Company and Moving
                Services from Expert Commerce City Movers
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
                        Introduction to Commerce City Movers
                      </h2>
                    </div>
                  </div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg mt-6">
                    <p>
                      Moving can feel overwhelming, but we’re here to make the
                      process smooth and stress-free with Green Mountain Movers.
                      As your trusted moving company in Commerce City, we know
                      that every move comes with its own set of challenges,
                      whether it’s navigating narrow streets or managing a busy
                      schedule. That’s why we offer personalized moving services
                      to fit your needs, ensuring that every step of your
                      journey is handled with care. From local moves within
                      Commerce City to long-distance relocations, our goal is to
                      take the weight off your shoulders—literally and
                      figuratively.
                    </p>
                    <p className="mt-6">
                      Our experienced team of{" "}
                      <Link
                        href="https://greenmtnmovers.com/areas-served"
                        className="custom-link"
                      >
                        Commerce City movers
                      </Link>{" "}
                      brings a personal touch to every move, treating your
                      belongings as if they were our own. We handle everything
                      from packing your delicate items to safely transporting
                      your heavy furniture. With Green Mountain Movers, you can
                      rest easy knowing that every detail is covered. Whether
                      you’re providing residential or commercial moving needs,
                      we’re here to make sure your transition is as seamless as
                      possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-14">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Why Choose Our Commerce City Movers for Your Residential
                  Moving Needs?
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  Choosing the right movers can make all the difference in your
                  moving experience. At Green Mountain Movers, we pride
                  ourselves on delivering exceptional service tailored to meet
                  your needs. As a Commerce City moving company with a
                  reputation for reliability, we offer everything from
                  residential moving to long-distance relocations, ensuring your
                  belongings are handled with the utmost care.
                </p>
                <p className="mt-4 leading-6 text-gray-600">
                  <i>
                    Here’s why families and businesses in Commerce City trust us
                    with their moves:
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
              <p className="mt-4 leading-6 text-gray-600">
                When you choose us,{" "}
                <i>you’re choosing movers who care about your peace of mind</i>.
                From the first box we pack to the last piece of furniture we
                unload, your satisfaction is our top priority.
              </p>
            </div>

            <div className="mt-10 sm:mt-20">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Comprehensive Moving Services in Commerce City Colorado
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  At Green Mountain Movers, we offer a full range of moving
                  services designed to make your move as efficient and
                  stress-free as possible. Here’s what we provide:
                </p>
                <Cards />
              </div>
            </div>

            <div className="mt-10 sm:mt-14">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Benefits of Hiring Our Commerce City Moving Company
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  Hiring professional movers isn’t just about convenience—it’s
                  about peace of mind. Here are some key benefits of choosing
                  Green Mountain Movers:
                </p>
              </div>
              <div className="mt-6">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
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
              <p className="mt-4 leading-6 text-gray-600">
                When you hire Green Mountain Movers, you’re not just hiring a
                moving company—you’re hiring peace of mind.
              </p>
            </div>

            <div className="mt-10 sm:mt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Tailored Moving Solutions for Every Need
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                At Green Mountain Movers, we believe that no two moves are
                alike. That’s why we offer tailored moving solutions to meet
                your specific needs. Whether you’re moving a small apartment or
                a large office, we create a personalized plan that works for
                you.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-4">
                For some, that might mean full-service packing and unpacking.
                For others, it’s simply labor help with the heavy lifting. No
                matter what you need, we have the flexibility to accommodate.
                And with our attention to detail, you can trust that everything
                will go according to plan.
              </p>
            </div>

            <div className="mt-10 sm:mt-14">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  What Makes Our Movers in Commerce City Unique?
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  Our commitment to personalized service and customer
                  satisfaction sets us apart from other moving companies in
                  Commerce City. We understand that moving can be one of the
                  most stressful life events, and our goal is to take the stress
                  out of it. Here’s what makes us different:
                </p>
              </div>
              <div className="mt-6">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
                  {featuresThree.map((feature) => (
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
              <p className="mt-4 leading-6 text-gray-600">
                With Green Mountain Movers, you’re not just another
                customer—you’re part of our community.
              </p>
            </div>

            <div className="mt-10 sm:mt-20">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Learn More About Commerce City, CO
              </h3>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Commerce City, CO, is a thriving community located just
                northeast of downtown Denver, known for its blend of suburban
                charm and industrial roots. As one of Colorado’s fastest-growing
                cities, it offers a dynamic environment for both residents and
                businesses. With a population of over 60,000 people, Commerce
                City is home to multiple parks, recreational centers, and a rich
                cultural history.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                The city primarily serves the zip codes 80022 and 80037, making
                it an ideal place for those looking for both convenience and
                community. Whether you’re moving within the city or relocating
                from outside, the ease of access to major highways like I-270
                and I-76 ensures that moving to or from Commerce City is
                hassle-free.
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
                How Local Residents Can Benefit from Our Services
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                With Commerce City’s rapid growth, many residents are taking
                advantage of the expanding job market, new housing developments,
                and local amenities. Whether you're upgrading to a larger home
                or downsizing for a more minimalist lifestyle, moving can be an
                overwhelming process. That’s where our movers in Commerce City
                CO come in.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                We provide customized moving solutions that cater to the
                specific needs of local residents, ensuring your transition is
                as seamless as possible. Whether you're moving a family,
                relocating your business, or even moving closer to one of
                Commerce City's many parks or attractions, we’ve got you
                covered.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                We also work with families in the{" "}
                <Link
                  href="https://www.greenmtnmovers.com/areas-served/denver"
                  className="custom-link"
                >
                  Denver
                </Link>{" "}
                area.
              </p>
            </div>
            <h3 className="mt-10 sm:mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Top Attractions in Commerce City, CO
            </h3>
            <p className="text-base leading-7 text-gray-700 mt-6">
              Commerce City offers a variety of attractions that make it an
              exciting place to live and explore. Here are some of the top spots
              you’ll want to visit:
            </p>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Dick's Sporting Goods Park
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Home to the Colorado Rapids, this massive stadium is a
                    hotspot for soccer fans and concertgoers alike. With a
                    seating capacity of over 18,000, it’s a hub for major
                    sporting events and entertainment. Learn more about{" "}
                    <Link
                      href="https://www.dickssportinggoodspark.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Dick's Sporting Goods Park
                    </Link>
                    .
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Rocky Mountain Arsenal National Wildlife Refuge
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Once a chemical weapons manufacturing site, this area has
                    been transformed into a 15,000-acre wildlife refuge. It’s
                    home to bison, deer, and a variety of bird species, offering
                    an oasis of nature right in the middle of Commerce City.
                    Find out more about the{" "}
                    <Link
                      href="https://maps.app.goo.gl/yWt8mVdN6YU8Eiti7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Rocky Mountain Arsenal National Wildlife Refuge
                    </Link>
                    .
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Buffalo Run Golf Course
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    If you’re a golf enthusiast, you’ll enjoy this stunning
                    18-hole championship course.{" "}
                    <Link
                      href="https://www.buffalorungolfcourse.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Buffalo Run
                    </Link>{" "}
                    offers scenic views and challenging play for golfers of all
                    levels.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Commerce City Civic Center
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    The heart of local government, the{" "}
                    <Link
                      href="https://www.c3gov.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Civic Center
                    </Link>{" "}
                    is where you’ll find city offices, public services, and
                    community events. It’s a great place to learn more about the
                    city’s initiatives and development projects.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Pioneer Park
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <Link
                      href="https://maps.app.goo.gl/jRemtHSC3dhUCXf28"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Pioneer Park
                    </Link>{" "}
                    is the perfect spot for family outings and outdoor
                    activities. The park features playgrounds, sports fields,
                    and a splash pad during the summer months. Explore more
                    about Pioneer Park.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Bison Grill
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Located within the Buffalo Run Golf Course, this restaurant
                    is highly rated for its American cuisine, making it a
                    popular spot for both golfers and non-golfers alike. Enjoy a
                    delicious meal at the{" "}
                    <Link
                      href="https://maps.app.goo.gl/nbqE1LW59jrTHirV9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Bison Grill
                    </Link>
                    .
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Colorado Air and Space Port
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Located just outside Commerce City, this facility is
                    dedicated to aerospace innovation and is a must-visit for
                    those interested in the future of space travel. Learn more
                    about the{" "}
                    <Link
                      href="https://www.coloradoairandspaceport.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Colorado Air and Space Port
                    </Link>
                    .
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-10 sm:mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Schedule Your Move with Trusted Commerce City Movers Today
            </h2>
            <p className="text-base leading-7 text-gray-700 mt-4">
              If you’re ready to make your move within Commerce City Colorado or
              across the country, Green Mountain Movers is here to help. Contact
              us today to get a free quote from a trusted Commerce City moving
              company and ensure your move is seamless.
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
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Commerce%20City,%20CO&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
