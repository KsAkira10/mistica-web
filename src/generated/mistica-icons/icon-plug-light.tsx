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

const IconPlugLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M20.892 14.66c0 .23.148.382.372.382s.372-.152.372-.381V9.72c0-2.318-1.816-4.18-4.075-4.18-2.26 0-4.075 1.862-4.075 4.18v7.598c0 1.9-1.484 3.422-3.336 3.422-1.851 0-3.335-1.522-3.335-3.422v-1.936c2.26-.189 4.075-2.166 4.075-4.521v-4.94H8.667v-3.04c0-.23-.148-.382-.372-.382s-.372.152-.372.382v3.04h-2.96v-3.04c0-.23-.148-.382-.372-.382-.223 0-.371.152-.371.382v3.04H2v4.94c0 2.396 1.816 4.332 4.075 4.52v1.937c0 2.318 1.816 4.181 4.075 4.181 2.26 0 4.076-1.863 4.076-4.18v-7.6c0-1.899 1.483-3.42 3.335-3.42 1.852 0 3.335 1.521 3.335 3.42l-.004 4.94zM2.74 10.862v-4.18h7.406v4.18c0 2.089-1.663 3.8-3.703 3.8S2.74 12.95 2.74 10.86zm18.52 6.835a.75.75 0 00.74-.76.75.75 0 00-.74-.758.75.75 0 00-.74.759.75.75 0 00.74.759z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M17.155 7.533h-.84v-3.95c0-.787-.647-1.428-1.448-1.428-.796 0-1.446.639-1.446 1.429v3.95l-3.008-.004V3.584c0-.788-.647-1.429-1.448-1.429-.798 0-1.445.639-1.445 1.429V7.53h-.687c-.546 0-.991.437-.991 1.02 0 2.82 1.227 4.288 2.336 5.04v1.27c0 .64.21 1.158.6 1.494.366.333.882.501 1.534.501h.02v4.227c0 .418.344.76.77.76h1.787a.764.764 0 00.77-.76v-4.227h.045c.647 0 1.16-.168 1.524-.501.384-.342.586-.86.586-1.496v-1.28c1.109-.753 2.336-2.213 2.336-5v-.07a.992.992 0 00-.995-.975zm.146 1.048c0 2.061-.72 3.552-2.137 4.423a.413.413 0 00-.2.353v1.504c0 .4-.103.695-.31.882-.204.188-.527.283-.955.283h-3.39c-.43 0-.753-.095-.969-.288-.213-.185-.32-.48-.32-.874v-1.499a.409.409 0 00-.198-.353c-1.414-.865-2.134-2.367-2.134-4.504 0-.078.064-.146.148-.146l10.322.006c.081 0 .149.064.149.146-.006-.003-.006.067-.006.067zm-4.487 12.428h-1.642v-4.154h1.642v4.154zM8.363 3.584a.603.603 0 011.207 0V7.53H8.363V3.584zm6.504-.597c.333 0 .605.269.605.597v3.95h-1.205l-.002-3.95c0-.328.271-.597.602-.597z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconPlugLight;
