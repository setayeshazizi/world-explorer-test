// app/countries/page.jsx
import CountryCard from "../../components/CountryCard";

export default async function CountriesPage() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=cca3,name,capital,region,population,flags",
    { cache: "force-cache" }
  );

  const data = await res.json();
  const countries = Array.isArray(data) ? data : [];

  return (
    <section>
      <div className="page-header">
        <h1 className="page-title">Explore Countries</h1>
        <p className="page-description">
          Showing {countries.length} countries from around the world.
        </p>
      </div>

      {countries.length === 0 ? (
        <div className="no-results">
          <h3>⚠️ No countries loaded</h3>
          <p>Please try again later or check your connection.</p>
        </div>
      ) : (
        <div className="countries-grid">
          {countries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </section>
  );
}
