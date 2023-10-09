"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How far in advance should I book my move?",
    answer:
      "We recommend that you book your move as far in advance as possible to ensure availability. The peak moving season is typically from May to September, and the busiest days of the week are usually Fridays and weekends. As a result, if you are planning a move during these times, we suggest booking your move at least a week in advance. This will help to ensure that you are able to secure your desired moving date and time. However, if you are able to be flexible with your moving dates, we can often accommodate moves with less notice.",
  },
  {
    question: "What if I need to change the date of my move?",
    answer:
      "If you need to change the date of your move, please contact us as soon as possible. We understand that unforeseen circumstances can arise that may necessitate a change in plans. We will do our best to accommodate your needs and reschedule your move for a more convenient date and time. We recommend that you give us as much notice as possible so we can work with you to find a solution that works best for your needs.",
  },
  {
    question: "What should I do to prepare for moving day?",
    answer: (
      <>
        Preparing for moving day can help to make the process go smoothly and
        minimize stress. Here are a few things you can do to prepare:
        <br />
        <br />
        1. Declutter and organize: Take some time to go through your belongings
        and get rid of anything you no longer need. This will help to streamline
        the moving process and reduce the amount of items that need to be packed
        and transported.
        <br />
        <br />
        2. Pack ahead of time: Begin packing your belongings as early as
        possible to avoid any last-minute stress. Make sure to label boxes
        clearly and pack fragile items carefully.
        <br />
        <br />
        3. Disassemble large items: If you have any large furniture pieces or
        appliances, consider disassembling them ahead of time to make them
        easier to move.
        <br />
        <br />
        4. Arrange parking: If you live in an area with limited parking or
        restricted access, make sure to arrange for parking ahead of time so
        that the moving truck can park as close to your residence as possible.
        <br />
        <br />
        5. Communicate any special needs: Make sure to communicate any specific
        needs or requests you have with your movers ahead of time so they can
        prepare accordingly. This can include anything from moving certain items
        separately to navigating a tricky staircase or entrance.
        <br />
        <br />
        By taking these steps ahead of time, you can help to ensure a smooth and
        stress-free moving day.
      </>
    ),
  },
  {
    question: "Is your company licensed and insured?",
    answer:
      "Yes, our company is licensed and insured. We understand that entrusting your belongings to a moving company is a big decision, and we want you to feel confident that your items are protected throughout the moving process. Our company is licensed and insured to ensure that your belongings are covered in the event of any unexpected accidents or damage during the move. Our team of professionals is also trained to handle your items with care to minimize the risk of damage. We encourage you to ask any questions you have about our licensing and insurance policies to give you the peace of mind you need during your move.",
  },
  {
    question: "What is your cancellation policy?",
    answer: (
      <>
        Our cancellation policy varies depending on the timing of your
        cancellation. We understand that unforeseen circumstances can arise that
        may necessitate a change in plans, and we want to work with you to find
        a solution that meets your needs. If you need to cancel your move,
        please contact us as soon as possible.
        <br />
        <br />
        If you need to cancel your move more than 48 hours before the scheduled
        move date, there is no charge for cancellation. However, if you need to
        cancel within 48 hours of the scheduled move date, there may be a
        cancellation fee. This fee varies depending on the specifics of your
        move, and we encourage you to contact us directly to discuss the details
        of your situation.
        <br />
        <br />
        We understand that unexpected circumstances can be stressful, and we
        want to make the cancellation process as easy as possible. We encourage
        you to contact us as soon as you know that you need to cancel your move
        so we can work with you to find a solution that meets your needs.
      </>
    ),
  },
  {
    question: "What payment options do you accept?",
    answer: (
      <>
        We accept several payment options to make the payment process as
        convenient and easy as possible for you. We accept cash, check, credit
        cards, debit cards, and Venmo.
        <br />
        <br />
        If you choose to pay by credit or debit card, we accept all major credit
        cards such as Visa, Mastercard, American Express, and Discover. We use
        secure payment processing systems to protect your information and ensure
        that your payment is processed safely and securely.
        <br />
        <br />
        If you have any questions or concerns about payment options, we
        encourage you to contact us directly, and we will be happy to assist
        you.
      </>
    ),
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl w-full px-6 py-10 lg:px-8">
        <div
          className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-white to-[#0e5933]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
          aria-hidden="true"
        >
          <div
            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-white to-[#0e5933] xl:ml-0 xl:mr-[calc(50%-12rem)]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#0e5933]">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Questions, Answered
          </p>
        </div>
        <div className="mx-auto divide-y divide-gray-900/10">
          <dl className="w-full mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
