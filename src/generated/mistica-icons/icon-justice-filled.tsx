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

const IconJusticeFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.43 9.345c.035 2.366 1.926 4.292 4.285 4.292 2.354 0 4.249-2 4.285-4.365 0-.037 0-.22-.108-.362l-3.574-6.548c-.108-.22-.252-.362-.607-.362H6.285c-.355 0-.5.147-.607.362l-3.57 6.544C2 9.052 2 9.236 2 9.268c.036 2.37 1.927 4.365 4.285 4.365s4.25-1.93 4.286-4.292c0 0 0-.183-.108-.435L7.505 3.454h3.785v17.088H5.574a.724.724 0 0 0-.716.73c0 .398.324.728.716.728h12.852c.396 0 .716-.33.716-.729a.727.727 0 0 0-.716-.729h-5.712V3.454h3.785l-2.966 5.452c-.104.256-.104.44-.104.44m-9.495-.802 2.354-4.365 2.355 4.365zm16.13.004h-4.709l2.355-4.365z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.43 9.345c.035 2.366 1.926 4.292 4.285 4.292 2.354 0 4.249-2 4.285-4.365 0-.037 0-.22-.108-.362l-3.574-6.548c-.108-.22-.252-.362-.607-.362H6.285c-.355 0-.5.147-.607.362l-3.57 6.544C2 9.052 2 9.236 2 9.268c.036 2.37 1.927 4.365 4.285 4.365s4.25-1.93 4.286-4.292c0 0 0-.183-.108-.435L7.505 3.454h3.785v17.088H5.574a.724.724 0 0 0-.716.73c0 .398.324.728.716.728h12.852c.396 0 .716-.33.716-.729a.727.727 0 0 0-.716-.729h-5.712V3.454h3.785l-2.966 5.452c-.104.256-.104.44-.104.44m-9.495-.802 2.354-4.365 2.355 4.365zm16.13.004h-4.709l2.355-4.365z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.837 14.051q.009.026.01.052c0 .918-.256 1.641-.757 2.15-.429.432-1.006.676-1.717.726a65 65 0 0 1-2.012.006c-.75-.037-1.355-.28-1.803-.728-.493-.496-.745-1.2-.76-2.082q-.003-.007-.002-.016l-.002-.03-.001-.024q.001-.033.01-.064l.01-.037q.002-.02.002-.04 0-.027.006-.055l2.224-7.367c-.916-.002-2.185-.002-3.258-.002v11.935h1.446c.792 0 1.425.235 1.882.698.476.479.717 1.157.717 2.02a.63.63 0 0 1-.619.643.1.1 0 0 1-.034-.006l-.022-.005-.02.005q-.018.006-.033.007H6.914q-.018 0-.031-.006l-.023-.006-.02.005q-.017.006-.033.007a.63.63 0 0 1-.62-.645c0-.86.242-1.54.715-2.02.457-.462 1.087-.697 1.88-.697h1.445V6.54c-1.073.002-2.342.002-3.255.002l2.221 7.367q.01.03.008.058 0 .02.004.037l.008.037q.01.03.011.064l-.001.025-.002.029q-.003.007-.002.016c-.014.883-.266 1.586-.76 2.082-.448.448-1.056.691-1.806.728a64.991 64.991 0 0 1-2.011-.006c-.712-.05-1.289-.294-1.717-.725-.505-.507-.762-1.23-.762-2.149v-.002q.001-.024.008-.047l.008-.037v-.003c.006-.055.012-.113.034-.165l2.952-7.169a1.1 1.1 0 0 0-.35.219.603.603 0 0 1-.874-.02.667.667 0 0 1 .02-.913c.437-.437 1.034-.678 1.767-.714.06-.006 3.334-.006 5.236-.006a1.4 1.4 0 0 1-.208-.165c-.285-.286-.428-.709-.428-1.255 0-.552.146-.975.428-1.26q.41-.417 1.171-.418h.146v.003q.005-.004.014-.003c.504 0 .9.14 1.17.418.284.285.427.708.427 1.26 0 .546-.143.97-.426 1.255a1.5 1.5 0 0 1-.207.165c1.899 0 5.173.003 5.232.006.737.036 1.33.277 1.768.714a.67.67 0 0 1 .016.913.596.596 0 0 1-.871.02 1.1 1.1 0 0 0-.353-.219l2.953 7.169c.017.042.023.085.029.131l.004.037zm-14.078-.593L6.051 7.792l-2.334 5.666zm10.196-5.666-1.708 5.666h4.042z"
                />
            </svg>
        );
    }
};

export default IconJusticeFilled;
