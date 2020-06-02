// @flow

import * as movistarColors from './colors-movistar';
import * as vivoColors from './colors-vivo';
import * as o2Colors from './colors-o2';
import * as movistarProminentColorOverrides from './colors-movistar-prominent';

export const MOVISTAR_SKIN: 'Movistar' = 'Movistar';
export const O2_SKIN: 'O2' = 'O2';
export const VIVO_SKIN: 'Vivo' = 'Vivo';

export type Skin = typeof MOVISTAR_SKIN | typeof O2_SKIN | typeof VIVO_SKIN;

export type Colors = $Exact<typeof movistarColors | typeof vivoColors | typeof o2Colors>;

export default (skin: Skin, override?: string): Colors => {
    const brandedColors = {
        [MOVISTAR_SKIN]: movistarColors,
        [O2_SKIN]: o2Colors,
        [VIVO_SKIN]: vivoColors,
    };

    const brandedOverrides = {
        [MOVISTAR_SKIN]: {
            prominent: movistarProminentColorOverrides,
        },
        [O2_SKIN]: null,
        [VIVO_SKIN]: null,
    };

    const brandedPalette = brandedColors[skin];

    if (!brandedPalette) {
        throw Error(`No colors configured for skin: "${skin}"`);
    }

    if (override && brandedOverrides[skin] && brandedOverrides[skin][override]) {
        return {
            ...brandedPalette,
            ...brandedOverrides[skin][override],
        };
    }

    return brandedPalette;
};
