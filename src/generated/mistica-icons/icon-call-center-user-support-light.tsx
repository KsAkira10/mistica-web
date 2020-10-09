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

const IconCallCenterUserSupportLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.264 14.716c1.748 0 3.18.527 4.137 1.521.88.914 1.342 2.185 1.342 3.678v1.639a.28.28 0 01-.28.28H3.53a.28.28 0 01-.28-.28v-1.639c0-1.493.465-2.764 1.342-3.678.958-.994 2.386-1.52 4.137-1.52h6.535zm0 .563H8.729c-1.616 0-2.871.454-3.734 1.348-.776.807-1.185 1.944-1.185 3.288v1.359h16.373v-1.359c0-1.344-.41-2.481-1.185-3.288-.863-.894-2.118-1.348-3.734-1.348zM11.97 2.156c1.919 0 3.406.499 4.423 1.48 1.056 1.016 1.59 2.543 1.59 4.537v.006l-.008.546c0 .498-.142.893-.42 1.168-.277.274-.66.409-1.145.409l-.366.001a3.472 3.472 0 01-.797 1.195c-.745.717-1.832 1.081-3.232 1.081-1.398 0-2.488-.364-3.233-1.084-.773-.745-1.165-1.863-1.165-3.316 0-1.454.392-2.572 1.165-3.317.748-.717 1.835-1.081 3.233-1.081 1.397 0 2.487.364 3.232 1.084.773.748 1.165 1.863 1.165 3.316a6.2 6.2 0 01-.182 1.56h.18c.33 0 .582-.083.75-.249.168-.165.255-.428.255-.773v-.005l.009-.547c0-3.616-1.835-5.45-5.454-5.45-3.247 0-5.062 1.484-5.398 4.408a.28.28 0 01-.554-.064c.184-1.63.806-2.88 1.845-3.706 1-.795 2.381-1.199 4.107-1.199zm2.818 8.147a.524.524 0 01-.123.203c-.115.115-.283.171-.49.171-.208 0-.376-.056-.49-.17-.107-.107-.166-.267-.166-.48 0-.445.26-.652.658-.652.3 0 .52.117.609.365l.863.003a5.47 5.47 0 00.203-1.562c0-1.296-.336-2.277-.994-2.913-.636-.616-1.594-.927-2.843-.927-1.25 0-2.205.311-2.843.927-.661.636-.995 1.617-.995 2.913 0 1.297.336 2.278.995 2.914.638.616 1.593.927 2.843.927 1.249 0 2.204-.311 2.843-.927a2.82 2.82 0 00.573-.793z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCallCenterUserSupportLight;
