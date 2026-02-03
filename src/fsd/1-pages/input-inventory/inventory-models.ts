import { FactionId, RarityKey } from '@/fsd/5-shared/model';

export interface IInventoryUpgrade {
    material: string;
    snowprintId: string;
    label: string;
    rarity: RarityKey;
    craftable: boolean;
    stat: string | 'Health' | 'Damage' | 'Armour' | 'Shard';
    quantity: number;
    iconPath: string;
    faction?: FactionId;
    alphabet: string;
}

interface IUpgradesAlphabetGroup {
    letter: string;
    subItems: IInventoryUpgrade[];
}

export interface IUpgradesGroup {
    label: string;
    rarity: RarityKey;
    items: IUpgradesAlphabetGroup[];
    itemsCrafted: IUpgradesAlphabetGroup[];
    itemsAll: IInventoryUpgrade[];
    itemsAllCrafted: IInventoryUpgrade[];
}
