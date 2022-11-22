/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconEditPencilLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M4.891 19.42c-.387 0-.753-.165-1.022-.45a1.611 1.611 0 01-.345-1.553l1.524-4.837c.09-.26.24-.493.445-.672 4.19-3.958 8.692-8.264 9.003-8.589a3.346 3.346 0 012.434-1.168 3.519 3.519 0 012.566 1.157 4.13 4.13 0 011.112 2.731A3.852 3.852 0 0119.496 8.7c-.555.625-9.025 8.645-9.112 8.726-.143.14-.314.244-.501.3l-4.535 1.607c-.149.065-.303.09-.457.087zm15.157 1.263c.308 0 .555.258.555.58 0 .32-.25.58-.555.58H3.936a.565.565 0 01-.555-.58c0-.319.25-.58.555-.58h16.112zM4.67 18.16c.081.09.207.126.322.092L9.527 16.7a.315.315 0 00.112-.07c1.4-1.33 8.591-8.17 9.067-8.68a2.722 2.722 0 00.756-1.91 2.916 2.916 0 00-.745-1.934 2.444 2.444 0 00-1.767-.787 2.359 2.359 0 00-1.712.787c-.355.39-5.062 4.865-7.868 7.534l-1.168 1.11a.352.352 0 00-.1.152L4.58 17.767a.387.387 0 00.09.393z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconEditPencilLight;
