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

const IconIdCardFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.41 19.38H3.586c-.79 0-1.431-.67-1.431-1.49V6.103c0-.821.641-1.488 1.431-1.488h16.827c.79 0 1.43.667 1.43 1.488V17.89c-.002.82-.643 1.49-1.433 1.49m-9.392-4.986c.333 0 .602-.28.602-.627a.616.616 0 0 0-.602-.628H4.777a.614.614 0 0 0-.603.628c0 .347.272.627.603.627zm-1.401-3.978a.617.617 0 0 0-.605-.627H4.777a.617.617 0 0 0-.605.627c0 .348.271.628.605.628h4.235c.333 0 .605-.28.605-.628m6.653-2.243c-.569 0-1.014.157-1.32.465-.319.319-.479.795-.479 1.411 0 .617.16 1.09.48 1.41.305.308.75.462 1.319.462q.858-.002 1.322-.463c.32-.319.482-.795.482-1.411q-.002-.927-.482-1.412-.463-.462-1.322-.462m-1.098 4.568c-.667 0-1.216.213-1.583.61-.339.368-.515.878-.515 1.474v.625a.21.21 0 0 0 .204.213h5.992a.21.21 0 0 0 .204-.213v-.625c0-.596-.18-1.106-.518-1.473-.373-.398-.919-.61-1.585-.61z"
            />
        </svg>
    );
};

export default IconIdCardFilled;
