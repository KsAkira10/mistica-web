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

const IconApartmentBuildingRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M9.651 20.482V16.09c0-.334.266-.603.591-.603h3.328c.328 0 .591.27.591.603v4.389h3.745c.098 0 .196-.112.196-.174V3.378c-.005-.059-.123-.174-.196-.174H5.903c-.075 0-.193.113-.196.174v16.927c0 .062.101.174.196.174l3.748.003zm8.258 1.204H5.906c-.737 0-1.38-.644-1.38-1.378V3.381c0-.723.657-1.378 1.38-1.378H17.91c.723 0 1.38.658 1.38 1.378v16.927c-.002.734-.646 1.378-1.38 1.378zm-7.073-1.235h2.143v-3.76h-2.143v3.76zM8.726 7.109h1.337V5.751H8.727v1.358zm1.93 1.205h-2.52a.595.595 0 01-.591-.603V5.148c0-.333.266-.602.59-.602h2.522c.328 0 .59.27.59.602v2.563a.597.597 0 01-.59.603zm3.051-1.205h1.336V5.751h-1.336v1.358zm1.93 1.205h-2.52a.595.595 0 01-.592-.603V5.148c0-.333.266-.602.591-.602h2.521c.328 0 .591.27.591.602v2.563a.597.597 0 01-.59.603zm-6.91 3.826h1.336v-1.359H8.727v1.359zm1.93 1.205H8.136a.595.595 0 01-.591-.603V10.18c0-.333.266-.602.59-.602h2.522c.328 0 .59.269.59.602v2.563a.597.597 0 01-.59.603zm3.05-1.205h1.336v-1.359h-1.336v1.359zm1.93 1.205h-2.52a.595.595 0 01-.592-.603V10.18c0-.333.266-.602.591-.602h2.521c.328 0 .591.269.591.602v2.563a.597.597 0 01-.59.603z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconApartmentBuildingRegular;
