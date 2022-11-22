/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTongueLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.07 3.994a.425.425 0 01.583-.117.407.407 0 01.117.571c-.843 1.258-1.977 2.224-3.361 2.93.03.053.056.112.062.176.067.813.1 1.715.1 2.754 0 6.106-1.098 9.894-6.563 9.894s-6.563-3.788-6.563-9.894c0-1.081.037-2.017.112-2.86a.217.217 0 01.016-.056l.007-.02C4.199 6.67 3.064 5.7 2.224 4.44a.41.41 0 01.12-.575.42.42 0 01.583.118c1.728 2.594 4.784 3.908 9.076 3.908 4.285 0 7.339-1.311 9.067-3.897zm-9.06 15.381c4.224 0 5.723-2.37 5.723-9.064 0-.97-.031-1.81-.09-2.574-1.479.602-3.227.924-5.232.963l.039 7.426a.42.42 0 01-.418.417h-.002a.414.414 0 01-.42-.412l-.04-7.428c-1.986-.042-3.722-.361-5.193-.958a33.33 33.33 0 00-.09 2.566c0 6.692 1.496 9.064 5.723 9.064z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTongueLight;
