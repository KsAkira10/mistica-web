/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconUmbrellaFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M11.436 3.334a.07.07 0 01.003.017h1.227l.003-.012c.002-.008.004-.015.002-.024v-.55a.616.616 0 00-.619-.61.616.616 0 00-.619.61v.553a.07.07 0 00.003.016zm10.38 7.516c.074.417-.041.86-.316 1.204a1.58 1.58 0 01-1.198.558l-1.527-.003a.606.606 0 00.014-.19c-.804-6.382-4.706-8.583-6.104-9.068 2.913.126 5.196 1.011 6.804 2.653 1.205 1.23 1.989 2.863 2.328 4.846zm-4.257 1.717c-.644-5.115-3.49-7.275-4.877-7.897 0 0-.002 7.922-.005 7.92l4.893.013a.049.049 0 00-.005-.019c-.002-.005-.005-.01-.006-.017zM11.422 4.7c-1.443.734-4.39 3.101-5.154 7.874l5.16.014-.006-7.888zM5.01 12.567c.9-6.104 5.05-8.639 6.406-9.213-2.932.095-5.246.966-6.87 2.605-1.22 1.218-2.018 2.843-2.37 4.826-.079.429.041.874.344 1.241.104.12.224.227.361.311.247.149.527.227.815.233l1.314.002v-.005zm10.348 6.423a.616.616 0 01.618.61c0 1.236-1.02 2.241-2.271 2.241-1.236 0-2.247-.977-2.272-2.19l-.003-.042v-7.02h1.238V19.6c0 .56.463 1.02 1.034 1.02.569 0 1.03-.457 1.03-1.02a.624.624 0 01.626-.61z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconUmbrellaFilled;
