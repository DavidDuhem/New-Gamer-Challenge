import Image from "next/image";

export default function LeaderboardRow() {
  return (
    <div>
      <div className="flex items-center w-full h-16 bg-base-100 rounded-t-md">
        <div className="relative h-full w-16">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            fill
            className="object-cover rounded-tl-md"
          />
        </div>
        <h3 className="ml-5 font-bold">Player's Name</h3>
      </div>
      <div className="flex items-center w-full h-16 bg-base-100 rounded-b-md">
        <div className="flex flex-wrap gap-x-5 flex-1 ml-5">
          <p>Expert : 9999</p>
          <p>Hard : 9999</p>
          <p>Medium : 9999</p>
          <p>Easy : 9999</p>
        </div>
      </div>
    </div>
  );
}
