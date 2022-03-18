/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconOpticalFiberRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.383 6.342a1.623 1.623 0 00-1.451 2.328l-4.782 4.832-1.388-1.402 6.934-7.008c.211.102.445.162.692.162.888 0 1.612-.731 1.612-1.63a1.62 1.62 0 00-1.617-1.62 1.623 1.623 0 00-1.451 2.329l-6.93 7.003-1.387-1.403L15.4 5.097a1.6 1.6 0 00.692.161c.889 0 1.612-.73 1.612-1.629 0-.898-.724-1.629-1.612-1.629a1.623 1.623 0 00-1.452 2.328L9.854 9.165l-.146-.148a1.365 1.365 0 00-1.946 0L2 14.863 9.685 22l5.358-5.628a1.405 1.405 0 000-1.967l-.132-.135 4.785-4.837c.211.102.445.162.692.162.888 0 1.612-.73 1.612-1.629 0-.898-.728-1.624-1.617-1.624zm0-3.254a.54.54 0 01.536.541.54.54 0 01-.536.542.542.542 0 010-1.083zm-3.755.541a.54.54 0 00-.536-.541.54.54 0 00-.536.541.54.54 0 00.536.542.54.54 0 00.536-.542zM9.62 19.977l-5.556-5.16 4.672-4.74 5.253 5.313-4.37 4.587zM19.847 7.971a.54.54 0 00.536.541.542.542 0 000-1.083.542.542 0 00-.535.542z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.454 19.959a7.426 7.426 0 01-.838-.696C2.88 17.588 2 15.093 2 11.846s.88-5.742 2.616-7.417C6.29 2.818 8.723 2 11.846 2s5.557.818 7.23 2.429c1.736 1.672 2.616 4.168 2.616 7.417 0 3.25-.88 5.742-2.616 7.417-1.673 1.61-4.107 2.429-7.23 2.429-2.47 0-4.509-.512-6.08-1.522a.563.563 0 01-.312-.211zm.418-1.087a6.237 6.237 0 01-1.193-1.24l2.668-2.63.334.337.271.274.603.611-2.683 2.648zm.962.627l2.897-2.872a.559.559 0 00.006-.792l-.224-.227c1.344-.678 3.327-1.384 5.966-1.574.073.17.182.327.317.456.285.27.655.41 1.109.41.453 0 .823-.133 1.109-.41.286-.277.437-.647.437-1.07 0-.423-.154-.795-.437-1.067-.283-.272-.655-.412-1.11-.412-.453 0-.826.137-1.108.41a1.39 1.39 0 00-.356.56c-2.056.145-3.748.588-5.079 1.097l4.768-4.705a1.4 1.4 0 00.605.117c.392-.011.75-.174 1.075-.493.325-.32.493-.678.505-1.07a1.423 1.423 0 00-.446-1.064c-.3-.297-.67-.448-1.067-.437-.392.008-.75.173-1.075.493-.326.32-.494.678-.505 1.07-.008.204.034.406.115.594l-4.86 4.8c.535-1.347 1-3.086 1.151-5.215a1.36 1.36 0 00.56-.356c.272-.285.41-.658.41-1.109 0-.45-.135-.823-.41-1.11a1.442 1.442 0 00-1.067-.436c-.423 0-.795.154-1.067.437-.272.286-.409.655-.409 1.109 0 .454.137.826.41 1.11.128.137.285.243.456.316-.19 2.63-.891 4.61-1.566 5.952l-.193-.196a.559.559 0 00-.793-.005l-2.875 2.836c-.64-1.29-.963-2.895-.963-4.8 0-2.933.765-5.157 2.275-6.61 1.457-1.404 3.627-2.116 6.45-2.116 2.824 0 4.995.712 6.452 2.115 1.51 1.457 2.274 3.678 2.274 6.61 0 2.934-.764 5.158-2.274 6.611-1.457 1.404-3.628 2.115-6.451 2.115-2.008 0-3.686-.36-5.012-1.072zm9.656-6.062c.003.143.048.204.093.246.025.026.103.098.333.098.23 0 .308-.072.333-.098.045-.044.093-.109.093-.26 0-.151-.048-.216-.093-.26-.025-.026-.103-.099-.333-.099-.23 0-.308.073-.333.098-.045.045-.093.11-.093.258v.011c-.003.003-.003.006 0 .006zm-.781-5.132c-.065.003-.143-.01-.252-.117-.101-.101-.113-.177-.11-.233V7.95c.004-.038.01-.137.171-.297.168-.168.28-.171.317-.171.064-.003.148.014.249.115.1.1.115.176.112.235v.005c-.003.038-.01.137-.17.297-.169.169-.28.171-.317.171zM10.126 7.06c.149 0 .213-.048.258-.093.025-.025.098-.1.098-.333 0-.232-.073-.308-.098-.333-.045-.045-.11-.093-.26-.093-.152 0-.216.048-.261.093-.025.025-.098.1-.098.333s.073.308.098.333c.042.045.103.09.246.093h.017z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconOpticalFiberRegular;
