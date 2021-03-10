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

const IconCarWithClockLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.684 18.94c.207-.302.644-1.201-.174-2.75-1.11-2.118-3.221-2.272-3.314-2.277a.429.429 0 01-.341-.219c-.076-.143-2.003-3.532-6.734-3.532-2.362 0-3.972 1.134-4.916 2.084-1.451 1.473-2.202 3.39-2.196 4.515-.05 1 .025 1.765.084 2.177H4.67c.157-1.294 1.05-2.084 2.437-2.084 1.378 0 2.277.79 2.437 2.084h3.854c.16-1.286 1.05-2.076 2.429-2.076 1.386 0 2.277.793 2.437 2.076 0 .003 2.42.003 2.42.003zm-4.857 2.062c1.075 0 1.635-.571 1.635-1.65 0-1.075-.557-1.647-1.635-1.647-1.07 0-1.628.572-1.628 1.65 0 1.076.56 1.647 1.628 1.647zm-8.72-.008c1.067 0 1.636-.572 1.636-1.65 0-1.079-.566-1.647-1.636-1.647-1.068 0-1.636.571-1.636 1.647s.568 1.65 1.636 1.65zm7.778-17.997c-4.056 0-6.117 2.07-6.117 6.165 0 .1.008.193.008.286a7.722 7.722 0 011.345-.126c4.63 0 6.843 2.974 7.35 3.775.37.05 1.137.236 1.938.723 1.059-1.017 1.602-2.588 1.602-4.658-.002-4.095-2.064-6.165-6.126-6.165zm5.208 11.327c.467.42.86.92 1.16 1.47 1.307 2.5-.026 3.819-.085 3.87a.399.399 0 01-.283.117h-2.621c-.16 1.28-1.062 2.062-2.437 2.062-1.37 0-2.27-.782-2.429-2.062H9.544c-.168 1.286-1.042 2.053-2.437 2.053-1.395 0-2.278-.765-2.437-2.053H2.734a.41.41 0 01-.4-.328c-.017-.042-.241-1.1-.16-2.706-.008-1.238.753-3.38 2.437-5.087.737-.739 1.846-1.58 3.339-2.016a8.551 8.551 0 01-.017-.48c0-4.585 2.403-7.008 6.952-7.008 4.547 0 6.958 2.423 6.958 7.006 0 2.244-.599 3.977-1.75 5.162zm-3.208-4.297a.417.417 0 01-.3.126.433.433 0 01-.293-.126l-1.76-1.773a.413.413 0 01-.126-.302V5.546c0-.236.185-.42.418-.42.235 0 .417.184.417.42v2.238l1.644 1.65c.16.165.16.425 0 .593z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCarWithClockLight;
