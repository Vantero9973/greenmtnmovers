import Image from "next/image";
import successfulMove from "../public/media/moving-4.jpg";
import checklist from "../public/media/checklist.jpg";
import planLocalMove from "../public/media/moving-3.jpg";

const posts = [
  {
    id: 1,
    title: "Essential Tips for a Successful Move",
    href: "/essential-tips-for-a-successful-move",
    description:
      "Embarking on a new chapter in your home can be as thrilling as it is daunting. To help streamline this pivotal transition, Green Mountain Movers has compiled a list of 10 essential tips for a successful move. With our experience and expertise in the moving industry, we know what it takes to make your move smooth and stress-free.",
    imageUrl: successfulMove,
    date: "Oct 4, 2024",
    datetime: "2024-10-04",
  },
  {
    id: 2,
    title: "Ultimate Moving Checklist",
    href: "/ultimate-moving-checklist",
    description:
      "Moving can be a daunting task. The process often entails endless lists, sleepless nights, and the pressure of making sure nothing is forgotten. This article aims to simplify this process for you by providing an ultimate checklist for your upcoming move. With this comprehensive guide, you will be able to plan your move more efficiently, ensuring that nothing is left behind and everything is in its right place.",
    imageUrl: checklist,
    date: "Sep 16, 2024",
    datetime: "2024-09-16",
  },
  {
    id: 3,
    title: "How Do You Plan a Local Move",
    href: "/how-do-you-plan-a-local-move",
    description:
      "Planning a local move can feel as daunting as preparing for a cross-country journey. Whether you're relocating to a new neighborhood in Denver or simply moving a few blocks away, meticulous planning and organization are key to a seamless transition. This guide offers practical advice and a comprehensive moving checklist to help you navigate the process of planning a local move.",
    imageUrl: planLocalMove,
    date: "Aug 20, 2024",
    datetime: "2024-08-20",
  },
];

export default function Blog() {
  return (
    <div className="pt-20 pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#0e5933]">
            Suggested Reading
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Insights and tips to simplify your moving journey.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <Image
                  alt=""
                  src={post.imageUrl}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
