// app/search/page.jsx
"use client";

import { useState } from 'react';

const countriesData = [
  { cca3: "AFG", name: "Afghanistan", flag: "🇦🇫", capital: "Kabul", region: "Asia", population: 43844000 },
  { cca3: "USA", name: "United States", flag: "🇺🇸", capital: "Washington, D.C.", region: "Americas", population: 331900000 },
  { cca3: "GER", name: "Germany", flag: "🇩🇪", capital: "Berlin", region: "Europe", population: 83200000 },
  { cca3: "JPN", name: "Japan", flag: "🇯🇵", capital: "Tokyo", region: "Asia", population: 125800000 },
  { cca3: "BRA", name: "Brazil", flag: "🇧🇷", capital: "Brasília", region: "Americas", population: 213000000 },
  { cca3: "IND", name: "India", flag: "🇮🇳", capital: "New Delhi", region: "Asia", population: 1380000000 },
  { cca3: "FRA", name: "France", flag: "🇫🇷", capital: "Paris", region: "Europe", population: 67390000 },
  { cca3: "ITA", name: "Italy", flag: "🇮🇹", capital: "Rome", region: "Europe", population: 59550000 },
  { cca3: "GBR", name: "United Kingdom", flag: "🇬🇧", capital: "London", region: "Europe", population: 67220000 },
  { cca3: "CAN", name: "Canada", flag: "🇨🇦", capital: "Ottawa", region: "Americas", population: 38250000 },
  { cca3: "AUS", name: "Australia", flag: "🇦🇺", capital: "Canberra", region: "Oceania", population: 25700000 },
  { cca3: "MEX", name: "Mexico", flag: "🇲🇽", capital: "Mexico City", region: "Americas", population: 128900000 },
  { cca3: "KOR", name: "South Korea", flag: "🇰🇷", capital: "Seoul", region: "Asia", population: 51780000 },
  { cca3: "TUR", name: "Turkey", flag: "🇹🇷", capital: "Ankara", region: "Asia", population: 84339000 },
  { cca3: "NED", name: "Netherlands", flag: "🇳🇱", capital: "Amsterdam", region: "Europe", population: 17400000 },
  { cca3: "SWE", name: "Sweden", flag: "🇸🇪", capital: "Stockholm", region: "Europe", population: 10380000 },
  { cca3: "NOR", name: "Norway", flag: "🇳🇴", capital: "Oslo", region: "Europe", population: 5425000 },
  { cca3: "CHN", name: "China", flag: "🇨🇳", capital: "Beijing", region: "Asia", population: 1412000000 },
  { cca3: "RUS", name: "Russia", flag: "🇷🇺", capital: "Moscow", region: "Europe", population: 144100000 },
  { cca3: "EGY", name: "Egypt", flag: "🇪🇬", capital: "Cairo", region: "Africa", population: 102300000 },
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [sortBy, setSortBy] = useState('');

  const regions = [...new Set(countriesData.map(c => c.region))];

  let filtered = countriesData.filter(country => {
    const matchesSearch = searchQuery === '' || 
      country.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === '' || country.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  if (sortBy === 'highest') {
    filtered.sort((a, b) => b.population - a.population);
  } else if (sortBy === 'lowest') {
    filtered.sort((a, b) => a.population - b.population);
  }

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🔍 Search Countries</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Search by name, filter by region, or sort by population.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Search for a country by name..."
          style={{ flex: 2, padding: '0.8rem', border: '1px solid #ddd', borderRadius: '8px' }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          style={{ flex: 1, padding: '0.8rem', border: '1px solid #ddd', borderRadius: '8px' }}
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          >
            <option value="">All Regions</option>
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
  
          <select
            style={{ flex: 1, padding: '0.8rem', border: '1px solid #ddd', borderRadius: '8px' }}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort by Population</option>
            <option value="highest">Highest to Lowest</option>
            <option value="lowest">Lowest to Highest</option>
          </select>
        </div>
  
        <p style={{ marginBottom: '1rem', color: '#666' }}>
          Found {filtered.length} {filtered.length === 1 ? 'country' : 'countries'}
        </p>
  
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {filtered.map(country => (
            <div key={country.cca3} style={{
              border: '1px solid #ddd',
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'transform 0.2s',
              cursor: 'pointer'
            }}>
              <div style={{ 
                fontSize: '5rem', 
                textAlign: 'center', 
                padding: '1rem',
                background: '#f5f5f5'
              }}>
                {country.flag}
              </div>
              <div style={{ padding: '1rem' }}>
                <h2 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{country.name}</h2>
                <p><strong>Capital:</strong> {country.capital}</p>
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                <a href={`/countries/${country.cca3}`} style={{
                  display: 'inline-block',
                  marginTop: '1rem',
                  padding: '0.5rem 1rem',
                  background: '#0070f3',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  textAlign: 'center'
                }}>
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
  
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <h3>🌍 No countries found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </main>
    );
  }