import { Speakers } from '../app/data'

interface SpeakerCardProps {
  speaker: Speakers
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <div className="flex w-full flex-col p-4 sm:w-1/2 md:w-1/3">
      <div className="relative flex h-[200px] w-full items-end justify-end md:h-[250px] lg:h-[300px]">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="absolute left-1/2 z-10 max-h-full max-w-full -translate-x-1/2"
        />
        <div className="from-accent/50 to-background border-accent h-2/3 w-full rounded-t-lg border-x-2 border-t-2 bg-gradient-to-b"></div>
      </div>
      <div className="bg-card flex-1 p-6">
        <h3 className="text-xl leading-tight font-black">{speaker.name}</h3>
        <span className="text-accent text-sm font-bold">{speaker.title}</span>
        <p className="text-secondaryText mt-3 text-base">{speaker.bio}</p>
      </div>
    </div>
  )
}
