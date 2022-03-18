/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconArrowsLeftAndRightRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M7.893 19c-.396 0-.752-.15-1.036-.448L2 13.398l4.857-5.23c.428-.448 1.108-.56 1.712-.297.572.264.965.787.965 1.386v1.532h6.429v2.914c.036.038.18.076.216.076l3.893-4.112-3.93-4.183a.723.723 0 00-.215.076v2.99H10.93c-.396 0-.712-.34-.712-.746 0-.41.324-.745.712-.745h3.569V5.526c0-.599.356-1.122.964-1.386.608-.263 1.284-.15 1.712.298L22 9.663l-4.857 5.154c-.428.448-1.108.561-1.712.297-.572-.263-.928-.787-.928-1.385v-1.457H8.069v-2.99a.496.496 0 00-.216-.075L3.96 13.389l3.893 4.112a.723.723 0 00.216-.075v-2.914h4.997c.396 0 .712.339.712.745 0 .406-.324.745-.712.745H9.497v1.457c0 .599-.356 1.122-.964 1.386a1.246 1.246 0 01-.64.155z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.38 13.473c.11.05.224.075.34.075a.779.779 0 00.492-.173.464.464 0 00.042-.037l4.21-4.148a.757.757 0 000-1.132l-4.21-4.179a.788.788 0 00-.871-.137.754.754 0 00-.437.683l-.014 1.824-2.905.003a1.2 1.2 0 00-1.201 1.201v2.32a1.2 1.2 0 001.201 1.201l2.902-.005.014 1.823a.758.758 0 00.437.68zm.67-2.883a.772.772 0 00-.768-.745c-.005 0-.008 0-.01-.002l-3.242.005a.081.081 0 01-.081-.081v-2.32a.08.08 0 01.081-.08l3.241-.003h.011a.772.772 0 00.768-.746v-.01l.011-1.35 3.384 3.358-3.384 3.339-.011-1.353v-.012zM6.997 20.095a.774.774 0 01-.496-.177.271.271 0 01-.04-.036l-4.207-4.174a.754.754 0 010-1.129l4.21-4.154a.793.793 0 01.874-.135c.27.13.434.39.437.681l.014 1.821 2.902-.005c.664 0 1.202.537 1.202 1.201v2.32c0 .663-.538 1.201-1.202 1.201l-2.907.006-.014 1.823a.754.754 0 01-.437.684.825.825 0 01-.336.073zm-.342-1.597l-3.378-3.353 3.378-3.336.011 1.35v.011c.011.42.361.751.779.745l3.238-.005a.08.08 0 01.081.081v2.32a.081.081 0 01-.081.08l-3.238.003a.77.77 0 00-.779.746v.01l-.011 1.348z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconArrowsLeftAndRightRegular;
