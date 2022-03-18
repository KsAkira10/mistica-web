/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPresentationRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.732 6.142c.18.16.277.378.286.602l-.009.689c0 .395-.294.714-.759.865l.007.037c.007.04.015.086.015.129l-.008 8.383c0 .645-.594 1.177-1.33 1.177l-6.379-.008v1.403c.415.168.737.546.737 1.157 0 .848-.63 1.244-1.255 1.258h-.098c-.616-.009-1.25-.401-1.25-1.267 0-.619.323-.988.74-1.157v-1.394H5.093c-.52.02-.835-.177-1.017-.342a1.09 1.09 0 01-.36-.82V8.466c0-.038.004-.076.009-.114l.004-.038a1.273 1.273 0 01-.482-.263.833.833 0 01-.277-.61v-.69c0-.56.594-.966 1.406-.966h2.639l3.723-1.992a1.497 1.497 0 01-.054-.386c0-.857.63-1.25 1.255-1.258v.008h.098c.616.006 1.25.407 1.25 1.258 0 .132-.014.247-.045.35l3.482 2.025h2.834c.504-.02.919.11 1.174.35zm-9.065-2.734c0-.163.023-.306.286-.314l.062.003c.3.005.3.201.3.32 0 .122 0 .302-.353.31-.272 0-.295-.16-.295-.32zm-.128 1.199L9.343 5.783l5.19.008-2.045-1.201a1.31 1.31 0 01-.45.081h-.085c-.134 0-.277-.022-.414-.064zm8.344 2.66l.009-.363a1.197 1.197 0 00-.317-.023L4.382 6.873a.794.794 0 00-.28.045v.364c.061.014.165.028.308.022h.518a.65.65 0 00.066-.004.52.52 0 01.054-.004l13.85.008a.326.326 0 01.091.002.438.438 0 00.051.004h.563a.79.79 0 00.28-.042zm-.745 9.583l.008-8.383c-.022-.042-.075-.056-.15-.065L5.003 8.394c-.09.014-.16.056-.16.078v8.376c.022.058.09.08.218.08l13.872.01c.128 0 .196-.068.204-.088zm-6.824 3.729c0 .123 0 .302-.352.31-.295-.005-.295-.193-.292-.319 0-.16.023-.31.286-.31h.059c.3.005.3.2.3.319zm3.521-5.255c0-.227-.187-.4-.414-.4H8.485l1.168-1.768 2.527.946a.448.448 0 00.473-.126l1.827-2.224.045.289a.412.412 0 00.406.341.184.184 0 00.033-.004c.012-.002.023-.004.034-.004a.413.413 0 00.347-.46l-.179-1.162a.418.418 0 00-.415-.336h-1.338a.406.406 0 00-.415.395v.003c.006.224.19.403.415.398h.445l-1.664 2.028-2.557-.953a.412.412 0 00-.496.154L7.945 14.26v-3.787a.405.405 0 00-.415-.398c-.235 0-.414.171-.414.398v4.854c.005.225.19.404.414.398h7.891a.41.41 0 00.415-.4z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPresentationRegular;
