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

const IconRewindRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.999 2.15c3.129 0 5.563.818 7.238 2.429 1.737 1.675 2.616 4.17 2.616 7.425 0 3.252-.88 5.751-2.616 7.423-1.675 1.61-4.11 2.426-7.238 2.426-3.13 0-5.563-.818-7.236-2.429-1.733-1.672-2.613-4.168-2.613-7.422 0-3.253.88-5.751 2.613-7.426C6.436 2.968 8.87 2.15 12 2.15zm0 1.09c-5.813 0-8.76 2.95-8.76 8.764 0 5.813 2.947 8.76 8.76 8.76 5.815 0 8.764-2.947 8.764-8.76C20.761 6.19 17.813 3.24 12 3.24zm-.712 4.983a.558.558 0 01.286.487l-.002 2.636a.554.554 0 01.134-.112l4.988-2.997a.562.562 0 01.85.479v5.966c0 .202-.11.387-.284.488a.578.578 0 01-.277.072.55.55 0 01-.286-.078l-4.989-2.97a.57.57 0 01-.135-.113l.001 2.596c0 .201-.11.386-.283.487a.548.548 0 01-.277.073.55.55 0 01-.286-.079L5.738 12.19a.562.562 0 01-.274-.479c0-.196.103-.38.271-.482l4.99-2.997a.562.562 0 01.562-.008zm5.135 1.482l-3.34 2.005 3.34 1.986V9.705zm-5.97-.003l-3.336 2.003 3.337 1.988V9.702z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconRewindRegular;
