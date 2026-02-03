import { RARITIES, Rarity } from '../model';

export const rarityCompareFn = (a: Rarity, b: Rarity) => {
    return RARITIES.indexOf(a) - RARITIES.indexOf(b);
};
export const maxRarity = (...keys: Rarity[]) => {
    return keys.toSorted((a, b) => rarityCompareFn(a, b))[keys.length - 1];
};
export const minRarity = (...keys: Rarity[]) => {
    return keys.toSorted((a, b) => rarityCompareFn(a, b))[0];
};
export const isRarityAtLeast = (rarity: Rarity, threshold: Rarity) => {
    return rarityCompareFn(rarity, threshold) >= 0;
};
export const isRarityAtMost = (rarity: Rarity, threshold: Rarity) => {
    return rarityCompareFn(rarity, threshold) <= 0;
};
export const clampRarity = (rarity: Rarity, min: Rarity, max: Rarity) => {
    if (isRarityAtLeast(rarity, max)) return max;
    if (isRarityAtMost(rarity, min)) return min;
    return rarity;
};
export const nextRarity = (rarity: Rarity) => {
    const index = RARITIES.indexOf(rarity);
    return RARITIES[Math.min(index + 1, RARITIES.length - 1)];
};
export const raritiesBetween = (a: Rarity, b: Rarity) => {
    const minIndex = Math.min(RARITIES.indexOf(a), RARITIES.indexOf(b));
    const maxIndex = Math.max(RARITIES.indexOf(a), RARITIES.indexOf(b));
    return RARITIES.slice(minIndex, maxIndex + 1);
};
