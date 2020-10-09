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

const IconPoisonFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M12.048 15.123a.188.188 0 01.03-.02c.006-.002.014-.008.023-.01a.376.376 0 01.232-.022.608.608 0 01.068.019h.002c.023.008.042.02.062.033.048.034.09.079.12.13.012.016.028.03.034.05l.003.002.005.009v.003l.12.28a.398.398 0 01-.563.504c-.008-.003-.013-.009-.019-.014a.373.373 0 01-.151-.18l-.006-.013-.002.002-.006.009a.37.37 0 01-.118.157l-.008.005-.025.017-.017.011a.396.396 0 01-.199.056.356.356 0 01-.095-.014l-.053-.017h-.009a.13.13 0 01-.028-.014c-.022-.014-.04-.03-.061-.044l-.031-.02-.011-.008c-.02-.02-.031-.045-.045-.068l-.026-.042a.393.393 0 01-.036-.095.388.388 0 01.02-.221l.002-.009.006-.01.006-.018.109-.269a.4.4 0 01.216-.207c.002 0 .002-.003.005-.003h.003c.006 0 .011 0 .014-.002a.395.395 0 01.286.005c.036.017.064.042.095.065.02-.014.034-.026.048-.037zm-2.185-.26a.495.495 0 01-.107-.042.375.375 0 01-.1-.062.374.374 0 01-.096-.18.378.378 0 01-.011-.078c0-.008-.006-.016-.006-.025v-.025a.408.408 0 01.112-.258l.328-.327-.328-.328a.387.387 0 01-.109-.221.458.458 0 01-.005-.062l.002-.006a.3.3 0 01.009-.07.397.397 0 01.106-.21.428.428 0 01.32-.115.4.4 0 01.246.112l.328.328.328-.328a.394.394 0 01.355-.106.43.43 0 01.21.106.39.39 0 01.101.227l.006.031a.226.226 0 01.003.045v.011a.384.384 0 01-.11.255l-.327.328.327.327a.394.394 0 01.11.227c.002.017.002.037.002.054a.176.176 0 01-.008.053l-.008.03a.398.398 0 01-.098.205c-.028.025-.062.042-.093.059a.47.47 0 01-.095.042c-.003 0-.006.003-.011.003a.29.29 0 01-.084.01.38.38 0 01-.208-.066c-.005-.003-.01-.009-.02-.014-.019-.014-.038-.02-.055-.037l-.325-.327-.325.327c-.02.023-.045.031-.07.048h-.003a.392.392 0 01-.21.07.632.632 0 01-.003 0 .385.385 0 00.21-.07l.003-.003-.291.062zm.997-3.787c-.843.257-1.866.955-1.866 2.826 0 .924.255 1.569.611 2.008l.084.098c.16.177.336.317.518.429v.216c0 .078.006.15.02.218.025.126.07.235.14.322.025.031.05.06.081.084.151.138.367.208.644.208h1.754c.28 0 .493-.073.647-.208a.508.508 0 00.067-.067c.112-.134.165-.325.165-.555v-.215c.645-.4 1.21-1.143 1.21-2.518 0-1.034-.322-1.712-.753-2.155a2.401 2.401 0 00-.238-.212c-.686-.538-1.53-.611-1.854-.617l-.031-.002c-.079-.006-.168-.006-.247-.006a3.431 3.431 0 00-.904.134.12.12 0 00-.048.012zM9.308 6.03a.598.598 0 01-.597-.6V4.333a.598.598 0 111.193 0v1.098c0 .33-.265.6-.596.6zm1.706 0a.598.598 0 01-.597-.6V4.333a.598.598 0 111.193 0v1.098c0 .33-.265.6-.596.6zm1.706 0a.598.598 0 01-.597-.6V4.333a.598.598 0 111.193 0v1.098c.003.33-.266.6-.596.6zm1.709 0a.598.598 0 01-.597-.6V4.333a.598.598 0 111.193 0v1.098a.6.6 0 01-.596.6zm-7.85 3.353h10.64c-.13-.894-.558-1.496-1.275-1.782a1.41 1.41 0 01-.709.2H8.493c-.238 0-.454-.074-.653-.177a2.071 2.071 0 00-.627.392c-.34.328-.552.784-.633 1.367zm8.113 11.131c1.305 0 2.112-.518 2.423-1.543H6.683c.113.367.286.672.527.913.429.415 1.076.63 1.91.63h5.572zM8.277 3.451v2.927c0 .12.096.224.216.224h6.742a.223.223 0 00.224-.224V3.451a.223.223 0 00-.224-.224H8.493a.221.221 0 00-.216.224zm8.359 3.134c1.18.583 1.823 1.776 1.823 3.398l-.008 7.925c0 2.383-1.409 3.806-3.76 3.806h-5.57c-1.157 0-2.079-.327-2.74-.966-.692-.672-1.045-1.622-1.045-2.838V9.983c0-1.207.35-2.157 1.053-2.832.208-.207.454-.367.717-.512a1.59 1.59 0 01-.022-.264V3.448c0-.784.63-1.423 1.409-1.423h6.742c.782 0 1.42.639 1.42 1.423v2.927a2.333 2.333 0 01-.02.21zm-4.095 6.95a.4.4 0 01-.115-.283c0-.003.003-.003.003-.006a.425.425 0 01.112-.28.41.41 0 01.565 0l.328.328.328-.328a.41.41 0 01.566 0 .438.438 0 01.098.202.351.351 0 01.005.143.388.388 0 01-.103.221L14 13.86l.328.328a.38.38 0 01.106.246.342.342 0 01-.014.14.409.409 0 01-.095.182.366.366 0 01-.093.056.409.409 0 01-.193.06.387.387 0 01-.227-.082c-.017-.011-.039-.02-.056-.034l-.327-.327-.328.327a.295.295 0 01-.067.042.394.394 0 01-.213.07.37.37 0 01-.185-.053.375.375 0 01-.101-.062.435.435 0 01-.11-.26c0-.008-.005-.017-.005-.025a.4.4 0 01.115-.283l.328-.328-.322-.322z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPoisonFilled;
