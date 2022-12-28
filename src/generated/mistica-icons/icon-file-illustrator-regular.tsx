/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFileIllustratorRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.177 11.318h-.955l-1.277 3.804h.829l.294-.955h1.235l.317.955h.93l-1.373-3.804zm-.498.95l.417 1.269h-.823l.395-1.27h.01zm2.325-.95h.868v3.804h-.868v-3.804z"
            />
            <path
                fill={fillColor}
                d="M21.794 7.912c.03.073.047.154.047.238v12.306c0 .75-.644 1.383-1.409 1.383H8.25c-.75 0-1.409-.647-1.409-1.383l.034-2.774h-2.3a2.427 2.427 0 01-2.42-2.425v-4.093a2.427 2.427 0 012.42-2.426h2.266V3.534c0-.726.673-1.384 1.41-1.384h7.414c.232 0 .448.09.616.25l5.297 5.126c.11.109.174.243.216.386zm-1.362 12.712c.098 0 .194-.096.194-.168V9.02h-2.311c-1.014 0-1.891-.33-2.535-.952-.65-.628-.992-1.487-.992-2.482V3.37H8.253c-.073 0-.188.109-.193.168v5.201h6.364c1.336 0 2.42 1.09 2.42 2.426v4.093a2.427 2.427 0 01-2.42 2.425h-6.33l-.034 2.78c0 .05.1.159.193.159h12.18v.003zM3.368 15.258c0 .667.54 1.21 1.207 1.21h9.846a1.21 1.21 0 001.207-1.21v-4.092c0-.667-.54-1.21-1.207-1.21H4.575a1.21 1.21 0 00-1.207 1.21v4.092zM16.004 3.822v1.765c0 .658.215 1.213.622 1.608.414.4.997.61 1.691.61h1.802l-4.115-3.983z"
            />
        </svg>
    );
};

export default IconFileIllustratorRegular;
