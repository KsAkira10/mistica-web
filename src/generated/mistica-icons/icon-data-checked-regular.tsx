/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDataCheckedRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.84 5.075c0-1.078-.841-1.877-2.497-2.375-1.131-.34-2.613-.527-4.179-.541-1.557 0-3.039.188-4.17.527-1.37.411-2.186 1.039-2.424 1.865a1.843 1.843 0 00-.072.513V7.62h-.012c-1.528 0-2.41.582-3.191 1.097l-.002.001-.007.005c-.736.49-1.316.877-2.385.707a.604.604 0 00-.75.582v.022c-.001.389-.006 4.704.33 6.606.454 2.59 5.213 4.899 5.753 5.154a.597.597 0 00.516.003 21.21 21.21 0 002.526-1.437c1.098.294 2.46.46 3.894.46 1.554 0 3.036-.189 4.173-.527 1.656-.496 2.496-1.297 2.496-2.376V5.075zM9.788 4.809c.17-.364.706-.7 1.56-.958 1.02-.305 2.378-.474 3.82-.476 1.446 0 2.805.168 3.824.473.636.193 1.373.51 1.577.972-.168.364-.717.703-1.568.958-1.023.305-2.378.473-3.821.473-1.44 0-2.798-.168-3.82-.473-.866-.258-1.41-.602-1.572-.97zm-.076 1.577c.35.21.785.392 1.3.546 1.134.339 2.613.524 4.17.524 1.555 0 3.037-.188 4.169-.527a5.87 5.87 0 001.28-.535V9.24c-.182.303-.686.72-1.627 1.003-1.023.308-2.379.476-3.821.476-.078 0-.155-.002-.232-.005a14.85 14.85 0 00-.118-.003l.002-.69a.615.615 0 00-.224-.453.626.626 0 00-.495-.134c-1.101.173-1.687-.213-2.426-.704-.544-.358-1.146-.747-1.978-.952V6.386zm3.605 10.056c-.277 1.577-3.364 3.417-4.826 4.146-1.46-.729-4.543-2.57-4.82-4.149-.25-1.42-.3-4.434-.309-5.762 1.14-.005 1.922-.496 2.602-.947l.01-.005c.696-.458 1.357-.89 2.517-.89h.003c1.168.002 1.826.436 2.526.898l.007.004c.67.442 1.415.932 2.593.932h.003c-.009 1.325-.06 4.347-.306 5.773zm-2.608-4.098a.605.605 0 01.855 0 .602.602 0 010 .851l-3.647 3.633a.605.605 0 01-.852 0l-1.638-1.633a.602.602 0 010-.851.605.605 0 01.854 0l1.21 1.207 3.218-3.207zm8.286 6.798c-1.028.308-2.386.476-3.826.476-.93 0-1.815-.075-2.61-.21.963-.812 1.775-1.762 1.949-2.759v-.003l.022-.141c.005-.038.01-.076.017-.113l.127.005c.167.007.334.014.506.014 1.557 0 3.04-.188 4.168-.527a5.6 5.6 0 001.28-.557v2.591c0 .605-.888 1-1.633 1.224zm-4.18-7.227c.06 0 .12.002.18.004.062.003.124.005.188.005 1.554 0 3.036-.188 4.168-.527a5.6 5.6 0 001.28-.557v2.89c-.182.303-.69.72-1.627 1.003-1.02.306-2.376.474-3.821.474-.129 0-.256-.005-.383-.01a25.884 25.884 0 00-.124-.004c.081-1.056.12-2.28.14-3.278z"
            />
        </svg>
    );
};

export default IconDataCheckedRegular;
