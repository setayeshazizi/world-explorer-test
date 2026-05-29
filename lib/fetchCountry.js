// lib/fetchCountry.js

export async function fetchCountryByCode(code, cache = "no-store") {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${code}?fields=cca3,name,capital,region,subregion,population,flags,languages,currencies,timezones,maps`,
      { cache }
    );
  
    if (!res.ok) {
      throw new Error(`Failed to fetch country: ${res.status}`);
    }
  
    const data = await res.json();
    return Array.isArray(data) ? data[0] : data;
  }