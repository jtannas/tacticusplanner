import { Alliance, Rarity } from '@/fsd/5-shared/model';

import { getImageUrl } from '../get-image-url';

export const BadgeImage = ({
    alliance,
    rarity,
    size = 'medium',
}: {
    alliance: Alliance;
    rarity: Rarity;
    size?: 'small' | 'medium';
}) => {
    const sizePx = size === 'medium' ? 35 : 25;
    const image = getImageUrl(`badges/resized/${alliance.toLowerCase()}-${rarity.toLowerCase()}.png`);

    return <img loading={'lazy'} className="pointer-events-none" src={image} height={sizePx} alt={alliance} />;
};
