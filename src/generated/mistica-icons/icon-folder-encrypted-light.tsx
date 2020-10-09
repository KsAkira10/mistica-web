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

const IconFolderEncryptedLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M10.73 3.813a1.26 1.26 0 011.255 1.263v1h.052l.7-.001h.182l2.494-.001h.29l4.885-.001a1.26 1.26 0 011.255 1.263v11.617a1.26 1.26 0 01-1.255 1.263H3.414a1.26 1.26 0 01-1.258-1.263V5.076a1.26 1.26 0 011.258-1.263h7.316zm.003.823H3.414a.438.438 0 00-.437.44v13.88c0 .24.196.436.437.436h17.174a.44.44 0 00.434-.44V7.337a.435.435 0 00-.434-.437h-9.012a.408.408 0 01-.409-.411V5.076a.44.44 0 00-.434-.44zm-1.94 9.574c.912 0 1.26.586 1.26 1.712s-.348 1.706-1.26 1.706c-.914 0-1.261-.58-1.261-1.706 0-1.124.347-1.712 1.26-1.712zm9.122 0c.914 0 1.26.586 1.26 1.712s-.346 1.706-1.26 1.706c-.913 0-1.26-.58-1.26-1.706 0-1.124.347-1.712 1.26-1.712zm-6.07.098c.336 0 .451.082.451.322v2.488h.465v.484h-1.694v-.487h.554v-2.291h-.53v-.46c.194-.028.522-.056.754-.056zm2.91 0c.337 0 .452.082.452.322v2.488h.465v.484h-1.695v-.487h.552v-2.291h-.527v-.46c.193-.028.521-.056.754-.056zm-9.568-.003c.336 0 .451.082.451.323v2.487h.465v.485H4.408v-.488h.552v-2.291h-.526v-.46c.193-.027.52-.056.753-.056zm3.605.41c-.39 0-.543.296-.543 1.207 0 .91.154 1.154.543 1.154.39 0 .544-.247.544-1.154 0-.908-.155-1.208-.544-1.208zm9.12 0c-.389 0-.543.296-.543 1.207 0 .91.154 1.154.544 1.154.389 0 .543-.247.543-1.154 0-.908-.154-1.208-.543-1.208zm-9.12-5.908c.913 0 1.26.585 1.26 1.711 0 1.126-.347 1.706-1.26 1.706s-1.26-.58-1.26-1.706c0-1.123.347-1.711 1.26-1.711zm-3.59 0c.912 0 1.26.585 1.26 1.711 0 1.126-.348 1.706-1.26 1.706-.914 0-1.261-.58-1.261-1.706 0-1.123.347-1.711 1.26-1.711zm12.713 0c.914 0 1.26.585 1.26 1.711 0 1.126-.346 1.706-1.26 1.706-.913 0-1.26-.58-1.26-1.706 0-1.123.347-1.711 1.26-1.711zm-6.07.098c.336 0 .451.081.451.322v2.487h.465v.485h-1.694v-.487h.554V9.42h-.53v-.459c.194-.028.522-.056.754-.056zm2.91 0c.337 0 .452.081.452.322v2.487h.465v.485h-1.695v-.487h.552V9.42h-.527v-.459c.193-.028.521-.056.754-.056zm-5.963.406c-.39 0-.543.297-.543 1.207 0 .91.154 1.154.543 1.154.39 0 .544-.246.544-1.154 0-.907-.155-1.207-.544-1.207zm-3.59 0c-.39 0-.544.297-.544 1.207 0 .91.154 1.154.543 1.154.39 0 .543-.246.543-1.154 0-.907-.154-1.207-.543-1.207zm12.71 0c-.389 0-.543.297-.543 1.207 0 .91.154 1.154.544 1.154.389 0 .543-.246.543-1.154 0-.907-.154-1.207-.543-1.207z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFolderEncryptedLight;
