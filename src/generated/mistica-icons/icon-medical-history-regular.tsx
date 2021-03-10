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

const IconMedicalHistoryRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.688 20.507c.232 0 .4-.123.423-.17l-.009-15.6c-.02 0-.201-.13-.414-.13H15.04c.002.032.008.057.008.085l.008.193-.002.107C15 6.502 13.51 6.714 11.909 6.714c-1.602 0-3.092-.213-3.149-1.75l-.002-.079.002-.126.009-.1c0-.018.005-.037.005-.054h-2.65c-.215 0-.397.132-.428.185l.011 15.588c.017.003.185.129.418.129h11.563zM11.906 3.179c-1.672 0-1.924.838-1.958 1.569l-.005.14c.01.269.022.653 1.963.653s1.955-.387 1.96-.614V4.81a2.384 2.384 0 00-.097-.628c-.076-.25-.314-1.003-1.863-1.003zm5.782.252c.854 0 1.602.611 1.602 1.306V20.38c0 .709-.734 1.305-1.602 1.305H6.128c-.869 0-1.603-.6-1.603-1.305V4.734c0-.695.748-1.305 1.6-1.305H9.08C9.55 2.515 10.522 2 11.906 2c1.686 0 2.468.709 2.83 1.431h2.952zm-6.477 1.7a.553.553 0 01-.554-.548c0-.303.246-.55.554-.55h1.393a.55.55 0 01.551.55.55.55 0 01-.551.549H11.21zm5.746 8.415a.55.55 0 01.551.55.55.55 0 01-.551.548H15a.55.55 0 01-.52-.367l-.317-.896-.258.868a.552.552 0 01-.53.395h-.585l-.91 2.023a.554.554 0 01-1.048-.118l-.874-4.336-.619 1.989a.554.554 0 01-.53.386H6.857a.553.553 0 01-.555-.549c0-.302.247-.549.555-.549h1.549l1.143-3.67a.544.544 0 01.557-.386.549.549 0 01.513.44l.96 4.77.35-.776a.55.55 0 01.505-.325h.53l.624-2.114a.555.555 0 011.053-.028l.756 2.14c-.002.005 1.56.005 1.56.005z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMedicalHistoryRegular;
