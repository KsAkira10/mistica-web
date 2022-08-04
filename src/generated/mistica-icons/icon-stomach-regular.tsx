/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconStomachRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M9.096 21.332c.773.342 1.633.507 2.535.507 1.983 0 4.177-.804 6.152-2.327 2.07-1.6 3.422-3.788 3.817-6.168l.003-.012.003-.01a6.86 6.86 0 00.174-.883c.44-3.342-1.678-4.91-3.846-5.266a8.707 8.707 0 01-.285-.04 5.559 5.559 0 00-.86-.047 3.165 3.165 0 01-.633-2.924 1.47 1.47 0 00-.026-1.06c-.115-.265-.378-.624-.978-.829-1.198-.411-1.938.311-2.154.928a6.484 6.484 0 00.695 5.235c-.597.678-.975 1.588-1.123 2.714a5 5 0 00-.06.647c-.052.376 0 .751.049 1.082.039.274.092.65.01.742-.019.022-.195.199-1.078.173-.137-.044-.291-.085-.475-.134l-.01-.003c-.691-.154-1.72-.305-2.414-.28h-.02c-1-.053-2.025.146-2.963.577a6.394 6.394 0 00-3.336 3.605c-.216.488-.21 1.4.697 1.927.49.283 1.446.591 2.294-.58.104-.142.205-.285.303-.428.448-.642.837-1.196 1.44-1.507l.126-.067c.196-.11.246-.126.31-.112.116.028.152.364.09.818-.109.792-.047 1.512.185 2.142.28.76.756 1.306 1.378 1.58zM7.73 15.576a1.375 1.375 0 00-.327-.04c-.352 0-.63.142-.832.245l-.031.016-.098.05c-.874.449-1.386 1.182-1.881 1.892l-.01.013c-.095.138-.19.275-.288.41-.289.397-.426.375-.673.232l-.002-.001c-.081-.048-.25-.146-.166-.369a5.188 5.188 0 012.703-2.941 5 5 0 012.4-.464l.029-.001h.025c.017.001.034.002.05 0 .541-.022 1.485.112 2.085.244.173.047.333.092.473.14.056.02.115.03.174.033 1.058.04 1.736-.143 2.131-.582.467-.523.374-1.197.299-1.744l-.002-.013-.003-.025c-.036-.264-.071-.53-.039-.723a.655.655 0 00.009-.106c0-.151.014-.325.044-.518.143-1.056.51-1.84 1.098-2.33a.628.628 0 00.104-.852 5.447 5.447 0 01-.386-.608 5.207 5.207 0 01-.44-3.941c.124-.292.46-.183.577-.145l.005.002c.152.053.225.112.241.148.017.034.006.093-.002.12a.766.766 0 01-.02.062 4.421 4.421 0 001.137 4.393.62.62 0 00.48.17c.366-.03.683-.002.817.015l.053.007c.12.018.241.036.317.043.966.16 3.17.857 2.776 3.866a5.559 5.559 0 01-.126.658.613.613 0 00-.04.14c-.33 2.092-1.52 4.025-3.358 5.445-2.521 1.936-5.376 2.574-7.445 1.667-.309-.135-.55-.429-.712-.871-.16-.432-.199-.947-.118-1.53.233-1.647-.546-2.09-1.028-2.207z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconStomachRegular;
