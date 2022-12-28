/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconVirusScanLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.725 21.714a.407.407 0 00-.006-.574l-5.87-5.824a7.757 7.757 0 002.12-5.327c0-4.328-3.538-7.838-7.905-7.838-4.367 0-7.908 3.51-7.908 7.838 0 4.327 3.54 7.837 7.908 7.837a7.9 7.9 0 005.196-1.938l5.877 5.832c.162.16.423.16.582 0l.006-.006zM17.145 9.99c0 3.87-3.176 7.02-7.081 7.02-3.905.002-7.081-3.15-7.081-7.02 0-3.871 3.176-7.02 7.08-7.02 3.906 0 7.082 3.149 7.082 7.02zm-7.081 3.476c1.557 0 2.008-.591 2.008-2.639 0-1.28-.193-1.972-.647-2.31-.294-.22-.74-.326-1.358-.326-.628 0-1.076.11-1.367.331-.449.342-.639 1.03-.639 2.305-.006 2.048.448 2.639 2.003 2.639zM8.68 7.42c0 .07.006.132.014.185.373-.151.82-.232 1.367-.232.549 0 1 .08 1.375.232.009-.053.014-.115.014-.188.003-.389.003-.728-1.383-.728-1.387 0-1.387.339-1.387.731zm4.947 2.636a.41.41 0 01.412.409v.756a.41.41 0 01-.412.41.41.41 0 01-.412-.41v-.347h-.32c-.002.661-.064 1.244-.212 1.737l.818.246c.18.053.3.224.291.412l-.062 1.137a.408.408 0 01-.411.387h-.023a.41.41 0 01-.39-.429l.046-.82-.614-.186c-.417.586-1.117.925-2.271.925-1.16 0-1.86-.339-2.278-.927l-.63.19.045.82a.408.408 0 01-.39.43h-.022a.411.411 0 01-.412-.387l-.061-1.137a.404.404 0 01.291-.412l.838-.252c-.146-.493-.208-1.073-.21-1.731h-.323v.347a.41.41 0 01-.411.409.41.41 0 01-.412-.409v-.756a.41.41 0 01.412-.41h.759c.039-.512.14-1.008.347-1.436l-1-.305a.404.404 0 01-.291-.412l.061-1.138c.012-.226.216-.414.435-.386a.41.41 0 01.389.429l-.045.817.75.227a2.068 2.068 0 01-.052-.434c0-.969.585-1.33 1.198-1.465l-.072-.073a.407.407 0 01-.003-.574l.003-.003c.162-.16.42-.16.582 0l.378.373a.378.378 0 01.101.196h.009a.372.372 0 01.103-.196l.376-.373c.162-.16.42-.16.582 0 .16.157.163.415.006.575l-.073.072c.625.13 1.23.485 1.23 1.471a1.9 1.9 0 01-.05.426l.722-.219-.045-.818a.408.408 0 01.39-.428c.235-.028.422.16.434.386l.061 1.138a.404.404 0 01-.291.411l-.98.294c.21.429.31.93.35 1.443h.759zm-3.182-.434a.41.41 0 00-.412-.41.408.408 0 00-.412.41v2.829a.41.41 0 00.412.409.41.41 0 00.412-.409v-2.83z"
            />
        </svg>
    );
};

export default IconVirusScanLight;
