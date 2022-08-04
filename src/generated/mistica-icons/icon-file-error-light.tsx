/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFileErrorLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.183 7.583a.683.683 0 01.204.484v12.566c0 .653-.557 1.204-1.218 1.204H5.839c-.65 0-1.219-.563-1.219-1.204V3.356c0-.63.58-1.205 1.218-1.205h7.505c.176 0 .35.07.476.194l5.364 5.238zm-.61 13.05V8.745h-2.55c-.972 0-1.81-.316-2.42-.913-.616-.602-.941-1.426-.941-2.384V2.972H5.838c-.184 0-.403.207-.403.38v17.281c0 .188.205.381.403.381H18.17c.207 0 .403-.185.403-.381zM13.476 3.154v2.297c0 .728.241 1.35.695 1.793.456.445 1.098.683 1.854.683h2.334v-.003l-4.883-4.77zm-5.42 10.322a.4.4 0 00.288-.12l.944-.956.944.956a.405.405 0 00.577 0 .414.414 0 000-.583l-.944-.955.944-.955a.414.414 0 000-.583.403.403 0 00-.577 0l-.944.955-.944-.955a.402.402 0 00-.577 0 .414.414 0 000 .583l.944.955-.944.955a.414.414 0 000 .583c.082.081.185.12.289.12zm8.316-3.193c.16.16.16.42 0 .583l-.944.955.944.955c.16.162.16.42 0 .582a.405.405 0 01-.577 0l-.944-.955-.944.955a.405.405 0 01-.577 0 .414.414 0 010-.582l.944-.955-.944-.955a.414.414 0 010-.583c.16-.16.418-.16.578 0l.943.955.944-.955a.402.402 0 01.578 0zm-.38 6.68c0-1.193-.85-1.638-1.575-1.655l-.123-.003c-.723.006-1.566.44-1.566 1.664 0 .54-.255.82-.753.824h-.107c-.355-.009-.778-.16-.778-.832 0-1.193-.85-1.639-1.575-1.656h-.129c-.722.006-1.565.437-1.565 1.647 0 .227.179.412.406.412a.41.41 0 00.406-.412c0-.675.409-.82.762-.823h.098c.356.008.779.16.779.832 0 1.193.848 1.638 1.574 1.655h.129c.722-.005 1.566-.442 1.566-1.66 0-.676.411-.822.761-.824h.098c.356.008.78.16.78.832 0 .227.179.411.405.411a.41.41 0 00.406-.411z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileErrorLight;
