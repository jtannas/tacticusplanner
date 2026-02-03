import { FormControl, MenuItem, Select } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';

import { RARITIES, Rarity, RarityKey } from '@/fsd/5-shared/model';

import { FlexBox } from './flex-box';
import { RarityIcon } from './icons';

export const RaritySelect = ({
    rarityValues = RARITIES,
    valueChanges,
    value,
    label,
}: {
    label: string;
    rarityValues?: readonly RarityKey[];
    value: RarityKey;
    valueChanges: (value: RarityKey) => void;
}) => {
    return (
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select<RarityKey>
                label={label}
                value={value}
                onChange={event => valueChanges(event.target.value as RarityKey)}>
                {rarityValues.map(rarity => (
                    <MenuItem key={rarity} value={rarity}>
                        <FlexBox gap={5}>
                            <RarityIcon rarity={rarity} /> {Rarity[rarity]}
                        </FlexBox>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
