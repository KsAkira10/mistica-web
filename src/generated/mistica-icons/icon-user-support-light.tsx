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

const IconUserSupportLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.232 16.635c1.26 0 2.23.33 2.877.986.647.656.977 1.625.977 2.894v1.042a.28.28 0 01-.28.277H2.436a.28.28 0 01-.28-.28v-1.042c0-1.266.328-2.24.978-2.894.65-.652 1.616-.983 2.877-.983h5.22zm0 .56H6.01c-1.107 0-1.942.275-2.482.818-.54.544-.813 1.387-.813 2.499v.762h11.81v-.762c0-1.115-.275-1.955-.812-2.499-.538-.543-1.376-.818-2.482-.818zm-2.61-8.484c1.134 0 2.013.322 2.613.958.566.6.854 1.445.854 2.512 0 1.068-.288 1.91-.854 2.513-.6.633-1.48.955-2.614.955s-2.014-.322-2.613-.958c-.569-.6-.855-1.442-.855-2.51 0-1.067.289-1.91.855-2.512.6-.636 1.479-.958 2.613-.958zm0 .56c-1.328 0-2.908.504-2.908 2.91 0 1.328.504 2.908 2.907 2.908 2.404 0 2.908-1.583 2.908-2.908 0-1.324-.504-2.91-2.908-2.91zm11.84-7.115c.36.006.708.152.963.41.258.254.406.599.41.96V7.35a1.4 1.4 0 01-1.373 1.372h-4.219l-.146.219c-.344.514-.828 1.24-.86 1.29-.078.121-.268.415-.577.415a.516.516 0 01-.092-.008c-.395-.07-.395-.434-.395-.555V8.725h-.812a1.4 1.4 0 01-1.373-1.373V3.53c0-.717.695-1.373 1.457-1.373h7.017zm0 .56h-7.017c-.454 0-.897.404-.897.813v3.823c0 .426.387.813.813.813h1.092a.28.28 0 01.28.28v1.532l.031-.045c.053-.084 1.053-1.58 1.095-1.641a.273.273 0 01.233-.124h4.37a.843.843 0 00.812-.812V3.53a.843.843 0 00-.812-.813zm-3.555 4.236c.09-.003.176.03.238.095a.322.322 0 010 .457.317.317 0 01-.238.098.319.319 0 01-.235-.096.314.314 0 01-.098-.227c0-.179.145-.327.325-.327h.008zm-.011-3.74c.694 0 1.28.58 1.28 1.264 0 .523-.297.784-.516.974l-.022.02c-.048.042-.098.081-.148.123-.082.062-.244.194-.272.255v.51a.313.313 0 01-.254.316l-.065.006a.322.322 0 01-.323-.322v-.521c0-.347.3-.583.519-.754.044-.036.09-.07.12-.098l.022-.02c.2-.176.295-.268.295-.49 0-.364-.337-.618-.636-.618-.364 0-.636.266-.636.619a.32.32 0 01-.336.308.319.319 0 01-.308-.308c0-.71.563-1.264 1.28-1.264z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconUserSupportLight;
