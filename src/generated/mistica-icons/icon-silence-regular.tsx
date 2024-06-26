'use client';
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

const IconSilenceRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.354 12.23c-.065.389-.268.692-.59.878-.275.16-.603.214-.921.214a4 4 0 0 1-1.236-.218.444.444 0 1 1 .297-.839c.314.11 1.075.275 1.407.075.064-.04.132-.096.16-.26.018-.1.068-.404-.878-.686-1.382-.415-1.393-1.232-1.275-1.682a1.2 1.2 0 0 1 .614-.79c.718-.378 1.732-.032 1.847.007.232.083.353.34.267.572a.444.444 0 0 1-.571.268c-.243-.086-.84-.215-1.129-.057-.06.032-.128.085-.164.225-.032.121-.096.371.668.6 1.407.425 1.596 1.153 1.504 1.692m2.028-2.318c-.193 0-.375.039-.54.103v-.832a.446.446 0 0 0-.892 0v3.621a.446.446 0 1 0 .893 0v-1.521c.007-.268.246-.482.54-.482.3 0 .542.221.542.493v1.532a.446.446 0 1 0 .893 0v-1.532c0-.761-.647-1.382-1.436-1.382m3.51 0c-.192 0-.374.039-.538.103v-.832a.447.447 0 0 0-.893 0v3.621a.446.446 0 1 0 .893 0v-1.521c.007-.268.246-.482.539-.482.3 0 .543.221.543.493v1.532a.446.446 0 1 0 .893 0v-1.532c-.004-.761-.647-1.382-1.436-1.382m3.569 0c-.193 0-.375.039-.54.103v-.832a.446.446 0 1 0-.892 0v3.621a.446.446 0 1 0 .892 0v-1.521c.008-.268.247-.482.54-.482.3 0 .543.221.543.493v1.532a.446.446 0 1 0 .892 0v-1.532c0-.761-.642-1.382-1.435-1.382M6.546 20.876l2.518-2.5h9.029c2.153 0 3.907-1.722 3.907-3.836V8.47c0-2.118-1.754-3.843-3.907-3.843H5.95C3.771 4.626 2 6.35 2 8.469v6.071c0 1.986 1.507 3.568 3.5 3.757l-.018 2.132a.63.63 0 0 0 .625.633.65.65 0 0 0 .44-.186m-.417-3.81h-.222c-1.49 0-2.653-1.112-2.653-2.526V8.47c0-1.429 1.21-2.593 2.7-2.593h12.142c1.465 0 2.658 1.164 2.658 2.593v6.071c0 1.425-1.193 2.586-2.658 2.586H8.811a.61.61 0 0 0-.44.182l-1.621 1.61.01-1.22a.63.63 0 0 0-.631-.633"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.354 12.23c-.065.389-.268.692-.59.878-.275.16-.603.214-.921.214a4 4 0 0 1-1.236-.218.444.444 0 1 1 .297-.839c.314.11 1.075.275 1.407.075.064-.04.132-.096.16-.26.018-.1.068-.404-.878-.686-1.382-.415-1.393-1.232-1.275-1.682a1.2 1.2 0 0 1 .614-.79c.718-.378 1.732-.032 1.847.007.232.083.353.34.267.572a.444.444 0 0 1-.571.268c-.243-.086-.84-.215-1.129-.057-.06.032-.128.085-.164.225-.032.121-.096.371.668.6 1.407.425 1.596 1.153 1.504 1.692m2.028-2.318c-.193 0-.375.039-.54.103v-.832a.446.446 0 0 0-.892 0v3.621a.446.446 0 1 0 .893 0v-1.521c.007-.268.246-.482.54-.482.3 0 .542.221.542.493v1.532a.446.446 0 1 0 .893 0v-1.532c0-.761-.647-1.382-1.436-1.382m3.51 0c-.192 0-.374.039-.538.103v-.832a.447.447 0 0 0-.893 0v3.621a.446.446 0 1 0 .893 0v-1.521c.007-.268.246-.482.539-.482.3 0 .543.221.543.493v1.532a.446.446 0 1 0 .893 0v-1.532c-.004-.761-.647-1.382-1.436-1.382m3.569 0c-.193 0-.375.039-.54.103v-.832a.446.446 0 1 0-.892 0v3.621a.446.446 0 1 0 .892 0v-1.521c.008-.268.247-.482.54-.482.3 0 .543.221.543.493v1.532a.446.446 0 1 0 .892 0v-1.532c0-.761-.642-1.382-1.435-1.382M6.546 20.876l2.518-2.5h9.029c2.153 0 3.907-1.722 3.907-3.836V8.47c0-2.118-1.754-3.843-3.907-3.843H5.95C3.771 4.626 2 6.35 2 8.469v6.071c0 1.986 1.507 3.568 3.5 3.757l-.018 2.132a.63.63 0 0 0 .625.633.65.65 0 0 0 .44-.186m-.417-3.81h-.222c-1.49 0-2.653-1.112-2.653-2.526V8.47c0-1.429 1.21-2.593 2.7-2.593h12.142c1.465 0 2.658 1.164 2.658 2.593v6.071c0 1.425-1.193 2.586-2.658 2.586H8.811a.61.61 0 0 0-.44.182l-1.621 1.61.01-1.22a.63.63 0 0 0-.631-.633"
                />
            </svg>
        );
    }
};

export default IconSilenceRegular;
