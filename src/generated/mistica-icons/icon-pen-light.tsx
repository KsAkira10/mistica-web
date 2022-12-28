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

const IconPenLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.96 3.001a3.157 3.157 0 014.614 0c1.271 1.336 1.271 3.509 0 4.844l-9.116 9.572a.348.348 0 01-.245.104.332.332 0 01-.244-.104.373.373 0 010-.51l8.188-8.589-3.643-3.825L4.82 15.721l3.887 4.078a.385.385 0 01.088.349.36.36 0 01-.244.256l-5.64 1.584a.335.335 0 01-.332-.092.385.385 0 01-.089-.35l1.512-5.922v-.004a.289.289 0 01.008-.02.283.283 0 00.008-.02v-.004a.145.145 0 01.015-.036s.004-.004.004-.008a.075.075 0 00.01-.014.042.042 0 01.009-.014l.007-.008c.008-.012.016-.02.027-.032L15.96 3.001zM4.511 16.418L3.308 21.13l4.488-1.263-3.285-3.449zM20.09 7.336c1.004-1.055 1.004-2.77 0-3.825a2.493 2.493 0 00-3.643 0l-.444.465L19.647 7.8l.443-.465z"
                />
                <path
                    fill={fillColor}
                    d="M9.839 19.33c.38 0 .687-.324.687-.722 0-.399-.308-.722-.687-.722-.38 0-.688.323-.688.722 0 .398.308.721.688.721z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.543 3.522l.083.084c.448.465 2.552 2.922-.117 5.566L9.024 20.587l-.007.003c-.003 0-.005 0-.007.002a.104.104 0 00-.006.01.053.053 0 01-.008.013.416.416 0 01-.294.12.075.075 0 01-.021-.004c-.007-.002-.014-.004-.021-.004L2.64 21.83a.41.41 0 01-.485-.465l.959-6.224c0-.005.003-.008.005-.012a.039.039 0 00.006-.01.368.368 0 01.104-.205L14.783 3.486c2.093-2.07 4.26-1.426 5.591-.132.058.056.114.112.169.168zM19.09 9.416l.83-.824c2.016-1.997.745-3.756.106-4.42l-.11-.11a4.846 4.846 0 00-.123-.125c-.652-.633-2.386-1.885-4.423.126l-.846.837 4.566 4.516zM4.335 20.685l-1.073-1.062-.199 1.294 1.272-.232zm1.79-3.49l9.83-9.723-2.015-1.995L4.111 15.2l2.014 1.995zm-2.709 1.42l1.905 1.888 2.515-.462-4.025-3.98-.395 2.554zm5.286 1.129l9.807-9.746-1.97-1.946-9.829 9.722 1.992 1.97z"
                />
            </svg>
        );
    }
};

export default IconPenLight;
