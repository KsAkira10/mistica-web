/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconBandAidRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.14 12.1c2.341 2.498 2.26 5.269-.256 7.784-1.294 1.294-2.647 1.95-4.02 1.95h-.075c-1.35-.023-2.675-.678-3.938-1.942l-.154-.148-.047-.046a5.955 5.955 0 01-.306-.313l-.684-.683c-.004-.004-.01-.007-.015-.01l-.018-.012L5.15 13.2a.061.061 0 01-.012-.017.078.078 0 00-.005-.01l-.566-.566a4.23 4.23 0 01-.325-.32l-.148-.154c-1.267-1.266-1.92-2.59-1.944-3.94-.026-1.404.627-2.782 1.944-4.099 2.551-2.555 5.367-2.591 7.93-.112l1.156 1.157a.05.05 0 00.016.009l.004.002 5.476 5.479a.061.061 0 00.009.014l1.268 1.269c.065.062.127.123.185.188zm-14.552-.205l-.188-.188a3.122 3.122 0 01-.272-.271l-.168-.174c-2.123-2.123-2.123-4.185 0-6.308C6.022 3.892 7.067 3.36 8.114 3.36c1.011 0 2.023.499 3.048 1.49l.734.734-6.308 6.311zm5.476 5.48l6.305-6.312-4.61-4.61-6.306 6.31 4.61 4.611zm7.952 1.643c2.059-2.058 2.126-4.053.207-6.103a1.058 1.058 0 00-.086-.09l-.026-.025-.086-.084-.788-.787-6.308 6.308.311.31c.112.127.205.216.3.306l.174.168c1.033 1.034 2.072 1.566 3.095 1.583 1.028.011 2.137-.513 3.207-1.586zM12.38 11.47a.62.62 0 00-.88 0 .625.625 0 000 .88.62.62 0 00.88 0 .62.62 0 000-.88zm-1.431 2.846a.62.62 0 01.88 0 .62.62 0 010 .88.62.62 0 01-.88 0 .626.626 0 010-.88zm4.347-2.585a.62.62 0 000-.88.62.62 0 00-.88 0 .62.62 0 000 .88.62.62 0 00.88 0zm-6.58.33a.62.62 0 01.88 0 .62.62 0 010 .88.62.62 0 01-.88 0 .62.62 0 010-.88zm4.348-3.467a.62.62 0 00-.88 0 .62.62 0 000 .88.62.62 0 00.88 0 .62.62 0 000-.88z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBandAidRegular;
