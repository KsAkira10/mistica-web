'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconRocketFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m20.974 3.8.865-.867a.545.545 0 0 0 0-.772.545.545 0 0 0-.772 0l-.866.865a3.42 3.42 0 0 0-2.02-.656c-.922 0-1.787.358-2.439 1.01L9.505 9.618 4.618 8.324 2.212 10.73l3.09 3.091-.726.726 4.878 4.879.726-.726 3.09 3.09 2.407-2.406-1.294-4.888L20.62 8.26a3.45 3.45 0 0 0 .354-4.46M2.934 18.205a.54.54 0 0 1-.773-.004.545.545 0 0 1 0-.773l1.452-1.452a.545.545 0 0 1 .772 0 .545.545 0 0 1 0 .772zm0 3.636 3.271-3.273a.545.545 0 0 0 0-.772.545.545 0 0 0-.772 0L2.16 21.069a.545.545 0 0 0 .386.931c.14 0 .28-.051.386-.158m4.319-2.225L5.8 21.069a.545.545 0 0 0 .387.931c.14 0 .279-.051.386-.158l1.452-1.453a.545.545 0 0 0 0-.772.545.545 0 0 0-.772 0M18.907 7.09a2.004 2.004 0 0 1-2.001 2.002 2.004 2.004 0 0 1-2.002-2.002c0-1.103.899-2.001 2.002-2.001s2.001.898 2.001 2.001m-2.904 0c0-.498.405-.908.907-.908.498 0 .908.41.908.908s-.41.908-.908.908a.91.91 0 0 1-.907-.908"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m20.974 3.8.865-.867a.545.545 0 0 0 0-.772.545.545 0 0 0-.772 0l-.866.865a3.42 3.42 0 0 0-2.02-.656c-.922 0-1.787.358-2.439 1.01L9.505 9.618 4.618 8.324 2.212 10.73l3.09 3.091-.726.726 4.878 4.879.726-.726 3.09 3.09 2.407-2.406-1.294-4.888L20.62 8.26a3.45 3.45 0 0 0 .354-4.46M2.934 18.205a.54.54 0 0 1-.773-.004.545.545 0 0 1 0-.773l1.452-1.452a.545.545 0 0 1 .772 0 .545.545 0 0 1 0 .772zm0 3.636 3.271-3.273a.545.545 0 0 0 0-.772.545.545 0 0 0-.772 0L2.16 21.069a.545.545 0 0 0 .386.931c.14 0 .28-.051.386-.158m4.319-2.225L5.8 21.069a.545.545 0 0 0 .387.931c.14 0 .279-.051.386-.158l1.452-1.453a.545.545 0 0 0 0-.772.545.545 0 0 0-.772 0M18.907 7.09a2.004 2.004 0 0 1-2.001 2.002 2.004 2.004 0 0 1-2.002-2.002c0-1.103.899-2.001 2.002-2.001s2.001.898 2.001 2.001m-2.904 0c0-.498.405-.908.907-.908.498 0 .908.41.908.908s-.41.908-.908.908a.91.91 0 0 1-.907-.908"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.818 14.549c.092-.087.185-.175.28-.273C21.5 10.86 22.004 5.31 21.803 3.674a1.715 1.715 0 0 0-1.485-1.482c-1.93-.224-7.257.434-10.554 3.748l-.286.3a3.8 3.8 0 0 0-2.356-.558c-1.406.135-2.748 1.026-3.972 2.622-.32.376-.297.74-.252.922.165.703 1.003 1.059 2.165 1.552l.012.005q.427.181.851.376l-.286.577c-.397.882-.773 1.969-.173 2.52l4.322 4.345q.304.308.823.308c.437 0 .995-.162 1.698-.49l.554-.272c.146.32.292.647.426.972l.008.02c.49 1.163.842 2.004 1.541 2.168a1 1 0 0 0 .894-.232c1.613-1.253 2.498-2.603 2.63-4.014a3.86 3.86 0 0 0-.608-2.451zm2.354-11.127a.48.48 0 0 1 .411.406c.09.748-.005 2.527-.563 4.487l-4.302-4.327c1.927-.552 3.678-.653 4.454-.566M6.536 10.08c-.328-.154-.659-.3-.983-.437-.451-.19-1.096-.465-1.373-.658.994-1.266 2.014-1.964 3.03-2.067.491-.048.981.047 1.421.269-.768.91-1.47 1.876-2.095 2.893m10.596 6.888c-.1 1.014-.781 2.028-2.053 3.048-.193-.275-.465-.922-.655-1.376a31 31 0 0 0-.485-1.098 24 24 0 0 0 2.877-2.109c.26.468.37 1.003.316 1.535m-13.067-.165c-.714.717-1.91 2.244-1.91 4.417 0 .342.274.62.616.62 2.244 0 3.82-1.343 4.395-1.92.97-.974.97-2.14 0-3.117-.972-.978-2.129-.975-3.1 0m10.457-6.728c-.577 0-.785-.208-.785-.788 0-.582.205-.787.785-.787.577 0 .784.208.784.787s-.207.787-.784.787m-2.014-.79c0-1.27.753-2.026 2.014-2.026s2.014.76 2.014 2.026-.754 2.025-2.014 2.025-2.014-.757-2.014-2.025"
                />
            </svg>
        );
    }
};

export default IconRocketFilled;
