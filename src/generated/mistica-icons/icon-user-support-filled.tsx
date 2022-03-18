/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconUserSupportFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.365 2C7.025 2 2.72 6.512 2.72 12.112c0 1.515.296 2.917.888 4.197l-1.593 6.225a.38.38 0 00.076.349c.076.08.148.117.26.117h.076l5.928-1.67a9.195 9.195 0 004.003.894c5.34 0 9.643-4.513 9.643-10.112C22 6.512 17.705 2 12.365 2zm0 15.829c-.372 0-.668-.31-.668-.701 0-.39.296-.701.668-.701.373 0 .669.31.669.7-.004.391-.3.702-.669.702zm1.517-5.638l1.077-1.129c.929-.973.817-2.724.112-3.69a3.08 3.08 0 00-2.486-1.284h-.184c-1.036 0-2.037.626-2.557 1.558-.189.272-.077.62.184.776.26.197.592.08.74-.193.332-.625.925-.974 1.593-.974h.184c.633 0 1.261.31 1.633.857.409.541.48 1.632 0 2.136l-1.076 1.13c-.853.855-1.297 2.022-1.297 3.265 0 .31.26.583.556.583.296 0 .557-.273.557-.583a3.5 3.5 0 01.964-2.452z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.008 2h-6.582a1.664 1.664 0 00-1.67 1.658v4.037c0 .952.681 1.67 1.583 1.67h.557v1.383c0 .062-.002.124-.004.184-.01.322-.02.599.299.65.351.058.633-.283.853-.55l.048-.057c.099-.118.274-.306.49-.538.282-.304.634-.682.973-1.073l3.453.009c.922 0 1.667-.748 1.67-1.67V3.67A1.672 1.672 0 0020.008 2zm-3.12 6.28a.526.526 0 11-.001-1.052.526.526 0 01.001 1.052zm.804-2.716c.03-.027.058-.05.078-.071l.106-.101c.22-.208.448-.421.443-.91 0-.67-.577-1.387-1.437-1.387-.918 0-1.501.544-1.501 1.381V4.5a.5.5 0 001-.026c0-.16.168-.428.501-.428.334 0 .412.297.412.434 0 .176-.154.307-.261.398-.025.02-.047.04-.064.056l-.029.028c-.234.224-.556.534-.556 1.05v.207c0 .283.218.513.501.513.283 0 .502-.23.502-.513v-.207c0-.182.18-.339.305-.447zm-9.227 9.943c1.134 0 2.014-.322 2.613-.958.566-.6.855-1.445.855-2.513 0-1.067-.289-1.91-.855-2.512-.599-.636-1.479-.958-2.613-.958s-2.014.322-2.613.958c-.566.6-.855 1.445-.855 2.512 0 1.068.289 1.91.855 2.513.599.636 1.479.958 2.613.958zm-5.487 1.972c.647-.655 1.616-.986 2.876-.986h5.222c1.26 0 2.226.33 2.876.983.65.653.978 1.628.978 2.894v1.042a.28.28 0 01-.28.28H2.28a.281.281 0 01-.28-.28V20.37c0-1.266.33-2.236.978-2.891z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconUserSupportFilled;
