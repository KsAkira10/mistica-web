/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconVirusScanRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M9.824 16.33c3.638 0 6.602-2.935 6.602-6.546 0-3.608-2.961-6.543-6.602-6.543-3.64 0-6.603 2.935-6.603 6.543.003 3.611 2.964 6.547 6.603 6.547zm11.683 4.348a.604.604 0 01-.431 1.033.608.608 0 01-.432-.176l-5.826-5.776a7.84 7.84 0 01-4.992 1.782c-4.322 0-7.823-3.474-7.823-7.76 0-4.282 3.504-7.756 7.823-7.756 4.32 0 7.824 3.474 7.824 7.757a7.696 7.696 0 01-1.96 5.126l5.817 5.77zM9.824 12.675c1.462 0 1.862-.535 1.862-2.49 0-1.227-.176-1.88-.59-2.19-.27-.2-.684-.298-1.272-.298-.592 0-1.009.099-1.278.303-.409.31-.585.966-.585 2.185 0 1.955.4 2.49 1.863 2.49zm.005-6.465c-1.25 0-1.25.252-1.25.602v.014c.354-.117.76-.182 1.245-.182.487 0 .896.065 1.252.182l.002-.016c0-.348 0-.6-1.249-.6zM13.35 9.3c.294 0 .532.235.532.526v.748a.529.529 0 01-.532.527.527.527 0 01-.53-.527v-.221h-.072c-.006.535-.048 1.053-.174 1.518l.687.207c.232.07.389.289.375.53l-.062 1.126a.53.53 0 01-.53.498h-.027a.526.526 0 01-.502-.551l.04-.717-.437-.132c-.429.549-1.135.896-2.294.896-1.163 0-1.869-.35-2.297-.902l-.454.135.039.714a.53.53 0 01-.501.555h-.028a.53.53 0 01-.53-.499l-.061-1.126a.528.528 0 01.375-.532l.703-.213c-.12-.462-.165-.98-.17-1.513h-.074v.222a.528.528 0 01-.53.526.529.529 0 01-.531-.526V9.82c0-.292.238-.527.532-.527h.639a4.09 4.09 0 01.282-1.227l-.851-.257a.522.522 0 01-.375-.533l.061-1.126c.017-.291.283-.501.558-.496a.529.529 0 01.501.555l-.04.714.466.14c-.009-.084-.023-.168-.023-.257 0-1.653 1.62-1.653 2.311-1.653.692 0 2.311 0 2.311 1.653 0 .087-.01.168-.02.249l.438-.132-.04-.717a.525.525 0 01.502-.552c.288.017.543.208.557.5l.062 1.125a.527.527 0 01-.375.53l-.835.249c.162.378.246.798.285 1.232h.64v.01zm-3.554-.835c.294 0 .529.235.529.527v2.8a.528.528 0 01-.53.527.527.527 0 01-.529-.526V8.992a.525.525 0 01.53-.527z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconVirusScanRegular;
