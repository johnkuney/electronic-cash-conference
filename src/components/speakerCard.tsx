export default function SpeakerCard() {
  return (
    <div className="flex w-full flex-col p-4 sm:w-1/2 md:w-1/3">
      <div className="relative flex h-[200px] w-full items-end justify-end md:h-[250px] lg:h-[300px]">
        <img
          src="/armani.png"
          className="absolute left-1/2 z-10 max-h-full max-w-full -translate-x-1/2"
        />
        <div className="from-accent/50 to-background border-accent h-2/3 w-full rounded-t-lg border-x-2 border-t-2 bg-gradient-to-b"></div>
      </div>
      <div className="bg-card p-6">
        <h3 className="text-xl leading-tight font-black">Vin Armani</h3>
        <span className="text-accent text-lg font-bold">Title</span>
        <p className="text-secondaryText mt-3 text-base">
          Lead developer of Bitcoin ABC and a driving force behind the launch of
          Bitcoin Cash and eCash. Known for his work on scalable blockchain
          infrastructure and protocol design.
        </p>
      </div>
    </div>
  )
}
