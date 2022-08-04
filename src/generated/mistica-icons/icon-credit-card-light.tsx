/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCreditCardLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M3.789 5h16.406c.989 0 1.789.843 1.805 1.888v9.856c0 1.045-.8 1.888-1.789 1.888a.363.363 0 01-.356-.367c0-.203.16-.368.356-.368.593 0 1.069-.517 1.069-1.153V9.785H2.72v6.963c0 .636.476 1.153 1.069 1.153h12.137c.196 0 .356.165.356.368 0 .202-.16.367-.356.367H3.789C2.8 18.636 2 17.793 2 16.748v-9.86C2 5.843 2.8 5 3.789 5zM2.712 6.884V9.05h18.552V6.884c0-.636-.476-1.153-1.069-1.153H3.781c-.593 0-1.069.517-1.069 1.153z"
                    fill={fillColor}
                />
                <path
                    d="M18.77 18.265a.724.724 0 01-.712.735.724.724 0 01-.712-.735c0-.407.319-.736.712-.736.394 0 .713.33.713.736zM4.145 12.868c0-.276.16-.5.356-.5h4.998c.196 0 .356.224.356.5 0 .275-.16.5-.356.5H4.501c-.196 0-.356-.225-.356-.5zm7.135 0c0-.276.16-.5.356-.5h2.5c.197 0 .357.224.357.5 0 .275-.16.5-.356.5h-2.501c-.196 0-.356-.225-.356-.5zm8.203-.5H16.27c-.196 0-.356.224-.356.5 0 .275.16.5.356.5h3.213c.196 0 .356-.225.356-.5 0-.276-.152-.5-.356-.5z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.648 12.791V8.982a.315.315 0 00-.003-.088v-2.51a1.21 1.21 0 00-.368-.865 1.243 1.243 0 00-.876-.354H3.59a1.233 1.233 0 00-1.239 1.22v11.234c.008.676.555 1.22 1.23 1.22h16.821c.332 0 .648-.13.884-.36.234-.233.366-.55.363-.876v-4.724a.461.461 0 000-.088zm-18.493-.39V9.39h17.691v3.01H3.155zm.434-6.429h16.815c.233 0 .425.19.425.423v2.2H3.152v-2.2a.427.427 0 01.437-.423zm17.128 11.944a.43.43 0 01-.313.118H3.59a.427.427 0 01-.436-.423v-4.413h17.691v4.413a.424.424 0 01-.13.305z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconCreditCardLight;
