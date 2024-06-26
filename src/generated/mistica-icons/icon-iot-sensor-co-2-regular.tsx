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

const IconIotSensorCo2Regular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 5c2.463 0 4.534 1.76 4.963 4.094 2.784 0 5.037 2.224 5.037 4.953S19.751 19 17 19H7c-2.751 0-5-2.224-5-4.953s2.249-4.953 5-4.953h.073A5.03 5.03 0 0 1 12 5m-8.57 9.042c0 1.94 1.605 3.52 3.57 3.52h10c1.96 0 3.565-1.58 3.565-3.52s-1.604-3.52-3.57-3.52a5.5 5.5 0 0 1-.178.828c-.068.285-.356.5-.676.5-.073 0-.142 0-.215-.036-.357-.11-.571-.5-.498-.97a2.7 2.7 0 0 0 .141-.932v-.18c-.068-1.87-1.64-3.34-3.569-3.34-1.746 0-3.213 1.255-3.533 2.872a5.3 5.3 0 0 1 1.284.611c.32.216.43.685.215 1.006-.215.322-.68.432-1 .216A3.7 3.7 0 0 0 7 10.523c-1.96 0-3.57 1.58-3.57 3.52m8.853-2.33a2.004 2.004 0 0 0-2.001 2.013 2 2 0 1 0 3.999 0 1.994 1.994 0 0 0-1.998-2.012m-.927 2.013c0-.5.43-.932.927-.932a.95.95 0 0 1 .928.932.92.92 0 0 1-.928.933.95.95 0 0 1-.927-.933m5.534 2.15h-.32c.073-.073.105-.105.179-.142.822-.79.713-1.47.57-1.796-.214-.501-.712-.86-1.247-.86-.75 0-1.357.611-1.357 1.365 0 .285.251.538.534.538a.55.55 0 0 0 .535-.538.28.28 0 0 1 .284-.285c.105 0 .251.074.283.18.037.142-.073.358-.32.61-.43.432-1.142 1.076-1.142 1.076-.179.142-.215.395-.142.61a.535.535 0 0 0 .498.36h1.677a.55.55 0 0 0 .535-.538c.005-.29-.279-.58-.567-.58m-7.852-2.834a1 1 0 0 0-.644-.253.95.95 0 0 0-.928.937c0 .501.43.933.928.933a.86.86 0 0 0 .644-.253.515.515 0 0 1 .75 0 .52.52 0 0 1 0 .754c-.357.358-.86.574-1.394.574a2 2 0 0 1-2.002-2.008c0-1.116.896-2.012 2.002-2.012.535 0 1 .216 1.394.574a.52.52 0 0 1 0 .754.515.515 0 0 1-.75 0"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 5c2.463 0 4.534 1.76 4.963 4.094 2.784 0 5.037 2.224 5.037 4.953S19.751 19 17 19H7c-2.751 0-5-2.224-5-4.953s2.249-4.953 5-4.953h.073A5.03 5.03 0 0 1 12 5m-8.57 9.042c0 1.94 1.605 3.52 3.57 3.52h10c1.96 0 3.565-1.58 3.565-3.52s-1.604-3.52-3.57-3.52a5.5 5.5 0 0 1-.178.828c-.068.285-.356.5-.676.5-.073 0-.142 0-.215-.036-.357-.11-.571-.5-.498-.97a2.7 2.7 0 0 0 .141-.932v-.18c-.068-1.87-1.64-3.34-3.569-3.34-1.746 0-3.213 1.255-3.533 2.872a5.3 5.3 0 0 1 1.284.611c.32.216.43.685.215 1.006-.215.322-.68.432-1 .216A3.7 3.7 0 0 0 7 10.523c-1.96 0-3.57 1.58-3.57 3.52m8.853-2.33a2.004 2.004 0 0 0-2.001 2.013 2 2 0 1 0 3.999 0 1.994 1.994 0 0 0-1.998-2.012m-.927 2.013c0-.5.43-.932.927-.932a.95.95 0 0 1 .928.932.92.92 0 0 1-.928.933.95.95 0 0 1-.927-.933m5.534 2.15h-.32c.073-.073.105-.105.179-.142.822-.79.713-1.47.57-1.796-.214-.501-.712-.86-1.247-.86-.75 0-1.357.611-1.357 1.365 0 .285.251.538.534.538a.55.55 0 0 0 .535-.538.28.28 0 0 1 .284-.285c.105 0 .251.074.283.18.037.142-.073.358-.32.61-.43.432-1.142 1.076-1.142 1.076-.179.142-.215.395-.142.61a.535.535 0 0 0 .498.36h1.677a.55.55 0 0 0 .535-.538c.005-.29-.279-.58-.567-.58m-7.852-2.834a1 1 0 0 0-.644-.253.95.95 0 0 0-.928.937c0 .501.43.933.928.933a.86.86 0 0 0 .644-.253.515.515 0 0 1 .75 0 .52.52 0 0 1 0 .754c-.357.358-.86.574-1.394.574a2 2 0 0 1-2.002-2.008c0-1.116.896-2.012 2.002-2.012.535 0 1 .216 1.394.574a.52.52 0 0 1 0 .754.515.515 0 0 1-.75 0"
                />
            </svg>
        );
    }
};

export default IconIotSensorCo2Regular;
