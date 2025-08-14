"use client";

import { SVGProps } from "react";
import Link from "next/link";

export const ClockIcon = (props: SVGProps<SVGSVGElement>) => {
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
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
    </svg>
  );
};
export const CodeIcon = (props: SVGProps<SVGSVGElement>) => {
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
      <path fill="currentColor" fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
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
export const MoneyIcon = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" />
    </svg>
  );
};

type HackathonCardProps = {
  url: string;
  title: string;
  status: string;
  description: string;
  deadline: string;
  techStack: string;
  level: string;
  totalPrize: string;
  eventLocation: string;
  participant: string;
}

export const HackathonCard = ({ url, title, status, description, deadline, techStack, level, totalPrize, eventLocation, participant }: HackathonCardProps) => {

  const IconClass = "text-slate-300";
  const statusClass =
    status?.toLowerCase() === "live"
      ? "bg-green-50 text-green-600"
      : status?.toLowerCase() === "ended"
        ? "bg-red-50 text-red-600 font-bold"
        : "bg-gray-50 text-gray-600";

  return (
    <Link href={url} className="block group">
      <div className="rounded-xl border-1 border-gray-200 px-6 py-6 hover:bg-gray-50 flex gap-4 justify-between">
        <div className="flex flex-col">
          <div className="flex gap-3 items-center mb-3">
            <h1 className="font-bold">{title}</h1>
            <div className={`${statusClass} text-xs px-3 py-0.5 rounded-medium`}>{status}</div>
          </div>
          <p className="text-slate-600 text-sm mb-4">{description}</p>
          <div className="flex gap-10">
            <div>
              <div className="flex gap-2 mb-1">
                <ClockIcon className={IconClass} />
                <p className="text-xs text-slate-400">Registration Close</p>
              </div>
              <p className="text-sm font-bold">{deadline}</p>
            </div>
            <div>
              <div className="flex gap-2 mb-1">
                <CodeIcon className={IconClass} />
                <p className="text-xs text-slate-400">Tech Stack</p>
              </div>
              <p className="text-sm font-bold">{techStack}</p>
            </div>
            <div>
              <div className="flex gap-2 mb-1">
                <BoltIcon className={IconClass} />
                <p className="text-xs text-slate-400">Level</p>
              </div>
              <p className="text-sm font-bold">{level}</p>
            </div>
            <div>
              <div className="flex gap-2 mb-1">
                <MoneyIcon className={IconClass} />
                <p className="text-xs text-slate-400">Total Prize</p>
              </div>
              <p className="text-sm font-bold">{totalPrize}</p>
            </div>
          </div>
          <div className="mt-auto flex gap-2">
            <div className="bg-primary-50 px-3 py-1 text-xs text-primary-600 rounded-4xl">{eventLocation}</div>
            <div className="bg-primary-50 px-3 py-1 text-xs text-primary-600 rounded-4xl">{participant}</div>
          </div>
        </div>
        <div className="w-[40%] min-w-[40%] rounded-xl overflow-hidden">
          <img src="https://placehold.co/600x250" className="w-full max-w-full" alt="" />
        </div>
      </div>
    </Link>
  );
};
