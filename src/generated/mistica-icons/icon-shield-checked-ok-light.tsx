/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconShieldCheckedOkLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.89 21.981a.29.29 0 00.108.019.424.424 0 00.108-.014c4.885-1.645 7.26-4.041 7.26-7.325V5.484a.36.36 0 00-.35-.366c-3.812 0-6.744-2.984-6.77-3.012a.341.341 0 00-.495 0l-.008.008c-.178.175-3.051 3.004-6.763 3.004a.36.36 0 00-.35.366v9.172c0 3.284 2.375 5.68 7.26 7.325zm-6.555-7.32V5.84c3.318-.14 5.878-2.25 6.663-2.979.786.724 3.346 2.838 6.664 2.98v8.819c0 2.899-2.178 5.055-6.664 6.587-4.48-1.527-6.663-3.684-6.663-6.587zm9.191-3.459a.377.377 0 00-.004-.517.338.338 0 00-.494.005l-3.785 4.004-2.03-2.124a.334.334 0 00-.494 0 .377.377 0 000 .517l2.528 2.645 4.28-4.53zm1.33-.949c-.387 0-.701-.329-.701-.733 0-.404.314-.733.7-.733.387 0 .701.33.701.733 0 .404-.314.733-.7.733z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M20.61 5.154v.028c0 .534.006 6.768-.457 9.49-.616 3.583-7.68 6.983-7.98 7.126a.398.398 0 01-.348 0c-.302-.143-7.359-3.543-7.975-7.126-.472-2.716-.465-8.928-.465-9.487v-.03a.41.41 0 01.504-.396c1.745.275 2.692-.358 3.79-1.092 1.059-.711 2.26-1.516 4.314-1.516H12c2.05.003 3.252.805 4.312 1.513l.013.008c1.091.73 2.038 1.36 3.784 1.087a.455.455 0 01.342.09.428.428 0 01.16.305zm-1.258 9.378c.392-2.294.44-7.367.442-8.916-1.801.156-2.875-.56-3.91-1.25l-.02-.013C14.853 3.675 13.805 2.975 12 2.975h-.006c-1.807 0-2.854.7-3.868 1.378-1.05.697-2.149 1.412-3.927 1.269.005 1.557.056 6.619.45 8.907.496 2.886 6.267 5.897 7.348 6.44 1.081-.54 6.857-3.555 7.356-6.437zM16.287 8.91a.403.403 0 00-.571.003l-5.247 5.291-2.196-2.215-.003-.003a.403.403 0 00-.571.003.41.41 0 000 .58l2.485 2.507.002.002c.16.157.415.157.572-.002l5.532-5.583a.41.41 0 000-.58l-.003-.003z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconShieldCheckedOkLight;
