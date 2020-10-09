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

const IconLossTheftDevicesRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.463 2.16c1.11 0 1.916.269 2.47.826.555.558.821 1.362.821 2.465v13.11c0 1.114-.272 1.927-.826 2.479-.552.546-1.359.812-2.465.812h-6.555c-1.106 0-1.913-.266-2.465-.812-.557-.552-.826-1.365-.826-2.48l-.001-3.562c-1.29-.09-2.313-.493-3.05-1.202-.873-.843-1.316-2.09-1.316-3.709 0-1.619.443-2.865 1.317-3.709.737-.71 1.763-1.114 3.056-1.202.043-.948.31-1.658.817-2.173.564-.566 1.37-.843 2.468-.843h6.555zm0 1.12h-6.555c-1.445 0-2.09.555-2.163 1.897 1.29.089 2.313.493 3.048 1.201.874.844 1.317 2.09 1.317 3.71 0 1.618-.443 2.865-1.317 3.708-.737.71-1.763 1.114-3.055 1.203v3.562c0 1.582.588 2.17 2.17 2.17h6.555c1.583 0 2.17-.588 2.17-2.17V5.45c0-.792-.162-1.341-.492-1.675-.33-.333-.883-.496-1.678-.496zm-3.275 14.01c.698 0 1.112.417 1.112 1.115 0 .341-.098.613-.288.81-.19.195-.482.305-.826.305-.342 0-.628-.107-.821-.306-.193-.199-.289-.47-.289-.81 0-.697.415-1.114 1.112-1.114zM8.18 6.278c-1.258 0-2.21.305-2.835.907-.647.622-.975 1.6-.975 2.902 0 1.303.328 2.28.975 2.902.625.602 1.58.908 2.835.908s2.21-.306 2.835-.908c.647-.622.974-1.6.974-2.902s-.327-2.28-.974-2.902c-.625-.602-1.577-.907-2.835-.907zm-.28 6.039c.255 0 .46.204.46.46a.46.46 0 11-.46-.46zm-.003-5.32c.656 0 1.213.233 1.574.656.311.367.44.846.359 1.345-.11.672-.577 1.084-.776 1.26-.079.07-.163.137-.244.205-.137.112-.504.408-.507.515v.513a.405.405 0 01-.403.403c-.221 0-.4-.18-.404-.403v-.513c0-.487.43-.835.804-1.14.079-.065.154-.126.222-.185.145-.129.45-.398.515-.784a.828.828 0 00-.176-.695c-.205-.24-.547-.373-.961-.373-.347 0-.639.113-.838.323-.19.198-.294.487-.294.81v.108a.403.403 0 01-.807 0v-.109c0-.527.183-1.011.513-1.361.356-.376.849-.574 1.423-.574z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLossTheftDevicesRegular;
