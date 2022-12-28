/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconHandRightLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.264 17.395c.079.23.118.49.118.773 0 1.258-.79 2.036-2.064 2.036H5.32c-.969 0-1.745-.271-2.3-.81-.557-.54-.865-1.377-.865-2.36V9.245c0-.781.742-1.126 1.062-1.271.298-.137 1.265-.614 2.396-1.171l.08-.04.424-.208C7.905 5.678 10 4.649 11.34 4.019c.851-.403 1.74-.24 2.26.41.267.327.398.728.398 1.13 0 .421-.146.847-.431 1.208-.292.364-.695.67-1.272 1.009l7.429.005c1.347.087 2.117.863 2.117 2.13 0 1.316-.829 2.133-2.162 2.133h-2.902c.059.208.09.438.09.684 0 1.003-.505 1.703-1.353 1.944.075.232.117.493.117.776 0 1.005-.51 1.709-1.367 1.947zm-10.67 1.417c.399.387.981.58 1.73.58l6.99-.003c.824 0 1.242-.412 1.242-1.224 0-.19-.026-.367-.076-.518a.806.806 0 01.056-.639.82.82 0 01.504-.4c.51-.143.768-.535.768-1.166 0-.193-.025-.37-.076-.52a.818.818 0 01.555-1.04c.504-.143.759-.535.759-1.162 0-.171-.02-.328-.059-.465a.823.823 0 01-.03-.219.818.818 0 01.82-.812h2.902c.877 0 1.339-.457 1.339-1.32 0-.529-.137-1.238-1.348-1.316h-7.375a.823.823 0 01-.793-.6.81.81 0 01.373-.915c.527-.309.84-.552 1.047-.813a1.12 1.12 0 00.255-.703.987.987 0 00-.218-.625c-.277-.347-.765-.414-1.266-.179-1.448.678-3.77 1.821-5.636 2.74a184.64 184.64 0 01-2.496 1.218c-.42.193-.585.345-.585.535v7.787c0 .762.221 1.392.619 1.78z"
            />
        </svg>
    );
};

export default IconHandRightLight;
