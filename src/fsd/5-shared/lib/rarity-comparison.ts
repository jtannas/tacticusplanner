import { RARITIES, RarityKey } from '../model';

export const rarityCompareFn = (a: RarityKey, b: RarityKey) => {
    return RARITIES.indexOf(a) - RARITIES.indexOf(b);
};
export const maxRarity = (...keys: RarityKey[]) => {
    return keys.toSorted((a, b) => rarityCompareFn(a, b))[keys.length - 1];
};
export const minRarity = (...keys: RarityKey[]) => {
    return keys.toSorted((a, b) => rarityCompareFn(a, b))[0];
};
export const isRarityAtLeast = (rarity: RarityKey, threshold: RarityKey) => {
    return rarityCompareFn(rarity, threshold) >= 0;
};
export const isRarityAtMost = (rarity: RarityKey, threshold: RarityKey) => {
    return rarityCompareFn(rarity, threshold) <= 0;
};
export const clampRarity = (rarity: RarityKey, min: RarityKey, max: RarityKey) => {
    if (isRarityAtLeast(rarity, max)) return max;
    if (isRarityAtMost(rarity, min)) return min;
    return rarity;
};
export const nextRarity = (rarity: RarityKey) => {
    const index = RARITIES.indexOf(rarity);
    return RARITIES[Math.min(index + 1, RARITIES.length - 1)];
};
export const raritiesBetween = (a: RarityKey, b: RarityKey) => {
    const minIndex = Math.min(RARITIES.indexOf(a), RARITIES.indexOf(b));
    const maxIndex = Math.max(RARITIES.indexOf(a), RARITIES.indexOf(b));
    return RARITIES.slice(minIndex, maxIndex + 1);
};
