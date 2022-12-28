/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCleaningLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M10.461 2H17v2.695h-2.502l-.192.268 1.111 1.848c.116.196.076.424-.116.54-.036.036-.116.036-.191.036a.4.4 0 01-.344-.192l-.963-1.576-.268.344V8.54h2.694v6.922a.365.365 0 01-.384.384c-.228 0-.384-.152-.384-.384V9.307h-7.69v10.77c0 .655.5 1.155 1.155 1.155h5.38c.656 0 1.155-.5 1.155-1.156 0-.228.152-.384.384-.384.228 0 .384.152.384.384 0 1.08-.848 1.924-1.923 1.924H8.922A1.904 1.904 0 017 20.076V8.54h2.69V5.655H7.923c-.152 0-.268-.076-.343-.232-.04-.156-.04-.308.075-.424l2.498-2.883A.422.422 0 0110.461 2zm3.845 1.924h1.923V2.768h-5.572L8.811 4.883h1.267c.227 0 .383.152.383.384v3.28h2.306V5.85a.55.55 0 01.07-.22l.006-.012 1.155-1.54c.076-.12.192-.155.308-.155z"
            />
            <path fill={fillColor} d="M15.84 17.001a.768.768 0 10.002 1.536A.768.768 0 0015.84 17z" />
        </svg>
    );
};

export default IconCleaningLight;
