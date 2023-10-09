"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { reviewsData } from "../../data/reviewsData.js";
import stars from "../../public/media/google_stars.png";
import Navbar from "../../components/Navbar";

export default function Reviews() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="service-areas-clippath-bg flex justify-center items-center relative h-[200px] max-md:hidden">
        <div className="mtnBorder--bottom absolute bottom-0 shadow" />
        <header
          className="text-5xl font-semibold h-max w-full absolute p-10 text-center mb-10 drop-shadow-3xl opacity-90 text-white"
          style={{
            transform: `translateY(${scrollPosition * 0.4}px)`,
          }}
        >
          Reviews
        </header>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-screen-lg">
          <div className="mx-auto px-5 py-16 sm:px-6 lg:px-8">
            <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
              {reviewsData.map((review) => (
                <div
                  key={review.id}
                  className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
                >
                  <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                    <div className="flex items-center xl:col-span-1">
                      <div className="flex items-center">
                        <Image
                          src={stars}
                          alt="Google Reviews Stars"
                          className="h-8 w-auto object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 lg:mt-6 xl:col-span-2 xl:mt-0">
                      <div className="flex items-center gap-2 font-semibold">
                        <span className="flex flex-wrap gap-1">
                          {review.positives?.map((keyword, index) => (
                            <p className="text-sm text-gray-700" key={index}>
                              {keyword}
                              {index < review.positives.length - 1 ? ", " : ""}
                            </p>
                          ))}
                        </span>
                      </div>
                      <div
                        className="text-sm text-gray-500"
                        dangerouslySetInnerHTML={{ __html: review.review }}
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                    <p className="font-medium text-gray-900">{review.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
