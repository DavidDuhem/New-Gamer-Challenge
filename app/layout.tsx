import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-base-100 min-h-screen antialiased">
        <Header />
        <div className="max-w-275 mx-auto px-6 py-5">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
