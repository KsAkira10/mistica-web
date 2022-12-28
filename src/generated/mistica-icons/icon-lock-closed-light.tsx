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

const IconLockClosedLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.094 13.428c0 .395-.306.716-.684.716-.377 0-.683-.32-.683-.716 0-.395.306-.716.683-.716.378 0 .684.32.684.716zm-5.114 4.136l2.826-2.96c.13-.14.355-.14.49 0a.367.367 0 010 .504l-3.312 3.468-1.947-2.04a.367.367 0 010-.504.328.328 0 01.48 0l1.463 1.532z"
                />
                <path
                    fill={fillColor}
                    d="M17.797 9.856h-.34V7.712C17.457 4.564 15.009 2 12 2 8.99 2 6.543 4.564 6.543 7.716V9.86h-.34c-.94 0-1.703.8-1.703 1.784v8.572C4.5 21.2 5.264 22 6.203 22h11.594c.94 0 1.703-.8 1.703-1.784v-8.572c0-.984-.764-1.788-1.703-1.788zm-10.57-2.14c0-2.756 2.142-5 4.773-5s4.773 2.244 4.773 5V9.86H7.227V7.716zm10.57 13.572H6.203c-.565 0-1.023-.48-1.023-1.072v-8.572c0-.592.458-1.072 1.023-1.072h11.594c.565 0 1.023.48 1.023 1.072v8.572c0 .592-.458 1.072-1.023 1.072z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.343 16.355c0 1.053.605 1.658 1.659 1.658 1.056 0 1.66-.605 1.658-1.659 0-1.053-.605-1.658-1.658-1.658-1.054 0-1.659.605-1.659 1.659zm1.659-1.06c.722 0 1.058.337 1.058 1.06 0 .722-.336 1.058-1.058 1.058-.723 0-1.06-.336-1.06-1.058 0-.723.337-1.06 1.06-1.06z"
                />
                <path
                    fill={fillColor}
                    d="M7.203 9.336V6.492c0-2.39 2.107-4.33 4.695-4.33h.196c2.588 0 4.695 1.943 4.695 4.33V9.34c.584.115 1.065.346 1.437.691.582.538.882 1.34.896 2.381v6.258c-.014 1.042-.314 1.843-.896 2.381-.558.513-1.362.776-2.392.776h-7.7c-1.032 0-1.835-.263-2.39-.779-.58-.54-.874-1.341-.874-2.383l.003-5.802-.003-.445v-.003c0-1.042.294-1.843.874-2.384.375-.348.863-.58 1.46-.696zm9.02-.07V6.493c0-2.076-1.852-3.768-4.129-3.768h-.196c-2.277 0-4.129 1.69-4.129 3.768v2.773c.119-.007.241-.011.367-.011h7.698c.133 0 .263.004.389.013zM5.469 12.414v.023c.001.05.003.183.003.425l-.003 5.805c0 .868.23 1.52.684 1.943.44.41 1.11.62 1.983.62h7.698c1.787 0 2.666-.838 2.689-2.563V12.42c-.023-1.726-.902-2.563-2.69-2.563h-7.7c-.874 0-1.54.207-1.983.619-.45.415-.68 1.07-.68 1.938z"
                />
            </svg>
        );
    }
};

export default IconLockClosedLight;
