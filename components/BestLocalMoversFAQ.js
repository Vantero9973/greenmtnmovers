"use client";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function BestLocalMoversFAQ() {
  return (
    <div className="divide-y divide-zinc-900/10 py-10">
      <h2 className="text-2xl font-semibold leading-10 tracking-tight text-zinc-900">
        Frequently asked questions
      </h2>
      <dl className="mt-5 space-y-6 divide-y divide-zinc-900/10">
        <Disclosure as="div" className="pt-6">
          {({ open }) => (
            <>
              <dt>
                <Disclosure.Button className="flex w-full items-start justify-between text-left text-zinc-900">
                  <span className="text-base font-semibold leading-7">
                    Why should I choose a local moving company?
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    {open ? (
                      <MinusIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <p className="text-base leading-7 text-zinc-600">
                  Local moving companies, like Green Mountain Movers, deeply
                  understand the area they serve and are familiar with the
                  specific challenges of navigating a Denver move. This
                  expertise allows for a more efficient and stress-free moving
                  experience.
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="pt-6">
          {({ open }) => (
            <>
              <dt>
                <Disclosure.Button className="flex w-full items-start justify-between text-left text-zinc-900">
                  <span className="text-base font-semibold leading-7">
                    How does Green Mountain Movers maintain its reputation in
                    the community?
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    {open ? (
                      <MinusIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <p className="text-base leading-7 text-zinc-600">
                  At Green Mountain Movers, we understand the importance of our
                  reputation within the community. That's why we hold ourselves
                  to high standards of professionalism, reliability, and
                  customer satisfaction. We strive to provide exceptional
                  service on every move and are committed to upholding our good
                  standing within the community.
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="pt-6">
          {({ open }) => (
            <>
              <dt>
                <Disclosure.Button className="flex w-full items-start justify-between text-left text-zinc-900">
                  <span className="text-base font-semibold leading-7">
                    What sets Green Mountain Movers apart from other local
                    moving companies?
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    {open ? (
                      <MinusIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <p className="text-base leading-7 text-zinc-600">
                  Our team at Green Mountain Movers comprises experienced
                  professionals with deep knowledge and understanding of the
                  Denver area. We pride ourselves on our expertise in navigating
                  the unique challenges that come with a move in this area, such
                  as traffic, parking restrictions, and building regulations.
                  This sets us apart from other moving companies because we can
                  anticipate and effectively handle any issues that may arise
                  during the moving process.
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </dl>
    </div>
  );
}
