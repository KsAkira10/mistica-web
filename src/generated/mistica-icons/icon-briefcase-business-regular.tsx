/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBriefcaseBusinessRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M22 19.264V8.274a2.229 2.229 0 00-2.218-2.236h-3.423C15.894 3.964 14.13 2.5 12.002 2.5c-2.152 0-4.057 1.521-4.541 3.538H4.223A2.233 2.233 0 002 8.274v10.99C2 20.499 3 21.5 4.223 21.5h15.554A2.233 2.233 0 0022 19.264zM17.558 8.646a.743.743 0 00-.74.744v8.567c0 .41.332.744.74.744s.74-.334.74-.744V9.39a.743.743 0 00-.74-.744zm-4.442 3.166c0-.41.332-.744.74-.744s.74.334.74.744v6.146c0 .41-.332.743-.74.743a.743.743 0 01-.74-.744v-6.145zm-2.782 1.86a.743.743 0 00-.74.743v3.538c0 .41.332.744.74.744.407 0 .74-.334.74-.744V14.42a.738.738 0 00-.74-.749zm-2.778 3.17v1.116c0 .41-.332.743-.74.743a.743.743 0 01-.74-.744v-1.115a.74.74 0 111.479 0zm1.531-10.99c.493-1.092 1.64-1.864 2.915-1.864 1.238 0 2.29.748 2.75 1.864H9.087zM19.782 7.53c.407 0 .739.334.739.744h-.005v10.99c0 .41-.332.744-.74.744H4.224a.743.743 0 01-.74-.744V8.274c0-.41.333-.744.74-.744h15.559z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBriefcaseBusinessRegular;
