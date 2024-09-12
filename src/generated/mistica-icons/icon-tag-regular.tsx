'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTagRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m17.269 17.001-3.481-6.962-1.105-.415c-.046-.832-.31-1.641-.867-2.65-.293-.532-1.46-2.582-1.788-3.16V2.677a.677.677 0 0 0-1.354 0v5.445l-1.112-.417L6 13.95l3.474 6.949a1.996 1.996 0 0 0 2.675.891l4.229-2.115c.475-.237.83-.647.998-1.153a1.98 1.98 0 0 0-.107-1.521m-7.241-8.398v-2.05c.263.466.494.876.603 1.074.341.618.517 1.08.611 1.457l-1.217-.456q.002-.012.003-.025m6.065 9.491a.64.64 0 0 1-.321.372l-4.228 2.114a.64.64 0 0 1-.86-.286l-3.25-6.501 1.072-4.29 2.756 1.033c-.158.665-.54 1.115-.89 1.115a.676.676 0 0 0 0 1.353c.999 0 1.834-.816 2.166-1.99l.278.105 3.243 6.487a.64.64 0 0 1 .034.488"
                />
            </svg>
        );
    } else if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.364 2.208a.654.654 0 0 1 .956 0 .73.73 0 0 1-.004 1.004L20.16 4.425v9.06c0 .568-.207 1.1-.592 1.504l-6.085 6.389a1.97 1.97 0 0 1-1.432.622c-.52 0-1.039-.209-1.433-.622l-7.555-7.934c-.381-.4-.593-.936-.593-1.504s.208-1.1.593-1.504l6.089-6.392c.38-.4.891-.623 1.432-.623h8.624zM18.61 13.985c.13-.136.2-.313.2-.504V5.847l-.875.918a.65.65 0 0 1-.952 0 .736.736 0 0 1 0-1.004l.87-.922H10.58a.66.66 0 0 0-.476.209l-6.085 6.388a.73.73 0 0 0 0 1.004l7.551 7.933a.654.654 0 0 0 .957 0zm-1.995-2.399c-2.276 0-4.059-1.95-4.059-4.44a.517.517 0 0 0-.506-.53.517.517 0 0 0-.506.53c0 2.49-1.783 4.44-4.06 4.44a.517.517 0 0 0-.506.532c0 .295.225.531.506.531 2.39 0 4.06 1.677 4.06 4.08 0 .296.225.532.506.532a.517.517 0 0 0 .506-.532c0-2.403 1.67-4.08 4.06-4.08a.517.517 0 0 0 .506-.531.52.52 0 0 0-.507-.532m-6.846.495c.996-.531 1.796-1.408 2.28-2.494.486 1.086 1.286 1.963 2.281 2.494a4.76 4.76 0 0 0-2.28 2.295 4.76 4.76 0 0 0-2.28-2.295"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.364 2.208a.654.654 0 0 1 .956 0 .73.73 0 0 1-.004 1.004L20.16 4.425v9.06c0 .568-.207 1.1-.592 1.504l-6.085 6.389a1.97 1.97 0 0 1-1.432.622c-.52 0-1.039-.209-1.433-.622l-7.555-7.934c-.381-.4-.593-.936-.593-1.504s.208-1.1.593-1.504l6.089-6.392c.38-.4.891-.623 1.432-.623h8.624zM18.61 13.985c.13-.136.2-.313.2-.504V5.847l-.875.918a.65.65 0 0 1-.952 0 .736.736 0 0 1 0-1.004l.87-.922H10.58a.66.66 0 0 0-.476.209l-6.085 6.388a.73.73 0 0 0 0 1.004l7.551 7.933a.654.654 0 0 0 .957 0zm-1.995-2.399c-2.276 0-4.059-1.95-4.059-4.44a.517.517 0 0 0-.506-.53.517.517 0 0 0-.506.53c0 2.49-1.783 4.44-4.06 4.44a.517.517 0 0 0-.506.532c0 .295.225.531.506.531 2.39 0 4.06 1.677 4.06 4.08 0 .296.225.532.506.532a.517.517 0 0 0 .506-.532c0-2.403 1.67-4.08 4.06-4.08a.517.517 0 0 0 .506-.531.52.52 0 0 0-.507-.532m-6.846.495c.996-.531 1.796-1.408 2.28-2.494.486 1.086 1.286 1.963 2.281 2.494a4.76 4.76 0 0 0-2.28 2.295 4.76 4.76 0 0 0-2.28-2.295"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m21.836 11.466.005-7.776a1.54 1.54 0 0 0-1.535-1.535l-8.061.003c-.017 0-.107.008-.126.014-.412.075-.821.3-1.157.636L2.813 10.95c-.33.33-.551.742-.63 1.156-.09.496.04.961.353 1.275l8.076 8.073c.26.26.605.386.974.386.493 0 1.028-.227 1.463-.66l8.148-8.144c.336-.325.558-.75.636-1.213.003-.028.008-.12.008-.148zm-1.258.202c-.022.148-.126.325-.277.476l-8.146 8.143c-.283.285-.594.316-.65.274L3.43 12.488c-.034-.05-.012-.353.28-.644l8.145-8.143c.149-.151.334-.257.443-.283h8.008a.27.27 0 0 1 .272.27l-.008 7.795zm-2.79-3.751c-.627.627-1.24.619-1.877-.02-.636-.638-.641-1.252-.016-1.876q.462-.464.924-.465.47 0 .952.484c.636.639.642 1.252.017 1.877m.874-2.768c-1.134-1.137-2.54-1.142-3.664-.02-1.126 1.124-1.117 2.53.02 3.667.571.572 1.207.858 1.846.858.63 0 1.258-.28 1.818-.84 1.123-1.124 1.117-2.527-.02-3.665"
                />
            </svg>
        );
    }
};

export default IconTagRegular;
