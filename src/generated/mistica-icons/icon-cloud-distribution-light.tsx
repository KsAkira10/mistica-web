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

const IconCloudDistributionLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.763 16.639c.28-.603.87-1.07 1.56-1.07.936 0 1.699.823 1.677 1.787 0 .75-.413 1.326-1.038 1.61v2.321c0 .393-.31.713-.692.713a.703.703 0 0 1-.691-.713v-2.322a1.85 1.85 0 0 1-.834-.891h-4.19a1.77 1.77 0 0 1-.864.891v2.322c0 .393-.31.713-.691.713a.703.703 0 0 1-.692-.713v-2.322a1.85 1.85 0 0 1-.833-.891h-4.19a1.77 1.77 0 0 1-.864.891v2.322c0 .393-.31.713-.692.713a.703.703 0 0 1-.692-.713v-2.322C3.452 18.677 3 18.07 3 17.357c0-.965.798-1.787 1.733-1.787.696 0 1.286.425 1.561 1.069h4.159c.172-.393.483-.713.864-.891v-1.61H7.89c-2.319 0-4.19-1.964-4.19-4.318S5.571 5.537 7.86 5.5c.381-2 2.08-3.5 4.123-3.5 2.008 0 3.742 1.504 4.123 3.5 2.283.033 4.225 1.998 4.225 4.32 0 2.39-1.87 4.319-4.158 4.319h-3.463v1.572c.412.178.692.535.865.928zM5.088 9.819c0 1.573 1.21 2.857 2.771 2.894v.005h8.313c1.56 0 2.806-1.248 2.806-2.857 0-1.536-1.281-2.82-2.806-2.893a4 4 0 0 1-.138.608.676.676 0 0 1-.656.498c-.07 0-.137 0-.208-.037-.382-.105-.586-.498-.484-.89.067-.289.102-.54.102-.823 0-1.61-1.245-2.893-2.806-2.893a2.78 2.78 0 0 0-2.735 2.248c.345.142.66.284.97.498.346.215.417.681.209 1.001a.677.677 0 0 1-.971.215 3.2 3.2 0 0 0-1.144-.43c-.142-.036-.28-.036-.417-.036-1.56 0-2.806 1.284-2.806 2.893"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.137 14.86c-.63 0-1.158.457-1.31 1.07h-4.519a1.39 1.39 0 0 0-.97-1.02v-1.838c0-.215-.136-.357-.34-.357H7.949c-1.702 0-3.095-1.462-3.095-3.25 0-1.787 1.393-3.25 3.095-3.25.614 0 1.189.178 1.702.535.17.105.375.073.475-.105.1-.179.07-.394-.1-.499a3.7 3.7 0 0 0-1.158-.535c.17-1.609 1.497-2.893 3.095-2.893 1.702 0 3.095 1.463 3.095 3.25 0 .32-.035.608-.135.891-.07.179.07.394.24.43h.1c.135 0 .27-.105.34-.251.062-.256.093-.515.124-.774l.01-.086h.205c1.733 0 3.23 1.5 3.23 3.25 0 1.788-1.393 3.287-3.095 3.287h-2.381c-.205 0-.34.142-.34.357s.135.357.34.357h2.381c2.076 0 3.774-1.82 3.774-4 0-2.144-1.802-3.964-3.909-3.964h-.205C15.467 3.536 13.865 2 11.963 2s-3.535 1.536-3.74 3.502h-.239c-2.107 0-3.81 1.75-3.81 3.963 0 2.18 1.703 3.964 3.775 3.964h3.71v1.48a1.39 1.39 0 0 0-.972 1.02H6.17c-.153-.612-.68-1.07-1.31-1.07-.75 0-1.359.64-1.359 1.427 0 .663.435 1.216 1.019 1.376v3.264c0 .196.152.356.34.356.186 0 .339-.16.339-.356v-3.264c.474-.128.849-.521.97-1.02h4.52c.121.499.496.892.97 1.02v3.264c0 .196.153.356.34.356s.34-.16.34-.356v-3.264c.474-.128.848-.521.97-1.02h4.523c.122.499.497.892.971 1.02v1.48c0 .197.152.357.34.357.187 0 .34-.16.34-.356v-1.481c.583-.16 1.018-.713 1.018-1.376 0-.787-.61-1.427-1.363-1.427M4.858 17.002c-.374 0-.679-.32-.679-.713s.305-.713.68-.713c.374 0 .678.32.678.713s-.304.713-.679.713m6.46-.713c0-.393.305-.713.68-.713.374 0 .679.32.679.713s-.305.713-.68.713c-.374 0-.678-.32-.678-.713m7.824.713c-.375 0-.68-.32-.68-.713s.305-.713.68-.713c.374 0 .679.32.679.713s-.305.713-.68.713m0 4.997c.374 0 .679-.32.679-.713s-.305-.713-.68-.713c-.374 0-.678.32-.678.713s.304.713.679.713"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.018 14.749v2.68c1.3.177 1.806 1.202 1.823 2.093v.185c-.02.983-.619 2.134-2.257 2.134-1.648 0-2.241-1.143-2.25-2.126v-.185c.026-.902.532-1.916 1.832-2.1v-2.261H4.816l.008 2.252c1.309.188 1.81 1.21 1.827 2.1v.186c-.009.983-.61 2.134-2.258 2.134-1.636 0-2.23-1.143-2.238-2.126v-.185c.017-.89.524-1.916 1.824-2.1l-.009-2.673a.43.43 0 0 1 .118-.3.46.46 0 0 1 .305-.126h7.14v-.899l-3.871.025c-1.678 0-3.479-.899-3.479-3.428 0-2.017 1.146-2.832 2.003-3.16.137-4.487 4.353-4.714 5.21-4.714.67 0 3.955.151 4.938 3.022 1.883.163 3.776 1.303 3.776 4.101 0 3.933-3.52 4.126-4.227 4.126l-3.504.026v.899h7.216a.43.43 0 0 1 .423.42M7.662 12.617l8.224-.053c.798 0 3.378-.235 3.378-3.286 0-2.874-2.283-3.252-3.26-3.277a.43.43 0 0 1-.398-.308c-.697-2.572-3.625-2.698-4.21-2.698-1.02 0-4.361.294-4.361 4.084 0 .185-.12.446-.306.496-1.12.311-1.697 1.14-1.697 2.454 0 2.336 1.84 2.588 2.63 2.588M5.805 19.69v-.143c-.009-.496-.196-1.32-1.39-1.32-1.196 0-1.4.824-1.408 1.32v.16c0 .487.193 1.294 1.389 1.294 1.213 0 1.409-.815 1.409-1.311M19.584 21c1.207 0 1.4-.823 1.409-1.31v-.154c-.009-.476-.205-1.283-1.367-1.308-.009.008-.026.008-.034.008-.017 0-.025 0-.042-.008-1.154.025-1.35.832-1.367 1.32v.159c.008.487.196 1.294 1.4 1.294"
                />
            </svg>
        );
    }
};

export default IconCloudDistributionLight;
