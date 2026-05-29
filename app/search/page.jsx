import CountrySearch from '../../components/CountrySearch';

export const metadata = {
  title: "World Explorer | Search",
  description:
    "Search countries by name, filter by region, and sort by population.",
};

async function getCountries() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=cca3,name,capital,region,population,flags",
    { next: { revalidate: 86400 } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }

  return response.json();
}

export default async function SearchPage() {
  const allCountries = await getCountries();

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Search Countries</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Search by name, filter by region, or sort by population.
      </p>

      <CountrySearch allCountries={allCountries} />
    </main>
  );
}
