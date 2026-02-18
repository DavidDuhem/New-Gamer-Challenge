import Image from "next/image";

export default function ChallengeGridCard() {
  return (
    <div className="w-56 group">
      <a href="/home">
        <div className="card w-56 shadow-sm relative rounded-md overflow-hidden cursor-pointer">
          <figure className="relative w-full aspect-16/10">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              fill
              className="object-cover"
            />
          </figure>
          <h2 className="card-title absolute top-0 left-0 text-white text-base bg-black/50 px-2 py-[1.3] rounded-t-md w-full">
            Game Name
          </h2>
          <div className="absolute bottom-0 right-0 text-white text-sm bg-black/50 px-2 py-1 rounded-tl-md">
            <p> ♥️ 3.3k 💬 2.3k</p>
          </div>
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-white text-sm px-2 text-center">
              Explication des régles (courtes) et des récompenses (ex: 1000
              points, badge exclusif, etc.)
            </p>
          </div>
        </div>
      </a>
      <div className="card-body px-1 py-2">
        <a href="/home">
          <h2 className="card-title">Challenge Name</h2>
        </a>
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
  );
}
