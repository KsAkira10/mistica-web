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

const IconLocationMapRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.362 18.861l2.939 1.295-1.743-6.093-1.862.93.666 3.868zm-11.73-4.77l-1.908 6.056 2.918-1.269.457-3.958-1.468-.829zm5.778 4.263c-.555-.593-1.586-1.88-2.605-3.436l-.516.15-.437 3.83 3.544 1.454.014-1.998zM12 3.35c-3.06 0-4.75 1.689-4.761 4.759-.008 2.714 3.227 7.328 4.748 9.092 1.4-1.635 4.787-6.224 4.795-9.064.009-3.078-1.68-4.779-4.756-4.787h-.025zm.614 14.958l-.014 2.028 3.55-1.42-.65-3.793-.365-.115c-1.025 1.527-2.045 2.77-2.52 3.3zm9.2 2.756a.606.606 0 01-.183.62.605.605 0 01-.641.097l-4.168-1.837-4.605 1.846a.58.58 0 01-.365.025l-.112-.025c-.03-.009-.061-.017-.09-.028l-4.428-1.815-4.23 1.837a.61.61 0 01-.644-.104.61.61 0 01-.17-.63l2.526-8.025a.6.6 0 01.871-.342l2.244 1.27.322-.093c-1.143-1.92-2.112-4.062-2.107-5.748.012-3.734 2.241-5.961 5.97-5.961h.028c3.742.011 5.969 2.252 5.958 5.997-.006 1.757-1.014 3.913-2.18 5.813l.168.053 2.695-1.345a.607.607 0 01.513-.011.594.594 0 01.336.387l2.291 8.02zM10.913 7.78c0 .748.347 1.095 1.095 1.095s1.098-.347 1.098-1.095-.35-1.098-1.098-1.098c-.745 0-1.095.348-1.095 1.098zm3.4 0c0 1.42-.882 2.303-2.302 2.303S9.71 9.2 9.71 7.78s.882-2.302 2.302-2.302 2.303.882 2.303 2.302z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLocationMapRegular;
