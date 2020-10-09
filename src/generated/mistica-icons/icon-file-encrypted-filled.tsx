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

const IconFileEncryptedFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.59 7.653l-4.05-3.984v1.765c0 .658.212 1.213.61 1.608.409.4.983.61 1.664.61h1.776zm1.652.106A.624.624 0 0119.29 8v12.305a1.402 1.402 0 01-1.387 1.384H5.91c-.74 0-1.387-.647-1.387-1.384V3.387C4.522 2.658 5.183 2 5.91 2h7.3c.23 0 .442.09.608.25l5.212 5.125a.893.893 0 01.213.384zM6.234 7.064c0-1.123.347-1.711 1.26-1.711.914 0 1.26.585 1.26 1.711 0 1.126-.346 1.706-1.26 1.706-.913 0-1.26-.582-1.26-1.706zm1.804 0c0-.907-.154-1.207-.544-1.207-.389 0-.543.297-.543 1.207 0 .91.154 1.154.543 1.154.39 0 .544-.246.544-1.154zm1.218 5.33c0-1.122.348-1.71 1.26-1.71.914 0 1.261.585 1.261 1.71 0 1.127-.347 1.707-1.26 1.707s-1.26-.583-1.26-1.706zm1.801 0c0-.907-.154-1.206-.543-1.206-.39 0-.543.297-.543 1.207 0 .91.154 1.154.543 1.154.392 0 .543-.247.543-1.154zm1.449 0c0-1.122.347-1.71 1.26-1.71s1.26.585 1.26 1.71c0 1.127-.347 1.707-1.26 1.707s-1.26-.583-1.26-1.706zm1.8 0c0-.907-.153-1.206-.543-1.206s-.543.297-.543 1.207c0 .91.154 1.154.543 1.154.392 0 .544-.247.544-1.154zm-1.884 5.133c0-1.124.347-1.712 1.26-1.712s1.26.586 1.26 1.712-.347 1.705-1.26 1.705-1.26-.582-1.26-1.705zm1.8 0c0-.908-.153-1.208-.543-1.208s-.543.297-.543 1.208c0 .91.154 1.154.543 1.154.392 0 .544-.247.544-1.154zm-7.607-3.961h.552v-2.292H6.64v-.459c.193-.028.521-.056.754-.056.336 0 .45.081.45.322v2.488h.466v.484H6.615v-.487zm3.07-5.311h.552V5.964H9.71v-.46c.193-.028.521-.056.754-.056.336 0 .45.081.45.322v2.488h.466v.484H9.685v-.487zm6.154 5.31h.552v-2.29h-.527v-.46c.193-.028.521-.056.754-.056.336 0 .45.081.45.322v2.488h.466v.484h-1.695v-.487zm0 5.121h.552v-2.291h-.527v-.46c.193-.027.521-.055.754-.055.336 0 .45.08.45.322v2.487h.466v.482h-1.695v-.485zm-6.104 0h.552v-2.291H9.76v-.46c.194-.027.521-.055.754-.055.336 0 .451.08.451.322v2.487h.465v.482H9.735v-.485zm-3.039 0h.552v-2.291H6.72v-.46c.194-.027.521-.055.754-.055.336 0 .45.08.45.322v2.487h.466v.482H6.696v-.485z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileEncryptedFilled;
