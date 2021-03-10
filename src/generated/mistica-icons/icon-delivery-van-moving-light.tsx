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

const IconDeliveryVanMovingLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.482 5.333c.504 0 1.033.266 1.32.664.16.223.605.82 1.12 1.507l.314.42a478.857 478.857 0 001.837 2.435c.227.294.605.787.605 1.263v3.277c0 .706-.667 1.373-1.373 1.373h-.853c-.175 1.062-.912 1.638-2.121 1.638-1.21 0-1.948-.577-2.123-1.64l-.015.002H9.621c-.176 1.062-.913 1.638-2.122 1.638-1.21 0-1.947-.576-2.122-1.638H5.01c-.706 0-1.372-.667-1.372-1.373l-.001-1.359H2.28a.28.28 0 01-.28-.28.28.28 0 01.28-.28h1.358v-2.17H2.28a.28.28 0 01-.28-.28.28.28 0 01.28-.28l1.358-.002v-2.17H2.28a.28.28 0 01-.28-.28.28.28 0 01.28-.28h1.358v-.812c0-.706.667-1.373 1.373-1.373h11.47zm-8.983 8.813c-.53 0-.933.129-1.194.38-.271.261-.409.673-.409 1.222 0 .549.138.96.41 1.221.263.252.663.381 1.193.381.529 0 .932-.129 1.193-.38.272-.261.409-.673.409-1.222 0-.55-.137-.96-.41-1.221-.26-.255-.663-.381-1.192-.381zm9.832 0c-.53 0-.933.129-1.194.38-.271.261-.409.673-.409 1.222 0 .549.138.96.41 1.221.263.252.663.381 1.193.381.529 0 .932-.129 1.193-.38.272-.261.409-.673.409-1.222 0-.55-.137-.96-.41-1.221-.26-.255-.663-.381-1.192-.381zm-.85-8.252H5.012c-.395 0-.812.417-.812.812v8.193c0 .395.417.812.812.812h.326l.003-.141c.064-1.282.824-1.985 2.159-1.985 1.382 0 2.149.755 2.162 2.126h5.508l.003-.141c.064-1.282.824-1.985 2.159-1.985 1.382 0 2.148.755 2.162 2.126h.812c.395 0 .813-.417.813-.812v-3.277c0-.286-.317-.7-.488-.922a637.695 637.695 0 01-2.002-2.657l-.456-.609a98.672 98.672 0 01-.825-1.112c-.179-.25-.543-.428-.865-.428z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDeliveryVanMovingLight;
