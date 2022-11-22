/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAddMoreQueryLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.837 5.05c0-1.05-.845-1.837-2.515-2.339-1.193-.36-2.762-.56-4.417-.56-1.653 0-3.219.2-4.415.563-1.39.418-2.213 1.042-2.445 1.852l-.003.003a1.726 1.726 0 00-.067.481v2.698h-.149c-1.201.011-5.675.423-5.675 5.989 0 5.571 4.513 6.008 5.72 6.025h.317c.347.655 1.098 1.154 2.302 1.518 1.205.359 2.77.557 4.415.557 1.647 0 3.215-.198 4.42-.56 1.667-.501 2.512-1.288 2.512-2.339V5.05zM10.726 3.496c1.12-.336 2.604-.524 4.179-.524 1.577 0 3.061.188 4.182.524 1.11.333 1.742.77 1.893 1.3l-.007.009a.04.04 0 00-.01.013c-.184.487-.831.907-1.868 1.221-1.12.336-2.605.524-4.179.524-1.574 0-3.059-.188-4.18-.524-1.064-.322-1.716-.756-1.882-1.257a.052.052 0 00-.007-.014l-.004-.006c.165-.507.812-.944 1.883-1.266zM8.059 18.94h-.177c-1.476-.022-4.91-.571-4.907-5.204 0-4.625 3.4-5.152 4.863-5.166h.103c.149 0 .303.003.434.006 1.485.034 4.941.613 4.941 5.196 0 1.19-.355 5.081-4.913 5.165-.103.003-.224.003-.344.003zm.493-2.199a.41.41 0 01-.818 0v-2.59H5.16a.412.412 0 010-.824h2.574V10.77a.41.41 0 01.818 0v2.558h2.58a.412.412 0 010 .823h-2.58v2.591zm10.535 3.748c-1.129.34-2.614.527-4.18.524-1.565 0-3.05-.188-4.179-.524-.717-.215-1.243-.484-1.563-.79 1.205-.154 3.188-.714 4.252-2.689.496.037 1 .056 1.502.056 1.65 0 3.218-.196 4.414-.557.675-.205 1.244-.49 1.684-.827v3.255c0 .645-.65 1.166-1.93 1.552zm-4.95-6.72a7.96 7.96 0 00-.157-1.585c.303.022.653.03.939.028 1.65 0 3.215-.196 4.414-.558.675-.204 1.247-.49 1.684-.826v3.658c-.207.387-.81.902-1.919 1.236-1.4.42-3.4.602-5.339.484.233-.678.378-1.476.378-2.437zM8.796 6.003c.414.33.98.605 1.705.826 1.194.359 2.762.558 4.415.558s3.221-.197 4.415-.558c.714-.216 1.274-.487 1.686-.81v3.617c-.207.386-.807.899-1.919 1.235-1.123.336-2.608.524-4.18.524-.529 0-.935-.02-1.148-.056-.002-.002-.005-.001-.008 0h-.003c-.992-2.88-3.695-3.457-4.963-3.563V6.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAddMoreQueryLight;
