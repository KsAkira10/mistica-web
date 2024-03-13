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

const IconWebLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.725 4.5c.703 0 1.275.555 1.275 1.235v12.53c0 .68-.572 1.235-1.275 1.235H3.275C2.572 19.5 2 18.945 2 18.265V5.735c0-.68.572-1.235 1.275-1.235zM2.834 5.735v2.04h18.332v-2.04a.433.433 0 0 0-.44-.427H3.274a.437.437 0 0 0-.441.427m18.332 12.527V8.584H2.834v9.678c0 .236.196.427.44.427h17.451c.242 0 .441-.19.441-.427M9.308 13.017 6.479 10.53a.43.43 0 0 0-.592.029.395.395 0 0 0 .029.572l2.49 2.19-2.493 2.235a.397.397 0 0 0-.023.572.428.428 0 0 0 .592.02l2.829-2.533a.4.4 0 0 0 .134-.299.4.4 0 0 0-.137-.299m8.39-.082c.23 0 .418.182.418.404a.41.41 0 0 1-.419.404h-6.704a.41.41 0 0 1-.419-.404.41.41 0 0 1 .419-.404zM5.676 6.603c0 .307.259.56.58.56.322 0 .58-.253.58-.56a.57.57 0 0 0-.58-.563.57.57 0 0 0-.58.563m2.322.56a.57.57 0 0 1-.58-.56c0-.31.258-.563.58-.563s.578.25.578.563a.57.57 0 0 1-.578.56m-4.061-.56c0 .307.259.56.58.56.322 0 .581-.253.581-.56a.57.57 0 0 0-.58-.563.57.57 0 0 0-.581.563"
            />
        </svg>
    );
};

export default IconWebLight;
