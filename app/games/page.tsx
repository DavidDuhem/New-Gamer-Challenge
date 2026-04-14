import ChallengeList from '@/components/ui/Challenges/ChallengeList';
import GameMainCard from '@/components/ui/Games/GameMainCard';

export default function Games() {
	return (
		<section className="flex flex-col gap-10">
			<GameMainCard />
			<ChallengeList />
		</section>
	);
}
