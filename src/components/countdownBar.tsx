'use client'

import { useState, useEffect } from 'react'
import { Clock, Tag } from 'lucide-react'

export default function CountdownBar() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [showCountdown, setShowCountdown] = useState(false)

  useEffect(() => {
    const startTime = new Date('2025-09-04T02:00:00.000+01:00')
    const endTime = new Date('2025-09-07T02:00:00.000+01:00')

    const checkTime = () => {
      const now = new Date()

      // Check if we're past the start time
      if (now >= startTime) {
        setShowCountdown(true)

        // Calculate time left until end
        const difference = endTime.getTime() - now.getTime()

        if (difference > 0) {
          const hours = Math.floor(difference / (1000 * 60 * 60))
          const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60),
          )
          const seconds = Math.floor((difference % (1000 * 60)) / 1000)

          setTimeLeft({ hours, minutes, seconds })
        } else {
          setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
          setShowCountdown(false)
        }
      } else {
        setShowCountdown(false)
      }
    }

    // Check immediately
    checkTime()

    // Then check every second
    const timer = setInterval(checkTime, 1000)

    return () => clearInterval(timer)
  }, [])

  // Don't show if countdown hasn't started or is finished
  if (!showCountdown) {
    return null
  }

  return (
    <div
      className="from-accent to-accentDark cursor-pointer bg-gradient-to-r px-6 py-5 text-white transition-opacity duration-200 hover:opacity-90"
      onClick={() =>
        document
          .getElementById('tickets')
          ?.scrollIntoView({ behavior: 'smooth' })
      }
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 text-center font-bold sm:flex-row sm:text-left lg:text-lg">
        <div className="flex items-center gap-2">
          <Tag className="hidden h-4 w-4 lg:block" />
          <span>
            Use code: <span className="text-yellow-400">ECC</span> for 30% off!
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="hidden h-4 w-4 lg:block" />
          <span className="text-left">Limited time offer ends in</span>
          <div className="flex items-center gap-1 font-mono text-sm lg:text-lg">
            <span className="rounded bg-white/20 px-2 py-1">
              {timeLeft.hours.toString().padStart(2, '0')}
            </span>
            <span className="text-white/80">:</span>
            <span className="rounded bg-white/20 px-2 py-1">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </span>
            <span className="text-white/80">:</span>
            <span className="rounded bg-white/20 px-2 py-1">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
