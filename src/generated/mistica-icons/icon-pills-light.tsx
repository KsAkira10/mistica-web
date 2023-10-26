/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPillsLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.71 3.955c2.207 2.213 2.373 4.642.493 6.885 1.785.894 2.639 2.678 2.642 5.177 0 3.678-1.852 5.826-5.81 5.826-2.619 0-4.308-.944-5.157-2.644-1.039.899-2.123 1.353-3.21 1.353-1.255 0-2.515-.6-3.711-1.801-1.219-1.222-1.824-2.49-1.801-3.78.022-1.237.627-2.461 1.795-3.635l.146-.148c.106-.115.215-.225.328-.322l6.434-6.46c.08-.092.19-.199.302-.305l.149-.146c2.386-2.392 5.014-2.395 7.4 0Zm-6.969.754c-.092.086-.185.173-.266.269l-2.58 2.585-.001.025c-.001.017-.002.035-.007.053-.367 1.188.252 2.594 1.837 4.188.165.163.322.305.482.448.924-1.347 2.513-2.084 4.83-2.084.881 0 1.652.112 2.327.32 1.798-1.98 1.728-3.986-.244-5.964-2.061-2.067-4.151-2.067-6.216 0l-.162.16Zm-7.193 13.45c1.994 2 4.011 2.07 6 .216-.213-.694-.32-1.479-.32-2.355 0-1.157.183-2.16.555-2.995a12.557 12.557 0 0 1-.65-.602C8.747 11.03 8.021 9.72 7.957 8.507l-2.964 2.972a3.54 3.54 0 0 0-.291.286l-.16.165c-1.011 1.014-1.532 2.045-1.549 3.059-.02 1.05.504 2.117 1.555 3.17Zm11.484 2.847c3.219 0 4.83-1.524 4.947-4.625a.395.395 0 0 1-.199.059h-9.496a.413.413 0 0 1-.201-.06c.028.67.109 1.281.277 1.802a.4.4 0 0 1 .107.252c.663 1.714 2.165 2.572 4.565 2.572Zm4.95-5.348c-.12-3.098-1.731-4.624-4.95-4.624-3.215 0-4.826 1.523-4.946 4.624a.413.413 0 0 1 .201-.059h9.496c.073 0 .137.026.199.06Z"
            />
        </svg>
    );
};

export default IconPillsLight;
