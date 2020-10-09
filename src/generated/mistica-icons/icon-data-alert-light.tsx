/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconDataAlertLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M7.991 13.702a.412.412 0 01.824 0v3.972a.412.412 0 01-.824 0v-3.972zm.415 4.874a.397.397 0 110 .795.397.397 0 010-.795zm12.616-8.94V6.018c-.412.328-.978.6-1.695.812-1.199.362-2.767.558-4.428.558-1.662 0-3.23-.196-4.437-.558-.723-.221-1.289-.493-1.71-.82v3.445c.01 0 .018.008.026.008.157.073.28.196.353.353l.238.477c.009 0 .009.008.017.008.353.221.798.417 1.322.574 1.118.336 2.614.524 4.19.524 1.578 0 3.07-.188 4.191-.524 1.118-.336 1.726-.846 1.933-1.24zm0 4.856v-3.658c-.434.336-1.011.625-1.695.83-1.199.36-2.767.557-4.428.557-1.662 0-3.23-.196-4.429-.558-.17-.056-.339-.112-.51-.173l2.283 4.577a18.25 18.25 0 002.656.187c1.577 0 3.072-.187 4.19-.524 1.118-.336 1.726-.851 1.933-1.238zm0 4.454v-3.255c-.434.336-1.011.625-1.695.83-1.199.352-2.767.557-4.428.557-.765 0-1.505-.04-2.21-.132l1.882 3.782a.61.61 0 01.073.294h.238c1.577 0 3.064-.19 4.207-.527 1.283-.384 1.933-.907 1.933-1.549zm-18.003 2.02l10.77.039-5.339-10.72-5.431 10.68zM10.694 3.5c-1.076.328-1.725.762-1.89 1.263 0 .008.008.017.008.023.17.5.82.935 1.888 1.254 1.126.345 2.622.524 4.199.524s3.061-.18 4.187-.524c1.045-.31 1.692-.73 1.88-1.212 0-.017.008-.017.017-.026-.154-.532-.788-.969-1.905-1.302-1.123-.336-2.61-.524-4.196-.524-1.577 0-3.065.188-4.188.524zm8.628-.787c1.675.507 2.52 1.297 2.52 2.344v13.888c0 1.05-.845 1.838-2.52 2.336-1.208.362-2.788.558-4.437.558-.166 0-.732 0-.897-.009-.025 0-.056 0-.081-.008h-.025l-10.97-.036a.744.744 0 01-.523-.213.75.75 0 01-.143-.896l5.52-10.87a.536.536 0 01.166-.212V5.058c0-.17.025-.328.065-.484v-.009c.238-.804 1.061-1.428 2.456-1.854 1.202-.359 2.779-.555 4.429-.555 1.66 0 3.238.196 4.44.558z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDataAlertLight;
