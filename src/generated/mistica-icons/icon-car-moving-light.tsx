/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCarMovingLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.308 12.032c.997 1.661.364 2.76-.11 3.11a.397.397 0 01-.24.08H18.72c-.157 1.06-.91 1.7-2.05 1.7-1.14 0-1.894-.64-2.05-1.7H11.6c-.157 1.057-.91 1.695-2.051 1.695-1.137 0-1.89-.638-2.048-1.695H5.986a.412.412 0 01-.398-.319c-.008-.033-.201-.851-.129-2.09-.008-.882.558-2.448 1.81-3.73.888-.914 2.434-2 4.745-2 3.742 0 5.566 2.215 6.028 2.873.594.085 2.3.463 3.266 2.076zm-.51 2.356c.171-.205.49-.79-.187-1.922-.933-1.554-2.813-1.7-2.832-1.7a.415.415 0 01-.325-.202c-.065-.109-1.622-2.65-5.44-2.65-2.028 0-3.384.956-4.162 1.754-1.04 1.067-1.577 2.4-1.572 3.165-.04.692.009 1.233.05 1.555h1.171c.152-1.067.908-1.714 2.05-1.714 1.146 0 1.9.647 2.054 1.714h3.02c.154-1.062.907-1.709 2.05-1.709 1.143 0 1.896.644 2.05 1.709h2.073zm-4.126 1.7c.838 0 1.264-.431 1.264-1.288 0-.855-.426-1.289-1.264-1.289-.84 0-1.263.434-1.263 1.289 0 .857.423 1.288 1.263 1.288zm-5.86-1.294c0-.854-.425-1.289-1.263-1.289-.838 0-1.263.435-1.263 1.289 0 .854.425 1.288 1.263 1.288.838 0 1.263-.43 1.263-1.288zm-6.03-1.185a.413.413 0 00-.41-.417h-1.34a.415.415 0 00-.41.417c-.002.23.18.415.41.418h1.342a.415.415 0 00.409-.418zm-.183-2.501c.227 0 .41.187.41.417 0 .23-.185.417-.41.417H2.56a.411.411 0 01-.409-.417v-.003c0-.23.182-.417.41-.417 0 .003 2.038.003 2.038.003zm.93-1.642a.413.413 0 00-.409-.417H3.538a.415.415 0 00-.41.417.413.413 0 00.41.418H5.12a.415.415 0 00.41-.418z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCarMovingLight;
