// app/page.jsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "World Explorer | Home",
  description:
    "Explore countries around the world and learn about their flags, capitals, populations, currencies, and languages.",
};

export default function HomePage() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          🌍 <span className="gradient-text">World Explorer</span>
        </h1>

        <p className="hero-subtitle">
          Explore countries around the world and learn about their flags,
          capitals, populations, currencies, and languages.
        </p>

        <div className="hero-cta">
          <Link href="/countries" className="btn-primary">
            Explore Countries →
          </Link>
          <Link href="/search" className="btn-secondary">
            🔍 Search Countries
          </Link>
        </div>

        {/* Stats Section */}
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">250+</div>
            <div className="stat-label">Countries</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">6</div>
            <div className="stat-label">Continents</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">Real-time</div>
            <div className="stat-label">Data via REST API</div>
          </div>
        </div>
      </section>

      {/* Optional: Quick Info Cards (for premium feel) */}
      <section className="features-section">
        <h2 className="section-title">✨ What You Can Do</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🗺️</div>
            <h3>Browse All Countries</h3>
            <p>See flags, capitals, regions, and populations at a glance.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📖</div>
            <h3>Detailed Info</h3>
            <p>Languages, currencies, time zones, and Google Maps link.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔎</div>
            <h3>Smart Search</h3>
            <p>Find any country instantly by name.</p>
          </div>
        </div>
      </section>
    </div>
  );
}