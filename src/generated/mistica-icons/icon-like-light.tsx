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

const IconLikeLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.241 12.571c.247.36.393.801.393 1.28 0 1.024-.672 1.887-1.581 2.143.096.256.155.53.155.82 0 1.024-.671 1.887-1.58 2.143.095.256.154.53.154.82C18.782 21 17.822 22 16.64 22h-6.07c-.854 0-1.713-.36-2.29-.958-.31-.322-.8-.521-1.279-.521H2.713a.73.73 0 0 1-.713-.74c0-.407.32-.739.713-.739H7c.855 0 1.714.36 2.29.957.31.323.8.522 1.28.522h6.069a.73.73 0 0 0 .713-.74c0-.407-.32-.739-.713-.739a.73.73 0 0 1-.713-.74c0-.407.32-.74.713-.74h1.426a.73.73 0 0 0 .713-.739c0-.407-.32-.74-.713-.74h-.357a.73.73 0 0 1-.713-.739c0-.407.32-.74.713-.74h1.787a.73.73 0 0 0 .713-.739c0-.407-.32-.74-.713-.74H18.07a.73.73 0 0 1-.713-.739c0-.407.32-.74.713-.74h1.787a.73.73 0 0 0 .713-.739c0-.407-.32-.74-.713-.74h-7.149a.73.73 0 0 1-.713-.739c0-.407.32-.74.713-.74h.435l.991-3.26V4.402c0-.512-.365-.924-.813-.924-.334 0-.718.175-.818.564l-.53 2.21a.75.75 0 0 1-.188.345l-3.866 4.01a2.08 2.08 0 0 1-1.513.65H2.713a.73.73 0 0 1-.713-.74c0-.407.32-.739.713-.739h3.693c.192 0 .37-.076.507-.218l3.725-3.863.49-2.025C11.387 2.668 12.27 2 13.33 2c1.234 0 2.24 1.08 2.24 2.408v1.11a.7.7 0 0 1-.033.222l-.89 2.925h5.21c1.179 0 2.143.996 2.143 2.223a2.26 2.26 0 0 1-.759 1.683"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22 10.912c0 .688-.386 1.277-.945 1.591.358.332.582.805.591 1.32 0 1.01-.82 1.829-1.82 1.829h-.01c.229.304.373.683.373 1.095 0 1.01-.82 1.829-1.82 1.829h-.01c.228.304.373.683.373 1.095 0 1.01-.82 1.829-1.82 1.829h-6.183c-.777 0-1.555-.314-2.076-.837-.382-.384-.978-.623-1.56-.623H4.91a.365.365 0 0 1 0-.73h2.183c.778 0 1.555.314 2.076.838.382.384.978.622 1.56.622h6.183c.6 0 1.089-.491 1.089-1.095 0-.603-.489-1.094-1.09-1.094a.364.364 0 0 1 0-.73h1.453c.6 0 1.09-.492 1.09-1.095 0-.604-.49-1.095-1.09-1.095h-.363a.364.364 0 0 1 0-.73h1.816c.6 0 1.089-.491 1.089-1.095 0-.603-.489-1.094-1.09-1.094h-1.452a.365.365 0 0 1 0-.73h1.82c.6 0 1.09-.492 1.09-1.095 0-.604-.49-1.095-1.09-1.095h-7.272a.365.365 0 0 1 0-.73h.731a.5.5 0 0 1 .014-.112l1.076-3.42V4.52c0-.702-.536-1.277-1.192-1.277-.577 0-1.057.327-1.187.823l-.545 2.185a.4.4 0 0 1-.098.169l-3.938 3.958c-.345.341-.8.533-1.285.533H2.726a.364.364 0 0 1 0-.73h3.762c.293 0 .568-.117.773-.322l3.868-3.888.522-2.096c.219-.829.978-1.376 1.89-1.376 1.057 0 1.918.903 1.918 2.012v1.095c0 .037-.01.074-.019.112l-1.056 3.364h5.796c1.005 0 1.82.823 1.82 1.83M2.726 20.41a.729.729 0 0 0 0-1.46.729.729 0 0 0 0 1.46"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.841 13.88c0-.642-.201-1.104-.434-1.42.233-.325.434-.818.437-1.538 0-1.518-1.182-2.123-2.218-2.18h-3.493l-2.33-.07.001-1.407c.002-.78.004-1.698.004-2.506l.005-.134.003-.095c0-1.504-.851-2.37-2.333-2.37-.773 0-1.398.232-1.81.675-.392.42-.574 1.017-.524 1.723l.02.232q.02.156.025.311c.025 1.143.04 2.588-.073 3.756-.14 1.46-1.644 2.309-2.165 2.56a1.24 1.24 0 0 0-.863-.35H3.4c-.687 0-1.244.56-1.244 1.247v7.807c0 .686.557 1.246 1.244 1.246h2.694c.328 0 .642-.129.874-.361q.119.05.25.053l2.865.037c.192 0 .441.07.788.167l.022.006.213.063c.773.226 1.734.509 4.014.509 3.764 0 4.479-.395 5.002-1.827.087-.512.082-.927-.022-1.291.779-.431 1.204-1.084 1.204-1.865 0-.55-.123-.953-.274-1.241.527-.471.812-1.079.812-1.737m-1.277-1.698a.41.41 0 0 0 .022.58q.442.407.437 1.115c0 .647-.42 1.073-.773 1.314l-.01.007-.026.02a.405.405 0 0 0-.042.575c.207.238.314.608.314 1.065 0 .7-.58 1.086-1.068 1.29l-.033.018a.41.41 0 0 0-.168.554c.154.286.184.645.117 1.09-.3.812-.45 1.218-4.218 1.218-2.163 0-3.025-.252-3.787-.476l-.224-.064c-.398-.115-.718-.205-1.02-.205l-2.754-.036v-.076l.002-.006.004-.041v-7.81l-.003-.024-.002-.024v-.123c.672-.328 2.42-1.347 2.599-3.207.115-1.23.098-2.737.073-3.91L10 5l-.003-.025a4 4 0 0 0-.022-.269l-.017-.204q-.053-.729.305-1.112c.252-.272.673-.415 1.213-.415 1.037 0 1.518.496 1.518 1.63l-.005.124v.022c0 1.863-.009 4.317-.009 4.317-.002.22.174.4.395.409l2.74.08h3.482c.336.02 1.425.172 1.425 1.365 0 .549-.15.977-.437 1.238zM5.491 13.748c0-.454-.316-.767-.767-.767-.454 0-.768.316-.768.767s.317.768.768.768c.453 0 .767-.314.767-.768m.602 6.807-2.694.003a.43.43 0 0 1-.429-.432v-7.81a.43.43 0 0 1 .429-.43h2.694c.227 0 .415.179.426.406v7.854a.43.43 0 0 1-.426.409"
                />
            </svg>
        );
    }
};

export default IconLikeLight;
