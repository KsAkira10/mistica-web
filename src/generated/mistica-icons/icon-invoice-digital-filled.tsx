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

const IconInvoiceDigitalFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.098 17.62a.561.561 0 010 1.12H2.594a.562.562 0 01-.56-.56c0-.307.252-.56.56-.56h18.504zM18.401 4.508c1.1 0 1.94.328 2.504.972.52.6.787 1.468.787 2.583v4.941c0 1.115-.263 1.983-.787 2.583-.563.641-1.406.969-2.504.969H5.29c-1.1 0-1.94-.328-2.504-.972-.52-.6-.787-1.468-.787-2.583V8.063c0-1.115.266-1.983.787-2.583.563-.644 1.406-.972 2.504-.972zm-5.986 2.045H9.613c-.386 0-.647.258-.647.644v6.648c0 .389.26.65.647.65h4.474a.612.612 0 00.638-.64V8.87a.426.426 0 00-.123-.3l-1.89-1.894a.42.42 0 00-.297-.123zm-.376.843v.675c0 .723.387 1.171 1.006 1.171h.84v4.415H9.807v-6.26h2.232zm1.135 4.751h-2.65a.28.28 0 00-.28.28c0 .154.126.28.28.28h2.647a.283.283 0 00.283-.28.28.28 0 00-.28-.28zm0-1.134h-2.65a.28.28 0 00-.28.28c0 .154.126.28.28.28h2.647a.283.283 0 00.283-.28.28.28 0 00-.28-.28zm0-1.135h-2.65a.28.28 0 00-.28.28c0 .154.126.28.28.28h2.647a.28.28 0 00.28-.28.279.279 0 00-.277-.28zm-.575-2.12l.925.924h-.48c-.293 0-.445-.207-.445-.61v-.314z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconInvoiceDigitalFilled;
