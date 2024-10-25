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

const IconShareLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.46 9c.062 0 .124 0 .177-.002.572-.01 2.863-.225 2.863-2.99 0-2.759-2.286-2.99-2.875-3.005L17.4 3h-.06c-.603.005-2.841.212-2.841 2.99q0 .425.066.771l-5.643 3.292c-.718-.93-1.899-1.04-2.298-1.05L6.4 9h-.06c-.603.005-2.841.212-2.841 2.99 0 2.783 2.26 3 2.863 3.01h.097c.062 0 .124 0 .177-.002.39-.007 1.576-.109 2.294-1.046l5.631 3.285a4.3 4.3 0 0 0-.062.754c0 2.782 2.26 3 2.863 3.008l.097.001c.062 0 .124 0 .177-.002.572-.01 2.863-.225 2.863-2.99 0-2.759-2.286-2.99-2.875-3.005L17.4 15h-.06c-.459.004-1.866.125-2.511 1.409l-5.505-3.212a3.8 3.8 0 0 0 .175-1.19c0-.47-.067-.867-.18-1.202l5.518-3.218c.654 1.279 2.067 1.406 2.525 1.412zm.144-5.148c.236.006.773.06 1.228.344.39.245.818.717.818 1.812 0 1.098-.428 1.565-.816 1.806-.45.28-.983.33-1.212.334l-.237.001h-.01c-.241-.003-.771-.053-1.217-.333-.38-.24-.808-.711-.808-1.825 0-1.116.424-1.582.797-1.816.437-.275.956-.323 1.198-.325h.056c.071 0 .144 0 .203.002m0 12c.236.006.773.06 1.228.344.39.245.818.717.818 1.812 0 1.098-.428 1.565-.816 1.806-.45.28-.983.33-1.212.334l-.162.002h-.085c-.241-.004-.771-.054-1.217-.334-.38-.24-.808-.711-.808-1.825 0-1.116.424-1.582.797-1.817.437-.274.956-.322 1.198-.324h.056c.071 0 .144 0 .203.002m-11-6c.235.006.773.06 1.228.344.39.245.818.717.818 1.812 0 1.098-.428 1.565-.816 1.806-.45.28-.983.33-1.212.334l-.237.001h-.01c-.241-.003-.771-.053-1.217-.333-.38-.24-.808-.712-.808-1.825 0-1.116.424-1.582.797-1.816.437-.275.956-.323 1.198-.325h.056c.071 0 .143 0 .202.002"
                />
            </svg>
        );
    } else if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.235 16.21A3.52 3.52 0 0 1 18 14.852c1.944 0 3.528 1.608 3.528 3.576S19.944 22 18 22s-3.527-1.604-3.527-3.571q.002-.491.122-.94l-5.822-3.275a3.52 3.52 0 0 1-2.766 1.355c-1.943 0-3.527-1.603-3.527-3.571s1.584-3.571 3.527-3.571c1.008 0 1.916.432 2.56 1.12l6.028-3.052a3.6 3.6 0 0 1-.122-.924C14.473 3.604 16.057 2 18 2s3.528 1.596 3.528 3.563S19.944 9.135 18 9.135a3.5 3.5 0 0 1-2.773-1.368l-5.91 2.991c.143.388.218.804.218 1.236 0 .328-.044.64-.123.94zM20.117 5.57c0-1.183-.952-2.143-2.117-2.143-1.17 0-2.117.96-2.117 2.143 0 1.184.948 2.144 2.117 2.144s2.117-.96 2.117-2.144m-14.11 8.57c1.17 0 2.118-.963 2.118-2.143 0-1.184-.948-2.144-2.118-2.144s-2.117.964-2.117 2.144c0 1.184.952 2.144 2.117 2.144m9.876 4.284c0 1.183.952 2.143 2.117 2.143s2.117-.96 2.117-2.143c0-1.184-.948-2.144-2.117-2.144s-2.117.96-2.117 2.144"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m11.688 14.676-2.39-1.392c.154-.4.237-.832.237-1.284 0-.56-.13-1.092-.356-1.564l5.843-2.956A3.51 3.51 0 0 0 18 9.144c1.944 0 3.528-1.604 3.528-3.572S19.944 2 18 2s-3.527 1.604-3.527 3.572c0 .448.083.876.229 1.268L8.804 9.828a3.51 3.51 0 0 0-2.797-1.4C4.064 8.428 2.48 10.032 2.48 12s1.584 3.572 3.527 3.572c1.245 0 2.343-.66 2.971-1.648l2.358 1.372a.346.346 0 0 0 .478-.132.353.353 0 0 0-.126-.488m9.132-9.104c0 1.576-1.264 2.856-2.82 2.856s-2.82-1.28-2.82-2.856S16.444 2.716 18 2.716s2.82 1.28 2.82 2.856M6.007 14.856c-1.556 0-2.82-1.28-2.82-2.856s1.264-2.856 2.82-2.856c1.557 0 2.82 1.28 2.82 2.856s-1.263 2.856-2.82 2.856M14.473 18.428c0-1.968 1.584-3.572 3.527-3.572s3.528 1.604 3.528 3.572S19.944 22 18 22s-3.527-1.604-3.527-3.572m.707 0c0 1.576 1.264 2.856 2.82 2.856s2.82-1.28 2.82-2.856-1.264-2.856-2.82-2.856-2.82 1.28-2.82 2.856M13.414 16.644c.39 0 .707-.32.707-.716a.71.71 0 0 0-.707-.716c-.39 0-.707.32-.707.716s.316.716.707.716"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.297 14.238c.378-.359.904-.54 1.568-.54q.998 0 1.572.543c.4.378.602.93.602 1.638 0 .678-.188 1.216-.557 1.594-.381.39-.922.586-1.614.586q-1.04 0-1.613-.586c-.37-.378-.558-.916-.558-1.594 0-.24.026-.467.073-.672l-3.193-1.597a2 2 0 0 1-.233.295c-.38.389-.921.585-1.613.585s-1.233-.196-1.614-.585c-.37-.379-.557-.916-.557-1.594 0-.706.202-1.258.602-1.639.378-.358.905-.54 1.569-.54s1.19.182 1.569.54q.16.15.28.345l3.19-1.597a3 3 0 0 1-.073-.68c0-.707.202-1.258.603-1.64.378-.358.904-.54 1.568-.54s1.19.182 1.569.54c.4.379.602.93.602 1.64 0 .677-.188 1.215-.557 1.593-.381.39-.922.586-1.614.586q-1.04-.001-1.613-.586a1.8 1.8 0 0 1-.286-.386l-3.168 1.582q.097.35.098.779 0 .432-.1.784l3.164 1.583q.134-.246.334-.437m3.179-5.499c0-1.073-.54-1.619-1.61-1.619-1.068 0-1.611.547-1.611 1.62 0 .526.134.93.397 1.201q.41.416 1.213.417.804 0 1.213-.417c.264-.269.398-.675.398-1.202m-8.748 5.19c.535 0 .941-.14 1.21-.411a1.2 1.2 0 0 0 .26-.403l.003-.006q.139-.335.138-.795 0-.443-.123-.765l-.017-.028c-.012-.023-.017-.045-.023-.067q-.35-.761-1.448-.762c-1.07 0-1.61.543-1.61 1.619 0 .526.134.93.397 1.201q.41.418 1.213.418m7.137 3.57q.804 0 1.213-.418.397-.41.398-1.204c0-1.073-.54-1.62-1.61-1.62-.785 0-1.286.295-1.496.875l-.01.03-.005.009q-.1.306-.1.708.001.792.397 1.202.41.416 1.213.417"
                />
                <path
                    fill={fillColor}
                    d="M4.779 19.406C6.432 20.997 8.86 21.804 12 21.804s5.569-.807 7.221-2.398c1.715-1.652 2.583-4.142 2.583-7.406s-.868-5.753-2.583-7.406c-1.652-1.591-4.08-2.398-7.22-2.398s-5.572.807-7.222 2.398C3.065 6.247 2.196 8.74 2.196 12c0 3.264.869 5.754 2.583 7.406m.39-14.409C6.711 3.51 9.008 2.757 12 2.757c2.989 0 5.289.756 6.832 2.24 1.6 1.541 2.412 3.9 2.412 7.003s-.812 5.462-2.412 7.003c-1.543 1.487-3.843 2.24-6.832 2.24s-5.288-.753-6.832-2.24c-1.6-1.54-2.412-3.9-2.412-7.003s.813-5.462 2.412-7.003"
                />
            </svg>
        );
    }
};

export default IconShareLight;
