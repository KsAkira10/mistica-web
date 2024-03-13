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

const IconWinnerFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m11.548 18.205-1.943 3.518a.53.53 0 0 1-.463.277q-.035.001-.064-.005a.54.54 0 0 1-.449-.396l-.921-3.427-3.024.923a.53.53 0 0 1-.567-.18.55.55 0 0 1-.05-.6l1.607-2.942c1.47 1.642 3.55 2.712 5.874 2.832m6.722-2.822a8.45 8.45 0 0 1-5.969 2.822l2.057 3.528a.53.53 0 0 0 .458.262q.033.001.073-.004a.53.53 0 0 0 .44-.392l.921-3.431 3.07.922c.208.06.435-.01.567-.184a.54.54 0 0 0 .04-.604zm1.158-5.816c0 4.178-3.336 7.568-7.449 7.568S4.53 13.745 4.53 9.567 7.866 2 11.98 2c4.112 0 7.448 3.39 7.448 7.567m-2.129.36c0-.3-.236-.54-.531-.54-2.388 0-4.258-1.978-4.258-4.505 0-.3-.236-.54-.53-.54a.533.533 0 0 0-.532.54c0 2.527-1.87 4.506-4.258 4.506a.533.533 0 0 0-.531.54c0 .299.236.539.531.539 2.506 0 4.258 1.701 4.258 4.14 0 .3.236.54.531.54s.531-.24.531-.54c0-2.439 1.752-4.14 4.258-4.14.29 0 .531-.24.531-.54M11.98 7.36A5.36 5.36 0 0 1 9.587 9.89a4.9 4.9 0 0 1 2.392 2.329 4.9 4.9 0 0 1 2.392-2.329A5.36 5.36 0 0 1 11.98 7.36"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.666 8.592c0-4.381-2.37-6.437-6.431-6.437-4.065 0-6.434 2.056-6.432 6.44 0 1.39.241 2.549.706 3.479l-.017.02q-.016.013-.025.036l-2.983 6.479c-.162.35-.112.762.132 1.061.185.23.456.362.778.362q.15 0 .308-.037l1.958-.72.762 2.029c.18.338.521.537.894.537h.025a.99.99 0 0 0 .894-.588l2.767-5.991 2.762 5.991a.99.99 0 0 0 .888.588h.034c.372 0 .711-.21.927-.605l.728-1.963 2.04.745a1 1 0 0 0 1.002-.356.98.98 0 0 0 .132-1.053l-2.801-6.081c.63-.995.952-2.303.952-3.936m-7.753 2.717a.55.55 0 0 1-.328-.106.61.61 0 0 1-.25-.605l.2-1.202q-.001-.006-.005-.013l-.004-.012-.838-.846a.62.62 0 0 1-.14-.639.59.59 0 0 1 .474-.406l1.151-.17.008-.002q.002 0 .009-.007l.513-1.084a.577.577 0 0 1 1.062 0L13.29 7.3c0 .008.008.008.008.008l1.151.17c.225.035.41.191.482.407a.62.62 0 0 1-.151.639l-.838.846q0 .004-.002.008c-.001.006-.003.011.002.017l.19 1.202a.6.6 0 0 1-.248.605.582.582 0 0 1-.613.034l-1.029-.564h-.017l-1.028.563a.6.6 0 0 1-.285.073m-4.474 6.72-1.6.588 2.48-5.358c.837.902 2.005 1.456 3.465 1.663l-2.446 5.303-.596-1.608a1.02 1.02 0 0 0-1.303-.588m9.815.6-.596 1.604-2.42-5.26c1.476-.143 2.694-.605 3.588-1.4l2.322 5.047-1.591-.588a1.02 1.02 0 0 0-1.303.596"
                />
            </svg>
        );
    }
};

export default IconWinnerFilled;
