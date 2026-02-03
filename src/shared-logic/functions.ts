import { getEnumValues, getCompletionRateColor } from '@/fsd/5-shared/lib';
import { Rank } from '@/fsd/5-shared/model';

import { rankToLevel } from '../models/constants';
import { ICharacter2 } from '../models/interfaces';

export const needToAscendCharacter = (character: ICharacter2) => {
    const maxCommon = character.rarity === 'Common' && character.rank === Rank.Iron1;
    const maxUncommon = character.rarity === 'Uncommon' && character.rank === Rank.Bronze1;
    const maxRare = character.rarity === 'Rare' && character.rank === Rank.Silver1;
    const maxEpic = character.rarity === 'Epic' && character.rank === Rank.Gold1;
    return maxCommon || maxUncommon || maxRare || maxEpic;
};
export const needToLevelCharacter = (character: ICharacter2) => {
    const isUnlocked = character.rank > Rank.Locked;
    const needToAscend = needToAscendCharacter(character);
    return (
        isUnlocked &&
        !needToAscend &&
        character.level < rankToLevel[character.rank] &&
        6 - (rankToLevel[character.rank] - character.level) <= character.upgrades.length
    );
};

export function getImageUrl(image: string): string {
    return new URL(`../assets/images/${image}`, import.meta.url).href;
}

export function formatDateWithOrdinal(date: Date, withYear: boolean = false): string {
    const day = date.getDate();
    const month = date.toLocaleString('en', { month: 'long' });
    const suffix = getDaySuffix(day);
    const year = date.getFullYear();

    return withYear ? `${day}${suffix} of ${month} ${year}` : `${day}${suffix} of ${month}`;
}

function getDaySuffix(day: number) {
    if (day >= 11 && day <= 13) {
        return 'th';
    }
    switch (day % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}

// Re-export from shared lib
export { getEnumValues, getCompletionRateColor };
