/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconVodRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M22 4.223v15.554A2.226 2.226 0 0119.777 22H4.223A2.226 2.226 0 012 19.777V4.223C2 3 2.995 2 4.223 2h15.554A2.23 2.23 0 0122 4.223zm-7.59 7.595c0 1.683-1.246 3.057-2.777 3.057-1.532 0-2.778-1.37-2.778-3.057 0-1.688 1.246-3.058 2.778-3.058 1.53 0 2.778 1.375 2.778 3.058zm-5.593-2.21l-1.854 4.817-.002.005-.002.004a.435.435 0 01-.095.152.611.611 0 01-.1.09.48.48 0 01-.123.066.576.576 0 01-.2.038.576.576 0 01-.18-.033c-.004 0-.009 0-.018-.005a.48.48 0 01-.124-.066.45.45 0 01-.1-.09c-.009-.01-.013-.014-.018-.024a.57.57 0 01-.076-.128l-.002-.004s-.003-.003-.003-.005L4.076 9.608A.554.554 0 115.11 9.21l1.333 3.465L7.774 9.21a.551.551 0 01.716-.317.552.552 0 01.327.715zm2.81.266c-.919 0-1.668.872-1.668 1.944 0 1.071.75 1.943 1.669 1.943.92 0 1.668-.872 1.668-1.943 0-1.072-.748-1.944-1.668-1.944zm8.34 1.944c0 1.635-1.247 2.962-2.779 2.962H15.15V8.855h2.038c1.532 0 2.778 1.327 2.778 2.963zm-2.783-1.854h-.925v3.702h.925c.924.005 1.668-.83 1.668-1.849 0-1.019-.749-1.853-1.668-1.853zm2.598-6.48H4.223a.74.74 0 00-.74.74v15.553c0 .407.333.74.74.74h15.554a.74.74 0 00.74-.74V4.223h.004a.74.74 0 00-.74-.74z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconVodRegular;
