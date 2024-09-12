'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLifeguardFloatRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.665 2.155c.252 0 .518.006.745.011 1.927.045 9.431.807 9.431 9.857 0 9.073-7.512 9.78-9.392 9.813-.182.003-.386.005-.594.005q-.155 0-.308-.003c-1.975-.027-9.392-.742-9.392-9.87 0-9.115 7.347-9.793 9.322-9.81q.092-.004.188-.003m0 1.23-.177.003c-.35.002-.767.025-1.22.084l.562 2.725c.356-.05.658-.064.86-.067h.11c.15 0 .307.003.445.005.21.006.532.026.918.087l.56-2.708a12 12 0 0 0-1.344-.118 28 28 0 0 0-.714-.011m-2.61.308c-2.102.53-4.51 1.927-5.35 5.442l2.75.569c.605-1.919 1.952-2.815 3.173-3.227zM3.487 10.35a13 13 0 0 0-.103 1.616c0 .656.056 1.244.131 1.807l2.7-.557a9 9 0 0 1-.086-1.236c0-.383.025-.736.067-1.07zm.266 4.627c.886 3.384 3.253 4.765 5.334 5.303l.574-2.779-.102-.032a2 2 0 0 1-.139-.046c-1.129-.437-2.32-1.317-2.907-3.014zm10.58 2.519.575 2.773c2.083-.54 4.459-1.922 5.338-5.291l-2.756-.57c-.63 1.813-1.96 2.679-3.157 3.088m-2.479 3.115c.202 0 .398-.003.572-.006.361-.008.798-.04 1.269-.098l-.56-2.717a7 7 0 0 1-1.035.077l-.19.001c-.061 0-.126 0-.185-.003a7 7 0 0 1-.87-.072l-.564 2.72a11 11 0 0 0 1.563.098m.387-3.978c3.966-.07 4.395-3.255 4.395-4.622s-.432-4.554-4.423-4.65a19 19 0 0 0-.418-.005h-.098c-1.621.014-4.339.633-4.339 4.619 0 2.24.818 3.647 2.505 4.3.804.31 1.585.355 1.882.358l.168.003c.115 0 .23 0 .328-.003m5.277-6.924 2.748-.566c-.863-3.404-3.238-4.818-5.342-5.384l-.571 2.765c1.216.426 2.552 1.325 3.165 3.185m3.093 2.313c0-.602-.048-1.148-.115-1.67l-2.703.558a7.957 7.957 0 0 1-.017 2.303l2.708.557c.076-.543.127-1.115.127-1.748"
            />
        </svg>
    );
};

export default IconLifeguardFloatRegular;
