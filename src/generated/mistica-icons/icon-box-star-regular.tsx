'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBoxStarRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12 2.1c-.533 0-1.003.308-1.227.785L10.24 4.01l-1.177.178a1.37 1.37 0 0 0-1.089.924c-.17.5-.042 1.052.327 1.428l.871.885-.207 1.258a1.39 1.39 0 0 0 .564 1.366c.421.3.975.33 1.425.082L12 9.558l1.043.571.002.001a1.34 1.34 0 0 0 1.426-.082c.438-.312.65-.841.564-1.366l-.204-1.266.868-.875.002-.002c.37-.377.495-.93.326-1.428a1.37 1.37 0 0 0-1.089-.924l-1.178-.179-.533-1.124A1.36 1.36 0 0 0 12 2.1m0 1.2c.054 0 .11.029.142.098l.622 1.313.007.012.003.006a.9.9 0 0 0 .218.277c.157.124.327.15.394.16h.002l1.37.208c.051.008.106.045.13.12l.001.002a.2.2 0 0 1-.044.201l-.001.001-.962.969-.006.006a.9.9 0 0 0-.226.322c-.072.189-.043.375-.035.422v.008l.002.007.232 1.443v.001a.19.19 0 0 1-.075.194h-.001a.136.136 0 0 1-.149.01l-1.286-.705-.017-.008a.716.716 0 0 0-.695.027l-1.25.685a.14.14 0 0 1-.15-.008l-.003-.002a.19.19 0 0 1-.074-.193l.234-1.423a.8.8 0 0 0-.021-.426c-.057-.162-.165-.272-.195-.302l-.004-.005-1.007-1.022a.2.2 0 0 1-.045-.2l.001-.006a.17.17 0 0 1 .131-.118l1.397-.212.01-.002.007-.001a.8.8 0 0 0 .347-.15c.139-.11.208-.25.236-.308l.001-.002.617-1.301v-.003c.032-.066.085-.095.141-.095"
            />
            <path
                fill={fillColor}
                d="M16.726 7.444a.6.6 0 1 0-.452 1.112l2.062.839-6.327 2.651-6.332-2.653 2.05-.838a.6.6 0 1 0-.454-1.11L3.882 8.83a.7.7 0 0 0-.214.142l-.002.001a1 1 0 0 0-.083.09 3 3 0 0 0-.138.184c-.096.134-.214.313-.34.509-.255.393-.557.88-.8 1.277A1.394 1.394 0 0 0 2.9 13.02l.609.289v4.243a1.4 1.4 0 0 0 .873 1.297l7.1 2.885a1.4 1.4 0 0 0 1.054 0l7.1-2.885a1.4 1.4 0 0 0 .873-1.297V13.31l.608-.289a1.394 1.394 0 0 0 .595-1.988 67 67 0 0 0-.799-1.276 15 15 0 0 0-.34-.51 3 3 0 0 0-.139-.182 1 1 0 0 0-.083-.09l-.001-.002a.7.7 0 0 0-.215-.142zm2.989 2.674q.086.128.19.29c.246.38.542.858.784 1.252a.194.194 0 0 1-.085.277l-.947.448-5.184 2.323a.2.2 0 0 1-.255-.083l-.8-1.39-.01-.017a6 6 0 0 0-.252-.351zm-.406 3.738v3.697a.2.2 0 0 1-.125.185l-6.575 2.672v-6.177l.569.99a1.4 1.4 0 0 0 1.786.58zm-7.9 6.554-6.576-2.672a.2.2 0 0 1-.124-.185v-3.697l4.344 1.947a1.4 1.4 0 0 0 1.786-.58l.57-.99zm-7.05-8.025-.946-.448a.194.194 0 0 1-.085-.277c.242-.395.538-.871.784-1.252q.105-.161.19-.29l6.56 2.749q-.129.166-.253.351l-.01.017-.8 1.39a.2.2 0 0 1-.255.083z"
            />
        </svg>
    );
};

export default IconBoxStarRegular;
