/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconBusFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.585 4.526c.44.014 2.537.175 4.174 1.817 1.297 1.303 1.955 3.174 1.947 5.563v3.381c0 .58-.252 1.168-.692 1.61-.44.446-1.025.701-1.6.701h-.224c-.453 1.064-1.445 1.692-2.82 1.692-1.376 0-2.367-.628-2.821-1.692H9.686c-.454 1.064-1.445 1.692-2.82 1.692-1.39 0-2.393-.639-2.838-1.728A2.336 2.336 0 012.72 16.9c-.443-.443-.695-1.031-.695-1.611V6.836c0-.582.252-1.17.695-1.613.44-.443 1.025-.698 1.6-.698zm.79 9.725c-1.26 0-1.899.644-1.899 1.913 0 1.269.639 1.913 1.9 1.913 1.26 0 1.899-.644 1.899-1.913 0-1.269-.64-1.913-1.9-1.913zm-9.507 0c-1.26 0-1.899.644-1.899 1.913 0 1.269.639 1.913 1.9 1.913 1.26 0 1.899-.644 1.899-1.913 0-1.269-.64-1.913-1.9-1.913zm8.674-8.515h-1.091v4.428h.465c.016-.001.072-.003.16-.004h.158c.906.012 3.516.204 5.276 1.892v-.146c0-5.87-4.47-6.157-4.968-6.17zm-2.293 0H8.86v4.428h4.39V5.735zm-5.59 0H4.321c-.258 0-.532.125-.748.344-.213.216-.342.496-.342.753v3.33h4.426V5.736z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBusFilled;
