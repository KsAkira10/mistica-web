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

const IconFragranceRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.458 20.642a.22.22 0 00.219-.221.22.22 0 00-.219-.222H7.582a.225.225 0 00-.222.222c0 .12.098.22.222.22h8.876zM5.002 13.919c0 2.289.983 4.042 2.843 5.079h8.403c1.804-1.014 2.762-2.765 2.762-5.079 0-4.151-3.333-5.434-4.77-5.795h-.003a9.356 9.356 0 00-2.235-.27 8.9 8.9 0 00-2.496.356c-.009.003-.017.003-.025.006C7.04 8.947 5 10.796 5 13.919zM9.87 4.266V6.88a10.17 10.17 0 012.132-.227c.61 0 1.207.07 1.792.17V4.267a.9.9 0 00-.899-.902h-2.129a.9.9 0 00-.896.902zm10.336 9.653c0 2.443-.905 4.375-2.624 5.647.182.238.294.535.294.857 0 .785-.636 1.423-1.418 1.423H7.582c-.782 0-1.42-.638-1.42-1.423 0-.333.12-.636.31-.88C4.742 18.256 3.8 16.295 3.8 13.92c0-3.574 2.182-5.748 4.871-6.7V4.266c0-1.162.941-2.106 2.095-2.106h2.13c1.156 0 2.094.944 2.094 2.106V7.09c3.278.994 5.216 3.513 5.216 6.83zm-11.28-1.333v2.846c0 .395.32.717.714.717h4.482a.716.716 0 00.714-.717v-2.846a.716.716 0 00-.714-.717H9.64a.716.716 0 00-.714.717zm.714 4.764a1.917 1.917 0 01-1.913-1.918v-2.846a1.92 1.92 0 011.913-1.922h4.482c1.053 0 1.913.863 1.913 1.922v2.846a1.917 1.917 0 01-1.913 1.918H9.64zm2.446-12.33c0 .19.143.347.316.347.174 0 .317-.157.317-.347 0-.19-.143-.35-.317-.35-.173 0-.316.157-.316.35zm1.431 0c0 .633-.501 1.151-1.115 1.151-.616 0-1.115-.518-1.115-1.151 0-.636.502-1.151 1.115-1.151.616-.003 1.115.515 1.115 1.15zm2.675-.77a.602.602 0 01-.423-1.028l.712-.717a.602.602 0 01.849.852l-.712.713a.592.592 0 01-.426.18zm.18.605a.6.6 0 01.599-.603h1.305a.6.6 0 01.6.603.6.6 0 01-.6.602h-1.305a.603.603 0 01-.6-.602zm-.552.784a.598.598 0 01.848 0l.754.756a.602.602 0 01-.423 1.028.59.59 0 01-.423-.176l-.754-.756a.604.604 0 01-.002-.852zm-4.796 7.924a.4.4 0 110-.8h1.672a.4.4 0 110 .8h-1.672zm-.63 1.591a.4.4 0 110-.8h2.927a.4.4 0 110 .8h-2.927z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFragranceRegular;
