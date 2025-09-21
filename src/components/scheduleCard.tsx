import { ScheduleItem } from '@/app/data'

interface ScheduleCardProps {
  item: ScheduleItem
}

const getTypeStyles = (type: ScheduleItem['type']) => {
  switch (type) {
    case 'talk':
      return 'bg-white/10 p-4'
    case 'break':
      return 'py-1 px-4'
    default:
      return 'bg-white/10'
  }
}

export default function ScheduleCard({ item }: ScheduleCardProps) {
  return (
    <div
      className={`rounded-lg transition-all hover:shadow-md ${getTypeStyles(
        item.type,
      )}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          {item.speaker ? (
            <div className="text-base font-semibold lg:text-lg">
              {item.speaker}
            </div>
          ) : (
            <div className="text-sm font-semibold">{item.title}</div>
          )}
          {item.speaker && (
            <p className="text-secondaryText pr-6 text-sm lg:text-sm">
              {item.title}
            </p>
          )}
          {item.location && (
            <p className="mt-1 text-sm opacity-70">{item.location}</p>
          )}
        </div>
        <div className="text-right text-sm lg:text-base">{item.time}</div>
      </div>
    </div>
  )
}
