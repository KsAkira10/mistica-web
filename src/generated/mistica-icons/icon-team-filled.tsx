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

const IconTeamFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M7.556 14.041c0-1.05.569-1.972 1.536-2.58-.356-.585-1-1.037-1.835-1.289A2.604 2.604 0 008.295 8.1c0-1.435-1.161-2.6-2.593-2.6a2.597 2.597 0 00-1.555 4.672C2.844 10.562 2 11.446 2 12.554v5.941h5.556v-4.454zm12.297-3.869A2.604 2.604 0 0020.89 8.1c0-1.435-1.162-2.6-2.593-2.6a2.597 2.597 0 00-1.555 4.672c-.834.252-1.48.704-1.835 1.288.967.609 1.536 1.531 1.536 2.581V18.5H22v-5.941c0-1.113-.844-1.997-2.147-2.387z"
                    fill={fillColor}
                />
                <path
                    d="M14.595 9.583c0-1.435-1.161-2.6-2.593-2.6a2.6 2.6 0 00-2.593 2.6c0 .846.413 1.597 1.038 2.072-1.303.39-2.147 1.274-2.147 2.382v4.458h7.405v-4.458c0-1.108-.844-1.992-2.148-2.382a2.59 2.59 0 001.038-2.072z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.374 6.113a.583.583 0 00.384.547.435.435 0 00.18.044h.002a.048.048 0 00.018-.003l.005-.002.009.002c.006.002.01.003.016.003h.003c.341 0 .616-.26.619-.585l.014-2.546c.003-.325-.272-.589-.614-.591h-.002a.604.604 0 00-.62.585l-.014 2.546zM6.24 12.52c-.728 0-1.294-.18-1.686-.541-.41-.373-.614-.924-.614-1.644 0-.717.208-1.272.614-1.647.392-.362.96-.541 1.686-.541.728 0 1.294.182 1.69.54.408.376.615.93.615 1.648 0 .717-.207 1.268-.616 1.644-.395.358-.963.54-1.689.54zm2.602.473l2.535-3.25c.067-.083.207-.039.207.065v3.779a.182.182 0 01-.039.112l-1.165 1.454a.184.184 0 00-.042.117v1.9l.045 3.604c.003.138-.115.25-.258.25H5.708V17.15c0-.325-.277-.588-.62-.588-.341 0-.618.263-.618.588v3.874H2.464a.257.257 0 01-.263-.25L2.15 15.9c0-.694.226-1.288.658-1.714.47-.465 1.17-.711 2.022-.711h2.807c.271 0 .538-.017.773-.132.143-.067.431-.35.431-.35zm12.997 2.913c0-.697-.226-1.291-.658-1.717-.47-.465-1.17-.712-2.025-.714h-2.804c-.272 0-.54-.02-.773-.132-.14-.067-.429-.35-.429-.35l-2.552-3.269c-.061-.078-.19-.036-.19.062v3.792a.22.22 0 00.048.135l1.16 1.445a.176.176 0 01.041.115v1.907l-.042 3.494a.358.358 0 00.367.352h4.166c.061 0 .106-.044.106-.1V17.15c0-.325.277-.588.619-.588.339 0 .616.263.616.588v3.776c0 .056.048.1.107.1h1.933c.145 0 .26-.112.26-.246l.05-4.874zm-5.773-3.924c-.409-.373-.619-.925-.619-1.645 0-.717.208-1.271.617-1.644.395-.361.96-.543 1.689-.543.725 0 1.294.185 1.686.543.406.373.613.927.613 1.644 0 .718-.207 1.27-.613 1.645-.392.358-.958.54-1.686.54-.726-.002-1.294-.182-1.687-.54zM9.31 7.292L8.15 6.176a.567.567 0 01.006-.832.64.64 0 01.874.003l1.16 1.117a.57.57 0 01-.003.832.64.64 0 01-.434.171.04.04 0 01-.013-.003.04.04 0 00-.013-.002.04.04 0 00-.012.002.04.04 0 01-.013.003.43.43 0 01-.176-.042.59.59 0 01-.216-.131zm4.501.003a.61.61 0 00.21.13.41.41 0 00.174.044.03.03 0 00.013-.003l.012-.003c.005 0 .009.002.013.003a.028.028 0 00.013.003c.16 0 .319-.059.44-.176l1.159-1.118a.57.57 0 00-.006-.832.64.64 0 00-.873.006l-1.16 1.114a.57.57 0 00.005.832z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconTeamFilled;
