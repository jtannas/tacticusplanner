import { Rarity } from '@/fsd/5-shared/model';

export const charsUnlockShards: Record<Rarity, number> = {
    Common: 40,
    Uncommon: 80,
    Rare: 130,
    Epic: 250,
    Legendary: 500,
    Mythic: 1400,
};

export const charsReleaseShards: Record<Rarity | 'LegendaryOld', number> = {
    Common: 40,
    Uncommon: 100,
    Rare: 280,
    Epic: 400,
    LegendaryOld: 150,
    Legendary: 400,
    Mythic: 750,
};
