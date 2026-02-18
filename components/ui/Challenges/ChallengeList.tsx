"use client";

import { ChallengeDisplayList } from "@/types/types";
import ChallengeGridCard from "./ChallengeGridCard";
import ChallengeListCard from "./ChallengeListCard";
import { useState } from "react";

export default function ChallengeList() {
  const [currentDisplayMode, setCurrentDisplayMode] =
    useState<ChallengeDisplayList>(ChallengeDisplayList.LIST);

  return (
    <div className="flex flex-col gap-5">
      <div className="relative flex items-center justify-center">
        <h1 className="text-3xl font-bold text-center">Active Challenges</h1>

        <div className="absolute right-0">
          <div className="hidden md:flex gap-2">
            <button
              type="button"
              className={`btn btn-primary ${
                currentDisplayMode === ChallengeDisplayList.LIST
                  ? "btn-active"
                  : ""
              }`}
              onClick={() => setCurrentDisplayMode(ChallengeDisplayList.LIST)}
            >
              Liste
            </button>

            <button
              type="button"
              className={`btn btn-primary ${
                currentDisplayMode === ChallengeDisplayList.GRID
                  ? "btn-active"
                  : ""
              }`}
              onClick={() => setCurrentDisplayMode(ChallengeDisplayList.GRID)}
            >
              Grille
            </button>
          </div>
        </div>
      </div>
      <div id="#filters" className="flex gap-4 items-center">
        <p>Sort by : TODO</p>
      </div>

      <section id="#challenges" className="flex flex-col gap-10 mt-5">
        {currentDisplayMode === ChallengeDisplayList.LIST && (
          <>
            <div className="hidden md:flex flex-col gap-8">
              <ChallengeListCard />
              <ChallengeListCard />
              <ChallengeListCard />
              <ChallengeListCard />
              <ChallengeListCard />
            </div>
            <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items-center gap-4">
              <ChallengeGridCard />
              <ChallengeGridCard />
              <ChallengeGridCard />
              <ChallengeGridCard />
              <ChallengeGridCard />
              <ChallengeGridCard />
              <ChallengeGridCard />
              <ChallengeGridCard />
            </div>
          </>
        )}
        {currentDisplayMode === ChallengeDisplayList.GRID && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items-center gap-4">
            <ChallengeGridCard />
            <ChallengeGridCard />
            <ChallengeGridCard />
            <ChallengeGridCard />
            <ChallengeGridCard />
            <ChallengeGridCard />
            <ChallengeGridCard />
            <ChallengeGridCard />
          </div>
        )}
      </section>
    </div>
  );
}
