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

const IconNewsletterRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M5.11 2v20h13.793V2zm6.532 12.964H7.284V10.89h4.358zM10.555 12h-2.18v1.854h2.18zm5.988.74a.547.547 0 0 1-.543.554h-2.904a.547.547 0 0 1-.544-.554c0-.309.242-.555.544-.555h2.903c.298 0 .544.251.544.555m-4.901 7.04H7.284v-4.072h4.358zm-3.266-2.963v1.854h2.179v-1.854zM16 18.482a.547.547 0 0 0 .543-.555.55.55 0 0 0-.543-.555h-2.904a.547.547 0 0 0-.544.555c0 .308.242.555.544.555zM6.56 9.037V5.518h10.889v3.519zm10.889-5.558v.925H6.559v-.925zm0 17.042H6.559V10.146h10.89z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M5.11 2v20h13.793V2zm6.532 12.964H7.284V10.89h4.358zM10.555 12h-2.18v1.854h2.18zm5.988.74a.547.547 0 0 1-.543.554h-2.904a.547.547 0 0 1-.544-.554c0-.309.242-.555.544-.555h2.903c.298 0 .544.251.544.555m-4.901 7.04H7.284v-4.072h4.358zm-3.266-2.963v1.854h2.179v-1.854zM16 18.482a.547.547 0 0 0 .543-.555.55.55 0 0 0-.543-.555h-2.904a.547.547 0 0 0-.544.555c0 .308.242.555.544.555zM6.56 9.037V5.518h10.889v3.519zm10.889-5.558v.925H6.559v-.925zm0 17.042H6.559V10.146h10.89z"
                />
            </svg>
        );
    }
};

export default IconNewsletterRegular;
