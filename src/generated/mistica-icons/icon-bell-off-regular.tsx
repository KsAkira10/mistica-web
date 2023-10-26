/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBellOffRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m19.178 18.943 1.694 1.863a.027.027 0 0 0 .006.007l.006.007a.59.59 0 0 1-.065.834.622.622 0 0 1-.868-.05l-2.42-2.661h-2.423c-.037.546-.193 1.356-.77 1.989-.552.602-1.337.907-2.337.907-1.002 0-1.79-.302-2.339-.907-.577-.636-.73-1.446-.764-1.99h-5.3a.615.615 0 0 1-.58-.4.595.595 0 0 1 .19-.67c2.043-1.63 1.858-5.055 1.855-5.089V8.95c0-1.177.196-2.21.571-3.101L3.186 3.153a.028.028 0 0 1-.009-.008l-.005-.006a.59.59 0 0 1 .065-.835.624.624 0 0 1 .868.05l2.157 2.373c.218-.31.473-.6.753-.857 1.933-1.762 4.603-1.7 4.99-1.678.383-.025 3.052-.084 4.985 1.678 1.297 1.18 1.955 2.888 1.955 5.079v3.8c-.007.167-.157 3.517 1.855 5.124.201.16.277.428.19.67-.087.24-.32.4-.58.4h-1.232ZM7.848 4.758a4.18 4.18 0 0 0-.74.902l10.98 12.078h.936c-1.474-2.09-1.317-4.89-1.306-5.03l-.002-3.76c0-1.837-.524-3.246-1.555-4.19-1.605-1.466-3.967-1.367-4.108-1.362h-.007a.421.421 0 0 1-.084 0h-.006c-.142-.005-2.503-.104-4.109 1.362Zm-1.555 7.989c.008.106.165 2.902-1.306 4.991h11.449L6.57 6.878a7.287 7.287 0 0 0-.277 2.07v3.799Zm5.706 7.888c.638 0 1.1-.166 1.411-.502.328-.352.429-.834.46-1.19h-3.74c.028.35.13.837.454 1.19.311.34.773.502 1.415.502Z"
            />
        </svg>
    );
};

export default IconBellOffRegular;
