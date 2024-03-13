'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPoisonFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.736 6.71c1.179.583 1.823 1.776 1.823 3.398l-.008 7.924c0 2.384-1.41 3.807-3.76 3.807h-5.57c-1.158 0-2.08-.327-2.74-.966-.692-.672-1.045-1.622-1.045-2.838v-7.927c0-1.207.35-2.157 1.053-2.832.208-.207.454-.367.717-.512a1.6 1.6 0 0 1-.022-.264V3.573c0-.784.63-1.423 1.409-1.423h6.742c.782 0 1.42.639 1.42 1.423V6.5a2 2 0 0 1-.02.21m-8.359-.207c0 .12.095.224.216.224h6.742a.223.223 0 0 0 .224-.224V3.576a.223.223 0 0 0-.224-.224H8.593a.22.22 0 0 0-.216.224zm.434-.947a.598.598 0 1 0 1.194 0V4.458c0-.33-.266-.6-.597-.6a.6.6 0 0 0-.597.6zm2.149 5.645c-.843.257-1.866.955-1.866 2.826 0 .924.255 1.569.61 2.008l.043.05.042.048c.16.177.336.317.518.429v.216q0 .117.02.218.036.19.14.322.036.047.081.084.228.207.644.208h1.754c.28 0 .493-.073.647-.208a.5.5 0 0 0 .067-.067c.112-.134.165-.325.165-.555v-.215c.645-.4 1.21-1.143 1.21-2.519 0-1.033-.322-1.71-.753-2.153a2.4 2.4 0 0 0-.238-.213c-.686-.538-1.53-.611-1.854-.617l-.016-.001-.015-.001c-.079-.006-.168-.006-.247-.006a3.4 3.4 0 0 0-.905.134q-.028.002-.047.012m-1.104 3.745q.051.027.107.042a.4.4 0 0 0 .078.01h.003a.4.4 0 0 0 .21-.07h.003l.024-.014q.026-.012.046-.033l.325-.328.325.328q.014.014.032.023.012.006.024.014l.01.007.01.007a.4.4 0 0 0 .207.067.3.3 0 0 0 .091-.013l.004-.001a.5.5 0 0 0 .095-.042l.01-.006a.4.4 0 0 0 .082-.053.4.4 0 0 0 .098-.204l.005-.016.004-.015a.2.2 0 0 0 .008-.053q0-.027-.002-.054a.4.4 0 0 0-.11-.227l-.328-.327.328-.328c.07-.07.104-.16.11-.255v-.011q0-.024-.003-.045l-.003-.015-.003-.016a.4.4 0 0 0-.1-.227.43.43 0 0 0-.323-.112.4.4 0 0 0-.244.112l-.327.328-.328-.328a.4.4 0 0 0-.364-.103.43.43 0 0 0-.202.106.4.4 0 0 0-.106.21.3.3 0 0 0-.009.07l-.001.003-.001.003q0 .031.005.061c.011.082.048.16.11.222l.327.328-.328.327a.4.4 0 0 0-.112.258v.025l.003.013.003.012q.002.04.011.079a.4.4 0 0 0 .095.18c.031.027.065.044.101.06m.188.053a.4.4 0 0 0 .207-.07l.003-.003-.291.062q.036.007.08.01m2.134.23-.03.02-.048.036-.023-.018a.4.4 0 0 0-.072-.047q-.03-.011-.065-.02a.4.4 0 0 0-.221.015q-.005.003-.014.002h-.003l-.003.002-.002.001a.4.4 0 0 0-.216.207l-.11.27-.005.016-.006.011-.001.005-.001.002v.002a.4.4 0 0 0-.02.221q.012.05.036.095l.026.042.01.02q.014.025.034.048l.006.004.006.004.02.013.01.007q.017.01.031.022l.031.022.028.014h.008l.012.004.015.005.027.008q.044.014.095.014c.067 0 .137-.02.199-.056l.008-.005.009-.006.025-.017.002-.001.002-.002.004-.002a.37.37 0 0 0 .118-.157l.005-.009.003-.003.006.014a.36.36 0 0 0 .098.14q.025.023.053.04a.406.406 0 0 0 .218.067.398.398 0 0 0 .395-.4.4.4 0 0 0-.03-.157l-.12-.28v-.003l-.006-.009-.003-.002a.1.1 0 0 0-.021-.035l-.013-.016a.4.4 0 0 0-.12-.129.3.3 0 0 0-.062-.033H12.5a1 1 0 0 0-.067-.02.38.38 0 0 0-.249.03zm-1.064-9.073a.6.6 0 0 1-.597-.6V4.458a.6.6 0 0 1 .597-.6c.33 0 .596.27.596.6v1.098c0 .33-.266.6-.596.6m1.11-.6a.598.598 0 1 0 1.192 0V4.458a.598.598 0 1 0-1.193 0zm2.304.6a.6.6 0 0 1-.596-.6V4.458a.598.598 0 1 1 1.193 0v1.098a.6.6 0 0 1-.597.6m2.79 3.353c-.129-.894-.557-1.496-1.274-1.782a1.4 1.4 0 0 1-.709.2H8.593c-.238 0-.454-.074-.653-.177a2.1 2.1 0 0 0-.627.392q-.51.492-.633 1.367zM14.792 20.64c1.305 0 2.112-.518 2.423-1.543H6.783q.167.551.527.913c.429.415 1.076.63 1.91.63zm-2.266-7.263a.4.4 0 0 0 .114.283l.323.322-.328.328a.4.4 0 0 0-.115.283l.003.012.003.013a.44.44 0 0 0 .109.26c.03.028.064.045.1.062q.09.052.186.053a.4.4 0 0 0 .213-.07.3.3 0 0 0 .067-.042l.327-.328.328.328q.015.013.034.021l.022.013c.07.05.146.081.227.081a.4.4 0 0 0 .193-.059l.01-.005a.4.4 0 0 0 .083-.05.4.4 0 0 0 .095-.183q.022-.07.014-.14a.38.38 0 0 0-.106-.246l-.328-.328.328-.328a.4.4 0 0 0 .103-.221.44.44 0 0 0-.104-.344.41.41 0 0 0-.565 0l-.328.327-.328-.328a.41.41 0 0 0-.566 0 .43.43 0 0 0-.112.28v.003q-.003.002-.002.003"
            />
        </svg>
    );
};

export default IconPoisonFilled;
