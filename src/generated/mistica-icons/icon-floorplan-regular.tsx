/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFloorplanRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m21.772 14.445-3.48-3.48v-8.59H2v19.254h16.291v-4.444a.743.743 0 0 0-.74-.74.743.743 0 0 0-.74.74v2.963H3.48v-8.516h1.11c.408 0 .741-.334.741-.741a.743.743 0 0 0-.74-.74H3.48V3.855h6.665v6.294H8.665a.743.743 0 0 0-.74.741c0 .407.332.74.74.74h2.962V3.857h5.183v7.553c0 .037 0 .037.038.074 0 .037 0 .037.037.074 0 .037.037.037.037.075 0 .037.037.037.037.074l3.813 3.813a.704.704 0 0 0 .482.185c.185 0 .37-.074.518-.222a.716.716 0 0 0 0-1.037Z"
            />
        </svg>
    );
};

export default IconFloorplanRegular;
