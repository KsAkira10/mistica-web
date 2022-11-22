/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconHardDiskLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.836 15.734a.172.172 0 01-.001-.02l-.002-.002v-.003c0-.003 0-.007-.004-.011l-.008-.079-.005-.046a.553.553 0 00-.012-.091L20.28 3.38c-.132-.714-.68-1.216-1.336-1.216L5.042 2.151c-.692 0-1.252.563-1.25 1.202l-1.638 12.28a.105.105 0 00.001.031l.002.02-.003.032c-.001.012-.003.025-.003.038v4.831c0 .692.56 1.255 1.252 1.255h17.182c.692 0 1.252-.563 1.252-1.255v-4.852zM4.611 3.409a.43.43 0 01.434-.431l13.902.014c.252 0 .47.224.526.52l1.387 11.02a1.248 1.248 0 00-.275-.033H3.403a1.27 1.27 0 00-.274.033L4.61 3.41zm15.974 17.61H3.403a.435.435 0 01-.434-.434v-4.829c0-.238.196-.434.434-.434h17.182c.222 0 .401.171.423.39l.009.07v4.803a.433.433 0 01-.432.435zm-8.59-13.016c.927 0 .927.386.927.554 0 .168 0 .558-.928.558-.927 0-.927-.392-.927-.558 0-.165 0-.554.927-.554zm-1.746.554c0 .415.168 1.379 1.745 1.379 1.577 0 1.748-.964 1.748-1.379 0-.414-.17-1.378-1.748-1.378-1.574 0-1.745.964-1.745 1.378zm7.936 10.477c-.527 0-.731-.205-.731-.734 0-.527.204-.734.73-.734.522 0 .735.213.735.734 0 .52-.213.734-.734.734zm1.552-.734c0-.972-.58-1.555-1.552-1.555-.972 0-1.552.58-1.552 1.555 0 .974.58 1.554 1.552 1.554.972 0 1.552-.58 1.552-1.554zM6.062 4.76c-.482 0-.765-.177-.765-.553 0-.378.283-.554.765-.554.484 0 .764.176.764.554 0 .373-.28.552-.764.552zm10.711-.553c0 .376.283.552.765.552.484 0 .767-.18.764-.552 0-.378-.28-.554-.764-.554-.482 0-.765.176-.765.554zm2.406 9.591c-.481 0-.764-.176-.764-.552 0-.378.283-.554.764-.554.485 0 .765.176.765.554 0 .376-.283.552-.765.552zM4.678 12.84c-.006-.09.07-.215.21-.344.818-.748 2.91-2.182 3.437-2.185.02 0 .036.003.05.005.079.37-1.117 1.85-2.154 2.799-.462.423-.93.274-1.238.073-.185-.12-.297-.247-.305-.348zm2.675-3.036A3.609 3.609 0 017.15 8.56c0-2.25 1.63-3.39 4.843-3.39s4.843 1.14 4.843 3.39-1.627 3.39-4.843 3.39c-1.296 0-2.353-.19-3.137-.566l-.045-.023c.244-.403.404-.792.378-1.103a.756.756 0 00-.347-.591c-.342-.224-.888-.107-1.487.165 0-.011 0-.02-.003-.028zm-3.49 3.104c.02.254.154.633.675.972.342.22.697.33 1.047.327.423 0 .838-.162 1.19-.487.06-.053.892-.824 1.564-1.686a.056.056 0 01.01.008l.007.006.145.072c.897.429 2.073.648 3.493.648 4.681 0 5.664-2.289 5.664-4.21 0-1.922-.983-4.213-5.664-4.213-4.68 0-5.663 2.29-5.663 4.212 0 .558.084 1.073.252 1.53a.42.42 0 00.07.112c-1.14.671-2.249 1.63-2.314 1.687l-.003.002c-.428.392-.493.77-.473 1.02z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconHardDiskLight;
