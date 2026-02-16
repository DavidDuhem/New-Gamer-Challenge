import CarouselHome from "../ui/Carousel/CarouselHome";
import ChallengeHomeCard from "../ui/ChallengeCards/ChallengeHomeCard";
import HomeIncentive from "../ui/HomeIncentive/HomeIncentive";
import Leaderboard from "../ui/Leaderboards/Leaderboard";

export default function HomeContent() {
  return (
    <main className="flex-1 overflow-auto flex flex-col gap-10">
      <section id="#incentive">
        <div className="flex gap-8">
          <CarouselHome />
          <HomeIncentive />
        </div>
      </section>
      <section
        id="#trending"
        className="flex flex-col gap-8 bg-base-200 rounded-md p-5"
      >
        <div className="flex items-center gap-1">
          <h2 className="text-2xl font-bold text-base-content leading-none">
            Trending Challenges
          </h2>
          <a
            href="/popular-challenges"
            className="text-primary text-lg font-bold relative top-0.5"
          >
            - View all
          </a>
        </div>

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
        <div className="flex items-center gap-1">
          <h2 className="text-2xl font-bold text-base-content leading-none">
            Most Recent Challenges
          </h2>
          <a
            href="/popular-challenges"
            className="text-primary text-lg font-bold relative top-0.5"
          >
            - View all
          </a>
        </div>

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
