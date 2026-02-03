import { Rarity } from '@/fsd/5-shared/model';

import { getImageUrl } from '../get-image-url';

export const ForgeBadgeImage = ({ rarity, size = 'medium' }: { rarity: Rarity; size?: 'small' | 'medium' }) => {
    const sizePx = size === 'medium' ? 35 : 25;
    const image = getImageUrl(`forgeBadges/resized/${rarity.toLowerCase()}.png`);

    return <img loading={'lazy'} className="pointer-events-none" src={image} height={sizePx} alt={rarity} />;
};
