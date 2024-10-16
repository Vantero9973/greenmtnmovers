"use client";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

export default function LocalMovingFAQ() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Frequently asked questions
      </h2>
      <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 border-y border-gray-900/10">
        <Disclosure as="div" className="pt-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <h3 className="text-base font-semibold leading-7">
                What is considered local moving?
              </h3>
              <span className="ml-6 flex h-7 items-center">
                <PlusSmallIcon
                  aria-hidden="true"
                  className="h-6 w-6 group-data-[open]:hidden"
                />
                <MinusSmallIcon
                  aria-hidden="true"
                  className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                />
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd" className="mt-5 sm:pr-12">
            <p className="text-sm leading-6 text-gray-600">
              Local moving typically refers to a move within the same city or
              county. For example, moving from Denver to Colorado Springs would
              be considered a local move in Colorado.
            </p>
          </Disclosure.Panel>
        </Disclosure>

        <Disclosure as="div" className="pt-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <h3 className="text-base font-semibold leading-7">
                How Much Does a Denver Local Move Cost?
              </h3>
              <span className="ml-6 flex h-7 items-center">
                <PlusSmallIcon
                  aria-hidden="true"
                  className="h-6 w-6 group-data-[open]:hidden"
                />
                <MinusSmallIcon
                  aria-hidden="true"
                  className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                />
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd" className="mt-5 sm:pr-12">
            <p className="text-sm leading-6 text-gray-600">
              The cost of a local move in Denver can vary depending on several
              factors, including the distance of your move, the size of your
              home or office, and any additional services you may need. Green
              Mountain Movers offers competitive prices and customized quotes to
              fit your budget.
            </p>
          </Disclosure.Panel>
        </Disclosure>

        <Disclosure as="div" className="pt-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <h3 className="text-base font-semibold leading-7">
                What Makes Green Mountain Movers Stand Out?
              </h3>
              <span className="ml-6 flex h-7 items-center">
                <PlusSmallIcon
                  aria-hidden="true"
                  className="h-6 w-6 group-data-[open]:hidden"
                />
                <MinusSmallIcon
                  aria-hidden="true"
                  className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                />
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd" className="mt-5 sm:pr-12">
            <p className="text-sm leading-6 text-gray-600">
              At Green Mountain Movers, we pride ourselves on our exceptional
              customer service, attention to detail, and efficient moving
              process. Our team is highly trained and experienced in handling
              all{" "}
              <Link
                href="https://www.military.com/pcs/types-of-moves.html"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-link w-fit"
              >
                types of moves
              </Link>{" "}
              within Colorado.
            </p>
          </Disclosure.Panel>
        </Disclosure>

        <Disclosure as="div" className="py-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <h3 className="text-base font-semibold leading-7">
                Are My Belongings Safe During the Move?
              </h3>
              <span className="ml-6 flex h-7 items-center">
                <PlusSmallIcon
                  aria-hidden="true"
                  className="h-6 w-6 group-data-[open]:hidden"
                />
                <MinusSmallIcon
                  aria-hidden="true"
                  className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                />
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd" className="mt-5 sm:pr-12">
            <p className="text-sm leading-6 text-gray-600">
              Yes, at Green Mountain Movers, we take great care in handling your
              belongings during the entire moving process. We use high-quality
              packing materials and secure loading techniques to ensure the
              safety of your items.
            </p>
          </Disclosure.Panel>
        </Disclosure>
      </dl>
    </div>
  );
}
