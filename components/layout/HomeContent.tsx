import CarouselHome from "../ui/Carousel/CarouselHome";
import ChallengeHomeCard from "../ui/ChallengeCards/ChallengeHomeCard";

export default function HomeContent() {
  return (
    <main className="flex-1 overflow-auto">
      <section>
        <div className="flex">
          <CarouselHome />
        </div>
      </section>
      <ChallengeHomeCard />
    </main>
  );
}
