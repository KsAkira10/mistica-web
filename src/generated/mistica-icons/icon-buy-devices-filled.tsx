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

const IconBuyDevicesFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M5.509 5.388C5.6 3.504 7.094 2 8.92 2h6.158c1.827 0 3.32 1.504 3.412 3.388H5.51Zm0 13.224C5.6 20.496 7.094 22 8.92 22h6.158c1.827 0 3.32-1.504 3.412-3.388H5.51Zm4.095-3.576c-.11 0-.228-.091-.236-.123l-.82-3.453h6.903l-.814 3.439c-.013.046-.132.137-.241.137H9.604ZM18.5 6.458v11.084h-13V6.458h13Zm-3.706 3.932-.972-1.865a.502.502 0 0 0-.696-.215.547.547 0 0 0-.206.727l.705 1.349h-3.25l.705-1.349a.547.547 0 0 0-.206-.727.502.502 0 0 0-.696.215l-.972 1.865H7.239l1.134 4.792c.14.526.666.924 1.231.924h4.792c.56 0 1.09-.398 1.235-.937l1.13-4.779h-1.966Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.6 10.9c0-.403.229-.59.587-.59.359 0 .591.187.589.59 0 .197-.054.34-.149.438-.103.106-.255.157-.44.157-.184 0-.336-.05-.44-.157-.095-.098-.148-.244-.148-.437Z"
                />
                <path
                    fill={fillColor}
                    d="M21.269 6.783a.557.557 0 0 1 .543.7c-.154.611-.448 1.785-.756 3.028a687.207 687.207 0 0 1-.883 3.53c-.266 1.022-.652 1.778-1.182 2.308-.56.557-1.263.84-2.092.84h-6.255c-.838 0-1.583-.28-2.148-.815-.594-.56-.975-1.364-1.138-2.39-.14-.89-1.484-8.68-1.636-9.526-.12-.67-.82-1.176-1.633-1.176H2.736a.562.562 0 0 1-.56-.56c0-.309.252-.56.56-.56h1.35c1.37 0 2.519.882 2.737 2.1.05.272.224 1.266.44 2.521h3.227V3.999c0-1.205.63-1.843 1.823-1.843h3.748c1.21 0 1.824.619 1.824 1.843v2.784h3.384ZM11.33 3.999v7.38c0 .76.241 1.004.983 1.004h3.751c.745 0 .983-.244.983-1.003V3.999c0-.76-.24-1.003-.983-1.003h-3.75c-.726 0-.984.26-.984 1.003ZM10.636 18.528c-.502 0-.902.143-1.194.423-.305.294-.459.706-.459 1.23s.154.935.46 1.23c.29.28.694.422 1.193.422.498 0 .902-.142 1.193-.423.305-.294.46-.705.46-1.23 0-.523-.155-.935-.46-1.229-.291-.28-.692-.423-1.193-.423ZM16.098 18.528c-.502 0-.902.143-1.193.423-.306.294-.46.706-.46 1.23s.154.935.46 1.23c.29.28.694.422 1.193.422.498 0 .902-.142 1.193-.423.303-.294.46-.705.46-1.23 0-.523-.155-.935-.46-1.229-.291-.28-.692-.423-1.193-.423Z"
                />
            </svg>
        );
    }
};

export default IconBuyDevicesFilled;
