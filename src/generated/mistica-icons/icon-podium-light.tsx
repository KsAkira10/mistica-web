/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPodiumLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M8.9 5.73l.773.775-.18 1.101a1.073 1.073 0 001.051 1.252c.171 0 .345-.042.505-.129l.932-.507.933.507c.347.188.79.163 1.112-.064.342-.241.51-.644.443-1.059l-.182-1.104.773-.776c.291-.29.39-.714.258-1.103a1.063 1.063 0 00-.852-.717l-1.05-.157-.477-.989a1.06 1.06 0 00-1.919.003l-.473.989-1.05.157a1.067 1.067 0 00-.852.717c-.131.389-.033.812.255 1.103zm.594-.578a.252.252 0 01-.059-.266.226.226 0 01.185-.16l1.232-.184a.459.459 0 00.356-.247l.566-1.176c.079-.168.328-.168.409 0l.569 1.184c.058.12.187.216.322.236l1.263.187a.23.23 0 01.185.16.264.264 0 01-.059.266l-.902.905a.462.462 0 00-.134.395l.215 1.291a.244.244 0 01-.1.252.22.22 0 01-.227.012L12.2 7.404a.436.436 0 00-.426-.008l-1.132.61a.209.209 0 01-.226-.01.248.248 0 01-.101-.253l.215-1.291a.482.482 0 00-.123-.384l-.913-.916zm11.512 15.824c-.016.003-.033.003-.05.003h-5.35l-.026-.002a.242.242 0 00-.022-.001v-3.68c.014-.004.031-.004.048-.004h5.35c.017 0 .034 0 .05.003v3.68zm-6.333.022h-5.35l-.048-.003v-.456l.048-8.83 5.4.004-.05 9.285zm-11.633-.02c-.017 0-.036 0-.047-.002v-6.13a.13.13 0 01.047-.008h5.35a.13.13 0 01.048.009v6.126a.247.247 0 01-.048.006H3.04zm0 .866h12.566v-.006h5.347c.521 0 .888-.271.888-.633v-4.148c0-.403-.445-.613-.885-.613h-5.35a.156.156 0 00-.024.002l-.024.003v-4.74c0-.45-.414-.848-.885-.848h-5.35c-.47 0-.885.398-.885.849V14a.09.09 0 01-.022-.004.104.104 0 00-.026-.004H3.04c-.428 0-.885.288-.885.717v6.397c0 .395.398.737.885.737z"
            />
        </svg>
    );
};

export default IconPodiumLight;
