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

const IconBacteriaRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 11.998a.62.62 0 0 0-.616-.616h-2.244c-.1-1.824-.666-3.129-1.437-4.056l1.42-1.42a.615.615 0 0 0-.871-.868l-1.437 1.436c-1.428-1.117-3.145-1.378-4.039-1.428V2.77a.62.62 0 0 0-.616-.616.62.62 0 0 0-.616.616V5.03c-.913.042-2.645.288-4.073 1.412L5.909 5.037a.615.615 0 0 0-.872.869L6.45 7.317c-.745.93-1.28 2.241-1.378 4.065h-2.3a.62.62 0 0 0-.616.616c0 .336.28.616.616.616h2.297c.107 1.813.647 3.118 1.395 4.048l-1.428 1.429a.617.617 0 0 0 .434 1.05.63.63 0 0 0 .437-.182l1.428-1.429c1.412 1.126 3.12 1.378 4.048 1.437v2.258c0 .336.28.616.616.616s.616-.28.616-.616v-2.266c.88-.04 2.62-.289 4.065-1.412l1.412 1.412a.62.62 0 0 0 .434.182c.154 0 .31-.067.434-.182a.617.617 0 0 0 0-.868l-1.403-1.404c.773-.927 1.33-2.244 1.428-4.073h2.241c.336 0 .616-.28.616-.616m-9.515 5.745h-.602c-4.908-.067-5.443-4.056-5.443-5.764 0-5.12 3.768-5.712 5.387-5.729h.123q.136.001.266.005.12.003.227.004c1.65.039 5.484.68 5.484 5.762 0 5.072-3.809 5.689-5.442 5.722m3.566-7.952c0-1.628-1.157-2.384-2.306-2.412l-.131.003h-.034c-1.146.011-2.302.759-2.302 2.403s1.16 2.395 2.308 2.412h.053l.1-.003c1.155-.022 2.312-.773 2.312-2.403m-.986-.003c0 1.314-1.073 1.415-1.34 1.42h-.125c-.283-.003-1.34-.109-1.34-1.428 0-1.32 1.046-1.418 1.329-1.42h.079q.028.002.052.002c.275.006 1.345.118 1.345 1.426m-5.65 2.454v.003h-.067c-.157-.003-.745-.06-.745-.796 0-.734.58-.787.736-.79h.073c.154.003.748.065.748.793 0 .731-.597.787-.745.79m1.728-.793c0-1.19-.885-1.756-1.706-1.779l-.078.003h-.037c-.846.006-1.708.617-1.708 1.773 0 1.205.888 1.768 1.714 1.779h.104c.823-.017 1.711-.577 1.711-1.776m2.866 4.359-.035.01q-.027.01-.055.018a1.2 1.2 0 0 1-.353.056c-.3 0-.692-.13-.893-.72-.306-.902.386-1.21.577-1.277l.06-.019.032-.01c.067-.02.196-.053.35-.053.303 0 .698.126.9.714.305.897-.401 1.216-.583 1.28m1.515-1.597c-.294-.866-.98-1.384-1.832-1.384-.271 0-.498.053-.641.098l-.112.037c-.891.313-1.636 1.235-1.196 2.526.297.869.98 1.39 1.826 1.39.277 0 .51-.056.655-.104l.112-.04c.88-.316 1.625-1.24 1.188-2.523"
            />
        </svg>
    );
};

export default IconBacteriaRegular;
