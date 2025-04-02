export interface Speakers {
  name: string
  image: string
  title: string
  bio: string
}

export const speakers: Speakers[] = [
  {
    name: 'Amaury Sechet',
    image: '/sechet.png',
    title: 'Bitcoin ABC',
    bio: 'Lead developer of Bitcoin ABC and a driving force behind the launch of Bitcoin Cash and eCash. Known for his work on scalable blockchain infrastructure and protocol design.',
  },
  {
    name: 'Vin Armani',
    image: '/armani.png',
    title: 'Cyprian',
    bio: 'Technologist, author, and former CTO of CoinText. Known for his work on digital cash adoption, crypto philosophy, and privacy-focused tools.',
  },
  {
    name: 'Hayden Otto',
    image: '/otto.png',
    title: 'BitcoinMiningStock.io',
    bio: 'Entrepreneur and advocate for Bitcoin Cash adoption. Known for pioneering real-world crypto payments in Australia and grassroots merchant onboarding.',
  },
]
