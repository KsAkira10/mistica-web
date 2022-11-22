/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPoisonLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M16.6 6.645c1.226.544 1.9 1.73 1.9 3.398l-.008 8.22c0 2.374-1.327 3.737-3.644 3.737H9.163c-1.13 0-2.026-.319-2.664-.948-.663-.654-.999-1.594-.999-2.789v-8.217c0-1.198.339-2.137 1.007-2.792.239-.233.527-.41.841-.558a1.245 1.245 0 01-.07-.395V3.267c0-.7.558-1.267 1.244-1.267h6.89c.685 0 1.243.57 1.243 1.267V6.3c-.003.116-.025.23-.056.344zM8.088 3.26v3.034c0 .242.194.438.43.438h6.89c.236 0 .43-.196.43-.438V3.26a.435.435 0 00-.43-.438h-6.89a.435.435 0 00-.43.438zM6.352 9.437h11.293c-.136-1.073-.649-1.779-1.531-2.1-.2.142-.444.224-.705.224h-6.89c-.244 0-.469-.074-.66-.199a2.36 2.36 0 00-.791.484c-.391.384-.627.92-.716 1.591zm11.171 9.953H6.468c.122.427.317.788.597 1.064.483.473 1.188.715 2.098.715h5.685c1.438 0 2.34-.615 2.675-1.779zm-11.2-.94l.01.112h11.324c.002-.041.006-.08.01-.12a1.72 1.72 0 00.012-.182l.008-7.992H6.313v7.992c0 .067.005.128.01.19zM8.942 5.745c0 .23.183.415.408.415a.411.411 0 00.408-.415V3.81a.411.411 0 00-.408-.415.413.413 0 00-.408.415v1.936zm2.15.415a.411.411 0 01-.408-.415V3.81c0-.228.184-.415.408-.415.225 0 .408.185.408.415v1.936c0 .23-.183.415-.408.415zm1.338-.415c0 .23.183.415.408.415a.413.413 0 00.408-.415V3.81a.411.411 0 00-.408-.415.413.413 0 00-.408.415v1.936zm2.15.415a.411.411 0 01-.408-.415V3.81c0-.228.183-.415.408-.415.225 0 .408.185.408.415v1.936c0 .23-.183.415-.408.415zm-.005 7.992c0-2.271-1.682-2.553-2.403-2.57l-.27-.003c-.71.003-2.364.26-2.364 2.556 0 1.033.336 1.768 1 2.18l.193.123v.45c0 .15.034.258.098.315.075.069.2.103.369.103h1.731c.117 0 .272-.017.358-.097.08-.074.097-.214.097-.322v-.45l.189-.122c.663-.418 1.002-1.147 1.002-2.163zm-2.384-3.401c.533.011 3.197.233 3.197 3.398 0 1.483-.61 2.297-1.194 2.735 0 .498-.197.783-.363.934-.222.208-.527.313-.907.313H11.19c-.38 0-.688-.105-.913-.316-.164-.148-.366-.432-.366-.928-.583-.435-1.193-1.252-1.193-2.755 0-3.21 2.644-3.384 3.174-3.387l.297.006zm-.846 4.306c.105 0 .208-.04.288-.122a.416.416 0 00-.005-.586l-.239-.242.239-.242a.421.421 0 000-.587.4.4 0 00-.575 0l-.238.242-.236-.242a.4.4 0 00-.574 0 .422.422 0 000 .587l.235.242-.236.242a.422.422 0 000 .586.402.402 0 00.578 0l.236-.242.238.242c.08.082.186.122.289.122zm2.555-.95l.239.242a.421.421 0 010 .586.402.402 0 01-.577 0l-.239-.242-.238.242a.402.402 0 01-.577 0 .421.421 0 010-.586l.238-.242-.239-.242a.421.421 0 010-.587.4.4 0 01.575 0l.238.242.24-.242a.4.4 0 01.573 0 .421.421 0 010 .587l-.233.242zm-1.134 1.719l-.123-.293a.408.408 0 00-.535-.223.284.284 0 00-.046.032l-.026.02a.426.426 0 01-.018-.015.216.216 0 00-.054-.037.4.4 0 00-.533.223l-.122.293a.42.42 0 00.219.543c.053.02.105.032.158.032.147 0 .28-.091.352-.228.073.14.206.228.353.228a.382.382 0 00.158-.032.419.419 0 00.216-.543z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPoisonLight;
