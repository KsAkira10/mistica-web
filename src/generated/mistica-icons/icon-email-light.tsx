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

const IconEmailLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.26 5H2.74a.754.754 0 0 0-.74.766v12.468c0 .422.332.766.74.766h18.52c.408 0 .74-.344.74-.766V5.766A.754.754 0 0 0 21.26 5m-2.114 1.532L12 10.824 4.854 6.532zM3.479 7.48l8.146 4.896a.72.72 0 0 0 .74 0l8.156-4.896v9.983H3.479z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2.726 18.223V6.45l8.91 5.501c.057.035.122.05.182.05.061 0 .126-.015.182-.05l8.91-5.496v7.493c0 .214.164.388.364.388s.363-.174.363-.388V5.388c0-.214-.163-.388-.363-.388H2.364C2.162 5 2 5.174 2 5.388v13.224c0 .214.163.388.363.388h18.91c.2 0 .364-.174.364-.388s-.163-.389-.363-.389zm9.092-7.06L3.09 5.778h17.458z"
                />
                <path
                    fill={fillColor}
                    d="M21.274 17.053c.4 0 .726-.347.726-.776s-.325-.777-.726-.777-.727.348-.727.777.326.776.727.776"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m21.835 6.939-.015 10.098c.009.008.118.734-.355 1.305-.325.395-.83.602-1.496.614-.521.008-2.504.01-4.919.01-4.18 0-9.644-.008-11.013-.01h-.32a1.54 1.54 0 0 1-1.034-.435c-.35-.341-.53-.843-.53-1.487V6.947c-.005-.073-.041-.93.483-1.484.269-.286.644-.437 1.078-.437L20.3 5.03c.524.02 1.494.37 1.536 1.908M3.715 5.846c-.208 0-.365.06-.48.177-.174.182-.235.484-.255.703l7.757 4.922h.001c.075.051 1.057.723 2.158.002l8.095-4.918c-.098-.818-.588-.88-.692-.883zm17.114 11.98c.235-.278.18-.69.177-.72v-.002l.008-9.426-7.678 4.664c-.53.35-1.045.468-1.493.468-.857 0-1.482-.428-1.562-.483l-.007-.004-7.3-4.63v9.344q.001.623.284.902a.76.76 0 0 0 .45.199h.337c2.203.004 14.498.023 15.91 0 .412-.006.706-.112.874-.311"
                />
            </svg>
        );
    }
};

export default IconEmailLight;
