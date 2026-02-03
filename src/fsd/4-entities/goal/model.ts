import { Alliance, FactionId, Rank, RarityKey, RarityStars } from '@/fsd/5-shared/model';

import { IRankLookup } from '@/fsd/4-entities/character/@x/goal';

import { CampaignsLocationsUsage, PersonalGoalType } from './enums';

export interface ICharacterRaidGoalSelectBase {
    priority: number;
    include: boolean;
    goalId: string;
    unitId: string;
    unitName: string;
    unitIcon: string;
    unitRoundIcon: string;
    unitAlliance: Alliance;
    notes: string;
}

export interface ICharacterUpgradeRankGoal extends ICharacterRaidGoalSelectBase, IRankLookup {
    type: PersonalGoalType.UpgradeRank;

    rarity: RarityKey;
    level: number;
    xp: number;
}

export interface ICharacterUpgradeMow extends ICharacterRaidGoalSelectBase {
    type: PersonalGoalType.MowAbilities;

    primaryStart: number;
    primaryEnd: number;

    secondaryStart: number;
    secondaryEnd: number;
    upgradesRarity: RarityKey[];

    shards: number;
    stars: RarityStars;
    rarity: RarityKey;
}

export interface ICharacterUnlockGoal extends ICharacterRaidGoalSelectBase {
    type: PersonalGoalType.Unlock;

    shards: number;
    mythicShards: 0;
    rank: Rank;
    rarity: RarityKey;
    faction: FactionId;
    campaignsUsage: CampaignsLocationsUsage;
}

export interface ICharacterAscendGoal extends ICharacterRaidGoalSelectBase {
    type: PersonalGoalType.Ascend;

    rarityStart: RarityKey;
    starsStart: RarityStars;
    starsEnd: RarityStars;
    rarityEnd: RarityKey;
    shards: number;
    mythicShards: number;
    onslaughtShards: number;
    onslaughtMythicShards: number;
    campaignsUsage: CampaignsLocationsUsage;
    mythicCampaignsUsage: CampaignsLocationsUsage;
}
