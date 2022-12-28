/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPackageTrolleyLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.063 17.094l6.544-1.205c.18-.043.353.097.39.3.026.201-.094.395-.276.424l-6.57 1.219c.016.6-.118 1.137-.394 1.56-.355.554-.935.915-1.69 1.055a2.73 2.73 0 01-.556.053c-.522 0-.984-.148-1.35-.443-.496-.392-.829-1.035-.95-1.862-.24-1.568.401-2.69 1.71-3.075L7.444 5.352l-2.172-.45c-.182-.041-.3-.232-.266-.428v-.005c.032-.194.205-.324.387-.29l2.408.496a.374.374 0 01.267.302l1.511 10.022c.353-.024.687.015.981.119l-.701-4.643a1.038 1.038 0 01.066-.517.73.73 0 01-.207-.421l-.649-4.294a.835.835 0 01.12-.597.605.605 0 01.408-.281l4.605-.856a.591.591 0 01.508.154c.139.124.23.296.255.487l.649 4.298c.004.005.003.013.001.021l-.002.016 1.043-.192a.677.677 0 01.587.177c.162.15.269.358.3.583l.754 4.995c.073.496-.2.963-.614 1.036l-5.921 1.093c.141.266.234.586.3.917zm-.982-12.25l-1.377.244.667 4.33 4.58-.812-.642-4.33-1.363.244.207 1.374a.37.37 0 01-.273.428l-1.205.223h-.052a.337.337 0 01-.328-.305l-.214-1.396zm-.496 5.32c-.039.01-.084.089-.066.193l.758 4.993c.005.065.06.17.119.147l6.175-1.137c.039-.01.087-.09.073-.193l-.76-4.993c-.007-.06-.055-.148-.107-.148h-.014l-1.819.332.294 1.988a.34.34 0 01-.052.274.384.384 0 01-.221.155l-1.612.295c-.005 0-.011 0-.019.002a.165.165 0 01-.033.005c-.162 0-.3-.133-.328-.31l-.3-1.986-2.088.382zM8.55 19.456c.353.281.829.37 1.41.26 1.167-.214 1.684-1.012 1.49-2.304-.102-.64-.33-1.108-.683-1.388-.255-.206-.573-.303-.956-.303-.139 0-.293.008-.453.037-1.17.22-1.684 1.018-1.49 2.312.102.641.327 1.108.682 1.386zm5.98-8.355s-.248-1.618-.246-1.618l-.95.176.24 1.619.956-.177zM12.283 4.63s-.541.094-.541.097l.152 1.028.542-.104-.153-1.021z"
            />
        </svg>
    );
};

export default IconPackageTrolleyLight;
