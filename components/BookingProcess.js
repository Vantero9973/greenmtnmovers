import { BsChatLeftText } from "react-icons/bs";
import { BsCheck2Square } from "react-icons/bs";
import { PiFlagCheckeredDuotone } from "react-icons/pi";

export default function BookingProcess() {
  return (
    <>
      <div className="slanted-div flex justify-center items-center py-20 px-5 md:px-10 text-white">
        <div className="flex flex-col justify-center gap-10 max-w-screen-xl w-full">
          <div className="flex flex-col justify-center max-lg:pt-5">
            <h3 className="text-[34px] font-medium z-10">
              How Our Moving Process Works
            </h3>
            <p className="text-lg font-light z-10 opacity-80">
              Green Mountain Movers' moving services are seamless, insured, and
              reliable. We’ve completed 1K+ moves.
            </p>
          </div>

          <div className="flex max-md:flex-col justify-between items-center gap-10">
            <div className="flex flex-col justify-center gap-5 md:max-w-[300px] max-md:w-full">
              <div className="flex items-center gap-5">
                <h3 className="text-6xl font-bold">1</h3>
                <BsChatLeftText className="text-5xl" />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <h5 className="text-2xl font-medium">
                  Share Your Moving Details
                </h5>
                <p className="opacity-80 font-light">
                  Begin your move by providing us with essential information
                  about your relocation using our online form. Whether it's a
                  last-minute or same-day request, we're here to accommodate
                  your needs.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-5 md:max-w-[300px] max-md:w-full">
              <div className="flex items-center gap-5">
                <h3 className="text-6xl font-bold">2</h3>
                <BsCheck2Square className="text-5xl" />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <h5 className="text-2xl font-medium">Confirm Moving Details</h5>
                <p className="opacity-80 font-light">
                  After sharing your moving details, our team will reach out to
                  you to confirm the specifics of your move. We'll make sure all
                  the necessary arrangements are in place, ensuring a smooth and
                  stress-free experience.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-5 md:max-w-[300px] max-md:w-full">
              <div className="flex items-center gap-5">
                <h3 className="text-6xl font-bold">3</h3>
                <PiFlagCheckeredDuotone className="text-5xl" />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <h5 className="text-2xl font-medium">Move Complete!</h5>
                <p className="opacity-80 font-light">
                  Once the moving details are confirmed, our experienced team
                  will carry out your move efficiently and professionally. Sit
                  back and relax while we take care of everything, ensuring your
                  move is completed seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
