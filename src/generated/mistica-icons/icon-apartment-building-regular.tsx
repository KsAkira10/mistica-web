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

const IconApartmentBuildingRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M5.348 2h13.297c.4 0 .717.326.722.73V22h-9.345v-5.454H8.223v5.45H4.63V2.725c0-.4.322-.726.718-.726zm6.11 18.544h6.469V3.456H6.066v17.088h.717V15.09h4.675v5.454zm-4.675-7.455h4.675V9.818H6.783v3.27zm3.594-2.178V12H7.86v-1.089h2.517zm2.157 2.178h4.675V9.818h-4.675v3.27zm3.594-2.178V12H13.61v-1.089h2.517zm-3.594 7.45h4.675V15.09h-4.675v3.271zm3.594-2.182v1.089H13.61v-1.09h2.517zM6.783 8.003h4.675V4.727H6.783v3.276zm3.594-2.183v1.09H7.86V5.82h2.517zm2.157 2.183h4.675V4.727h-4.675v3.276zm3.594-2.183v1.09H13.61V5.82h2.517z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.999 21.846H5.996c-.737 0-1.38-.644-1.38-1.378V3.541c0-.723.658-1.378 1.38-1.378H18c.723 0 1.38.658 1.38 1.378v16.927c-.002.734-.646 1.378-1.38 1.378zm-8.258-1.204V16.25c0-.334.266-.603.591-.603h3.328c.328 0 .591.27.591.603v4.389h3.745c.098 0 .196-.112.196-.174V3.538c-.005-.059-.123-.174-.196-.174H5.993c-.075 0-.193.113-.196.174v16.927c0 .062.101.174.196.174l3.748.003zm3.328-.031v-3.76h-2.143v3.76h2.143zM8.817 7.269V5.911h1.336v1.358H8.817zm-.591 1.205h2.52a.597.597 0 00.592-.603V5.308a.595.595 0 00-.591-.602H8.226a.597.597 0 00-.591.602v2.563c0 .334.263.603.59.603zm5.571-1.205V5.911h1.336v1.358h-1.336zm-.59 1.205h2.52a.597.597 0 00.591-.603V5.308a.595.595 0 00-.59-.602h-2.522a.597.597 0 00-.59.602v2.563c0 .334.263.603.59.603zM8.816 12.3v-1.359h1.336V12.3H8.817zm-.591 1.204h2.52a.597.597 0 00.592-.602V10.34a.595.595 0 00-.591-.602h-2.52a.597.597 0 00-.591.602v2.563c0 .334.263.603.59.603zm5.571-1.204v-1.359h1.336V12.3h-1.336zm-.59 1.204h2.52a.597.597 0 00.591-.602V10.34a.595.595 0 00-.59-.602h-2.522a.597.597 0 00-.59.602v2.563c0 .334.263.603.59.603z"
                />
            </svg>
        );
    }
};

export default IconApartmentBuildingRegular;
