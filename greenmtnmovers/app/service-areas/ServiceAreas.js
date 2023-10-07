import Link from "next/link";
import { cities } from "../data/cities";

export default function ServiceAreas() {
  const formattedCityName = (city) => city.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 p-20">
      {cities.map((city) => (
        <div key={city}>
          <Link href={`/service-areas/${formattedCityName(city)}`}>
            <h4>{city}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
}
