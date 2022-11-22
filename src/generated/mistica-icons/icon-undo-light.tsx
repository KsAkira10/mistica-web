/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconUndoLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M5.216 15.242c0 .399-.32.722-.716.722a.719.719 0 01-.716-.722c0-.399.32-.722.716-.722a.72.72 0 01.716.722zM13.072 3c-4.928 0-8.928 4.032-8.928 9v.218l-1.536-1.549a.341.341 0 00-.5 0 .348.348 0 000 .504L4.5 13.585l2.392-2.412a.348.348 0 000-.504.341.341 0 00-.5 0l-1.536 1.549V12c0-4.573 3.68-8.282 8.216-8.282s8.216 3.71 8.216 8.282c0 4.573-3.68 8.282-8.216 8.282-.216 0-.356.145-.356.36 0 .217.144.358.356.358C18 21 22 16.968 22 12s-4-9-8.928-9z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconUndoLight;
