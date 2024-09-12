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

const IconLostFoundLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.176 6.96c0-2.736 2.202-4.96 4.912-4.96C19.793 2 22 4.224 22 6.96s-2.202 4.96-4.912 4.96-4.912-2.224-4.912-4.96m1.094.005c0 2.125 1.714 3.855 3.818 3.855s3.818-1.73 3.818-3.855-1.713-3.855-3.818-3.855-3.818 1.73-3.818 3.855m4.246 2.383a.545.545 0 1 1-1.09 0 .545.545 0 1 1 1.09 0m.666-2.642c.48-.484.424-1.312.07-1.777a1.52 1.52 0 0 0-1.201-.602h-.075a1.44 1.44 0 0 0-1.252.729.555.555 0 0 0 .2.752c.26.15.596.061.745-.202a.36.36 0 0 1 .307-.179h.075c.13 0 .26.066.34.17.06.08.07.282.023.329l-.4.404c-.378.38-.587.889-.587 1.425a.545.545 0 1 0 1.09 0c0-.245.093-.47.265-.645zm-2.379 7.598a.5.5 0 0 0-.028-.123l-.01-.023-.008-.024q-.014-.036-.033-.065a.5.5 0 0 0-.056-.09l-.007-.01-.007-.008a.6.6 0 0 0-.14-.142L3.954 5.038 3.38 3.881a.725.725 0 0 0-.978-.33.74.74 0 0 0-.325.988L2.65 5.7l-.014 14.612c0 .066.013.125.026.186l.002.012.005.014.004.014q.014.048.033.09.015.034.037.07l.012.018.012.02c.06.089.14.169.242.23a.7.7 0 0 0 .358.098.73.73 0 0 0 .633-.371 5.8 5.8 0 0 1 2.459-2.341 5.7 5.7 0 0 1 2.146-.593l1.104 2.238a.37.37 0 0 1-.163.494.363.363 0 0 1-.49-.165l-.162-.329a.724.724 0 0 0-.978-.329.737.737 0 0 0-.326.987l.163.33A1.82 1.82 0 0 0 9.383 22c.27 0 .549-.061.81-.193a1.846 1.846 0 0 0 .815-2.463l-1.104-2.257a5.758 5.758 0 0 1 5.089-1.946.726.726 0 0 0 .81-.837m-7.119 1.95a7.1 7.1 0 0 0-2.872.767 7.4 7.4 0 0 0-1.714 1.199l.014-11.232L13 13.735a7.4 7.4 0 0 0-1.983.663 7.2 7.2 0 0 0-2.333 1.857"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.158 6.965c0-2.737 2.209-4.965 4.92-4.965C19.792 2 22 4.228 22 6.965s-2.209 4.964-4.921 4.964-4.921-2.228-4.921-4.964m.76 0c0 2.31 1.865 4.197 4.16 4.197 2.297 0 4.162-1.886 4.162-4.197s-1.87-4.198-4.161-4.198-4.16 1.886-4.16 4.198m4.418 1.871a.38.38 0 0 1-.378.381.38.38 0 0 1-.378-.38c0-.211.17-.382.378-.382a.38.38 0 0 1 .378.381m.746-2.365c.43-.435.377-1.178.058-1.598a1.37 1.37 0 0 0-1.11-.547h-.077c-.47 0-.906.254-1.138.664a.384.384 0 0 0 .135.523c.184.103.412.04.519-.141a.56.56 0 0 1 .484-.284h.078a.65.65 0 0 1 .508.254c.116.147.14.46.01.592l-.417.42a1.9 1.9 0 0 0-.552 1.344c0 .21.17.38.378.38a.38.38 0 0 0 .378-.38c0-.303.116-.592.329-.807zm-2.48 7.994v.007a.3.3 0 0 1 .005.09.38.38 0 0 1-.422.333 6.3 6.3 0 0 0-3.681.63 6.3 6.3 0 0 0-2.112 1.716l1.26 2.55a1.535 1.535 0 0 1-.679 2.048 1.505 1.505 0 0 1-2.03-.684l-.169-.342a.383.383 0 0 1 .17-.514.38.38 0 0 1 .509.172l.17.342a.759.759 0 1 0 1.355-.684L8.72 17.578a6.4 6.4 0 0 0-2.63.67c-1.085.542-2.01 1.455-2.679 2.638q-.017.032-.042.059l-.016.02v.004a.4.4 0 0 1-.106.073l-.03.015a.4.4 0 0 1-.13.024.4.4 0 0 1-.13-.024l-.03-.015-.012-.004q-.008-.002-.012-.006-.02-.015-.034-.029a.3.3 0 0 1-.097-.112.3.3 0 0 1-.027-.049l-.007-.015a.2.2 0 0 1-.01-.052l-.004-.026q0-.01-.005-.02a.1.1 0 0 1-.005-.029V5.416l-.673-1.34a.383.383 0 0 1 .17-.512.377.377 0 0 1 .508.17l.62 1.256L9.74 9.857a.383.383 0 0 1 .073.533.376.376 0 0 1-.528.073L3.454 6.041V19.47c.644-.811 1.42-1.461 2.291-1.901a7.05 7.05 0 0 1 3.008-.762 7.17 7.17 0 0 1 5.299-2.717l-.983-.748a.383.383 0 0 1-.073-.532.376.376 0 0 1 .528-.074l1.932 1.471a.2.2 0 0 1 .054.064q.015.014.029.034.021.028.029.063.021.045.029.088.006.001.005.01m-4.2-3.684a.76.76 0 0 0-.755.762c0 .42.339.762.755.762a.76.76 0 0 0 .756-.762.76.76 0 0 0-.756-.762"
                />
            </svg>
        );
    }
};

export default IconLostFoundLight;
