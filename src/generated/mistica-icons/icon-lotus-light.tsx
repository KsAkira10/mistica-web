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

const IconLotusLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.47 8.47c-.235-.482-.494-.91-.738-1.267-.753-1.11-1.494-1.793-1.527-1.822a.27.27 0 0 0-.365 0c-.033.029-.774.711-1.528 1.822-.244.36-.505.791-.74 1.276-.443-.305-.881-.551-1.27-.744-1.12-.558-2.05-.797-2.21-.838l-.022-.006a.27.27 0 0 0-.319.177l-.002.008a11 11 0 0 0-.4 4.2 10 10 0 0 0-.45-.01c-1.468 0-2.603.313-2.7.34h-.004a.27.27 0 0 0-.19.31v.005c.02.088.214.987.728 2.087.493 1.053 1.383 2.492 2.828 3.36 1.039.625 2.322.942 3.809.942a11 11 0 0 0 2.63-.322c.283.074 1.323.322 2.628.322 1.487 0 2.77-.317 3.81-.942 1.444-.868 2.339-2.307 2.827-3.36.53-1.135.72-2.052.729-2.093a.263.263 0 0 0-.205-.312c-.147-.04-1.259-.338-2.69-.338q-.212 0-.42.01c.075-.688.065-1.335.024-1.875-.1-1.284-.392-2.22-.424-2.324l-.003-.008a.27.27 0 0 0-.319-.176c-.04.008-1.026.242-2.231.843-.385.19-.818.434-1.256.735m-2.686 8.525c-.27-.297-.625-.724-.984-1.253-.672-.987-1.431-2.478-1.431-4.107 0-1.623.759-3.115 1.431-4.107a11.5 11.5 0 0 1 1.222-1.506q.1.102.239.254c.269.297.625.724.984 1.253.672.987 1.431 2.478 1.431 4.107 0 1.624-.76 3.115-1.432 4.107a11.5 11.5 0 0 1-1.222 1.506 10 10 0 0 1-.238-.254m3.48-5.36c0-.945-.23-1.838-.55-2.622.438-.31.88-.56 1.276-.758a11.4 11.4 0 0 1 1.81-.717c.097.372.25 1.06.316 1.906.092 1.196.015 2.864-.79 4.279-.808 1.416-2.207 2.346-3.28 2.879-.392.195-.76.35-1.072.468.23-.275.494-.612.758-1.002.7-1.032 1.532-2.64 1.532-4.433M9.33 9.023c-.32.783-.548 1.673-.548 2.614 0 1.797.832 3.404 1.531 4.432.268.394.533.734.766 1.01-.32-.12-.694-.276-1.096-.476-1.073-.533-2.473-1.463-3.28-2.879-.806-1.42-.882-3.088-.79-4.278.065-.846.218-1.532.316-1.905a11.3 11.3 0 0 1 1.81.715c.4.2.847.453 1.29.767m4.98 8.1c1.119-.555 2.638-1.55 3.528-3.112a6.8 6.8 0 0 0 .757-2.148q.248-.014.506-.014c.988 0 1.815.15 2.245.247q-.033.122-.083.288c-.109.356-.28.842-.53 1.38l-.001.002c-.468 1.007-1.3 2.325-2.599 3.105-.928.558-2.1.857-3.504.857a10.5 10.5 0 0 1-1.464-.105c.335-.126.727-.29 1.146-.5m-2.298.852h.003-.011l-.01-.001h.018m-1.153-.355c-.415.059-.926.108-1.488.108-1.403 0-2.576-.299-3.504-.857-1.299-.78-2.126-2.097-2.6-3.107a10.5 10.5 0 0 1-.612-1.669 10.6 10.6 0 0 1 2.244-.246q.274 0 .536.015c.13.716.363 1.455.756 2.147.89 1.562 2.41 2.557 3.528 3.113.416.207.806.37 1.14.495M5.932 7.459v-.001h.003zm15.716 4.71-.005-.002z"
            />
        </svg>
    );
};

export default IconLotusLight;
