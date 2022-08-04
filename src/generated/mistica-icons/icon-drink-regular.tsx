/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDrinkRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.125 5.127a.62.62 0 00-.24-.843l-3.676-2.05a.623.623 0 00-.555-.026.609.609 0 00-.355.423l-.608 2.546H5.259c-.806 0-1.462.653-1.459 1.53l1.63 13.678a1.46 1.46 0 001.462 1.456h8.227c.81 0 1.463-.652 1.46-1.384l1.638-13.823c0-.804-.658-1.457-1.465-1.457h-.781l.35-1.456 2.955 1.647.003.001.003.002c.3.168.678.059.843-.241v-.003zM5.259 6.421h9.13l-.578 2.4H5.307l-.26-2.187c0-.118.095-.213.212-.213zm10.415 0h1.081c.118 0 .216.095.222.14l-.27 2.26h-1.61l.577-2.4zm.885 3.642l-1.224 10.322a.209.209 0 01-.213.21h-8.23c-.117 0-.215-.095-.218-.286L5.453 10.063h8.058l-2.156 8.991a.625.625 0 001.215.292l2.227-9.283h1.762zM8.98 13.65c-.302.302-.594.403-.84.406-.392 0-.683-.25-.787-.35l-.079-.079c-.156-.168-.725-.862.05-1.636.3-.296.586-.394.836-.394.397 0 .697.252.798.347l.076.075c.165.169.728.852-.054 1.63zm.589.585c.977-.975.736-2.106.061-2.795a1.043 1.043 0 00-.066-.067l-.029-.029c-.182-.173-.678-.58-1.375-.58-.356 0-.894.113-1.423.64-.967.963-.729 2.095-.065 2.792l.098.098c.18.177.673.585 1.37.585.356 0 .894-.109 1.429-.644zm.602 3.4c-.171.169-.33.228-.468.228a.656.656 0 01-.437-.196l-.031-.03-.014-.015c-.087-.093-.403-.48.028-.908.168-.165.328-.221.465-.221.222 0 .387.14.443.193l.042.042c.092.096.406.474-.028.908zm.627-1.481l-.064-.064c-.135-.127-.499-.426-1.02-.423-.269 0-.67.08-1.053.462-.711.709-.518 1.566-.042 2.067l.064.064c.28.272.653.432 1.02.432.269 0 .667-.081 1.056-.468.717-.714.524-1.574.04-2.07z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDrinkRegular;
