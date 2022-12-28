/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCodeLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.837 5.832c0-.67-.563-1.216-1.254-1.216H3.406c-.692 0-1.255.546-1.255 1.216v12.333c0 .67.563 1.216 1.255 1.216h17.177c.692 0 1.255-.546 1.255-1.216V5.832zm-18.43-.42h17.176c.24 0 .434.187.434.42V7.84H2.972V5.832c0-.23.196-.42.434-.42zm17.176 13.17H3.406a.426.426 0 01-.434-.42V8.634h18.045v9.53c0 .232-.196.42-.434.42zM6.89 13.696L8.904 15.5c.165.148.176.4.022.563a.417.417 0 01-.302.126.432.432 0 01-.28-.107l-2.342-2.098a.395.395 0 01-.132-.294c0-.112.05-.218.135-.294l2.341-2.062a.422.422 0 01.58.028.39.39 0 01-.028.563l-2.008 1.77zm-1.117-7.01c0 .303.255.552.572.552.313 0 .568-.25.568-.552a.559.559 0 00-.568-.554.563.563 0 00-.572.554zm2.283.552a.563.563 0 01-.571-.552c0-.305.254-.554.571-.554a.56.56 0 01.571.554.563.563 0 01-.571.552zm-3.997-.552c0 .303.255.552.571.552.317 0 .572-.25.572-.552a.561.561 0 00-.572-.554.563.563 0 00-.571.554zm11.535 4.65l2.342 2.062a.393.393 0 01.002.588l-2.341 2.098a.42.42 0 01-.583-.02.391.391 0 01.022-.563l2.017-1.806-2.011-1.768a.389.389 0 01-.028-.563.422.422 0 01.58-.028zm-2.297.482a.394.394 0 00-.207-.527.418.418 0 00-.544.2l-1.899 4.108a.394.394 0 00.207.527.41.41 0 00.543-.199l1.9-4.11z"
            />
        </svg>
    );
};

export default IconCodeLight;
