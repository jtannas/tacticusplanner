import { FormControl, MenuItem, Select } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';

import { RARITIES, Rarity } from '@/fsd/5-shared/model';

import { FlexBox } from './flex-box';
import { RarityIcon } from './icons';

export const RaritySelect = ({
    rarityValues = RARITIES,
    valueChanges,
    value,
    label,
}: {
    label: string;
    rarityValues?: readonly Rarity[];
    value: Rarity;
    valueChanges: (value: Rarity) => void;
}) => {
    return (
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select<Rarity> label={label} value={value} onChange={event => valueChanges(event.target.value as Rarity)}>
                {rarityValues.map(rarity => (
                    <MenuItem key={rarity} value={rarity}>
                        <FlexBox gap={5}>
                            <RarityIcon rarity={rarity} /> {rarity}
                        </FlexBox>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
