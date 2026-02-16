import LeaderboardRow from "./LeaderboardRow";

export default function Leaderboard() {
  return (
    <div className="flex flex-col gap-5 bg-base-200 rounded-md p-5 ">
      <div className="flex items-center gap-1">
        <h2 className="text-2xl font-bold text-base-content leading-none">
          Best Challengers
        </h2>
        <a
          href="/popular-challenges"
          className="text-primary text-lg font-bold relative top-0.5"
        >
          - View all
        </a>
      </div>
      <div className="flex w-full flex-col gap-3">
        <LeaderboardRow />
        <LeaderboardRow />
        <LeaderboardRow />
        <LeaderboardRow />
        <LeaderboardRow />
      </div>
    </div>
  );
}
