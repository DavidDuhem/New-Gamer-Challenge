import Image from "next/image";
import Link from "next/link";

export default function ChallengeListCard() {
  return (
    <div className="card h-48 card-side bg-base-100 shadow-sm overflow-hidden">
      <figure className="flex-none aspect-16/10">
        <Link href="/challenges/1" className="block w-full h-full">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Movie"
            height={500}
            width={500}
            className="object-cover w-full h-full"
          />
        </Link>
      </figure>

      <div className="card-body min-w-0">
        <Link href="/challenges/1">
          <h2 className="card-title">Challenge Name</h2>
        </Link>
        <Link href="/challenges/1">
          <p className="card-sm">Synlike - 18 février 2026 </p>
        </Link>

        <p>
          Explication (courte) des régles et des récompenses (ex: 1000 points,
          badge exclusif, etc.) Explication des régles et des récompenses (ex:
          1000 points, etc.)
        </p>

        <div className="card-actions justify-start">
          <Link href="/challenges">
            <div className="badge badge-primary">PS5</div>
          </Link>
          <Link href="/challenges">
            <div className="badge badge-secondary">PC</div>
          </Link>
          <Link href="/challenges">
            <div className="badge badge-secondary">Hard</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
