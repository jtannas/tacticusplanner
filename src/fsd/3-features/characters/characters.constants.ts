import { RarityStars, Rarity, Rank, UnitType, RarityKey } from '@/fsd/5-shared/model';

import { ICharacter2 } from '@/fsd/4-entities/character';

// eslint-disable-next-line import-x/no-internal-modules -- FYI: Ported from `v2` module; doesn't comply with `fsd` structure
import { IRarityCap } from '@/fsd/3-features/characters/characters.models';

export const unsetCharacter: Partial<ICharacter2> = {
    unitType: UnitType.character,
    name: '',
    icon: 'portraits/unset.webp',
    rank: Rank.Stone1,
    upgrades: [],
    stars: RarityStars.None,
    rarity: Rarity.Common,
    level: 1,
};

export const rarityCaps: Record<RarityKey, IRarityCap> = {
    Common: {
        rarity: 'Common',
        abilitiesLevel: 8,
        rank: Rank.Iron1,
        stars: RarityStars.TwoStars,
    },
    Uncommon: {
        rarity: 'Uncommon',
        abilitiesLevel: 17,
        rank: Rank.Bronze1,
        stars: RarityStars.FourStars,
    },
    Rare: {
        rarity: 'Rare',
        abilitiesLevel: 26,
        rank: Rank.Silver1,
        stars: RarityStars.RedOneStar,
    },
    Epic: {
        rarity: 'Epic',
        abilitiesLevel: 35,
        rank: Rank.Gold1,
        stars: RarityStars.RedThreeStars,
    },
    Legendary: {
        rarity: 'Legendary',
        abilitiesLevel: 50,
        rank: Rank.Diamond3,
        stars: RarityStars.OneBlueStar,
    },
    Mythic: {
        rarity: 'Mythic',
        abilitiesLevel: 55,
        rank: Rank.Adamantine1,
        stars: RarityStars.OneBlueStar,
    },
};
