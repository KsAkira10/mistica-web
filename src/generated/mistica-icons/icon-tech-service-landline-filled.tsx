/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTechServiceLandlineFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M6.012 14.365c-1.474-1.74-2.57-3.471-3.216-5.089-.835-2.09-.854-3.874-.059-5.028l.017-.025.014-.017c.095-.134.39-.54.695-.832C4.31 2.562 5.18 2.15 6.04 2.15c.86 0 1.717.415 2.535 1.235.305.297.568.633.787 1 .431.695.585 1.41.465 2.126-.12.717-.524 1.42-1.194 2.093-.156.16-.322.308-.498.445-.09.151.025.591.496 1.275.19.278.421.572.67.866l4.442-4.443c.01-.317.044-.628.1-.939.157-.857.468-1.524.922-1.977.451-.448 1.106-.757 1.947-.913a6.44 6.44 0 011.087-.11l.005-.003c.547.003 1.009.297 1.202.768.193.47.073 1.006-.314 1.392l-.526.527.039.271.269.037.53-.527c.26-.263.593-.406.932-.406.42 0 .812.221 1.03.583.13.215.197.462.194.711-.006.356-.04.715-.104 1.065-.154.857-.465 1.523-.918 1.977-.451.451-1.104.76-1.947.916-.32.059-.642.095-.967.107l-4.446 4.45c.173.147.338.28.494.401.924.714 1.37.82 1.555.82a.202.202 0 00.12-.027c.137-.177.286-.345.446-.502.817-.817 1.68-1.235 2.56-1.235.56 0 1.117.171 1.658.504a4.89 4.89 0 011 .787c.804.804 1.218 1.64 1.232 2.485.017.877-.395 1.762-1.226 2.63a6.368 6.368 0 01-.813.681l-.02.014-.016.014-.025.017c-.56.386-1.266.582-2.101.582-1.28 0-2.82-.473-4.457-1.367-1.177-.643-2.373-1.481-3.575-2.504-.015.27-.046.536-.094.802-.157.854-.468 1.52-.922 1.974-.45.451-1.103.76-1.947.916a6.445 6.445 0 01-1.09.11h-.005c-.546 0-1.008-.295-1.201-.765-.194-.47-.073-1.006.313-1.392l.527-.53-.04-.271-.271-.04-.527.527c-.26.263-.594.406-.932.406-.423 0-.815-.22-1.034-.583a1.34 1.34 0 01-.19-.708c.005-.356.039-.715.103-1.065.154-.857.465-1.523.919-1.977.448-.449 1.103-.757 1.944-.914.282-.051.565-.085.849-.1zM17.802 3.93c-.054 0-1.555.008-2.244.694-.7.7-.695 2.244-.695 2.244a.95.95 0 01-.24.586l-7.785 7.781a.967.967 0 01-.586.24H6.25c-.05 0-1.552.006-2.241.696-.7.7-.695 2.243-.695 2.243 0 .115.042.177.104.177.039 0 .09-.025.14-.076l.683-.68a.794.794 0 01.513-.2.59.59 0 01.07.006l.977.14a.49.49 0 01.39.39l.14.977a.767.767 0 01-.193.583l-.681.68c-.135.132-.087.244.1.244.051 0 1.553-.005 2.242-.695.7-.7.694-2.243.694-2.243 0-.188.107-.451.241-.586l7.787-7.781a.953.953 0 01.583-.241h.003c.05 0 1.552-.006 2.24-.695.701-.7.695-2.243.695-2.243 0-.115-.042-.177-.103-.177-.04 0-.09.023-.14.076l-.681.68a.794.794 0 01-.513.2.587.587 0 01-.07-.006l-.977-.14a.49.49 0 01-.39-.39l-.14-.977a.767.767 0 01.194-.583l.68-.68c.135-.135.087-.244-.1-.244z"
            />
        </svg>
    );
};

export default IconTechServiceLandlineFilled;
