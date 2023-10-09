import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "../data/blogs.js";

export default function Example() {
  const formattedBlogTitle = (blog) => blog.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      <Navbar />
      <div className="bg-white py-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogs.map((post) => (
              <article
                key={post.id}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <Image
                    src={post.imageUrl}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] !cursor-pointer"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="flex flex-col gap-2 max-w-xl">
                  <Link href={`/blog/${formattedBlogTitle(post.title)}`}>
                    <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600 hover:underline cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-gray-600">
                    by {post.author} / {post.date}
                  </p>
                  <p className="line-clamp-3 text-sm leading-6 text-gray-800">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
