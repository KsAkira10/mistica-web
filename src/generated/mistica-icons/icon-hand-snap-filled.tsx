/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconHandSnapFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.222 2.716v3.587a.707.707 0 01-.695.717.707.707 0 01-.694-.717V2.716c0-.395.312-.716.694-.716.383 0 .695.321.695.716zm10.972 14.751c.325-.34.507-.79.507-1.267 0-.482-.182-.933-.516-1.277-.28-.29-.641-.46-1.029-.505a1.833 1.833 0 00-.2-2.283 1.698 1.698 0 00-1.029-.505 1.834 1.834 0 00-.2-2.282 1.703 1.703 0 00-.989-.5l2.467-2.545a1.836 1.836 0 000-2.535 1.704 1.704 0 00-2.458 0L9.13 11.63 6.403 8.82a1.672 1.672 0 00-2.422 0 1.77 1.77 0 00-.503 1.249c0 .473.178.914.503 1.249l1.79 1.846a5.5 5.5 0 011.434 2.723l.254 1.236a6.21 6.21 0 001.62 3.081 5.882 5.882 0 003.901 1.791h.008l.02.001c.039.001.111.004.213.004.69 0 2.694-.12 3.922-1.428a3.225 3.225 0 01.235-.217c.055-.049.111-.098.162-.15l2.654-2.738zM6.929 6.157a.734.734 0 010 1.014.685.685 0 01-.49.211.667.667 0 01-.49-.21L3.514 4.658a.734.734 0 010-1.015.681.681 0 01.984 0l2.43 2.512zm4.177 1.014L13.54 4.66a.734.734 0 000-1.015.681.681 0 00-.984 0L10.12 6.157a.734.734 0 000 1.015.667.667 0 00.49.211.703.703 0 00.495-.21z"
            />
        </svg>
    );
};

export default IconHandSnapFilled;
