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
]
