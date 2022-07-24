export interface AbilityType {
  abilityName: string,
  abilityScore: number,
}

export interface TagType {
  slot: number,
  tag_name: string,
}

export interface CharacterType {
    name: string,
    quote?: string,
    image: string,
    abilities: AbilityType [],
    thumbnail?: string,
    universe: string,
    tags?: TagType[],
    id: number,
}

