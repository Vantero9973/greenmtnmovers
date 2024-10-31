import Image from "next/image";
import Link from "next/link";
import moving from "../../../public/media/stock6.jpg";
import moving2 from "../../../public/media/moving-1.jpg";
import moving3 from "../../../public/media/moving-8.jpg";
import {
  AdjustmentsHorizontalIcon,
  ChatBubbleBottomCenterTextIcon,
  ChevronRightIcon,
  ClockIcon,
  CurrencyDollarIcon,
  EyeIcon,
  HeartIcon,
  HomeIcon,
  HomeModernIcon,
  ShieldCheckIcon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import ContactForm from "../../../components/ContactForm";
import BookingProcess from "../../../components/BookingProcess";
import Cards from "./Cards";
import FAQ from "./FAQ";

export const metadata = {
  title:
    "Movers in Castle Pines CO - Your Trusted Mover and Moving Company for Comprehensive Moving Services in Colorado",
  description:
    "Looking for expert movers in Castle Pines, CO? Our top-rated moving company offers local and long-distance moving, furniture assembly, and more. Get a free quote today!",
};

const features = [
  {
    name: "Experienced and Professional Team",
    description: (
      <span>
        Our{" "}
        <Link
          href="https://www.greenmtnmovers.com/areas-served"
          className="custom-link"
        >
          Castle Pines movers
        </Link>{" "}
        are highly trained and experienced, ensuring your belongings are handled
        with the utmost care.
      </span>
    ),
    icon: UserGroupIcon,
  },
  {
    name: "Customized Moving Solutions",
    description:
      "We offer tailored moving plans that fit your specific needs, whether you’re moving locally or long-distance.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "Efficiency and Reliability",
    description:
      "We value your time and work efficiently to make sure your move is completed on schedule without compromising on quality.",
    icon: ClockIcon,
  },
  {
    name: "Transparent Pricing",
    description:
      "No hidden fees or surprises—just honest, straightforward pricing that you can count on.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Comprehensive Services",
    description:
      "From packing and furniture assembly to junk hauling and heavy furniture moving, we offer a full range of moving services in Castle Pines to meet all your moving needs.",
    icon: TruckIcon,
  },
];

const featuresTwo = [
  {
    name: "Commitment to Customer Satisfaction",
    description:
      "We pride ourselves on delivering top-notch service that leaves our customers happy and stress-free.",
    icon: HeartIcon,
  },
  {
    name: "Attention to Detail",
    description:
      "We handle every aspect of your move with care, ensuring that even the smallest details are taken care of.",
    icon: EyeIcon,
  },
  {
    name: "Trust and Reliability",
    description:
      "Our reputation is built on trust. We show up on time, work efficiently, and take great care with your belongings.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Positive Feedback",
    description:
      "Our customers consistently leave glowing reviews, praising our professionalism, efficiency, and the overall moving experience.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Community Focus",
    description:
      "As part of the Castle Pines community, we’re committed to serving our neighbors with the highest level of care and respect.",
    icon: HomeModernIcon,
  },
];

export default function CastlePines() {
  return (
    <>
      <div className="flex justify-center items-center py-5 px-5 md:px-10 z-1 relative max-lg:overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <section id="castle-pines" className="mt-5 sm:mt-10 mb-10">
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
                        href="/areas-served/castle-pines"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Castle Pines
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Movers in Castle Pines CO - Your Trusted Mover and Moving
                Company for Comprehensive Moving Services in Colorado
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
                        Introduction to Castle Pines Movers
                      </h2>
                    </div>
                  </div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg mt-6">
                    <p>
                      Moving can be one of life’s most significant transitions,
                      filled with excitement, anticipation, and sometimes a bit
                      of anxiety. I remember the first time I moved to a new
                      city, standing in my living room, surrounded by boxes,
                      feeling both eager and overwhelmed. At that moment, the
                      idea of entrusting my cherished belongings to someone else
                      was daunting. But then, a friend recommended a local
                      moving company that changed everything for me. They
                      handled every item with care, communicated clearly, and
                      made the entire process feel seamless. It’s that very
                      experience that drives us at Green Mountain Movers to
                      provide the same level of care and professionalism to our
                      customers in{" "}
                      <Link
                        href="https://maps.app.goo.gl/1tsPZUreHoLYNpMM7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-link"
                      >
                        Castle Pines, CO
                      </Link>
                      .
                    </p>
                    <p className="mt-6">
                      We know that moving isn’t just about transporting items
                      from one place to another—it’s about starting a new
                      chapter in your life. Whether you’re relocating within the
                      charming community of Castle Pines Colorado or venturing
                      further afield, our mission is to ensure your move in
                      Castle Pines is as smooth and stress-free as possible. We
                      treat your belongings with the same respect we would our
                      own, because we understand that each item, from your
                      grandmother’s heirloom china to your child’s favorite
                      stuffed animal, holds a story.
                    </p>
                    <p className="mt-6">
                      At Green Mountain Movers, we pride ourselves on being more
                      than just a moving company. We’re your neighbors, your
                      friends, and your trusted partners in this journey. With
                      years of experience under our belts, we’ve helped
                      countless families and businesses make their moves with
                      confidence, knowing that their belongings are in good
                      hands.
                    </p>
                    <p className="mt-6">
                      <i>
                        Let us take the weight off your shoulders so you can
                        focus on the exciting opportunities that lie ahead in
                        your new home.
                      </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Residential and Commercial Moving Services
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Moving your home or business requires a different approach, and
                at Green Mountain Movers, we’re equipped to handle both. Whether
                you’re relocating to a new house or moving your office, our team
                understands the unique challenges involved and is ready to
                provide the support you need.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                For residential moves, we know how important it is to make your
                new house feel like home as quickly as possible. Our movers take
                the time to understand your needs and work diligently to ensure
                that every detail is taken care of. From carefully packing your
                fragile items to making sure your furniture is placed exactly
                where you want it, we’re here to make your move as smooth as
                possible.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                When it comes to commercial moves, we understand that time is
                money. That’s why we work efficiently to minimize downtime and
                get your business back up and running as soon as possible. Our
                team is experienced in moving office furniture, equipment, and
                other essential items, and we take great care to ensure
                everything arrives at your new location safely and on time.
              </p>
            </div>

            <div className="overflow-hidden bg-white mt-10 sm:mt-20">
              <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:grid-cols-2">
                <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                  <div>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Why Choose Our Movers in Castle Pines, CO?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      Choosing the right moving company in Castle Pines is
                      crucial to ensuring a smooth and stress-free relocation.
                      At Green Mountain Movers, we understand the unique
                      challenges that come with moving, and we're dedicated to
                      making the process as easy as possible for you.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      <i>Here’s why so many of our customers trust us</i>:
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
                    src={moving2}
                    placeholder="blur"
                    width={2432}
                    height={1442}
                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Comprehensive Moving Services in Castle Pines Colorado
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  At Green Mountain Movers, we offer a full range of moving
                  services designed to meet all your relocation needs. Whether
                  you’re moving locally within Castle Pines, CO, or embarking on
                  a long-distance journey, our team is here to help with every
                  aspect of your move.
                </p>
                <Cards />
              </div>
            </div>

            <FAQ />

            <div className="overflow-hidden bg-white mt-10 sm:mt-20">
              <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:grid-cols-2">
                <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                  <div>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      What Makes Us the Best Moving Company in Castle Pines?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      At Green Mountain Movers, being the best isn’t just about
                      getting the job done—it’s about going above and beyond to
                      provide exceptional service that exceeds your
                      expectations.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      <i>
                        Here’s what sets us apart as the top choice for moving
                        companies in Castle Pines, Colorado:
                      </i>
                    </p>
                    <dl className="mt-10 space-y-8 text-base leading-7 text-gray-600">
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
          </section>
        </div>
      </div>
      <BookingProcess />

      <div className="flex justify-center items-center pb-5 px-5 md:px-10 z-1 relative">
        <div className="mx-auto max-w-7xl">
          <div className="mt-10 sm:mt-20">
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Discover Castle Pines, CO
              </h3>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Nestled in the picturesque foothills of the Rocky Mountains,
                Castle Pines, Colorado, is a vibrant community known for its
                natural beauty, family-friendly atmosphere, and top-rated
                schools. Located in Douglas County, this charming city boasts a
                population of just over 10,000 residents, offering a perfect
                blend of small-town charm and modern amenities.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Castle Pines is served by the 80108 zip code, making it a
                close-knit community where neighbors know each other by name.
                Whether you’re moving to Castle Pines for its beautiful parks,
                excellent schools, or easy access to Denver, our moving services
                are here to make your transition as seamless as possible.
              </p>
            </div>
            <h3 className="mt-10 sm:mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Top Attractions in Castle Pines, CO
            </h3>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Castle Pines Golf Club
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Golf lovers can enjoy a round at the prestigious{" "}
                    <Link
                      href="https://www.castlepinesgolfclub.club/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Castle Pines Golf Club
                    </Link>
                    , renowned for its world-class course and stunning scenery.
                    This club is a hub for several major golf tournaments,
                    offering a challenging experience for golfers of all levels.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    The Ridge at Castle Pines North
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Experience top-tier golfing at{" "}
                    <Link
                      href="https://www.playtheridge.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      The Ridge at Castle Pines North
                    </Link>
                    , a public course known for its rolling fairways and
                    panoramic mountain views. Whether you’re a beginner or a
                    seasoned player, this course offers a premier golfing
                    experience.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Elk Ridge Park
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Spend a day outdoors at{" "}
                    <Link
                      href="https://maps.app.goo.gl/AU6TJfPVYsVQTmZKA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Elk Ridge Park
                    </Link>
                    , a favorite family destination with playgrounds, sports
                    fields, and picnic areas. The park also features extensive
                    walking trails, making it an ideal spot for relaxation and
                    recreation.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Cherokee Ranch & Castle
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Discover the rich history and stunning architecture of{" "}
                    <Link
                      href="https://cherokeeranch.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Cherokee Ranch & Castle
                    </Link>
                    , a historic estate offering tours, events, and panoramic
                    views of the surrounding landscape. It’s a unique cultural
                    attraction that’s not to be missed.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Castle Pines Library
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Visit the{" "}
                    <Link
                      href="https://maps.app.goo.gl/KtSy7bWaC8ELp7R48"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Castle Pines Library
                    </Link>
                    , a modern community hub offering a wide range of books,
                    programs, and events. It’s a welcoming space for learning,
                    exploration, and community engagement.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    The Outlets at Castle Rock
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Just a short drive away,{" "}
                    <Link
                      href="https://www.outletsatcastlerock.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      The Outlets at Castle Rock
                    </Link>{" "}
                    provides a premier shopping experience with a variety of
                    brand-name stores offering great deals. It’s a popular
                    destination for both locals and visitors looking for
                    everything from fashion to home goods.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10 sm:mt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How Locals Benefit from Our Mover Team
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Living in Castle Pines offers many perks, from its serene
                environment to its proximity to larger cities like Denver.
                However, whether you’re moving into this tranquil community or
                relocating within the area, the process can be challenging.
                That’s where we come in. At Green Mountain Movers, we understand
                the unique needs of Castle Pines residents.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Our services are designed to cater specifically to the local
                community, ensuring that your move is efficient, stress-free,
                and customized to fit your lifestyle. Whether you're downsizing
                to enjoy the simpler life or upgrading to a larger home to
                accommodate a growing family, our movers in castle pines are
                here to help you every step of the way.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                We also work with families in the{" "}
                <Link
                  href="https://www.greenmtnmovers.com/areas-served/castle-rock"
                  className="custom-link"
                >
                  Castle Rock
                </Link>{" "}
                area.
              </p>
            </div>
          </div>

          <div className="mt-10 sm:mt-20">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Green Mountain Movers Today for Your Next Move!
            </h3>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Moving doesn’t have to be stressful when you have the right team
              by your side. At Green Mountain Movers, we’re here to make your
              move as easy and hassle-free as possible. Contact us today to
              request a free, no-obligation moving quote.{" "}
              <i>
                Let us take care of the heavy lifting, so you can focus on the
                exciting journey ahead.
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
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Castle%20Pines,%20CO&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
