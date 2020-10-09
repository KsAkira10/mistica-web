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

const IconPoisonLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M14.848 21.169c1.438 0 2.34-.615 2.675-1.779H6.468c.123.427.317.788.597 1.065.483.472 1.188.714 2.098.714h5.685zM7.068 7.846c-.391.384-.627.92-.716 1.591h11.293c-.136-1.073-.649-1.779-1.531-2.1-.2.142-.444.224-.705.224h-6.89c-.244 0-.469-.074-.66-.199a2.36 2.36 0 00-.791.484zm1.02-4.585v3.034c0 .242.195.438.431.438h6.89c.236 0 .43-.196.43-.438V3.26a.435.435 0 00-.43-.438h-6.89a.435.435 0 00-.43.438zm-1.775 15c0 .107.014.198.02.3h11.323c.006-.102.023-.193.023-.3l.008-7.993H6.313v7.992zM16.599 6.644c1.227.544 1.901 1.73 1.901 3.398l-.008 8.22c0 2.374-1.327 3.737-3.644 3.737H9.163c-1.13 0-2.026-.319-2.664-.948-.663-.654-.999-1.594-.999-2.789v-8.217c0-1.198.339-2.137 1.007-2.792.239-.233.527-.41.841-.558a1.245 1.245 0 01-.07-.395V3.267c0-.7.558-1.267 1.244-1.267h6.89c.685 0 1.243.57 1.243 1.267V6.3c-.003.116-.025.23-.056.344zM9.35 6.16a.411.411 0 01-.408-.415V3.81c0-.228.183-.415.408-.415.224 0 .408.185.408.415v1.936c0 .23-.184.415-.408.415zm1.742 0a.411.411 0 01-.408-.415V3.81c0-.228.183-.415.408-.415.225 0 .408.185.408.415v1.936c0 .23-.183.415-.408.415zm1.746 0a.411.411 0 01-.408-.415V3.81c0-.228.183-.415.408-.415.224 0 .408.185.408.415v1.936a.413.413 0 01-.408.415zm1.742 0a.411.411 0 01-.408-.415V3.81c0-.228.183-.415.408-.415.225 0 .408.185.408.415v1.936c0 .23-.183.415-.408.415zm-1.007 10.155c.663-.418 1.002-1.147 1.002-2.163 0-2.271-1.682-2.553-2.403-2.57l-.27-.003c-.71.003-2.364.26-2.364 2.556 0 1.033.336 1.768 1 2.18l.194.123v.45c0 .15.033.258.097.315.075.069.2.103.369.103h1.731c.117 0 .272-.017.358-.097.08-.074.097-.214.097-.322v-.45l.189-.122zm-1.382-5.564c.533.011 3.197.233 3.197 3.398 0 1.483-.61 2.297-1.194 2.735 0 .499-.197.783-.363.934-.222.208-.527.313-.907.313H11.19c-.38 0-.688-.105-.913-.316-.163-.148-.366-.432-.366-.928-.583-.435-1.193-1.252-1.193-2.755 0-3.21 2.644-3.384 3.174-3.387l.297.006zm-.558 4.184a.402.402 0 01-.577 0l-.238-.242-.236.242a.402.402 0 01-.577 0 .422.422 0 010-.586l.235-.242-.235-.242a.422.422 0 010-.587.4.4 0 01.574 0l.236.242.238-.242a.4.4 0 01.575 0 .422.422 0 010 .587l-.239.242.239.242a.416.416 0 01.005.586zm2.267-.828l.239.242a.422.422 0 010 .586.402.402 0 01-.577 0l-.239-.242-.238.242a.402.402 0 01-.577 0 .422.422 0 010-.586l.238-.242-.239-.242a.422.422 0 010-.587.4.4 0 01.575 0l.238.242.24-.242a.4.4 0 01.573 0 .422.422 0 010 .587l-.233.242zm-1.257 1.426l.122.293a.419.419 0 01-.216.543.383.383 0 01-.158.032.401.401 0 01-.353-.228.407.407 0 01-.352.228.447.447 0 01-.158-.032.42.42 0 01-.22-.543l.123-.293a.4.4 0 01.533-.222c.027.01.05.034.072.05.025-.016.044-.036.072-.05a.408.408 0 01.535.222z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPoisonLight;
