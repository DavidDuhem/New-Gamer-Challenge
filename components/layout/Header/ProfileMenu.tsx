import Image from "next/image";

export default function ProfileMenu() {
  return (
    <button type="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <Image
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          alt="Tailwind CSS Navbar component"
          width={48}
          height={48}
          className="rounded-full"
        />
      </div>
    </button>
  );
}
