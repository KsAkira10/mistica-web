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

const IconTicketsRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path fill={fillColor} d="m11.008 9.594-1.414 1.414-.884-.884 1.414-1.414z" />
                <path
                    fill={fillColor}
                    d="m6.372 15.918 4.948 4.947a3.86 3.86 0 0 0 5.456.002l4.091-4.09a3.86 3.86 0 0 0-.002-5.458l-4.947-4.947-3.325.766.767-3.324-.683-.683A3.86 3.86 0 0 0 7.22 3.13L3.13 7.22a3.86 3.86 0 0 0 .001 5.457l.683.683 3.324-.767zm-2.164-3.932-.193-.193a2.61 2.61 0 0 1-.002-3.689l4.091-4.091a2.61 2.61 0 0 1 3.69.002l.192.193-.61 2.65a1.25 1.25 0 0 0 1.498 1.499l2.65-.611 4.458 4.457a2.61 2.61 0 0 1 .002 3.69l-4.092 4.09a2.61 2.61 0 0 1-3.689-.002l-4.457-4.457.61-2.65a1.25 1.25 0 0 0-1.498-1.499z"
                />
            </svg>
        );
    } else if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.1 2 6.508 4.712l.408.464c.148.168.328.452.328.84a1.293 1.293 0 0 1-2.096 1.008l-.488-.38L2 9.424 14.7 22l2.7-2.672-.384-.472a1.27 1.27 0 0 1-.292-.8c0-.708.584-1.284 1.3-1.284.368 0 .64.156.808.292l.476.38L22 14.78zM4.848 8.416c.344.156.716.24 1.1.24 1.468 0 2.664-1.184 2.664-2.64 0-.424-.108-.84-.308-1.216l.824-.86 2.9 2.872-5.368 5.312-2.752-2.728zm14.312 7.256a2.65 2.65 0 0 0-1.136-.256c-1.468 0-2.664 1.184-2.664 2.64 0 .392.088.776.26 1.124l-.916.908-7.076-7.008 5.368-5.312 7.076 7.008z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.015 21.79c.126.137.3.21.479.21a.68.68 0 0 0 .483-.21l11.35-11.924a.735.735 0 0 0 0-1.005l-2.294-2.41a.673.673 0 0 0-.962 0 .55.55 0 0 1-.784 0 .6.6 0 0 1 0-.822.74.74 0 0 0 0-1.01L14.993 2.21a.65.65 0 0 0-.958 0L2.68 14.14a.735.735 0 0 0 0 1.005l2.295 2.409a.66.66 0 0 0 .962 0 .534.534 0 0 1 .784 0c.104.11.16.256.16.411a.6.6 0 0 1-.16.412.736.736 0 0 0 0 1.006zm.479-1.513-1.42-1.49c.114-.256.17-.54.17-.827 0-.535-.2-1.042-.561-1.422a1.86 1.86 0 0 0-2.138-.41l-1.42-1.49 10.393-10.91 1.415 1.485a2.08 2.08 0 0 0 .392 2.244 1.86 1.86 0 0 0 2.142.416l1.42 1.49zm1.106-4.36a.5.5 0 0 1-.166-.028.53.53 0 0 1-.34-.452l-.187-2.057-1.71-.818a.55.55 0 0 1-.301-.493.53.53 0 0 1 .314-.485l1.789-.79.222-1.993a.53.53 0 0 1 .357-.448.495.495 0 0 1 .536.164l1.24 1.518 1.907-.384c.2-.041.4.046.518.224a.55.55 0 0 1 .013.585l-.992 1.677.931 1.82a.55.55 0 0 1-.043.575.5.5 0 0 1-.518.197l-1.872-.44-1.328 1.459a.5.5 0 0 1-.37.169m-.005-3.387a.54.54 0 0 1 .296.434l.11 1.198.752-.832a.49.49 0 0 1 .48-.15l1.066.25-.54-1.06a.56.56 0 0 1 .018-.534l.53-.905-1.057.214a.49.49 0 0 1-.483-.178l-.675-.832-.122 1.084a.53.53 0 0 1-.31.43l-.988.442z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.015 21.79c.126.137.3.21.479.21a.68.68 0 0 0 .483-.21l11.35-11.924a.735.735 0 0 0 0-1.005l-2.294-2.41a.673.673 0 0 0-.962 0 .55.55 0 0 1-.784 0 .6.6 0 0 1 0-.822.74.74 0 0 0 0-1.01L14.993 2.21a.65.65 0 0 0-.958 0L2.68 14.14a.735.735 0 0 0 0 1.005l2.295 2.409a.66.66 0 0 0 .962 0 .534.534 0 0 1 .784 0c.104.11.16.256.16.411a.6.6 0 0 1-.16.412.736.736 0 0 0 0 1.006zm.479-1.513-1.42-1.49c.114-.256.17-.54.17-.827 0-.535-.2-1.042-.561-1.422a1.86 1.86 0 0 0-2.138-.41l-1.42-1.49 10.393-10.91 1.415 1.485a2.08 2.08 0 0 0 .392 2.244 1.86 1.86 0 0 0 2.142.416l1.42 1.49zm1.106-4.36a.5.5 0 0 1-.166-.028.53.53 0 0 1-.34-.452l-.187-2.057-1.71-.818a.55.55 0 0 1-.301-.493.53.53 0 0 1 .314-.485l1.789-.79.222-1.993a.53.53 0 0 1 .357-.448.495.495 0 0 1 .536.164l1.24 1.518 1.907-.384c.2-.041.4.046.518.224a.55.55 0 0 1 .013.585l-.992 1.677.931 1.82a.55.55 0 0 1-.043.575.5.5 0 0 1-.518.197l-1.872-.44-1.328 1.459a.5.5 0 0 1-.37.169m-.005-3.387a.54.54 0 0 1 .296.434l.11 1.198.752-.832a.49.49 0 0 1 .48-.15l1.066.25-.54-1.06a.56.56 0 0 1 .018-.534l.53-.905-1.057.214a.49.49 0 0 1-.483-.178l-.675-.832-.122 1.084a.53.53 0 0 1-.31.43l-.988.442z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.84 4.222a2.07 2.07 0 0 0-2.07-2.062h-2.191a1.185 1.185 0 0 0-1.18 1.022.68.68 0 0 1-1.344 0 1.18 1.18 0 0 0-1.176-1.022h-2.194c-.989 0-1.84.703-2.025 1.678q-.045.017-.09.032a1 1 0 0 0-.162.066l-1.703.952c-.49.272-.703.866-.496 1.387a.546.546 0 0 1-.24.658.55.55 0 0 1-.69-.137 1.116 1.116 0 0 0-1.448-.3l-1.703.953a1.89 1.89 0 0 0-.902 1.145 1.88 1.88 0 0 0 .17 1.446L8.51 20.872a1.9 1.9 0 0 0 1.148.901 1.9 1.9 0 0 0 1.451-.173l1.717-.961c.174-.095.308-.235.407-.4h.663a1.196 1.196 0 0 0 1.168-.964.678.678 0 0 1 1.328 0c.11.56.602.963 1.168.963h2.21c1.14 0 2.068-.921 2.07-2.061zm-1.222 0v13.955c0 .468-.38.846-.849.843l-2.179.02a1.9 1.9 0 0 0-1.863-1.527c-.905 0-1.686.644-1.832 1.507h-2.21a.85.85 0 0 1-.849-.846v-9.97l.001-.032v-3.95a.85.85 0 0 1 .848-.846l2.163-.02c.143.93.94 1.616 1.88 1.62.938 0 1.744-.698 1.85-1.6h2.191a.85.85 0 0 1 .849.846m-9.44 15.944-.666.375a.697.697 0 0 1-.942-.26L3.458 9.443V9.44a.686.686 0 0 1 .266-.933l1.634-.913a1.78 1.78 0 0 0 2.207.398 1.76 1.76 0 0 0 .807-2.087l1.246-.7v2.641l-3.933 2.202h-.003a.606.606 0 0 0-.23.826l3.978 7.05a.6.6 0 0 0 .188.191v.059a2.06 2.06 0 0 0 1.56 1.992m-1.56-4.387-2.801-4.966L9.618 9.24zm3.28-.28V6.947h5.773V15.5zm6.994-9.16a.61.61 0 0 0-.61-.608H12.29a.61.61 0 0 0-.61.608v9.768a.61.61 0 0 0 .61.608h6.992a.61.61 0 0 0 .61-.608z"
                />
            </svg>
        );
    }
};

export default IconTicketsRegular;
