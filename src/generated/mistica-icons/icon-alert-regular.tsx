/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAlertRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.608 3.367C12.466 3.146 12.251 3 12 3a.69.69 0 00-.608.367L2.106 19.899a.686.686 0 000 .734c.142.221.357.367.608.367h18.572a.69.69 0 00.608-.367.686.686 0 000-.734L12.608 3.367zM12 5.2l6.25 11.133 1.788 3.198H3.963L12 5.202zm0 3.49a.725.725 0 00-.713.734v5.696c0 .404.32.733.713.733a.724.724 0 00.713-.733V9.43c0-.405-.32-.739-.713-.739zm-.713 9.002c0-.404.32-.733.713-.733.393 0 .713.329.713.733 0 .405-.32.734-.713.734a.725.725 0 01-.713-.733z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22.182 23H1.817a.81.81 0 01-.702-.372.82.82 0 01-.025-.794L11.2 1.456c.144-.287.401-.456.69-.456.288 0 .545.169.689.453l10.325 20.378s0 .003.003.003a.804.804 0 01-.022.794.817.817 0 01-.702.372zM11.4 16.946a.614.614 0 001.228 0V8.339a.614.614 0 00-1.228 0v8.607zm-.007 2.363c0 .394.23.619.62.619.393 0 .621-.225.621-.62 0-.393-.225-.618-.62-.618s-.62.225-.62.619zM21.5 21.775l-9.604-18.96-9.404 18.96H21.5z"
                />
            </svg>
        );
    }
};

export default IconAlertRegular;
