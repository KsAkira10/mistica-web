/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconNumericKeypadLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.05 4.733c.258.266.642.406 1.104.406.462 0 .849-.143 1.104-.406.255-.264.383-.628.383-1.09 0-.936-.554-1.493-1.487-1.493s-1.487.557-1.487 1.493c0 .462.126.824.383 1.09zm.177-1.09c0-.627.302-.933.927-.933s.927.306.927.933c0 .311-.07.54-.224.697-.154.157-.39.236-.703.236-.314 0-.555-.081-.703-.236-.148-.154-.224-.386-.224-.697zm4.479 1.496c-.462 0-.843-.14-1.104-.406-.26-.266-.383-.628-.383-1.09 0-.936.557-1.493 1.487-1.493s1.487.557 1.487 1.493c0 .462-.129.826-.383 1.09-.255.263-.642.406-1.104.406zm-.927-1.496c0-.627.302-.933.927-.933s.927.306.927.933c0 .311-.07.54-.224.697-.154.157-.39.236-.703.236-.314 0-.555-.081-.703-.236-.149-.154-.224-.386-.224-.697zm4.476 1.496c-.462 0-.843-.14-1.104-.406-.26-.266-.383-.628-.383-1.09 0-.936.554-1.493 1.487-1.493s1.487.557 1.487 1.493c0 .462-.129.826-.383 1.09-.255.263-.642.406-1.104.406zm-.927-1.496c0-.627.302-.933.927-.933s.927.306.927.933c0 .311-.07.54-.224.697-.154.157-.39.236-.703.236-.314 0-.555-.081-.703-.236-.149-.154-.224-.386-.224-.697zM5.154 8.416c-.462 0-.846-.14-1.104-.406-.257-.266-.383-.627-.383-1.09 0-.935.557-1.493 1.487-1.493s1.487.558 1.487 1.493c0 .463-.128.827-.383 1.09-.255.263-.642.406-1.104.406zM4.227 6.92c0-.627.302-.932.927-.932s.927.305.927.932c0 .308-.07.541-.224.698-.154.157-.39.235-.703.235-.314 0-.555-.081-.703-.235-.148-.154-.224-.387-.224-.698zm4.479 1.496c-.462 0-.843-.14-1.104-.406-.26-.266-.383-.627-.383-1.09 0-.935.557-1.493 1.487-1.493s1.487.558 1.487 1.493c0 .463-.129.827-.383 1.09-.255.263-.642.406-1.104.406zM7.779 6.92c0-.627.302-.932.927-.932s.927.305.927.932c0 .308-.07.541-.224.698-.154.157-.39.235-.703.235-.314 0-.555-.081-.703-.235-.149-.154-.224-.387-.224-.698zm3.93 14.908h6.448c.737 0 1.361-.221 1.753-.622.392-.4.591-.97.591-1.692v-6.008c0-.883-.523-1.412-1.406-1.412-.339 0-.627.078-.851.227-.062-.787-.575-1.252-1.4-1.252-.343 0-.631.078-.855.227-.065-.782-.577-1.241-1.4-1.241-.337 0-.623.078-.847.224V6.923c0-.935-.554-1.493-1.487-1.493-.894 0-1.42.524-1.482 1.476v.182c0 1.067-.002 6.927 0 7.306a.301.301 0 01-.014.112.868.868 0 01-.168-.233 12.339 12.339 0 01-.17-.319c-.345-.653-.67-1.266-1.018-1.54-.473-.373-1.142-.387-1.59-.029-.345.272-.594.815-.261 1.516a872.04 872.04 0 012.832 6.087l.205.444v.001h.001v.001l.318.685c.173.367.389.709.8.709zm-3.552-9.006a.641.641 0 01.409-.14.811.811 0 01.49.174c.252.199.566.79.868 1.361l.086.161.085.161c.306.569.636.58.807.538.263-.067.431-.336.431-.686-.002-.346 0-5.231 0-6.908V6.93c.045-.66.322-.943.925-.943.624 0 .927.305.927.932v4.547h.56c0-.572.277-.852.846-.852s.846.277.846.852v1.014h.56c0-.572.277-.852.846-.852s.846.277.846.852v1.025h.56c0-.572.278-.852.846-.852.569 0 .846.277.846.852v6c0 .571-.143 1.008-.431 1.302-.289.294-.77.457-1.356.457h-6.448c-.03 0-.112 0-.291-.384-.067-.14-.221-.474-.436-.938v-.001l-.001-.002-.087-.188a944.774 944.774 0 00-2.835-6.092c-.168-.348-.129-.656.1-.838zm-3.003-1.129c-.462 0-.846-.14-1.104-.406-.257-.266-.383-.627-.383-1.09 0-.935.557-1.495 1.487-1.495s1.487.557 1.487 1.493c0 .462-.128.826-.383 1.09-.255.263-.642.408-1.104.408zm-.927-1.495c0-.628.302-.933.927-.933s.927.305.927.933c0 .31-.07.54-.224.697-.154.157-.39.235-.703.235-.314 0-.555-.08-.703-.235-.148-.154-.224-.39-.224-.697zm4.479 1.495c-.462 0-.843-.14-1.104-.406-.26-.266-.383-.627-.383-1.09 0-.935.557-1.492 1.487-1.492s1.487.557 1.487 1.493c0 .462-.129.826-.383 1.09-.255.263-.642.405-1.104.405zm0-2.428c-.625 0-.927.305-.927.933 0 .308.075.543.224.697.148.154.39.235.703.235.314 0 .549-.078.703-.235.154-.157.224-.386.224-.697 0-.628-.302-.933-.927-.933z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconNumericKeypadLight;
