import Link from "next/link";
import { reviewsData } from "../../data/reviewsData.js";
import {
  ChevronRightIcon,
  HomeIcon,
  StarIcon,
} from "@heroicons/react/20/solid";

export default function Reviews() {
  return (
    <div className="mx-auto max-w-7xl py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="flex mt-5">
        <ol className="flex items-center space-x-4">
          <li>
            <div>
              <Link href="/" className="text-gray-500 hover:text-gray-600">
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
                href="/reviews"
                className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
              >
                Reviews
              </Link>
            </div>
          </li>
        </ol>
      </nav>
      <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Reviews
      </h1>
      <p className="text-base leading-7 text-gray-700 mt-4">
        Read through the reviews from our satisfied customers who have
        experienced our professional moving services. We take pride in
        delivering exceptional service and making every move a stress-free
        experience. If you've moved with us, feel free to share your feedback!
      </p>
      <div className="mt-6 space-y-10 divide-y divide-gray-200">
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
          >
            <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
              <div className="flex items-center xl:col-span-1">
                <div className="flex items-center">
                  {/* Render 5 stars with a yellow background */}
                  {[...Array(5)].map((_, index) => (
                    <StarIcon
                      key={index}
                      className="h-6 w-6 text-yellow-300"
                      aria-hidden="true"
                    />
                  ))}
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
  );
}
