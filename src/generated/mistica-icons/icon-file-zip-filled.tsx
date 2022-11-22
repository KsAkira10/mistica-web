/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFileZipFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M8.942 11.41h.846v3.703h-.846V11.41zm-3.459 3.207l1.798-2.582H5.536v-.622H8.32v.518l-1.77 2.56h1.781v.622H5.483v-.496zm6.387-3.207h-1.278v3.703h.846v-1.277h.597c.487 0 .823-.115 1.039-.359.185-.207.277-.504.277-.899s-.095-.68-.297-.866c-.238-.22-.605-.302-1.185-.302zm-.01 1.793v.002h-.416v-1.182h.394c.261 0 .418.037.522.13.098.092.14.24.14.439 0 .216-.048.372-.146.47-.11.101-.221.14-.493.14z"
                fill={fillColor}
            />
            <path
                d="M21.578 7.53c.17.171.263.39.263.625V20.46c0 .751-.644 1.384-1.409 1.384H8.253c-.75 0-1.409-.647-1.409-1.384l.034-2.773h-2.3a2.432 2.432 0 01-2.423-2.426V11.17a2.426 2.426 0 012.42-2.426h2.266V3.54c0-.726.673-1.384 1.41-1.384h7.414c.23 0 .445.087.61.244l5.303 5.131zm-5.577-3.706V5.59c0 .658.216 1.213.622 1.608.414.4.997.61 1.692.61h1.804L16 3.825zM4.575 16.471h9.846a1.21 1.21 0 001.207-1.21v-4.095c0-.667-.54-1.21-1.207-1.21H4.575c-.666 0-1.207.54-1.207 1.21v4.095c0 .667.54 1.21 1.207 1.21z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileZipFilled;
