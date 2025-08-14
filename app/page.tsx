"use client";

import { Button } from "@heroui/button";
import { SVGProps } from "react";
import { HackathonCard } from "@/components/hackathoncard";
import { Select, SelectItem } from "@heroui/select";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay";

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => {
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
      <path fill="currentColor" fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
    </svg>
  );
};
export const BoltIcon = (props: SVGProps<SVGSVGElement>) => {
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
      <path fill="currentColor" fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
    </svg>
  );
};
export const MoonIcon = (props: SVGProps<SVGSVGElement>) => {
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
      <path fill="currentColor" fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
    </svg>
  );
};
export const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => {
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
      <path fill="currentColor" fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
  );
};

export default function Home() {
  return (
    <section>
      <div className="container mx-auto max-w-6xl py-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide>
            <div className="rounded-3xl overflow-hidden">
              <img src="https://placehold.co/1200x400" className="w-full max-w-full" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-3xl overflow-hidden">
              <img src="https://placehold.co/1200x400" className="w-full max-w-full" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-3xl overflow-hidden">
              <img src="https://placehold.co/1200x400" className="w-full max-w-full" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="flex justify-between mt-10">
          <div className="gap-4 grid grid-cols-8">
            <div className="col-span-4">
              <h1 className="text-slate-800 text-2xl mb-3 font-bold flex items-center gap-2"><BoltIcon className="text-primary text-lg" />Explore Hackathons</h1>
              <p className="text-slate-500 text-sm">Welcome to your hackathon dashboard! Manage projects, invite teammates, and track your hackathon journey with ease — all in one place.</p>
            </div>
            <div className="col-span-4 flex flex-col items-end text-end">
              <Button color="primary" startContent={<PlusIcon />} size="sm" variant="shadow">
                Host a Hackathon
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-start gap-3">
          <div className="max-w-3xs w-xs">
            <Select
              label="Total Prize"
              labelPlacement="outside"
            >
              <SelectItem key="All">All</SelectItem>
            </Select>
          </div>
          <div className="max-w-3xs w-xs">
            <Select
              label="Ecosystem"
              labelPlacement="outside"
            >
              <SelectItem key="All">All</SelectItem>
            </Select>
          </div>
          <div className="max-w-3xs w-xs">
            <Select
              label="Tech Stack"
              labelPlacement="outside"
            >
              <SelectItem key="All">All</SelectItem>
            </Select>
          </div>
          <div className="max-w-3xs w-xs">
            <Select
              label="Status"
              labelPlacement="outside"
            >
              <SelectItem key="All">All</SelectItem>
            </Select>
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
          <HackathonCard
            url="hackathon"
            title="Solana x AI Students Hack"
            status="Live"
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
            status="Live"
            description="Nigeria's premier student hackathon focused on Solana development and AI agents"
            deadline="25 Days Left"
            techStack="All"
            level="-"
            totalPrize="10,000 USD"
            eventLocation="Online"
            participant="400+ participants" />
          <HackathonCard
            url="hackathon"
            title="MetaMask Embedded Wallets & Solana Dev Cook-Off"
            status="Live"
            description="Nigeria's premier student hackathon focused on Solana development and AI agents"
            deadline="25 Days Left"
            techStack="All"
            level="-"
            totalPrize="10,000 USD"
            eventLocation="Online"
            participant="400+ participants" />
          <HackathonCard
            url="hackathon"
            title="HDBank Hackathon - Galaxy of Innovation 2025"
            status="Live"
            description="Nigeria's premier student hackathon focused on Solana development and AI agents"
            deadline="25 Days Left"
            techStack="All"
            level="-"
            totalPrize="10,000 USD"
            eventLocation="Online"
            participant="400+ participants" />
        </div>

        <hr className="my-10 mt-15 border-gray-100" />

        <div className="flex justify-between w-full">
          <div className="gap-2 grid grid-cols-8 w-full">
            <div className="col-span-4">
              <h1 className="text-slate-800 text-2xl mb-3 font-bold flex items-center gap-2"><MoonIcon className="text-yellow-400 text-lg" />Past Hackathons</h1>
            </div>
            <div className="col-span-4 flex items-center justify-end text-end">
              <Button color="default" endContent={<ArrowRightIcon />} size="sm" variant="faded" className="border-1">
                View More
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          <HackathonCard
            url="hackathon"
            title="HackX Buildathon"
            status="Ended"
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
            status="Ended"
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
            status="Ended"
            description="Nigeria's premier student hackathon focused on Solana development and AI agents"
            deadline="25 Days Left"
            techStack="All"
            level="-"
            totalPrize="10,000 USD"
            eventLocation="Online"
            participant="400+ participants" />
          <HackathonCard
            url="hackathon"
            title="MetaMask Embedded Wallets & Solana Dev Cook-Off"
            status="Ended"
            description="Nigeria's premier student hackathon focused on Solana development and AI agents"
            deadline="25 Days Left"
            techStack="All"
            level="-"
            totalPrize="10,000 USD"
            eventLocation="Online"
            participant="400+ participants" />
          <HackathonCard
            url="hackathon"
            title="HDBank Hackathon - Galaxy of Innovation 2025"
            status="Ended"
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
