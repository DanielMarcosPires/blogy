/* eslint-disable @next/next/no-img-element */
export default function Infrastructure() {
  return (
    <div className="relative">
      <img
        src="/images/illustration-phones.svg"
        className="absolute inset-0 top-[-50px] z-20"
        width={500}
        alt="O blogy também está disponível para smartphone"
      />
      <section className="relative right-2 h-80 w-full overflow-hidden rounded-bl-[50px] rounded-tr-[50px] bg-gradient-to-r from-[#2c2d3f] to-[rgb(63,65,100)]">
        <div className="grid h-full w-4/5 grid-cols-2 items-center">
          <div>
            <img
              src="/images/bg-pattern-circles.svg"
              className="absolute top-[-150px] z-10"
              width={500}
              alt=""
            />
          </div>
          <div className=" flex flex-col px-8 text-white">
            <h2 className="my-4 text-3xl font-bold">
              State of the Art Infrastructure
            </h2>
            <p>
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
