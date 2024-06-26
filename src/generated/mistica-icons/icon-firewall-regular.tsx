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

const IconFirewallRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.147 14.552v-4.36h-8.572c-.036 0-.073 0-.178.037-.283.094-.484.534-.552.683l-.02.042c.037-.325.037-.725.037-1.125 0-3.16-3-5.555-3.145-5.666a.7.7 0 0 0-.787-.075.78.78 0 0 0-.393.688s.073 1.27-.32 3.05c-.142.655-.677 1.343-1.248 2.036l-.114.156c-.902 1.23-1.918 2.614-1.852 4.567.105 3.379 2.752 4.574 2.857 4.61a.78.78 0 0 0 .787-.143.74.74 0 0 0 .141-.8s-.43-1.018-.073-2.65c.073-.325.142-.618.252-.873q.056.215.105.437c.132.61.39 1.027.625 1.404l.052.083q.03.051.063.101c.156.249.302.482.366.773.142.581.037 1.38-.036 1.636-.037.219 0 .474.141.656a.52.52 0 0 0 .43.181H22v-5.448zm-6.5 0c-.074-1.487-.5-2.58-.929-3.268h6.36v3.268zm-6.182-2.905h-.178a.74.74 0 0 0-.572.288c-.036.037-.928 1.306-1.394 3.342a5.6 5.6 0 0 0-.178 1.45c-.357-.506-.677-1.236-.714-2.217-.072-1.506.802-2.622 1.647-3.702l.031-.04.08-.103c.617-.8 1.214-1.573 1.42-2.51.142-.655.251-1.268.32-1.78.713.837 1.5 2.069 1.5 3.412 0 1.67-.284 2.687-.284 2.687a.76.76 0 0 0 .178.725c.179.182.467.256.713.182l.079-.03c.225-.08.861-.308 1.316-.77q.054-.057.107-.128.053-.07.108-.128c.283.582.535 1.45.535 2.58 0 2.036-1.573 2.943-2.606 3.342 0-.362 0-.762-.105-1.162-.106-.543-.357-.943-.609-1.306l-.021-.036c-.205-.346-.375-.633-.477-1.019A97 97 0 0 1 7 12.265a.74.74 0 0 0-.535-.618m4.074 7.26c1-.687 1.856-1.742 2.034-3.267h2.286v3.268zm10.396 0h-5.002V15.64h5.002z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.147 14.552v-4.36h-8.572c-.036 0-.073 0-.178.037-.283.094-.484.534-.552.683l-.02.042c.037-.325.037-.725.037-1.125 0-3.16-3-5.555-3.145-5.666a.7.7 0 0 0-.787-.075.78.78 0 0 0-.393.688s.073 1.27-.32 3.05c-.142.655-.677 1.343-1.248 2.036l-.114.156c-.902 1.23-1.918 2.614-1.852 4.567.105 3.379 2.752 4.574 2.857 4.61a.78.78 0 0 0 .787-.143.74.74 0 0 0 .141-.8s-.43-1.018-.073-2.65c.073-.325.142-.618.252-.873q.056.215.105.437c.132.61.39 1.027.625 1.404l.052.083q.03.051.063.101c.156.249.302.482.366.773.142.581.037 1.38-.036 1.636-.037.219 0 .474.141.656a.52.52 0 0 0 .43.181H22v-5.448zm-6.5 0c-.074-1.487-.5-2.58-.929-3.268h6.36v3.268zm-6.182-2.905h-.178a.74.74 0 0 0-.572.288c-.036.037-.928 1.306-1.394 3.342a5.6 5.6 0 0 0-.178 1.45c-.357-.506-.677-1.236-.714-2.217-.072-1.506.802-2.622 1.647-3.702l.031-.04.08-.103c.617-.8 1.214-1.573 1.42-2.51.142-.655.251-1.268.32-1.78.713.837 1.5 2.069 1.5 3.412 0 1.67-.284 2.687-.284 2.687a.76.76 0 0 0 .178.725c.179.182.467.256.713.182l.079-.03c.225-.08.861-.308 1.316-.77q.054-.057.107-.128.053-.07.108-.128c.283.582.535 1.45.535 2.58 0 2.036-1.573 2.943-2.606 3.342 0-.362 0-.762-.105-1.162-.106-.543-.357-.943-.609-1.306l-.021-.036c-.205-.346-.375-.633-.477-1.019A97 97 0 0 1 7 12.265a.74.74 0 0 0-.535-.618m4.074 7.26c1-.687 1.856-1.742 2.034-3.267h2.286v3.268zm10.396 0h-5.002V15.64h5.002z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M5.444 2.155h15.009c.725 0 1.386.756 1.386 1.585v16.253c0 .86-.636 1.585-1.386 1.585H9.422a.6.6 0 0 1-.221-.045 4 4 0 0 1-.678.18 5.2 5.2 0 0 1-1.154.128q-.04 0-.08-.004l-.086-.004-.02.001-.019.002a.3.3 0 0 1-.052-.006q-.026-.005-.051-.005c-1.507-.087-2.978-.793-3.908-1.978-1.882-2.4-.843-5.885.905-7.997V3.74c0-.829.66-1.585 1.386-1.585m15.18 5.566V3.74c0-.18-.138-.342-.194-.365h-3.184v4.336zM5.447 3.379a.5.5 0 0 0-.168.359v3.946l3.132.009V3.379zm.314 8.476c-1.818 1.49-3.367 5.048-1.653 7.233.16.204.348.38.552.543a2.28 2.28 0 0 1 .552-1.678c.134-.154.288-.3.454-.425.781-.611.484-1.451.448-1.547a.62.62 0 0 1 .11-.63.6.6 0 0 1 .604-.19 4.1 4.1 0 0 1 1.636.888c.905.798 1.633 2.476 1.244 3.874.154-.101.308-.216.459-.356a2.74 2.74 0 0 0 .9-1.919 2.75 2.75 0 0 0-.757-1.983 5 5 0 0 0-.731-.636c-1.779-1.297-2.101-3.028-1.955-4.3a7.6 7.6 0 0 0-1.863 1.126m11.482 8.499h3.21c.042-.014.17-.163.168-.359v-4.479l-3.378-.017zm-3.85-6.101 7.23.034V8.945l-7.243-.017q.002.016.007.03a.1.1 0 0 1 .007.037zm2.634 6.1v-4.862l-4.339-.02c.412.667.62 1.435.591 2.225-.036 1.008-.465 1.94-1.188 2.658zm-6.4-12.657 6.4.016V3.38h-6.4zM8.343 9.208a.61.61 0 0 1 .607.205.64.64 0 0 1 .093.641 3.316 3.316 0 0 0 1.246 3.98q.127.091.246.191l.068.056a.6.6 0 0 1 .196-.04h.003l1.375.006V8.998q.001-.02.007-.039l.007-.03L5.28 8.91v1.787c.938-.708 2.011-1.238 3.065-1.49m-1.11 11.398h.011a1.46 1.46 0 0 0 1.104-.586c.63-.862.025-2.417-.689-3.047a4 4 0 0 0-.269-.21 2.5 2.5 0 0 1-.989 1.74 2 2 0 0 0-.283.263 1.07 1.07 0 0 0 .048 1.445c.291.291.62.353.622.353q.227.053.445.042"
                />
            </svg>
        );
    }
};

export default IconFirewallRegular;
