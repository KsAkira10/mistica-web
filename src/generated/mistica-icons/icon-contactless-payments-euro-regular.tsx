/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconContactlessPaymentsEuroRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M14.347 2H8.004C6.059 2 4.48 3.6 4.48 5.571V18.43c0 1.969 1.58 3.57 3.524 3.57h6.343c1.945 0 3.524-1.6 3.524-3.571V5.576C17.876 3.605 16.291 2 14.347 2zm-8.46 15.363V6.646h10.576v10.717H5.888zm8.46-13.932c1.047 0 1.913.773 2.085 1.788H5.919c.172-1.015 1.038-1.788 2.085-1.788h6.343zm0 17.147H8.004c-1.047 0-1.913-.773-2.085-1.788h10.513a2.123 2.123 0 01-2.085 1.788zm6.836-3.667a.71.71 0 00.51-.224 6.754 6.754 0 00-.118-9.378.699.699 0 00-.997 0 .722.722 0 000 1.01 5.319 5.319 0 01.09 7.385.722.722 0 00.027 1.01.7.7 0 00.488.197zM20.04 15a.695.695 0 01-.997.045.718.718 0 01-.04-1.01 2.938 2.938 0 00-.086-4.038.722.722 0 010-1.01.699.699 0 01.997 0A4.373 4.373 0 0120.04 15zm-5.955.557a.716.716 0 00.257-.974.696.696 0 00-.966-.256 2.615 2.615 0 01-1.322.362c-1.213 0-2.233-.837-2.544-1.967h2.72a.71.71 0 00.704-.713.71.71 0 00-.704-.713H9.51a2.646 2.646 0 012.544-1.966c.46 0 .92.123 1.322.36a.702.702 0 00.966-.26.722.722 0 00-.257-.978 4.006 4.006 0 00-2.026-.554c-1.994 0-3.655 1.468-3.989 3.393h-.42a.71.71 0 00-.703.713.71.71 0 00.704.714h.42c.333 1.925 1.994 3.393 3.988 3.393.708 0 1.407-.192 2.026-.554z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconContactlessPaymentsEuroRegular;
