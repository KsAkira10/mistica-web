'use client';
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

const IconTachometerLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.195 5.862 19.952 8.11A10.6 10.6 0 0 1 22 14.419c0 1.771-.485 3.433-1.532 5.224a.72.72 0 0 1-.612.357.7.7 0 0 1-.37-.11.766.766 0 0 1-.238-1.023c.905-1.553 1.326-2.967 1.326-4.453a9.14 9.14 0 0 0-1.408-4.89l-4.019 7.267-.02.033q-.01.015-.02.033-.157.223-.348.424a3.8 3.8 0 0 1-2.757 1.186 3.8 3.8 0 0 1-2.756-1.186c-1.518-1.581-1.518-4.157 0-5.738.132-.133.27-.257.407-.362q.027-.021.064-.043l4.187-2.514a5.5 5.5 0 0 0-1.902-.348c-3.15 0-5.714 2.753-5.714 6.138 0 1.634.645 3.077 1.91 4.286.293.281.312.748.047 1.052a.696.696 0 0 1-1.01.048c-1.55-1.481-2.373-3.343-2.373-5.386 0-4.21 3.2-7.628 7.14-7.628 1.216 0 2.377.328 3.41.933l1.28-.767a8.3 8.3 0 0 0-4.694-1.466c-4.727 0-8.572 4.004-8.572 8.928 0 1.49.42 2.905 1.326 4.453.206.352.1.81-.238 1.023a.7.7 0 0 1-.983-.247C2.49 17.848 2 16.19 2 14.419 2 8.671 6.49 4 12.002 4c2.277 0 4.375.8 6.057 2.138l2.163-1.29a.69.69 0 0 1 .86.119.77.77 0 0 1 .113.895m-7.451 10.371a2 2 0 0 0 .187-.219l4.7-8.5-8.16 4.89a2 2 0 0 0-.215.196c-.96 1-.96 2.633 0 3.633s2.523 1 3.488 0"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22 14.422c0 .962-.128 1.915-.375 2.834a.35.35 0 0 1-.439.258.37.37 0 0 1-.246-.458 10 10 0 0 0 .347-2.634 9.9 9.9 0 0 0-1.956-5.935l-4.488 8.126a3.398 3.398 0 0 1-.334.414 3.45 3.45 0 0 1-2.5 1.077 3.46 3.46 0 0 1-2.504-1.076c-1.38-1.439-1.38-3.778 0-5.216a3 3 0 0 1 .397-.348l5.014-3.01a6.2 6.2 0 0 0-2.911-.734c-3.542 0-6.426 3.006-6.426 6.697 0 1.868.763 3.668 2.093 4.935a.38.38 0 0 1 .023.524.34.34 0 0 1-.265.12.35.35 0 0 1-.243-.1 7.61 7.61 0 0 1-2.326-5.483c0-4.106 3.204-7.44 7.139-7.44 1.303 0 2.55.366 3.638 1.038l-.443.266 2.495-1.495a9 9 0 0 0-5.695-2.039c-5.118 0-9.282 4.34-9.282 9.674 0 1.772.466 3.511 1.344 5.016a.38.38 0 0 1-.12.51.34.34 0 0 1-.182.052.35.35 0 0 1-.306-.18A10.7 10.7 0 0 1 2 14.421C2 8.678 6.484 4 12 4c2.413 0 4.63.896 6.357 2.386l2.034-1.219a.34.34 0 0 1 .43.057.38.38 0 0 1 .055.448l-1.17 2.12A10.65 10.65 0 0 1 22 14.422m-.718 4.835c0 .41-.32.743-.712.743-.394 0-.713-.333-.713-.743s.32-.743.713-.743.712.333.712.743m-11.014-7.16a2 2 0 0 0-.265.244c-1.102 1.148-1.102 3.015 0 4.163a2.747 2.747 0 0 0 3.994 0q.13-.134.233-.277l5.37-9.726z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22 14.77C22 8.378 18.54 5 11.997 5 5.457 5 2 8.38 2 14.77c0 1.468.185 2.796.552 3.943A.42.42 0 0 0 2.95 19h18.091c.16 0 .305-.087.376-.228l.022-.045a.4.4 0 0 0 .023-.059c.356-1.136.538-2.45.538-3.898m-.834 0c0 1.263-.145 2.41-.43 3.414H3.264c-.282-1.004-.427-2.151-.427-3.414 0-5.942 3.082-8.954 9.163-8.954s9.166 3.012 9.166 8.954M12 16.702a.875.875 0 0 1-.885-.866c0-.475.396-.863.885-.863a.88.88 0 0 1 .626.253l-.703.202h-.003a.41.41 0 0 0-.281.506.42.42 0 0 0 .518.276l.691-.197a.87.87 0 0 1-.848.69m1.474-1.712c-.31-.515-.87-.83-1.474-.83-.948 0-1.719.754-1.719 1.679s.768 1.676 1.716 1.676 1.719-.754 1.719-1.679q0-.02-.005-.037-.004-.017-.004-.033l6.116-1.752h.006a.403.403 0 0 0 .279-.504v-.003a.414.414 0 0 0-.515-.272zm-1.488-6.61a.414.414 0 0 1-.419-.407v-.827c0-.225.188-.408.416-.408.23 0 .418.183.418.408v.827a.41.41 0 0 1-.415.407M7.304 9.491l-.6-.585a.426.426 0 0 0-.589 0l-.006.006a.4.4 0 0 0 .006.57l.6.586a.426.426 0 0 0 .59 0l.005-.006a.4.4 0 0 0-.005-.57M4.9 13.693c.23 0 .415.183.415.408a.413.413 0 0 1-.415.408h-.848a.413.413 0 0 1-.416-.408c0-.225.188-.408.416-.408zm11.838-3.586a.43.43 0 0 0 .592 0l.598-.585.005-.005a.4.4 0 0 0-.005-.571.42.42 0 0 0-.59 0l-.6.585-.003.003c-.159.16-.159.416.003.573"
                />
            </svg>
        );
    }
};

export default IconTachometerLight;
