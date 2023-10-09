"use client";
import Navbar from "../../../components/Navbar";
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
      <div>
        <h3>{blog.title}</h3>
        <div>{blog.body}</div>
      </div>
    </>
  );
}
