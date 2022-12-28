/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconEmailSendRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.204 2.5l-7.3 7.664L14.7 21.5l7.3-7.664L11.204 2.5zm7.615 10.188l-5.141-1.45-1.381-5.398 6.522 6.848zM10.93 4.969l1.763 6.892a.57.57 0 00.39.411l6.565 1.85-4.948 5.196-8.718-9.154L10.93 4.97zm.274 14.28c0 .425-.33.772-.736.772H4.945c-.405 0-.735-.347-.735-.772 0-.426.33-.772.735-.772h5.523c.406 0 .736.346.736.772zm-8.469-2.32h4.048c.405 0 .735-.347.735-.773 0-.425-.33-.772-.735-.772H2.735c-.405 0-.735.347-.735.772 0 .426.33.772.735.772z"
            />
        </svg>
    );
};

export default IconEmailSendRegular;
