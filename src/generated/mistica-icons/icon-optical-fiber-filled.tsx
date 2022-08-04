/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconOpticalFiberFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M20.532 6.405a1.47 1.47 0 00-1.35 2.042l-5.062 5.059-1.426-1.426 7.264-7.261A1.47 1.47 0 0022 3.469 1.47 1.47 0 0020.532 2a1.47 1.47 0 00-1.35 2.042l-7.264 7.261-1.426-1.425 5.053-5.06a1.47 1.47 0 002.042-1.35A1.47 1.47 0 0016.119 2a1.47 1.47 0 00-1.35 2.042L9.71 9.096l-.376-.376c-.419-.419-1.144-.419-1.558 0L2 14.494 9.504 22l5.773-5.774a1.105 1.105 0 000-1.558l-.377-.376 5.058-5.06c.174.076.372.119.574.119A1.47 1.47 0 0022 7.882c0-.81-.659-1.477-1.468-1.477z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12.001 2.155c3.123 0 5.557.818 7.23 2.429 1.736 1.675 2.616 4.168 2.616 7.417 0 3.25-.88 5.745-2.616 7.417-1.673 1.611-4.107 2.429-7.23 2.429-2.303 0-4.23-.446-5.754-1.325l3.648-3.748a.561.561 0 00-.003-.784l-.224-.227c1.344-.678 3.327-1.384 5.966-1.574.073.17.182.327.316.456.286.27.656.41 1.11.41.454 0 .823-.133 1.109-.41.286-.277.437-.647.437-1.07 0-.423-.154-.795-.437-1.067-.283-.272-.655-.412-1.11-.412-.453 0-.826.137-1.109.41a1.39 1.39 0 00-.355.56c-2.056.145-3.748.588-5.079 1.097l4.768-4.705a1.4 1.4 0 00.605.117c.392-.011.75-.173 1.076-.493.325-.32.492-.678.504-1.07a1.423 1.423 0 00-.446-1.064c-.3-.297-.67-.448-1.067-.437-.392.008-.75.173-1.075.493-.325.32-.494.678-.505 1.07-.008.204.034.406.115.594l-4.863 4.8c.535-1.347 1-3.086 1.152-5.215a1.36 1.36 0 00.56-.356c.272-.285.409-.658.409-1.109 0-.45-.135-.823-.41-1.11a1.442 1.442 0 00-1.066-.436 1.45 1.45 0 00-1.068.437c-.271.286-.409.655-.409 1.11 0 .453.138.825.41 1.108.128.135.285.244.456.317-.19 2.63-.89 4.61-1.566 5.952l-.193-.196a.548.548 0 00-.398-.168.566.566 0 00-.4.168l-3.65 3.745c-.863-1.515-1.3-3.428-1.3-5.714 0-3.247.88-5.742 2.616-7.417 1.673-1.611 4.107-2.429 7.23-2.429z"
                    fill={fillColor}
                />
                <path
                    d="M10.018 7.121c.042.045.103.09.246.093h.017c.149 0 .213-.048.258-.093.025-.025.098-.1.098-.333 0-.232-.073-.308-.098-.333-.045-.045-.11-.093-.26-.093-.152 0-.216.048-.261.093-.025.025-.098.1-.098.333s.073.308.098.333zm6.162 1.166c-.168.168-.28.17-.316.17-.065.003-.143-.008-.247-.112l-.003-.002c-.1-.101-.114-.177-.112-.236v-.005c.003-.037.01-.137.171-.297.168-.168.28-.171.317-.171.064-.003.148.014.25.115.1.1.114.176.111.235v.005c-.003.038-.01.137-.17.298zm.888 5.65c-.23 0-.308-.073-.333-.098-.042-.043-.09-.104-.093-.25v-.014c0-.148.048-.213.093-.257.025-.026.104-.098.333-.098.23 0 .308.072.333.098.045.044.093.109.093.26 0 .151-.048.216-.093.26-.025.026-.103.099-.333.099z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconOpticalFiberFilled;
