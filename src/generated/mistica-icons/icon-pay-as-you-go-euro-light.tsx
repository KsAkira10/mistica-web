'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPayAsYouGoEuroLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.189 17.378a.735.735 0 0 1 .8.619.684.684 0 0 1-.588.806l-3.724.581-.524-3.89a.727.727 0 0 1 .592-.836.735.735 0 0 1 .8.618l.208 1.563A9.03 9.03 0 0 0 20.181 12c0-4.73-3.656-8.546-8.215-8.546-1.216 0-2.364.289-3.48.836a.73.73 0 0 1-.94-.364c-.14-.363 0-.798.349-.982A9.5 9.5 0 0 1 12.002 2c5.291 0 9.57 4.471 9.535 10 0 1.998-.56 3.928-1.604 5.562zm-9.187 3.168a7.96 7.96 0 0 0 3.551-.836.64.64 0 0 1 .908.326.75.75 0 0 1-.316.982 9.1 9.1 0 0 1-4.143.982c-5.287 0-9.57-4.471-9.57-10 0-1.998.591-3.928 1.635-5.566l-1.256.184c-.384.075-.728-.218-.8-.619a.727.727 0 0 1 .592-.836l3.76-.547.524 3.89a.727.727 0 0 1-.592.836H6.19a.693.693 0 0 1-.696-.618L5.287 7.16A8.76 8.76 0 0 0 3.823 12c0 4.73 3.656 8.546 8.179 8.546"
                />
                <path
                    fill={fillColor}
                    d="M6.955 13.09c0 .402.316.728.696.728h.695c.696 1.709 2.296 2.908 4.176 2.908.8 0 1.564-.217 2.264-.652a.71.71 0 0 0 .244-.982c-.208-.363-.624-.472-.94-.255a3 3 0 0 1-1.564.435c-1.08 0-2.052-.58-2.612-1.454h2.612c.384 0 .696-.33.696-.727s-.316-.727-.696-.727h-3.1c0-.11-.036-.255-.036-.364s0-.255.036-.364h3.096c.384 0 .696-.33.696-.727s-.316-.727-.696-.727H9.914c.556-.873 1.532-1.454 2.612-1.454.556 0 1.08.146 1.564.435a.66.66 0 0 0 .94-.255.725.725 0 0 0-.244-.982c-.696-.402-1.464-.652-2.264-.652-1.88 0-3.48 1.2-4.176 2.908h-.695c-.384 0-.696.33-.696.727s.316.727.696.727h.348c0 .11-.036.255-.036.364s0 .255.036.364H7.65c-.38 0-.696.325-.696.727"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m21.598 17.967-2.166.339a10.23 10.23 0 0 0 2.13-6.266C21.562 6.49 17.27 2 12 2a9.3 9.3 0 0 0-5.125 1.55c-.18.113-.217.339-.108.527.108.189.324.227.504.114A8.44 8.44 0 0 1 12 2.758c4.87 0 8.841 4.15 8.841 9.248 0 2.19-.72 4.302-2.094 5.965l-.36-2.492c-.036-.189-.217-.34-.397-.302s-.324.226-.288.415l.504 3.656 3.5-.528c.18-.037.325-.226.288-.414-.036-.23-.216-.381-.396-.34M17.41 20.304c0 .416-.323.754-.721.754s-.72-.338-.72-.754c0-.417.322-.754.72-.754s.72.337.72.754M14.667 20.831a9.2 9.2 0 0 1-2.671.415c-4.87 0-8.841-4.15-8.841-9.248 0-2.228.757-4.302 2.094-5.964l.36 2.492c.036.188.18.339.36.339h.037c.18-.038.324-.226.288-.415L5.79 4.79l-3.496.527c-.18.038-.324.226-.288.415s.216.34.396.302l2.166-.34a10.32 10.32 0 0 0-2.13 6.304C2.438 17.51 6.73 22 12 22c.973 0 1.95-.15 2.887-.452.18-.076.288-.264.252-.49-.04-.23-.288-.302-.472-.227"
                />
                <path
                    fill={fillColor}
                    d="M7.13 13.133c0 .226.145.377.361.377h.973c.613 1.738 2.203 3.02 4.077 3.02a4.37 4.37 0 0 0 2.166-.603c.18-.113.216-.34.144-.528-.108-.188-.324-.226-.505-.15-.54.339-1.153.49-1.805.49-1.482 0-2.743-.943-3.284-2.267h3.32c.216 0 .36-.15.36-.377 0-.226-.144-.377-.36-.377H9.04a5 5 0 0 1-.072-.754c0-.263.036-.49.072-.753h3.536c.216 0 .36-.151.36-.377 0-.227-.144-.377-.36-.377h-3.32c.54-1.32 1.838-2.266 3.32-2.266.612 0 1.26.188 1.806.527.18.114.396.038.504-.15a.39.39 0 0 0-.144-.528c-.649-.415-1.41-.603-2.166-.603-1.878 0-3.464 1.248-4.077 3.02h-.973c-.216 0-.36.15-.36.377 0 .226.144.377.36.377h.793c-.036.226-.072.49-.072.753 0 .264.036.528.072.754h-.793c-.256.034-.396.189-.396.415"
                />
            </svg>
        );
    }
};

export default IconPayAsYouGoEuroLight;
