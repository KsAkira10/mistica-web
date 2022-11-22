/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconVideogamesLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.087 8.358a42.34 42.34 0 01-.276-.63c-.048-.112-.09-.212-.133-.29a1.672 1.672 0 00-.069-.14l-.057-.11a3.097 3.097 0 00-.554-.722c-.692-.641-1.67-.966-2.91-.966-.51 0-.963.07-1.384.178-.247.063-.796.3-.805.305 0 0-.42.23-.555.32a2.45 2.45 0 01-1.345.399c-.47 0-.94-.133-1.346-.4-.131-.089-.552-.32-.552-.32-.012-.005-.56-.24-.808-.304A5.476 5.476 0 007.91 5.5c-1.24 0-2.222.325-2.91.966a2.961 2.961 0 00-.558.721l-.06.111-.008.016c-.011.021-.029.053-.06.123a14.813 14.813 0 00-.154.358c-.07.163-.154.354-.25.57-.692 1.553-1.944 4.367-1.91 6.863.006.408.166 1.226.288 1.618a2.26 2.26 0 001.46 1.493c.259.083.611.139.862.161h.08c.358 0 .967-.142 1.283-.28a3.32 3.32 0 00.782-.492c.168-.141.252-.242.484-.52l.105-.126c.069-.083.135-.167.201-.251.15-.19.298-.38.476-.546.592-.55 1.34-.938 2.23-1.182a6.643 6.643 0 011.75-.233c.59 0 1.181.08 1.75.233.89.241 1.642.633 2.23 1.182.178.165.326.355.474.545.066.085.133.17.201.252l.022.027c.295.358.381.462.567.62.319.263.603.405.797.49.341.15 1.007.281 1.345.281.254 0 .604-.078.863-.161a2.248 2.248 0 001.46-1.493c.124-.392.284-1.207.29-1.618.034-2.502-1.222-5.32-1.913-6.87zm.825 8.258c-.15.471-.489.824-.933.968a2.35 2.35 0 01-.597.12c-.22 0-.766-.106-1.002-.209a2.338 2.338 0 01-.594-.366c-.111-.092-.16-.147-.393-.428l-.094-.113a7.244 7.244 0 01-.185-.23l-.018-.024c-.155-.197-.326-.415-.542-.615-.68-.633-1.548-1.096-2.584-1.38a7.507 7.507 0 00-1.977-.263c-.672 0-1.337.089-1.978.264-1.032.283-1.9.746-2.583 1.379a5.24 5.24 0 00-.56.636l-.185.233-.097.113c-.233.28-.282.336-.39.428-.193.16-.381.28-.58.366-.228.1-.717.208-.948.208a3.237 3.237 0 01-.663-.119c-.44-.141-.776-.491-.927-.966-.105-.338-.248-1.077-.25-1.398-.032-2.328 1.184-5.061 1.84-6.534l.003-.008.062-.14c.072-.162.136-.307.191-.437l.02-.048.034-.078.094-.213.026-.053.011-.022.023-.047.003-.003.031-.058c.137-.236.265-.408.407-.539.53-.49 1.312-.74 2.33-.74.396 0 .777.046 1.164.146.125.034.48.175.646.247.096.053.364.203.463.267a3.325 3.325 0 003.639 0c.097-.064.365-.211.461-.264a7.44 7.44 0 01.646-.247c.39-.1.771-.147 1.167-.147 1.015 0 1.8.247 2.33.741.142.133.27.303.39.508l.042.075.032.061c.008.014.02.036.037.075l.027.063c.026.06.056.126.087.2l.03.078c.046.108.1.228.159.36l.095.215c.657 1.47 1.875 4.21 1.844 6.539-.006.322-.148 1.06-.254 1.399zM9.88 9.81c-.208-.191-.495-.3-.86-.316-.014-.372-.136-.664-.358-.866-.227-.214-.557-.322-.976-.322-.418 0-.742.108-.973.322-.227.21-.347.516-.355.907-.393.012-.703.12-.922.322-.236.22-.359.544-.359.96 0 .42.123.742.359.961.219.203.529.308.922.32.008.39.13.698.355.91.23.21.555.316.973.316.419 0 .749-.108.976-.316.24-.223.362-.544.362-.964.372-.019.651-.125.853-.31.242-.223.361-.544.361-.963 0-.417-.12-.739-.358-.96zm6.834-1.138c-.14-.127-.339-.191-.595-.191-.256 0-.455.064-.594.191-.142.134-.216.33-.216.589 0 .258.074.452.216.585.14.128.338.192.594.192.256 0 .456-.064.595-.192.145-.133.22-.33.22-.585 0-.258-.075-.455-.22-.589zm-1.642 1.557c-.14-.13-.338-.194-.594-.194-.26 0-.458.067-.595.194-.145.134-.219.33-.219.589 0 .258.077.452.22.585.139.128.338.192.594.192.256 0 .455-.064.594-.192.145-.133.22-.33.22-.585 0-.258-.075-.455-.22-.589zm1.047 1.363c.256 0 .456.064.595.191.145.134.22.33.22.589 0 .255-.075.452-.22.585-.14.128-.339.192-.595.192-.256 0-.455-.064-.594-.191-.142-.134-.216-.328-.216-.586 0-.255.074-.455.216-.588.14-.128.338-.192.594-.192zm2.24-1.363c-.14-.13-.34-.194-.595-.194-.256 0-.455.067-.595.194-.142.134-.216.33-.216.589 0 .258.071.452.216.585.14.128.336.192.595.192.256 0 .455-.064.595-.192.145-.133.219-.33.219-.585 0-.258-.074-.455-.22-.589zm-9.057.925c-.065.058-.21.094-.395.091h-.074c-.026 0-.046 0-.08-.008H8.75c-.004 0-.013 0-.022-.002a.429.429 0 00-.023-.001h-.046a.516.516 0 00-.33.097c-.1.078-.159.206-.176.37-.002.02 0 .039.003.058.001.013.003.027.003.041 0 .028 0 .053.002.078l.009.06a.422.422 0 00.009.054c.004.02.008.038.008.052 0 .109-.014.3-.102.383-.066.062-.21.095-.399.095-.185 0-.327-.034-.392-.092-.063-.058-.1-.2-.1-.383 0-.022.005-.05.01-.077l.004-.023c.003-.027.006-.055.012-.086 0-.006 0-.013-.002-.02l-.001-.024-.002-.033a.432.432 0 00-.012-.106c-.04-.16-.114-.275-.222-.341a.44.44 0 00-.24-.059c-.028 0-.059 0-.087.003H6.65l-.037.003-.037.003h-.003c-.068.01-.068.01-.162.01-.188 0-.33-.035-.396-.094-.062-.06-.1-.2-.1-.383 0-.108.015-.3.103-.383.066-.063.205-.097.393-.097.023 0 .042.004.061.007a.517.517 0 00.035.004h.003l.007.001a.336.336 0 00.05.005l.04-.001a.883.883 0 01.043-.002h.003c.013 0 .024 0 .036.002l.032.001c.011 0 .02 0 .028-.003.177-.025.308-.089.387-.194a.493.493 0 00.077-.341.11.11 0 010-.027.108.108 0 000-.026c-.003-.003-.003-.006-.003-.009v-.006a.937.937 0 01-.017-.16c0-.108.012-.303.103-.386.065-.06.204-.094.392-.094.19 0 .333.033.398.094.089.083.103.278.103.386l-.004.042a.985.985 0 00-.005.033c0 .008 0 .017-.002.028v.013c.002.005.002.011.002.017 0 .056 0 .111.017.175.04.161.114.278.222.344a.458.458 0 00.242.059c.032 0 .064-.003.098-.005l.007-.001c-.002.003.009.003.02.003h.032l.021-.002a.39.39 0 01.064-.004c.19 0 .333.033.398.095.089.083.103.277.103.383 0 .108-.014.3-.103.382z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconVideogamesLight;
