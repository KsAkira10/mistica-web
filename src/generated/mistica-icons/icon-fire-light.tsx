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

const IconFireLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.574 18.98a7.111 7.111 0 01-2.569 1.49c.1-.11.196-.222.286-.342 1.6-2.174.288-5.51-1.356-6.947-.74-.644-1.619-1.118-2.476-1.336a.411.411 0 10-.485.554c.009.02.768 1.922-.94 3.252a4.56 4.56 0 00-.67.625 3.156 3.156 0 00-.286 3.793 7.043 7.043 0 01-2.462-1.953c-3.07-3.888-.367-10.165 2.846-12.778 1.291-1.054 2.79-1.863 4.285-2.328-.389 1.513-.767 4.966 2.79 7.54.48.34.92.718 1.306 1.13.966 1.022 1.47 2.341 1.42 3.71-.053 1.368-.653 2.642-1.69 3.59m-6.123 1.792c-.005 0-.72-.123-1.358-.745a2.335 2.335 0 01-.107-3.21c.166-.185.348-.359.552-.513 1.34-1.042 1.544-2.437 1.406-3.426a5.741 5.741 0 011.451.922c1.376 1.199 2.538 4.07 1.236 5.84a3.046 3.046 0 01-2.227 1.205c-.087-.003-.174.005-.26.002-.029 0-.057 0-.085-.002-.201-.012-.4-.048-.6-.073h-.008m6.99-9.656a9.768 9.768 0 00-1.424-1.232c-4.109-2.978-2.347-7.129-2.271-7.305a.411.411 0 00-.06-.429.395.395 0 00-.408-.137c-1.846.437-3.743 1.39-5.336 2.686-5.272 4.288-5.28 11-2.97 13.927 1.353 1.712 3.449 2.784 5.656 3.014.185.028.367.045.552.045l.339.003c.613 0 1.232-.067 1.837-.205.081-.01 2.011-.291 3.77-1.896 1.202-1.098 1.897-2.577 1.956-4.163.061-1.593-.524-3.123-1.642-4.308"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFireLight;
