import { Rank, UnitType } from '@/fsd/5-shared/model';

import { IUnit } from '@/fsd/4-entities/unit';

export const needToAscendCharacter = (unit: IUnit) => {
    if (unit.unitType === UnitType.mow) {
        return false;
    }

    const maxCommon = unit.rarity === 'Common' && unit.rank === Rank.Iron1;
    const maxUncommon = unit.rarity === 'Uncommon' && unit.rank === Rank.Bronze1;
    const maxRare = unit.rarity === 'Rare' && unit.rank === Rank.Silver1;
    const maxEpic = unit.rarity === 'Epic' && unit.rank === Rank.Gold1;
    const maxLegendary = unit.rarity === 'Legendary' && unit.rank === Rank.Diamond3;

    return maxCommon || maxUncommon || maxRare || maxEpic || maxLegendary;
};
