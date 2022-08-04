/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCallDetailsRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M8.066 21.847h12.297c.588 0 1.106-.518 1.106-1.107V7.897c0-.154-.062-.3-.174-.406L15.833 2.31a.567.567 0 00-.386-.154H8.066c-.569 0-1.107.538-1.107 1.106v1.504a2.49 2.49 0 00-1.277-.403c-.709-.014-1.42.314-2.115.978a4.933 4.933 0 00-.549.655l-.008.012-.009.01a.159.159 0 00-.008.012c-.639.921-.627 2.336.028 3.983.675 1.695 1.986 3.543 3.793 5.35l.067.068.14.138a.556.556 0 00-.062.254v4.918c0 .589.519 1.107 1.107 1.107zm.014-5.296c1.415 1.233 2.83 2.148 4.151 2.674.838.333 1.614.501 2.297.501.661 0 1.235-.156 1.692-.47l.034-.025.012-.01a4.9 4.9 0 00.643-.54c.661-.691.992-1.406.978-2.114-.012-.687-.345-1.359-.986-2a3.895 3.895 0 00-.793-.625c-1.126-.695-2.334-.49-3.404.583a4.419 4.419 0 00-.325.361c-.064.003-.341-.028-.986-.504-.63-.465-1.341-1.16-1.82-1.639l-.065-.064c-.481-.48-1.173-1.19-1.638-1.821-.476-.644-.507-.922-.504-.986a4.4 4.4 0 00.36-.325c1.07-1.073 1.278-2.28.58-3.406a4.082 4.082 0 00-.226-.338V3.298a.085.085 0 01.022-.023h6.504v2.437c0 .956.32 1.776.916 2.376.597.6 1.42.916 2.376.916h2.45V20.72l-.005.005H8.091l-.003-.002a.025.025 0 01-.008-.009V16.55zm12-8.668h-2.182c-.65 0-1.2-.204-1.583-.588-.384-.384-.588-.93-.588-1.583V3.754l4.353 4.13zm-7.432 10.303c-1.96-.782-3.784-2.359-4.969-3.544l-.042-.042-.03-.028c-1.185-1.187-2.762-3.01-3.544-4.972-.501-1.263-.557-2.327-.154-2.924l.017-.025a3.82 3.82 0 01.414-.502c.93-.888 1.667-.89 2.55-.008.173.168.324.361.45.569l.009.016c.266.426.51 1.101-.418 2.028a3.017 3.017 0 01-.333.295.421.421 0 00-.064.058c-.19.208-.387.577-.241 1.154.078.311.249.656.524 1.054.394.574.977 1.238 1.896 2.157l.064.064c.92.919 1.583 1.504 2.157 1.896.398.275.742.446 1.053.524.577.149.947-.05 1.154-.24.02-.02.04-.043.06-.065.089-.118.187-.23.293-.334.928-.93 1.603-.683 2.028-.417l.017.008c.207.127.398.278.569.451.882.88.88 1.62-.009 2.55a3.52 3.52 0 01-.501.414l-.025.017c-.6.406-1.664.35-2.925-.154z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCallDetailsRegular;
