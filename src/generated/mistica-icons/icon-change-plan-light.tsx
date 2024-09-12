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

const IconChangePlanLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.403 11.434h-6.076a.28.28 0 0 1-.28-.28c0-.154.126-.28.28-.28h6.076c.154 0 .28.126.28.28s-.126.28-.28.28M19.403 14.17h-6.076a.28.28 0 0 1-.28-.28c0-.154.126-.28.28-.28h6.076c.154 0 .28.127.28.28 0 .155-.126.28-.28.28M13.327 16.924h6.076c.154 0 .28-.126.28-.28a.28.28 0 0 0-.28-.28h-6.076a.28.28 0 0 0-.28.28c0 .154.126.28.28.28"
            />
            <path
                fill={fillColor}
                d="M11.708 20.216c-.518 0-.815-.3-.815-.821V4.596c0-.51.297-.8.812-.804.472-.002 4.63 0 5.366 0h.11a.3.3 0 0 1 .2.082l4.37 4.37a.3.3 0 0 1 .05.07.28.28 0 0 1 .03.17V19.42c0 .18-.014.386-.131.549q-.177.244-.563.246zm9.563-11.49H19.37c-1.52 0-2.465-.945-2.465-2.466V4.356h-5.196c-.218 0-.252.058-.252.243v14.799c0 .212.045.26.255.26.655-.003 6.773-.003 7.445-.003h1.98a.3.3 0 0 0 .11-.014.6.6 0 0 0 .025-.221zm-.395-.561-3.412-3.414v1.51c0 1.21.695 1.904 1.905 1.904zM7.366 7.935a.28.28 0 0 1-.182-.493c.217-.186.519-.449.718-.624H6.798c-.726 0-1.27.17-1.62.507-.36.347-.546.907-.546 1.66v.833a.277.277 0 0 1-.277.28.28.28 0 0 1-.28-.28v-.832c0-.91.24-1.605.717-2.065.457-.44 1.132-.664 2.006-.664h1.11a31 31 0 0 0-.724-.633.28.28 0 1 1 .364-.425l.055.047c.17.146.678.582.884.787.322.323.325.692.005 1.009-.123.123-.86.756-.944.826a.3.3 0 0 1-.182.067M3.899 15.588h3.095a.28.28 0 0 0 .28-.28.28.28 0 0 0-.28-.28H3.899a.28.28 0 0 0-.28.28c0 .154.125.28.28.28M3.899 17.045h3.095a.28.28 0 0 0 .28-.28.28.28 0 0 0-.28-.28H3.899a.28.28 0 0 0-.28.28c0 .154.125.28.28.28M6.994 18.501H3.899a.28.28 0 0 1-.28-.28.28.28 0 0 1 .28-.28h3.095a.28.28 0 0 1 .28.28c0 .154-.126.28-.28.28"
            />
            <path
                fill={fillColor}
                d="M5.49 20.196H2.728c-.353 0-.572-.221-.572-.577v-8.157c0-.35.219-.569.572-.569h3.288q.057 0 .107.021a.3.3 0 0 1 .092.06l2.429 2.43a.28.28 0 0 1 .08.198v6.03c0 .34-.218.561-.56.561zm2.675-6.314h-.692c-.56 0-.995-.151-1.292-.445-.296-.294-.445-.731-.445-1.292v-.689h-3.02v8.18h5.449zm-.398-.56-1.47-1.47v.293c0 .813.363 1.177 1.176 1.177z"
            />
        </svg>
    );
};

export default IconChangePlanLight;
