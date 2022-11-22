/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconData100GbFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M16.3 16.944a.642.642 0 01-.645.645H14.15V16.3h1.505c.358 0 .645.287.645.645zM10.924 7.52c-.824 0-.896 1.254-.896 1.792 0 .286.036 1.792.896 1.792.61 0 .896-.896.896-1.792 0-.43-.072-1.792-.896-1.792zm5.017 7.06a.642.642 0 00-.645-.645H14.15v1.29h1.146a.642.642 0 00.645-.645zm-.358-7.06c-.824 0-.896 1.254-.896 1.792 0 .286.036 1.792.896 1.792.61 0 .896-.896.896-1.792 0-.43-.072-1.792-.896-1.792zm3.906.18v14.298H4.51V4.114C4.51 2.932 5.37 2 6.444 2h7.275c.538 0 1.147.25 1.541.645L18.952 6.3c.358.359.537.825.537 1.398zm-12.471.14l.143-.071v3.87c0 .287.251.538.538.538a.551.551 0 00.537-.538V6.981c0-.179-.071-.358-.25-.43-.144-.107-.323-.107-.502-.071l-.896.358a.513.513 0 00-.287.68c.108.288.43.431.717.323zm5.34 7.92a.551.551 0 00-.538-.537H9.85a.551.551 0 00-.538.537c0 .287.251.538.538.538h1.362a1.785 1.785 0 01-1.72 1.254A1.774 1.774 0 017.7 15.76c0-1.003.788-1.791 1.792-1.791.43 0 .788.143 1.11.394a.556.556 0 00.753-.072.555.555 0 00-.071-.752c-.502-.395-1.147-.645-1.792-.645a2.875 2.875 0 00-2.867 2.867 2.875 2.875 0 002.867 2.866 2.875 2.875 0 002.867-2.867zm.537-6.45c0-1.756-.752-2.867-1.97-2.867-1.22 0-1.972 1.075-1.972 2.867 0 1.756.753 2.867 1.971 2.867 1.183 0 1.971-1.111 1.971-2.867zm4.48 7.633c0-.537-.251-1.04-.681-1.362a1.57 1.57 0 00.322-.967 1.72 1.72 0 00-1.72-1.72h-1.72a.551.551 0 00-.537.537v4.659c0 .287.25.537.537.537h2.079c.967 0 1.72-.752 1.72-1.684zm.179-7.633c0-1.756-.753-2.867-1.971-2.867-1.219 0-1.971 1.075-1.971 2.867 0 1.756.752 2.867 1.971 2.867 1.183 0 1.971-1.111 1.971-2.867z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconData100GbFilled;
