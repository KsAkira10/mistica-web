/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconRookRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.35 17.979h.778a.61.61 0 01.614.619v2.633a.614.614 0 01-.616.616H6.876a.618.618 0 01-.616-.616v-2.633c0-.342.275-.617.616-.617h.779v-1.678c0-.341.274-.616.616-.616h.544l.753-6.532h-.19a.618.618 0 01-.617-.616V6.976H7.675a.618.618 0 01-.617-.616V2.77c0-.341.275-.616.617-.616h1.81c.338 0 .615.277.615.616v.925h.463V2.77c0-.341.274-.616.616-.616h1.568c.34 0 .617.277.617.616v.995l.493-.009V2.77c0-.341.274-.616.616-.616h1.885c.339 0 .616.277.616.616v3.586a.614.614 0 01-.616.616h-1.022v1.563a.614.614 0 01-.617.616h-.19l.753 6.532h.451c.34 0 .617.278.617.617v1.678zm.162 2.63v-1.4H7.498v1.4h9.014zm-7.619-2.63h6.224v-1.062H8.893v1.062zm4.395-8.827h-2.473l-.754 6.532h3.978l-.751-6.532zm-3.291-1.23h4.106v-.946H9.997v.947zm-1.13-4.534h-.576v2.358h7.45V3.388h-.65v.974c0 .336-.27.611-.607.617l-1.725.025a.62.62 0 01-.628-.614V3.388h-.336v.924a.614.614 0 01-.616.616H9.484a.618.618 0 01-.616-.616v-.924z"
            />
        </svg>
    );
};

export default IconRookRegular;
