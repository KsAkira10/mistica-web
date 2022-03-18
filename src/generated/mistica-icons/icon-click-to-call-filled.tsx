/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconClickToCallFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.686 17.74c-.017-.85-.431-1.687-1.235-2.49a5.011 5.011 0 00-1-.788c-.695-.431-1.415-.588-2.134-.465-.72.123-1.426.524-2.098 1.196a5.724 5.724 0 00-.443.496c-.118.067-.49.028-1.252-.496-.88-.605-1.922-1.613-2.628-2.32l-.084-.083c-.706-.706-1.714-1.748-2.319-2.628-.521-.761-.56-1.134-.496-1.252a4.95 4.95 0 00.496-.442c.672-.672 1.076-1.378 1.196-2.098.12-.72-.03-1.434-.462-2.13a4.86 4.86 0 00-.787-1c-.804-.803-1.642-1.22-2.49-1.234H5.9c-.864 0-1.732.411-2.586 1.227-.306.29-.6.697-.695.831l-.011.017-.017.025c-.795 1.155-.776 2.942.059 5.031.871 2.185 2.569 4.577 4.907 6.916l.006.006.073.073.005.005c2.34 2.34 4.732 4.037 6.916 4.908 1.07.425 2.062.641 2.928.641.826 0 1.54-.193 2.103-.582a.157.157 0 00.025-.02l.017-.011c.135-.096.54-.39.832-.695.826-.871 1.241-1.759 1.224-2.639zm-9.084-5.944a.757.757 0 01-.748-.93l.97-4.535a.709.709 0 01.498-.558c.252-.07.518.02.712.233l.67.74 3.03-2.606a.886.886 0 01.694-.244.924.924 0 01.662.367l1.134 1.264c.18.201.263.467.23.734a.909.909 0 01-.367.624L17.07 9.541l.661.733c.196.216.252.49.154.737s-.33.406-.619.429l-4.6.356h-.064z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconClickToCallFilled;
