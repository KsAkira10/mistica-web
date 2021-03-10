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

const IconArrowsLeftAndRightRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.72 13.548a.806.806 0 01-.34-.075.758.758 0 01-.437-.68l-.014-1.824-2.902.005a1.201 1.201 0 01-1.201-1.201v-2.32a1.2 1.2 0 011.201-1.201l2.905-.003.014-1.824c0-.294.168-.554.437-.683a.788.788 0 01.871.137l4.21 4.18a.757.757 0 010 1.13l-4.21 4.15-.042.036a.779.779 0 01-.493.173zm-.438-3.703c.412 0 .754.33.768.745v.012l.011 1.353 3.384-3.34-3.384-3.358-.011 1.35v.011a.772.772 0 01-.768.746h-.01l-3.242.002a.081.081 0 00-.081.082v2.319a.08.08 0 00.081.081l3.241-.005c.003.002.006.002.011.002zm-9.285 10.25a.773.773 0 01-.496-.177.271.271 0 01-.04-.036l-4.207-4.174a.754.754 0 010-1.129l4.21-4.154c.014-.014.028-.025.042-.036a.793.793 0 01.832-.098c.27.129.434.39.437.68l.014 1.821 2.902-.005c.664 0 1.202.537 1.202 1.201v2.32c0 .663-.538 1.201-1.202 1.201l-2.907.006-.014 1.823a.754.754 0 01-.437.684.825.825 0 01-.336.073zm-3.72-4.95l3.378 3.353.011-1.347v-.012a.77.77 0 01.779-.745l3.238-.002a.081.081 0 00.081-.082v-2.319a.081.081 0 00-.081-.081l-3.238.005a.768.768 0 01-.779-.745v-.01l-.011-1.351-3.378 3.336z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconArrowsLeftAndRightRegular;
