import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header/Header";
import HomeContent from "@/components/layout/HomeContent";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HomeContent />
      <Footer />
    </div>
  );
}
