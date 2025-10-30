import { Speakers } from '../app/data'

interface SpeakerCardProps {
  speaker: Speakers
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <div className="flex w-full flex-col p-4 md:w-1/2 lg:w-1/3">
      <div className="relative flex h-[200px] w-full items-end justify-end md:h-[250px] lg:h-[300px]">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="absolute left-1/2 z-10 max-h-full max-w-full -translate-x-1/2"
        />
        <div className="from-accent/50 to-background border-accent h-2/3 w-full rounded-t-lg border-x-2 border-t-2 bg-gradient-to-b"></div>
      </div>
      <div className="bg-card border-accent/40 flex h-full flex-1 flex-col border-x-2 border-b-2 p-6">
        <h3 className="text-2xl leading-tight font-black">{speaker.name}</h3>
        <span className="text-accent text-sm font-bold">{speaker.title}</span>
        <p className="text-secondaryText mt-3 text-base">{speaker.bio}</p>
        {speaker.videoId && (
          <div className="mt-auto w-full">
            <div className="relative mt-8 w-full pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 h-full w-full rounded"
                src={`https://www.youtube.com/embed/${speaker.videoId}`}
                title={`YouTube video player - ${speaker.name}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function SpeakerCardDummy() {
  return (
    <div className="flex w-full flex-col p-4 sm:w-1/2 md:w-1/4">
      <div className="relative flex h-[200px] w-full items-end justify-end md:h-[250px] lg:h-[300px]">
        <img
          src="/blank-speaker.png"
          alt="ECC Speaker"
          className="absolute left-1/2 z-10 max-h-full max-w-full -translate-x-1/2"
        />
        <div className="from-accent/50 to-background border-accent h-2/3 w-full rounded-t-lg border-x-2 border-t-2 bg-gradient-to-b"></div>
      </div>
      <div className="bg-card flex-1 p-6">
        <div className="bg-secondaryText h-4 w-full opacity-60"></div>
        <div className="bg-secondaryText mt-4 h-2 w-full opacity-30"></div>
        <div className="bg-secondaryText mt-2 h-2 w-full opacity-30"></div>
        <div className="bg-secondaryText mt-2 h-2 w-2/3 opacity-30"></div>
      </div>
    </div>
  )
}
