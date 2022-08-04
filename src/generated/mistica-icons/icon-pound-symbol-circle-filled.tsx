/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPoundSymbolCircleFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M2 12C2 6.5 6.5 2 12 2s10 4.5 10 10c0 5.536-4.5 10-10 10-5.536 0-10-4.5-10-10zm7.608 3.752h4.712a.552.552 0 00.536-.536.552.552 0 00-.536-.536h-3.144c.072-.212.108-.392.108-.608V12.36h1.608a.552.552 0 00.536-.536.552.552 0 00-.536-.536h-1.608V9.68c0-.644.428-1.072 1.072-1.072.392 0 .572.072.716.216.216.216.536.18.752-.036.216-.216.18-.536-.036-.752-.5-.464-1.032-.5-1.428-.5-1.248 0-2.144.892-2.144 2.144v1.608H9.68a.552.552 0 00-.536.536c0 .284.252.536.536.536h.536v1.712a.603.603 0 01-.608.608.552.552 0 00-.536.536c0 .284.252.536.536.536z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.841 12c0-6.442-3.406-9.845-9.845-9.845-6.437 0-9.84 3.403-9.84 9.846 0 6.437 3.4 9.84 9.84 9.84 6.442 0 9.845-3.403 9.845-9.84zm-11.714 4.541h4.712a.41.41 0 01.406.407v.431a.404.404 0 01-.403.403h-6.17a.4.4 0 01-.358-.218.922.922 0 01-.093-.423c0-.445.233-.672.698-1.118.868-.84 1.04-1.437 1.04-2.182 0-.482-.076-.963-.245-1.526h-.997a.402.402 0 01-.403-.404v-.271c0-.213.165-.39.375-.404l.661-.045a6.932 6.932 0 01-.302-1.93c0-2.162 1.288-3.4 3.54-3.4.572 0 1.496.081 2.224.305.169.053.283.21.283.387v.364a.402.402 0 01-.476.398 10.494 10.494 0 00-1.87-.202c-1.64 0-2.404.678-2.404 2.134 0 .642.154 1.289.325 1.86h2.481c.225 0 .404.182.404.404v.397c0 .225-.18.404-.404.404h-2.109c.132.524.2 1.042.2 1.54 0 1.062-.298 1.818-1.116 2.69z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconPoundSymbolCircleFilled;
