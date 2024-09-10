import Image from "next/image";
import Link from "next/link";
import moving from "../../../public/media/moving-6.jpg";
import moving3 from "../../../public/media/moving-8.jpg";
import {
  AdjustmentsHorizontalIcon,
  BriefcaseIcon,
  ChevronRightIcon,
  HandThumbUpIcon,
  HomeIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";
import ContactForm from "../../../components/ContactForm";
import BookingProcess from "../../../components/BookingProcess";
import Cards from "../../../components/ServiceAreasCards";
import Navbar from "../../../components/Navbar";

export const metadata = {
  title:
    "Movers in Breckenridge CO - Reliable Moving Company and Trusted Moving Services for Your Next Move | Colorado Mover",
  description:
    "Looking for reliable movers in Breckenridge, CO? Our top-rated moving company offers comprehensive residential and commercial services tailored to your needs. Contact us today for a stress-free move!",
};

const features = [
  {
    name: "Local Expertise",
    description:
      "We know Breckenridge inside and out, from the winding roads to the weather patterns. Our local knowledge ensures your move is handled with precision and care.",
    icon: MapPinIcon,
  },
  {
    name: "Personalized Service",
    description:
      "We understand that every move is different. That’s why we offer tailored moving plans to fit your specific needs, whether you’re moving a few blocks away or across the country.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "Experienced Team",
    description:
      "Our top Breckenridge team of professional movers has years of experience handling everything from delicate heirlooms to heavy furniture. We’re trained to ensure your belongings are safe and secure throughout the move.",
    icon: BriefcaseIcon,
  },
  {
    name: "Customer Satisfaction",
    description:
      "We’re proud of our reputation for providing top-notch service. Our customers consistently recommend us for our reliability, efficiency, and friendly approach.",
    icon: HandThumbUpIcon,
  },
];

const featuresTwo = [
  {
    name: "Residential Moving: Your Home, Moved with Care by Reliable Movers",
    description: (
      <>
        <p className="text-base leading-7 text-gray-700 mt-6">
          Home is where the heart is, and we know how important it is to protect
          what matters most. At Green Mountain Movers, we treat your home and
          belongings with the respect they deserve. Our{" "}
          <Link
            href="https://greenmtnmovers.com/areas-served"
            className="custom-link"
          >
            Breckenridge movers
          </Link>{" "}
          are trained to handle everything from delicate heirlooms to bulky
          furniture, ensuring that everything arrives safely at your new home.
        </p>
        <p className="text-base leading-7 text-gray-700 mt-6">
          Imagine moving your family to a new house in Breckenridge. You’ve
          found the perfect place, but the thought of transporting all your
          belongings—especially that heavy, antique dining table—feels daunting.
          That’s where we come in. We’ll carefully pack and transport
          everything, so you can focus on creating new memories in your new
          home.
        </p>
        <p className="text-base leading-7 text-gray-700 mt-6">
          Our residential moving services are designed to make your transition
          as smooth as possible. We offer packing and unpacking services, so you
          don’t have to lift a finger. And with our local expertise, we know the
          best routes to get your belongings to your new home quickly and
          safely.
        </p>
      </>
    ),
  },
  {
    name: "Commercial Moving: Efficient and Reliable Breckenridge Moving Services",
    description: (
      <>
        <p className="text-base leading-7 text-gray-700 mt-6">
          Moving a business is no small task, and we understand the challenges
          that come with it. At Green Mountain Movers, we specialize in
          commercial moves that minimize disruption and keep your business
          running smoothly.
        </p>
        <p className="text-base leading-7 text-gray-700 mt-6">
          Whether you’re upgrading to a larger office space or relocating your
          storefront, we’ll work with you to create a customized moving plan
          that fits your needs. We know that every minute counts when it comes
          to business, so we focus on efficiency and reliability.
        </p>
        <p className="text-base leading-7 text-gray-700 mt-6">
          Our team is equipped to handle everything from office furniture to
          specialized equipment. We coordinate every aspect of the move so you
          can focus on what you do best—running your business. With our
          knowledge of Breckenridge, we’ll ensure your move is completed on time
          with minimal downtime.
        </p>
      </>
    ),
  },
  {
    name: "Local Moves in Breckenridge Colorado: Your Neighborhood Moving Experts",
    description: (
      <>
        <p className="text-base leading-7 text-gray-700 mt-6">
          Living and working in Breckenridge gives us a unique advantage when it
          comes to local moves. We’re not just familiar with the area; we’re a
          part of the community. We know the streets, the neighborhoods, and the
          people, which allows us to offer a level of service that out-of-town
          movers simply can’t match.
        </p>
        <p className="text-base leading-7 text-gray-700 mt-6">
          Whether you’re moving a few blocks away or across town, our local
          moving services are designed to meet your specific needs. We’ll handle
          the logistics, so you can focus on settling into your new home. And
          because we know Breckenridge, we’re able to navigate the challenges
          that come with moving in this beautiful mountain town.
        </p>
        <p className="text-base leading-7 text-gray-700 mt-6">
          From the narrow roads in historic downtown to the steep driveways in
          the hills, we’ve seen it all. Our local expertise means that your move
          will be handled with precision and care, ensuring a stress-free
          experience.
        </p>
      </>
    ),
  },
  {
    name: "Long-Distance Moving: From Breckenridge to Anywhere You Need to Go",
    description: (
      <>
        <p className="text-base leading-7 text-gray-700 mt-6">
          Long-distance moves require a different level of planning and
          coordination, and at Green Mountain Movers, we’ve mastered the
          process. Whether you’re moving out of Breckenridge or relocating to
          our beautiful town, we’re here to make the journey as smooth as
          possible.
        </p>
        <p className="text-base leading-7 text-gray-700 mt-6">
          We understand that a long-distance move can be overwhelming. You’re
          not just moving your belongings; you’re starting a new chapter in a
          new place. That’s why we take care of the details, from packing to
          transportation, so you can focus on the excitement of your new
          adventure.
        </p>
        <p className="text-base leading-7 text-gray-700 mt-6">
          Our team is experienced in handling long-distance moves, and we’re
          committed to ensuring that your belongings arrive safely and on time.
          We’ll work with you to create a customized moving plan that fits your
          needs and schedule, so you can rest easy knowing that everything is
          taken care of.
        </p>
      </>
    ),
  },
];

export default function Breckenridge() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center py-5 px-5 md:px-10 z-1 relative max-lg:overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <section id="breckenridge" className="mt-5 sm:mt-10 mb-10">
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
                        href="/areas-served/breckenridge"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Breckenridge
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Movers in Breckenridge CO - Reliable Moving Company and Trusted
                Moving Services for Your Next Move | Colorado Mover
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
                        Introduction to Breckenridge Movers
                      </h2>
                    </div>
                  </div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg mt-6">
                    <p>
                      Moving is one of those life events that can bring a mix of
                      excitement and anxiety. I remember the first time I moved
                      to Breckenridge—nestled in the heart of the Rockies,
                      surrounded by breathtaking views, yet I found myself
                      overwhelmed by the sheer logistics of it all. The
                      mountains, though beautiful, seemed to mock the challenge
                      of navigating narrow roads with a fully loaded truck.
                      That’s when I realized the difference a reliable moving
                      company can make.
                    </p>
                    <p className="mt-6">
                      At Green Mountain Movers, we’ve been helping families and
                      businesses in{" "}
                      <Link
                        href="https://maps.app.goo.gl/LjJ84K4T5ypAE8oD7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-link"
                      >
                        Breckenridge, CO
                      </Link>
                      , move with ease for years. We understand that each move
                      is unique, whether it’s a cozy cabin near the slopes or a
                      bustling downtown office. Our movers breckenridge team is
                      committed to making your move as smooth as possible, so
                      you can focus on what really matters—settling into your
                      new home or workspace.
                    </p>
                    <p className="mt-6">
                      When you choose our professional moving team, you’re not
                      just hiring a moving company; you’re partnering with
                      experts who know Breckenridge like the back of their
                      hands. We’ve tackled every challenge this mountain town
                      has to offer, and{" "}
                      <i>
                        we’re here to ensure your move is as stress-free as
                        possible
                      </i>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Comprehensive Moving and Removal Services Tailored to Your
                  Needs
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  We offer a wide range of services designed to meet all your
                  moving needs. Whether you’re relocating within Breckenridge
                  Colorado or moving to a new state, we have the expertise and
                  resources to get the job done right. Here’s what we offer:
                </p>
                <Cards />
                <p className="mt-10 leading-6 text-gray-600">
                  Each of these services is designed to provide you with a
                  comprehensive Breckenridge moving solution. Whatever your
                  needs,{" "}
                  <i>
                    our reliable movers are here to help make your move as easy
                    as possible
                  </i>
                  .
                </p>
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <div>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                  {featuresTwo.map((feature) => (
                    <div key={feature.name} className="flex flex-col">
                      <dt className="text-2xl font-bold tracking-tight text-gray-900">
                        <h3>{feature.name}</h3>
                      </dt>
                      <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                  <div className="flex flex-col lg:col-span-2">
                    <dt className="text-2xl font-bold tracking-tight text-gray-900">
                      <h3>Packing Services: Let Us Handle the Hard Work</h3>
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="text-base leading-7 text-gray-700 mt-6">
                        Packing is often the most time-consuming and stressful
                        part of any move. But it doesn’t have to be. At Green
                        Mountain Movers, we offer professional packing services
                        that take the hassle out of moving.
                      </p>
                      <p className="text-base leading-7 text-gray-700 mt-6">
                        Imagine this: It’s the night before your move, and
                        instead of scrambling to pack the last of your
                        belongings, you’re enjoying a relaxing evening. That’s
                        because our team has already taken care of everything.
                        We’ll pack your items securely, label everything for
                        easy unpacking, and even provide the packing materials.
                      </p>
                      <p className="text-base leading-7 text-gray-700 mt-6">
                        Our packing services are designed to save you time and
                        stress. Whether you need help with a few fragile items
                        or your entire home, we’ve got you covered. And because
                        we handle the packing, you can be sure that your
                        belongings are protected during the move.
                      </p>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="overflow-hidden bg-white mt-10 sm:mt-20">
              <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:grid-cols-2">
                <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                  <div>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Why Choose Our Professional Moving Company in
                      Breckenridge, CO?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      When you’re planning a move in Breckenridge, you need a
                      Breckenridge mover team that knows the area and
                      understands the unique challenges of mountain living.
                      Here’s why you should choose us:
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
          </section>
        </div>
      </div>
      <BookingProcess />

      <div className="flex justify-center items-center pb-5 px-5 md:px-10 z-1 relative">
        <div className="mx-auto max-w-7xl">
          <div className="mt-10 sm:mt-20">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Discover Breckenridge, CO
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Nestled in the heart of the Colorado Rockies, Breckenridge is
                more than just a ski resort town—it's a community rich in
                history and culture. Founded in 1859 during the gold rush,
                Breckenridge has grown into a year-round destination known for
                its outdoor adventures, charming downtown, and welcoming
                atmosphere. The town is located within the 80424 zip code, which
                covers much of the surrounding area. Whether you’re drawn to the
                breathtaking mountain views or the vibrant local culture, moving
                to Breckenridge offers a unique lifestyle that blends adventure
                with relaxation.
              </p>
            </div>
            <h3 className="mt-10 sm:mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Top Attractions in Breckenridge, CO
            </h3>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Breckenridge Ski Resort
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    As one of the most popular ski destinations in Colorado,{" "}
                    <Link
                      href="https://www.breckenridge.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Breckenridge Ski Resort
                    </Link>{" "}
                    offers over 2,900 acres of skiable terrain across five
                    peaks. Whether you’re a seasoned skier or a beginner, this
                    resort has something for everyone, including lessons,
                    dining, and events.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Main Street
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    The heart of downtown{" "}
                    <Link
                      href="https://www.gobreck.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Main Street Breckenridge
                    </Link>{" "}
                    is lined with historic buildings, boutique shops, and a wide
                    variety of restaurants. It’s the perfect place to stroll,
                    shop, and soak in the local charm.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Breckenridge Distillery
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Known as the world’s highest distillery,{" "}
                    <Link
                      href="https://www.breckenridgedistillery.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Breckenridge Distillery
                    </Link>{" "}
                    offers award-winning spirits and a unique tasting
                    experience. Take a tour to learn about the distillation
                    process and sample some of their finest products.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Barney Ford House Museum
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    The{" "}
                    <Link
                      href="https://maps.app.goo.gl/uQyd8q3pY3rL8LQt8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Barney Ford House Museum
                    </Link>{" "}
                    honors Barney Ford, an escaped slave who became a prominent
                    entrepreneur and civil rights leader in Colorado. The museum
                    is housed in his former home and offers a glimpse into his
                    remarkable life.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Breckenridge Nordic Center
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    If you’re into cross-country skiing or snowshoeing, the{" "}
                    <Link
                      href="https://www.breckenridgenordic.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Breckenridge Nordic Center
                    </Link>{" "}
                    provides groomed trails and stunning mountain views. It’s a
                    great way to explore the outdoors in a more peaceful
                    setting.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Carter Park and Pavilion
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Offering year-round activities,{" "}
                    <Link
                      href="https://www.breckenridgerecreation.com/parks-fields/carter-park-pavilion"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Carter Park and Pavilion
                    </Link>{" "}
                    includes a dog park, sledding hill, and picnic areas. In the
                    summer, it’s a popular spot for hiking and enjoying the
                    scenic views of Breckenridge.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    The Country Boy Mine
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Step back in time at the{" "}
                    <Link
                      href="https://www.countryboymine.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Country Boy Mine
                    </Link>
                    , where you can tour an authentic gold mine and even try
                    your hand at panning for gold. It’s a fun and educational
                    experience for all ages.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Breckenridge Arts District
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    The{" "}
                    <Link
                      href="https://www.breckcreate.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Breckenridge Arts District
                    </Link>{" "}
                    is a cultural hub featuring galleries, studios, and
                    performance spaces, offering a variety of workshops and
                    events throughout the year. It’s the perfect place to
                    explore the local arts scene.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Stephen C. West Ice Arena
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Offering public skating, hockey, and ice-skating lessons,
                    the{" "}
                    <Link
                      href="https://maps.app.goo.gl/UHgRh83hzRA6Z14x6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Stephen C. West Ice Arena
                    </Link>{" "}
                    is a great place to enjoy some indoor fun. It’s open
                    year-round and is a popular spot for both locals and
                    visitors.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10 sm:mt-20">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How Local People Might Benefit from Our Moving Services
              </h3>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Living in Breckenridge means enjoying the beauty of the outdoors
                and the comfort of a close-knit community, but moving here
                presents unique challenges. The mountain terrain and weather
                conditions can make a DIY move difficult, especially during the
                winter months. That’s where Green Mountain Movers comes in. Our
                local expertise allows us to navigate the tricky roads and
                ensure your belongings arrive safely and on time. Whether you’re
                relocating within Breckenridge or moving from afar, our services
                are designed to make your transition as smooth as possible, so
                you can start enjoying everything this beautiful town has to
                offer right away.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                We also work with families in the{" "}
                <Link
                  href="https://greenmtnmovers.com/areas-served/brighton"
                  className="custom-link"
                >
                  Brighton
                </Link>{" "}
                area.
              </p>
            </div>
          </div>

          <div className="mt-10 sm:mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Make Your Move? Contact the Green Mountain Movers Today!
            </h2>
            <p className="text-base leading-7 text-gray-700 mt-4">
              When it’s time to move, you want a team you can trust. Green
              Mountain Movers is here to make your move as stress-free as
              possible. Whether you’re moving across town or across the country,
              we have the expertise and local knowledge to get the job done
              right.
            </p>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Contact us today for a free quote, and let’s start planning your
              move.{" "}
              <i>
                We’re ready to help you take the next step in your journey—let’s
                make it a great one!
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
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Breckenridge,%20CO&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
