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

const IconShopRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.077 2.5a.75.75 0 01.695.467l2.275 5.594.04.049c1.136 1.485.488 3.025-1.157 3.789l-.079.035v7.805c0 .934-.718 1.7-1.633 1.774l-.146.006h-4.859l-4.867.032v-.032H5.101a1.78 1.78 0 01-1.773-1.634l-.006-.146v-7.812l-.103-.043C1.55 11.619.929 10.03 2.094 8.578l.031-.037 2.258-5.573a.75.75 0 01.582-.46l.113-.008zm-6.962 9.677l-.122.079c-1.348.796-3.386.732-4.557-.015l-.055-.037-.135.082c-.72.404-1.576.569-2.423.506v7.447a.28.28 0 00.215.273l.064.007h4.243l.001-4.246c0-.91.7-1.681 1.593-1.756l.142-.006h2.026c.958 0 1.735.777 1.735 1.735v4.273h4.23a.28.28 0 00.273-.215l.007-.065v-7.412c-.953.094-1.897-.1-2.6-.6l-.05-.039-.093.056c-1.391.795-2.784.76-4.03.179l-.187-.091a5.183 5.183 0 01-.176-.096l-.101-.059zm.992 3.834h-2.026c-.118 0-.235.12-.235.262v4.246h2.495l.001-4.273a.235.235 0 00-.116-.203l-.057-.024-.062-.008zm5.465-12.012H5.583L3.471 9.214a.75.75 0 01-.082.15l-.142.174c-.464.6-.245 1.096.597 1.482 1.025.469 2.336.356 3.068-.335a.75.75 0 011.13.117l.066.079c.57.581 2.641.665 3.437-.16a.75.75 0 011.038-.04c.076.066.248.19.496.317 1.003.516 2.09.515 3.25-.365a.75.75 0 011.044.136l.088.099c.538.537 1.715.64 2.725.22.986-.41 1.224-.964.637-1.656a.75.75 0 01-.123-.203L18.572 4z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconShopRegular;
