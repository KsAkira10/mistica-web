/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTipsAndTricksFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.332 6.257c-1.836 0-3.354 1.593-3.354 3.518 0 1.035.458 2.039 1.235 2.705.673.593 1.06 1.223 1.166 1.925h1.978c.107-.706.459-1.296 1.132-1.885 0 0 0-.036.034-.036a3.583 3.583 0 0 0 1.235-2.705c-.072-1.93-1.59-3.522-3.426-3.522Zm1.41 8.89H10.92c-.214 0-.351.149-.351.37 0 .22.141.369.351.369h2.823c.214 0 .352-.149.352-.37 0-.22-.138-.368-.352-.368Zm-2.822 1.481h2.823c.214 0 .352.148.352.37 0 .22-.138.368-.352.368H10.92c-.21 0-.351-.144-.351-.369 0-.22.137-.369.351-.369Z"
            />
            <path
                fill={fillColor}
                d="M3.153 11.629C3.153 6.297 7.249 2 12.332 2c5.082 0 9.186 4.297 9.186 9.629s-4.096 9.629-9.179 9.629a8.786 8.786 0 0 1-3.813-.85L2.878 22h-.073a.312.312 0 0 1-.249-.112c-.072-.073-.107-.221-.072-.333l1.514-5.926c-.562-1.224-.845-2.556-.845-4Zm11.225 2.965c.034-.445.317-.855.776-1.26.99-.854 1.59-2.186 1.59-3.555 0-2.555-1.942-4.67-4.378-4.67S7.953 7.184 7.953 9.74c0 1.368.6 2.668 1.625 3.555.459.41.704.814.776 1.26-.283.22-.459.557-.459.926 0 .297.107.558.283.743a1.073 1.073 0 0 0-.283.742c0 .63.46 1.111 1.06 1.111h2.822c.6 0 1.06-.481 1.06-1.111 0-.297-.107-.558-.284-.742.176-.189.283-.446.283-.742 0-.37-.175-.703-.458-.887Z"
            />
        </svg>
    );
};

export default IconTipsAndTricksFilled;
