/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBeachUmbrellaRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.197 2.398c1.778.437 3.406 1.46 4.834 3.033.303.331.443.776.393 1.222-.07.476-.342.876-.745 1.123l-7.07 4.266 5.22 8.89.01.018a.596.596 0 0 1-.242.81.626.626 0 0 1-.846-.225l-5.196-8.86-6.849 4.135a1.695 1.695 0 0 1-.845.232c-.155 0-.317-.025-.49-.076-.468-.16-.821-.481-.99-.893-.809-1.955-1.013-3.832-.61-5.574.538-2.398 2.185-4.48 4.88-6.185L7.32 3.75l-.004-.007-.004-.007a.598.598 0 0 1 .238-.81.627.627 0 0 1 .846.224l.313.538c2.639-1.423 5.152-1.863 7.488-1.291Zm3.826 4.35a.352.352 0 0 0 .17-.252.345.345 0 0 0-.086-.258c-1.266-1.392-2.68-2.288-4.21-2.664-1.353-.33-2.79-.26-4.294.196 1.93.233 4.462 1.157 6.947 3.869l1.473-.891ZM9.466 4.983s3.526 6.009 3.523 6.009l4.49-2.709c-3.268-3.46-6.582-3.496-8.013-3.3Zm-1.003.72c-.818 1.322-2.104 4.305-.507 8.328 0 0 3.983-2.404 3.98-2.404L8.463 5.703ZM5.059 15.782l1.83-1.107c-1.437-3.45-.972-6.263-.233-8.11-1.426 1.247-2.33 2.654-2.678 4.2-.347 1.504-.16 3.137.552 4.86a.34.34 0 0 0 .219.193c.173.05.224.017.293-.026l.017-.01Z"
            />
        </svg>
    );
};

export default IconBeachUmbrellaRegular;
