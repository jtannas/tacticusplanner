import { cloneDeep } from 'lodash';

import { TacticusInventory } from '@/fsd/5-shared/lib/tacticus-api/tacticus-api.models';
import { Alliance, RarityKey } from '@/fsd/5-shared/model';

import { TacticusIntegrationService } from '@/fsd/3-features/tacticus-integration/tacticus-integration.service';

import { defaultData } from '../models/constants';
import { IInventory, SetStateAction } from '../models/interfaces';

export type InventoryAction =
    | {
          type: 'UpdateUpgradeQuantity';
          upgrade: string;
          value: number;
      }
    | {
          type: 'IncrementUpgradeQuantity';
          upgrade: string;
          value: number;
      }
    | {
          type: 'DecrementUpgradeQuantity';
          upgrades: Array<{ id: string; count: number }>;
      }
    | {
          type: 'ResetUpgrades';
      }
    | {
          type: 'SyncWithTacticus';
          inventory: TacticusInventory;
      }
    | SetStateAction<IInventory>;

export const inventoryReducer = (state: IInventory, action: InventoryAction): IInventory => {
    switch (action.type) {
        case 'Set': {
            return action.value ?? defaultData.inventory;
        }
        case 'UpdateUpgradeQuantity': {
            return { ...state, upgrades: { ...state.upgrades, [action.upgrade]: action.value } };
        }
        case 'IncrementUpgradeQuantity': {
            const currentValue = state.upgrades[action.upgrade] ?? 0;
            return { ...state, upgrades: { ...state.upgrades, [action.upgrade]: currentValue + action.value } };
        }
        case 'DecrementUpgradeQuantity': {
            const newUpgrades = { ...state.upgrades };

            for (const upgrade of action.upgrades) {
                const currentValue = newUpgrades[upgrade.id] ?? 0;
                const result = currentValue - upgrade.count;
                newUpgrades[upgrade.id] = result >= 0 ? result : 0;
            }

            return { ...state, upgrades: newUpgrades };
        }
        case 'ResetUpgrades': {
            const upgrades: Record<string, number> = {};
            const createEmptyRarityRecord = (): Record<RarityKey, number> => ({
                Common: 0,
                Uncommon: 0,
                Rare: 0,
                Epic: 0,
                Legendary: 0,
                Mythic: 0,
            });
            const books: Record<RarityKey, number> = createEmptyRarityRecord();
            const badges: Record<Alliance, Record<RarityKey, number>> = {
                [Alliance.Imperial]: createEmptyRarityRecord(),
                [Alliance.Xenos]: createEmptyRarityRecord(),
                [Alliance.Chaos]: createEmptyRarityRecord(),
            };
            const orbs = cloneDeep(badges);
            const forgeBadges = createEmptyRarityRecord();
            const components = { [Alliance.Imperial]: 0, [Alliance.Xenos]: 0, [Alliance.Chaos]: 0 };
            return {
                ...state,
                xpBooks: { ...books },
                abilityBadges: { ...badges },
                orbs: { ...orbs },
                forgeBadges: { ...forgeBadges },
                components: { ...components },
                upgrades: upgrades,
            };
        }
        case 'SyncWithTacticus': {
            const {
                upgrades,
                xpBooks,
                abilityBadges: { Imperial, Xenos, Chaos },
                orbs: syncOrbs,
                forgeBadges: syncForgeBadges,
                components: syncComponents,
            } = action.inventory;
            const result: Record<string, number> = {};
            const createEmptyRarityRecord = (): Record<RarityKey, number> => {
                return {
                    Common: 0,
                    Uncommon: 0,
                    Rare: 0,
                    Epic: 0,
                    Legendary: 0,
                    Mythic: 0,
                };
            };
            const books: Record<RarityKey, number> = createEmptyRarityRecord();
            const badges: Record<Alliance, Record<RarityKey, number>> = {
                [Alliance.Imperial]: createEmptyRarityRecord(),
                [Alliance.Xenos]: createEmptyRarityRecord(),
                [Alliance.Chaos]: createEmptyRarityRecord(),
            };
            const orbs = cloneDeep(badges);
            const forgeBadges = createEmptyRarityRecord();
            const components = { [Alliance.Imperial]: 0, [Alliance.Xenos]: 0, [Alliance.Chaos]: 0 };
            xpBooks.forEach(book => {
                books[book.rarity ?? 'Common'] = book.amount;
            });
            Imperial.forEach(badge => {
                badges[Alliance.Imperial][badge.rarity ?? 'Common'] = badge.amount;
            });
            Xenos.forEach(badge => {
                badges[Alliance.Xenos][badge.rarity ?? 'Common'] = badge.amount;
            });
            Chaos.forEach(badge => {
                badges[Alliance.Chaos][badge.rarity ?? 'Common'] = badge.amount;
            });

            syncOrbs.Imperial.forEach(orb => {
                const rarity = orb.rarity ?? 'Common';
                if (!orbs[Alliance.Imperial][rarity]) {
                    orbs[Alliance.Imperial][rarity] = 0;
                }
                orbs[Alliance.Imperial][rarity] += orb.amount;
            });
            syncOrbs.Xenos.forEach(orb => {
                const rarity = orb.rarity ?? 'Common';
                if (!orbs[Alliance.Xenos][rarity]) {
                    orbs[Alliance.Xenos][rarity] = 0;
                }
                orbs[Alliance.Xenos][rarity] += orb.amount;
            });
            syncOrbs.Chaos.forEach(orb => {
                const rarity = orb.rarity ?? 'Common';
                if (!orbs[Alliance.Chaos][rarity]) {
                    orbs[Alliance.Chaos][rarity] = 0;
                }
                orbs[Alliance.Chaos][rarity] += orb.amount;
            });
            syncForgeBadges.forEach(badge => {
                const rarity = badge.rarity ?? 'Common';
                if (!forgeBadges[rarity]) {
                    forgeBadges[rarity] = 0;
                }
                forgeBadges[rarity] += badge.amount;
            });
            syncComponents.forEach(component => {
                const alliance = TacticusIntegrationService.getAllianceFromString(component.grandAlliance);
                if (alliance !== undefined) {
                    if (!components[alliance]) {
                        components[alliance] = 0;
                    }
                    components[alliance] += component.amount;
                }
            });

            for (const upgrade of upgrades) {
                const upgradeId: string | null = TacticusIntegrationService.getUpgradeId(upgrade);
                if (upgradeId) {
                    result[upgradeId] = upgrade.amount;
                }
            }
            return {
                ...state,
                xpBooks: { ...books },
                abilityBadges: { ...badges },
                orbs: { ...orbs },
                forgeBadges: { ...forgeBadges },
                components: { ...components },
                upgrades: result,
            };
        }
        default: {
            throw new Error();
        }
    }
};
