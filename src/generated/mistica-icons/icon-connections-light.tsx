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

const IconConnectionsLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.176 14.98a.371.371 0 00-.52-.088.372.372 0 00-.087.52 3.708 3.708 0 01-.404 4.76c-.056-.736-.568-1.336-1.352-1.644.356-.34.576-.808.576-1.336 0-1.02-.836-1.856-1.855-1.856-1.02 0-1.855.836-1.855 1.856 0 .528.227 1.004.583 1.344-.775.308-1.28.916-1.327 1.66a3.69 3.69 0 01-1.1-2.632c0-2.04 1.66-3.7 3.699-3.7.204 0 .372-.16.372-.372a.364.364 0 00-.372-.372c-.268 0-.536.024-.792.072a.113.113 0 01-.009-.028.114.114 0 00-.007-.028l-1.895-3.28A4.445 4.445 0 0011.98 2C9.545 2 7.554 3.992 7.554 6.444c0 1.368.624 2.592 1.595 3.408l-1.895 3.28a.092.092 0 00-.009.028l-.007.028A4.436 4.436 0 002 17.556 4.444 4.444 0 006.446 22a4.452 4.452 0 004.427-4.072h2.259A4.44 4.44 0 0017.558 22 4.446 4.446 0 0022 17.556a4.477 4.477 0 00-.824-2.576zM10.888 6.072a1.11 1.11 0 011.108-1.108c.608 0 1.108.504 1.108 1.108a1.11 1.11 0 01-1.108 1.108 1.103 1.103 0 01-1.108-1.108zm1.108 4.084c-.68 0-1.32-.188-1.863-.512V9.2c0-.736.783-1.272 1.863-1.272 1.092 0 1.887.536 1.887 1.272v.428c-.551.332-1.2.528-1.887.528zM8.297 6.444c0-2.04 1.66-3.7 3.699-3.7a3.703 3.703 0 012.615 6.316c-.056-.736-.568-1.336-1.352-1.644.356-.34.576-.808.576-1.336 0-1.02-.835-1.856-1.855-1.856s-1.855.836-1.855 1.856c0 .528.228 1.004.584 1.344-.76.3-1.264.908-1.312 1.652a3.707 3.707 0 01-1.1-2.632zM12 10.892a4.43 4.43 0 002.243-.616l1.795 3.108a4.452 4.452 0 00-2.906 3.796h-2.26a4.42 4.42 0 00-2.906-3.796l1.79-3.108a4.396 4.396 0 002.244.616zm-7.425 9.86v-.444c0-.736.784-1.272 1.863-1.272 1.092 0 1.887.536 1.887 1.272v.428a3.655 3.655 0 01-1.887.528 3.761 3.761 0 01-1.863-.512zm1.867-4.676c.604 0 1.108.504 1.108 1.108 0 .604-.504 1.108-1.108 1.108a1.113 1.113 0 01-1.107-1.108 1.11 1.11 0 011.107-1.108zm2.627 4.096c-.056-.736-.568-1.336-1.351-1.644.356-.34.575-.808.575-1.336 0-1.02-.835-1.856-1.855-1.856a1.846 1.846 0 00-1.263 3.192c-.776.308-1.28.916-1.328 1.66a3.69 3.69 0 01-1.1-2.632c0-2.04 1.66-3.7 3.7-3.7a3.704 3.704 0 012.622 6.316zm8.48-4.096c.605 0 1.108.504 1.108 1.108 0 .604-.503 1.108-1.107 1.108a1.113 1.113 0 01-1.108-1.108 1.11 1.11 0 011.108-1.108zm-1.858 4.676v-.444c0-.736.783-1.272 1.863-1.272 1.091 0 1.887.536 1.887 1.272v.428a3.66 3.66 0 01-1.887.528 3.693 3.693 0 01-1.863-.512z"
                />
                <path fill={fillColor} d="M19.405 14.592a.736.736 0 100-1.472.736.736 0 000 1.472z" />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.68 13.311a3.626 3.626 0 012.485-.994s.008-.031.005-.034a3.674 3.674 0 013.67 3.672 3.67 3.67 0 01-3.67 3.673 3.632 3.632 0 01-2.865-1.41l-2.171.995a2.122 2.122 0 01-1.406 2.521 2.12 2.12 0 01-2.673-1.361 2.121 2.121 0 013.734-1.905l2.07-.961a3.66 3.66 0 01.283-3.605l-1.921-1.658a3.602 3.602 0 01-2.163.745 3.494 3.494 0 01-2.204-.83l-1.782 1.749c.202.37.308.781.308 1.201a2.61 2.61 0 01-4.454 1.857 2.612 2.612 0 01-.77-1.851 2.612 2.612 0 012.614-2.608 2.575 2.575 0 011.806.728l1.656-1.655a3.463 3.463 0 01-.347-3.863L5.938 6.06A2.13 2.13 0 012.63 4.275a2.128 2.128 0 114.255.016 2.09 2.09 0 01-.365 1.185l1.832 1.642a3.548 3.548 0 016 1.078l2.785-.829a3.219 3.219 0 010-.233 2.271 2.271 0 014.456-.691 2.27 2.27 0 01-4.182 1.686l-2.823.829c.028.148.039.297.042.448a3.55 3.55 0 01-.83 2.247l1.88 1.658zm5.202-6.216a1.458 1.458 0 10-2.916-.003 1.458 1.458 0 002.916.003zM4.758 5.588c.003 0 .006 0 .009-.003a1.29 1.29 0 001.294-1.29v-.006c0-.718-.583-1.303-1.3-1.303-.717 0-1.302.583-1.302 1.3 0 .717.582 1.302 1.3 1.302zm4.995 14.157a1.303 1.303 0 001.31 1.291 1.29 1.29 0 001.292-1.294v-.017a1.303 1.303 0 00-1.31-1.29 1.303 1.303 0 00-1.292 1.31zm-4.995-6.372a1.782 1.782 0 10.002 3.564 1.782 1.782 0 00-.002-3.564zm6.289-6.698a2.741 2.741 0 100 5.485 2.741 2.741 0 002.742-2.743 2.741 2.741 0 00-2.742-2.742zm7.12 6.474a2.843 2.843 0 00-.002 5.683 2.843 2.843 0 00.003-5.684z"
                />
            </svg>
        );
    }
};

export default IconConnectionsLight;
