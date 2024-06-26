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

const IconArrowsLeftAndRightRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.893 19.5c-.396 0-.752-.15-1.036-.448L2 13.898l4.857-5.23c.428-.448 1.108-.56 1.712-.297.572.264.965.787.965 1.386v1.532h6.429v2.914c.036.038.18.076.216.076l3.893-4.112-3.93-4.183a.7.7 0 0 0-.215.076v2.99H10.93c-.396 0-.712-.34-.712-.746 0-.41.324-.745.712-.745h3.569V6.026c0-.599.356-1.122.964-1.386s1.284-.15 1.712.298L22 10.163l-4.857 5.154c-.428.448-1.108.561-1.712.297-.572-.263-.928-.787-.928-1.385v-1.457H8.069v-2.99a.5.5 0 0 0-.216-.075L3.96 13.889l3.893 4.112a.7.7 0 0 0 .216-.075v-2.914h4.997c.396 0 .712.339.712.745s-.324.745-.712.745H9.498v1.457c0 .599-.357 1.122-.965 1.386a1.25 1.25 0 0 1-.64.155"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.893 19.5c-.396 0-.752-.15-1.036-.448L2 13.898l4.857-5.23c.428-.448 1.108-.56 1.712-.297.572.264.965.787.965 1.386v1.532h6.429v2.914c.036.038.18.076.216.076l3.893-4.112-3.93-4.183a.7.7 0 0 0-.215.076v2.99H10.93c-.396 0-.712-.34-.712-.746 0-.41.324-.745.712-.745h3.569V6.026c0-.599.356-1.122.964-1.386s1.284-.15 1.712.298L22 10.163l-4.857 5.154c-.428.448-1.108.561-1.712.297-.572-.263-.928-.787-.928-1.385v-1.457H8.069v-2.99a.5.5 0 0 0-.216-.075L3.96 13.889l3.893 4.112a.7.7 0 0 0 .216-.075v-2.914h4.997c.396 0 .712.339.712.745s-.324.745-.712.745H9.498v1.457c0 .599-.357 1.122-.965 1.386a1.25 1.25 0 0 1-.64.155"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.52 13.588q.165.075.34.075a.78.78 0 0 0 .534-.21l4.21-4.148a.757.757 0 0 0 0-1.132l-4.21-4.179q-.017-.02-.04-.036a.79.79 0 0 0-.831-.101.75.75 0 0 0-.437.683l-.014 1.824-2.905.003c-.664 0-1.201.537-1.201 1.201v2.32c0 .663.537 1.201 1.201 1.201l2.902-.005.014 1.823a.76.76 0 0 0 .437.68m.67-2.883a.77.77 0 0 0-.768-.745q-.007 0-.011-.002l-3.24.005a.08.08 0 0 1-.082-.081v-2.32c0-.044.036-.08.081-.08l3.252-.003c.412 0 .754-.331.768-.746v-.01l.01-1.35 3.385 3.358L17.2 12.07l-.011-1.353zM7.136 20.21a.77.77 0 0 1-.535-.213l-4.207-4.174a.754.754 0 0 1 0-1.129l4.21-4.154.042-.036a.79.79 0 0 1 .832-.098c.27.129.434.39.437.68l.014 1.821 2.902-.005c.664 0 1.202.537 1.202 1.201v2.32c0 .663-.538 1.201-1.202 1.201l-2.907.006-.014 1.823a.75.75 0 0 1-.437.684.8.8 0 0 1-.337.073m-.341-1.597.01-1.347v-.011a.77.77 0 0 1 .78-.746l3.238-.002a.08.08 0 0 0 .081-.082v-2.319a.08.08 0 0 0-.081-.081l-3.238.005a.77.77 0 0 1-.78-.745v-.01l-.01-1.351-3.378 3.336z"
                />
            </svg>
        );
    }
};

export default IconArrowsLeftAndRightRegular;
