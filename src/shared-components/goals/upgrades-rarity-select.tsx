import { Info } from '@mui/icons-material';
import React from 'react';

import { RARITIES, Rarity } from '@/fsd/5-shared/model';
import { MultipleSelectCheckmarks, AccessibleTooltip } from '@/fsd/5-shared/ui';

interface Props {
    upgradesRarity: Rarity[];
    upgradesRarityChange: (value: Rarity[]) => void;
}

export const UpgradesRaritySelect: React.FC<Props> = ({ upgradesRarity, upgradesRarityChange }) => {
    return (
        <div className="flex gap-3 items-center">
            <MultipleSelectCheckmarks
                placeholder="Upgrades rarity"
                selectedValues={upgradesRarity}
                values={RARITIES}
                selectionChanges={values => upgradesRarityChange(values)}
            />

            <AccessibleTooltip
                title={
                    'You can limit rarity of base upgrades that will be required to reach the goal. One of use cases is to pre-farm Legendary upgrades (usually takes the most time) before starting farming other upgrades'
                }>
                <Info color="primary" />
            </AccessibleTooltip>
        </div>
    );
};
