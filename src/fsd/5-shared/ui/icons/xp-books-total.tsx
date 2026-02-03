/* eslint-disable import-x/no-internal-modules */

import { Badge } from '@mui/material';
import React, { useMemo } from 'react';

import { RARITIES, Rarity } from '@/fsd/5-shared/model/enums';

import { MiscIcon } from './misc.icon';

interface Props {
    xp: number;
    size?: 'small' | 'medium';
}

export const XpBooksTotal: React.FC<Props> = ({ xp, size = 'small' }) => {
    const sizePx = size === 'small' ? 25 : 35;
    const xpBooks = useMemo(() => {
        const books: Record<Rarity, number> = {
            Common: 0,
            Uncommon: 0,
            Rare: 0,
            Epic: 0,
            Legendary: 0,
            Mythic: 0,
        };
        books.Mythic = Math.floor(xp / 62500);
        let remainingXp = xp % 62500;
        books.Legendary = Math.floor(remainingXp / 12500);
        remainingXp = remainingXp % 12500;
        books.Epic = Math.floor(remainingXp / 2500);
        remainingXp = remainingXp % 2500;
        books.Rare = Math.floor(remainingXp / 500);
        remainingXp = remainingXp % 500;
        books.Uncommon = Math.floor(remainingXp / 100);
        remainingXp = remainingXp % 100;
        books.Common = Math.ceil(remainingXp / 20);
        return books;
    }, [xp]);
    return (
        <div className="flex-box gap20">
            {RARITIES.map(rarity => {
                const booksCount = xpBooks[rarity];
                const bookName = (rarity.toLowerCase() + 'Book') as `${Lowercase<Rarity>}Book`;
                return (
                    booksCount > 0 && (
                        <Badge key={rarity} badgeContent={<b>{booksCount}</b>}>
                            <MiscIcon icon={bookName} width={sizePx} height={sizePx} />
                        </Badge>
                    )
                );
            })}
        </div>
    );
};
