import Link from 'next/link'
import SpeakerCard from '@/components/speakerCard'
import { speakers } from './data'

export default function Home() {
  return (
    <div>
      <section className="relative">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pt-40 pb-30 lg:grid-cols-2">
          <div className="z-10">
            <h1 className="text-5xl font-black sm:text-6xl md:text-[90px]">
              ELECTRONIC
              <br />
              CASH
              <br />
              CONFERENCE
              <br />
              <span className="text-accent">BARCELONA</span>
            </h1>

            <div className="text-accent mt-4 text-2xl tracking-[12px] opacity-60 md:text-5xl">
              OCT 4-5 | 2025
            </div>

            <Link
              href="#register"
              className="from-accent to-accentDark mt-10 inline-block rounded-full bg-gradient-to-r px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Register Now
            </Link>
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
      <section className="mx-auto max-w-7xl py-30">
        <h2>About</h2>
        <p className="max-w-3xl text-lg leading-loose">
          Join us in Barcelona for the Electronic Cash Conference — a two-day
          gathering of developers, researchers, builders, and advocates focused
          on the future of digital money.
          <br />
          <br />
          Through talks, panels, and hands-on workshops, we'll explore topics
          like privacy-preserving payments, permissionless innovation, and what
          it means to build resilient, global peer-to-peer cash systems.
          <br />
          <br />
          Come connect with the community pushing the boundaries of what's
          possible in decentralized finance.
        </p>
      </section>

      <section className="mx-auto max-w-7xl pt-0 pb-30">
        <h2>Speakers</h2>
        <div className="flex flex-wrap">
          {speakers.map((speaker, i) => (
            <SpeakerCard key={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
