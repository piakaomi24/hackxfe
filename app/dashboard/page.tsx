"use client";

import { Button } from "@heroui/button";
import { SVGProps } from "react";
import { HackathonCard } from "@/components/hackathoncard";
import Link from "next/link";
import { ProjectCard } from "@/components/projectcard";

export const FolderIcon = (props: SVGProps<SVGSVGElement>) => {
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
      <path fill="currentColor" d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
    </svg>
  );
};

export default function DashboardPage() {
  return (
    <section>
      <div className="container mx-auto max-w-6xl py-10">
        <div className="flex justify-between">
          <div className="gap-4 grid grid-cols-8">
            <div className="col-span-4">
              <h1 className="text-slate-800 text-2xl mb-3 font-bold flex items-center gap-2">Active Projects</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 mt-2">
          <div className="col-span-3">
            <div className="p-2 bg-primary-50 h-full rounded-xl">
              <Link href='' className="group h-full border-2 border-dashed border-primary-300 p-5 rounded-xl flex flex-col items-center justify-center gap-2">
                <FolderIcon className="text-7xl text-primary-100 mt-auto" />
                <p className="mt-auto text-primary font-bold">Create new project</p>
              </Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <ProjectCard
              url="hackathon"
              title="HackX Buildathon"
              description="Building the first open-source hackathon platform where everything lives on IPFS"
              lastEdited="6 days ago" />
          </div>
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <ProjectCard
              url="hackathon"
              title="HackX Buildathon"
              description="Building the first open-source hackathon platform where everything lives on IPFS"
              lastEdited="6 days ago" />
          </div>
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <ProjectCard
              url="hackathon"
              title="HackX Buildathon"
              description="Building the first open-source hackathon platform where everything lives on IPFS"
              lastEdited="6 days ago" />
          </div>
        </div>

        <div className="flex justify-between mt-15">
          <div className="gap-4 grid grid-cols-8">
            <div className="col-span-4">
              <h1 className="text-slate-800 text-2xl mb-3 font-bold flex items-center gap-2">Registered Hackathons</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-2">
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
            participant="111+ participants"
            isRegistered={true} />
        </div>

        <div className="flex justify-between mt-15">
          <div className="gap-4 grid grid-cols-8">
            <div className="col-span-4">
              <h1 className="text-slate-800 text-2xl mb-3 font-bold flex items-center gap-2">Open Voting</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-2">
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
