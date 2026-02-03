import { RarityStars, Rank, RarityKey } from '../enums';

export class RarityMapper {
    public static toStars: Record<RarityKey, RarityStars> = {
        Common: RarityStars.None,
        Uncommon: RarityStars.TwoStars,
        Rare: RarityStars.FourStars,
        Epic: RarityStars.RedOneStar,
        Legendary: RarityStars.RedThreeStars,
        Mythic: RarityStars.OneBlueStar,
    };

    public static toMaxStars: Record<RarityKey, RarityStars> = {
        Common: RarityStars.TwoStars,
        Uncommon: RarityStars.FourStars,
        Rare: RarityStars.RedOneStar,
        Epic: RarityStars.RedThreeStars,
        Legendary: RarityStars.OneBlueStar,
        Mythic: RarityStars.MythicWings,
    };

    public static toMaxRank: Record<RarityKey, Rank> = {
        Common: Rank.Iron1,
        Uncommon: Rank.Bronze1,
        Rare: Rank.Silver1,
        Epic: Rank.Gold1,
        Legendary: Rank.Diamond3,
        Mythic: Rank.Adamantine1,
    };

    public static getRarityFromLevel(level: number): RarityKey {
        if (level <= 8) return 'Common';
        if (level <= 17) return 'Uncommon';
        if (level <= 26) return 'Rare';
        if (level <= 35) return 'Epic';
        if (level <= 50) return 'Legendary';
        return 'Mythic';
    }
}
