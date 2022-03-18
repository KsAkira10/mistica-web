/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPersonRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.972 6.58A3.39 3.39 0 0117 9.676v6.61h-1.438v4.997a.717.717 0 01-.719.713.717.717 0 01-.719-.713v-6.427h1.438v-5.18c0-1.065-.908-1.965-1.981-1.965h-2.162c-1.073 0-1.981.9-1.981 1.965v5.18h1.438v6.432a.717.717 0 01-.72.713.717.717 0 01-.718-.713v-5.001H8V9.68c0-1.486.968-2.747 2.309-3.205a2.847 2.847 0 01-.507-1.618C9.802 3.28 11.092 2 12.682 2c1.59 0 2.88 1.28 2.88 2.857 0 .65-.221 1.244-.59 1.724zm-.857-1.727a1.44 1.44 0 00-2.88 0c0 .781.64 1.421 1.433 1.426.802 0 1.447-.64 1.447-1.426z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.278 4.642c0 1.549.935 2.476 2.498 2.476 1.57 0 2.502-.924 2.5-2.476 0-.793-.233-1.415-.687-1.849-.437-.42-1.048-.633-1.815-.633-.765 0-1.376.213-1.813.633-.453.437-.683 1.056-.683 1.849zm1.532-.98c-.207.198-.314.529-.314.983 0 .888.384 1.269 1.28 1.269.902 0 1.286-.381 1.286-1.27 0-.45-.106-.78-.313-.983-.205-.196-.533-.294-.973-.294-.44 0-.764.098-.966.294zm5.415 12.246a1.517 1.517 0 001.078-1.857L16.16 9.886a1.031 1.031 0 00-.058-.188c-.286-1.291-1.457-2.224-2.799-2.224H10.74c-1.342 0-2.515.933-2.801 2.227a.77.77 0 00-.048.145l-1.15 4.21a1.518 1.518 0 001.072 1.852 1.52 1.52 0 001.182-.155l.02-.013v4.594c0 .851.621 1.493 1.445 1.493.82 0 1.415-.628 1.415-1.493V15.88h.28v4.454c0 .862.616 1.515 1.434 1.515.82 0 1.44-.653 1.44-1.515V15.74a.116.116 0 00.022.013l.017.01a1.5 1.5 0 001.157.145zm-.098-1.546a.313.313 0 01-.224.383.36.36 0 01-.237-.024h-.002c-.041-.026-.114-.08-.131-.135l-.518-2.838a.616.616 0 00-.653-.493.605.605 0 00-.552.6v8.482c0 .07-.017.308-.224.308-.202 0-.218-.236-.218-.308V15.28a.604.604 0 00-.608-.603h-1.496a.604.604 0 00-.608.602v5.057c0 .288-.143.288-.199.288-.19 0-.23-.157-.23-.288v-8.482a.605.605 0 00-.554-.6.602.602 0 00-.653.493l-.507 2.787a.295.295 0 01-.143.182.302.302 0 01-.238.028.311.311 0 01-.218-.378l1.151-4.21a.73.73 0 00.056-.176 1.654 1.654 0 011.62-1.303h2.562a1.651 1.651 0 011.622 1.324l.006.02a.59.59 0 00.047.14l1.149 4.2z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconPersonRegular;
