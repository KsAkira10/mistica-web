/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDataCloudRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M6.131 7.92c.802 0 1.538.427 1.932 1.115a.725.725 0 00.998.27.748.748 0 00.268-1.014 3.634 3.634 0 00-1.2-1.252c.553-2.08 2.437-3.56 4.594-3.56 2.133 0 4.022 1.455 4.59 3.532a.732.732 0 00.9.516.742.742 0 00.51-.91c-.74-2.716-3.206-4.617-6-4.617-2.766 0-5.195 1.863-5.968 4.503a3.432 3.432 0 00-.624-.061c-2.02 0-3.661 1.659-3.661 3.702s1.64 3.702 3.661 3.702a.736.736 0 00.732-.74.736.736 0 00-.732-.739c-1.214 0-2.198-.995-2.198-2.223 0-1.228.989-2.223 2.198-2.223zm15.382 4.059a.155.155 0 00-.007-.043l-.002-.01a.647.647 0 00-.024-.137l-.028-.071a.747.747 0 00-.037-.08l-.015-.03a.34.34 0 00-.023-.032 1.215 1.215 0 00-.098-.118.355.355 0 00-.076-.06l-.008-.008a.134.134 0 00-.029-.023l-.026-.012-.026-.012-.011-.008a.093.093 0 00-.026-.015l-5.86-2.593a.74.74 0 00-.586 0L8.77 11.32c-.007.002-.013.007-.019.012-.006.004-.012.01-.019.011-.008.004-.015.008-.023.01l-.028.014a.103.103 0 00-.028.021.708.708 0 01-.038.031 1.199 1.199 0 00-.169.194.77.77 0 00-.062.133.623.623 0 00-.04.174v.007a.12.12 0 01-.006.028.12.12 0 00-.004.028v6.315c0 .28.154.535.403.663l5.86 2.963a.494.494 0 00.09.033l.027.01a.332.332 0 00.02.007l.008.002a.766.766 0 00.183.024.807.807 0 00.211-.033.603.603 0 01.014-.005l.009-.003.005-.002.017-.005a.512.512 0 00.072-.028l5.86-2.963a.74.74 0 00.404-.663v-6.3c-.005-.005-.005-.005-.005-.01v-.01zm-6.592-1.764l4.135 1.83-4.135 2.086-4.134-2.09 4.134-1.826zm-.73 5.205v4.636l-4.398-2.223v-4.636l4.397 2.223zm5.86 2.418l-4.398 2.218v-4.64l4.397-2.224v4.646z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M4.607 7.95c.199-5.512 5.411-5.795 6.476-5.795.82 0 4.854.18 6.103 3.706 2.325.218 4.65 1.647 4.65 5.106 0 3.801-2.84 5.146-5.271 5.146l-.163.008v3.622c0 .552-.302 1.306-1.784 1.75-.768.228-1.76.348-2.79.348-1.042 0-2.034-.12-2.793-.347-1.482-.445-1.792-1.199-1.792-1.75v-3.575h-.737c-2.104 0-4.356-1.129-4.356-4.289 0-2.479 1.384-3.51 2.457-3.93zm11.798 3.435v3.518l.165-.009c.95 0 4.042-.283 4.042-3.93 0-3.436-2.725-3.882-3.896-3.915a.618.618 0 01-.583-.454c-.826-3.073-4.355-3.227-5.05-3.227-1.235 0-5.255.347-5.255 4.902l.008.106a.6.6 0 01-.442.583c-1.333.38-2.014 1.361-2.014 2.919 0 2.773 2.185 3.072 3.126 3.072h.737v-3.565c0-.138.016-.267.058-.39.174-.616.762-1.07 1.729-1.361 1.532-.454 4.07-.454 5.59 0 1.482.437 1.785 1.19 1.785 1.75zm-4.577-.883c-.924 0-1.793.107-2.44.3-.456.132-.711.283-.835.417.115.12.376.283.844.42 1.294.39 3.577.39 4.87 0 .46-.137.712-.294.835-.414-.137-.154-.425-.3-.834-.431-.656-.185-1.524-.292-2.44-.292zm3.347 3.527h-.003v-1.434a4.588 4.588 0 01-.557.21c-.762.227-1.75.347-2.79.347-1.042 0-2.033-.129-2.793-.347a4.4 4.4 0 01-.565-.219v1.46c.1.123.353.325.927.495 1.294.39 3.577.39 4.87 0 .542-.156.813-.375.911-.512zm-.91 3.426c.54-.154.812-.373.91-.51v-1.451a3.668 3.668 0 01-.549.21c-.764.227-1.762.347-2.792.347-1.05 0-2.04-.12-2.793-.347a5.598 5.598 0 01-.574-.21v1.468c.092.12.353.322.927.493 1.294.389 3.577.389 4.87 0zm.91 2.288h.003v-1.328a3.973 3.973 0 01-.549.21c-.765.227-1.762.348-2.793.348-1.05 0-2.039-.12-2.792-.348a5.552 5.552 0 01-.575-.21v1.328c0 .193.353.412.916.583 1.303.39 3.572.39 4.88 0 .566-.168.91-.39.91-.583z"
                />
            </svg>
        );
    }
};

export default IconDataCloudRegular;
