/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPhotoCameraRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M7.002 12.712a5.009 5.009 0 005.004 5.004 5.002 5.002 0 005.004-4.996 5.012 5.012 0 00-5.004-5.008 5.005 5.005 0 00-5.004 5zm1.432 0a3.573 3.573 0 017.144 0 3.573 3.573 0 01-7.144 0z"
                    fill={fillColor}
                />
                <path
                    d="M4.142 20.576H19.87c1.18 0 2.144-.96 2.132-2.14V8.428a2.147 2.147 0 00-2.144-2.144h-2.204l-2.648-2.648a.69.69 0 00-.504-.212H9.498a.722.722 0 00-.504.212L6.346 6.284H4.142a2.147 2.147 0 00-2.144 2.144v10.004c0 1.184.964 2.144 2.144 2.144zM3.43 8.424c0-.392.32-.712.712-.712l2.512.004c.188 0 .372-.08.504-.212l2.648-2.648h4.408l2.648 2.648a.69.69 0 00.504.212h2.504c.392 0 .712.32.712.712v10.004c0 .392-.32.712-.712.712H4.142a.714.714 0 01-.712-.712V8.424z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.322 18.878c.535-.566.499-1.384.493-1.434h-.003V8.556c0-.76-.294-1.204-.54-1.445-.44-.428-.994-.47-1.151-.481a.471.471 0 01-.04-.004l-5.235-.006-.813-1.389a1.197 1.197 0 00-1.027-.591h-2.183c-.456 0-.865.255-1.067.664L9.11 6.62c-2.42 0-4.428.003-4.95.006-.826.003-1.29.33-1.537.602-.513.574-.451 1.306-.446 1.325l.026 8.908c.047 1.6 1.17 1.91 1.633 1.91l16.249.003c.636 0 1.025-.269 1.238-.496zm-.88-.815c-.047.05-.137.118-.358.123l-16.266-.003H3.81c-.055-.008-.386-.051-.407-.733l-.028-8.956c-.003-.002-.017-.283.143-.462.118-.134.336-.202.647-.204.55-.006 2.737-.006 5.32-.006.23 0 .44-.132.54-.336l.798-1.647 2.168-.006.99 1.69a.605.605 0 00.52.296l5.591.003c.003 0 .202.011.337.143.12.115.179.314.179.591l.003 8.927c.005.065-.009.41-.169.58zm-5.512-5.056c0-2.74-2.238-2.97-2.812-2.983a1.968 1.968 0 00-.222.003h-.059c-.588.005-2.781.21-2.781 2.966 0 2.762 2.213 2.977 2.801 2.986h.095c.03 0 .061 0 .091-.002h.083c.563-.012 2.804-.225 2.804-2.97zm-1.202 0c0 .431 0 1.742-1.622 1.773l-.154.003h-.075c-1.617-.025-1.617-1.356-1.617-1.793 0-.434 0-1.759 1.591-1.773h.048c.065 0 .132 0 .19.003 1.64.04 1.64 1.356 1.64 1.787z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconPhotoCameraRegular;
