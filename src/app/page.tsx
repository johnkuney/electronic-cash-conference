// import { SpeakerCardDummy } from '@/components/speakerCard'
import { speakers } from './data'
import SpeakerCard from '@/components/speakerCard'
export default function Home() {
  const LogoImage = ({ image }: { image: string }) => (
    <div className="my-6 flex w-1/2 items-center justify-center px-6 md:my-0 md:w-1/4">
      <img
        className="h-auto max-h-[50px] w-full object-contain"
        src={`/${image}`}
        alt="ECC Supporter"
      />
    </div>
  )

  return (
    <div>
      <section className="relative bg-[url('/bg2.jpg')] bg-cover bg-center bg-no-repeat">
        <div
          className="fade-bg absolute top-0 left-0 h-full w-full bg-black"
          style={{ animationDelay: '200ms' }}
        ></div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pt-40 pb-30 lg:grid-cols-2">
          <div className="fade-up z-10" style={{ animationDelay: '300ms' }}>
            <span className="text-accent tracking-[12px]">SAVE THE DATE</span>
            <h1 className="text-5xl font-black sm:text-6xl md:text-[90px]">
              ELECTRONIC
              <br />
              CASH
              <br />
              CONFERENCE
              <br />
              <span className="font-light">BARCELONA</span>
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

          {/* <div className="relative z-7 flex h-[350px] items-center justify-center lg:h-[620px]">
            <img
              src="/hero-3.png"
              alt="Electronic Cash Logo"
              className="max-h-full max-w-full"
            />
          </div> */}
        </div>
        <div className="from-accent/20 to-background/0 pointer-events-none absolute bottom-0 h-200 w-full bg-gradient-to-t via-transparent" />
      </section>
      <div
        className="fade-up mx-auto mt-10 flex max-w-7xl flex-wrap items-center md:mt-20"
        style={{ animationDelay: '600ms' }}
      >
        <LogoImage image="ecash-logo.png" />
        <LogoImage image="paybutton-logo.png" />
        <LogoImage image="gnc-logo.png" />
        <LogoImage image="tixtown-logo.png" />
      </div>
      <section
        className="fade-up mx-auto max-w-7xl px-6 py-30"
        id="about"
        style={{ animationDelay: '600ms' }}
      >
        <h2>About</h2>
        <div className="flex flex-col items-start gap-10 md:flex-row">
          <p className="max-w-3xl text-lg leading-loose">
            Join us in Barcelona for the Electronic Cash Conference — a two-day
            gathering of developers, researchers, builders, and advocates
            focused on the future of digital money.
            <br />
            <br />
            Through talks, panels, and hands-on workshops, we&apos;ll explore
            topics such as building the permissionless economy, new products
            enabled by the properties of scalable digital cash, and what it
            means to build resilient global peer-to-peer cash systems.
            <br />
            <br />
            Come connect with the community pushing the boundaries of
            what&apos;s possible in decentralized finance.
          </p>
          <img src="/hall.jpg" className="w-full md:w-1/2" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-0 pb-30" id="speakers">
        <h2>Speakers</h2>
        <p className="text-lg leading-loose">
          We’re excited to host a lineup of incredible speakers
        </p>
        <div className="flex flex-wrap">
          {speakers.map((speaker, i) => (
            <SpeakerCard key={i} speaker={speaker} />
          ))}
          {/* <SpeakerCardDummy />
          <SpeakerCardDummy />
          <SpeakerCardDummy />
          <SpeakerCardDummy /> */}
        </div>
      </section>

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
                <a
                  href="https://www.nh-hotels.com/en/hotel/nh-sants-barcelona"
                  target="_blank"
                  className="hover:text-accent underline"
                >
                  Hotel NH Sants Barcelona
                </a>
                <br />
                Carrer Numància, 74, Les Corts, 08029
                <br />
                Barcelona, Spain
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

      <section
        className="mx-auto max-w-7xl scroll-mt-[100px] px-6 pt-0 pb-30"
        id="tickets"
      >
        <h2>Tickets</h2>
        <div className="flex flex-col items-start gap-10 md:flex-row">
          <div>
            <p className="md:w-2/3">
              Tickets for the Electronic Cash Conference 2025 are still
              available! Buy now with crypto or fiat.
            </p>
            <div className="flex w-full flex-col gap-4 lg:max-w-[300px]">
              <a
                href="https://buy.ecashconference.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="from-accent to-accentDark mt-8 inline-flex w-full justify-center rounded-full bg-gradient-to-r px-12 py-3 text-center font-semibold text-white transition duration-200 hover:opacity-90 md:w-[unset]"
              >
                Buy with Crypto
              </a>
              <a
                href="https://app.tixtown.com/event/detail?code=ECC"
                target="_blank"
                rel="noopener noreferrer"
                className="from-accent to-accentDark mt-8 inline-flex w-full justify-center rounded-full bg-gradient-to-r px-12 py-3 text-center font-semibold text-white transition duration-200 hover:opacity-90 md:w-[unset]"
              >
                Buy with Fiat
              </a>
            </div>
          </div>
          <img
            src="/ticket2.jpg"
            alt="ECC Ticket"
            className="w-full md:w-1/2"
          />
        </div>
      </section>

      <section className="w-full bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-40 pt-20">
          <img
            src="/ecc-logo.png"
            alt="Electronic Cash Conference Logo"
            className="h-14 w-auto"
          />
          <a
            href="https://x.com/eCash"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/x.png"
              alt="Electronic Cash Conference Logo"
              className="h-8 w-auto"
            />
          </a>
        </div>
      </section>
    </div>
  )
}
