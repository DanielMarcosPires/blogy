"use client";
import { Button } from "@/Components/Button/Button";
/* eslint-disable sort-imports */
/* eslint-disable @next/next/no-img-element */
import { useScrollState } from "@/Hook/useScrollState";
import Link from "next/link";
export function Header({ displayCSS }) {
  const scrollStatus = useScrollState();

  return (
    <header
      className={`
       ${displayCSS} z-40 w-full items-center 
       justify-center  py-5 transition-all 
       ${scrollStatus >= 15 ? "bg-[#000000ac]" : ""}
      `}
    >
      <div className="mx-auto flex w-4/5 items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/images/logo.svg" width={101} height={40} alt="Blogr" />
        </div>
        <div className="flex gap-2">
          <Button variant="primary">
            <Link href={"/Repository"}>Repository</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
