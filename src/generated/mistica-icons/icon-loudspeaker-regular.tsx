'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLoudspeakerRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.99 18.573a1 1 0 0 1-.264-.04L10.27 16.89l-.2.632a.8.8 0 0 1-.402.482.78.78 0 0 1-.625.056l-2.269-.711a.82.82 0 0 1-.538-1.028l.185-.59-3.21-.966a.535.535 0 0 1-1.056-.122V9.36a.535.535 0 0 1 1.056-.122l12.515-3.769a.9.9 0 0 1 .801.143.98.98 0 0 1 .393.79v11.202a.98.98 0 0 1-.39.787.9.9 0 0 1-.54.182m-12.731-4.91 12.59 3.792V6.55L3.26 10.34zm4.103 2.728 1.748.549.07-.224-1.748-.55zM19.049 8.206a.545.545 0 0 1-.387-.933l1.546-1.546a.548.548 0 0 1 .773.773l-1.546 1.546a.55.55 0 0 1-.386.16M19.116 12.315a.545.545 0 1 1 0-1.092H21.3a.545.545 0 1 1 0 1.092zM20.2 17.746a.545.545 0 0 0 .773 0 .55.55 0 0 0 0-.773l-1.507-1.507a.548.548 0 0 0-.773.773z"
            />
        </svg>
    );
};

export default IconLoudspeakerRegular;
