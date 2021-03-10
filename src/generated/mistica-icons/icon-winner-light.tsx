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

const IconWinnerLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.608 18.4l2.227.807-2.72-5.664c-.983.947-2.366 1.468-4.092 1.588l2.756 5.896.776-2.15a.83.83 0 011.053-.477zm-9.36 2.675l2.725-5.992c-1.703-.196-3.042-.812-3.953-1.882l-2.81 6.02 2.155-.818a.83.83 0 011.05.473l.832 2.199zm3.98-18.092c-3.874 0-5.76 1.857-5.76 5.675 0 3.818 1.883 5.675 5.76 5.675 3.88 0 5.761-1.855 5.761-5.673 0-3.82-1.885-5.677-5.761-5.677zm8.296 15.89a.79.79 0 01-.109.846.815.815 0 01-.815.28l-2.283-.823-.81 2.188c-.165.313-.44.476-.744.476h-.023a.815.815 0 01-.723-.468l-2.907-6.219c-.084 0-.165-.005-.247-.008l-2.91 6.227a.823.823 0 01-.723.47h-.022a.811.811 0 01-.723-.428l-.854-2.247-2.205.818c-.355.082-.67-.022-.868-.263a.802.802 0 01-.11-.846l3.026-6.47c-.549-.978-.843-2.216-.843-3.743 0-4.434 2.428-6.507 6.597-6.507 4.168 0 6.599 2.076 6.599 6.504 0 1.768-.395 3.155-1.123 4.185l2.82 6.028zM9.87 8.083a.208.208 0 00.05.222l.858.857a.46.46 0 01.12.39l-.202 1.2a.206.206 0 00.084.211c.056.04.126.045.188.011l1.056-.571a.44.44 0 01.429.008l1.044.563a.176.176 0 00.188-.011.201.201 0 00.081-.207l-.201-1.21a.453.453 0 01.126-.384l.854-.854a.21.21 0 00.05-.222.191.191 0 00-.15-.131l-1.186-.177a.447.447 0 01-.333-.255l-.524-1.087a.19.19 0 00-.252-.084.203.203 0 00-.084.084l-.53 1.101a.452.452 0 01-.321.241l-1.191.18a.17.17 0 00-.154.125zm.168 1.519l-.717-.717a1.032 1.032 0 01.574-1.75l.972-.147.437-.913a1.024 1.024 0 011.849 0l.44.913.972.146c.38.056.697.32.82.689.126.375.034.781-.246 1.062l-.717.72.17 1.016a1.02 1.02 0 01-.425 1.017 1.03 1.03 0 01-1.07.062l-.868-.468-.86.468a1.028 1.028 0 01-1.499-1.079c-.003-.003.168-1.02.168-1.02z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconWinnerLight;
