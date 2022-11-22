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

const IconMedicalHistoryFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M15.635 4.862h-.289v-.005h-6.98V2h7.269v2.862zm2.182-1.788h-1.089v2.857H7.272V3.074h-1.09C4.983 3.074 4 4.04 4 5.218v6.071h1.857l1.638-2.784a.562.562 0 01.475-.283c.186 0 .363.105.474.283l2.509 4.252 1.89-3.25a.562.562 0 01.474-.284c.181 0 .363.105.475.283l.982 1.395h1.42c.288 0 .544.251.544.534 0 .284-.256.572-.545.572h-1.745a.574.574 0 01-.475-.284l-.665-.864-1.89 3.25a.562.562 0 01-.474.284.568.568 0 01-.475-.283L7.96 9.858l-1.307 2.25a.574.574 0 01-.475.25H4V22h16V5.218c0-1.18-.982-2.144-2.183-2.144zm-2 14.643H8.183a.556.556 0 01-.545-.535c0-.284.256-.535.545-.535h7.632c.289 0 .545.251.545.535a.553.553 0 01-.545.535z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M19.38 4.892c0-.695-.748-1.306-1.602-1.306h-2.953c-.361-.722-1.143-1.431-2.829-1.431-1.384 0-2.356.515-2.826 1.429H6.215c-.852 0-1.6.61-1.6 1.305v15.647c0 .706.734 1.305 1.602 1.305h11.56c.869 0 1.603-.596 1.603-1.305V4.892zm-7.384-1.56c1.55 0 1.787.753 1.866 1.002.059.205.092.418.095.63v.362c-.006.227-.02.613-1.96.613-1.937 0-1.953-.384-1.964-.65v-.002l.005-.387c.034-.731.286-1.569 1.958-1.569zm5.05 10.366a.555.555 0 01.55.555.55.55 0 01-.552.55h-1.955a.554.554 0 01-.521-.368l-.317-.896-.258.868a.552.552 0 01-.529.395h-.585l-.91 2.023a.554.554 0 01-1.048-.118l-.874-4.336-.62 1.989a.557.557 0 01-.529.386H6.943a.551.551 0 01-.555-.549c0-.302.25-.549.555-.549h1.549l1.143-3.672a.537.537 0 01.557-.387.552.552 0 01.516.44l.958 4.773.35-.776a.55.55 0 01.504-.325h.53l.624-2.115a.555.555 0 011.053-.028l.757 2.14h1.563zm-6.3-8.958c.004.306.25.55.556.55h1.392a.55.55 0 00.551-.55.55.55 0 00-.551-.549H11.3a.551.551 0 00-.554.55z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconMedicalHistoryFilled;
