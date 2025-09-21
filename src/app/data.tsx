export interface Speakers {
  name: string
  image: string
  title?: string
  bio?: string
}

export const speakers: Speakers[] = [
  {
    name: 'Amaury Séchet',
    image: '/sechet.png',
    title: 'Founder Bitcoin ABC',
    bio: 'Amaury Séchet is the founder of Bitcoin ABC and creator of Bitcoin Cash (BCH) and eCash (XEC). He is specialized in scaling large-system architecture and was the lead developer at the Snazzy D Compiler. Amaury worked for Facebook researching digital cash solutions before his involvement in crypto.',
  },
  {
    name: 'Joey King',
    image: '/king.png',
    title: 'eCash dev',
    bio: 'Joey King is a senior full stack dev for Bitcoin ABC, where he works on JS toolkits and eCash products. He is the lead developer of Cashtab.com. A mechanical engineer, Joey worked for 10 years at ExxonMobil and Samsung before transitioning to crypto full time in 2017.',
  },
  {
    name: 'Vin Armani',
    image: '/armani.png',
    title: 'CTO Marianas Rai Corp',
    bio: "Vin Armani is a technologist, entrepreneur, and author in the digital assets space. He is the founder and CTO of Marianas Rai Corp, which launched the world's first publicly issued dollar token, TUSDT. Known for his contributions and thought leadership on Bitcoin, he gained over a decade of experience developing multiple innovative digital payment protocols.",
  },
  {
    name: 'Tobias Ruck',
    image: '/ruck.png',
    title: 'CTO of TixTown',
    bio: 'Tobias Ruck is an award-winning software developer and entrepreneur in the digital assets space. He is the CTO of TixTown.com and works as a developer for eCash. Holds a B.Sc in Applied Computer Science from DHBW Stuttgart, he worked on Bitcoin Cash, at the German Aerospace Center, and at Hewlett-Packard.',
  },
  {
    name: 'Mathieu Geukens',
    image: '/geukens.png',
    title: 'BCH Developer',
    bio: "Mathieu Geukens is a Bitcoin Cash developer spearheading the CashTokens ecosystem. He's the creator of the Cashonize wallet and contributes to the development of the CashScript language, tooling, and SDK. After earning his Master's in Economics from KU Leuven, Mathieu began his professional developer journey in 2022.",
  },
  {
    name: 'Reuben Yap',
    image: '/yap.png',
    title: 'Co-founder Firo',
    bio: "Reuben Yap is the co-founder of FIRO, where he leads the project's strategy, development goals, and research efforts. A long-time advocate for online and financial privacy, Reuben founded one of Southeast Asia's earliest VPN services to fight censorship. With a background as a practicing lawyer for over a decade, Reuben brings both technical and legal expertise to the privacy conversation.",
  },
]

export interface ScheduleItem {
  id: string
  time: string
  title?: string
  speaker?: string
  type: 'talk' | 'break'
  location?: string
  description?: string
}

export interface ScheduleDay {
  date: string
  day: string
  items: ScheduleItem[]
}

export const schedule: ScheduleDay[] = [
  {
    date: 'Friday, Oct 3rd',
    day: 'Friday',
    items: [
      {
        id: 'friday-dinner',
        time: '18:30 - 21:30',
        speaker: 'Meet & Greet, Dinner',
        type: 'talk',
      },
    ],
  },
  {
    date: 'Saturday, Oct 4th',
    day: 'Saturday',
    items: [
      {
        id: 'saturday-vin',
        time: '8:30 - 9:15',
        title: 'Why eCash is the Best Network for Stablecoins',
        speaker: 'Vin Armani',
        type: 'talk',
      },
      {
        id: 'saturday-mathieu',
        time: '9:15 - 10:00',
        title: 'Unlocking the Power of Bitcoin Script',
        speaker: 'Mathieu Geukens',
        type: 'talk',
      },
      {
        id: 'saturday-break1',
        time: '10:00 - 10:45',
        title: 'Break',
        type: 'break',
      },
      {
        id: 'saturday-tobias',
        time: '10:45 - 11:30',
        title: 'New Transaction Format: For/Against',
        speaker: 'Tobias Ruck',
        type: 'talk',
      },
      {
        id: 'saturday-joey',
        time: '11:30 - 12:00',
        title:
          'Darkest Before the Dawn: Unstoppable Small-caps in an Age of Memes',
        speaker: 'Joey King',
        type: 'talk',
      },
      {
        id: 'saturday-lunch',
        time: '12:00 - 1:45',
        title: 'Lunch',
        type: 'break',
      },
      {
        id: 'saturday-keynote',
        time: '1:45 - 2:30',
        title: 'Keynote: Overview of upcoming eCash features',
        speaker: 'Amaury Séchet',
        type: 'talk',
      },
      {
        id: 'saturday-break2',
        time: '2:30 - 3:00',
        title: 'Break',
        type: 'break',
      },
      {
        id: 'saturday-reuben',
        time: '3:00 - 3:45',
        title: 'The On-Chain Privacy Landscape and Beyond',
        speaker: 'Reuben Yap',
        type: 'talk',
      },
      {
        id: 'saturday-dinner',
        time: '18:30 - 21:30',
        title: 'Dinner',
        type: 'break',
      },
    ],
  },
  {
    date: 'Sunday, Oct 5th',
    day: 'Sunday',
    items: [
      {
        id: 'sunday-coffee',
        time: '10:00 - 10:30',
        title: 'Coffee / Snacks',
        type: 'break',
      },
      {
        id: 'sunday-workshop',
        time: '10:30 - 12:00',
        title: 'Workshop',
        speaker: 'Francisco Marcosh',
        type: 'talk',
      },
      {
        id: 'sunday-lunch',
        time: '12:00 - 1:00',
        title: 'Lunch',
        type: 'break',
      },
      {
        id: 'sunday-activity',
        time: '1:00 - 5:00',
        title: 'Afternoon Activity',
        type: 'break',
      },
    ],
  },
]
