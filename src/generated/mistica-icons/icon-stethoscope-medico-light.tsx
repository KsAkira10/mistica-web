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

const IconStethoscopeMedicoLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.742 14.688c.848-.016 1.28-.473 1.28-1.358 0-.888-.434-1.35-1.292-1.37l-.142-.003h-.037c-.835.009-1.257.463-1.257 1.359 0 .9.428 1.358 1.274 1.372h.174zm-13.185-.42v.787h1.176v-.798a7.146 7.146 0 01-1.176.011zm-3.572-5.19c.115 2.916 1.493 4.392 4.101 4.392 2.605 0 3.983-1.476 4.101-4.392h-.798c-.126 2.216-1.317 3.479-3.303 3.479-1.989 0-3.173-1.26-3.302-3.48h-.799zm17.096 2.098c.635.095 1.762.496 1.762 2.157 0 2.014-1.667 2.17-2.082 2.179h-.201c-.437-.006-2.082-.165-2.082-2.193 0-1.712 1.157-2.082 1.782-2.157V9.448c0-1.956-1.473-2.202-2.107-2.216-.072-.003-.16 0-.232-.003-.625.006-2.073.233-2.073 2.205l.003.078v8.275c0 3.79-3.235 4.042-3.885 4.053-.065.003-.143.003-.219.003h-.129c-1.88-.028-3.888-1.115-3.888-4.079V15.88h-.467c-.286 0-.527-.255-.527-.555v-1.173c-2.316-.513-3.58-2.412-3.58-5.485a.41.41 0 01.41-.409h.386V4.84c-.003-.112-.023-1.247.608-1.897a1.445 1.445 0 011.058-.44c.16-.313.505-.347.617-.347h.07c.145.003.711.062.711.745 0 .684-.566.74-.708.74H5.24c-.109-.003-.437-.034-.608-.322-.002 0-.005.003-.01.003a.62.62 0 00-.477.19c-.328.347-.38 1.084-.373 1.314v3.428h.41a.41.41 0 01.408.41c0 1.4.432 3.066 2.496 3.066 2.062 0 2.496-1.669 2.496-3.067a.41.41 0 01.409-.409h.465V4.84c.008-.264-.048-.986-.378-1.328a.617.617 0 00-.476-.188l-.012-.002c-.168.285-.495.319-.605.319h-.067c-.14-.003-.709-.056-.709-.74 0-.686.566-.742.712-.745h.07c.112 0 .457.034.619.348a1.45 1.45 0 011.059.44c.63.652.61 1.784.608 1.91v3.4h.327a.41.41 0 01.41.41c0 3.022-1.22 4.907-3.46 5.453v1.205c0 .3-.24.554-.527.554h-.476v1.885c0 2.9 2.151 3.244 3.079 3.258.106.003.22 0 .319-.003.723-.014 3.081-.286 3.081-3.232l-.003-8.342c0-2.221 1.49-3.022 2.886-3.034.084.003.184 0 .263.003 1.403.034 2.905.849 2.905 3.037v1.728zm-.365 1.594c.11.002.53.045.53.554 0 .513-.423.552-.527.555h-.05c-.112-.003-.53-.042-.53-.557 0-.513.415-.552.524-.552h.053z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconStethoscopeMedicoLight;
