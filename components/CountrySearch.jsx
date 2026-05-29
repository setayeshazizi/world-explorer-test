"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CountrySearch({ allCountries }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("CountrySearch received:", allCountries?.length);
    
    if (allCountries && Array.isArray(allCountries) && allCountries.length > 0) {
      setCountries(allCountries);
      setLoading(false);
    } else if (allCountries && Array.isArray(allCountries) && allCountries.length === 0) {
      setLoading(false);
    }
  }, [allCountries]);

  const regions = [];
  for (let i = 0; i < countries.length; i++) {
    const region = countries[i]?.region;
    if (region && !regions.includes(region)) {
      regions.push(region);
    }
  }
  regions.sort();

  let filtered = [];
  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    if (!country) continue;
    
    const matchesSearch = searchQuery === '' || 
      (country.name?.common && country.name.common.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesRegion = selectedRegion === '' || country.region === selectedRegion;
    
    if (matchesSearch && matchesRegion) {
      filtered.push(country);
    }
  }

  if (sortBy === 'highest') {
    filtered.sort((a, b) => (b?.population || 0) - (a?.population || 0));
  } else if (sortBy === 'lowest') {
    filtered.sort((a, b) => (a?.population || 0) - (b?.population || 0));
  }

  if (loading) {
    return (
      <div className="no-results">
        <h3>🌍 Loading countries...</h3>
        <p>Please wait while we fetch the data.</p>
      </div>
    );
  }

  if (countries.length === 0) {
    return (
      <div className="no-results">
        <h3>⚠️ No countries loaded</h3>
        <p>Please try again later or refresh the page.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="search-controls">
        <div className="search-input-wrapper">
          <span className="search-icon-inside">🔍</span>
          <input
            type="text"
            placeholder="Search for a country by name..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <select
          className="filter-select"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          <option value="">All Regions</option>
          {regions.map((region) => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>

        <select
          className="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort by Population</option>
          <option value="highest">Highest to Lowest</option>
          <option value="lowest">Lowest to Highest</option>
        </select>
      </div>

      <p className="results-count">
        Found {filtered.length} {filtered.length === 1 ? 'country' : 'countries'}
      </p>

      {filtered.length > 0 ? (
        <div className="countries-grid">
          {filtered.map((country) => (
            <div key={country.cca3} className="country-card">
              <div className="card-flag-wrapper">
                <img 
                  src={country.flags?.png || country.flags?.svg} 
                  alt={country.name?.common} 
                  className="card-flag" 
                />
              </div>
              <div className="card-content">
                <h2 className="card-title">{country.name?.common}</h2>
                <div className="card-info-list">
                  <p className="card-info-item"><strong>Capital:</strong> {country.capital?.[0] || 'No Capital'}</p><p className="card-info-item"><strong>Region:</strong> {country.region || 'N/A'}</p>
                  <p className="card-info-item"><strong>Population:</strong> {country.population?.toLocaleString() || '0'}</p>
                </div>
                <Link href={`/countries/${country.cca3}`} className="card-button">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h3>🌍 No countries found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}