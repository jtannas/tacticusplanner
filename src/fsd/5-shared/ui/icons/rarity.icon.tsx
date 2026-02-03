import { Rarity } from '@/fsd/5-shared/model';

import { getImageUrl } from '../get-image-url';

export const RarityIcon = ({ rarity }: { rarity: Rarity }) => {
    const image = getImageUrl(`rarity/resized/${rarity.toLowerCase()}.png`);

    return (
        <img
            loading={'lazy'}
            className="pointer-events-none max-w-[25px] max-h-[25px] w-auto h-auto"
            src={image}
            alt={rarity}
        />
    );
};
