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

const IconLoudspeakerLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.65 5.57a.744.744 0 01.294.596v11.659a.754.754 0 01-.294.6.667.667 0 01-.589.106l-6.04-1.826a.54.54 0 01-.018.075l-.241.765a.55.55 0 01-.275.327.539.539 0 01-.428.042l-2.325-.728a.561.561 0 01-.367-.703l.24-.765.018-.041-3.884-1.175.001.502a.276.276 0 01-.277.277.276.276 0 01-.277-.277V8.996a.277.277 0 11.554 0v.498l13.32-4.028a.662.662 0 01.588.104zm-.398.423c-.011 0-.02.003-.03.005L2.884 10.032c-.062.02-.106.09-.106.17v3.595c0 .08.044.151.106.17l13.336 4.034c.034.011.065.003.095-.02a.186.186 0 00.07-.15V6.168a.183.183 0 00-.07-.151.104.104 0 00-.064-.025zm2.784 9.308L21 17.264a.279.279 0 11-.395.395l-1.964-1.963a.279.279 0 11.395-.395zm-11.893.583l-.241.764 2.325.729.24-.765-2.324-.728zm14.392-4.435a.28.28 0 01.28.28.28.28 0 01-.28.28h-2.779a.28.28 0 01-.28-.28.28.28 0 01.28-.28h2.779zm-.527-5.706c.11.11.11.286 0 .395l-1.963 1.964a.28.28 0 01-.395 0 .279.279 0 010-.395l1.963-1.964a.28.28 0 01.395 0z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLoudspeakerLight;
