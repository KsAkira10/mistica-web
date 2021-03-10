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

const IconChipDeviceRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M14.115 2c1.106 0 1.91.272 2.454.832.535.549.795 1.353.795 2.46v1.22h1.706c.695 0 1.143.449 1.143 1.143v7.017c-.003.692-.451 1.14-1.143 1.14h-1.706v2.589c0 2.215-1.064 3.29-3.25 3.29H6.93c-2.188 0-3.25-1.075-3.25-3.29V5.29C3.68 3.106 4.774 2 6.93 2h7.185zm0 1.12H6.93c-1.532 0-2.129.608-2.129 2.171v13.11c0 .806.157 1.358.48 1.686.321.328.86.484 1.649.484h7.185c.79 0 1.328-.16 1.65-.484.322-.325.479-.88.479-1.686v-2.589h-1.74c-.694 0-1.143-.448-1.143-1.143V8.566c0-.132.062-.258.168-.336l2.185-1.633a.432.432 0 01.252-.084l.278-.001v-1.22c0-.799-.157-1.35-.476-1.679-.32-.327-.863-.493-1.653-.493zm-3.602 14.188c.577 0 .952.303.955.958 0 .314-.087.55-.241.706-.168.17-.412.252-.714.252-.303 0-.547-.081-.715-.252-.154-.16-.24-.392-.24-.706 0-.653.378-.958.955-.958zm8.557-9.955h-2.964l-1.904 1.423v5.893c0 .236.067.303.302.303h4.566c.235 0 .303-.067.303-.303V7.655c0-.235-.068-.302-.303-.302zm-.585 2.837a.28.28 0 01.28.28v3.544a.28.28 0 01-.28.28h-3.376a.28.28 0 01-.28-.28v-3.543a.28.28 0 01.28-.28h3.376zm-2.533 2.98h-.561l.001.564.56-.001v-.563zm1.123 0h-.563v.563h.563v-.563zm1.129 0h-.568v.563h.568v-.563zm-2.814-1.297v.737h2.814v-.737H15.39zm.562-1.123h-.563v.563h.563v-.563zm1.123 0h-.563v.563h.563v-.563zm1.13 0h-.57v.563h.569v-.562z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconChipDeviceRegular;
