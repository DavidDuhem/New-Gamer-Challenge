import CarouselHome from "../ui/Carousel/CarouselHome";
import ChallengeHomeCard from "../ui/ChallengeCards/ChallengeHomeCard";
import SectionTitle from "../ui/Home/SectionTitle";
import HomeIncentive from "../ui/HomeIncentive/HomeIncentive";
import Leaderboard from "../ui/Leaderboards/Leaderboard";

export default function HomeContent() {
  return (
    <main className="flex-1 overflow-auto flex flex-col gap-10">
      <section id="#incentive">
        <div className="flex justify-center items-center flex-col md:flex-row gap-8">
          <div className="carousel w-full md:w-2/3">
            <CarouselHome />
          </div>
          <div className="flex flex-col md:justify-between gap-5 md:w-1/3">
            <HomeIncentive />
          </div>
        </div>
      </section>
      <section
        id="#trending"
        className="flex flex-col gap-8 bg-base-200 rounded-md p-5"
      >
        <SectionTitle
          title="Trending Challenges"
          href="/trending-challenges"
          linkName="View all"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items-center gap-4">
          <ChallengeHomeCard />
          <ChallengeHomeCard />
          <ChallengeHomeCard />
          <ChallengeHomeCard />
          <ChallengeHomeCard />
          <ChallengeHomeCard />
          <ChallengeHomeCard />
          <ChallengeHomeCard />
        </div>
      </section>
      <section
        id="#recent"
        className="flex flex-col gap-8 bg-base-200 rounded-md p-5"
      >
        <SectionTitle
          title="Most Recent Challenges"
          href="/popular-challenges"
          linkName="View all"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items-center gap-4">
          <ChallengeHomeCard />
          <ChallengeHomeCard />
          <ChallengeHomeCard />
          <ChallengeHomeCard />
          <ChallengeHomeCard />
          <ChallengeHomeCard />
          <ChallengeHomeCard />
          <ChallengeHomeCard />
        </div>
      </section>

      <section id="#leaderboard">
        <Leaderboard />
      </section>
    </main>
  );
}
