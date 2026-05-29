// components/CountryCard.jsx
import Link from 'next/link';

export default function CountryCard({ country }) {
  const name = country?.name?.common || 'Unknown';
  const flagUrl = country?.flags?.png || country?.flags?.svg;
  const capital = country?.capital?.[0] || 'No Capital';
  const region = country?.region || 'N/A';
  const population = country?.population ? country.population.toLocaleString() : '0';
  const code = country?.cca3;

  return (
    <article className="country-card">
      <div className="card-flag-wrapper">
        {flagUrl ? (
          <img src={flagUrl} alt={`Flag of ${name}`} className="card-flag" loading="lazy" />
        ) : (
          <div className="card-flag" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            🏳️
          </div>
        )}
      </div>

      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        
        <div className="card-info-list">
          <p className="card-info-item">
            <strong>Capital:</strong> {capital}
          </p>
          <p className="card-info-item">
            <strong>Region:</strong> {region}
          </p>
          <p className="card-info-item">
            <strong>Population:</strong> {population}
          </p>
        </div>

        <Link href={`/countries/${code}`} className="card-button">
          View Details →
        </Link>
      </div>
    </article>
  );
}