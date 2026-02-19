import Link from "next/link";
import ProfileMenu from "./ProfileMenu";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="navbar bg-base-100 shadow-sm px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-ghost btn-circle"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Menu</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
          </div>
          <Link
            className="btn btn-ghost text-lg md:text-xl normal-case"
            href="/"
          >
            New Gamer Challenges
          </Link>
        </div>
        <div className="hidden md:flex justify-center flex-1">
          <SearchBar />
        </div>
        <div className="">
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
