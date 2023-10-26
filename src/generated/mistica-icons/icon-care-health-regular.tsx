/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCareHealthRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.726 7.65c0 3.541 1.944 5.491 5.474 5.491 3.53 0 5.476-1.95 5.476-5.493 0-3.54-1.944-5.493-5.476-5.493s-5.476 1.95-5.474 5.496ZM15.2 3.363c2.874 0 4.272 1.404 4.274 4.286 0 2.882-1.397 4.283-4.274 4.283-2.874 0-4.27-1.4-4.27-4.283 0-2.882 1.396-4.286 4.27-4.286Zm6.395 12.426c.288.55.568 1.577-.684 2.367-1.373.868-5.316 2.853-6.195 3.296l-.006.003-.163.082c-.448.202-.972.308-1.557.308-.706 0-1.308-.146-1.79-.428l-4.045-1.95v.386c0 .79-.633 1.435-1.429 1.435H3.584a1.434 1.434 0 0 1-1.429-1.434v-6.608c0-.787.639-1.426 1.429-1.426h2.142c.538 0 .995.3 1.244.734 3.098.05 4.093.619 4.27.74 1.243.78 2.624.75 3.372.733h.31c.457.006.891.199 1.205.532.305.322.49.774.49 1.264l2.706-.941a1.849 1.849 0 0 1 2.272.907ZM5.95 13.245a.219.219 0 0 0-.219-.219H3.584a.224.224 0 0 0-.224.219v6.607c.002.124.1.225.224.227h2.142a.23.23 0 0 0 .225-.227v-6.607Zm14.585 3.106c-.18-.314-.515-.434-.82-.33l-3.69 1.252c-.106.039-.21.08-.313.126a1.777 1.777 0 0 1-.942.271H9.923a.601.601 0 0 1-.603-.602v-.003c0-.327.266-.605.603-.605h4.848c.314 0 .642-.327.642-.644 0-.289-.18-.588-.507-.588H14.62c-.807.017-2.475.052-4.051-.936-.009-.008-.821-.473-3.42-.538v4.373l4.613 2.224c.336.193.74.283 1.227.283.417 0 .762-.064 1.042-.193l.221-.112.002-.001c.959-.483 4.732-2.382 6.015-3.195.434-.275.442-.435.266-.782Zm-15.188-1.95c0-.428-.288-.717-.714-.717-.417 0-.714.292-.714.718 0 .417.297.708.714.708.426 0 .714-.291.714-.708Zm7.535-6.47v-.566h1.437c.33-.003.6-.272.6-.605l-.003-1.437h.566v1.434c0 .334.269.605.602.605h1.431v.566h-1.431a.604.604 0 0 0-.602.605V9.97h-.563l-.003-1.437a.601.601 0 0 0-.602-.602h-1.432Zm-.291 1.207h1.123l.003 1.123c0 .496.387.914.846.914h1.272c.46 0 .846-.418.846-.914V9.133h1.123c.493 0 .91-.39.91-.85v-1.28c0-.459-.417-.848-.91-.848h-1.123V5.032c0-.499-.387-.916-.846-.916h-1.278c-.456 0-.845.417-.845.913v1.129h-1.121c-.493 0-.91.39-.91.851v1.28c0 .46.417.85.91.85Z"
            />
        </svg>
    );
};

export default IconCareHealthRegular;
