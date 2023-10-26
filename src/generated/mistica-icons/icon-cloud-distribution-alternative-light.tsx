/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCloudDistributionAlternativeLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.29 13.464h-2.5c-.215 0-.357.145-.357.365s.142.365.357.365h2.5c2.213 0 3.927-1.754 3.927-4.018s-1.787-4.093-4-4.093h-.21c-.252-2.011-1.93-3.583-4-3.583-2.071 0-3.749 1.572-3.964 3.616h-.251c-2.213-.038-4 1.829-4 4.055 0 2.227 1.714 4.018 3.927 4.018h3.927v2.96c-.892.146-1.61.88-1.751 1.792H6.25c-.178-1.024-1.037-1.828-2.107-1.828-1.18 0-2.144.986-2.144 2.193S2.965 21.5 4.144 21.5c1.07 0 1.93-.805 2.107-1.829h3.644c.178 1.024 1.038 1.829 2.107 1.829 1.07 0 1.93-.805 2.108-1.829h5.037c.215 0 .357-.145.357-.365s-.142-.365-.357-.365H14.11c-.142-.912-.86-1.646-1.751-1.791v-5.22c.823-.183 1.426-.88 1.426-1.754 0-.987-.786-1.83-1.787-1.83-1.002 0-1.788.805-1.788 1.83 0 .88.608 1.571 1.426 1.754v1.534H7.71c-1.82 0-3.214-1.427-3.214-3.288 0-1.862 1.463-3.363 3.287-3.363a3.23 3.23 0 0 1 1.82.547c.178.107.392.075.498-.108.105-.182.073-.402-.106-.51a3.791 3.791 0 0 0-1.248-.547c.179-1.679 1.573-2.96 3.25-2.96 1.82 0 3.287 1.496 3.287 3.362 0 .328-.036.623-.141.95-.073.182.073.402.251.44h.105c.142 0 .284-.108.357-.258a6.63 6.63 0 0 0 .14-.89l.002-.022h.214c1.82 0 3.287 1.497 3.287 3.364.005 1.861-1.39 3.283-3.209 3.283ZM4.144 20.775c-.786 0-1.426-.66-1.426-1.46 0-.8.644-1.459 1.426-1.459.782 0 1.426.66 1.426 1.46 0 .8-.64 1.459-1.426 1.459Zm7.858-.005c-.782 0-1.426-.66-1.426-1.46 0-.799.644-1.458 1.426-1.458.782 0 1.426.654 1.426 1.459s-.644 1.46-1.426 1.46Zm-1.07-10.594c0-.585.467-1.095 1.07-1.095.604 0 1.07.477 1.07 1.095 0 .585-.466 1.094-1.07 1.094-.608-.032-1.07-.51-1.07-1.094Zm9.642 9.172c0-.402.32-.73.713-.73a.72.72 0 0 1 .713.73c0 .403-.32.73-.713.73a.722.722 0 0 1-.713-.73Z"
            />
        </svg>
    );
};

export default IconCloudDistributionAlternativeLight;
