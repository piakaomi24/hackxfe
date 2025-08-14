"use client";

import { Button } from "@heroui/button";
import { SVGProps } from "react";
import { HackathonCard } from "@/components/hackathoncard";
import { Select, SelectItem } from "@heroui/select";
import { Tabs, Tab } from "@heroui/tabs";

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

export default function HackathonPage() {
  return (
    <section>
      <div className="container mx-auto max-w-6xl py-10">
        <Tabs aria-label="Options" className="w-full" color="primary" radius="full">
          <Tab key="overview" title="Overview">
            <div className="py-10">
              <h1 className="text-2xl font-bold mb-4">ChainSpark Hackathon</h1>
              <img src="https://placehold.co/1200x400" className="w-full max-w-full" alt="" />
              <div className="grid grid-cols-12 gap-4 mt-10">
                <div className="col-span-8">
                  <div>
                    <h1 className="font-bold mb-4">ChainSpark Hackathon</h1>
                    <h2 className="font-bold mb-4">Calling All Builders, Dreamers, and Rule-Breakers!</h2>
                    <p className="mb-4">The crypto world is a wild ride—full of chaos, opportunity, and endless what-ifs. But one thing’s for sure: innovation thrives where builders and storytellers collide. That’s why FAIR3 and CARV are teaming up to launch the Tech Fairness Hackathon, a high-octane sprint to redefine the future of AI, Data, and Web3.</p>
                    <p>This isn’t just another hackathon. It’s a battlefield for fairness, a playground for disruptors, and a launchpad for the next wave of decentralized innovation. Whether you’re an AI wizard</p>
                  </div>
                  <div className="mt-10">
                    <h1 className="font-bold mb-4">ChainSpark Hackathon</h1>
                    <h2 className="font-bold mb-4">Calling All Builders, Dreamers, and Rule-Breakers!</h2>
                    <p className="mb-4">The crypto world is a wild ride—full of chaos, opportunity, and endless what-ifs. But one thing’s for sure: innovation thrives where builders and storytellers collide. That’s why FAIR3 and CARV are teaming up to launch the Tech Fairness Hackathon, a high-octane sprint to redefine the future of AI, Data, and Web3.</p>
                    <p>This isn’t just another hackathon. It’s a battlefield for fairness, a playground for disruptors, and a launchpad for the next wave of decentralized innovation. Whether you’re an AI wizard</p>
                  </div>
                  <hr className="my-10 text-gray-200" />
                  <div>
                    <h1 className="font-bold mb-4">ChainSpark Hackathon</h1>
                    <h2 className="font-bold mb-4">Calling All Builders, Dreamers, and Rule-Breakers!</h2>
                    <p className="mb-4">The crypto world is a wild ride—full of chaos, opportunity, and endless what-ifs. But one thing’s for sure: innovation thrives where builders and storytellers collide. That’s why FAIR3 and CARV are teaming up to launch the Tech Fairness Hackathon, a high-octane sprint to redefine the future of AI, Data, and Web3.</p>
                    <p>This isn’t just another hackathon. It’s a battlefield for fairness, a playground for disruptors, and a launchpad for the next wave of decentralized innovation. Whether you’re an AI wizard</p>
                  </div>
                  <hr className="my-10 text-gray-200" />
                  <div>
                    <h1 className="font-bold mb-4">ChainSpark Hackathon</h1>
                    <h2 className="font-bold mb-4">Calling All Builders, Dreamers, and Rule-Breakers!</h2>
                    <p className="mb-4">The crypto world is a wild ride—full of chaos, opportunity, and endless what-ifs. But one thing’s for sure: innovation thrives where builders and storytellers collide. That’s why FAIR3 and CARV are teaming up to launch the Tech Fairness Hackathon, a high-octane sprint to redefine the future of AI, Data, and Web3.</p>
                    <p>This isn’t just another hackathon. It’s a battlefield for fairness, a playground for disruptors, and a launchpad for the next wave of decentralized innovation. Whether you’re an AI wizard</p>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab key="prize-judge" title="Prize & Judge">
            <div className="py-10"></div>
          </Tab>
          <Tab key="schedule" title="Schedule">
            <div className="py-10"></div>
          </Tab>
          <Tab key="submitted-projects" title="Submitted Projects">
            <div className="py-10"></div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
}
