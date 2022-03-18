/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconBacteriaRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.686 11.843a.622.622 0 00-.616-.616h-2.244c-.1-1.824-.666-3.129-1.437-4.056l1.42-1.42a.615.615 0 00-.871-.868l-1.437 1.436c-1.428-1.117-3.145-1.378-4.039-1.428V2.616A.622.622 0 0011.846 2a.62.62 0 00-.616.616v2.258c-.914.042-2.645.288-4.073 1.412L5.753 4.882a.615.615 0 00-.87.869l1.411 1.411c-.745.93-1.28 2.241-1.378 4.065h-2.3a.622.622 0 00-.616.616c0 .336.28.616.616.616h2.297c.107 1.813.647 3.118 1.395 4.048L4.88 17.936a.617.617 0 00.434 1.05.634.634 0 00.437-.182l1.428-1.429c1.412 1.126 3.12 1.378 4.048 1.437v2.258c0 .336.28.616.616.616.336 0 .616-.28.616-.616v-2.266c.88-.04 2.62-.289 4.065-1.412l1.412 1.412a.615.615 0 00.434.182.648.648 0 00.434-.182.617.617 0 000-.868L17.4 16.532c.773-.927 1.33-2.243 1.428-4.073h2.241c.336 0 .616-.28.616-.616zm-9.515 5.745c1.633-.033 5.442-.65 5.442-5.723 0-5.08-3.834-5.722-5.484-5.761-.072 0-.148-.002-.227-.004a10.445 10.445 0 00-.266-.005h-.123c-1.62.017-5.387.608-5.387 5.728 0 1.71.535 5.698 5.443 5.765h.602zm3.566-7.952c0-1.628-1.157-2.384-2.306-2.412l-.131.003h-.034c-1.146.011-2.302.759-2.302 2.403 0 1.644 1.16 2.395 2.308 2.412h.053l.1-.003c1.155-.022 2.312-.773 2.312-2.403zm-.986-.003c0 1.314-1.073 1.415-1.34 1.42h-.125c-.283-.003-1.34-.109-1.34-1.428 0-1.32 1.046-1.418 1.329-1.42h.079c.018.002.036.002.052.002.275.006 1.345.118 1.345 1.426zM9.1 12.087c.148-.003.745-.059.745-.79 0-.728-.594-.79-.748-.793h-.073c-.157.003-.736.056-.736.79 0 .737.588.793.745.796H9.1v-.003zm1.728-.793c0-1.19-.885-1.756-1.706-1.779l-.078.003h-.037c-.846.006-1.708.616-1.708 1.773 0 1.205.888 1.768 1.714 1.779h.104c.823-.017 1.711-.577 1.711-1.776zm2.866 4.359c.182-.065.888-.384.582-1.28-.201-.589-.596-.715-.899-.715-.154 0-.283.034-.35.053l-.031.01-.061.018c-.19.068-.883.376-.578 1.278.202.59.594.72.894.72.154 0 .286-.034.353-.056l.055-.017.035-.011zm1.515-1.597c-.294-.865-.98-1.384-1.832-1.384a2.16 2.16 0 00-.641.098l-.112.037c-.891.313-1.636 1.235-1.196 2.526.296.869.98 1.39 1.826 1.39.277 0 .51-.056.655-.104l.112-.04c.88-.316 1.625-1.24 1.188-2.523z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBacteriaRegular;
