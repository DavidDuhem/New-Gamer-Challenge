import SectionTitle from "../Home/SectionTitle";
import LeaderboardRow from "./LeaderboardRow";
import LeaderboardRowMobile from "./LeaderboardRowMobile";

export default function Leaderboard() {
  return (
    <div className="flex flex-col gap-5 bg-base-200 rounded-md p-5 ">
      <SectionTitle
        title="Best Challengers"
        href="/popular-challenges"
        linkName="View all"
      />
      <div className="flex flex-col gap-3 md:hidden">
        <LeaderboardRowMobile />
        <LeaderboardRowMobile />
        <LeaderboardRowMobile />
        <LeaderboardRowMobile />
        <LeaderboardRowMobile />
      </div>
      <div className="hidden md:flex w-full flex-col gap-3">
        <LeaderboardRow />
        <LeaderboardRow />
        <LeaderboardRow />
        <LeaderboardRow />
        <LeaderboardRow />
      </div>
    </div>
  );
}
