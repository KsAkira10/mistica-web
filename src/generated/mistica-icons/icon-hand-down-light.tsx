'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconHandDownLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M6.982 2.19h7.765c.782 0 1.123.74 1.266 1.053.142.3.627 1.287 1.192 2.436l.016.032c.918 1.866 2.061 4.188 2.739 5.633.4.849.24 1.737-.406 2.255a1.8 1.8 0 0 1-1.129.395c-.42 0-.846-.143-1.204-.429-.365-.291-.667-.694-1.006-1.269v7.362q0 .01-.002.022v.023c-.088 1.341-.86 2.112-2.124 2.112-1.314 0-2.129-.827-2.129-2.157v-2.894q-.31.09-.68.09c-1 0-1.698-.502-1.939-1.347a2.5 2.5 0 0 1-.776.117c-1.003 0-1.703-.507-1.941-1.361-.233.075-.49.117-.773.117-1.252 0-2.031-.787-2.031-2.056V5.348c0-.967.269-1.74.807-2.291.537-.558 1.375-.866 2.355-.866m8.297 1.406c-.193-.423-.344-.585-.532-.585l-7.77-.003c-.762 0-1.392.218-1.776.616-.384.395-.577.975-.577 1.723v6.975c0 .82.409 1.238 1.218 1.238q.265.004.519-.076a.813.813 0 0 1 1.036.557c.14.508.53.765 1.16.765.176.003.353-.022.52-.075a.81.81 0 0 1 1.037.551c.143.502.532.757 1.16.757q.235.003.462-.056a.8.8 0 0 1 .709.134c.201.154.319.395.319.653v2.893c0 .874.457 1.337 1.32 1.337.526 0 1.237-.14 1.313-1.348V12.3a.82.82 0 0 1 .597-.79.81.81 0 0 1 .913.373c.31.527.554.837.812 1.045.205.165.457.255.703.255a.98.98 0 0 0 .625-.219c.347-.277.414-.762.18-1.263a443 443 0 0 0-2.732-5.616 216 216 0 0 1-1.216-2.488"
            />
        </svg>
    );
};

export default IconHandDownLight;
