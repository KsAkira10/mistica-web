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

const IconArrowUpDownRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.252 7.088L15.292 2l5.044 5.088-.38.912H17.16v7.332h-3.736V8h-2.796l-.376-.912zm7.724-.448l-2.684-2.708-2.684 2.708h2.176v7.332H15.8V6.64h2.176zm-11.8 2.028h3.736V16h2.796l.376.912L8.044 22 3 16.912 3.38 16h2.796V8.668zm2.376 1.36H7.536v7.332H5.36l2.684 2.708 2.684-2.708H8.552v-7.332z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.431 22H19v-7.036c0-.572-.332-1.108-.867-1.356-.466-.18-1.134-.18-1.466.18l-1 1.072L8.333 7 6.466 9c-.064.072-.133 0-.133-.072v-5.5h5.132c.065 0 .104.108.065.144-.435.5-1.867 2-1.867 2l5.835 6.248 1-1.072-4.83-5.176 1-1.072c.333-.356.333-1.072.168-1.572C12.6 2.356 12.1 2 11.568 2H5v7.036c0 .572.332 1.108.867 1.356.466.18 1.134.18 1.466-.18l1-1.072L15.667 17l1.868-2c.065-.072.133 0 .133.072v5.5h-5.132c-.065 0-.104-.108-.065-.144l1.867-2-5.835-6.252-1 1.072 4.834 5.18-1 1.072c-.333.356-.333 1.072-.168 1.572.232.572.733.928 1.264.928z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.886 12.03H7.569a1.201 1.201 0 01-1.201-1.201l-.003-2.902-1.824-.014a.754.754 0 01-.683-.437.788.788 0 01.1-.832c.012-.014.023-.028.037-.04L8.17 2.398a.75.75 0 011.129 0l4.154 4.208a.793.793 0 01.134.874.758.758 0 01-.68.436l-1.821.015.003 2.899c0 .66-.538 1.201-1.202 1.201zm4.91 9.67a.753.753 0 001.034-.092l4.176-4.21a.788.788 0 00.137-.871.754.754 0 00-.683-.438l-1.826-.014-.003-2.905c0-.663-.538-1.201-1.202-1.201H14.11c-.664 0-1.202.538-1.202 1.201l.003 2.897-1.823.017a.758.758 0 00-.681.436.794.794 0 00.134.875l4.157 4.212a.76.76 0 00.098.093zm.468-1.115L11.925 17.2l1.353-.011h.011a.768.768 0 00.745-.779l-.005-3.24c0-.045.036-.082.081-.082h2.32c.044 0 .08.037.08.081l.003 3.241a.769.769 0 00.748.779h.011l1.35.011-3.358 3.384zm-7.776-9.76c0 .046.037.082.081.082h2.317a.081.081 0 00.081-.081l-.003-3.238a.768.768 0 01.745-.779h.012l1.35-.011-3.336-3.381-3.353 3.38 1.347.012h.011c.42.011.75.361.745.779l.003 3.238z"
                />
            </svg>
        );
    }
};

export default IconArrowUpDownRegular;
