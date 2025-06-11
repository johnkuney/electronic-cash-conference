export interface Speakers {
  name: string
  image: string
  title?: string
  bio?: string
}

export const speakers: Speakers[] = [
  { name: 'Amaury Séchet', image: '/sechet.png', title: 'eCash Founder' },
  { name: 'Joey King', image: '/king.png', title: 'eCash dev' },
  { name: 'Vin Armani', image: '/armani.png', title: 'CTO Marianas Rai Corp' },
  { name: 'Tobias Ruck', image: '/ruck.png', title: 'CTO of TixTown' },
]
