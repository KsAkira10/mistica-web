/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconNoHiddenBillsLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M18.782 4.145v14.139l1.326 1.325a.35.35 0 010 .503.357.357 0 01-.252.105.356.356 0 01-.25-.105l-.82-.818v2.354H5.218V8.076a.357.357 0 01.713 0V20.93h12.14v-2.354L2.104 2.61a.355.355 0 010-.503.35.35 0 01.502 0l2.606 2.606v-.21c0-.992.781-2.144 1.787-2.144h9.995a1.79 1.79 0 011.787 1.787zM5.93 4.502v.923l12.14 12.141V4.145c0-.59-.48-1.07-1.07-1.07H7c-.549 0-1.07.805-1.07 1.427zM22 21.287a.714.714 0 01-1.426 0 .714.714 0 011.426 0zM15.574 6.11h-1.646a2.022 2.022 0 011.646-.91c.315 0 .621.078.905.224a.356.356 0 00.329-.63 2.683 2.683 0 00-3.693 1.307h-.759a.357.357 0 000 .713h.562a2.34 2.34 0 000 .713h-.562a.357.357 0 000 .713h.759a2.683 2.683 0 003.693 1.307.356.356 0 00-.33-.63 1.9 1.9 0 01-.904.223c-.69 0-1.294-.356-1.646-.891h1.646a.357.357 0 000-.713h-1.929a2.246 2.246 0 01-.032-.357c0-.123.01-.242.032-.356h1.929a.357.357 0 000-.713z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconNoHiddenBillsLight;
