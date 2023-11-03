import { Button } from "@/Components/Button/Button";

/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <section className="relative z-0 flex h-[300px] justify-center overflow-hidden rounded-b-3xl bg-gradient-to-r from-[#ff8f70] to-[#ff3d54] text-center">
      <div className="relative z-20 my-20 flex w-4/5 flex-col items-center">
        <h1 className="pt-5 text-4xl font-bold text-white">
          A modern publishing platform
        </h1>
        <p className="py-5 text-white">
          Grow your audience and build your online brand
        </p>
        <div className="flex justify-center gap-2">
          <Button
            className="text-1xl rounded-full px-3 py-2 transition-all hover:bg-[#ffffffbe]"
            variant="secondary"
          >
            Start for free
          </Button>
          .
          <Button
            className="text-1xl rounded-full border border-white px-3 py-2 transition-all hover:bg-white hover:text-black"
            variant="primary"
          >
            Learn more
          </Button>
        </div>
      </div>
      <img
        src="/images/bg-pattern-intro-desktop.svg"
        width={200}
        height={200}
        className="absolute bottom-[-280px] left-[50%] h-[1000px] w-[1000px] -rotate-[40deg] 2xl:left-[50%]"
        alt="none"
      />
    </section>
  );
}
