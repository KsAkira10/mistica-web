'use client';
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

const IconHeartRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M3 9.36C3 6.51 4.855 3.5 8.103 3.5c1.571 0 2.717.804 3.452 1.84.169.238.317.49.445.748q.192-.39.445-.748c.735-1.036 1.88-1.84 3.452-1.84C19.145 3.5 21 6.51 21 9.36c0 2.978-1.388 5.146-3.18 6.865-1.271 1.217-2.748 2.215-4.077 3.113l-.02.014c-.19.128-.405.266-.615.4l-.09.06c-.243.155-.471.303-.66.435l-.358.251-.359-.251a21 21 0 0 0-.658-.436l-.091-.058c-.21-.135-.426-.273-.615-.401l-.02-.014c-1.33-.898-2.805-1.896-4.076-3.113C4.388 14.506 3 12.338 3 9.359m9.625-.7h-1.25c0-.787-.274-1.799-.84-2.597-.55-.776-1.346-1.313-2.432-1.313-2.3 0-3.853 2.16-3.853 4.61 0 2.53 1.158 4.392 2.796 5.962 1.187 1.138 2.582 2.082 3.93 2.994.177.119.38.249.59.385l.092.059q.172.11.342.221l.341-.221.092-.06c.212-.135.414-.265.59-.384 1.35-.912 2.744-1.856 3.931-2.994 1.638-1.57 2.796-3.433 2.796-5.963 0-2.449-1.553-4.609-3.853-4.609-1.086 0-1.881.537-2.432 1.313-.566.798-.84 1.81-.84 2.597"
                />
            </svg>
        );
    } else if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.497 21.772c.13.144.308.228.499.228a.66.66 0 0 0 .495-.232 118 118 0 0 0 2.826-3.278l.008-.01 2.502-3.244.008-.012.007-.012c2.472-3.488 3.676-6.256 3.676-8.462 0-1.438-.492-2.66-1.425-3.54A4.5 4.5 0 0 0 16.997 2c-1.105 0-1.966.26-2.792.835-.678.471-1.375 1.19-2.213 2.29C10.225 2.834 8.812 2 6.83 2c-1.162 0-2.24.435-3.028 1.227-.872.866-1.333 2.089-1.333 3.523 0 2.13 1.112 4.77 3.397 8.075 1.909 2.752 4.236 5.377 5.63 6.947M3.83 6.75c0-2.293 1.508-3.32 3.001-3.32 1.508 0 2.636.508 4.624 3.296.13.18.331.288.544.288a.68.68 0 0 0 .545-.288c2.011-2.816 3.002-3.292 4.46-3.292 1.52 0 3.158 1.039 3.158 3.32 0 1.858-1.143 4.415-3.398 7.6l-2.487 3.223c-.819.987-1.634 1.922-2.281 2.657-1.387-1.566-3.379-3.871-5.024-6.248C4.885 10.977 3.83 8.54 3.83 6.75"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.497 21.772c.13.144.308.228.499.228a.66.66 0 0 0 .495-.232 118 118 0 0 0 2.826-3.278l.008-.01 2.502-3.244.007-.012.008-.012c2.472-3.488 3.676-6.256 3.676-8.462 0-1.438-.492-2.66-1.425-3.54A4.5 4.5 0 0 0 16.997 2c-1.105 0-1.966.26-2.792.835-.678.471-1.375 1.19-2.213 2.29C10.225 2.834 8.812 2 6.83 2c-1.162 0-2.24.435-3.028 1.227-.872.866-1.333 2.089-1.333 3.523 0 2.13 1.112 4.77 3.397 8.075 1.909 2.752 4.236 5.377 5.63 6.947M3.83 6.75c0-2.293 1.508-3.32 3.001-3.32 1.508 0 2.636.508 4.624 3.296.13.18.331.288.544.288a.68.68 0 0 0 .545-.288c2.011-2.816 3.002-3.292 4.46-3.292 1.52 0 3.158 1.039 3.158 3.32 0 1.858-1.143 4.415-3.398 7.6l-2.487 3.223c-.819.987-1.634 1.922-2.281 2.657-1.387-1.566-3.379-3.871-5.024-6.248C4.885 10.977 3.83 8.54 3.83 6.75"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 21.809h.017c.042 0 .08 0 .123-.006h.017q.202-.009.4-.056c.46-.1.896-.297 1.277-.574.457-.328.992-.868 1.146-1.028q.02-.021.037-.042c1.565-1.616 2.487-2.773 3.638-4.563 1.457-2.26 2.454-4.501 2.97-6.664.56-2.353.097-4.308-1.298-5.504-.81-.695-1.913-1.112-3.109-1.174-1.258-.064-2.563.255-3.77.925-.415.23-.84.473-1.3.747a.32.32 0 0 1-.3 0 54 54 0 0 0-1.296-.745c-1.21-.672-2.516-.991-3.774-.927-1.193.062-2.3.48-3.109 1.171C2.274 4.568 1.812 6.52 2.372 8.873c.516 2.166 1.516 4.41 2.97 6.667 1.162 1.804 2.09 2.966 3.677 4.605.154.157.692.7 1.149 1.03.38.278.818.471 1.277.575q.198.044.4.056h.017q.063.004.138.003m.086-1.12H12v.002h-.087a1.4 1.4 0 0 1-.213-.03l-.017-.004a2.3 2.3 0 0 1-.863-.392c-.302-.218-.728-.619-.997-.899-1.549-1.6-2.409-2.675-3.54-4.431-1.387-2.154-2.334-4.28-2.821-6.32-.23-.963-.263-1.834-.104-2.585.16-.745.51-1.353 1.042-1.81.622-.534 1.488-.857 2.437-.904 1.048-.053 2.146.218 3.168.79.404.221.818.462 1.272.73l.006.004c.44.252.977.252 1.417.005l.011-.005c.454-.27.871-.51 1.277-.734 1.026-.572 2.124-.843 3.177-.793.947.05 1.812.37 2.437.905.53.456.88 1.064 1.04 1.81.159.75.122 1.621-.107 2.585-.488 2.036-1.437 4.162-2.824 6.319-1.131 1.756-1.991 2.835-3.54 4.431l-.034.04c-.272.277-.67.652-.958.86a2.3 2.3 0 0 1-.863.392l-.017.002q-.104.027-.213.031"
                />
            </svg>
        );
    }
};

export default IconHeartRegular;
