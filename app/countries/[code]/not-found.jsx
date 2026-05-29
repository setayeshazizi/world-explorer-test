// app/countries/[code]/not-found.jsx
import Link from 'next/link';

export default function CountryNotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-code">404</div>
      <h1 className="not-found-title">Country Not Found</h1>
      <p className="not-found-text">
        Sorry, we couldn&apos;t find the country you&apos;re looking for.
      </p>
      <Link href="/countries" className="btn-primary">
        ← Back to Countries
      </Link>
    </div>
  );
}