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

const IconDollarSymbolCircleRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.996 2.15c-3.123 0-5.557.818-7.23 2.429C3.03 6.254 2.15 8.749 2.15 11.996c0 3.246.88 5.742 2.616 7.417 1.673 1.61 4.107 2.429 7.23 2.429s5.557-.818 7.23-2.429c1.736-1.675 2.616-4.168 2.616-7.417 0-3.25-.88-5.745-2.616-7.417-1.673-1.611-4.107-2.429-7.23-2.429Zm8.596 9.846c0 3.032-.817 5.151-2.234 6.518-1.369 1.317-3.449 2.078-6.362 2.078-2.914 0-4.994-.76-6.362-2.078-1.417-1.367-2.234-3.49-2.234-6.518 0-3.029.817-5.15 2.234-6.517C7.002 4.16 9.082 3.4 11.996 3.4s4.994.761 6.362 2.079c1.416 1.363 2.234 3.485 2.234 6.517Zm-9.156 5.994a.56.56 0 1 0 1.12 0v-.762c.844-.095 1.549-.374 2.062-.82.63-.547.963-1.317.963-2.23 0-.815-.266-1.476-.784-1.964-.509-.478-1.263-.787-2.242-.917l-.001-3.189a4.23 4.23 0 0 1 1.372.487l.008.006c.107.053.25.115.41.115a.663.663 0 0 0 .663-.664c0-.252-.143-.48-.403-.639-.568-.351-1.281-.577-2.05-.654v-.755a.562.562 0 0 0-.561-.56.562.562 0 0 0-.56.56v.754c-1.71.19-2.787 1.316-2.787 2.974 0 1.085.493 2.434 2.788 2.81l.001 3.35c-.626-.095-1.256-.353-1.879-.767a.872.872 0 0 0-.454-.146.688.688 0 0 0-.694.68c0 .256.109.457.333.614.78.545 1.74.89 2.694.972v.745Zm1.119-5.29c1.444.282 1.65.928 1.65 1.534 0 .892-.617 1.498-1.65 1.658V12.7Zm-2.058-4.183c.236-.212.555-.353.936-.417l.001 3.022c-.436-.107-.769-.258-.996-.454-.285-.246-.417-.566-.417-1.008 0-.47.165-.866.476-1.143Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 18.555a.562.562 0 0 1-.56-.56v-.745a5.632 5.632 0 0 1-2.694-.972c-.224-.157-.333-.358-.333-.613 0-.376.31-.68.694-.68.163.005.32.055.454.145.623.414 1.253.673 1.88.768l-.002-3.352c-2.295-.375-2.788-1.724-2.788-2.808 0-1.659 1.077-2.784 2.787-2.975V6.01c0-.308.252-.56.56-.56.308 0 .56.252.56.56v.755c.77.077 1.483.303 2.05.654.261.16.404.387.404.639a.663.663 0 0 1-.664.664.925.925 0 0 1-.409-.115l-.008-.006a4.232 4.232 0 0 0-1.372-.486v3.188c.98.13 1.734.439 2.243.917.518.488.784 1.149.784 1.964 0 .913-.333 1.683-.963 2.23-.513.446-1.218.725-2.062.82v.762a.56.56 0 0 1-.56.56Zm2.211-4.316c0-.606-.207-1.252-1.651-1.534v3.192c1.033-.16 1.651-.766 1.651-1.658Zm-2.773-6.134c-.381.064-.7.205-.936.417-.31.277-.476.672-.476 1.143 0 .442.132.762.418 1.008.226.196.56.348.995.454V8.105Z"
                />
                <path
                    fill={fillColor}
                    d="M12 21.847c-3.122 0-5.556-.818-7.229-2.429-1.736-1.675-2.616-4.17-2.616-7.417s.88-5.742 2.616-7.417c1.673-1.611 4.107-2.429 7.23-2.429s5.557.818 7.23 2.429c1.736 1.672 2.616 4.168 2.616 7.417 0 3.25-.88 5.742-2.616 7.417-1.673 1.61-4.107 2.429-7.23 2.429Zm0-18.572c-2.823 0-4.993.712-6.45 2.115C4.04 6.844 3.275 9.068 3.275 12c0 2.934.765 5.155 2.275 6.611 1.457 1.404 3.627 2.115 6.45 2.115 2.824 0 4.995-.711 6.452-2.114 1.51-1.454 2.274-3.678 2.274-6.611s-.764-5.154-2.274-6.61C16.995 3.986 14.824 3.274 12 3.274Z"
                />
            </svg>
        );
    }
};

export default IconDollarSymbolCircleRegular;
