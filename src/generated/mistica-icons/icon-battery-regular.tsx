/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBatteryRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.865 4.292c1.045.023 1.835.3 2.403.86.589.583.874 1.395.88 2.482v10.86c0 1.095-.288 1.91-.882 2.493-.588.574-1.412.854-2.516.854H9.24c-1.103 0-1.927-.28-2.515-.854-.594-.58-.882-1.395-.882-2.493V7.634c0-1.073.285-1.88.874-2.465.596-.594 1.423-.882 2.52-.882H9.3V3.84c0-.518.152-.93.454-1.23.303-.302.726-.456 1.255-.456h2.149c.532 0 .955.151 1.254.451.303.3.454.714.454 1.235v.451zm-4.305-.45v.445h3.045V3.84c0-.103-.011-.285-.087-.358-.07-.073-.258-.084-.362-.084h-2.148c-.123 0-.288.017-.361.09-.073.07-.087.229-.087.352zm6.322 14.652l.003-10.86c0-.742-.166-1.266-.507-1.605-.342-.336-.874-.501-1.63-.501h-5.51c-.745 0-1.278.168-1.625.515-.347.342-.513.863-.513 1.591v10.86c0 .748.166 1.277.51 1.61.34.334.874.494 1.628.494h5.507c.753 0 1.285-.16 1.627-.493.345-.334.51-.863.51-1.611z"
            />
        </svg>
    );
};

export default IconBatteryRegular;
