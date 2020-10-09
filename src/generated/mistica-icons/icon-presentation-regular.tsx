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

const IconPresentationRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.883 7.268l.009-.364c-.104-.023-.21-.029-.317-.023L4.382 6.873a.794.794 0 00-.28.045v.364c.061.014.165.028.308.022h.518c.045 0 .084-.008.12-.008l13.85.008c.052-.008.097.006.142.006h.563a.791.791 0 00.28-.042zm-.745 9.582l.008-8.383c-.022-.042-.075-.056-.15-.065L5.003 8.394c-.09.014-.16.056-.16.078v8.375c.022.06.09.082.218.082l13.872.008c.128 0 .196-.067.204-.087zm-7.176 4.04c.353-.009.353-.188.353-.311 0-.118 0-.314-.3-.32h-.059c-.263 0-.286.152-.286.311-.003.126-.003.314.292.32zm-.423-16.283L9.343 5.783l5.19.008-2.045-1.201a1.31 1.31 0 01-.45.081h-.085c-.134 0-.277-.022-.414-.064zm.414-1.513c-.263.008-.286.151-.286.314 0 .16.023.319.295.319.353-.008.353-.188.353-.31 0-.119 0-.315-.3-.32l-.062-.003zm8.779 3.048c.18.16.277.378.286.602l-.009.689c0 .395-.294.714-.759.865.009.05.023.11.023.166l-.009 8.383c0 .645-.594 1.177-1.33 1.177l-6.379-.008v1.403c.415.168.737.546.737 1.157 0 .849-.63 1.243-1.255 1.257h-.098c-.616-.008-1.25-.4-1.25-1.266 0-.619.323-.988.74-1.156v-1.395H5.093c-.52.02-.834-.177-1.017-.342a1.09 1.09 0 01-.36-.82V8.466c0-.05.008-.101.013-.152a1.272 1.272 0 01-.482-.263.833.833 0 01-.277-.61v-.69c0-.56.594-.966 1.406-.966h2.639l3.723-1.992a1.496 1.496 0 01-.054-.386c0-.857.63-1.25 1.255-1.258v.008h.098c.616.006 1.25.407 1.25 1.258 0 .132-.014.247-.045.35l3.482 2.025h2.834c.504-.02.919.11 1.174.35zm-5.311 8.781c.227 0 .415.174.415.4a.41.41 0 01-.415.401h-7.89a.407.407 0 01-.415-.398v-4.854c0-.227.179-.398.414-.398.227 0 .415.174.415.398v3.787l1.196-1.818a.412.412 0 01.496-.154l2.557.953 1.664-2.028h-.445a.407.407 0 01-.415-.398v-.003c0-.218.188-.395.415-.395h1.339c.204 0 .375.14.414.336l.18 1.163a.413.413 0 01-.348.46c-.022 0-.045.007-.067.007a.412.412 0 01-.406-.341l-.045-.289-1.827 2.224a.448.448 0 01-.473.126l-2.527-.946-1.168 1.767h6.936z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPresentationRegular;
