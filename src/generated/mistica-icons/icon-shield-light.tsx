/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconShieldLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.816 21.802a.44.44 0 00.359 0c.3-.143 7.36-3.54 7.977-7.126.463-2.72.457-8.95.457-9.485v-.028a.438.438 0 00-.51-.403c-1.75.272-2.691-.358-3.784-1.089-1.06-.71-2.26-1.513-4.314-1.516h-.008c-2.054 0-3.255.804-4.317 1.515l-.007.005c-1.092.73-2.036 1.359-3.772 1.082a.414.414 0 00-.515.406v.032c0 .558-.008 6.768.465 9.481.619 3.583 7.672 6.983 7.97 7.126zM4.665 14.53c-.398-2.282-.446-7.325-.451-8.89 1.784.148 2.868-.572 3.919-1.272 1.01-.678 2.056-1.375 3.86-1.375h.005c1.801.002 2.849.7 3.857 1.375l.013.008c1.035.69 2.098 1.397 3.909 1.255-.006 1.558-.053 6.61-.443 8.9-.495 2.873-6.249 5.879-7.339 6.425-1.09-.543-6.834-3.549-7.33-6.426z"
            />
        </svg>
    );
};

export default IconShieldLight;
