/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconVirusRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.658 14.798a.62.62 0 00-.412-.773l-.957-.291a3.976 3.976 0 00-.297-1.291l.635-.082a.616.616 0 00.535-.692.615.615 0 00-.683-.535l-1.095.14a12.81 12.81 0 00-.793-1.117l.857-.426a.616.616 0 00.28-.823.628.628 0 00-.832-.28l-1.112.557a37.133 37.133 0 00-1.17-1.25l.84-.84a.606.606 0 000-.871.624.624 0 00-.874 0l-.84.846a25.199 25.199 0 00-1.253-1.168l.56-1.11a.624.624 0 00-.271-.831.612.612 0 00-.832.271l-.437.863a11.06 11.06 0 00-1.112-.781l.14-1.101A.622.622 0 0012 2.52a.627.627 0 00-.692.535l-.081.65a7.88 7.88 0 00-.33-.115 3.547 3.547 0 00-.956-.165l-.305-.99a.622.622 0 00-.776-.402.612.612 0 00-.403.773l.263.848c-.28.115-.521.272-.734.437l-.653-.65a.624.624 0 00-.874 0 .62.62 0 000 .872l.645.65c-.166.204-.33.45-.446.73l-.832-.254a.614.614 0 00-.776.403.61.61 0 00.404.773l.955.306a3.485 3.485 0 00.185 1.016c.03.09.061.184.103.278l-.627.08a.614.614 0 00-.535.684.623.623 0 00.61.544h.082l1.064-.132a11.351 11.351 0 00.714 1.025l.068.087-.824.42a.617.617 0 00.552 1.104l1.081-.543c.356.403.743.82 1.18 1.266l-.816.815a.62.62 0 000 .87.63.63 0 00.437.183.65.65 0 00.437-.182l.816-.815c.437.428.865.823 1.26 1.168l-.543 1.078a.615.615 0 00.551.897c.222 0 .446-.12.552-.337l.42-.831a12 12 0 001.12.798l-.13 1.053a.61.61 0 00.534.692h.073a.61.61 0 00.61-.535l.074-.616.11.043c.085.033.165.065.245.088.345.112.667.163.955.171l.297.93a.61.61 0 00.586.426.726.726 0 00.19-.025.622.622 0 00.404-.773l-.247-.799c.289-.117.544-.28.76-.453l.618.616c.124.117.28.182.437.182a.65.65 0 00.437-.182.62.62 0 000-.871l-.627-.628a2.97 2.97 0 00.445-.764l.815.254c.06.023.124.031.182.031a.626.626 0 00.594-.437zm-4.756 1.25c.692 0 1.081-.387 1.426-.731.832-.83 1.972-1.967-3-6.939-2.084-2.081-3.653-3.258-4.799-3.61a2.33 2.33 0 00-.686-.115c-.518 0-.972.23-1.468.734-.708.7-.882 1.3-.619 2.145.356 1.146 1.54 2.709 3.62 4.79 2.938 2.922 4.537 3.726 5.526 3.726zm-6.317.028a.62.62 0 00-.773-.412l-.932.294a2.725 2.725 0 00-.642-.882l.42-.799a.63.63 0 00-.255-.84.627.627 0 00-.84.263l-.429.815a2.94 2.94 0 00-.619-.072c-.173 0-.322.016-.462.033l-.288-.947a.63.63 0 00-.776-.403.613.613 0 00-.412.765l.289.938a2.999 2.999 0 00-.883.644l-.798-.428a.619.619 0 00-.835.263.61.61 0 00.258.832l.798.429a2.88 2.88 0 00-.008 1.078c-.004.004-.007.004-.009.004-.002 0-.004 0-.008.004l-.941.289a.62.62 0 00-.412.773c.084.263.33.434.594.434a.488.488 0 00.182-.03l.938-.29c.009 0 .009-.008.009-.008.182.379.397.667.636.88l-.43.815a.621.621 0 00.547.905.62.62 0 00.544-.33l.437-.816c.215.048.428.073.627.073.165 0 .314-.017.454-.034l.288.939a.626.626 0 00.773.412.624.624 0 00.412-.774l-.288-.938a3.38 3.38 0 00.874-.641l.806.425c.09.05.19.068.289.068.224 0 .44-.118.546-.33a.61.61 0 00-.258-.833l-.792-.42c.075-.314.092-.675.025-1.095l.933-.289a.61.61 0 00.411-.764zm-2.653.832c.118.395.466 1.566-1.016 2.047a6.37 6.37 0 01-.213.07c-.081.031-.322.09-.594.09-.479 0-1.064-.137-1.403-1.241l-.006-.021c-.119-.41-.453-1.567.989-2.03.073-.025.154-.05.221-.067.09-.025.322-.081.603-.081.479 0 1.078.14 1.417 1.224l.002.009z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconVirusRegular;
