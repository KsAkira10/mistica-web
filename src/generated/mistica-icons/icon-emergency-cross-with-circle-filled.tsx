/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconEmergencyCrossWithCircleFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M12.415 2.166c1.927.045 9.431.807 9.431 9.86 0 9.07-7.512 9.776-9.392 9.81-.176.005-.378.005-.58.005-.106 0-.215 0-.319-.003-1.977-.028-9.392-.742-9.392-9.87 0-9.115 7.347-9.793 9.322-9.81.03 0 .058 0 .086-.002l.09-.001c.256 0 .524.006.754.011zm4.855 11.27h-3.222a.617.617 0 00-.616.615l.008 3.219c0 .151-.103.252-.137.258H10.73c-.036-.009-.14-.107-.14-.258v-3.221a.616.616 0 00-.616-.617H6.75c-.157 0-.255-.103-.26-.137V10.73c.008-.036.106-.14.26-.14h3.222a.616.616 0 00.616-.616V6.752c0-.14.1-.255.137-.266l2.557-.003c.045.014.149.129.149.269V9.97c0 .34.274.616.616.616h3.222c.134 0 .249.098.266.146l.002 2.555c-.014.044-.128.148-.268.148zm-2.608-4.08V6.76c0-.798-.639-1.496-1.367-1.496h-2.569c-.742 0-1.367.687-1.367 1.496v2.605H6.754c-.81 0-1.49.625-1.49 1.367v2.569c0 .74.68 1.367 1.49 1.367H9.36v2.605c0 .806.628 1.487 1.367 1.487h2.577c.742 0 1.367-.68 1.367-1.49l-.005-2.602h2.605c.798 0 1.498-.639 1.498-1.367v-2.577c0-.729-.7-1.367-1.498-1.367h-2.608z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconEmergencyCrossWithCircleFilled;
