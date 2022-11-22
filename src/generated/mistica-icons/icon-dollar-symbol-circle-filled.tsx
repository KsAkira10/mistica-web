/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDollarSymbolCircleFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M4.771 19.418c1.673 1.61 4.107 2.429 7.23 2.429s5.557-.818 7.23-2.429c1.736-1.675 2.616-4.168 2.616-7.417 0-3.25-.88-5.745-2.616-7.417-1.673-1.611-4.107-2.429-7.23-2.429s-5.557.818-7.23 2.429C3.035 6.259 2.155 8.754 2.155 12c0 3.246.88 5.742 2.616 7.417zm7.79-8.112c.978.132 1.734.44 2.241.916.521.488.784 1.149.782 1.964 0 .913-.334 1.683-.964 2.23-.513.445-1.218.725-2.062.82v.762c0 .308-.252.56-.56.56a.562.562 0 01-.56-.56v-.745a5.621 5.621 0 01-2.695-.972c-.224-.157-.333-.358-.333-.613a.69.69 0 01.695-.681.819.819 0 01.453.146c.625.417 1.252.672 1.88.767v-3.356c-2.294-.378-2.784-1.725-2.784-2.81 0-1.655 1.075-2.78 2.784-2.971v-.754c0-.308.252-.56.56-.56.308 0 .56.252.56.56v.754c.77.078 1.485.302 2.054.655.26.163.403.387.403.639a.663.663 0 01-.664.664.936.936 0 01-.409-.115l-.008-.006a4.194 4.194 0 00-1.373-.487v3.193zm-2.115-.633c-.285-.246-.417-.566-.417-1.008 0-.47.165-.866.476-1.143.238-.213.555-.353.936-.417v3.022c-.434-.106-.768-.258-.995-.454zm3.768 3.566c0-.605-.207-1.252-1.653-1.535v3.193c1.034-.16 1.653-.764 1.653-1.658z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDollarSymbolCircleFilled;
