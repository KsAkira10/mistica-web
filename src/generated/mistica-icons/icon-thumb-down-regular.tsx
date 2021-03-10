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

const IconThumbDownRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M4.888 11.056c.448 0 .762-.313.762-.762 0-.448-.314-.761-.762-.761s-.762.313-.762.761c0 .451.311.762.762.762zm15.367.048a.62.62 0 00-.03.874l.033.034c.233.212.359.577.359 1.05 0 .95-.832 1.098-1.19 1.118h-3.393l-2.686.078a.613.613 0 00-.597.62c0 1.416.003 2.837.008 4.254l.006.12c.003.975-.378 1.365-1.269 1.365-.328 0-.77-.056-1.028-.337-.19-.204-.272-.515-.244-.927l.017-.19c.009-.084.017-.165.023-.264.002-.022.005-.044.005-.067.025-1.157.042-2.641-.073-3.851-.173-1.821-1.781-2.86-2.54-3.25v-.008c0-.017.005-.03.005-.048v-7.52l2.477-.034c.327 0 .652-.093 1.061-.21l.216-.062c.731-.213 1.557-.457 3.639-.457 3.44 0 3.655.334 3.902.998.084.546.002.79-.082.94a.617.617 0 00.303.864c.414.17.91.498.91 1.061 0 .395-.09.706-.255.902a.62.62 0 00-.143.48c.023.17.118.327.26.428.44.302.665.675.665 1.103.005.398-.118.712-.359.936zm-14.05-7.25a.23.23 0 01.224.216v7.62a.225.225 0 01-.224.215H3.614a.228.228 0 01-.227-.23v-7.59c0-.127.104-.228.227-.228l2.59-.002zm15.26 7.704c.213-.334.381-.787.381-1.392 0-.656-.263-1.264-.748-1.748.126-.294.222-.678.222-1.168 0-.787-.412-1.468-1.149-1.93.07-.348.065-.74-.011-1.196a.487.487 0 00-.03-.11c-.564-1.523-1.463-1.854-5.076-1.854-2.258 0-3.216.28-3.986.507l-.208.059c-.316.092-.571.165-.73.165l-2.805.037c-.067 0-.129.025-.193.039a1.461 1.461 0 00-.927-.342H3.614c-.801 0-1.454.653-1.454 1.457v7.593c0 .804.653 1.457 1.454 1.457h2.59c.334 0 .64-.118.886-.308.549.28 1.767 1.042 1.885 2.274.11 1.124.095 2.527.07 3.639l-.003.042a2.3 2.3 0 01-.02.26l-.019.23c-.067.95.275 1.53.569 1.849.442.476 1.109.728 1.927.728 1.563 0 2.499-.947 2.499-2.535l-.003-.098-.006-.131c0-1.258-.003-2.788-.005-3.614l2.07-.062h3.411c1.205-.064 2.384-.817 2.384-2.347-.003-.67-.174-1.154-.384-1.501z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconThumbDownRegular;
