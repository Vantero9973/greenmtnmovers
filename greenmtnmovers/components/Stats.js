const stats = [
  { name: "Years of Experience", value: "8+" },
  { name: "Moves Completed", value: "1200+" },
  { name: "Customers Happy", value: "100%" },
  { name: "Claim Rate", value: "0%" },
];

export default function Stats() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-screen-xl w-full px-6 lg:px-8 py-20">
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-center items-center overflow-hidden rounded-lg bg-[#0e5933] px-4 py-5 shadow sm:px-6 sm:py-10"
            >
              <dt className="truncate text-sm font-medium text-gray-100">
                {item.name}
              </dt>
              <dd className="mt-1 text-3xl lg:text-4xl font-semibold tracking-tight text-white">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
