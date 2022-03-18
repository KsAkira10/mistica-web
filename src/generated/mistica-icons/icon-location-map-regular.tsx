/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconLocationMapRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.077 1c2.23 0 4.097 1.704 4.525 3.962H22V22H2V4.962h8.552C10.981 2.704 12.847 1 15.077 1zm3.078 4.95c0-1.856-1.379-3.367-3.078-3.367C13.38 2.583 12 4.094 12 5.95c0 1.253 1.689 4.418 3.077 6.67 1.389-2.257 3.078-5.417 3.078-6.67zM3.536 9.66c.453.223.768.695.768 1.247v1.188c0 .04.005.08.01.121.256 1.705 1.753 2.161 2.96 2.526 1.447.442 2.033.72 2.033 1.715V17.8a4.217 4.217 0 00.975 2.617H3.536V9.66zm10.39 10.758h6.543V6.55h-.827c-.463 2.623-3.546 7.396-3.92 7.974a.768.768 0 01-.64.35.768.768 0 01-.64-.35c-.379-.578-3.456-5.351-3.92-7.974H3.537v1.446c1.315.274 2.31 1.476 2.31 2.911v1.121c.118.604.669.832 1.865 1.198 1.325.4 3.137.953 3.137 3.23v1.188c0 1.907 1.595 2.774 3.077 2.774zM17.1 5.555c0-1.151-.91-2.085-2.024-2.085-1.117 0-2.023.939-2.023 2.085s.906 2.085 2.023 2.085c1.118 0 2.024-.933 2.024-2.085zm-2.895 0c0 .497.389.898.871.898.483 0 .872-.4.872-.898a.883.883 0 00-.872-.898.884.884 0 00-.871.898z"
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
                    d="M21.631 21.682a.606.606 0 00.182-.619l-2.291-8.02a.594.594 0 00-.336-.386.608.608 0 00-.513.011l-2.695 1.345-.168-.053c1.166-1.9 2.174-4.056 2.18-5.813.01-3.745-2.216-5.986-5.958-5.997h-.028c-3.729 0-5.958 2.227-5.97 5.96-.005 1.687.964 3.83 2.107 5.749l-.322.092-2.244-1.269a.601.601 0 00-.871.342l-2.527 8.025a.61.61 0 00.171.63.61.61 0 00.644.104l4.23-1.838 4.429 1.816c.028.01.058.02.09.028l.111.025a.58.58 0 00.364-.025l4.606-1.846 4.168 1.837a.604.604 0 00.641-.098zM7.239 8.108c.011-3.07 1.7-4.76 4.762-4.76h.025c3.076.01 4.765 1.71 4.756 4.788-.008 2.84-3.395 7.429-4.795 9.064-1.521-1.764-4.757-6.378-4.748-9.092zM20.3 20.156l-2.938-1.294-.667-3.869 1.863-.93 1.742 6.093zm-16.577-.009l1.908-6.056 1.468.83-.457 3.957-2.919 1.27zm7.687-1.792c-.555-.594-1.586-1.88-2.605-3.438l-.516.152-.437 3.829 3.544 1.454.014-1.997zm1.204-.048l-.014 2.028 3.55-1.42-.65-3.793-.365-.115c-1.025 1.527-2.045 2.77-2.52 3.3zm-1.7-10.527c0 .748.347 1.096 1.095 1.096s1.098-.348 1.098-1.096c0-.748-.35-1.098-1.098-1.098-.745 0-1.095.348-1.095 1.098zm1.098 2.303c1.42 0 2.303-.883 2.303-2.303s-.883-2.302-2.303-2.302-2.303.882-2.303 2.302.883 2.303 2.303 2.303z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconLocationMapRegular;
