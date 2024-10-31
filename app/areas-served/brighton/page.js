import Image from "next/image";
import Link from "next/link";
import moving from "../../../public/media/moving-7.jpg";
import moving3 from "../../../public/media/stock6.jpg";
import {
  ChevronRightIcon,
  ClockIcon,
  HomeIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
  HandThumbUpIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import ContactForm from "../../../components/ContactForm";
import BookingProcess from "../../../components/BookingProcess";
import Cards from "./Cards";
import FAQ from "./FAQ";

export const metadata = {
  title:
    "Movers in Brighton CO - Your Trusted Moving Company & Expert Mover Team for Your Needs",
  description:
    "Looking for reliable movers in Brighton, CO? Our professional team offers comprehensive moving services, including long-distance and commercial moves. Get a free quote today!",
};

const features = [
  {
    name: "Trusted Experience",
    description:
      "With years of experience in the moving industry, we know how to handle any situation. Our team is trained to manage every aspect of your household moving, ensuring a smooth process from start to finish.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Personalized Service",
    description:
      "We treat every move as if it were our own. That means understanding your specific needs and tailoring our services to meet them. Whether you need help with packing, heavy lifting, or just advice on the best way to organize your move, we’re here for you.",
    icon: UserCircleIcon,
  },
  {
    name: "Reliable and Punctual",
    description:
      "We understand how valuable your time is. That’s why we pride ourselves on being reliable and punctual, showing up on time and ready to work, so you can stick to your schedule.",
    icon: ClockIcon,
  },
  {
    name: "Community Commitment",
    description:
      "As a locally owned and operated business, we’re committed to serving the Brighton, CO, community. We’re your neighbors, and we care about making sure your move is a positive experience.",
    icon: HomeIcon,
  },
  {
    name: "Safety First",
    description:
      "Moving can be physically demanding and sometimes risky. We take every precaution to ensure the safety of your belongings, your home, and our team. Our movers are trained to handle even the most challenging moves with care and professionalism.",
    icon: ShieldExclamationIcon,
  },
  {
    name: "Customer Satisfaction",
    description:
      "Your satisfaction is our top priority. We go above and beyond to make sure you’re happy with our service, and we’re always here to answer any questions or address any concerns you might have.",
    icon: HandThumbUpIcon,
  },
];

export default function Brighton() {
  return (
    <>
      <div className="flex justify-center items-center py-5 px-5 md:px-10 z-1 relative max-lg:overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <section id="brighton" className="mt-5 sm:mt-10 mb-10">
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
                        href="/areas-served/brighton"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Brighton
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Movers in Brighton CO - Your Trusted Moving Company & Expert
                Mover Team for Your Needs
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
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
                <div className="lg:pr-4">
                  <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Introduction to Brighton Movers
                      </h2>
                    </div>
                  </div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg mt-6">
                    <p>
                      When it comes to moving, we've all heard the stories.
                      Friends and family recount tales of stress, lost
                      belongings, and last-minute chaos. At Green Mountain
                      Movers, we understand how daunting the prospect of a
                      relocation can be. After all, we've been in your shoes,
                      packing up our lives and entrusting everything to someone
                      else. That's why we've dedicated ourselves to transforming
                      the moving service experience for our neighbors in
                      Brighton, CO.
                    </p>
                    <p className="mt-6">
                      Picture this:{" "}
                      <i>
                        You’re surrounded by boxes, your home is in disarray,
                        and the clock is ticking
                      </i>
                      . The last thing you need is added stress from unreliable
                      moving companies. We get it. That’s why, at Green Mountain
                      Movers, we’re committed to being more than just a
                      mover—we’re your partners in this journey. Our team
                      doesn’t just move your belongings; we move your life, with
                      the same care and attention to detail that we’d use if we
                      were moving our own families.
                    </p>
                    <p className="mt-6">
                      We believe that a move should be a fresh start, not a
                      frustrating ordeal. Whether you're relocating across town
                      or to a new state, our mission is to make your move as
                      smooth and stress-free as possible. With Green Mountain
                      Movers, you're not just hiring a service; you're gaining a
                      team that truly cares about your peace of mind. From the
                      first box we pack to the last item we unload from the
                      moving truck, we're here to support you every step of the
                      way.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A Moving Company You Can Trust in Brighton, CO
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                At Green Mountain Movers, trust isn’t just a word—it’s the
                foundation of everything we do. When you’re moving, you’re
                placing your life in someone else’s hands, and we don’t take
                that lightly. Over the years, we've built a reputation in{" "}
                <Link
                  href="https://maps.app.goo.gl/yhuhbTrJUYXPud988"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-link"
                >
                  Brighton, CO
                </Link>
                , as the go-to local movers for those who value reliability and
                care. Our clients often tell us how relieved they were to find a
                moving company that treated their belongings with the same
                respect and attention to detail that they would.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                We know that every move is unique. Maybe you're downsizing to a
                cozy new place, or perhaps you're expanding your horizons with a
                bigger home for your growing family. Whatever your situation,
                our team takes the time to understand your specific needs, so we
                can provide a tailored full service moving experience. We show
                up on time, every time, ready to tackle whatever challenges your
                move might present. And it’s not just about getting the job
                done—it’s about doing it right, with a smile and a reassuring
                word along the way.
              </p>
            </div>

            <div className="mt-10 sm:mt-20">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Comprehensive Moving Services Tailored to Your Needs
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  Moving isn’t just about packing boxes and loading trucks. It’s
                  about transitioning to a new chapter in your life, and that’s
                  something we take seriously. At Green Mountain Movers, we
                  offer a range of services designed to make your move as
                  seamless as possible. Whether you’re moving your family, your
                  business, or even your prized collection of antiques, we have
                  the expertise and equipment to get the job done.{" "}
                  <i>Here’s how we can help</i>:
                </p>
                <Cards />
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Long-Distance and Commercial Moving Companies in Brighton,
                Colorado
              </h3>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Long distance or relocating a business requires careful planning
                and execution. At Green Mountain Movers, we specialize in both.
                If you’re moving out of state, you can trust us to manage all
                the details, from coordinating transportation to ensuring timely
                delivery. We understand that long-distance moves come with their
                own set of challenges, and we’re here to make the process as
                smooth as possible.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                For commercial moves, we know that time is money. Our team is
                experienced in handling office equipment, sensitive documents,
                and large-scale relocations with minimal disruption to your
                business. We work closely with you to create a moving plan that
                fits your schedule, ensuring that your business is back up and
                running in no time.
              </p>
            </div>

            <div className="mt-10 sm:mt-20">
              <div>
                <div>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Why Choose Our Mover Services?
                  </h2>
                </div>
                <p className="text-base leading-7 text-gray-700 mt-6">
                  Choosing a moving company is a big decision, and we’re here to
                  make it easier for you. At Green Mountain Movers, we’re not
                  just about getting the job done; we’re about doing it right,
                  with care and attention to detail.{" "}
                  <i>
                    Here’s why so many of your neighbors in Brighton, CO, choose
                    us:
                  </i>
                </p>
              </div>
              <div className="mx-auto grid grid-cols-1 gap-x-8 lg:mx-0 lg:grid-cols-2 lg:items-start mt-10">
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
                    <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                      <dl className="space-y-8 text-base leading-7 text-gray-600">
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
                </div>
              </div>
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
                Discover Brighton, CO: A Thriving Community
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Nestled in the heart of Adams County, Brighton, CO, is a vibrant
                community that blends small-town charm with modern amenities.
                With a population that has steadily grown over the years,
                Brighton offers a welcoming environment for families, young
                professionals, and retirees alike. The city is conveniently
                located just 20 miles north of Denver, making it an ideal place
                for those who enjoy a quieter lifestyle while still being close
                to the hustle and bustle of a major city.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Brighton is known for its rich agricultural history, which is
                still evident in the local culture and events. The area is also
                home to beautiful parks, excellent schools, and a strong sense
                of community. The primary zip codes for Brighton are 80601,
                80602, and 80603, covering various neighborhoods that each offer
                something unique to residents.
              </p>
            </div>
            <h3 className="mt-10 sm:mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Top Attractions in Brighton, CO
            </h3>
            <p className="text-base leading-7 text-gray-700 mt-6">
              Brighton is more than just a great place to live—it’s a community
              full of exciting attractions and landmarks. Here are some
              must-visit spots in Brighton that showcase the best of what the
              area has to offer:
            </p>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Barr Lake State Park
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Explore the natural beauty of{" "}
                    <Link
                      href="https://maps.app.goo.gl/WFPuWbUQPLMuSKe79"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Barr Lake State Park
                    </Link>
                    , a favorite spot for birdwatchers, hikers, and families.
                    The park features a beautiful 8.8-mile trail around the
                    lake, offering stunning views and plenty of wildlife
                    sightings.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Brighton Oasis Family Aquatic Park
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Cool off during the summer at{" "}
                    <Link
                      href="https://maps.app.goo.gl/jDJ2YBocLJSbZvXX6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Brighton Oasis Family Aquatic Park
                    </Link>
                    , a popular destination for families. With a lazy river,
                    water slides, and a wave pool, it’s the perfect place to
                    spend a fun-filled day.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Brighton Recreation Center
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    The{" "}
                    <Link
                      href="https://www.brightonco.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Brighton Recreation Center
                    </Link>{" "}
                    offers a wide range of activities, including fitness
                    classes, swimming, and sports leagues. It’s a hub for
                    community events and a great place to stay active and meet
                    new people.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Adams County Historical Society Museum
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Discover the rich history of Brighton and the surrounding
                    area at the{" "}
                    <Link
                      href="https://www.adamscountymuseum.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Adams County Historical Society Museum
                    </Link>
                    . The museum features exhibits on local history, including
                    pioneer life and agricultural heritage.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Brighton City Hall
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Visit the{" "}
                    <Link
                      href="https://maps.app.goo.gl/oAE8rQs7g2hCjADC8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Brighton City Hall
                    </Link>
                    , an iconic building that serves as the administrative
                    center of the city. The historic structure is not only a
                    place of governance but also a symbol of Brighton’s
                    long-standing community spirit.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Armory Performing Arts Center
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Enjoy a night of entertainment at the{" "}
                    <Link
                      href="https://brightonarmory.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Armory Performing Arts Center
                    </Link>
                    , where you can catch live performances ranging from
                    concerts to theater productions. The Armory is a cultural
                    hub in Brighton, showcasing local talent and touring acts.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Prairie Center Shopping Center
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    For those who love to shop, the{" "}
                    <Link
                      href="https://maps.app.goo.gl/gfwjeGTpDEEpThms8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Prairie Center Shopping Center
                    </Link>{" "}
                    offers a variety of stores, restaurants, and services. It’s
                    a great spot for a day of shopping or grabbing a bite to eat
                    with friends and family.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10 sm:mt-20">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How Locals in Brighton, CO, Can Benefit from Our Moving Services
              </h3>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Living in Brighton means being part of a close-knit community
                where people look out for one another. Whether you’re moving
                into the area to enjoy the peaceful surroundings or relocating
                within Brighton to accommodate a growing family, Green Mountain
                Movers is here to make your transition smooth and hassle-free.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                We understand the local landscape, from the historic homes near
                downtown to the newer developments on the outskirts of town. Our
                familiarity with Brighton’s neighborhoods allows us to navigate
                the area efficiently, ensuring your move is completed on time
                and with the utmost care.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                We also work with families in the{" "}
                <Link
                  href="https://greenmtnmovers.com/areas-served/broomfield"
                  className="custom-link"
                >
                  Broomfield
                </Link>{" "}
                area.
              </p>
            </div>
          </div>

          <div className="mt-10 sm:mt-20">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Us Today for Stress-Free Moving in Brighton, CO
            </h3>
            <p className="text-base leading-7 text-gray-700 mt-4">
              We understand that moving can be a stressful experience, but it
              doesn’t have to be. Our{" "}
              <Link
                href="https://greenmtnmovers.com/areas-served"
                className="custom-link"
              >
                Brighton movers
              </Link>{" "}
              are here to make sure everything goes smoothly from start to
              finish. Whether you’re moving locally or across the country, you
              can trust us to handle your belongings with the utmost care.
            </p>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Ready to make your move? Contact us today for a free quote, and
              let’s get started on your next adventure. We’re here to help you
              every step of the way, making sure your move is a success.
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
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Brighton,%20CO&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
