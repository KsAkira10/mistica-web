'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLossTheftDevicesRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.186 19.514c-.342 0-.628-.107-.821-.306q-.29-.3-.289-.81c0-.697.415-1.114 1.112-1.114s1.112.417 1.112 1.115q-.002.513-.288.81c-.19.195-.482.305-.826.305M7.497 11.486a.405.405 0 0 0 .403.403c.221 0 .4-.18.403-.403v-.513c.003-.104.353-.39.497-.507l.01-.008.058-.048q.095-.078.186-.157l.003-.003c.201-.178.664-.589.773-1.258a1.64 1.64 0 0 0-.359-1.344c-.361-.423-.918-.655-1.574-.655-.574 0-1.067.198-1.423.574-.33.35-.513.834-.513 1.361v.11a.403.403 0 0 0 .807 0v-.11c0-.322.104-.61.294-.81.2-.21.49-.322.838-.322.414 0 .756.132.96.373.16.188.222.429.177.695-.064.385-.367.653-.514.783l-.001.001q-.091.078-.196.164l-.026.02-.003.003c-.374.305-.8.652-.8 1.138zM7.44 12.771a.46.46 0 1 0 .92 0 .46.46 0 0 0-.92 0"
            />
            <path
                fill={fillColor}
                d="M17.463 21.847c1.106 0 1.913-.266 2.465-.812.555-.552.826-1.365.826-2.48V5.446c0-1.103-.266-1.907-.82-2.465-.555-.557-1.362-.826-2.471-.826h-6.555c-1.098 0-1.904.277-2.468.843-.506.514-.774 1.225-.817 2.173-1.293.088-2.32.492-3.056 1.202-.874.844-1.317 2.09-1.317 3.71 0 1.618.443 2.865 1.317 3.708.736.71 1.76 1.113 3.05 1.202v3.562c0 1.115.269 1.928.826 2.48.552.546 1.359.812 2.465.812zm-8.726-6.853c1.293-.089 2.32-.493 3.056-1.203.874-.843 1.317-2.09 1.317-3.709s-.443-2.865-1.317-3.709c-.735-.708-1.76-1.112-3.048-1.202.074-1.34.718-1.896 2.163-1.896h6.555c.795 0 1.347.163 1.678.496.33.334.493.883.493 1.675v13.11c0 1.582-.588 2.17-2.171 2.17h-6.555c-1.582 0-2.17-.588-2.17-2.17zM5.345 7.18c.625-.602 1.577-.907 2.835-.907s2.21.305 2.835.907c.647.622.974 1.6.974 2.902s-.327 2.28-.974 2.902c-.625.602-1.58.908-2.835.908s-2.21-.306-2.835-.908c-.647-.622-.975-1.6-.975-2.902s.328-2.28.975-2.902"
            />
        </svg>
    );
};

export default IconLossTheftDevicesRegular;
