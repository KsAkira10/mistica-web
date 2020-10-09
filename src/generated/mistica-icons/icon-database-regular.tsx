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

const IconDatabaseRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.056 18.706c.479 0 .65-.174.65-.658 0-.485-.171-.659-.65-.659s-.65.174-.65.659c.003.484.171.658.65.658zm0-2.308c1.022 0 1.63.616 1.63 1.65 0 1.033-.61 1.65-1.63 1.65s-1.63-.617-1.63-1.65c0-1.034.61-1.65 1.63-1.65zm0-3.894c.479 0 .65-.173.65-.658 0-.485-.171-.658-.65-.658s-.65.173-.65.658c.003.487.171.658.65.658zm0-2.308c1.022 0 1.63.616 1.63 1.65 0 1.034-.61 1.65-1.63 1.65s-1.63-.616-1.63-1.65c0-1.03.61-1.65 1.63-1.65zm.02-5.204c-.48 0-.65.173-.65.658 0 .484.17.658.65.658.479 0 .65-.174.65-.658 0-.488-.171-.658-.65-.658zm0 2.308c-1.023 0-1.63-.617-1.63-1.65 0-1.034.61-1.65 1.63-1.65s1.63.616 1.63 1.65c0 1.03-.608 1.65-1.63 1.65zm2.403 12.921l.006-4.46a.22.22 0 00-.222-.22H3.482c-.12 0-.219.1-.219.224l-.005 4.46a.22.22 0 00.221.22h16.782a.225.225 0 00.218-.224zM3.263 3.465l-.005 4.46c0 .12.098.223.221.223h16.782c.123 0 .22-.1.22-.224l.006-4.459a.22.22 0 00-.22-.221H3.481a.22.22 0 00-.219.221zm.213 10.83h16.782a.223.223 0 00.221-.225l.006-4.46a.22.22 0 00-.222-.22H3.482a.22.22 0 00-.219.22l-.005 4.46a.22.22 0 00.218.224zm18.238-4.682l-.005 4.46c0 .314-.101.602-.266.84.168.241.271.532.271.849l-.005 4.46a1.46 1.46 0 01-1.451 1.464H3.476a1.46 1.46 0 01-1.448-1.465l.006-4.46c0-.313.098-.601.263-.84a1.48 1.48 0 01-.272-.848l.006-4.46c0-.313.098-.602.263-.84a1.48 1.48 0 01-.272-.849l.006-4.459c0-.807.65-1.465 1.448-1.465h16.782a1.46 1.46 0 011.448 1.465l-.006 4.46c0 .313-.098.602-.266.84.177.24.28.532.28.848zM4.768 6.27a.617.617 0 01-.614-.622c0-.344.275-.622.614-.622h5.683c.339 0 .613.278.613.622a.617.617 0 01-.613.622H4.768zm5.683 4.958c.339 0 .613.277.613.622a.619.619 0 01-.613.622H4.768a.617.617 0 01-.614-.622c0-.345.275-.622.614-.622h5.683zm0 6.238c.339 0 .613.277.613.622a.617.617 0 01-.613.622H4.768a.617.617 0 01-.614-.622c0-.345.275-.622.614-.622h5.683z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDatabaseRegular;
