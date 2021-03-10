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

const IconFileErrorLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.174 21.019c.207 0 .403-.185.403-.381V8.75h-2.549c-.972 0-1.81-.316-2.42-.913-.616-.602-.941-1.426-.941-2.384V2.977H5.843c-.184 0-.403.207-.403.38v17.281c0 .188.205.381.403.381h12.331zm.19-13.09l-4.882-4.77v2.297c0 .728.241 1.35.695 1.793.456.445 1.098.683 1.854.683h2.333V7.93zm.824-.341a.683.683 0 01.205.484v12.566c0 .653-.558 1.205-1.219 1.205H5.844c-.65 0-1.219-.564-1.219-1.205V3.361c0-.63.58-1.205 1.218-1.205h7.505c.176 0 .35.07.476.194l5.364 5.238zM8.35 13.36a.405.405 0 01-.577 0 .414.414 0 010-.583l.944-.955-.944-.955a.414.414 0 010-.583.403.403 0 01.577 0l.944.955.944-.955a.403.403 0 01.577 0c.16.16.16.42 0 .583l-.944.955.944.955c.16.16.16.42 0 .583a.405.405 0 01-.577 0l-.944-.955-.944.955zm8.029-3.073c.16.16.16.42 0 .583l-.944.955.944.955c.16.162.16.42 0 .583a.405.405 0 01-.577 0l-.945-.956-.943.956a.405.405 0 01-.577 0 .414.414 0 010-.583l.943-.955-.944-.955a.414.414 0 010-.583c.16-.16.418-.16.578 0l.943.955.944-.955a.402.402 0 01.578 0zm-1.956 5.025c.726.017 1.575.462 1.575 1.656a.41.41 0 01-.407.411.408.408 0 01-.406-.411c0-.673-.423-.824-.778-.832h-.099c-.35.002-.761.148-.761.823 0 1.219-.844 1.656-1.566 1.661h-.13c-.725-.017-1.573-.462-1.573-1.655 0-.672-.423-.824-.78-.832h-.097c-.353.003-.762.148-.762.823a.41.41 0 01-.406.412.408.408 0 01-.406-.412c0-1.21.843-1.641 1.566-1.647h.128c.726.017 1.575.462 1.575 1.656 0 .672.423.823.778.832h.107c.498-.003.753-.283.753-.824 0-1.224.843-1.658 1.566-1.664l.123.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileErrorLight;
