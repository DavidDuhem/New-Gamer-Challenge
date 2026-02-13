import Image from "next/image";

export default function ChallengeHomeCard() {
  return (
    <div className="w-56">
      <div className="card bg-base-100 w-56 shadow-sm relative rounded-md overflow-hidden">
        <figure>
          <Image
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            width={384}
            height={256}
          />
        </figure>
        <h2 className="card-title absolute top-0 left-0 text-white text-base bg-black/50 px-2 py-[1.3] rounded-t-md w-full">
          Game Name
        </h2>
        <div className="absolute bottom-0 right-0 text-white text-sm bg-black/50 px-2 py-1 rounded-tl-md">
          <p> ♥️ 3.3k 💬 2.3k</p>
        </div>
      </div>
      <div className="card-body px-1 py-2">
        <h2 className="card-title">Challenge Name</h2>
        <div className="card-actions justify-start">
          <div className="badge badge-primary">PS5</div>
          <div className="badge badge-secondary">PC</div>
          <div className="badge badge-secondary">Hard</div>
        </div>
      </div>
    </div>
  );
}
