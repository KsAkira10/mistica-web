/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconKeyRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.844 11.956a.599.599 0 00-.196-.434l-1.938-1.76a.63.63 0 00-.418-.159H9.973C9.463 8.76 8.433 7.9 6.357 7.9c-2.709 0-4.202 1.457-4.202 4.1 0 2.645 1.493 4.102 4.202 4.102 2.266 0 3.23-.953 3.641-1.751l.006-.011a.056.056 0 00.005-.011h4.42c.202 0 .39-.096.505-.258l.624-.877.712.9a.59.59 0 00.515.232.62.62 0 00.49-.283l.58-.908 1.04 1.014c.235.23.616.236.857.012l1.902-1.768a.604.604 0 00.19-.437zm-2.504.936l-1.168-1.138a.622.622 0 00-.953.107l-.52.818-.684-.866a.622.622 0 00-.989.025l-.919 1.292H9.603a.611.611 0 00-.568.378c0 .003-.09.227-.13.302-.372.726-1.229 1.093-2.545 1.093-2.029 0-2.975-.925-2.975-2.905 0-1.983.947-2.905 2.975-2.905 1.392 0 2.271.44 2.683 1.348.098.215.32.355.56.355h9.451l1.283 1.168-.997.928zm-11.521-.894c0-1.118-.684-1.784-1.826-1.784-1.143 0-1.827.666-1.83 1.784 0 1.1.7 1.784 1.83 1.784 1.126 0 1.826-.683 1.826-1.784zm-1.224.003c0 .448-.143.585-.602.585-.46 0-.603-.14-.603-.585 0-.451.14-.588.603-.588.462 0 .602.137.602.588z"
            />
        </svg>
    );
};

export default IconKeyRegular;
