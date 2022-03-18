/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconOfferFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.8 14.002a.76.76 0 01.164.741.74.74 0 01-.567.506l-3.328.668.389 3.379a.749.749 0 01-1.057.77l-3.083-1.415-1.667 2.964a.747.747 0 01-1.306 0l-1.667-2.964-3.084 1.415a.736.736 0 01-.754-.078.743.743 0 01-.302-.692l.393-3.378-3.328-.67a.756.756 0 01-.567-.505.747.747 0 01.163-.74L4.5 11.5 2.2 8.998a.76.76 0 01-.164-.741.74.74 0 01.567-.506l3.328-.669-.393-3.378a.76.76 0 01.302-.693.759.759 0 01.754-.077L9.678 4.35l1.666-2.964a.747.747 0 011.306 0l1.668 2.964L17.4 2.934a.747.747 0 01.754.077c.221.16.336.424.303.693l-.39 3.378 3.33.67c.263.052.48.245.566.505a.747.747 0 01-.163.74L19.5 11.5l2.3 2.502z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.965 21.775c-.535 0-.871-.432-.98-.575-.194-.249-.364-.557-.527-.854-.137-.25-.386-.706-.527-.807-.179.014-.644.294-.899.449-.672.406-1.367.826-1.975.473-.616-.356-.599-1.174-.582-1.966.005-.292.017-.827-.056-.986-.16-.073-.695-.062-.986-.056-.793.016-1.61.033-1.967-.583-.35-.61.068-1.305.474-1.978.154-.255.434-.72.448-.899-.104-.14-.557-.39-.81-.526-.296-.163-.605-.334-.854-.527-.574-.443-.574-.846-.574-.978 0-.535.431-.87.574-.98.25-.193.558-.364.854-.527.25-.137.706-.386.807-.526-.014-.18-.294-.645-.448-.9-.406-.672-.826-1.366-.473-1.974.355-.616 1.173-.6 1.966-.583.291.006.826.017.986-.056.073-.16.062-.695.056-.986-.017-.793-.034-1.61.583-1.966.61-.353 1.305.067 1.974.473.255.154.72.434.897.448.14-.103.39-.557.526-.806.163-.297.334-.605.527-.855.445-.574.849-.574.98-.574.535 0 .872.431.98.574.194.25.365.558.527.855.14.249.39.703.53.806.18-.014.644-.294.899-.448.672-.406 1.367-.826 1.978-.473.616.355.599 1.173.582 1.966-.005.291-.017.826.056.986.16.073.695.062.986.056.793-.017 1.61-.033 1.967.583.353.61-.068 1.305-.474 1.975-.154.254-.434.72-.448.899.104.14.557.39.807.526.297.163.605.334.854.527.574.445.574.849.574.98 0 .535-.431.872-.574.98-.25.194-.557.365-.854.527-.25.138-.706.387-.807.527.014.18.294.644.448.896.406.673.827 1.367.474 1.975-.356.616-1.177.6-1.967.583-.291-.006-.826-.017-.986.056-.073.16-.061.694-.056.986.017.793.034 1.61-.582 1.966-.611.353-1.303-.067-1.975-.473-.255-.154-.72-.434-.897-.448-.14.103-.389.557-.526.806-.163.297-.333.605-.527.855-.448.577-.851.577-.983.577z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconOfferFilled;
