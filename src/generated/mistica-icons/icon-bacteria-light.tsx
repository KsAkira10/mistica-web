/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconBacteriaLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.837 11.997a.416.416 0 00-.42-.42v.003h-2.291c-.087-2.081-.731-3.524-1.61-4.513l1.442-1.442a.406.406 0 000-.589.416.416 0 00-.597 0L16.92 6.48c-1.617-1.342-3.647-1.569-4.502-1.602V2.57a.416.416 0 00-.42-.42.421.421 0 00-.42.42v2.297c-.863.017-2.908.219-4.518 1.594L5.633 5.034a.416.416 0 00-.597 0 .421.421 0 000 .588l1.435 1.434c-.858.989-1.468 2.431-1.544 4.521H2.571a.421.421 0 00-.42.42c0 .227.194.42.42.42h2.353c.084 2.065.703 3.507 1.558 4.496l-1.448 1.451a.431.431 0 000 .597.44.44 0 00.29.117c.11 0 .22-.042.303-.117l1.451-1.451c1.586 1.358 3.597 1.585 4.496 1.61v2.3c0 .235.194.42.42.42.236 0 .42-.185.42-.42v-2.3c.821-.025 2.886-.227 4.519-1.593l1.425 1.434a.434.434 0 00.594 0 .416.416 0 000-.597l-1.425-1.426c.882-.988 1.526-2.431 1.602-4.52h2.288c.236 0 .42-.194.42-.42zm-5.14 4.62a.09.09 0 01-.02.014c-.01.006-.018.01-.024.022a.093.093 0 00-.016.021c-.004.009-.009.016-.018.02-1.367 1.317-3.235 1.57-4.283 1.586-.129.008-.269.008-.412.008h-.218c-1.793-.025-5.97-.697-5.97-6.316 0-.14 0-.274.01-.409l.005-.128a2.72 2.72 0 01.02-.258c.008-.169.024-.328.05-.488.008-.084.017-.168.033-.252a7.7 7.7 0 01.219-.941c.033-.118.075-.227.117-.336.06-.177.127-.336.21-.488 0-.017.009-.033.017-.05a5.43 5.43 0 01.236-.429l.014-.02a.165.165 0 00.028-.047c.092-.143.185-.269.285-.395.09-.132.2-.25.317-.367.008 0 .017-.017.017-.017a.222.222 0 00.02-.025c.007-.008.013-.017.022-.025.017 0 .017-.008.017-.017a4.697 4.697 0 011.16-.842l.072-.037c.134-.076.269-.135.403-.185l.016-.01c.008-.004.013-.007.018-.007.076-.034.151-.059.227-.084.049-.024.101-.038.153-.052.028-.007.055-.015.082-.024.233-.084.46-.143.695-.185a7.11 7.11 0 011.03-.134c.076-.009.152-.009.22-.009.075-.008.142-.008.21-.008h.646c1.801.053 6.003.748 6.003 6.308 0 2.241-.68 3.675-1.61 4.605zm-.238-7.051c0-1.75-1.24-2.563-2.47-2.594l-.154.003h-.037c-1.23.011-2.465.815-2.465 2.582 0 1.768 1.241 2.577 2.47 2.597h.063l.126-.003c1.226-.022 2.467-.832 2.467-2.585zm-.837-.003c0 1.614-1.314 1.74-1.644 1.745h-.034a.694.694 0 01-.079 0h-.047c-.347-.005-1.644-.131-1.644-1.756 0-1.622 1.288-1.742 1.633-1.745h.028c.044 0 .092 0 .134.003.34.008 1.653.142 1.653 1.753zm-6.63 2.644h-.087c-.194-.003-.916-.073-.916-.977 0-.9.714-.967.907-.97h.093c.187.006.919.082.919.978s-.734.966-.916.97zm1.753-.972c0-1.218-.9-1.795-1.737-1.815l-.086-.003h-.037c-.832.009-1.734.577-1.734 1.81 0 1.232.902 1.804 1.74 1.818h.115c.837-.017 1.74-.588 1.74-1.81zm3.692 4.838a1.093 1.093 0 00-.055.011l-.054.011a1.219 1.219 0 01-.272.028c-.378 0-.966-.148-1.148-1.022-.239-1.146.652-1.42.896-1.474a1.651 1.651 0 01.375-.044c.378 0 .98.143 1.163 1.016.235 1.138-.673 1.42-.905 1.474zm1.725-1.644c-.22-1.056-.96-1.687-1.983-1.687a2.285 2.285 0 00-.471.049l-.083.016c-.978.213-1.83 1.056-1.538 2.462.221 1.059.958 1.692 1.969 1.692.182 0 .336-.025.431-.042l.135-.028c.977-.224 1.829-1.07 1.54-2.462z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBacteriaLight;
