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

const IconControlsRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.897 2c.375 0 .68.321.68.715v11.174c.987.321 1.703 1.249 1.703 2.393 0 1.145-.716 2.072-1.702 2.393v2.606c0 .394-.306.715-.681.715s-.681-.321-.681-.715v-2.606c-.987-.32-1.702-1.248-1.702-2.393s.715-2.072 1.702-2.393V2.715c0-.394.306-.715.68-.715m.003 13.21c-.577 0-1.02.466-1.02 1.072s.443 1.072 1.02 1.072c.578 0 1.022-.465 1.022-1.072 0-.606-.444-1.072-1.022-1.072M17 2c.375 0 .68.321.68.715V6.75c.988.321 1.703 1.249 1.703 2.393 0 1.14-.715 2.068-1.698 2.39v9.752c0 .394-.306.715-.681.715s-.681-.321-.681-.715v-9.749c-.987-.321-1.702-1.248-1.702-2.393s.715-2.072 1.702-2.393V2.715c0-.394.302-.715.677-.715m.004 6.067c-.578 0-1.021.466-1.021 1.072s.443 1.072 1.02 1.072c.578 0 1.018-.462 1.022-1.072 0-.606-.444-1.072-1.021-1.072M6.999 2c.375 0 .68.321.68.715V6.75C8.668 7.071 9.383 8 9.383 9.143c0 1.14-.715 2.068-1.698 2.39v9.752c0 .394-.306.715-.681.715s-.681-.321-.681-.715v-9.749c-.987-.321-1.702-1.248-1.702-2.393s.715-2.072 1.702-2.393V2.715c0-.394.302-.715.677-.715m.004 6.067c-.578 0-1.021.466-1.021 1.072s.443 1.072 1.02 1.072c.578 0 1.018-.462 1.022-1.072 0-.606-.444-1.072-1.021-1.072"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.897 2c.375 0 .68.321.68.715v11.174c.987.321 1.703 1.249 1.703 2.393 0 1.145-.716 2.072-1.702 2.393v2.606c0 .394-.306.715-.681.715s-.681-.321-.681-.715v-2.606c-.987-.32-1.702-1.248-1.702-2.393s.715-2.072 1.702-2.393V2.715c0-.394.306-.715.68-.715m.003 13.21c-.577 0-1.02.466-1.02 1.072s.443 1.072 1.02 1.072c.578 0 1.022-.465 1.022-1.072 0-.606-.444-1.072-1.022-1.072M17 2c.375 0 .68.321.68.715V6.75c.988.321 1.703 1.249 1.703 2.393 0 1.14-.715 2.068-1.698 2.39v9.752c0 .394-.306.715-.681.715s-.681-.321-.681-.715v-9.749c-.987-.321-1.702-1.248-1.702-2.393s.715-2.072 1.702-2.393V2.715c0-.394.302-.715.677-.715m.004 6.067c-.578 0-1.021.466-1.021 1.072s.443 1.072 1.02 1.072c.578 0 1.018-.462 1.022-1.072 0-.606-.444-1.072-1.021-1.072M6.999 2c.375 0 .68.321.68.715V6.75C8.668 7.071 9.383 8 9.383 9.143c0 1.14-.715 2.068-1.698 2.39v9.752c0 .394-.306.715-.681.715s-.681-.321-.681-.715v-9.749c-.987-.321-1.702-1.248-1.702-2.393s.715-2.072 1.702-2.393V2.715c0-.394.302-.715.677-.715m.004 6.067c-.578 0-1.021.466-1.021 1.072s.443 1.072 1.02 1.072c.578 0 1.018-.462 1.022-1.072 0-.606-.444-1.072-1.021-1.072"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2.195 5.693c.003.33.275.594.602.59h1.048l.002.021q.002.022.006.042c.18.767.656 1.428 1.328 1.84.675.42 1.49.557 2.266.38a2.97 2.97 0 0 0 1.88-1.299c.193-.3.328-.63.398-.98h11.5a.597.597 0 0 0 .603-.591.6.6 0 0 0-.602-.591H9.722L9.72 5.08q.001-.018-.004-.037a2.91 2.91 0 0 0-1.328-1.84 3.02 3.02 0 0 0-2.266-.381 3 3 0 0 0-1.88 1.3 2.9 2.9 0 0 0-.394.983h-1.05a.595.595 0 0 0-.603.588m2.832.392a1.74 1.74 0 0 1 .233-1.333A1.823 1.823 0 0 1 7.747 4.2c.403.246.689.644.795 1.104.107.462.023.935-.232 1.333-.26.4-.658.678-1.129.781a1.8 1.8 0 0 1-1.358-.23 1.76 1.76 0 0 1-.796-1.103m12.151 7.69c-.994 0-1.804-.796-1.804-1.768 0-.975.81-1.768 1.804-1.768.995 0 1.804.793 1.804 1.768 0 .974-.81 1.767-1.804 1.767m4.628-1.768a.595.595 0 0 0-.603-.591v-.003H20.12c-.277-1.342-1.492-2.356-2.943-2.356s-2.664 1.014-2.944 2.356H2.771a.597.597 0 0 0-.602.59c.003.331.274.595.602.592h11.462c.28 1.342 1.493 2.356 2.944 2.356s2.667-1.014 2.944-2.356h1.081a.595.595 0 0 0 .603-.588m-12.33 8.061c-.995 0-1.805-.793-1.805-1.767 0-.975.81-1.768 1.804-1.768.995 0 1.804.793 1.804 1.768s-.81 1.767-1.804 1.767m12.327-1.765a.595.595 0 0 0-.602-.59l-8.782.002c-.28-1.341-1.493-2.355-2.944-2.355s-2.664 1.014-2.944 2.355H2.772a.595.595 0 0 0-.602.588c.003.331.274.594.602.592h3.76c.28 1.341 1.492 2.355 2.943 2.355s2.664-1.014 2.944-2.355h8.782a.597.597 0 0 0 .602-.591"
                />
            </svg>
        );
    }
};

export default IconControlsRegular;
