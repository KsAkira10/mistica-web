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

const IconHospitalLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.027 20.767V6.243a1.33 1.33 0 00-.022-.255h-2.26c-.012.07-.02.157-.02.255v14.779h2.283c.008-.067.02-.154.02-.255zm-3.117.255V3.36c0-.185-.19-.381-.328-.381H6.417c-.135 0-.325.199-.325.38v17.665H9.12v-6.888c0-.227.182-.41.409-.41h4.947c.224 0 .409.186.409.41v6.888h3.025v-.003zm-7.975 0h4.132v-6.48H9.935v6.48zm-6.964-.255c0 .1.009.188.02.255h2.283v-1.02c0-.005-.003-.008-.003-.011V6.246c0-.098-.008-.185-.02-.255h-2.26c-.011.07-.022.157-.022.255v14.52h.002zM21.254 5.17c.547 0 .589.824.589 1.076V20.77c0 .325-.056 1.075-.589 1.075H2.744c-.532 0-.588-.75-.588-1.075V6.246c0-.252.042-1.076.588-1.076h2.533V3.358c0-.63.543-1.202 1.143-1.202h11.165c.6 0 1.143.572 1.143 1.202V5.17h2.526zm-6.173 3.588c.056 0 .106-.039.114-.058l-.002-1.474a.155.155 0 00-.11-.05h-1.89a.41.41 0 01-.41-.41V4.874a.156.156 0 00-.055-.115l-1.482.003c.003.006-.03.054-.03.11v1.896a.408.408 0 01-.41.409H8.918c-.059 0-.1.036-.106.05l.003 1.496c.005 0 .047.03.103.03h1.888c.224 0 .41.186.41.41v1.896c0 .059.035.101.05.107l1.492-.003c-.002-.003.034-.045.034-.104l-.005-1.896a.409.409 0 01.408-.412h1.886v.008zm0-2.403c.493 0 .924.4.924.852v1.518c0 .454-.431.851-.924.851H13.6l.003 1.485c0 .501-.389.924-.848.924h-1.51c-.46 0-.849-.423-.849-.924V9.574H8.918c-.498 0-.921-.39-.921-.852V7.21c0-.462.423-.851.921-.851h1.48V4.873c0-.504.386-.93.848-.93h1.504c.451 0 .849.435.849.93v1.482h1.482z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconHospitalLight;
