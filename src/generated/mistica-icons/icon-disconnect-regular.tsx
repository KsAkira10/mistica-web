/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDisconnectRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 9.536c0-4.756-2.63-7.381-7.39-7.381-3.436 0-5.775 1.375-6.795 3.941H5.203c-.986 0-1.723.27-2.264.81-.523.532-.784 1.263-.784 2.238v9.65c0 1 .26 1.74.793 2.266.535.526 1.269.784 2.255.784h4.84c.986 0 1.731-.26 2.255-.784.535-.527.793-1.266.793-2.266v-1.978c.434.05.885.084 1.36.084 4.76 0 7.39-2.616 7.39-7.364zm-7.39 6.115c-.484 0-.924-.034-1.358-.087V9.147c0-.992-.26-1.726-.784-2.258-.535-.535-1.269-.793-2.263-.793H9.018c.919-1.781 2.74-2.692 5.437-2.692 4.064 0 6.134 2.065 6.134 6.132 0 4.056-2.07 6.115-6.137 6.115zm-2.613 3.143c0 .641-.131 1.098-.422 1.383-.286.275-.734.418-1.37.418H5.203c-.636 0-1.087-.143-1.37-.418-.291-.285-.426-.742-.426-1.383v-9.65c0-.625.135-1.073.426-1.364.294-.294.734-.435 1.37-.435h4.84c.644 0 1.095.143 1.378.426.283.283.418.734.418 1.373v9.65zm-4.215-.939c.512 0 .818.308.818.821 0 .252-.07.45-.213.597-.143.145-.353.224-.605.224s-.462-.079-.605-.224c-.143-.146-.213-.345-.213-.597 0-.515.305-.82.818-.82zm6.594-7.694l2.08 2.075a.642.642 0 00.446.185.613.613 0 00.448-.185.626.626 0 00-.005-.882l-1.9-1.894V6.906a.628.628 0 00-1.254 0v2.812c0 .168.067.325.185.443z"
            />
        </svg>
    );
};

export default IconDisconnectRegular;
