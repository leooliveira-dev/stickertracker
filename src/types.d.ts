declare type Sticker = {
  code: string,
  name: string,
  country?: string,
  group?: string,
  marked?: boolean,
  spareAmount?: number
}

declare type Extra = {
  code: string,
  type: "Rookie" | "Legend",
  rank: "Base" | "Bronze" | "Silver" | "Gold",
  player: string,
  country: string,
  marked?: boolean,
  spareAmount?: number
}

declare type Profile = {
  name: string,
  contact: {
    whatsapp: string,
    instagram: string,
    facebook: string,
  },
  collection: {
    stickers: Sticker[],
    extras: Extra[]
  }
}