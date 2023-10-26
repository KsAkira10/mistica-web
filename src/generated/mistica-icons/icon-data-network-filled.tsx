/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDataNetworkFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.437 7.894c.263.977.409 2.07.409 3.288 0 5.9-3.196 9.023-9.26 9.023-.894 0-1.734-.073-2.51-.207l-.007-.004-.005-.003c-.01-.006-.018-.01-.03-.01v.596c0 .39-.418.712-1.241.944-.723.208-1.684.325-2.695.325-1.003 0-1.963-.117-2.695-.325-.823-.232-1.24-.554-1.24-.944v-1.972c.28.19.655.364 1.106.49.765.225 1.776.34 2.84.34 1.07 0 2.076-.118 2.85-.34a3.29 3.29 0 0 0 1.078-.495v.596a.503.503 0 0 1 .196-.017c.593.11 1.249.16 1.938.183v-4.076h-2.126a.421.421 0 0 1-.263-.098c-.213.174-.527.347-.978.479-.723.199-1.683.316-2.695.316-1.01 0-1.963-.117-2.686-.316-.647-.19-1.115-.47-1.258-.753v-2.222c.264.207.63.373 1.107.504.765.225 1.776.342 2.84.342 1.062 0 2.076-.115 2.849-.342.46-.131.815-.288 1.078-.487v1.748h2.135v-6.03h-3.93c-.18.811-.28 1.671-.289 2.568l.012.002c.296.05.577.097.831.171.715.208 1.124.474 1.216.796l-.008.008c-.12.297-.527.555-1.2.745-.73.208-1.683.322-2.694.322s-1.963-.114-2.686-.322c-.69-.199-1.107-.462-1.216-.77l-.008-.008c.11-.292.501-.555 1.14-.745v-.009c0-1.218.146-2.31.417-3.288.004-.009.007-.02.009-.03a.12.12 0 0 1 .008-.03c1.053-3.719 4.048-5.674 8.818-5.674 4.787 0 7.781 1.955 8.835 5.675l.002.02c.001.012.002.025.006.036Zm-9.266-.297-.008-4.566c-1.583.28-2.995 2.104-3.71 4.566h3.718Zm4.317 0c-.648-2.496-1.939-4.283-3.48-4.566l.009 4.566h3.47Zm4.075 6.86c.289-.953.434-2.04.434-3.272 0-1.011-.092-1.93-.288-2.759h-3.154c.154.863.238 1.782.238 2.742a15.71 15.71 0 0 1-.348 3.292h3.118v-.003Zm-5.51 4.697c2.558-.482 4.303-1.773 5.205-3.868H17.23c-.476 1.656-1.236 3.006-2.177 3.868Zm1.292-3.868H13.02v4.05c1.42-.266 2.636-1.831 3.325-4.05Zm.33-6.863h-3.658v6.034h3.555c.232-1.014.366-2.123.366-3.291 0-.961-.092-1.888-.263-2.743Zm3.784-.826c-.834-2.403-2.644-3.86-5.4-4.384 1.036.953 1.854 2.493 2.314 4.384h3.086Zm-12.907 0c.493-1.863 1.353-3.398 2.44-4.359-2.687.538-4.448 1.998-5.272 4.359h2.832Zm-.196.83H4.482c-.188.77-.28 1.63-.289 2.576.58-.1 1.224-.157 1.905-.157.347-.003.678.014 1.003.048.017-.863.1-1.69.255-2.468Zm-5.193 9.442c.142.285.607.56 1.252.747.725.208 1.675.323 2.697.32 1.014 0 1.972-.115 2.692-.32.712-.207 1.104-.518 1.235-.753v-2.224c-.28.204-.65.375-1.084.496-.767.221-1.778.341-2.846.341-1.064 0-2.072-.123-2.846-.341-.45-.126-.82-.294-1.1-.49v2.224Z"
            />
        </svg>
    );
};

export default IconDataNetworkFilled;
