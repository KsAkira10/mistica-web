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

const IconWinnerEuroRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.176 10.288h.213c.319 1.838 1.916 3.24 3.833 3.24.672 0 1.35-.18 1.951-.539.354-.216.46-.647.248-.975-.212-.36-.637-.468-.96-.252-.39.216-.815.324-1.243.324-1.138 0-2.058-.755-2.377-1.802h2.377c.39 0 .708-.324.708-.72a.716.716 0 0 0-.708-.719H9.84q.16-.592.637-1.083a2.45 2.45 0 0 1 1.74-.719c.425 0 .85.108 1.243.324a.686.686 0 0 0 .96-.252.71.71 0 0 0-.248-.975 3.866 3.866 0 0 0-4.722.615 3.95 3.95 0 0 0-1.066 2.09h-.213a.716.716 0 0 0-.708.72c.004.399.323.723.712.723"
                />
                <path
                    fill={fillColor}
                    d="m17.864 14.687 2.058 3.6c.11.216.11.432-.047.652a.5.5 0 0 1-.566.18l-3.085-.935-.921 3.42c-.036.216-.213.36-.425.396h-.071a.51.51 0 0 1-.46-.252l-2.377-4.251-2.377 4.215a.55.55 0 0 1-.46.288h-.071a.58.58 0 0 1-.46-.396l-.922-3.42-3.014.935a.5.5 0 0 1-.566-.18c-.107-.184-.142-.436-.036-.615l1.987-3.677a7.78 7.78 0 0 1-1.704-4.899C4.347 5.461 7.751 2 11.974 2s7.63 3.46 7.63 7.748c0 1.878-.642 3.605-1.74 4.94m.32-4.939c0-3.46-2.803-6.305-6.21-6.305-3.404 0-6.206 2.849-6.206 6.305 0 3.457 2.798 6.302 6.206 6.302 3.407 0 6.21-2.841 6.21-6.302m-8.87 10.306 1.456-2.63a7.6 7.6 0 0 1-3.94-1.945l-1.204 2.197 2.306-.683a.58.58 0 0 1 .425.036c.107.072.213.18.248.324zm6.28-3.029a.58.58 0 0 1 .425-.036l2.278.683-1.243-2.197a7.3 7.3 0 0 1-4.01 1.946l1.558 2.665.744-2.737a.46.46 0 0 1 .248-.324"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.176 10.288h.213c.319 1.838 1.916 3.24 3.833 3.24.672 0 1.35-.18 1.951-.539.354-.216.46-.647.248-.975-.212-.36-.637-.468-.96-.252-.39.216-.815.324-1.243.324-1.138 0-2.058-.755-2.377-1.802h2.377c.39 0 .708-.324.708-.72a.716.716 0 0 0-.708-.719H9.84q.16-.592.637-1.083a2.45 2.45 0 0 1 1.74-.719c.425 0 .85.108 1.243.324a.686.686 0 0 0 .96-.252.71.71 0 0 0-.248-.975 3.866 3.866 0 0 0-4.722.615 3.95 3.95 0 0 0-1.066 2.09h-.213a.716.716 0 0 0-.708.72c.004.399.323.723.712.723"
                />
                <path
                    fill={fillColor}
                    d="m17.864 14.687 2.058 3.6c.11.216.11.432-.047.652a.5.5 0 0 1-.566.18l-3.085-.935-.921 3.42c-.036.216-.213.36-.425.396h-.071a.51.51 0 0 1-.46-.252l-2.377-4.251-2.377 4.215a.55.55 0 0 1-.46.288h-.071a.58.58 0 0 1-.46-.396l-.922-3.42-3.014.935a.5.5 0 0 1-.566-.18c-.107-.184-.142-.436-.036-.615l1.987-3.677a7.78 7.78 0 0 1-1.704-4.899C4.347 5.461 7.751 2 11.974 2s7.63 3.46 7.63 7.748c0 1.878-.642 3.605-1.74 4.94m.32-4.939c0-3.46-2.803-6.305-6.21-6.305-3.404 0-6.206 2.849-6.206 6.305 0 3.457 2.798 6.302 6.206 6.302 3.407 0 6.21-2.841 6.21-6.302m-8.87 10.306 1.456-2.63a7.6 7.6 0 0 1-3.94-1.945l-1.204 2.197 2.306-.683a.58.58 0 0 1 .425.036c.107.072.213.18.248.324zm6.28-3.029a.58.58 0 0 1 .425-.036l2.278.683-1.243-2.197a7.3 7.3 0 0 1-4.01 1.946l1.558 2.665.744-2.737a.46.46 0 0 1 .248-.324"
                />
            </svg>
        );
    }
};

export default IconWinnerEuroRegular;
