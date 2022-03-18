/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTechServiceMobileRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.42 21.842h7.185c2.187 0 3.249-1.076 3.249-3.291V5.44c0-2.185-1.093-3.291-3.25-3.291H11.42c-1.107 0-1.91.272-2.454.832-.535.549-.796 1.353-.796 2.46v4.752l-2.694 2.695a3.03 3.03 0 00-3.204 3.793.839.839 0 001.406.376l.656-.65.31.044.045.311-.655.656a.84.84 0 00.378 1.406 3.029 3.029 0 003.758-2.373v2.099c0 2.215 1.062 3.29 3.25 3.29zm-3.25-7.366l-.862.862a2.186 2.186 0 01-2.675 2.678l.953-.953-.194-1.353-1.353-.193-.952.952a2.182 2.182 0 012.675-2.675l5.252-5.255a2.182 2.182 0 012.112-2.75c.19 0 .381.025.566.073l-.952.952.193 1.353 1.353.193.952-.952a2.182 2.182 0 01-2.675 2.675L8.196 14.45H8.17v.026zm1.12.064l3.556-3.555a3.02 3.02 0 003.202-3.793.839.839 0 00-1.406-.375l-.656.655-.31-.045-.046-.31.656-.656a.84.84 0 00-.378-1.406 2.843 2.843 0 00-.782-.107 3.03 3.03 0 00-3.014 3.303l-.821.822V5.44c0-.798.154-1.347.476-1.678.322-.33.863-.493 1.653-.493h7.185c1.532 0 2.128.608 2.128 2.171v13.11c0 .806-.156 1.36-.479 1.686-.322.325-.86.484-1.65.484H11.42c-.79 0-1.328-.156-1.65-.484-.322-.328-.48-.88-.48-1.686v-4.01zm5.732 2.918c.577 0 .955.305.955.958 0 .314-.087.546-.24.706-.169.17-.412.252-.715.252s-.546-.081-.714-.252c-.154-.157-.241-.392-.241-.706.003-.655.378-.958.955-.958z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTechServiceMobileRegular;
