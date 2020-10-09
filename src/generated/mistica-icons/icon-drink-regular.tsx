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

const IconDrinkRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.955 6.266h-1.081l-.577 2.4h1.61l.27-2.26c-.006-.045-.104-.14-.222-.14zm-1.42 13.964l1.224-10.322h-1.762L13.77 19.19a.625.625 0 01-1.215-.29l2.157-8.992h-8.06l1.222 10.246c.003.19.1.286.218.286h8.23a.209.209 0 00.213-.21zM6.459 6.266a.213.213 0 00-.212.213l.26 2.188h8.504l.577-2.4H6.46zM21.084 4.13a.62.62 0 01.24.843v.003a.618.618 0 01-.842.24l-.006-.002-2.955-1.647-.35 1.456h.781c.807 0 1.465.653 1.465 1.457L17.78 20.303c.003.73-.65 1.383-1.46 1.383H8.092A1.46 1.46 0 016.63 20.23L5 6.552c-.003-.877.653-1.53 1.46-1.53h9.43l.609-2.546a.609.609 0 01.355-.423.624.624 0 01.555.025l3.675 2.05zM10.18 13.496c.782-.779.219-1.462.054-1.63l-.076-.076c-.101-.095-.4-.347-.798-.347-.25 0-.535.098-.835.395-.776.773-.207 1.467-.05 1.635l.078.079c.103.1.395.35.787.35.246-.003.538-.104.84-.406zm.65-2.21c.675.689.916 1.82-.061 2.795-.535.535-1.073.644-1.429.644-.698 0-1.19-.408-1.37-.585l-.098-.098c-.664-.697-.902-1.83.065-2.793.529-.526 1.067-.638 1.423-.638.697 0 1.193.406 1.375.58.028.027.064.061.095.095zm.54 6.196c.435-.434.121-.813.029-.908l-.042-.042a.672.672 0 00-.443-.193c-.137 0-.297.056-.465.221-.431.429-.115.815-.028.908.014.014.028.03.045.045a.656.656 0 00.437.196c.137 0 .297-.06.468-.227zm.564-1.546l.064.064c.485.496.678 1.356-.039 2.07-.39.387-.787.468-1.056.468-.367 0-.74-.16-1.02-.432l-.064-.064c-.476-.501-.67-1.359.042-2.067.384-.381.784-.462 1.053-.462.521-.003.885.297 1.02.423z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDrinkRegular;
