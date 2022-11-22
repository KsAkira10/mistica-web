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

const IconShoppingCartFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M18.043 17.353H8.537l-.632-2.5h11.406L22 4.14H5.209l-.136-.532A2.116 2.116 0 003.028 2h-.324A.707.707 0 002 2.71a.71.71 0 00.704.715h.324c.32 0 .604.219.684.54L7.11 17.458a2.312 2.312 0 00-1.636 2.22A2.32 2.32 0 007.785 22a2.315 2.315 0 002.133-3.214h5.985A2.32 2.32 0 0018.035 22a2.315 2.315 0 002.313-2.321 2.306 2.306 0 00-2.305-2.326z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.717 7.009a.557.557 0 00-.443-.216H7.221c-.23-1.288-.4-2.501-.403-2.53-.219-1.218-1.367-2.1-2.737-2.1H2.725a.562.562 0 00-.56.56c0 .308.252.56.56.56h1.356c.812 0 1.513.507 1.633 1.177.23 1.285 1.507 8.708 1.636 9.535.162 1.025.543 1.829 1.137 2.39.566.534 1.311.814 2.149.814h6.008c.83 0 1.532-.283 2.092-.84.53-.53.886-1.294 1.183-2.308.131-.451 1.728-5.941 1.901-6.558a.547.547 0 00-.103-.484zM10.636 21.843c-.502 0-.902-.142-1.194-.422-.305-.295-.46-.706-.46-1.23s.155-.936.46-1.23c.292-.28.695-.423 1.194-.423.498 0 .902.143 1.193.423.305.294.46.706.46 1.23s-.155.935-.46 1.23c-.292.28-.692.422-1.193.422zm4.269-.422c.29.28.691.422 1.193.422.501 0 .902-.142 1.193-.422.305-.295.46-.706.46-1.23s-.158-.936-.46-1.23c-.291-.28-.695-.423-1.193-.423-.499 0-.902.143-1.193.423-.306.294-.46.706-.46 1.23s.154.935.46 1.23z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconShoppingCartFilled;
