/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCreditBalancePoundFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M6.737 8.009a5.57 5.57 0 015.568-5.569 5.57 5.57 0 015.569 5.569 5.57 5.57 0 01-5.569 5.568A5.57 5.57 0 016.737 8.01zm3.657 2.089c0 .29.232.521.521.521h2.963c.29 0 .521-.232.521-.521a.519.519 0 00-.521-.521h-1.751a1.13 1.13 0 00.013-.174v-.869h.87c.289 0 .52-.231.52-.521a.519.519 0 00-.52-.521h-.87v-.869a.522.522 0 01.9-.356.51.51 0 00.379.165.525.525 0 00.379-.883 1.557 1.557 0 00-1.14-.494 1.57 1.57 0 00-1.569 1.568v.869a.52.52 0 00-.521.521c0 .29.232.521.521.521v.869a.171.171 0 01-.174.174.519.519 0 00-.52.52zm-2.441 4.174c.387 0 .74.09 1.047.272l.713.428h5.034c.757 0 1.394.485 1.634 1.158l2.192-1.279a1.674 1.674 0 012.437.931c.245.744-.089 1.582-.793 1.987l-6.076 3.506a2.069 2.069 0 01-1.564.214l-3.836-.953H6.545a2.083 2.083 0 01-1.55.695h-1.39a.696.696 0 01-.695-.695v-5.569c0-.383.312-.695.695-.695h4.348zm-.869 1.394v3.48h1.822l4.005.993a.693.693 0 00.53-.071l6.072-3.506c.13-.076.205-.232.165-.348a.286.286 0 00-.41-.169l-3.443 2.01a1.73 1.73 0 01-1.087.391H10.91a.696.696 0 010-1.39h3.827a.348.348 0 000-.695H9.325l-1.034-.619a.68.68 0 00-.338-.076h-.869z"
            />
        </svg>
    );
};

export default IconCreditBalancePoundFilled;
