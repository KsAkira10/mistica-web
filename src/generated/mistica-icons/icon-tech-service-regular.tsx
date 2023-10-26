/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTechServiceRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M6.64 22a.714.714 0 0 1-.508-1.217l5.59-5.626.436.172a6.169 6.169 0 0 0 6.61-1.38 6.172 6.172 0 0 0 1.697-5.511l-3.462 3.461a2.091 2.091 0 0 1-2.957 0L12.098 9.95a2.1 2.1 0 0 1 0-2.957l3.461-3.457a6.16 6.16 0 0 0-5.51 1.696 6.17 6.17 0 0 0-1.38 6.611l.172.437-5.626 5.586a.714.714 0 0 1-1.004-1.012l4.973-4.935a7.605 7.605 0 0 1 1.86-7.695 7.599 7.599 0 0 1 8.144-1.7l1.02.395-5.098 5.087a.667.667 0 0 0 0 .936l1.949 1.949c.26.256.68.26.936 0l5.086-5.094.396 1.016a7.602 7.602 0 0 1-1.7 8.144 7.613 7.613 0 0 1-7.695 1.86l-4.934 4.975A.714.714 0 0 1 6.64 22Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.28 2.247a6.59 6.59 0 0 1 1.13-.112h.005c.552.003 1.011.297 1.207.768.197.47.073 1.008-.316 1.397l-.572.569.05.347.348.05.569-.568c.263-.263.596-.409.938-.409.426 0 .818.221 1.037.586.129.218.196.464.193.717-.006.37-.04.74-.107 1.103-.16.885-.479 1.572-.946 2.04-.462.462-1.137.778-2.009.94-.339.065-.68.101-1.025.113l-7.991 7.991a6.575 6.575 0 0 1-.104.995c-.163.885-.482 1.571-.95 2.039-.462.465-1.137.781-2.008.944-.373.07-.75.106-1.129.112h-.006c-.551-.003-1.014-.297-1.21-.77-.196-.474-.072-1.009.317-1.395l.571-.572-.05-.347-.347-.05-.572.57a1.331 1.331 0 0 1-.938.41c-.426 0-.818-.221-1.037-.586a1.379 1.379 0 0 1-.193-.717c.006-.37.04-.74.107-1.103.162-.886.481-1.572.95-2.04.461-.462 1.136-.778 2.008-.94.338-.065.68-.102 1.025-.113l7.994-7.991c.008-.334.045-.667.104-.995.162-.885.482-1.571.95-2.039.462-.465 1.137-.781 2.008-.944Zm1.233 1.263c.14-.14.09-.255-.106-.255-.053 0-1.625.006-2.348.726-.73.734-.725 2.347-.725 2.347a.994.994 0 0 1-.252.614l-8.14 8.14a.993.993 0 0 1-.61.252h-.004c-.053 0-1.624.005-2.344.725-.731.734-.726 2.348-.726 2.348 0 .12.045.185.11.185.042 0 .092-.028.145-.082l.712-.711a.825.825 0 0 1 .535-.207c.025 0 .05.002.075.005l1.023.146c.196.028.378.21.406.406l.146 1.022a.813.813 0 0 1-.205.611l-.711.712c-.138.14-.09.254.106.254h.003c.053 0 1.625-.005 2.344-.725.731-.734.726-2.347.726-2.347 0-.2.112-.474.252-.614l8.14-8.14a.993.993 0 0 1 .61-.252h.003c.054 0 1.625-.006 2.345-.725.731-.734.726-2.348.726-2.348 0-.12-.045-.185-.11-.185-.042 0-.092.028-.145.082l-.712.711a.825.825 0 0 1-.535.207.687.687 0 0 1-.075-.005l-1.023-.146a.507.507 0 0 1-.406-.406l-.146-1.023a.813.813 0 0 1 .205-.61l.711-.712Z"
                />
            </svg>
        );
    }
};

export default IconTechServiceRegular;
