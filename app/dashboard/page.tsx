"use client";

import { Button } from "@heroui/button";
import { SVGProps } from "react";
import { HackathonCard } from "@/components/hackathoncard";

export const TerminalIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path fill="currentColor" fillRule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
    </svg>
  );
};
export const ChemiIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path fill="currentColor" fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z" clipRule="evenodd" />
    </svg>
  );
};

export default function DashboardPage() {
  return (
    <section>
      <div className="container mx-auto max-w-6xl py-10">
        <div className="flex justify-between mt-15">
          <div className="gap-4 grid grid-cols-8">
            <div className="col-span-4">
              <h1 className="text-slate-800 text-2xl mb-3 font-bold flex items-center gap-2"><TerminalIcon className="text-primary text-lg" />Registered Hackathons</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          <HackathonCard
            url="hackathon"
            title="HackX Buildathon"
            status="Live"
            description="Building the first open-source hackathon platform where everything lives on IPFS"
            deadline="32 days left"
            techStack="All"
            level="General"
            totalPrize="22,100 USD"
            eventLocation="Online"
            participant="111+ participants" />
        </div>

        <div className="flex justify-between mt-15">
          <div className="gap-4 grid grid-cols-8">
            <div className="col-span-4">
              <h1 className="text-slate-800 text-2xl mb-3 font-bold flex items-center gap-2"><ChemiIcon className="text-warning text-lg" />Open Voting</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          <HackathonCard
            url="hackathon"
            title="HackX Buildathon"
            status="Voting"
            description="Building the first open-source hackathon platform where everything lives on IPFS"
            deadline="32 days left"
            techStack="All"
            level="General"
            totalPrize="22,100 USD"
            eventLocation="Online"
            participant="111+ participants" />
          <HackathonCard
            url="hackathon"
            title="Solana x AI Students Hack"
            status="Voting"
            description="Nigeria's premier student hackathon focused on Solana development and AI agents"
            deadline="25 Days Left"
            techStack="All"
            level="-"
            totalPrize="10,000 USD"
            eventLocation="Online"
            participant="400+ participants" />
          <HackathonCard
            url="hackathon"
            title="Thebuidlathon"
            status="Voting"
            description="Nigeria's premier student hackathon focused on Solana development and AI agents"
            deadline="25 Days Left"
            techStack="All"
            level="-"
            totalPrize="10,000 USD"
            eventLocation="Online"
            participant="400+ participants" />
        </div>
      </div>
    </section>
  );
}
