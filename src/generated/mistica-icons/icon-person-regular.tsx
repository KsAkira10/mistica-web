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

const IconPersonRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.472 6.58A3.39 3.39 0 0116.5 9.676v6.61h-1.438v4.997a.717.717 0 01-.719.713.717.717 0 01-.719-.713v-6.427h1.438v-5.18c0-1.065-.908-1.965-1.981-1.965h-2.162c-1.073 0-1.981.9-1.981 1.965v5.18h1.438v6.432a.717.717 0 01-.72.713.717.717 0 01-.718-.713v-5.001H7.5V9.68c0-1.486.968-2.747 2.309-3.205a2.847 2.847 0 01-.507-1.618C9.302 3.28 10.592 2 12.182 2c1.59 0 2.88 1.28 2.88 2.857 0 .65-.221 1.244-.59 1.724zm-.857-1.727a1.44 1.44 0 00-2.88 0c0 .781.64 1.421 1.433 1.426.802 0 1.447-.64 1.447-1.426z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.258 4.637c0 1.549.936 2.476 2.499 2.476 1.568 0 2.5-.924 2.498-2.476 0-.793-.232-1.415-.686-1.849-.437-.42-1.048-.633-1.815-.633-.765 0-1.376.213-1.813.633-.453.437-.683 1.056-.683 1.849zm1.532-.98c.202-.197.527-.295.967-.295.44 0 .767.098.972.294.207.202.313.533.313.984 0 .888-.383 1.269-1.285 1.269-.897 0-1.28-.381-1.28-1.27 0-.453.106-.784.313-.983zm5.415 12.246a1.517 1.517 0 001.078-1.857L16.14 9.88a1.024 1.024 0 00-.059-.188c-.285-1.291-1.456-2.224-2.798-2.224H10.72c-1.342 0-2.515.933-2.801 2.227a.77.77 0 00-.048.145l-1.15 4.21a1.518 1.518 0 001.072 1.852c.392.11.804.059 1.162-.143l.02-.012.02-.013v4.594c0 .851.621 1.493 1.445 1.493.82 0 1.415-.628 1.415-1.493v-4.454h.28v4.454c0 .862.616 1.515 1.434 1.515.82 0 1.44-.653 1.44-1.515v-4.594a.116.116 0 00.022.013l.017.01a1.5 1.5 0 001.157.145zm-.098-1.546a.313.313 0 01-.224.384.36.36 0 01-.236-.025h-.002c-.043-.026-.115-.08-.132-.135l-.518-2.838a.616.616 0 00-.653-.493.605.605 0 00-.552.6v8.481c0 .07-.017.309-.224.309-.202 0-.218-.236-.218-.309v-5.056a.604.604 0 00-.608-.602h-1.496a.604.604 0 00-.608.602v5.056c0 .289-.143.289-.199.289-.19 0-.23-.157-.23-.289V11.85a.605.605 0 00-.554-.6.602.602 0 00-.653.493l-.507 2.787a.295.295 0 01-.143.183.302.302 0 01-.238.028.312.312 0 01-.218-.379l1.151-4.21a.73.73 0 00.056-.176 1.654 1.654 0 011.62-1.303h2.562c.782 0 1.46.55 1.616 1.303l.006.02a.59.59 0 00.053.161l1.149 4.2z"
                />
            </svg>
        );
    }
};

export default IconPersonRegular;
