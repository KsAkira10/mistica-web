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

const IconElectrocardiogramLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.523 13.988c-1.039 1.6-1.865 2.628-3.272 4.07l-.008.006-.025.03c-.269.275-.661.645-.95.852a2.397 2.397 0 01-.89.395 1.1 1.1 0 01-.227.03h-.023l-.092.004-.065-.003h-.014a1.496 1.496 0 01-.246-.036 2.34 2.34 0 01-.871-.395c-.378-.27-.86-.754-.953-.852-1.428-1.462-2.263-2.499-3.308-4.106a24.06 24.06 0 01-.79-1.317h.81a.415.415 0 00.398-.291L8.54 7.436l1.762 8.74c.04.193.21.333.409.333a.42.42 0 00.4-.294l1.065-3.462h1.202c.184 0 .347-.12.4-.297l.824-2.782.991 2.802a.417.417 0 00.392.277h2.28c-.238.412-.476.823-.742 1.235M3.933 8.114c-.443-1.846-.113-3.353.935-4.243.613-.521 1.46-.835 2.386-.883a7.57 7.57 0 01.252-.005c.93 0 1.9.263 2.799.756.375.207.759.426 1.196.683a1.132 1.132 0 001.115-.005 38.6 38.6 0 011.182-.675c.899-.493 1.865-.757 2.798-.757.084 0 .168.003.252.006.924.048 1.773.361 2.384.882 1.045.888 1.378 2.395.935 4.244-.3 1.24-.8 2.521-1.465 3.815H16.28l-1.322-3.737a.399.399 0 00-.403-.277.417.417 0 00-.39.297l-1.1 3.717h-1.2a.42.42 0 00-.4.294l-.672 2.185-1.759-8.725a.415.415 0 00-.39-.33c-.179-.032-.36.108-.417.29l-1.935 6.202h-.936c-.642-1.268-1.13-2.518-1.424-3.734m17.496 3.815H19.63c.6-1.227 1.061-2.44 1.347-3.621.518-2.163.092-3.961-1.202-5.062-.75-.639-1.776-1.023-2.885-1.079a5.253 5.253 0 00-.297-.008c-1.075 0-2.176.294-3.201.86-.407.224-.807.454-1.205.69a.304.304 0 01-.277 0 28.923 28.923 0 00-1.202-.693c-1.028-.563-2.129-.86-3.204-.86-.098 0-.196.003-.295.009-1.106.056-2.131.437-2.885 1.078-1.294 1.1-1.722 2.9-1.204 5.062.28 1.157.725 2.341 1.302 3.538H2.574a.418.418 0 00-.418.414c0 .23.188.415.418.415h2.263c.314.585.653 1.173 1.036 1.764 1.076 1.659 1.939 2.729 3.41 4.233.142.146.64.644 1.064.947.364.26.776.442 1.185.529.117.028.243.045.372.053h.009l.008.003.11.003h.033c.042 0 .078 0 .112-.003l.008-.003h.009c.129-.008.255-.025.372-.053a3.14 3.14 0 001.185-.53c.423-.302.922-.8 1.065-.946l.033-.037c1.451-1.487 2.305-2.551 3.375-4.196.365-.563.692-1.123.995-1.68h2.21c.23 0 .417-.185.417-.415a.412.412 0 00-.417-.412"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconElectrocardiogramLight;
