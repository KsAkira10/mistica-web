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

const IconLightbulbRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.309 3.402V2.7c0-.387.31-.701.691-.701.381 0 .691.314.691.7v.702c0 .386-.31.7-.691.7a.697.697 0 01-.691-.7zm9 7.017h-.519a.697.697 0 00-.691.7c0 .387.31.701.691.701h.519a.697.697 0 00.691-.7.697.697 0 00-.691-.701zm-16.618 0h.519c.38 0 .691.314.691.7 0 .387-.31.701-.691.701h-.52a.697.697 0 01-.691-.7c0-.387.31-.701.691-.701zM5.77 6.663l-.616-.36a.684.684 0 00-.944.257.704.704 0 00.252.957l.616.359a.683.683 0 00.944-.256.709.709 0 00-.252-.957zm2.42-1.527a.688.688 0 01-.6-.35l-.345-.607a.705.705 0 01.253-.957.685.685 0 01.944.256l.345.606c.19.333.08.764-.252.957a.69.69 0 01-.346.095zm7.262-.072a.683.683 0 00.944-.256l.354-.625a.708.708 0 00-.252-.957.684.684 0 00-.944.256l-.355.625c-.19.332-.08.76.253.957zm3.399 1.24a.685.685 0 01.944.256c.19.337.08.763-.253.957l-.616.359a.688.688 0 01-.944-.256.705.705 0 01.253-.957l.616-.36zm-.793 4.995c0 2.13-1.055 4.061-2.828 5.193-.066.04-.16.122-.221.176a1.752 1.752 0 01.443 2.524c.217.292.354.656.354 1.052 0 .97-.775 1.756-1.732 1.756H9.917a1.744 1.744 0 01-1.732-1.756c0-.396.133-.76.354-1.052a1.746 1.746 0 01.448-2.525 2.512 2.512 0 00-.222-.175C6.993 15.36 5.938 13.43 5.938 11.3c0-3.387 2.716-6.14 6.058-6.14 3.345 0 6.062 2.753 6.062 6.14zm-3.98 8.599H9.922a.348.348 0 00-.346.35c0 .193.155.35.346.35h4.156c.19 0 .346-.157.346-.35a.348.348 0 00-.346-.35zm.346-1.757a.348.348 0 00-.346-.35H9.922a.348.348 0 00-.346.35c0 .193.155.35.346.35h4.156c.19 0 .346-.157.346-.35zM12 6.56c-2.579 0-4.675 2.125-4.675 4.74a4.723 4.723 0 002.179 4.007c.08.052.76.501 1.003 1.082h2.982c.242-.58.923-1.03 1.003-1.082l.007-.005a4.729 4.729 0 002.176-4.003c0-2.614-2.096-4.74-4.675-4.74z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.301 4.205a.622.622 0 00.625.617.621.621 0 00.624-.614V2.771a.62.62 0 00-.624-.616.62.62 0 00-.625.616v1.434zm6.317 6.807c0-5.137-4.308-5.571-5.415-5.594-.17-.008-.364-.008-.538-.008-1.134.008-5.353.395-5.353 5.571 0 2.614 1.087 4.014 2.306 4.754l.008 1.115c0 .512.151.91.451 1.173.286.258.723.39 1.89.39h1.998c1.196 0 1.63-.132 1.916-.39.294-.263.44-.66.44-1.173l-.009-1.12c1.219-.746 2.306-2.135 2.306-4.718zm-1.25 0c0 1.762-.56 2.964-1.714 3.67 0 0-.594.361-.585.361l.002.692.009 1.112a.936.936 0 01-.031.25c-.09.027-.358.08-1.078.08h-1.998c-.722 0-.98-.058-1.061-.084a.715.715 0 01-.034-.255l-.014-1.795-.59-.356c-1.138-.689-1.712-1.935-1.712-3.703 0-3.756 2.574-4.33 4.109-4.339h.036c.149 0 .311 0 .468.006 3.784.081 4.193 3.078 4.193 4.361zm-4.775-3.725c1.907.042 4.01 1.106 4.162 3.972a.62.62 0 01-.591.647h-.034a.618.618 0 01-.622-.583C14.38 8.847 12.4 8.536 11.556 8.52h-.145c-.065 0-.131 0-.197-.003a.622.622 0 01-.624-.616.62.62 0 01.624-.616c.124 0 .26 0 .378.003zm3.722 12.238a.622.622 0 00-.624-.616H9.396a.62.62 0 00-.624.616.622.622 0 00.624.616h5.294a.62.62 0 00.625-.616zm-1.339 1.084c.345 0 .625.277.625.616a.62.62 0 01-.625.616H9.951a.622.622 0 01-.625-.616.62.62 0 01.625-.616h4.025zM17.03 6.472a.628.628 0 01-.44-.18.61.61 0 01-.008-.862l.009-.009 1.025-1.017a.629.629 0 01.882 0 .612.612 0 01.006.866l-.006.005L17.47 6.29a.614.614 0 01-.44.183zM6.301 6.469a.63.63 0 00.882 0l.006-.006a.611.611 0 00-.006-.865L6.158 4.58a.629.629 0 00-.882 0l-.008.008a.614.614 0 00.008.866L6.3 6.469zm-1.244 3.638c.345 0 .625.278.625.617a.62.62 0 01-.625.616h-1.45a.622.622 0 01-.625-.616.62.62 0 01.624-.617h1.451zm15.97.544a.62.62 0 00-.625-.616h-1.451a.62.62 0 00-.625.616.621.621 0 00.625.616h1.451a.62.62 0 00.625-.616z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconLightbulbRegular;
