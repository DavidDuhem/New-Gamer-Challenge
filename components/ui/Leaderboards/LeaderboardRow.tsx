import Image from "next/image";

export default function LeaderboardRow() {
  return (
    <div className="flex items-center w-full h-16 bg-base-100 rounded-md px-5">
      <div className="w-10">#</div>
      <div className="relative h-full w-16">
        <Image
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          fill
          className="object-cover rounded"
        />
      </div>
      <h3 className="ml-5 font-bold">Player's Name</h3>
      <div className="flex gap-10 justify-end flex-1 ml-5">
        <p>Expert : 9999</p>
        <p>Hard : 9999</p>
        <p>Medium : 9999</p>
        <p>Easy : 9999</p>
      </div>
    </div>
  );
}
