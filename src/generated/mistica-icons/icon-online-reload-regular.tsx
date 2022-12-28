/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconOnlineReloadRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M10.81 14.456a5.4 5.4 0 001.236.135c2.395 0 3.714-1.289 3.711-3.63 0-.733-.126-1.362-.377-1.883l.032.009.236.064a.422.422 0 00.224-.812l-.235-.065-.236-.064c-.32-.089-.525-.145-.644-.168-.485-.098-.854.143-.958.627a5.9 5.9 0 00-.076.474l-.014.103a6.22 6.22 0 01-.075.505.42.42 0 00.818.182 6.74 6.74 0 00.09-.575l.007-.057c.246.429.37.985.37 1.66 0 1.876-.94 2.79-2.873 2.79a4.493 4.493 0 01-1.04-.112.42.42 0 10-.196.818zm-2.203-1.747c-.25-.52-.377-1.15-.377-1.883 0-2.342 1.32-3.63 3.715-3.63a5.33 5.33 0 011.246.137.422.422 0 11-.185.82c-.003 0-.007 0-.01-.002a4.57 4.57 0 00-1.051-.112c-1.933 0-2.874.913-2.874 2.79 0 .67.123 1.223.366 1.651l.006-.052a7.27 7.27 0 01.09-.574.423.423 0 01.496-.327.423.423 0 01.328.495c0 .003 0 .006-.003.006-.028.129-.054.32-.076.504l-.014.103c-.023.17-.045.339-.076.474-.092.423-.372.658-.753.658a1.04 1.04 0 01-.207-.022 11.384 11.384 0 01-.67-.175l-.207-.058-.235-.064a.422.422 0 01.224-.812l.235.064.032.009z"
            />
            <path
                fill={fillColor}
                d="M5.446 16.933h13.11c1.097 0 1.94-.328 2.503-.972.521-.6.788-1.468.788-2.583V8.44c0-1.115-.264-1.984-.788-2.583-.563-.644-1.406-.972-2.504-.972H5.446c-1.1 0-1.941.328-2.504.972-.521.6-.787 1.468-.787 2.583v4.938c0 1.115.266 1.983.787 2.585.563.642 1.406.97 2.504.97zM3.788 6.596c.344-.394.885-.588 1.658-.588l13.11-.003c.77 0 1.313.194 1.658.589.338.39.512 1.01.512 1.846v4.938c0 .835-.174 1.457-.512 1.846-.345.395-.888.588-1.659.588H5.446c-.77 0-1.314-.193-1.658-.588-.34-.39-.513-1.011-.513-1.846V8.44c0-.835.174-1.457.513-1.844zm17.465 12.521H2.749a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56h18.504c.308 0 .56.252.56.56 0 .308-.252.56-.56.56z"
            />
        </svg>
    );
};

export default IconOnlineReloadRegular;
