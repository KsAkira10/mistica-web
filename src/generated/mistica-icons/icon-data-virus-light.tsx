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

const IconDataVirusLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M22 4.803c0-1.019-.82-1.779-2.439-2.265C18.41 2.19 16.895 2 15.296 2c-1.597 0-3.114.19-4.266.54-1.343.402-2.143 1.005-2.37 1.79l-.004.003q-.064.225-.065.47v2.87q-.041-.001-.082-.005a2 2 0 0 0-.14-.006h-.006c-1.525 0-2.413.586-3.195 1.104l-.005.003c-.803.53-1.438.95-2.648.76A.419.419 0 0 0 2 9.933v.022c0 .4-.005 4.858.339 6.812.454 2.605 5.546 5.048 5.842 5.19l.006.002a.41.41 0 0 0 .356 0q1.385-.673 2.658-1.53c1.138.316 2.578.495 4.095.495 1.59 0 3.104-.19 4.265-.538C21.181 19.9 22 19.137 22 18.118zm-.834.973V9.19c-.202.367-.774.854-1.835 1.178-1.076.321-2.504.5-4.021.5q-.219 0-.435-.009l-.146-.005c.003-.517.003-.865.003-.916a.44.44 0 0 0-.506-.407c-1.223.188-1.855-.23-2.66-.76l-.001-.002-.006-.004c-.582-.383-1.218-.802-2.131-.995V5.767q.597.454 1.616.763c1.155.344 2.666.535 4.263.535s3.11-.191 4.263-.538c.671-.202 1.2-.453 1.596-.751m0 8.069c-.199.364-.777.85-1.838 1.172-1.079.322-2.507.5-4.021.5-.217 0-.428-.01-.638-.02l-.122-.005c.105-1.206.15-2.68.168-3.812q.098.002.195.007.198.009.397.01c1.596 0 3.11-.191 4.263-.538.637-.19 1.178-.455 1.596-.768zm0 1.2v3.073c0 .61-.62 1.104-1.847 1.471-1.084.325-2.512.504-4.023.504-1.159 0-2.269-.108-3.213-.305 1.12-.876 2.123-1.934 2.313-3.021q.035-.206.066-.444l.205.01c.211.009.423.019.64.019 1.596 0 3.107-.191 4.263-.538.637-.19 1.178-.456 1.596-.768m-12.8 6.075c-1.502-.74-4.897-2.743-5.205-4.495-.276-1.568-.318-4.98-.324-6.223 1.269.06 2.037-.441 2.792-.939.75-.498 1.462-.967 2.734-.967h.006c1.268.003 1.98.471 2.73.966l.002.001c.746.493 1.517 1.002 2.791.933 0 .174-.002.394-.004.644l-.001.113-.007.022q-.012.028-.013.058a.4.4 0 0 0 .013.1l.004.02c-.017 1.265-.068 3.12-.202 4.45q-.004.014-.009.026a.2.2 0 0 0-.011.039.1.1 0 0 0 .003.031l.003.023a11 11 0 0 1-.094.703c-.305 1.755-3.705 3.758-5.208 4.495M9.48 4.53c.16-.476.774-.888 1.793-1.196 1.075-.324 2.504-.5 4.024-.5 1.516 0 2.948.179 4.023.5q1.585.48 1.807 1.224l-.005.008-.006.009c-.176.46-.794.86-1.787 1.158-1.076.321-2.504.5-4.021.5s-2.943-.179-4.021-.5c-1.022-.307-1.645-.72-1.802-1.195q0-.002-.002-.004-.003-.003-.003-.005"
            />
        </svg>
    );
};

export default IconDataVirusLight;
