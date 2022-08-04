/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconIntranetFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M6.533 10.2a21.06 21.06 0 00-.072 1.258H2C2.26 6.576 5.98 2.6 10.726 2c-1.433.6-2.649 2.21-3.405 4.414a1.985 1.985 0 00-.788 3.786zM13.274 22c2.38-1.004 4.137-4.773 4.257-9.462H22c-.26 4.874-3.98 8.85-8.726 9.462zM6.46 12.538H2c.26 4.882 3.973 8.85 8.726 9.458C8.337 21 6.589 17.235 6.46 12.538zm6.07-1.088V2.879c2.097.548 3.797 4.209 3.925 8.57H12.53z"
                    fill={fillColor}
                />
                <path
                    d="M17.531 11.458h4.461c-.26-4.882-3.973-8.85-8.726-9.458 2.389 1.004 4.137 4.761 4.265 9.458zm-6.069 1.08v8.58c-2.097-.55-3.797-4.21-3.925-8.58h3.925zm1.068 0h3.925c-.128 4.37-1.828 8.03-3.925 8.571v-8.57zm-4.993-1.08c.008-.375.032-.742.064-1.1a1.98 1.98 0 00.768-3.653c.72-2.056 1.837-3.5 3.093-3.826v8.579H7.537z"
                    fill={fillColor}
                />
                <path
                    d="M7.35 9.293a.896.896 0 00.891-.9c0-.496-.4-.898-.892-.898a.896.896 0 00-.892.899c0 .496.4.899.892.899z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M7.782 7.376c.894-2.74 2.538-4.778 4.395-5.221v5.221H7.782zm-1.767 8.482H2.69c-.35-1.132-.535-2.412-.535-3.857 0-1.188.123-2.266.358-3.235h3.353a16.768 16.768 0 00.148 7.092zm2.005 1.39h4.157v4.593c-1.706-.412-3.23-2.173-4.157-4.594zm.91 4.243c-1.058-1.053-1.924-2.52-2.52-4.244H3.222c1.087 2.171 2.994 3.586 5.709 4.244zm9.295-2.162c0 .566.515 1.025 1.157 1.025.63 0 1.145-.457 1.145-1.025 0-.56-.515-1.02-1.145-1.017-.639 0-1.157.456-1.157 1.017zM19.382 4.18c-.639 0-1.157.457-1.157 1.023 0 .56.515 1.016 1.157 1.016.63 0 1.145-.456 1.145-1.016 0-.566-.515-1.023-1.145-1.023zm-1.157 8.11c0 .565.515 1.022 1.157 1.022.63 0 1.145-.457 1.145-1.022 0-.558-.515-1.017-1.145-1.017-.639 0-1.157.459-1.157 1.017zm-6.048.582v1.008h3.149c.358 0 .647.255.655.575l.045 4.291h.98c.3-.924 1.236-1.6 2.373-1.6 1.356 0 2.46.978 2.46 2.183 0 1.201-1.104 2.187-2.46 2.187-1.137 0-2.076-.683-2.373-1.605H15.38c-.359 0-.656-.257-.656-.574l-.044-4.291h-2.505v.815h-4.61a15.368 15.368 0 01-.499-3.88c0-1.117.12-2.196.35-3.213h4.762v.723h2.504l.045-4.291c0-.32.297-.577.656-.577h1.627c.3-.922 1.235-1.605 2.373-1.605 1.355 0 2.459.977 2.459 2.187 0 1.205-1.104 2.183-2.46 2.183-1.137 0-2.075-.684-2.372-1.6h-.98l-.045 4.286c-.008.325-.297.582-.656.582h-3.15v1.05h4.831c.297-.915 1.233-1.599 2.373-1.599 1.355 0 2.459.978 2.459 2.183 0 1.21-1.104 2.187-2.46 2.187-1.137 0-2.075-.683-2.372-1.605h-4.832zM2.95 7.376h3.258c.577-1.991 1.532-3.686 2.714-4.87-2.958.72-4.955 2.35-5.972 4.87z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconIntranetFilled;
