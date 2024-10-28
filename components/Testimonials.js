import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Testimonials() {
  const topTestimonials = [
    [
      {
        body: "Green Mountain Movers did an incredible job unloading our moving truck at the end of a cross country drive. We had a weather delay on the drive and they were very accommodating with our schedule. They took great care of our belongings and made our moving day stress free. Couldn't recommend this company more!",
        author: {
          name: "Blake L.",
          initial: "B",
          bgColor: "bg-orange-700",
        },
      },
      {
        body: "My experience with Green Mountain Movers was phenomenal. They came prepared and were efficient, professional, detail oriented, careful and respectful. They took the stress out of my moving day. 10/10 recommend.",
        author: {
          name: "Sophia M.",
          initial: "S",
          bgColor: "bg-green-700",
        },
      },
      {
        body: "I have worked with Green Mountain movers several times. Always very punctual and prepared with the proper equipment to ensure that everything is moved safely with out damage or injury. Too notch company!",
        author: {
          name: "Ross B.",
          initial: "R",
          bgColor: "bg-gray-700",
        },
      },
    ],
  ];

  return (
    <div className="relative isolate bg-white pb-10 pt-20">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="max-w-xl">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#0e5933]">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We have worked with thousands of amazing people
            </p>
          </div>
          <div className="flex items-end max-sm:hidden">
            <Link
              href="/reviews"
              className="text-sm font-semibold leading-6 text-[#0e5933]"
            >
              See all reviews <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Display only top 4 testimonials below sm breakpoint */}
        <div className="sm:hidden mx-auto mt-10 grid grid-cols-1 gap-8 text-sm leading-6 text-gray-900">
          {topTestimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 lg:contents lg:space-y-0"
            >
              {columnGroup.map((testimonial) => (
                <figure
                  key={testimonial.author?.name}
                  className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                >
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div
                      className={`h-10 w-10 flex justify-center items-center rounded-full text-white text-bold text-lg ${testimonial.author?.bgColor}`}
                    >
                      {testimonial.author?.initial}
                    </div>
                    <div>
                      <div className="font-semibold">
                        {testimonial.author?.name}
                      </div>
                      <div className="text-gray-700 text-xs">Google Review</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>

        {/* Display full testimonials grid above sm breakpoint */}
        <div className="hidden sm:grid mx-auto mt-10 sm:mt-16 grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-flow-col lg:grid-cols-4">
          <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 lg:col-start-2 lg:row-end-1">
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
              <p>
                "Love these guys. I have hired them multiple times throughout
                the last 2-3 years. They do a great job moving me from place to
                place. They take all necessary precautions to prevent dings and
                scratches while moving. Super affordable, quick, professional
                and very personable. I 100% will only hire them for any moving
                or furniture deliveries. I definitely recommend them!"
              </p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <div className="h-10 w-10 flex justify-center items-center rounded-full text-white text-bold text-lg bg-[#0e5933]">
                K
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-semibold text-md">Kai D.</div>
                <div className="text-gray-700 text-xs">Google Review</div>
              </div>
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 lg:contents lg:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "lg:row-span-2"
                      : "lg:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author?.name}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <div
                          className={`h-10 w-10 flex justify-center items-center rounded-full text-white text-bold text-lg ${testimonial.author?.bgColor}`}
                        >
                          {testimonial.author?.initial}
                        </div>
                        <div>
                          <div className="font-semibold">
                            {testimonial.author?.name}
                          </div>
                          <div className="text-gray-700 text-xs">
                            Google Review
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Link
            href="/reviews"
            className="text-sm font-semibold leading-6 text-[#0e5933]"
          >
            See all reviews <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  [
    [
      {
        body: "Green Mountain Movers did an incredible job unloading our moving truck at the end of a cross country drive. We had a weather delay on the drive and they were very accommodating with our schedule. They took great care of our belongings and made our moving day stress free. Couldn't recommend this company more!",
        author: {
          name: "Blake L.",
          initial: "B",
          bgColor: "bg-orange-700",
        },
      },
      {
        body: "Aaron and his team were fantastic! Got us moved in two hours and made sure everything went where we needed it. Highly recommend!!!",
        author: {
          name: "Samantha M.",
          initial: "S",
          bgColor: "bg-blue-700",
        },
      },
      {
        body: "I have worked with Green Mountain movers several times. Always very punctual and prepared with the proper equipment to ensure that everything is moved safely with out damage or injury. Too notch company!",
        author: {
          name: "Ross B.",
          initial: "R",
          bgColor: "bg-gray-700",
        },
      },
    ],
    [
      {
        body: "Green Mountain Movers were great to work with — communicative, professional, punctual, helpful, and got the job done quickly and perfectly. Would use them again in a heartbeat.",
        author: {
          name: "Eileen K.",
          initial: "E",
          bgColor: "bg-cyan-700",
        },
      },
      {
        body: "Aaron was SO professional and did such a great job communicating with me and the other parties involved with this furniture move. Very trustworthy and hardworking! Would recommend to anyone!",
        author: {
          name: "Megan P.",
          initial: "M",
          bgColor: "bg-purple-500",
        },
      },
    ],
  ],
  [
    [
      {
        body: "Professional, timely, friendly. Aaron has the equipment to get the job done. Moved us with nothing lost or broken. Definitely recommend them and would use them again",
        author: {
          name: "Lisa G.",
          initial: "L",
          bgColor: "bg-teal-600",
        },
      },
      {
        body: "Very efficient, took care of our things and moved everything out and in with precision and care for the property and belongings. They are the guys. They rock. 😎🤘🏼",
        author: {
          name: "Ella S.",
          initial: "E",
          bgColor: "bg-lime-600",
        },
      },
    ],
    [
      {
        body: "My experience with Green Mountain Movers was phenomenal. They came prepared and were efficient, professional, detail oriented, careful and respectful. They took the stress out of my moving day. 10/10 recommend.",
        author: {
          name: "Sophia M.",
          initial: "S",
          bgColor: "bg-red-700",
        },
      },
      {
        body: "Super professional, communication is on par!! Had everything needed overall. All equipment and supplies needed!! Wonderful experience !!! Would highly recommend, Green Mountain Movers !!",
        author: {
          name: "Jason H.",
          initial: "J",
          bgColor: "bg-green-900",
        },
      },
      {
        body: "Green Mountain Movers is the best moving company I've ever used! They arrived on time and got everything packed and loaded up quickly. They even went above and beyond to help me assemble and rearrange furniture in my new home. Highly recommended!",
        author: {
          name: "Alex V.",
          initial: "A",
          bgColor: "bg-blue-900",
        },
      },
    ],
  ],
];
