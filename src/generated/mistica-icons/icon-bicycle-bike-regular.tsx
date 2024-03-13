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

const IconBicycleBikeRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.83 11.343c.382-.104.79-.174 1.253-.174 2.375 0 3.736 1.42 3.74 3.896 0 2.477-1.362 3.894-3.738 3.894-2.372 0-3.733-1.42-3.733-3.894 0-1.537.526-2.666 1.495-3.302l-.88-1.779-1.966 3.95c.306.283.477.711.477 1.26 0 .731-.3 1.247-.824 1.49l.314.656h.485a.54.54 0 0 1 .529.552v.003a.54.54 0 0 1-.53.549h-.81a.53.53 0 0 1-.473-.306l-.635-1.325c-.653-.112-1.073-.543-1.19-1.215H9.6c-.19 2.134-1.504 3.355-3.698 3.355-2.375 0-3.736-1.417-3.736-3.89 0-2.474 1.361-3.894 3.736-3.894.407.003.813.056 1.205.162L8.36 8.769l-.854-1.82h-.81a.54.54 0 0 1-.53-.552.54.54 0 0 1 .53-.552H9.43a.54.54 0 0 1 .53.552.54.54 0 0 1-.53.552h-.742l.6 1.28h5.145v-2.56a.55.55 0 0 1 .414-.538c.155-.034 1.535-.334 2.35.35.256.213.56.613.56 1.302a.54.54 0 0 1-.529.552.54.54 0 0 1-.529-.552c0-.271-.087-.378-.163-.442-.23-.193-.677-.224-1.042-.193v2.498zm-4.94 2.196q.02 0 .04.004.035.003.069.004l2.095-4.216H9.805l1.98 4.216q.028 0 .053-.004t.051-.004m6.193 4.143c1.717 0 2.515-.832 2.515-2.617 0-1.79-.798-2.621-2.515-2.621-.25 0-.47.02-.681.055l1.134 2.295c.135.269.034.6-.23.745a.516.516 0 0 1-.713-.238l-1.185-2.4c-.56.417-.838 1.122-.838 2.162 0 1.787.798 2.619 2.513 2.619m-5.667-2.488c0-.414-.126-.549-.527-.549-.397 0-.526.132-.526.55 0 .42.123.548.526.548.404 0 .527-.129.527-.549m-6.515 2.488c1.532 0 2.33-.667 2.484-2.082H5.884a.53.53 0 0 1-.451-.263.56.56 0 0 1-.023-.538l1.13-2.31a4 4 0 0 0-.64-.048c-1.716 0-2.515.834-2.515 2.622s.801 2.619 2.516 2.619m2.481-3.188c-.086-.754-.364-1.286-.84-1.622l-.795 1.622zm.563-4.485-.843 1.729c.869.549 1.378 1.495 1.499 2.759h.815c.076-.219.204-.412.373-.569z"
            />
        </svg>
    );
};

export default IconBicycleBikeRegular;
