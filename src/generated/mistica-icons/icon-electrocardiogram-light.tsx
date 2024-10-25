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

const IconElectrocardiogramLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.007 2c-1.938 0-3.196.786-4.999 3.145C10.24 2.823 8.842 2 6.87 2 4.762 2 2.48 3.5 2.48 6.75c0 4.8 5.951 11.557 8.914 14.921l.1.114a.68.68 0 0 0 .51.215.68.68 0 0 0 .51-.215c.748-.86 2.821-3.287 2.821-3.323l2.517-3.287c2.482-3.465 3.676-6.213 3.676-8.43.008-3.1-2.274-4.745-4.52-4.745m-.235 12.361-2.482 3.25-.338.399c-.695.82-1.354 1.598-1.94 2.244-2.79-3.177-8.165-9.463-8.165-13.5 0-2.285 1.533-3.323 3.027-3.323s2.621.498 4.625 3.287a.688.688 0 0 0 1.088 0c1.973-2.82 2.962-3.287 4.425-3.287 1.533 0 3.166 1.038 3.166 3.323-.005 1.856-1.163 4.425-3.406 7.607m-4.084-2.715h2.381c.375 0 .68.32.68.713s-.305.713-.68.713h-2.382v2.5c0 .394-.304.714-.679.714-.374 0-.68-.32-.68-.713v-2.501H8.948c-.375 0-.68-.32-.68-.713s.305-.713.68-.713h2.382v-2.5c0-.394.305-.714.68-.714.374 0 .678.32.678.713z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.46 2c-2.107 0-3.391.824-5.462 3.471C9.995 2.898 8.533 2 6.357 2 4.249 2 2 3.429 2 6.543c0 4.869 6.574 11.949 9.75 15.352a.38.38 0 0 0 .252.105.4.4 0 0 0 .252-.105.385.385 0 0 0 .036-.5c-3.108-3.292-9.572-10.23-9.572-14.847 0-1.823 1.143-3.829 3.643-3.829 1.714 0 3.109.573 5.358 3.577a.33.33 0 0 0 .283.142.32.32 0 0 0 .284-.142c2.285-3.078 3.428-3.577 5.18-3.577 1.892 0 3.82 1.324 3.82 3.865 0 2.038-1.284 4.759-3.784 8.12l-2.643 3.293c-.105.142-.105.394.037.5s.393.105.498-.037l2.68-3.293C20.714 11.627 22 8.797 22 6.58 22 3.575 19.714 2 17.46 2m-5.462 14.317c.215 0 .356-.143.356-.358v-3.577h3.57c.215 0 .357-.142.357-.357s-.142-.357-.356-.357h-3.57V8.091c0-.215-.142-.357-.357-.357s-.357.142-.357.357v3.577h-3.57c-.215 0-.357.142-.357.357s.142.357.357.357h3.57v3.577c0 .21.142.358.357.358m1.074 3.572c0-.394.32-.715.713-.715a.715.715 0 0 1 0 1.43.715.715 0 0 1-.713-.715"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.625 12.744h1.798a.41.41 0 0 1 .417.412c0 .23-.187.415-.417.415h-2.21c-.303.557-.63 1.117-.995 1.68-1.07 1.645-1.924 2.709-3.375 4.196l-.034.037c-.142.145-.64.644-1.064.947-.364.26-.773.445-1.185.529a2 2 0 0 1-.372.053h-.009l-.008.003q-.05.004-.112.003h-.034l-.109-.003-.008-.003h-.009a2 2 0 0 1-.372-.053 3.2 3.2 0 0 1-1.185-.53c-.423-.302-.922-.8-1.065-.946-1.47-1.504-2.333-2.574-3.409-4.233a24 24 0 0 1-1.036-1.764H2.569a.416.416 0 0 1-.418-.415.42.42 0 0 1 .418-.414h1.848C3.84 11.46 3.395 10.277 3.115 9.12c-.518-2.163-.09-3.961 1.204-5.062.754-.641 1.779-1.022 2.885-1.078q.148-.009.295-.009c1.075 0 2.176.297 3.204.86.403.221.807.451 1.202.692a.3.3 0 0 0 .277 0 46 46 0 0 1 1.204-.689c1.026-.566 2.127-.86 3.202-.86.098 0 .2.003.297.008 1.11.056 2.135.44 2.885 1.079 1.294 1.1 1.72 2.899 1.202 5.062-.286 1.182-.748 2.395-1.347 3.621M3.927 8.93c.294 1.216.782 2.465 1.423 3.734h.936L8.22 6.461c.056-.182.238-.322.418-.29.19.008.35.142.389.33l1.76 8.725.671-2.185a.42.42 0 0 1 .4-.294h1.2l1.1-3.717a.42.42 0 0 1 .39-.297.4.4 0 0 1 .403.277l1.322 3.737h2.424c.663-1.294 1.165-2.574 1.465-3.815.442-1.849.109-3.356-.936-4.244-.61-.52-1.46-.834-2.384-.882q-.126-.005-.252-.006c-.933 0-1.9.264-2.798.757q-.596.326-1.182.675a1.132 1.132 0 0 1-1.115.006c-.437-.258-.82-.477-1.196-.684-.9-.493-1.869-.756-2.799-.756q-.126 0-.252.005c-.927.048-1.773.362-2.386.883-1.048.89-1.378 2.397-.936 4.243m13.591 5.874c.266-.412.504-.823.742-1.235h-2.28a.42.42 0 0 1-.392-.277l-.991-2.802-.824 2.782a.42.42 0 0 1-.4.297H12.17l-1.065 3.462a.42.42 0 0 1-.4.294.42.42 0 0 1-.41-.333L8.536 8.25 6.992 13.19a.415.415 0 0 1-.398.291h-.81q.375.67.79 1.317c1.045 1.607 1.88 2.644 3.308 4.106.093.098.575.583.953.852.26.19.557.325.87.395q.124.029.247.036h.014l.065.003.092-.003h.023c.078-.003.156-.014.226-.03.317-.068.62-.203.891-.396.289-.207.681-.577.95-.851l.025-.031.008-.006c1.407-1.442 2.233-2.47 3.272-4.07"
                />
            </svg>
        );
    }
};

export default IconElectrocardiogramLight;
