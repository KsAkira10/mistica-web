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

const IconConfigureModemFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M5.56 6.14c.308 0 .56.252.56.56v7.06l6.762.002.28-.28a3.28 3.28 0 01-.126-.398h-.63a.7.7 0 01-.7-.7v-1.037a.7.7 0 01.7-.7h.63a3.28 3.28 0 01.126-.398l-.42-.42a.7.7 0 010-.991l.731-.732a.7.7 0 01.992 0l.42.42a3.28 3.28 0 01.398-.125v-.63a.7.7 0 01.7-.701h1.037a.7.7 0 01.7.7v.63c.134.034.269.076.398.127l.42-.42a.7.7 0 01.991 0l.734.733a.7.7 0 010 .992l-.42.42c.05.129.092.26.126.395h.63a.7.7 0 01.7.7v1.037a.7.7 0 01-.7.7h-.633a3.28 3.28 0 01-.126.398l.42.42a.7.7 0 01.2.406c.148.1.288.216.411.345.546.565.824 1.375.824 2.4v1.373c0 1.028-.278 1.837-.824 2.403-.569.588-1.398.888-2.468.888H5.291c-1.07 0-1.899-.297-2.467-.888C2.277 20.26 2 19.454 2 18.426v-1.373c0-1.025.277-1.835.824-2.403.515-.534 1.245-.83 2.175-.88L5 6.7c0-.308.252-.56.56-.56zm-.294 10.79c-.585 0-.95.361-.95.944 0 .288.082.518.25.686.168.168.409.258.7.258s.532-.09.7-.258c.166-.168.25-.4.25-.686 0-.583-.364-.944-.95-.944zm2.74 0c-.586 0-.95.361-.95.944 0 .288.081.518.25.686.167.168.408.258.7.258.29 0 .532-.09.7-.258.168-.168.252-.4.25-.686 0-.583-.365-.944-.95-.944zm9.01-9.16H15.98v1.216a3.445 3.445 0 00-.672.134c-.199.062-.39.146-.569.253l-.512-.513-.258-.258-.731.731.33.33.446.44c-.064.11-.12.222-.168.34a3.338 3.338 0 00-.219.904h-1.215v1.037h1.215l.017.129c.042.33.135.65.28.95.028.055.06.108.09.162l-.44.44-.33.33.73.731.768-.768.076.043c.11.061.224.112.342.156.266.098.543.16.826.188v1.216h1.036v-1.216c.376-.04.712-.126 1.003-.26a2.16 2.16 0 00.238-.127l.77.77.734-.73-.77-.77a2.67 2.67 0 00.3-.746c.04-.165.07-.33.087-.498h1.215v-1.037h-1.218l-.017-.131a2.895 2.895 0 00-.37-1.112l.77-.77-.733-.732-.77.77a2.349 2.349 0 00-.466-.218 3.36 3.36 0 00-.778-.168V7.77zm-.512 2.617c.46 0 .824.126 1.079.37.266.254.4.63.4 1.109 0 .478-.134.851-.4 1.109-.255.243-.62.37-1.079.37-.46 0-.823-.127-1.078-.37-.266-.255-.4-.63-.4-1.11 0-.478.134-.851.4-1.109.255-.246.619-.37 1.078-.37zm-6.126-8.202c1.062 1.022 1.597 2.54 1.597 4.515 0 1.967-.535 3.482-1.588 4.504a.562.562 0 01-.95-.403c0-.151.062-.297.17-.4.827-.804 1.247-2.048 1.247-3.7 0-1.659-.423-2.905-1.255-3.71a.559.559 0 01-.014-.792.559.559 0 01.793-.014zM8.134 3.59c.737.712 1.112 1.76 1.112 3.112 0 1.35-.372 2.395-1.103 3.106a.58.58 0 01-.392.155.562.562 0 01-.56-.56c0-.152.061-.298.17-.401.507-.493.765-1.266.765-2.3 0-1.034-.258-1.815-.77-2.305a.559.559 0 01-.014-.793.559.559 0 01.792-.014z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconConfigureModemFilled;
