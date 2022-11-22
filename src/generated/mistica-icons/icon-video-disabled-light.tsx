/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconVideoDisabledLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.927 6.368a.343.343 0 01.384-.08.362.362 0 01.212.34v10.75a.373.373 0 01-.217.34.347.347 0 01-.135.03.344.344 0 01-.248-.11l-5.054-5.306v3.21l3.613 3.793c.14.143.14.375 0 .522a.344.344 0 01-.248.109.344.344 0 01-.249-.11l-3.111-3.266v.598c0 .199-.154.36-.344.36H2.832a.352.352 0 01-.344-.36V6.814c0-.2.154-.36.344-.36h2.465c.19 0 .344.16.344.36 0 .199-.154.36-.344.36H3.17v9.653h12.022v-.958L2.583 2.633a.38.38 0 010-.522.335.335 0 01.497 0l4.141 4.343h8.31c.19 0 .343.161.343.36v4.86l5.053-5.305zm-5.74.806H7.903l7.284 7.648V7.174zm5.636 9.302V7.525L16.56 12l4.263 4.475zm0 5.524c.389 0 .705-.332.705-.74 0-.407-.316-.74-.705-.74-.388 0-.704.333-.704.74 0 .408.316.74.704.74z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconVideoDisabledLight;
