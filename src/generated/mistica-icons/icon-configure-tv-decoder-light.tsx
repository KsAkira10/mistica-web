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

const IconConfigureTvDecoderLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.37 16.46c0 .325-.267.59-.595.59H16.12a.59.59 0 0 1-.594-.59c0-.326.266-.591.593-.591h2.656c.328 0 .594.265.594.59M4.947 16.793a.455.455 0 0 0 .456-.454.455.455 0 0 0-.456-.454.455.455 0 0 0-.457.454c0 .25.205.454.457.454M7.093 16.339a.455.455 0 0 1-.913 0c0-.25.205-.454.457-.454s.456.203.456.454M8.277 16.793a.455.455 0 0 0 .456-.454.455.455 0 0 0-.456-.454.455.455 0 0 0-.457.454c0 .25.205.454.457.454M14.48 8.211c-.618 0-1.109.17-1.462.507-.367.35-.552.855-.552 1.495s.185 1.142.552 1.496c.353.337.844.506 1.463.506s1.11-.17 1.46-.506c.366-.351.551-.855.551-1.496 0-.64-.185-1.142-.552-1.495-.353-.334-.843-.507-1.46-.507m0 .557c.922 0 1.455.457 1.455 1.445 0 .989-.533 1.446-1.454 1.446-.922 0-1.454-.457-1.454-1.446s.532-1.445 1.454-1.445"
            />
            <path
                fill={fillColor}
                d="M13.962 5.585H15c.308 0 .56.25.557.557v.738q.295.064.572.178l.485-.482a.564.564 0 0 1 .792 0l.737.73a.556.556 0 0 1 0 .788l-.485.482q.113.276.18.568h.742c.308 0 .56.25.56.557v1.03a.56.56 0 0 1-.56.557h-.742a3.4 3.4 0 0 1-.18.568l.485.482c.1.1.155.228.163.36h1.666c1.031 0 1.869.832 1.869 1.857v2.007a1.864 1.864 0 0 1-1.869 1.858H4.03a1.864 1.864 0 0 1-1.869-1.858v-2.007c0-1.025.838-1.858 1.869-1.858h6.63a.55.55 0 0 1 .163-.362l.485-.482a3.6 3.6 0 0 1-.18-.568h-.742a.56.56 0 0 1-.56-.557v-1.03a.56.56 0 0 1 .56-.557h.742a3.3 3.3 0 0 1 .18-.568l-.485-.482a.556.556 0 0 1 0-.788l.731-.727a.564.564 0 0 1 .793 0l.485.482q.276-.112.571-.178v-.738a.56.56 0 0 1 .56-.557m3.446 8.268a.564.564 0 0 1-.793 0l-.484-.482a3.7 3.7 0 0 1-.572.178v.738a.56.56 0 0 1-.56.557h-1.037a.56.56 0 0 1-.56-.557v-.738a3.4 3.4 0 0 1-.571-.178l-.485.48a.564.564 0 0 1-.793 0l-.6-.597H4.03c-.723 0-1.309.582-1.309 1.3v2.008c0 .719.586 1.3 1.309 1.3H19.97c.723 0 1.309-.581 1.309-1.3v-2.007c0-.719-.586-1.3-1.309-1.3h-1.958zm-2.41-7.711h-1.036v1.209q-.726.075-1.243.384l-.77-.766-.732.727.768.766c-.202.334-.334.746-.387 1.236h-1.213v1.03h1.216c.05.49.182.903.386 1.237l-.77.766.731.726.77-.765c.345.206.763.331 1.244.384v1.208H15v-1.208q.728-.075 1.244-.384l.77.765.734-.726-.77-.766c.201-.334.333-.746.386-1.237h1.216v-1.03h-1.216c-.05-.49-.182-.902-.386-1.236l.77-.766-.734-.727-.77.766q-.52-.308-1.244-.384z"
            />
        </svg>
    );
};

export default IconConfigureTvDecoderLight;
