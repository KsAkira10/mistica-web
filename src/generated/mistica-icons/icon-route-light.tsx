/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconRouteLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.71 2.155c1.966.006 3.137 1.185 3.131 3.157-.005 2.005-2.504 5-2.857 5.356a.412.412 0 0 1-.585 0c-.353-.356-2.844-3.353-2.835-5.373.003-.966.294-1.765.84-2.31.54-.541 1.336-.83 2.289-.83h.017Zm2.302 3.157c.003-1.516-.793-2.32-2.305-2.325h-.014c-.742 0-1.317.199-1.709.588-.395.395-.594.972-.597 1.723-.002 1.308 1.513 3.51 2.303 4.456.793-.944 2.316-3.145 2.322-4.442ZM6.69 9.259c2.83.008 4.515 1.708 4.507 4.546-.008 2.941-3.714 7.386-4.244 7.916a.415.415 0 0 1-.585.003l-.003-.003c-.857-.863-4.216-5.202-4.21-7.944.003-1.398.423-2.55 1.204-3.33.782-.78 1.925-1.191 3.309-1.191l.022.003ZM6.66 20.81c1.052-1.222 3.7-4.802 3.708-7.012.005-1.185-.314-2.112-.944-2.748-.63-.636-1.552-.96-2.737-.963h-.02c-1.173 0-2.09.316-2.72.947-.632.63-.957 1.554-.96 2.742-.009 2.112 2.52 5.706 3.672 7.034Zm.898-7.283c0-.597-.288-.886-.882-.886-.594 0-.882.292-.882.886 0 .593.288.885.882.885.594 0 .882-.292.882-.885Zm-.882-1.718c1.056 0 1.711.659 1.711 1.718 0 1.058-.655 1.717-1.711 1.717s-1.712-.659-1.712-1.717c0-1.06.656-1.718 1.712-1.718Zm12.473-6.68c0-.32-.129-.448-.448-.448-.316 0-.448.128-.448.448s.129.448.448.448c.317 0 .448-.129.448-.448Zm-.448-1.28c.776 0 1.277.501 1.277 1.28s-.5 1.28-1.277 1.28c-.776 0-1.277-.501-1.277-1.28s.501-1.28 1.277-1.28Zm-4.258 7.336a.418.418 0 0 0 .547.398c.255-.087.51-.163.753-.227a.415.415 0 0 0-.213-.804c-.263.07-.532.148-.804.24a.418.418 0 0 0-.283.393Zm1.34 8.176a.416.416 0 0 1 .384.737l-.01.004a.412.412 0 0 1-1.326.094.416.416 0 0 1 .24-.535c.25-.09.487-.19.711-.3Zm1.333-2.4a.405.405 0 0 0 .283.112.416.416 0 0 0 .286-.717 3.374 3.374 0 0 0-.763-.521.414.414 0 0 0-.56.176.414.414 0 0 0 .177.56c.21.104.403.233.577.39Zm.115-5.916a.416.416 0 0 1-.056-.83c.165-.022.274-.036.305-.036a.411.411 0 0 1 .437.384v.008a.414.414 0 0 1-.39.44c-.078.009-.16.02-.238.031-.02.003-.039.003-.058.003Zm.88 7.235a.413.413 0 0 0-.242-.535c-.003 0-.005 0-.01-.003a.41.41 0 0 0-.525.247 1.701 1.701 0 0 1-.378.574.417.417 0 0 0 .053.585.417.417 0 0 0 .586-.053c.221-.235.398-.512.515-.815Zm-2.886-2.28a.4.4 0 0 1-.14-.025l-.154-.056c-.208-.076-.417-.152-.62-.233a.417.417 0 0 1 .303-.776c.247.098.499.19.754.28a.416.416 0 0 1 .008.832.307.307 0 0 1-.151-.022Zm-3.552 4.927a.407.407 0 0 0-.468-.342c-.261.04-.515.073-.767.105l-.037.005H10.4a.413.413 0 0 0-.356.462c.03.227.235.39.462.361.263-.03.538-.07.818-.112h.003a.412.412 0 0 0 .347-.47v-.009Zm1.888-.798a.416.416 0 0 1 .202.806c-.266.068-.538.13-.81.185a.413.413 0 0 1-.49-.322.413.413 0 0 1 .322-.49c.258-.056.518-.115.776-.18Zm-1.204-7.737c0 .23.184.417.414.42.123 0 .241-.053.317-.148.151-.174.328-.325.524-.448a.417.417 0 0 0 .114-.547.418.418 0 0 0-.568-.148c-.291.19-.527.395-.706.608a.41.41 0 0 0-.095.263Zm-3.55 8.462a.414.414 0 0 1 .446.378v.003a.412.412 0 0 1-.378.446h-.003c-.252.02-.504.036-.756.05H8.09c-.216 0-.429-.165-.446-.38-.02-.228.11-.421.334-.446l.09-.006c.114-.003.374-.017.739-.045Zm3.964-5.997a.417.417 0 0 0 .263.095.396.396 0 0 0 .32-.156.414.414 0 0 0-.059-.583 1.358 1.358 0 0 1-.386-.476.412.412 0 0 0-.53-.2.418.418 0 0 0-.224.544c.143.303.353.569.616.776Z"
            />
        </svg>
    );
};

export default IconRouteLight;
