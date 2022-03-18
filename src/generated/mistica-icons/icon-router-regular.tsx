/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconRouterRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.502 2 2 6.502 2 12s4.502 10 10 10 10-4.502 10-10S17.498 2 12 2zM9.683 8.074h-.86l1.966 1.929a.516.516 0 010 .75.55.55 0 01-.393.141.544.544 0 01-.393-.142L8.074 8.824v.859a.55.55 0 01-.535.535.55.55 0 01-.534-.535V7.005h2.678a.55.55 0 01.535.534.55.55 0 01-.535.535zm4.46 1.038l1.93-1.966c.214-.183.57-.183.744.037a.516.516 0 010 .75L14.89 9.86h.859a.55.55 0 01.534.535.55.55 0 01-.534.534h-2.674V8.253a.55.55 0 01.535-.534.55.55 0 01.534.534v.86zm1.787 5.21a.55.55 0 01.535-.535c.284 0 .535.247.535.535V17h-2.678a.55.55 0 01-.535-.535.55.55 0 01.535-.534h.859L13.252 14a.516.516 0 010-.749.516.516 0 01.75 0l1.928 1.929v-.86zm-8.217-.713a.55.55 0 00.535.534h.859l-1.929 1.93a.517.517 0 000 .749.544.544 0 00.393.141.55.55 0 00.393-.141l1.892-1.965v.89a.55.55 0 00.535.535.55.55 0 00.535-.534V13.07H8.252a.529.529 0 00-.539.539zM3.431 12c0 4.712 3.857 8.57 8.569 8.57 4.712 0 8.57-3.858 8.57-8.57S16.712 3.43 12 3.43 3.43 7.289 3.43 12z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.254 6.905c-.026-2.305-1.519-3.683-1.535-3.697a.604.604 0 01-.045-.854l.003-.003a.62.62 0 01.868-.045c.078.07 1.907 1.731 1.938 4.569.006.098.104 2.89-1.913 4.672a.623.623 0 01-.868-.048.606.606 0 01.042-.854l.003-.002.002-.004c1.589-1.403 1.507-3.708 1.505-3.734zm8.582 10.33c0-.94-.252-1.677-.745-2.184-.515-.53-1.277-.796-2.266-.796H8.08V6.922a.615.615 0 00-.616-.61.613.613 0 00-.617.61v7.33H5.164c-.992 0-1.754.267-2.269.796-.496.51-.745 1.244-.745 2.185v1.622c0 .941.25 1.678.745 2.188.515.529 1.277.795 2.269.795h13.658c.992 0 1.754-.266 2.27-.795.492-.507.744-1.244.744-2.185v-1.622zm-1.232 1.62v-1.622c0-.616-.135-1.067-.4-1.339-.275-.28-.74-.423-1.382-.423H5.164c-.644 0-1.107.143-1.381.423-.266.272-.4.723-.4 1.34v1.621c0 .616.134 1.067.4 1.339.274.28.737.423 1.38.423h13.662c.644 0 1.106-.143 1.38-.423.264-.272.402-.723.399-1.339zm-14.659-.709c0-.518-.305-.759-.775-.759-.471 0-.774.241-.776.762 0 .25.07.434.196.56.137.135.336.196.58.196.243 0 .445-.064.58-.199.125-.126.195-.31.195-.56zm2.824 0c0-.518-.305-.759-.776-.759-.47 0-.776.241-.776.76 0 .249.07.433.196.56.137.134.336.198.58.198.247 0 .445-.064.58-.199.126-.126.196-.31.196-.56zm1-13.397c.011.008.88.82.896 2.179v.002c.001.056.025 1.392-.874 2.183l-.005.005a.604.604 0 00-.045.855.62.62 0 00.868.05c1.356-1.196 1.289-3.067 1.286-3.123-.022-1.894-1.25-3.009-1.303-3.056a.62.62 0 00-.873.053.603.603 0 00.05.852z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconRouterRegular;
