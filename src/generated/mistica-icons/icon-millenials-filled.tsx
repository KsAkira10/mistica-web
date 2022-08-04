/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconMillenialsFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.45 3.829l-8.735 2.435a3.359 3.359 0 01-.04-.532C12.675 3.677 14.299 2 16.29 2c.986 0 1.88.412 2.535 1.071l2.304-.634a.692.692 0 01.846.506.725.725 0 01-.483.874h-.004l-.04.012zm-9.502 4.404c0 1.38-.726 2.579-1.804 3.225 2.335.552 3.896 2.18 3.896 4.264V22H2.619v-6.278c0-2.085 1.56-3.712 3.896-4.268a3.661 3.661 0 01-.46-.334c.085-.523.36-1.14.48-1.367.627-1.211 1.673-2.06 3.082-2.509l2.02-.523c.195.465.311.976.311 1.512z"
                    fill={fillColor}
                />
                <path
                    d="M3.649 9.024c.135.04.3.07.49.07.196 0 .416-.033.655-.116.084.416.236.808.44 1.166.15-.434.32-.776.369-.878l.01-.02C6.359 7.8 7.645 6.75 9.329 6.214l1.705-.44A3.523 3.523 0 008.327 4.5c-.43 0-.842.09-1.225.23-.024-1.145-.938-2.072-2.056-2.072-1.134 0-2.056.952-2.056 2.122v2.187H2l.475 1.026c.032.082.387.795 1.174 1.03zm16.259-3.292c0 1.38-.726 2.579-1.804 3.226C20.439 9.51 22 11.137 22 13.22v6.637h-6.918v-4.136c0-1.99-1.126-3.7-2.982-4.676a4.75 4.75 0 00.686-1.42 6.285 6.285 0 011.697-.668 3.722 3.722 0 01-1.469-1.669l6.878-1.92c.008.12.016.244.016.363z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M18.751 5.83a.636.636 0 00.053-.911c-2.688-2.94-6.667-2.768-6.866-2.76h-.005c-4.325.046-6.638 2.49-6.736 2.595a.633.633 0 00.044.91.673.673 0 00.933-.045l.002-.002c.068-.07 2.062-2.127 5.802-2.169.037-.005 3.566-.162 5.843 2.328a.668.668 0 00.93.053zm-6.756 4.912c.896 0 1.597.233 2.084.692.504.474.762 1.18.762 2.09 0 .913-.255 1.616-.762 2.09-.485.453-1.185.686-2.084.686-.896 0-1.597-.233-2.081-.687-.502-.473-.76-1.176-.76-2.09 0-.91.255-1.615.76-2.089.484-.46 1.182-.692 2.08-.692zm1.731 6.776c1.053 0 1.919.311 2.501.905.533.543.818 1.297.818 2.182v.924a.32.32 0 01-.322.317H7.278a.32.32 0 01-.322-.317v-.924c0-.882.28-1.639.815-2.182.58-.594 1.442-.905 2.498-.905h3.457zM11.939 4.994c.112-.01 3.32-.114 5.367 2.124a.63.63 0 01-.053.907.667.667 0 01-.93-.047C14.7 6.205 12 6.28 11.973 6.283c-2.684.03-4.289 1.711-4.303 1.731a.677.677 0 01-.933.045.639.639 0 01-.05-.91c.084-.09 1.991-2.118 5.252-2.155zm2.61 5.174a.673.673 0 00.933.053.636.636 0 00.054-.91c-1.334-1.459-3.395-1.426-3.568-1.423h-.01c-2.168.022-3.442 1.381-3.495 1.44a.635.635 0 00.045.907.664.664 0 00.442.166c.18 0 .359-.07.487-.208.04-.042.964-1 2.555-1.016h.003c.08-.002 1.628-.024 2.555.991z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconMillenialsFilled;
