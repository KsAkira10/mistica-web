/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconMultisaveFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M13.149 3.756c0 .467-.177.906-.495 1.236a1.641 1.641 0 01-2.383-.005 1.774 1.774 0 01-.495-1.236c0-.467.177-.906.495-1.237A1.65 1.65 0 0111.464 2c.45 0 .872.184 1.19.514.318.33.495.774.495 1.242zM9.866 5.78a.54.54 0 00-.53-.552H6.851a.54.54 0 00-.531.552.54.54 0 00.53.552h2.484a.54.54 0 00.531-.552zM3.66 22h6.742v-.368c0-1.397.704-2.605 1.844-3.403-.518-.698-1.322-1.236-2.302-1.524a3.345 3.345 0 001.516-2.817c0-1.827-1.43-3.313-3.187-3.313s-3.187 1.486-3.187 3.313c0 1.189.608 2.232 1.516 2.817-1.752.515-2.942 1.826-2.942 3.45V22zm15.246-6.635a3.345 3.345 0 01-1.517 2.817c1.753.515 2.942 1.827 2.938 3.45V22h-9.221v-.368c0-1.623 1.19-2.936 2.942-3.45a3.344 3.344 0 01-1.517-2.817c0-1.827 1.43-3.313 3.188-3.313 1.757 0 3.187 1.486 3.187 3.313zM11.9 3.298a.603.603 0 00-.876 0 .651.651 0 00-.181.458.65.65 0 00.181.457c.232.246.64.246.876 0a.66.66 0 00.182-.457.651.651 0 00-.182-.458zm5.33 4.695c0 .468-.177.906-.494 1.237-.332.34-.763.51-1.19.514-.431 0-.862-.17-1.19-.51a1.801 1.801 0 010-2.477c.318-.33.74-.514 1.19-.514.45 0 .872.184 1.19.514.317.33.494.77.494 1.236zm-1.248-.457a.578.578 0 00-.436-.184.603.603 0 00-.44.188c-.24.25-.24.661 0 .911s.635.25.876 0a.651.651 0 00.181-.458.651.651 0 00-.181-.457zm.822-4.314l-5.675 5.9a.519.519 0 01-.754 0 .568.568 0 010-.784l5.675-5.9a.518.518 0 01.754 0 .568.568 0 010 .784z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMultisaveFilled;
