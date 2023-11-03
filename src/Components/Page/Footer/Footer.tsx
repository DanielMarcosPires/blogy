/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="rounded-tr-[100px] bg-zinc-800 py-20">
      <div className="mx-auto flex w-4/5 items-start justify-around text-white">
        <h2>
          <img
            width={101}
            height={40}
            src="/images/logo.svg"
            alt="Blogr Logo"
          />
        </h2>
        <div className="flex flex-col items-start justify-center">
          <h3 className="py-10 font-bold">Product</h3>
          <Link className="py-1 text-[#ffffffac]" href={"#"}>
            Overview
          </Link>
          <Link className="py-1 text-[#ffffffac]" href={"#"}>
            Pricing
          </Link>
          <Link className="py-1 text-[#ffffffac]" href={"#"}>
            Marketplace
          </Link>
          <Link className="py-1 text-[#ffffffac]" href={"#"}>
            Feature
          </Link>
          <Link className="py-1 text-[#ffffffac]" href={"#"}>
            Integration
          </Link>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h3 className="py-10 font-bold">Company</h3>
          <Link className="py-1 text-[#ffffffac]" href={"#"}>
            About
          </Link>
          <Link className="py-1 text-[#ffffffac]" href={"#"}>
            Team
          </Link>
          <Link className="py-1 text-[#ffffffac]" href={"#"}>
            Blog
          </Link>
          <Link className="py-1 text-[#ffffffac]" href={"#"}>
            Careers
          </Link>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h3 className="py-10 font-bold">Connect</h3>
          <Link className="py-1 text-[#ffffffac]" href={"#"}>
            Contact
          </Link>
          <Link className="py-1 text-[#ffffffac]" href={"#"}>
            Newslatter
          </Link>
          <Link className="py-1 text-[#ffffffac]" href={"#"}>
            Linkedin
          </Link>
        </div>
      </div>
    </footer>
  );
}
