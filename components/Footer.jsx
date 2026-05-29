// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} World Explorer | All Rights Reserved</p>
      <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
        Data provided by <a href="https://restcountries.com" target="_blank" rel="noopener noreferrer">REST Countries API</a>
      </p>
    </footer>
  );
}