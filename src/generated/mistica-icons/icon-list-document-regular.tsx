/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconListDocumentRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M7.424 7.527l2.178 2.19 4.022-4.043a.744.744 0 000-1.048.734.734 0 00-1.042 0l-2.98 2.996L8.466 6.48a.734.734 0 00-1.042 0 .744.744 0 000 1.047zm2.178 7.301l-2.178-2.19a.744.744 0 010-1.048.734.734 0 011.042 0l1.136 1.142 2.98-2.996a.734.734 0 011.042 0 .744.744 0 010 1.048l-4.022 4.044zm-2.178 3.067l2.178 2.19 4.022-4.044a.744.744 0 000-1.047.734.734 0 00-1.042 0l-2.98 2.996-1.136-1.143a.734.734 0 00-1.042 0 .744.744 0 000 1.048z"
                    fill={fillColor}
                />
                <path
                    d="M5 22V4.223C5 3.02 6.014 2 7.212 2h9.576C17.986 2 19 3.02 19 4.223V22H5zm1.471-1.479h11.053V4.223c0-.374-.363-.74-.736-.74H7.207c-.373 0-.736.366-.736.74v16.298z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M19.385 3.746c0-.832-.664-1.591-1.392-1.591H6.013c-.729 0-1.393.76-1.393 1.591V20.25c0 .863.636 1.591 1.392 1.591h11.98c.754 0 1.393-.728 1.393-1.59V3.745zm-1.21 16.504c0 .219-.137.373-.182.387H6.018c-.059-.023-.19-.182-.19-.387V3.746c0-.193.145-.367.184-.387l11.956-.002c.061.022.207.196.207.389V20.25zM7.413 7.953a.805.805 0 001.608 0 .802.802 0 00-.804-.8.802.802 0 00-.804.8zm1.613 4.081a.802.802 0 00-.804-.8.802.802 0 100 1.602.802.802 0 00.804-.802zm1.922-3.428a.604.604 0 01-.605-.602c0-.334.271-.603.605-.603h5.563a.604.604 0 110 1.204h-5.563zm6.25 3.428a.604.604 0 00-.606-.602H11.03a.604.604 0 00-.605.602c0 .334.272.603.605.603h5.563a.604.604 0 00.605-.603zm-8.976 3.21a.802.802 0 110 1.603.802.802 0 110-1.602zm8.975.802a.604.604 0 00-.605-.602H11.03a.604.604 0 00-.605.602c0 .333.272.602.605.602h5.563a.604.604 0 00.605-.602z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconListDocumentRegular;
