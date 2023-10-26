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
                    d="m11.548 18.205-1.943 3.518a.533.533 0 0 1-.463.277c-.023 0-.045 0-.064-.005a.543.543 0 0 1-.449-.396l-.921-3.427-3.024.923a.526.526 0 0 1-.567-.18.545.545 0 0 1-.05-.6l1.607-2.942c1.47 1.642 3.55 2.712 5.874 2.832Zm6.722-2.822a8.453 8.453 0 0 1-5.969 2.822l2.057 3.528a.528.528 0 0 0 .458.262c.023 0 .045 0 .073-.004a.528.528 0 0 0 .44-.392l.921-3.431 3.07.922c.208.06.435-.01.567-.184a.544.544 0 0 0 .04-.604l-1.657-2.92Zm1.158-5.816c0 4.178-3.336 7.568-7.449 7.568-4.113 0-7.449-3.39-7.449-7.568C4.53 5.39 7.866 2 11.98 2c4.112 0 7.448 3.39 7.448 7.567Zm-2.129.36c0-.3-.236-.54-.531-.54-2.388 0-4.258-1.978-4.258-4.505 0-.3-.236-.54-.53-.54a.533.533 0 0 0-.532.54c0 2.527-1.87 4.506-4.258 4.506a.533.533 0 0 0-.531.54c0 .299.236.539.531.539 2.506 0 4.258 1.701 4.258 4.14 0 .3.236.54.531.54.295 0 .531-.24.531-.54 0-2.439 1.752-4.14 4.258-4.14.29 0 .531-.24.531-.54ZM11.98 7.36A5.358 5.358 0 0 1 9.587 9.89a4.913 4.913 0 0 1 2.392 2.329 4.912 4.912 0 0 1 2.392-2.329A5.358 5.358 0 0 1 11.98 7.36Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.666 8.592c0-4.381-2.37-6.437-6.431-6.437-4.065 0-6.434 2.056-6.432 6.44 0 1.39.241 2.549.706 3.479a.212.212 0 0 1-.017.02c-.01.01-.02.02-.025.036l-2.983 6.479c-.162.35-.112.762.132 1.061.185.23.456.362.778.362.101 0 .202-.012.308-.037l1.958-.72.762 2.029c.18.338.521.537.894.537h.025a.994.994 0 0 0 .894-.588l2.767-5.992 2.762 5.992a.99.99 0 0 0 .888.588h.034c.372 0 .711-.21.927-.605l.728-1.963 2.04.745a.997.997 0 0 0 1.002-.356.984.984 0 0 0 .132-1.053l-2.801-6.081c.63-.995.952-2.303.952-3.936Zm-7.753 2.717a.545.545 0 0 1-.328-.106.608.608 0 0 1-.25-.605l.2-1.202c0-.004-.003-.008-.005-.013a.03.03 0 0 1-.004-.012l-.838-.846a.618.618 0 0 1-.14-.639.585.585 0 0 1 .474-.406l1.151-.17.008-.002c.002 0 .004-.002.009-.007l.513-1.084a.577.577 0 0 1 1.062 0L13.29 7.3c0 .008.008.008.008.008l1.151.17c.225.035.41.191.482.407a.62.62 0 0 1-.151.639l-.838.846c0 .003 0 .005-.002.008-.001.006-.003.011.002.017l.19 1.202a.597.597 0 0 1-.248.605.582.582 0 0 1-.613.034l-1.029-.564h-.017l-1.028.563a.61.61 0 0 1-.285.073Zm-4.474 6.72-1.6.588 2.48-5.358c.837.902 2.005 1.456 3.465 1.663l-2.446 5.303-.596-1.608a1.022 1.022 0 0 0-1.303-.588Zm9.815.6-.596 1.604-2.42-5.26c1.476-.143 2.694-.605 3.588-1.4l2.322 5.047-1.591-.588a1.021 1.021 0 0 0-1.303.596Z"
                />
            </svg>
        );
    }
};

export default IconWinnerFilled;
