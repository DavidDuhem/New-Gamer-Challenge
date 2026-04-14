import Image from 'next/image';
import Link from 'next/link';

export default function GameMainCard() {
	return (
		<div className="bg-base-200 rounded-md p-5 flex gap-10 items-start w-full mx-auto">
			<div className="relative w-48 md:w-64 aspect-16/10 shrink-0">
				<Image
					src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
					alt="Shoes"
					fill
					className="object-cover rounded-md"
				/>
			</div>

			<div className="flex-1 flex flex-col h-full">
				<h2 className="text-xl font-bold mb-2">Game Name</h2>

				<div className="space-y-1">
					<p>Date de sortie :</p>
					<p>Studio(s) de développement :</p>
					<p>Catégorie :</p>
				</div>

				<div className="mt-auto flex gap-2 flex-wrap pt-4">
					<Link href="/challenges" className="inline-block">
						<span className="badge badge-primary">PS5</span>
					</Link>

					<Link href="/challenges" className="inline-block">
						<span className="badge badge-secondary">PC</span>
					</Link>

					<Link href="/challenges" className="inline-block">
						<span className="badge badge-secondary">Hard</span>
					</Link>
				</div>
			</div>

			<div className="flex-1 flex flex-col h-full ml-auto items-end">
				<span className="text-3xl font-bold"> --/20 </span>
			</div>
		</div>
	);
}
