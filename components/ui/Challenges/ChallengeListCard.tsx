import Image from "next/image";

export default function ChallengeListCard() {
  return (
    <a href="/home">
      <div className="card h-48 card-side bg-base-100 shadow-sm overflow-hidden">
        <figure className="flex-none aspect-16/10">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Movie"
            height={500}
            width={500}
            className="object-cover"
          />
        </figure>

        <div className="card-body min-w-0">
          <h2 className="card-title">Challenge Name</h2>
          <p className="card-sm">Synlike - 18 février 2026 </p>

          <p>
            Explication (courte) des régles et des récompenses (ex: 1000 points,
            badge exclusif, etc.) Explication des régles et des récompenses (ex:
            1000 points, etc.)
          </p>

          <div className="card-actions justify-start">
            <a href="/tag">
              <div className="badge badge-primary">PS5</div>
            </a>
            <a href="/tag">
              <div className="badge badge-secondary">PC</div>
            </a>
            <a href="/tag">
              <div className="badge badge-secondary">Hard</div>
            </a>
          </div>
        </div>
      </div>
    </a>
  );
}
