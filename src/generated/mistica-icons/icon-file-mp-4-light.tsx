/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFileMp4Light: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.806 7.907c.022.05.034.104.034.162v12.563c0 .653-.563 1.205-1.23 1.205H8.173c-.655 0-1.23-.563-1.23-1.205l.037-3.036H4.422a2.27 2.27 0 01-2.266-2.269v-4.18A2.27 2.27 0 014.422 8.88h2.521V3.36c0-.63.586-1.205 1.23-1.205h7.569c.182 0 .355.07.484.194l5.41 5.235a.638.638 0 01.17.322zM20.61 21.01c.207 0 .406-.185.406-.379V8.75h-2.568c-.98 0-1.827-.316-2.443-.913-.622-.602-.952-1.429-.952-2.384V2.98H8.17c-.185 0-.406.204-.406.378v5.518h6.703a2.27 2.27 0 012.266 2.269v4.18a2.27 2.27 0 01-2.266 2.268H7.801l-.037 3.042c0 .182.205.373.406.373h12.44v.003zM2.98 15.324c0 .796.644 1.443 1.44 1.443h10.05c.793 0 1.44-.647 1.44-1.443v-4.179c0-.795-.645-1.443-1.44-1.443H4.42c-.793 0-1.44.648-1.44 1.443v4.18zM15.879 3.16l4.919 4.762h-2.35c-.762 0-1.407-.235-1.869-.68-.46-.443-.7-1.062-.7-1.79V3.158zm-2.283 11.053h-1.619a.779.779 0 01-.022-.187c0-.152.028-.322.112-.56l.764-2.09h.743l-.83 2.26h.852v-.877h.77v.877h.432v.577h-.432v.846h-.77v-.846zm-9.26-2.835h.66l1.163 2.057 1.202-2.056h.647v3.68h-.77v-2.12l-.765 1.28h-.647l-.787-1.303v2.143h-.703v-3.68zm4.473 0h1.263c.577 0 .941.082 1.18.303.198.182.296.468.296.86 0 .392-.092.69-.274.894-.216.24-.55.355-1.034.355h-.59v1.27h-.841v-3.681zm1.74 1.642c-.11.104-.222.14-.49.14h-.413v-1.174h.393c.257 0 .414.037.515.13.098.092.14.237.14.436 0 .216-.048.37-.146.468z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileMp4Light;
