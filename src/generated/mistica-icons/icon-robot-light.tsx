/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconRobotLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.895 9.246L20.454 7.71h-1.76a1.527 1.527 0 00-.316-.499l-3.026-3.14C15.28 2.928 14.33 2 13.172 2c-.774 0-1.477.393-1.864 1.106l-5.034 8.787A2.719 2.719 0 004.76 14.32v4.466c-.986 0-1.761.787-1.761 1.788V22h8.794v-1.426c0-1.001-.774-1.788-1.76-1.788V14.32c0-1.463-1.198-2.679-2.639-2.679h-.14l4.683-8.215c.248-.43.739-.713 1.23-.713.81 0 1.477.677 1.477 1.5 0 .251-.072.498-.212.713L11.8 9.712a.364.364 0 00.14.498c.175.105.387.037.49-.141l1.793-3.178 2.251 2.286c.086.087.149.151.248.188v2.454L18.27 13c.063.05.135.073.211.073a.36.36 0 00.284-.142.357.357 0 00-.072-.498l-1.265-.965V9.611c.666 0 1.23-.498 1.337-1.179h1.374l1.265 1.321a.369.369 0 00.248.105.392.392 0 00.247-.105.364.364 0 00-.004-.507zM10.038 19.499c.6 0 1.054.467 1.054 1.07v.713H3.707v-.713c0-.608.46-1.07 1.054-1.07h5.277zm-.702-5.179c0-1.074-.883-1.966-1.937-1.966-1.053 0-1.936.892-1.936 1.966v4.466h3.873V14.32zm8.056-5.43a.69.69 0 01-.491-.216l-2.36-2.39.563-.965a1.05 1.05 0 00.14-.357l2.639 2.752a.71.71 0 01.211.499c0 .356-.315.676-.702.676zm-6.295 3.464c.387 0 .702-.32.702-.713a.709.709 0 00-.702-.713.709.709 0 00-.703.713c0 .393.315.713.703.713z"
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
                    d="M18.07 12.974h-4.35v.703h6.484c.463 0 .84.37.84.823v6.513a.832.832 0 01-.84.823H3.84a.834.834 0 01-.84-.823V14.5c0-.454.375-.823.84-.823h6.485v-.703H5.986a.834.834 0 01-.84-.824v-1.115H3.84a.834.834 0 01-.84-.823V7.038c0-.454.375-.824.84-.824h1.306V4.315a.83.83 0 01.84-.823h5.616v-.376a.562.562 0 01-.162-.395c0-.316.263-.571.582-.571a.58.58 0 01.586.571.553.553 0 01-.165.395v.376h5.63c.462 0 .84.367.84.823v1.91h1.294c.462 0 .84.368.84.824v3.174a.834.834 0 01-.84.823h-1.294v1.104a.838.838 0 01-.843.824zM5.986 12.15V4.315H18.07v7.835H5.986zm-.84-1.938H3.84V7.038h1.306v3.174zm7.734 3.462v-.69h-1.715v.69h1.715zm7.324.823v6.513h-2.43l.002-.01a.083.083 0 00.006-.026V16.8a.832.832 0 00-.84-.824H7.1a.83.83 0 00-.84.824v4.174a.06.06 0 00.004.02c.002.005.004.01.004.016H3.84v-6.513h16.364zM7.101 20.974h9.84V16.8h-9.84v4.174zm13.104-10.751H18.91V7.049h1.294v3.174zM10.198 7.349a.68.68 0 01-.686.672.68.68 0 01-.687-.672c0-.373.308-.675.687-.675.378 0 .686.302.686.675zm.84 0c0 .826-.683 1.496-1.526 1.496-.844 0-1.527-.673-1.527-1.496 0-.826.683-1.496 1.527-1.496a1.51 1.51 0 011.526 1.496zm4.19-.02a.68.68 0 01-.686.673.681.681 0 01-.686-.673c0-.372.308-.675.686-.675.379 0 .687.303.687.675zm-.686-1.498c.844 0 1.527.672 1.527 1.498 0 .827-.683 1.496-1.527 1.496-.843 0-1.526-.672-1.526-1.496 0-.823.683-1.498 1.526-1.498zm-.338 4.308a.416.416 0 00-.42-.412h-3.513a.416.416 0 00-.42.412c0 .227.187.412.42.412h3.512c.233 0 .42-.185.42-.412z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconRobotLight;
