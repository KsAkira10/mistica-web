/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCarMovingFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.295 11.92c1.048 1.715.353 2.877-.157 3.25a.597.597 0 01-.353.115h-2.014c-.218 1.016-1 1.633-2.16 1.633-1.16 0-1.94-.617-2.16-1.633h-2.615c-.222 1.014-1.003 1.624-2.16 1.624-1.157 0-1.936-.61-2.16-1.624h-1.31a.599.599 0 01-.583-.46c-.009-.033-.202-.848-.132-2.064-.008-.905.552-2.431 1.82-3.712.894-.902 2.443-1.977 4.76-1.977 3.605 0 5.44 2.042 5.98 2.773.678.112 2.306.532 3.244 2.075zM10.71 14.678c0-.706-.328-1.034-1.031-1.034-.703 0-1.031.328-1.031 1.034-.003.706.325 1.033 1.03 1.033.704 0 1.032-.327 1.032-1.033zm6.932.005c0-.706-.327-1.033-1.03-1.033-.703 0-1.031.328-1.031 1.033 0 .706.328 1.034 1.03 1.034.704 0 1.031-.328 1.031-1.034zm-12.56-1.145a.6.6 0 00-.6-.6H3.178a.6.6 0 000 1.2h1.306a.6.6 0 00.6-.6zm-.344-2.6a.6.6 0 010 1.2H2.754a.6.6 0 010-1.2h1.984zm.627-.776a.6.6 0 000-1.198h-1.54a.6.6 0 000 1.198h1.54z"
            />
        </svg>
    );
};

export default IconCarMovingFilled;
