// app/layout.js
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: {
    default: "World Explorer",
    template: "%s | World Explorer"
  },
  description: "A Next.js country explorer project for Week 13 and Week 14",
  keywords: ["countries", "next.js", "world explorer", "rest countries api"],
  authors: [{ name: "Your Name" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
