/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconBellAddMoreRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.468 17.714c.196.16.269.434.188.678a.606.606 0 01-.578.395h-5.24c-.04.546-.194 1.359-.762 1.995-.544.602-1.325.907-2.306.907-.991 0-1.77-.305-2.313-.907-.569-.636-.723-1.449-.757-1.995H4.462a.602.602 0 01-.392-1.07c.462-.37.846-.885 1.146-1.496C3.706 15.678 2 14.367 2 11.134c0-4.198 2.843-5.148 4.417-5.347 1.535-3.885 5.93-3.807 6.353-3.781.373-.017 3.014-.09 4.93 1.68 1.283 1.182 1.933 2.897 1.933 5.093v3.819c-.01.26-.124 3.531 1.835 5.116zm-15.636-.137h13.871c-1.454-2.092-1.3-4.9-1.291-5.036V8.779c0-1.843-.518-3.258-1.535-4.2-1.592-1.473-3.922-1.372-4.064-1.366h-.006c-.008 0-.014-.002-.02-.004s-.012-.005-.022-.005a.088.088 0 00-.025.005c-.006.002-.01.004-.014.004-.158-.009-3.517-.192-4.953 2.524 1.177.042 5.165.549 5.165 5.431 0 4.995-4.176 5.39-5.22 5.403h-.505c-.185 0-.462-.016-.787-.064a6.11 6.11 0 01-.594 1.07zm8.333 2.395c.317-.353.423-.838.448-1.19h-3.697c.034.352.132.845.457 1.198.3.34.753.499 1.397.499.633 0 1.087-.16 1.395-.507zm-6.927-4.608c-1.501-.014-4.02-.594-4.02-4.23 0-3.627 2.485-4.19 3.972-4.198h.48c1.512.039 4.053.635 4.053 4.23 0 3.588-2.519 4.176-4.028 4.198h-.457zm.227-.916a.607.607 0 00.61-.602h.003v-2.104h2.12a.61.61 0 00.609-.605.607.607 0 00-.608-.605h-2.12V8.457a.607.607 0 00-.611-.603.606.606 0 00-.608.603v2.075H4.742a.604.604 0 100 1.207h2.115v2.107a.608.608 0 00.608.602z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBellAddMoreRegular;
