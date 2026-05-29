// app/countries/[code]/page.jsx
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CountryDetailsPage({ params }) {
  const { code } = params;

  console.log("Country code:", code);

  try {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`, {
      cache: "no-store",
    });

    console.log("Response status:", res.status); 

    if (!res.ok) {
      notFound();
    }

    const data = await res.json();
    const country = Array.isArray(data) ? data[0] : data;

    if (!country) {
      notFound();
    }

    return (
      <main>
        <Link href="/countries">← Back to Countries</Link>

        <h1>{country.name?.common}</h1>
        <img src={country.flags?.png} alt={country.name?.common} />
        <p>Capital: {country.capital?.[0] || "No capital"}</p>
        <p>Region: {country.region}</p>
        <p>Population: {country.population?.toLocaleString()}</p>

        <a href={country.maps?.googleMaps} target="_blank">
          View on Google Maps
        </a>
      </main>
    );
  } catch (error) {
    console.error("Error:", error);
    notFound();
  }
}