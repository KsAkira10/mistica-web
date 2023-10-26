/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconEmailVirusLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.488 18.967c.448-.537.345-1.218.34-1.224l.005-9.246c-.02-.877-.375-1.308-.686-1.53l-6.93-4.375-.003-.002c-.051-.035-.64-.435-1.465-.435a2.71 2.71 0 0 0-1.44.426L4.466 6.9l-.12.078c-.297.21-.653.641-.673 1.526v.983c-.778.97-1.327 2.255-1.476 3.928-.025.316-.042.65-.042.997 0 6.969 5.93 7.409 7.12 7.428h.219c.151 0 .305 0 .437-.003.857-.014 3.608-.238 5.429-2.285l.542-.001c1.841-.003 3.831-.005 4.183-.01.622-.012 1.095-.205 1.403-.575ZM4.81 7.657s6.961-4.398 6.964-4.396c.003-.002.412-.283.989-.283.56 0 .975.28.994.295l6.835 4.316.09.056c.207.146.316.446.327.86l-.025.009-4.476 2.79c-1.157-3.012-4.017-4.202-6.605-4.264a17.884 17.884 0 0 0-.678-.005c-1.641.014-3.38.495-4.725 1.619v-.138c.008-.425.12-.725.31-.86Zm10.345 10.831c-1.555 2.289-4.403 2.516-5.24 2.53-.186.002-.418.002-.628.002-1.482-.022-6.308-.563-6.308-6.607 0-.309.014-.617.039-.925.46-5.187 4.874-5.627 6.215-5.638h.155c.165 0 .333 0 .498.005 1.328.034 5.703.521 6.275 5.465.042.359.064.74.064 1.132 0 1.633-.361 2.989-1.07 4.036Zm5.697-.044c-.148.179-.411.271-.781.28-.347.005-2.294.008-4.115.008.717-1.151 1.093-2.583 1.093-4.277 0-.426-.023-.838-.068-1.227a8.384 8.384 0 0 0-.213-1.12l4.244-2.645-.003 8.347v.002c.004.028.046.388-.157.631Zm-7.507-4.28c.227 0 .412.184.412.408v.79a.41.41 0 0 1-.412.41h-.002a.41.41 0 0 1-.412-.41v-.383h-.378c-.003.703-.067 1.322-.227 1.843l.877.263a.411.411 0 0 1 .294.415l-.065 1.19a.41.41 0 0 1-.411.386h-.023a.41.41 0 0 1-.39-.43l.048-.87-.675-.2c-.434.615-1.168.968-2.378.968-1.215 0-1.95-.355-2.384-.972l-.691.208.044.868a.41.41 0 0 1-.389.431h-.022a.411.411 0 0 1-.412-.386l-.065-1.19a.406.406 0 0 1 .292-.415l.896-.27c-.16-.52-.224-1.136-.227-1.837h-.372v.381a.41.41 0 0 1-.412.41h-.003a.41.41 0 0 1-.412-.41v-.793a.41.41 0 0 1 .412-.408h.818c.042-.547.146-1.076.373-1.53l-1.07-.32a.405.405 0 0 1-.292-.414l.065-1.19a.406.406 0 0 1 .417-.39h.017a.41.41 0 0 1 .39.432l-.046.868.838.252a1.864 1.864 0 0 1-.062-.482c0-1.599 1.555-1.599 2.303-1.599.745 0 2.3 0 2.3 1.6 0 .173-.023.327-.06.47l.807-.24-.047-.87a.412.412 0 0 1 .39-.43c.262-.012.422.16.433.386l.065 1.19a.408.408 0 0 1-.294.415l-1.05.314c.226.454.333.986.375 1.535 0 .005.817.005.817.005Zm-5.215-2.77c0 .083.005.156.017.218.395-.163.87-.25 1.456-.25.588 0 1.067.087 1.462.252a1.25 1.25 0 0 0 .017-.22c0-.488-.098-.782-1.476-.782s-1.476.294-1.476.781Zm3.602 3.56c0-1.345-.204-2.074-.686-2.43-.314-.232-.784-.344-1.443-.344-.664 0-1.137.115-1.448.35-.476.362-.678 1.084-.678 2.423-.003 2.152.474 2.773 2.126 2.773 1.65 0 2.13-.621 2.13-2.773Zm-1.75-1.261a.412.412 0 0 0-.824 0v2.955a.41.41 0 0 0 .412.409h.002a.41.41 0 0 0 .41-.409v-2.955Z"
            />
        </svg>
    );
};

export default IconEmailVirusLight;
