/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSkullFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.525 2.16c.28 0 .588 0 .86.011 1.762.037 8.641.734 8.641 8.958 0 4.137-1.733 6.364-3.68 7.558v.652c0 .824-.233 1.462-.703 1.883-.454.411-1.11.621-1.956.621H9.351c-.848 0-1.512-.21-1.966-.621-.482-.418-.723-1.06-.723-1.88v-.647c-1.946-1.185-3.68-3.429-3.68-7.613 0-8.292 6.734-8.914 8.543-8.922Zm-3.3 11.95c1.33-.026 2.883-.818 2.883-2.967 0-.165-.009-.322-.026-.468-.21-1.81-1.616-2.487-2.862-2.515-.073-.003-.163-.006-.244-.003-1.21.011-2.686.698-2.854 2.591-.011.12-.017.247-.017.378 0 2.174 1.555 2.967 2.888 2.986h.098l.067-.001.067-.001Zm7.796 0c1.328-.026 2.882-.818 2.877-2.967 0-.165-.009-.322-.026-.468-.207-1.81-1.613-2.487-2.86-2.515-.075-.003-.17-.003-.243-.003-1.213.011-2.687.698-2.855 2.591-.01.12-.016.247-.016.378 0 2.174 1.554 2.967 2.888 2.986h.1l.068-.001.067-.001Zm-2.465 2.66a.642.642 0 0 0 .344-.845l-.36-.857a.656.656 0 0 0-.855-.345.644.644 0 0 0-.348.846l.364.857c.143.33.524.485.855.345Zm-2.219-.347.364-.854a.646.646 0 0 0-.35-.849.66.66 0 0 0-.854.345l-.364.857v.003c-.135.33.02.706.35.843a.651.651 0 0 0 .854-.345Z"
            />
        </svg>
    );
};

export default IconSkullFilled;
