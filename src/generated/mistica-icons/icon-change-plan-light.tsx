/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconChangePlanLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.403 11.434h-6.076a.281.281 0 01-.28-.28.28.28 0 01.28-.28h6.076a.28.28 0 01.28.28.28.28 0 01-.28.28zm0 2.736h-6.076a.281.281 0 01-.28-.28.28.28 0 01.28-.28h6.076a.28.28 0 010 .56zm-6.076 2.754h6.076a.28.28 0 00.28-.28.281.281 0 00-.28-.28h-6.076a.281.281 0 00-.28.28c0 .154.126.28.28.28z"
                fill={fillColor}
            />
            <path
                d="M11.708 20.215c-.518 0-.815-.3-.815-.82V4.596c0-.51.297-.8.812-.804.472-.002 4.63 0 5.366 0h.11a.29.29 0 01.2.082l4.37 4.37a.274.274 0 01.05.07.277.277 0 01.03.17V19.42c0 .18-.014.386-.131.549-.118.162-.306.246-.563.246h-9.429zm9.563-11.49H19.37c-1.52 0-2.465-.944-2.465-2.465V4.356h-5.196c-.218 0-.252.058-.252.243v14.799c0 .212.045.26.255.26.655-.003 6.773-.003 7.445-.003h1.98a.285.285 0 00.11-.014.595.595 0 00.025-.221V8.725zm-.395-.56l-3.412-3.414v1.51c0 1.21.695 1.904 1.905 1.904h1.507zm-13.51-.23a.28.28 0 01-.182-.493c.217-.186.519-.449.718-.624H6.798c-.726 0-1.27.17-1.62.507-.36.347-.546.907-.546 1.66v.833a.277.277 0 01-.277.28.28.28 0 01-.28-.28v-.832c0-.91.24-1.605.717-2.065.457-.44 1.132-.664 2.006-.664h1.11a30.59 30.59 0 00-.724-.633.28.28 0 11.364-.425l.055.047c.17.146.678.582.884.787.322.323.325.692.005 1.009-.123.123-.86.756-.944.826a.286.286 0 01-.182.067zm-3.467 7.653h3.095a.28.28 0 00.28-.28.28.28 0 00-.28-.28H3.899a.28.28 0 00-.28.28c0 .154.125.28.28.28zm0 1.457h3.095a.28.28 0 00.28-.28.28.28 0 00-.28-.28H3.899a.28.28 0 00-.28.28c0 .154.125.28.28.28zm3.095 1.456H3.899a.281.281 0 01-.28-.28.28.28 0 01.28-.28h3.095a.28.28 0 01.28.28.28.28 0 01-.28.28z"
                fill={fillColor}
            />
            <path
                d="M5.49 20.196H2.728c-.353 0-.572-.221-.572-.577v-8.157c0-.35.219-.569.572-.569h3.288c.038 0 .074.008.107.021a.3.3 0 01.092.06l2.429 2.43a.277.277 0 01.08.198v6.03c0 .34-.218.561-.56.561l-2.674.003zm2.675-6.314h-.692c-.56 0-.995-.151-1.292-.445-.296-.294-.445-.731-.445-1.292v-.689h-3.02v8.18h5.449v-5.754zm-.398-.56l-1.47-1.47v.293c0 .813.363 1.177 1.176 1.177h.294z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconChangePlanLight;
