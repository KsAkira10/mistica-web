/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDataRolloverLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m19.5 13.585 2.392-2.412a.348.348 0 0 0 0-.504.341.341 0 0 0-.5 0l-1.536 1.549V12c0-4.968-4-9-8.928-9C6 3 2 7.032 2 12s4 9 8.932 9c.212 0 .356-.141.356-.359 0-.214-.14-.359-.356-.359-4.536 0-8.216-3.71-8.216-8.282 0-4.573 3.676-8.282 8.212-8.282s8.216 3.71 8.216 8.282v.181l-1.5-1.548a.341.341 0 0 0-.5 0 .348.348 0 0 0 0 .504l2.356 2.448Zm-.716 1.657c0-.4.324-.722.716-.722a.72.72 0 0 1 .716.722c0 .4-.32.722-.716.722a.718.718 0 0 1-.716-.722ZM15.216 12c0 2.375-1.928 4.319-4.284 4.319S6.644 14.375 6.644 12s1.928-4.319 4.284-4.319S15.216 9.625 15.216 12Zm-4.288-3.6c-1.964 0-3.572 1.62-3.572 3.6s1.608 3.6 3.572 3.6S14.5 13.98 14.5 12s-1.608-3.6-3.572-3.6Z"
            />
        </svg>
    );
};

export default IconDataRolloverLight;
