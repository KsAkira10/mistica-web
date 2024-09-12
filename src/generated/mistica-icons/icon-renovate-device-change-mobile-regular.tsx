'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconRenovateDeviceChangeMobileRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.203 17.377a.7.7 0 0 1 .789.615.73.73 0 0 1-.588.828l-3.723.559-.535-3.887c-.058-.396.21-.769.589-.824a.7.7 0 0 1 .789.614l.214 1.55A8.75 8.75 0 0 0 20.178 12c0-4.711-3.674-8.547-8.185-8.547a7.8 7.8 0 0 0-3.5.819.683.683 0 0 1-.927-.345.74.74 0 0 1 .33-.968A9.15 9.15 0 0 1 11.993 2c5.278 0 9.576 4.483 9.576 10 0 2.011-.567 3.934-1.619 5.568zm-5.064 3.64a.746.746 0 0 0 .325-.972.687.687 0 0 0-.932-.34 7.86 7.86 0 0 1-3.54.838c-4.51 0-8.184-3.836-8.184-8.548 0-1.745.513-3.426 1.449-4.841l.223 1.56a.705.705 0 0 0 .686.623q.041-.001.086-.008l.012-.001c.38-.056.642-.429.589-.824l-.535-3.888-3.723.559c-.379.056-.642.428-.588.824.053.396.41.675.789.615l1.253-.191A10.3 10.3 0 0 0 2.42 12c0 5.512 4.294 10 9.576 10a9.15 9.15 0 0 0 4.142-.982M7.985 16.06V7.93c0-1.243.972-2.258 2.162-2.258h3.687c1.19 0 2.162 1.015 2.162 2.258v8.133c0 1.243-.972 2.258-2.162 2.258h-3.687c-1.19-.005-2.162-1.015-2.162-2.262m1.048-.973h5.92V8.899h-5.92zm5.907 1.094H9.042c.058.586.53 1.047 1.105 1.047h3.687c.58 0 1.048-.46 1.106-1.047m0-8.37c-.058-.588-.531-1.048-1.106-1.048h-3.687c-.575 0-1.047.46-1.105 1.047z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.203 17.377a.7.7 0 0 1 .789.615.73.73 0 0 1-.588.828l-3.723.559-.535-3.887c-.058-.396.21-.769.589-.824a.7.7 0 0 1 .789.614l.214 1.55A8.75 8.75 0 0 0 20.178 12c0-4.711-3.674-8.547-8.185-8.547a7.8 7.8 0 0 0-3.5.819.683.683 0 0 1-.927-.345.74.74 0 0 1 .33-.968A9.15 9.15 0 0 1 11.993 2c5.278 0 9.576 4.483 9.576 10 0 2.011-.567 3.934-1.619 5.568zm-5.064 3.64a.746.746 0 0 0 .325-.972.687.687 0 0 0-.932-.34 7.86 7.86 0 0 1-3.54.838c-4.51 0-8.184-3.836-8.184-8.548 0-1.745.513-3.426 1.449-4.841l.223 1.56a.705.705 0 0 0 .686.623q.041-.001.086-.008l.012-.001c.38-.056.642-.429.589-.824l-.535-3.888-3.723.559c-.379.056-.642.428-.588.824.053.396.41.675.789.615l1.253-.191A10.3 10.3 0 0 0 2.42 12c0 5.512 4.294 10 9.576 10a9.15 9.15 0 0 0 4.142-.982M7.985 16.06V7.93c0-1.243.972-2.258 2.162-2.258h3.687c1.19 0 2.162 1.015 2.162 2.258v8.133c0 1.243-.972 2.258-2.162 2.258h-3.687c-1.19-.005-2.162-1.015-2.162-2.262m1.048-.973h5.92V8.899h-5.92zm5.907 1.094H9.042c.058.586.53 1.047 1.105 1.047h3.687c.58 0 1.048-.46 1.106-1.047m0-8.37c-.058-.588-.531-1.048-1.106-1.048h-3.687c-.575 0-1.047.46-1.105 1.047z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.163 18.039c0-.429.25-.628.633-.628.384 0 .634.2.634.628 0 .207-.06.358-.16.462-.112.112-.275.165-.473.165-.2 0-.362-.053-.474-.165-.104-.104-.16-.258-.16-.462"
                />
                <path
                    fill={fillColor}
                    d="M18.88 20.742h-6.14c-.921 0-1.647-.25-2.16-.742-.531-.513-.8-1.261-.8-2.219V6.221c0-.958.269-1.706.8-2.219.51-.493 1.239-.742 2.16-.742h6.143c.922 0 1.647.25 2.16.742.532.513.801 1.258.801 2.219v11.56c0 .958-.269 1.706-.801 2.219-.513.492-1.24.742-2.162.742M12.74 4.38c-1.271 0-1.84.57-1.84 1.84v11.561c0 1.272.569 1.84 1.84 1.84h6.143c1.272 0 1.84-.568 1.84-1.84V6.221c0-1.272-.568-1.84-1.84-1.84zM5.175 18.585c0-.255.145-.373.375-.373s.378.118.378.373q-.001.181-.095.274a.38.38 0 0 1-.28.098c-.12 0-.219-.03-.283-.098q-.094-.09-.095-.274"
                />
                <path
                    fill={fillColor}
                    d="M3.925 20.717h3.02c1.106 0 1.767-.664 1.77-1.77v-5.992c0-1.11-.66-1.77-1.77-1.77h-3.02c-1.109 0-1.77.66-1.77 1.77v5.991c0 1.11.661 1.77 1.77 1.77m0-8.412h3.02c.485 0 .65.162.65.65v5.991c0 .485-.165.65-.65.65h-3.02c-.487 0-.65-.165-.65-.65v-5.991c0-.485.166-.65.65-.65M6.614 7.602c0 .271.219.49.49.49.118 0 .23-.042.317-.123.137-.118.83-.712.955-.838.4-.4.398-.899-.005-1.305a23 23 0 0 0-.95-.846.49.49 0 0 0-.692.056.49.49 0 0 0 .056.692l.318.274h-.096c-.933 0-1.667.25-2.18.745-.532.516-.804 1.267-.804 2.238v.64a.489.489 0 1 0 .98 0v-.64c0-1.366.637-2.002 2.004-2.002h.064l-.286.246a.49.49 0 0 0-.17.373"
                />
            </svg>
        );
    }
};

export default IconRenovateDeviceChangeMobileRegular;
