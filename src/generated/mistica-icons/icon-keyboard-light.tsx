/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconKeyboardLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M22 17.017V6.613c0-.614-.48-1.113-1.07-1.113H3.07C2.48 5.5 2 6 2 6.613v10.404c0 .613.48 1.112 1.07 1.112h13.216a.364.364 0 00.356-.37.365.365 0 00-.356-.372H3.07a.364.364 0 01-.357-.37V6.613c0-.205.16-.371.357-.371h17.856c.196 0 .356.166.356.37v10.405c0 .204-.16.37-.356.37h-.357a.364.364 0 00-.356.371c0 .205.16.371.356.371h.357c.59 0 1.074-.5 1.074-1.113zM5.57 7.73c.197 0 .357.166.357.37 0 .205-.16.372-.361.372H4.139a.364.364 0 01-.356-.371c0-.205.16-.37.356-.37H5.57zm.357 2.601c0-.204-.16-.37-.357-.37H4.14a.364.364 0 00-.357.37c0 .205.16.37.356.37h1.427a.365.365 0 00.36-.37zm-.357 1.854c.197 0 .357.167.357.371 0 .205-.16.371-.361.371H4.139a.364.364 0 01-.356-.37c0-.205.16-.372.356-.372H5.57zm2.14 3.343h8.576a.36.36 0 00.352-.37.365.365 0 00-.357-.372H7.71a.364.364 0 00-.357.371c0 .205.16.371.357.371zm1.787-2.972c0-.204-.16-.37-.356-.37H7.714a.364.364 0 00-.356.37c0 .205.16.371.356.371h1.427a.364.364 0 00.356-.37zM9.141 9.96c.196 0 .356.167.356.371 0 .205-.16.37-.356.37H7.714a.364.364 0 01-.356-.37c0-.204.16-.37.356-.37h1.427zm.356-1.86c0-.204-.16-.37-.356-.37H7.714a.364.364 0 00-.356.37c0 .205.16.372.356.372h1.427a.364.364 0 00.356-.371zm3.214 4.085c.196 0 .356.167.356.371 0 .205-.16.371-.356.371h-1.426a.364.364 0 01-.357-.37c0-.205.16-.372.357-.372h1.426zm.356-1.854c0-.204-.16-.37-.356-.37h-1.426a.364.364 0 00-.357.37c0 .205.16.37.357.37h1.426a.364.364 0 00.356-.37zm-.356-2.6c.196 0 .356.165.356.37 0 .204-.16.37-.356.37h-1.426a.364.364 0 01-.357-.37c0-.205.16-.37.357-.37h1.426zm3.931 4.825c0-.204-.16-.37-.356-.37h-1.427a.364.364 0 00-.356.37c0 .205.16.371.356.371h1.427a.364.364 0 00.356-.37zm-.356-2.596c.196 0 .356.167.356.371 0 .205-.16.37-.356.37h-1.427a.364.364 0 01-.356-.37c0-.204.16-.37.356-.37h1.427zm.356-1.86c0-.204-.16-.37-.356-.37h-1.427a.364.364 0 00-.356.37c0 .205.16.372.356.372h1.427a.364.364 0 00.356-.371zm3.214 4.085c.197 0 .357.167.357.371 0 .205-.16.371-.357.371H18.43a.364.364 0 01-.357-.37c0-.205.16-.372.357-.372h1.426zm.357-1.854c0-.204-.16-.37-.357-.37H18.43a.364.364 0 00-.357.37c0 .205.16.37.357.37h1.426a.364.364 0 00.357-.37zm-.357-2.6c.197 0 .357.165.357.37 0 .204-.16.37-.357.37H18.43a.364.364 0 01-.357-.37c0-.205.16-.37.357-.37h1.426zm-1.43 9.285c.392 0 .712.333.712.742a.726.726 0 01-.713.742c-.393 0-.713-.333-.713-.742s.32-.741.713-.741z"
            />
        </svg>
    );
};

export default IconKeyboardLight;
