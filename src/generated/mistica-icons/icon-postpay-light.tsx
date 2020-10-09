/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconPostpayLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M14.112 2.156c1.02 0 1.762.25 2.269.762.499.507.742 1.241.742 2.25v.265h.535c.025 0 .05.004.073.01l-.073-.01a.278.278 0 01.182.068.111.111 0 01.017.014l2.731 2.73.016.02.011.014-.027-.033a.276.276 0 01.052.07l.007.018a.193.193 0 01.014.042.332.332 0 01.008.069v6.784c0 .367-.226.597-.593.597h-2.953v2.997c0 1.036-.243 1.781-.745 2.28-.496.493-1.238.731-2.266.731h-7.1c-1.029 0-1.771-.238-2.267-.731-.501-.499-.745-1.244-.745-2.28V5.167c0-1.028.24-1.767.74-2.266.498-.498 1.24-.745 2.271-.745h7.101zm-.003.56H7.011c-.874 0-1.487.191-1.877.58-.389.39-.574 1-.574 1.871v13.656c0 1.742.709 2.45 2.451 2.45h7.101c1.74 0 2.451-.708 2.451-2.45v-2.998h-2.947c-.38 0-.608-.229-.608-.613V6.04c0-.373.233-.605.608-.605h2.947v-.267c0-.854-.19-1.462-.583-1.857-.397-.4-1.008-.594-1.87-.594zm-3.552 15.11c.505 0 .832.266.832.834 0 .275-.075.477-.21.614-.145.148-.358.221-.622.221-.263 0-.476-.073-.621-.221-.135-.137-.21-.342-.21-.614 0-.568.327-.834.831-.834zm6.821-11.833h-3.762c-.014 0-.03 0-.045.004l-.002.02v9.195c0 .017 0 .034.002.05a.227.227 0 00.045.003h6.457c.011 0 .022 0 .033-.002.003-.012.003-.023.003-.034V8.724h-.812c-.622 0-1.1-.164-1.429-.492-.327-.328-.49-.807-.49-1.426v-.813zm1.378 7.368a.28.28 0 01.28.28.28.28 0 01-.28.28h-3.823a.28.28 0 01-.28-.28.28.28 0 01.28-.28h3.823zm0-1.639a.28.28 0 01.28.28.28.28 0 01-.28.28h-3.823a.28.28 0 01-.28-.28.28.28 0 01.28-.28h3.823zm0-1.639a.28.28 0 01.28.28.28.28 0 01-.28.28h-3.823a.28.28 0 01-.28-.28.28.28 0 01.28-.28h3.823zm.958-1.919l-1.776-1.773v.415c0 .938.42 1.359 1.359 1.359h.417z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPostpayLight;
