"use client";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import { blogs } from "../../data/blogs";

export default function BlogPost({ params }) {
  const { title } = params;

  const formattedBlogTitle = (blog) => blog.toLowerCase().replace(/\s+/g, "-");

  if (!title) {
    return <p>Blog not found</p>;
  }

  const blog = blogs.find(
    (blog) =>
      formattedBlogTitle(blog.title.toLowerCase()) ===
      formattedBlogTitle(title.toLowerCase())
  );

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center gap-5 max-w-screen-xl py-20 px-6 lg:px-8">
          <h3 className="text-4xl font-bold">{blog.title}</h3>
          <Image
            src={blog.imageUrl}
            className="w-full max-h-[400px] object-cover"
          />
          <div>{blog.body}</div>
        </div>
      </div>
    </>
  );
}
