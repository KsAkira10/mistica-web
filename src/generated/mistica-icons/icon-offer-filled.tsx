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

const IconOfferFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.965 21.775c-.535 0-.871-.432-.98-.575-.194-.249-.364-.557-.527-.854-.137-.25-.386-.706-.526-.807-.18.014-.645.294-.9.449-.672.406-1.367.826-1.974.473-.617-.356-.6-1.174-.583-1.966.006-.292.017-.827-.056-.986-.16-.073-.695-.062-.986-.056-.793.016-1.61.033-1.966-.583-.35-.61.067-1.305.473-1.978.154-.255.434-.72.448-.899-.104-.14-.557-.39-.81-.526-.296-.163-.604-.334-.854-.527-.574-.443-.574-.846-.574-.978 0-.535.431-.87.574-.98.25-.193.558-.364.855-.527.249-.137.705-.386.806-.526-.014-.18-.294-.645-.448-.9-.406-.672-.826-1.366-.473-1.974.355-.616 1.173-.6 1.966-.583.291.006.826.017.986-.056.073-.16.062-.695.056-.986-.017-.793-.033-1.61.583-1.966.61-.353 1.305.067 1.975.473.254.154.72.434.896.448.14-.103.39-.557.527-.806.162-.297.333-.605.526-.855.446-.574.849-.574.98-.574.536 0 .872.431.98.574.194.25.365.558.528.855.14.249.389.703.529.806.18-.014.644-.294.9-.448.671-.406 1.366-.826 1.977-.473.616.355.6 1.173.582 1.966-.005.291-.016.826.056.986.16.073.695.062.986.056.793-.017 1.611-.033 1.967.583.353.61-.068 1.305-.474 1.975-.154.254-.434.72-.448.899.104.14.558.39.807.526.297.163.605.334.854.527.574.445.574.849.574.98 0 .535-.43.871-.574.98-.25.194-.557.365-.854.527-.25.138-.706.387-.807.527.014.18.294.644.448.896.406.673.827 1.367.474 1.975-.356.616-1.177.6-1.967.583-.291-.006-.826-.017-.986.056-.072.16-.061.694-.056.986.017.792.034 1.61-.582 1.966-.611.353-1.303-.067-1.975-.473-.255-.154-.72-.434-.896-.448-.14.103-.39.557-.527.806-.163.297-.333.605-.527.855-.448.577-.851.577-.983.577z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconOfferFilled;
