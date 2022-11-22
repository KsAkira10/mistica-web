/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAutenticationSuccessLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.378 14.664c.485-2.782.468-9.238.46-9.51a.418.418 0 00-.157-.31.471.471 0 00-.345-.09c-1.767.277-2.731-.353-3.84-1.093l-.005-.003c-1.069-.705-2.284-1.507-4.354-1.507h-.008c-2.064 0-3.281.8-4.354 1.503l-.01.007c-1.101.74-2.065 1.373-3.832 1.092a.42.42 0 00-.353.082.4.4 0 00-.149.319v.008c0 .228-.01 4.854.27 7.925-1.637.557-2.55 1.919-2.55 4.185 0 3.045 1.65 4.473 4.482 4.473 1.622 0 2.838-.485 3.594-1.46a31.736 31.736 0 002.731 1.51c.056.026.115.04.174.042a.432.432 0 00.179-.041c.305-.14 7.442-3.547 8.067-7.132zm-.807-.137c-.114.638-.493 1.288-1.033 1.91a3.253 3.253 0 00-.23-.294c-.888-.927-2.193-1.412-3.773-1.412h-4.992c-.705-1.297-2.047-1.927-3.913-1.927-.403 0-.773.042-1.126.098-.221-2.521-.255-6.034-.255-7.28 1.8.156 2.898-.566 3.954-1.26l.018-.012c1.02-.68 2.079-1.378 3.905-1.378h.008c1.83 0 2.888.697 3.908 1.38 1.053.698 2.154 1.413 3.972 1.264 0 1.55-.048 6.622-.443 8.91zM16.028 6.5c-.675-.65-1.65-.98-2.9-.98-1.246 0-2.22.33-2.893.98-.7.675-1.053 1.673-1.053 2.97 0 1.296.356 2.294 1.053 2.966.673.647 1.647.975 2.894.975 1.25 0 2.224-.33 2.899-.975.703-.675 1.059-1.672 1.059-2.966 0-1.295-.356-2.295-1.059-2.97zm-.569 5.348c-.518.493-1.3.745-2.333.745-1.025 0-1.81-.25-2.322-.745-.53-.513-.801-1.311-.801-2.376 0-1.064.271-1.865.804-2.38.515-.5 1.297-.751 2.322-.751 1.03 0 1.812.252 2.33.75.535.516.807 1.317.807 2.381 0 1.062-.272 1.863-.807 2.376zm-6.804 3.543a.41.41 0 01.58.58l-3.187 3.185a.41.41 0 01-.58.003l-.003-.003-1.434-1.431a.41.41 0 01.58-.58l1.142 1.14c.003 0 2.902-2.894 2.902-2.894zm10.32 1.661c-1.947 1.922-5.07 3.538-5.846 3.916a33.804 33.804 0 01-2.474-1.38c.289-.631.46-1.387.46-2.314a6.05 6.05 0 00-.238-1.723h4.66c1.35 0 2.452.4 3.183 1.157.09.112.174.227.255.344zM6.633 20.927c-2.49 0-3.658-1.165-3.658-3.652 0-2.496 1.168-3.653 3.658-3.653 2.493 0 3.658 1.157 3.658 3.652 0 2.488-1.165 3.653-3.658 3.653z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAutenticationSuccessLight;
