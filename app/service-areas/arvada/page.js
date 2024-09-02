import Image from "next/image";
import Link from "next/link";
import arvadaImage from "../../../public/media/movers.jpg";
import moving1 from "../../../public/media/moving-4.jpg";
import moving2 from "../../../public/media/moving-3.jpg";
import moving3 from "../../../public/media/moving-6.jpg";
import {
  BriefcaseIcon,
  ChatBubbleBottomCenterTextIcon,
  ChevronRightIcon,
  DocumentTextIcon,
  HeartIcon,
  HomeIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import ContactForm from "../../../components/ContactForm";
import BookingProcess from "../../../components/BookingProcess";
import FAQ from "./FAQ";
import Cards from "../../../components/ServiceAreasCards";
import Navbar from "../../../components/Navbar";

export const metadata = {
  title: "Movers in Arvada CO: Top Moving Company in Colorado",
  description:
    "Looking for reliable movers in Arvada, CO? Our full-service moving company offers local, long-distance, and specialty moving services. Get tips on reducing costs and learn how to choose the best movers. Contact us for a free quote today!",
};

const features = [
  {
    name: "Professionalism",
    description:
      "Our movers are courteous, punctual, and dedicated to providing excellent service.",
    icon: UserGroupIcon,
  },
  {
    name: "Experience",
    description:
      "Years of experience in the industry ensure that we handle all aspects of the move professionally.",
    icon: BriefcaseIcon,
  },
  {
    name: "Customer-Centric Approach",
    description:
      "We prioritize customer satisfaction, tailoring our services to meet individual needs.",
    icon: HeartIcon,
  },
];

const featuresTwo = [
  {
    name: "Check Reviews and References",
    description: "Look for consistent positive feedback and specific praises.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Verify Licenses and Insurance",
    description:
      "Ensure the company is licensed and insured for peace of mind.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Get Detailed Estimates",
    description:
      "Request a comprehensive quote to avoid hidden fees and understand the scope of the relocation services offered.",
    icon: DocumentTextIcon,
  },
];

const stats = [
  { name: "Years of Experience", value: "8+" },
  { name: "Moves Completed", value: "1200+" },
  { name: "Customers Happy", value: "100%" },
  { name: "Claim Rate", value: "0%" },
];

export default function Arvada() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center py-5 px-5 md:px-10 z-1 relative max-lg:overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <section id="arvada" className="mt-5 sm:mt-10 mb-10">
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
                        href="/service-areas/arvada"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Arvada
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Movers in Arvada CO: Top Moving Company in Colorado
              </h1>
            </div>

            <div className="mx-auto grid grid-cols-1 gap-x-8 lg:mx-0 lg:grid-cols-2 lg:items-start mt-10 sm:mt-20">
              <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <Image
                  alt="movers"
                  src={arvadaImage}
                  placeholder="blur"
                  className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                />
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
                <div className="lg:pr-4">
                  <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Professional Arvada Moving Services
                      </h2>
                    </div>
                  </div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg mt-6">
                    <p>
                      Moving can be one of the most stressful events in life. I
                      remember when I first moved to Arvada, CO; I was
                      overwhelmed by the sheer amount of planning and
                      coordination it required. Fortunately, with the help of
                      fantastic moving services, the process was smoother than I
                      could have imagined. This experience is why I always
                      emphasize the importance of choosing the right movers. A
                      reliable moving company can make all the difference,
                      transforming a potentially chaotic situation into a
                      seamless and even enjoyable transition.
                    </p>
                    <p className="mt-6">
                      When I talk to people about moving, I often hear stories
                      of "mover nightmares"—broken belongings, hidden fees, and
                      unprofessional behavior. These horror stories make finding
                      a trustworthy mover even more critical. But don't worry,
                      I've got you covered! In this guide, I'll share everything
                      you need to know about finding the best movers in Arvada,
                      CO, and ensuring your move is as stress-free as possible.
                    </p>
                    <p className="mt-6">
                      Let's explore the qualities that make a moving company
                      stand out and how to prepare for a successful move. From
                      understanding the range of services offered to knowing the
                      right questions to ask, this guide will equip you with all
                      the information you need to make an informed decision when
                      it is time to hire. Whether you're moving across town or
                      across the state, you'll find valuable and friendly
                      insights and tips to help you every step of the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <div className="mt-10">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Moving Company in Arvada, Colorado: Services Offered
                  </h3>
                  <p className="mt-4 leading-6 text-gray-600">
                    Our moving services in{" "}
                    <Link
                      href="https://www.arvadaco.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Arvada, Colorado
                    </Link>
                    , offers a wide range of services tailored to meet the
                    unique needs of each customer. Whether you're moving locally
                    or long-distance, we have the expertise and resources to
                    handle your move efficiently. Here’s a breakdown of the
                    services we offer:
                  </p>
                </div>
                <Cards />
              </div>

              <div className="mt-10 sm:mt-20">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Quality Movers and Relocation Services Near You
                  </h3>
                  <p className="mt-4 leading-6 text-gray-600">
                    Choosing quality movers is{" "}
                    <i>crucial for a successful move</i>. Our team is trained to
                    handle all types of moves with precision and care. Here are
                    a few reasons why our services stand out:
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
                  Exploring Arvada, CO: A Community on the Move
                </h2>
                <p className="text-base leading-7 text-gray-700 mt-6">
                  Arvada, Colorado, is a vibrant city located just northwest of
                  Denver. Known for its rich history and picturesque landscapes,
                  Arvada offers a unique blend of small-town charm and modern
                  amenities. The city is home to the beautiful{" "}
                  <Link
                    href="http://www.oldetownarvada.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link"
                  >
                    Olde Town Arvada
                  </Link>
                  , a historic district filled with quaint shops, restaurants,
                  and cultural events. It's also known for its strong community
                  spirit and active lifestyle, with numerous parks and trails
                  perfect for outdoor enthusiasts. Whether you're a long-time
                  resident or new to the area, there's always something to
                  explore and enjoy in Arvada.
                </p>
              </div>

              <div className="overflow-hidden bg-white mt-10 sm:mt-20">
                <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:grid-cols-2">
                  <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                    <div>
                      <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Finding The Best Mover In Arvada, Colorado: Tips and
                        Tricks
                      </h3>
                      <p className="mt-6 text-lg leading-8 text-gray-600">
                        Finding the right{" "}
                        <Link
                          href="https://greenmtnmovers.com/areas-served"
                          className="custom-link"
                        >
                          Arvada movers
                        </Link>{" "}
                        can be daunting, but these tips can help you make an
                        informed decision:
                      </p>
                      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                        {featuresTwo.map((feature) => (
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
            </div>

            <div className="mt-10 sm:mt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Local Residents Benefit from Professional Residential Movers
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                For residents of Arvada, CO, moving services are a valuable
                resource. The city’s growth and the influx of new residents have
                made moving a common necessity. Local movers are well-acquainted
                with the area's layout, traffic patterns, and community
                regulations, making the moving process more efficient and less
                stressful. Whether you're relocating within the city or moving
                to a nearby area, having a professional moving team can save you
                time and effort, allowing you to focus on settling into your new
                home and enjoying all that Arvada has to offer.
              </p>
            </div>

            <div className="mx-auto grid grid-cols-1 gap-x-8 lg:mx-0 lg:grid-cols-2 lg:items-start mt-10 sm:mt-20">
              <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <Image
                  alt="movers moving boxes"
                  src={moving1}
                  placeholder="blur"
                  className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                />
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
                <div className="lg:pr-4">
                  <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Why Choose Our Acclaimed Arvada Movers?
                      </h2>
                    </div>
                  </div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg mt-6">
                    <p>
                      When searching for movers in Arvada, CO, you’ll come
                      across many options. However, not all Arvada moving
                      companies are created equal. Our movers stand out for
                      several reasons, and I’d like to share a story that
                      perfectly illustrates why.
                    </p>
                    <p className="mt-6">
                      A friend of mine recently moved into a new home in Arvada
                      and was understandably anxious about the process. They had
                      several delicate items, including a cherished family
                      heirloom—a large, antique mirror. The moving crew not only
                      handled the mirror with the utmost care, wrapping it
                      securely, but they also went above and beyond by carefully
                      positioning it in the new home to avoid any risk of
                      damage. This attention to detail and respect for personal
                      belongings is a hallmark of our service and why so many of
                      our happy customers recommend our moving services.
                    </p>
                    <p className="mt-6">
                      What makes our movers exceptional? It’s not just the
                      ability to transport items from point A to point B. It’s
                      about providing peace of mind. From the initial
                      consultation to the final delivery, our team is committed
                      to making the moving experience as smooth and stress-free
                      as possible. We offer a full range of services, including
                      packing, unpacking, and even furniture assembly, so you
                      don’t have to worry about a thing. Plus, we provide a free
                      estimate for all our services, ensuring transparency and
                      no hidden costs.
                    </p>
                    <p className="mt-6">
                      But don’t just take my word for it. Many customers have
                      shared their experiences, highlighting the
                      professionalism, efficiency, and friendliness of our team.
                      One customer mentioned how relieved they felt after hiring
                      our movers, especially after a previous bad experience
                      with another company. This sense of relief and
                      satisfaction is something we aim to deliver with every
                      move.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <FAQ />

            <div className="mx-auto grid grid-cols-1 items-start gap-x-8 gap-y-16 lg:mx-0 lg:grid-cols-2 mt-10 sm:mt-20">
              <div className="lg:pr-4">
                <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                  <Image
                    alt="movers doing moving things"
                    src={moving2}
                    placeholder="blur"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply" />
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
                        “Green Mountain Movers were the best moving company I've
                        utilized for a local move in the last 17 years. The
                        staff were friendly over the phone and helped us get our
                        extremely reasonable quote to make the decision to hire
                        the company. Our movers wore masks for us given the
                        disability in the family. They were kind, caring, and
                        great to work with. Definitely worth the 5-star rating
                        and I'd honestly give more if it was possible. Do
                        yourself a favor and hire Green Mountain Movers for your
                        next move in the Denver area.”
                      </p>
                    </blockquote>
                  </figure>
                </div>
                <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
                  {stats.map((stat, statIdx) => (
                    <div
                      key={statIdx}
                      className="flex flex-col justify-between"
                    >
                      <dt className="text-sm font-semibold leading-6 text-gray-600">
                        {stat.name}
                      </dt>
                      <dd className="text-3xl font-bold leading-10 tracking-tight text-gray-900">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <div className="text-base leading-7 text-gray-700">
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Professional Arvada Moving Services
                  </h2>
                  <div>
                    <p className="mt-6">
                      One of the most significant advantages of hiring a
                      full-service moving company is the comprehensive care and
                      attention given to every aspect of your move. When you
                      choose full-service movers in Arvada, CO, you’re not just
                      hiring people to transport your belongings; you're gaining
                      a team of professionals dedicated to making your move as
                      smooth as possible.
                    </p>
                    <p className="mt-6">
                      Imagine this: It's moving day, and instead of the usual
                      chaos, you find a well-organized team already at work.
                      They arrive on time, equipped with all the necessary tools
                      and packing materials. From the smallest knick-knacks to
                      large furniture pieces, everything is handled with the
                      utmost care. Our movers meticulously pack each item,
                      ensuring it's protected for the journey. They use
                      high-quality packing materials, including padded blankets
                      for furniture and special boxes for fragile items, so
                      nothing is left to chance.
                    </p>
                    <p className="mt-6">
                      One customer recently shared their experience of moving
                      with a full-service package. They were moving their
                      elderly parents into a smaller home and were concerned
                      about the stress it might cause. Our team took care of
                      everything—from packing up decades' worth of belongings to
                      setting up the new home just the way the parents wanted.
                      The family was overjoyed with how easy and stress-free the
                      process was, thanks to the movers' professionalism and
                      attention to detail.
                    </p>
                    <p className="mt-6">
                      Full-service movers also offer additional services like
                      furniture assembly and disassembly, which can be a huge
                      relief. No more worrying about how to take apart that
                      bulky bed frame or reassemble it correctly in the new
                      place. We handle it all, so you can focus on settling into
                      your new home.
                    </p>
                    <p className="mt-6">
                      In summary, when you opt for full-service movers, you’re
                      investing in a hassle-free moving experience. From packing
                      and loading to transportation and unpacking, every step is
                      handled with care and expertise. It’s not just about
                      moving your stuff; it’s about moving your life with
                      minimal disruption.
                    </p>
                  </div>
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
                Top Attractions in Arvada
              </h2>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Olde Town Arvada
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    A charming historic district featuring a variety of shops,
                    restaurants, and cultural events. It's the perfect place for
                    a leisurely stroll or a day of shopping.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Arvada Center for the Arts and Humanities
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    A cultural hub offering theater performances, art
                    exhibitions, and educational programs. It's a great place to
                    experience the local arts scene. Visit the{" "}
                    <Link
                      href="http://www.arvadacenter.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Arvada Center
                    </Link>{" "}
                    today!
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Apex Center
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    The{" "}
                    <Link
                      href="https://maps.app.goo.gl/BUmrKDs1iz6VNjEf8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Apex Center
                    </Link>{" "}
                    is a state-of-the-art recreational facility with pools, ice
                    rinks, fitness classes, and more. Ideal for families and
                    fitness enthusiasts.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Majestic View Nature Center & Park
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <Link
                      href="https://maps.app.goo.gl/Y9h1BpA7eFUVGHKZ9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      This park
                    </Link>{" "}
                    offers beautiful views, walking trails, and educational
                    programs about local wildlife and conservation efforts.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Cussler Museum
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    A unique museum featuring a collection of rare and classic
                    cars owned by author Clive Cussler. A must-visit for car
                    enthusiasts. Visit the{" "}
                    <Link
                      href="http://www.cusslermuseum.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Cussler Museum
                    </Link>{" "}
                    today!
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Ralston Central Park
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <Link
                      href="https://maps.app.goo.gl/jnHsgctK73Pz5nAo8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      A popular park
                    </Link>{" "}
                    with a splash pad, playgrounds, picnic areas, and walking
                    paths. Great for families and outdoor activities.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Indian Tree Golf Club
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    A well-maintained golf course offering a challenging round
                    of golf with beautiful mountain views. Tee off at{" "}
                    <Link
                      href="http://www.indiantree.apexprd.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Indian Tree Golf Club
                    </Link>{" "}
                    soon!
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Red Rocks Community College
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    A{" "}
                    <Link
                      href="http://www.rrcc.edu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      reputable educational institution
                    </Link>{" "}
                    offering a variety of degree programs and continuing
                    education courses.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    The Bluegrass Lounge
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    A popular local spot known for its extensive whiskey
                    selection and live{" "}
                    <Link
                      href="http://www.bluegrasslounge.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      bluegrass music
                    </Link>
                    . Perfect for a relaxed night out.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Two Ponds National Wildlife Refuge
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    A serene natural area offering trails, birdwatching, and
                    environmental education programs.{" "}
                    <Link
                      href="http://www.fws.gov/refuge/two_ponds"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Two Ponds National Wildlife Refuge
                    </Link>{" "}
                    is a hidden gem for nature lovers.
                  </dd>
                </div>
              </dl>
            </div>
            <p className="mt-6 leading-6 text-gray-600">
              These attractions highlight the diverse and vibrant community of
              Arvada, making it a wonderful place to live and explore. Whether
              you're new to the area or a longtime resident, these spots offer
              something for everyone. And if you're planning a move within or to
              Arvada, our professional movers are here to help you get settled
              quickly and efficiently so you can start enjoying all the city has
              to offer.
            </p>
          </div>

          <div className="mt-10 sm:mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Local Movers are Here to Help
            </h2>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Ready to make your move in Arvada, CO? Contact us today for a
              free, no-obligation quote and experience a stress-free move with
              our professional team. Let us take the hassle out of moving so you
              can focus on settling into your new home. You may also be
              interested in seeing our services for the neighboring community of{" "}
              <Link
                href="https://greenmtnmovers.com/service-areas/aurora"
                className="custom-link"
              >
                Aurora CO
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
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Arvada,%20CO&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
