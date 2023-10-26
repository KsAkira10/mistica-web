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

const IconWalletRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.857 6.733H16.6l-4.286-4.285a1.246 1.246 0 0 0-1.768 0L6.261 6.733H4.143A2.143 2.143 0 0 0 2 8.876V19.77a2.143 2.143 0 0 0 2.143 2.143h15.714A2.143 2.143 0 0 0 22 19.769V8.876a2.143 2.143 0 0 0-2.143-2.143Zm0 1.429a.714.714 0 0 1 .714.714v1.761h-.064L18.03 8.162h1.828Zm-13.396-.1 4.85-4.85a.18.18 0 0 1 .253 0l7.429 7.425h-1.968a.622.622 0 0 1-.036-.05l-1.893-1.89a.358.358 0 1 0-.507.508l1.429 1.428H14.41s-.018-.032-.032-.05l-.522-.528a.358.358 0 1 0-.507.507l.079.075h-1.833a2.518 2.518 0 0 0 .097-2.171c.117.023.237.035.357.035a1.714 1.714 0 1 0-1.71-1.714c-.002.12.009.24.031.357a2.525 2.525 0 0 0-2.767.536.357.357 0 1 0 .503.507 1.804 1.804 0 0 1 2.632 2.464H8.786L6.46 8.33a.179.179 0 0 1 0-.268Zm4.578-1.275a1 1 0 0 1 1.383-.922c.123.05.234.124.328.218a.978.978 0 0 1 .293.715.994.994 0 0 1-.293.714 1.025 1.025 0 0 1-1.41 0 .994.994 0 0 1-.3-.725Zm8.818 13.696H4.143a.715.715 0 0 1-.714-.714V8.876a.714.714 0 0 1 .714-.714h1.196a1.246 1.246 0 0 0 .357.91l1.565 1.565H4.857a.536.536 0 1 0 0 1.071h15.714v8.061a.714.714 0 0 1-.714.714Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.41 11.461c.79 0 1.431.659 1.431 1.47v2.889c0 .81-.644 1.47-1.431 1.47h-.087l.003 1.6c0 .678-.255 1.316-.723 1.795a2.422 2.422 0 0 1-1.75.745l-13.225.003c-.745-.005-1.4-.28-1.846-.767-.445-.488-.66-1.146-.621-1.908V5.98c0-.678.257-1.317.722-1.796a2.422 2.422 0 0 1 1.75-.745l12.337-.871a.597.597 0 0 1 .454.165c.123.118.19.28.19.454v1.395c.69.157 1.185.753 1.185 1.468v1.442c.342.129.645.322.885.583.446.487.659 1.148.62 1.919l.002 1.467h.104ZM3.368 5.98v.033c0 .317.115.616.32.854A1.505 1.505 0 0 1 5.18 5.405L16.407 4.6v-.746L4.673 4.68a1.284 1.284 0 0 0-.935.38c-.239.247-.37.572-.37.92Zm15.745 11.31H12.44c-1.507 0-2.737-1.26-2.737-2.806v-.213c0-1.55 1.227-2.807 2.737-2.807h6.658l-.003-1.498c.023-.457-.078-.802-.291-1.037-.216-.238-.546-.364-.953-.367l-13.218.003v-.008c-.454 0-.885-.135-1.266-.367v10.605c-.023.448.078.792.294 1.025.218.24.563.372.972.375l13.218-.003c.34 0 .656-.134.894-.38a1.32 1.32 0 0 0 .37-.922l-.003-1.6Zm1.52-4.358c0-.129-.1-.23-.223-.23h-7.97c-.842 0-1.526.703-1.526 1.566v.213c0 .863.686 1.566 1.527 1.566h7.969c.123.003.224-.101.224-.227v-2.888ZM5.224 6.646c-.203.003-.334.123-.334.272v.339a.144.144 0 0 1-.006.035l-.005.024 12.711.002V6.052c0-.148-.131-.271-.291-.271l-.286.02h-.003l-11.787.845Zm8.383 7.813c0-.552-.437-1-.975-1s-.972.448-.972 1c0 .551.434 1 .972 1a.988.988 0 0 0 .975-1Z"
                />
            </svg>
        );
    }
};

export default IconWalletRegular;
