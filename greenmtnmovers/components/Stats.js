const stats = [
  { name: "Years of Experience", value: "8+" },
  { name: "Moves Completed", value: "1200+" },
  { name: "Customers Happy", value: "100%" },
  { name: "Claim Rate", value: "0%" },
];

export default function Example() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-[#0e5933] px-4 py-6 sm:px-6 lg:px-8"
          >
            <p className="text-sm font-medium leading-6 text-white">
              {stat.name}
            </p>
            <p className="mt-2 flex items-baseline gap-x-2">
              <span className="text-4xl font-semibold tracking-tight text-white">
                {stat.value}
              </span>
              {stat.unit ? (
                <span className="text-sm text-white font-bold uppercase">
                  {stat.unit}
                </span>
              ) : null}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// "use client";
// import CountUp from "react-countup";

// export default function Example() {
//   return (
//     <div className="flex justify-center items-center">
//       <div className="statsContainer max-w-screen-xl w-full px-5 md:px-10 py-20">
//         <div className="statsBg">
//           <div className="statsDiv">
//             <div className="statsNumber">
//               <CountUp
//                 end={8}
//                 enableScrollSpy={true}
//                 scrollSpyDelay={100}
//                 scrollSpyOnce={true}
//               />
//               +
//             </div>
//             <div>YEARS OF EXPERIENCE</div>
//           </div>
//         </div>
//         <div className="statsBg">
//           <div className="statsDiv">
//             <div className="statsNumber">
//               <CountUp
//                 end={1200}
//                 enableScrollSpy={true}
//                 scrollSpyDelay={100}
//                 scrollSpyOnce={true}
//               />
//               +
//             </div>
//             <div>MOVES COMPLETED</div>
//           </div>
//         </div>
//         <div className="statsBg">
//           <div className="statsDiv">
//             <div className="statsNumber">
//               <CountUp
//                 end={100}
//                 enableScrollSpy={true}
//                 scrollSpyDelay={100}
//                 scrollSpyOnce={true}
//               />
//               %
//             </div>
//             <div>CUSTOMERS HAPPY</div>
//           </div>
//         </div>
//         <div className="statsBg">
//           <div className="statsDiv">
//             <div className="statsNumber">
//               <CountUp
//                 end={0}
//                 enableScrollSpy={true}
//                 scrollSpyDelay={100}
//                 scrollSpyOnce={true}
//               />
//               %
//             </div>
//             <div>CLAIM RATE</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
