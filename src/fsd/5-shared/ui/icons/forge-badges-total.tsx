/* eslint-disable import-x/no-internal-modules */

import { Badge } from '@mui/material';
import React from 'react';

import { RarityKey } from '@/fsd/5-shared/model/enums';

import { MiscIcon } from './misc.icon';

interface Props {
    badges: Record<RarityKey, number>;
    size?: 'small' | 'medium';
}

export const ForgeBadgesTotal: React.FC<Props> = ({ badges, size = 'small' }) => {
    const sizePx = size === 'small' ? 25 : 35;
    return (
        <div className="flex-box gap20">
            {(['Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic'] as const).map(rarity => {
                const badgesCount = badges[rarity];
                const badgeName = rarity.toLowerCase() + 'ForgeBadge';
                return (
                    badgesCount >= 0 && (
                        <Badge key={rarity} badgeContent={<b>{badgesCount}</b>}>
                            <MiscIcon icon={badgeName} width={sizePx} height={sizePx} />
                        </Badge>
                    )
                );
            })}
        </div>
    );
};
