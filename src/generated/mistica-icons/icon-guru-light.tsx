'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconGuruLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.533 14.314a6.67 6.67 0 0 0 3.134-5.647A6.676 6.676 0 0 0 12 2a6.676 6.676 0 0 0-6.667 6.667 6.67 6.67 0 0 0 3.135 5.647C4.65 15.348 2 18.03 2 21.26a.74.74 0 0 0 1.48 0c0-3.267 3.821-5.927 8.52-5.927s8.52 2.66 8.52 5.927a.74.74 0 0 0 1.48 0c0-3.229-2.65-5.912-6.467-6.946M12 3.479a5.19 5.19 0 0 1 4.68 2.964h-3.011c-.503 0-.948.308-1.162.74h-1.01a1.32 1.32 0 0 0-1.161-.74H7.325A5.18 5.18 0 0 1 12 3.479m1.669 4.073h2.039v.925c0 .479-.26.74-.74.74h-.93c-.232 0-.554 0-.554-.74v-.74c-.005-.085.095-.185.185-.185m-5.372 0h2.034c.085 0 .185.1.185.185v.74c0 .74-.322.74-.555.74h-.924c-.48 0-.74-.266-.74-.74zm-1.361.005h.247v.925c0 1.09.763 1.854 1.854 1.854h.924c1.043 0 1.67-.693 1.67-1.854v-.185h.739v.185c0 1.161.621 1.854 1.669 1.854h.925c1.09 0 1.853-.764 1.853-1.854v-.925h.247q.122.54.123 1.11A5.195 5.195 0 0 1 12 13.854a5.195 5.195 0 0 1-5.187-5.187q0-.576.123-1.11"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.827 19.454a.37.37 0 0 0 .153-.497c-1.168-2.28-3.673-3.916-6.699-4.5 2.29-.98 3.902-3.289 3.902-5.977 0-3.574-2.854-6.48-6.365-6.48-3.51 0-6.364 2.906-6.364 6.48 0 2.688 1.611 4.997 3.906 5.978C5.133 15.283 2 18.184 2 21.63c0 .204.163.37.363.37s.363-.166.363-.37c0-3.674 4.078-6.665 9.092-6.665 3.767 0 7.193 1.745 8.515 4.338a.366.366 0 0 0 .494.151M11.818 2.74c2.403 0 4.456 1.54 5.266 3.702h-3.808c-.48 0-.88.317-1.03.754l-.023-.007a.1.1 0 0 0-.041-.008h-.727a.1.1 0 0 0-.041.008l-.024.007a1.09 1.09 0 0 0-1.029-.754H6.553c.81-2.162 2.863-3.702 5.265-3.702m4.004 4.441v1.11a1.1 1.1 0 0 1-1.09 1.109h-.725a1.1 1.1 0 0 1-1.09-1.11v-.739c0-.204.163-.37.363-.37zm-7.998 0h2.542c.2 0 .363.166.363.37v.74A1.1 1.1 0 0 1 9.64 9.4h-.726a1.1 1.1 0 0 1-1.089-1.11zm-1.49-.004q.008 0 .014.002l.014.002h.726v1.11c0 1.019.815 1.853 1.82 1.853h.727c1 0 1.82-.83 1.82-1.853v-.37h.727v.37c0 1.019.814 1.853 1.82 1.853h.726c1.001 0 1.82-.83 1.82-1.853V7.18h.727q.006 0 .014-.002l.014-.002c.097.417.153.853.153 1.303 0 3.167-2.528 5.74-5.638 5.74s-5.637-2.573-5.637-5.74c0-.45.056-.882.153-1.303M22 21.256c0 .408-.325.74-.726.74a.733.733 0 0 1-.727-.74c0-.409.326-.74.727-.74s.726.331.726.74"
                />
            </svg>
        );
    }
};

export default IconGuruLight;
