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

const IconEcoRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.68 2.054a.86.86 0 0 1 .6 0c.245.108 5.716 2.752 5.72 9.579 0 3.608-1.59 5.648-2.929 6.72a7 7 0 0 1-2.364 1.323v1.608A.713.713 0 0 1 12 22a.713.713 0 0 1-.707-.716v-1.608C9.81 19.176 6 17.281 6 11.633c0-6.735 5.32-9.399 5.669-9.573zm1.023 5.647v10.44c1.377-.573 3.88-2.216 3.884-6.504 0-5.075-3.53-7.507-4.587-8.115-1.058.604-4.587 3.004-4.59 8.115 0 4.288 2.502 5.931 3.88 6.503V7.701c0-.392.32-.715.706-.715.387 0 .707.32.707.715"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.68 2.054a.86.86 0 0 1 .6 0c.245.108 5.716 2.752 5.72 9.579 0 3.608-1.59 5.648-2.929 6.72a7 7 0 0 1-2.364 1.323v1.608A.713.713 0 0 1 12 22a.713.713 0 0 1-.707-.716v-1.608C9.81 19.176 6 17.281 6 11.633c0-6.735 5.32-9.399 5.669-9.573zm1.023 5.647v10.44c1.377-.573 3.88-2.216 3.884-6.504 0-5.075-3.53-7.507-4.587-8.115-1.058.604-4.587 3.004-4.59 8.115 0 4.288 2.502 5.931 3.88 6.503V7.701c0-.392.32-.715.706-.715.387 0 .707.32.707.715"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2.184 4.89v2.52h1.075l-1.072.003c0 2.902 1.602 4.844 4.515 4.844 1.229 0 2.225-.285 2.965-.833q.295.636.525 1.374c.675 2.16.807 4.504.894 6.053l.002.037c.035.604.063 1.082.115 1.406a.54.54 0 0 0 .526.453h.01a.54.54 0 0 0 .531-.453c.13-.804.527-3.244 1.499-5.569q.177-.423.365-.808c.757.65 1.825.99 3.173.99 2.8 0 4.39-1.466 4.508-4.137a1 1 0 0 0 .007-.087V7.61c0-.896-.736-1.624-1.641-1.624h-2.876c-2.909 0-4.51 1.586-4.51 4.462 0 1.022.202 1.88.593 2.562q-.325.608-.613 1.3a21 21 0 0 0-.776 2.217c-.187-1.858-.578-4.063-1.532-5.936.492-.725.747-1.676.747-2.835 0-2.905-1.602-4.504-4.512-4.504v1.075c2.314 0 3.437 1.12 3.437 3.426q0 1.045-.31 1.768C9.06 8.413 8.022 7.5 6.624 6.966a.54.54 0 0 0-.387 1.008c1.185.454 2.159 1.286 2.91 2.486q-.849.72-2.445.719c-2.314 0-3.44-1.464-3.44-3.769H3.26V4.893a.57.57 0 0 1 .566-.566H6.7V3.252H3.825c-.902 0-1.638.734-1.641 1.638m15.124 2.166h2.876c.313 0 .568.249.568.554v2.866c-.01 2.256-1.139 3.355-3.445 3.355-1.194 0-2.071-.293-2.642-.89.989-1.622 2.174-2.568 3.535-2.815a.538.538 0 1 0-.193-1.062c-1.204.219-2.294.868-3.24 1.927a9 9 0 0 0-.704.903q-.2-.623-.199-1.449c0-2.28 1.127-3.39 3.443-3.39z"
                />
            </svg>
        );
    }
};

export default IconEcoRegular;
