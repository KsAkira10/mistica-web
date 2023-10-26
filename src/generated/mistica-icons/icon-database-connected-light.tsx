/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDatabaseConnectedLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.354 19.265H6.994v-5.818h10.004v1.82c0 .219.142.363.356.363.215 0 .357-.144.357-.363V5.489c0-.837-.645-1.489-1.427-1.489H6.28v16h11.074c.215 0 .357-.144.357-.363s-.142-.372-.357-.372ZM6.994 12.72V9.087h10.004v3.634H6.993ZM16.997 5.49v2.872H6.993V4.726h9.291c.394 0 .714.326.714.763ZM8.424 6.904h2.145c.215 0 .356-.144.356-.363s-.141-.363-.356-.363H8.424c-.215 0-.356.144-.356.363s.141.363.356.363Zm0 3.64h2.145c.21 0 .356.144.356.362 0 .22-.141.364-.356.364H8.424c-.215 0-.356-.145-.356-.364 0-.218.141-.363.356-.363Zm.037 4.36c-.215 0-.357.144-.357.363s.142.363.357.363h2.108c.215 0 .356-.144.356-.363s-.141-.363-.356-.363H8.46Zm8.18 2.546c0-.4.32-.726.713-.726a.72.72 0 0 1 .714.726c0 .4-.32.726-.714.726a.72.72 0 0 1-.713-.726ZM4.743 9.743c.179-.107.215-.326.074-.507-.106-.182-.32-.219-.499-.075a2.22 2.22 0 0 0-.891 1.745c0 .69.32 1.345.891 1.746l.012.006c.069.035.134.068.203.068a.334.334 0 0 0 .288-.144c.105-.182.073-.4-.073-.507a1.454 1.454 0 0 1-.608-1.164c0-.475.21-.88.603-1.168ZM3.71 8.617a3.072 3.072 0 0 0-1.001 2.29c0 .87.356 1.707 1.006 2.294.141.144.178.363.036.507-.036.07-.141.107-.251.107a.488.488 0 0 1-.243-.07l-.009-.004A3.87 3.87 0 0 1 2 10.905c0-1.089.462-2.108 1.248-2.834.142-.144.357-.107.499.037.141.145.105.363-.037.508Zm15.967.544c-.178-.107-.393-.074-.498.075-.105.181-.073.4.073.507.357.256.608.689.608 1.163 0 .475-.215.875-.608 1.164-.178.107-.215.326-.073.507a.327.327 0 0 0 .283.144c.07 0 .134-.033.203-.068l.012-.006a2.22 2.22 0 0 0 .892-1.745c0-.69-.357-1.34-.892-1.74Zm.572-1.056c.142-.145.356-.182.498-.038.787.726 1.253 1.708 1.253 2.797a3.854 3.854 0 0 1-1.248 2.835.397.397 0 0 1-.252.107.375.375 0 0 1-.251-.107c-.142-.145-.105-.363.036-.508a3.08 3.08 0 0 0 1.002-2.29 3.08 3.08 0 0 0-1.002-2.289c-.141-.144-.178-.363-.036-.507Z"
            />
        </svg>
    );
};

export default IconDatabaseConnectedLight;
