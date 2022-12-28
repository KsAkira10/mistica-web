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

const IconArrowDownLeftFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.144 15.572L22 7.708 16.284 2 8.428 9.856c-.916-.916-2.86-2.852-2.86-2.852-.624-.632-1.464-.672-2.284-.332C2.492 6.996 2 7.74 2 8.608V22h13.336c.86 0 1.596-.504 1.928-1.304.348-.836.188-1.812-.444-2.444l-2.676-2.68z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.873 3.54h.022c.395.006.779.194 1.143.56l5.048 5.026.017.017c.319.347.44.709.361 1.078-.073.336-.303.605-.521.824l-.014.014-5.115 4.812 2.588 2.588c.317.331.41.894.219 1.34-.177.414-.566.66-1.04.66H4.49a.901.901 0 01-.717-.255.894.894 0 01-.252-.717l.006-12.145a1.009 1.009 0 01.613-.955c.457-.205 1.048-.112 1.406.215l.017.014L7.94 8.994l4.79-4.904.006-.006c.355-.361.74-.543 1.137-.543z"
                />
            </svg>
        );
    }
};

export default IconArrowDownLeftFilled;
