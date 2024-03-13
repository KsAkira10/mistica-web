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

const IconTramTrainFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.054 11.92c-1.852-3.798-5.868-4.034-6.067-4.042h-2.81l.989-1.006h1.392a.607.607 0 0 0 .602-.61V4.606h5.944a.607.607 0 0 0 .603-.61.605.605 0 0 0-.603-.611H2.757a.607.607 0 0 0-.602.61c0 .34.269.611.602.611h5.944v1.656c0 .26.16.479.384.568L8.05 7.878H2.757a.6.6 0 0 0-.426.18.62.62 0 0 0-.176.43v9.863c0 .34.269.611.602.611h1.006c.084 1.003.773 1.647 1.81 1.647 1.038 0 1.722-.641 1.809-1.644h.456c.087 1.003.773 1.644 1.81 1.644s1.723-.641 1.81-1.641l2.57.005c.09 1 .774 1.639 1.81 1.639 1.031 0 1.714-.633 1.807-1.625l.625.003h.016c.401 0 .793-.12 1.132-.344l.073-.05c1.092-.726 3.639-2.421 1.563-6.676m-6.017 1.32V9.107c.527.045 3.513.434 4.938 3.355.135.275.239.53.328.776zm3.723 4.377c-.146.098-.311.177-.48.146l-.856-.006c-.297-.537-.852-.86-1.583-.86-.725 0-1.28.317-1.58.847l-3.036-.006c-.3-.527-.852-.84-1.577-.84-.723 0-1.275.313-1.574.84h-.928c-.3-.527-.851-.84-1.574-.84s-1.274.31-1.574.837h-.639v-1.501h16.913c-.365.621-.952 1.013-1.43 1.331l-.007.005zm-2.919 1.768c-.448 0-.622-.177-.622-.63 0-.454.174-.63.622-.63s.622.176.622.63-.174.63-.622.63m-6.812-.63c0-.454.173-.63.622-.63.448 0 .621.176.621.63s-.173.63-.621.63c-.449 0-.622-.177-.622-.63m-3.451.63c-.448 0-.622-.177-.622-.63 0-.454.174-.63.622-.63.445 0 .622.176.622.63-.003.454-.177.63-.622.63m.3-9.6v3.384H3.361V9.786zm1.406 3.387V9.786H9.54v3.386zm4.179-6.3-.989 1.006h-.717l.989-1.006zm-1.555-1.22V4.605h4.05v1.045zm3.34 7.52h-2.303V9.786h2.302z"
            />
        </svg>
    );
};

export default IconTramTrainFilled;
