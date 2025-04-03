export default function Home() {
  return (
    <div>
      <section className="relative">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pt-40 pb-30 lg:grid-cols-2">
          <div className="z-10">
            <span className="text-accent tracking-[12px]">SAVE THE DATE</span>
            <h1 className="text-5xl font-black sm:text-6xl md:text-[90px]">
              ELECTRONIC
              <br />
              CASH
              <br />
              CONFERENCE
              <br />
              <span className="font-normal">BARCELONA</span>
            </h1>

            <div className="text-pop mt-4 text-2xl tracking-[12px] md:text-5xl">
              OCT 4-5 | 2025
            </div>

            {/* <Link
              href="#register"
              className="from-accent to-accentDark mt-10 inline-block rounded-full bg-gradient-to-r px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Register Now
            </Link> */}
          </div>

          <div className="relative z-7 flex h-[350px] items-center justify-center lg:h-[620px]">
            <img
              src="/hero.png"
              alt="Electronic Cash Logo"
              className="max-h-full max-w-full"
            />
          </div>
        </div>
        <div className="from-accent/20 to-background/0 pointer-events-none absolute bottom-0 h-200 w-full bg-gradient-to-t via-transparent" />
      </section>
      <section className="mx-auto max-w-7xl px-6 py-30" id="about">
        <h2>About</h2>
        <p className="max-w-3xl text-lg leading-loose">
          Join us in Barcelona for the Electronic Cash Conference — a two-day
          gathering of developers, researchers, builders, and advocates focused
          on the future of digital money.
          <br />
          <br />
          Through talks, panels, and hands-on workshops, we&apos;ll explore
          topics like privacy-preserving payments, permissionless innovation,
          and what it means to build resilient, global peer-to-peer cash
          systems.
          <br />
          <br />
          Come connect with the community pushing the boundaries of what&apos;s
          possible in decentralized finance.
        </p>
      </section>

      {/* <section className="mx-auto max-w-7xl px-6 pt-0 pb-30">
        <h2>Speakers</h2>
        <div className="flex flex-wrap">
          {speakers.map((speaker, i) => (
            <SpeakerCard key={i} speaker={speaker} />
          ))}
        </div>
      </section> */}

      <section className="mx-auto max-w-7xl px-6 pt-0 pb-30" id="location">
        <h2>Location</h2>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex w-full flex-col md:w-1/2">
            <p className="text-lg leading-loose">
              A city where innovation meets tradition — Barcelona is a vibrant
              hub of culture, architecture, and forward-thinking energy, and the
              perfect place to explore the future of peer-to-peer money
            </p>
            <div className="mt-6 flex items-center gap-6">
              <img src="/pin.png" className="h-16" />
              <div className="text-xl font-bold">
                Barcelona, Spain
                <br />
                Venue TBD
                <br />
                October 4-5, 2025
              </div>
            </div>
          </div>
          <div className="mt-6 w-full md:mt-0 md:w-1/2">
            <img
              src="/barcelona.png"
              alt="Barcelona"
              className="max-h-full max-w-full"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
