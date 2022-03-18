/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconConnectionsLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.176 14.98a.371.371 0 00-.52-.088.372.372 0 00-.087.52 3.708 3.708 0 01-.404 4.76c-.056-.736-.568-1.336-1.352-1.644.356-.34.576-.808.576-1.336 0-1.02-.836-1.856-1.855-1.856-1.02 0-1.855.836-1.855 1.856 0 .528.227 1.004.583 1.344-.775.308-1.28.916-1.327 1.66a3.69 3.69 0 01-1.1-2.632c0-2.04 1.66-3.7 3.699-3.7.204 0 .372-.16.372-.372a.364.364 0 00-.372-.372c-.268 0-.536.024-.792.072a.113.113 0 01-.009-.028.114.114 0 00-.007-.028l-1.895-3.28A4.445 4.445 0 0011.98 2C9.545 2 7.554 3.992 7.554 6.444c0 1.368.624 2.592 1.595 3.408l-1.895 3.28a.092.092 0 00-.009.028l-.007.028A4.436 4.436 0 002 17.556 4.444 4.444 0 006.446 22a4.452 4.452 0 004.427-4.072h2.259A4.44 4.44 0 0017.558 22 4.446 4.446 0 0022 17.556a4.477 4.477 0 00-.824-2.576zM10.888 6.072a1.11 1.11 0 011.108-1.108c.608 0 1.108.504 1.108 1.108a1.11 1.11 0 01-1.108 1.108 1.103 1.103 0 01-1.108-1.108zm1.108 4.084c.688 0 1.335-.196 1.887-.528V9.2c0-.736-.795-1.272-1.887-1.272-1.08 0-1.863.536-1.863 1.272v.444a3.637 3.637 0 001.863.512zM8.297 6.444c0-2.04 1.66-3.7 3.699-3.7a3.703 3.703 0 012.615 6.316c-.056-.736-.568-1.336-1.352-1.644.356-.34.576-.808.576-1.336 0-1.02-.835-1.856-1.855-1.856s-1.855.836-1.855 1.856c0 .528.228 1.004.584 1.344-.76.3-1.264.908-1.312 1.652a3.707 3.707 0 01-1.1-2.632zM12 10.892c-.82 0-1.587-.228-2.243-.616l-1.791 3.108a4.42 4.42 0 012.907 3.796h2.259a4.452 4.452 0 012.906-3.796l-1.795-3.108a4.43 4.43 0 01-2.243.616zm-7.425 9.86v-.444c0-.736.784-1.272 1.863-1.272 1.092 0 1.887.536 1.887 1.272v.428a3.655 3.655 0 01-1.887.528 3.761 3.761 0 01-1.863-.512zm1.867-4.676a1.11 1.11 0 00-1.107 1.108c0 .612.503 1.108 1.107 1.108s1.108-.504 1.108-1.108c0-.604-.504-1.108-1.108-1.108zm2.627 4.096c-.056-.736-.568-1.336-1.351-1.644.356-.34.575-.808.575-1.336 0-1.02-.835-1.856-1.855-1.856a1.846 1.846 0 00-1.263 3.192c-.776.308-1.28.916-1.328 1.66a3.69 3.69 0 01-1.1-2.632c0-2.04 1.66-3.7 3.7-3.7a3.704 3.704 0 012.622 6.316zm8.48-4.096a1.11 1.11 0 00-1.107 1.108c0 .612.504 1.108 1.108 1.108.604 0 1.107-.504 1.107-1.108 0-.604-.503-1.108-1.107-1.108zm-1.858 4.676v-.444c0-.736.783-1.272 1.863-1.272 1.091 0 1.887.536 1.887 1.272v.428a3.66 3.66 0 01-1.887.528 3.693 3.693 0 01-1.863-.512zm3.714-6.16a.736.736 0 100-1.472.736.736 0 000 1.472z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.165 12.322a3.626 3.626 0 00-2.485.994l-1.88-1.658a3.55 3.55 0 00.83-2.247 2.669 2.669 0 00-.042-.448l2.823-.83a2.268 2.268 0 004.182-1.685 2.272 2.272 0 00-4.456.691 3.218 3.218 0 000 .233l-2.785.83a3.547 3.547 0 00-6-1.08L6.52 5.483c.238-.35.367-.763.365-1.186A2.128 2.128 0 102.63 4.28a2.13 2.13 0 003.308 1.785l1.947 1.658a3.463 3.463 0 00.347 3.863L6.576 13.24a2.575 2.575 0 00-1.806-.728 2.612 2.612 0 00-2.614 2.608c0 .695.278 1.361.77 1.851a2.61 2.61 0 004.454-1.857c0-.42-.106-.832-.308-1.201l1.782-1.748a3.494 3.494 0 002.204.829 3.602 3.602 0 002.163-.745l1.921 1.658a3.66 3.66 0 00-.283 3.605l-2.07.96a2.121 2.121 0 00-3.734 1.905 2.12 2.12 0 004.079-1.16l2.17-.993a3.632 3.632 0 002.866 1.409 3.67 3.67 0 003.67-3.673 3.674 3.674 0 00-3.67-3.672c.003.003-.005.034-.005.034zm1.26-6.681a1.458 1.458 0 11-.002 2.915 1.458 1.458 0 01.002-2.915zM3.46 4.29c0 .717.582 1.302 1.3 1.302.002 0 .005 0 .008-.003A1.29 1.29 0 006.06 4.3v-.006c0-.718-.583-1.303-1.3-1.303-.717 0-1.302.583-1.302 1.3zm7.605 16.75a1.303 1.303 0 01-1.311-1.29 1.303 1.303 0 011.291-1.312 1.303 1.303 0 011.311 1.291v.017a1.29 1.29 0 01-1.291 1.294zm-8.088-5.88a1.782 1.782 0 003.563 0 1.782 1.782 0 00-3.563 0zm5.328-5.737a2.741 2.741 0 012.742-2.742 2.741 2.741 0 012.742 2.742 2.741 2.741 0 11-5.484 0zm7.02 6.572a2.843 2.843 0 005.683.003 2.843 2.843 0 00-5.684-.003z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconConnectionsLight;
