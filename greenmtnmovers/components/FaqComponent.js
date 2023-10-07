"use client";
import Faq from "react-faq-component";

export default function FaqComponent() {
  const data = {
    rows: [
      {
        title: (
          <p className="faqTitle">How far in advance should I book my move?</p>
        ),
        content: (
          <p className="faqBody">
            We recommend that you book your move as far in advance as possible
            to ensure availability. The peak moving season is typically from May
            to September, and the busiest days of the week are usually Fridays
            and weekends. As a result, if you are planning a move during these
            times, we suggest booking your move at least a week in advance. This
            will help to ensure that you are able to secure your desired moving
            date and time. However, if you are able to be flexible with your
            moving dates, we can often accommodate moves with less notice.
          </p>
        ),
      },
      {
        title: (
          <p className="faqTitle">
            What if I need to change the date of my move?
          </p>
        ),
        content: (
          <p className="faqBody">
            If you need to change the date of your move, please contact us as
            soon as possible. We understand that unforeseen circumstances can
            arise that may necessitate a change in plans. We will do our best to
            accommodate your needs and reschedule your move for a more
            convenient date and time. We recommend that you give us as much
            notice as possible so we can work with you to find a solution that
            works best for your needs.
          </p>
        ),
      },
      {
        title: (
          <p className="faqTitle">
            What should I do to prepare for moving day?
          </p>
        ),
        content: (
          <p className="faqBody">
            Preparing for moving day can help to make the process go smoothly
            and minimize stress. Here are a few things you can do to prepare:
            <br />
            <br />
            1. Declutter and organize: Take some time to go through your
            belongings and get rid of anything you no longer need. This will
            help to streamline the moving process and reduce the amount of items
            that need to be packed and transported.
            <br />
            <br />
            2. Pack ahead of time: Begin packing your belongings as early as
            possible to avoid any last-minute stress. Make sure to label boxes
            clearly and pack fragile items carefully.
            <br />
            <br />
            3. Disassemble large items: If you have any large furniture pieces
            or appliances, consider disassembling them ahead of time to make
            them easier to move.
            <br />
            <br />
            4. Arrange parking: If you live in an area with limited parking or
            restricted access, make sure to arrange for parking ahead of time so
            that the moving truck can park as close to your residence as
            possible.
            <br />
            <br />
            5. Communicate any special needs: Make sure to communicate any
            specific needs or requests you have with your movers ahead of time
            so they can prepare accordingly. This can include anything from
            moving certain items separately to navigating a tricky staircase or
            entrance.
            <br />
            <br />
            By taking these steps ahead of time, you can help to ensure a smooth
            and stress-free moving day.
          </p>
        ),
      },
      {
        title: (
          <p className="faqTitle">Is your company licensed and insured?</p>
        ),
        content: (
          <p className="faqBody">
            Yes, our company is licensed and insured. We understand that
            entrusting your belongings to a moving company is a big decision,
            and we want you to feel confident that your items are protected
            throughout the moving process. Our company is licensed and insured
            to ensure that your belongings are covered in the event of any
            unexpected accidents or damage during the move. Our team of
            professionals is also trained to handle your items with care to
            minimize the risk of damage. We encourage you to ask any questions
            you have about our licensing and insurance policies to give you the
            peace of mind you need during your move.
          </p>
        ),
      },
      {
        title: <p className="faqTitle">What is your cancellation policy?</p>,
        content: (
          <p className="faqBody">
            Our cancellation policy varies depending on the timing of your
            cancellation. We understand that unforeseen circumstances can arise
            that may necessitate a change in plans, and we want to work with you
            to find a solution that meets your needs. If you need to cancel your
            move, please contact us as soon as possible.
            <br />
            <br />
            If you need to cancel your move more than 48 hours before the
            scheduled move date, there is no charge for cancellation. However,
            if you need to cancel within 48 hours of the scheduled move date,
            there may be a cancellation fee. This fee varies depending on the
            specifics of your move, and we encourage you to contact us directly
            to discuss the details of your situation.
            <br />
            <br />
            We understand that unexpected circumstances can be stressful, and we
            want to make the cancellation process as easy as possible. We
            encourage you to contact us as soon as you know that you need to
            cancel your move so we can work with you to find a solution that
            meets your needs.
          </p>
        ),
      },
      {
        title: <p className="faqTitle">What payment options do you accept?</p>,
        content: (
          <p className="faqBody">
            We accept several payment options to make the payment process as
            convenient and easy as possible for you. We accept cash, check,
            credit cards, debit cards, and Venmo.
            <br />
            <br />
            If you choose to pay by credit or debit card, we accept all major
            credit cards such as Visa, Mastercard, American Express, and
            Discover. We use secure payment processing systems to protect your
            information and ensure that your payment is processed safely and
            securely.
            <br />
            <br />
            If you have any questions or concerns about payment options, we
            encourage you to contact us directly, and we will be happy to assist
            you.
          </p>
        ),
      },
    ],
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="py-10 mx-auto max-w-7xl px-6 lg:px-8"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
        }}
      >
        <div className="faqDesktop">
          <div
            style={{
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              gap: "1vw",
            }}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
          >
            <span
              style={{
                position: "relative",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              <p className="underline">FAQ</p>
            </span>
            (Frequently Asked Questions)
          </div>
        </div>
        <div className="faqMobile">
          <div
            style={{
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              gap: "1vw",
            }}
          >
            <span
              style={{
                position: "relative",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              <p className="underline">FAQ</p>
            </span>
            (Frequently Asked Questions)
          </div>
        </div>
        <div
          className="z-index"
          style={{
            borderTop: "1px solid #ccc",
          }}
        >
          <Faq data={data} />
        </div>
      </div>
    </div>
  );
}
