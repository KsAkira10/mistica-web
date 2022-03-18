/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDataCheckedFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.034 3.863c.179.515.854.963 1.963 1.294 1.171.347 2.706.54 4.345.54 1.638 0 3.176-.193 4.344-.54 1.084-.32 1.75-.75 1.947-1.252 0-.009.008-.017.008-.017-.145-.54-.8-.997-1.963-1.345-1.16-.35-2.706-.543-4.345-.543-1.636 0-3.182.193-4.353.543-1.1.328-1.776.788-1.955 1.303.005.005.007.007.008.01v.007zm2.493 8.243a.619.619 0 00-.866 0l-3.26 3.227-1.225-1.213a.619.619 0 00-.865 0l-.003.003a.605.605 0 00.003.854l1.658 1.645a.614.614 0 00.866 0l3.692-3.659.005-.005a.602.602 0 00-.005-.852zm2.072-.678l.004-.243.01-.765h-.002c-1.196 0-1.953-.496-2.633-.944-.138-.09-.275-.18-.415-.263l-.036-.023a5.382 5.382 0 00-.451-.246l-.003-.003a3.524 3.524 0 00-1.098-.328 3.754 3.754 0 00-.555-.042h-.003c-1.178 0-1.844.438-2.55.9l-.007.005c-.686.451-1.451.952-2.622.952h-.011c.011 1.337.062 4.37.314 5.802.28 1.588 3.403 3.442 4.88 4.173a21.27 21.27 0 002.008-1.151l.002-.003c.359-.232.718-.487 1.056-.75l.014-.012c.846-.663 1.552-1.397 1.76-2.095l.014-.045c.012-.041.025-.081.033-.12.034-.196.065-.426.09-.672.03-.278.056-.586.078-.905l.014-.196c.017-.278.034-.56.048-.846l.008-.16c.025-.7.042-1.412.053-2.02zm1.44-.77c.102.003.203.006.306.006 1.638 0 3.182-.185 4.341-.532 1.151-.348 1.785-.872 1.997-1.27V5.14c-.425.339-1.008.61-1.75.83-1.247.372-2.877.576-4.591.576-1.717 0-3.348-.204-4.594-.577-.76-.221-1.347-.507-1.776-.846v2.264a6.774 6.774 0 00-.552-.026h-.005c-1.546 0-2.44.586-3.228 1.104l-.005.003c-.75.49-1.344.874-2.423.714a.608.608 0 00-.76.585L2 9.785c0 .364-.004 4.732.336 6.655.457 2.607 5.272 4.932 5.826 5.185a.613.613 0 00.524 0c.92-.44 1.807-.944 2.653-1.513 1.129.289 2.52.457 4.003.457 1.63 0 3.173-.194 4.344-.541 1.33-.398 2.006-.941 2.006-1.6v-3.341c-.454.347-1.05.644-1.75.846-1.239.372-2.87.577-4.595.577-.238 0-.473-.01-.707-.02l-.139-.005c0-.008.003-.017.006-.027a11.02 11.02 0 00.112-.814l.143.005c.193.008.387.015.585.015 1.639 0 3.182-.194 4.345-.54 1.151-.348 1.784-.872 1.997-1.27v-3.756c-.454.347-1.05.636-1.75.837-1.239.373-2.869.578-4.595.578-.131 0-.26-.005-.39-.01a27.22 27.22 0 00-.13-.004l.01-.734v-.112c.07 0 .137.003.205.005z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDataCheckedFilled;
