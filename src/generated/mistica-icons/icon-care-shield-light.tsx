/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCareShieldLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.161 10.039c-.386 2.243-4.52 4.274-4.991 4.498a.424.424 0 01-.174.04.437.437 0 01-.177-.04c-.47-.224-4.599-2.255-4.985-4.498-.293-1.686-.29-5.525-.289-5.86v-.017c0-.129.059-.247.16-.325.098-.079.227-.107.347-.079.997.157 1.53-.196 2.202-.647l.002-.001c.672-.448 1.43-.954 2.737-.954H12c1.302 0 2.06.506 2.73.953l.01.005c.671.448 1.21.804 2.215.644a.43.43 0 01.339.093.42.42 0 01.154.31v.112c-.003.681-.015 4.177-.286 5.766zm-.81-.146c.228-1.322.267-4.174.272-5.28-1.07.033-1.714-.392-2.341-.812l-.005-.004c-.629-.419-1.222-.814-2.281-.814h-.006c-1.059 0-1.652.395-2.28.814l-.005.004-.038.025c-.624.418-1.269.85-2.304.792.006 1.112.048 3.956.274 5.275.255 1.476 3.079 3.168 4.356 3.807 1.277-.639 4.107-2.33 4.359-3.807zm5.253 5.683c.011-.14.26-3.453.23-4.602-.023-.969-.69-1.154-1.157-1.18a1.2 1.2 0 00-1.194.964l-.364 1.78c-.546-.309-1.21-.158-1.53.36l-.1.177c-.227.412-.655 1.177-1.476 1.602-.073.031-.454.236-1.076 1.045a9.159 9.159 0 00-1.18 2.04l-.447 1.08c-.303.23-.502.594-.502 1.006v.726c0 .697.563 1.266 1.255 1.266h3.53c.692 0 1.255-.569 1.255-1.266v-.726a1.26 1.26 0 00-.306-.818l1.659-1.417c.125-.11.258-.21.425-.337l.014-.01a2.44 2.44 0 00.62-.72c.193-.328.307-.65.344-.97zm-.818-.08c-.02.19-.098.4-.227.627-.126.21-.26.372-.443.51-.148.111-.3.226-.44.347l-1.896 1.622a.95.95 0 00-.179-.02h-3.283l.207-.499c.283-.675.645-1.3 1.07-1.854.478-.626.756-.794.783-.811l.002-.001c1.053-.544 1.58-1.485 1.832-1.936l.084-.146c.1-.165.302-.165.445-.075.154.092.224.364.132.52v.004l-.003.002-1.572 2.659a.417.417 0 00.143.568.409.409 0 00.56-.146l1.572-2.66.003-.003c.115-.19.162-.41.157-.625l.01-.022a.174.174 0 00.02-.05l.53-2.583c.034-.174.157-.292.409-.3.218.014.305.05.31.37.029 1.106-.223 4.482-.226 4.501zm-2.756 5.078c0 .24-.197.437-.435.437h-3.529a.437.437 0 01-.434-.437v-.726c0-.24.196-.437.434-.437h3.53c.238 0 .434.196.434.437v.726zm-7.678 0v-.726a.435.435 0 00-.434-.437h-3.53a.437.437 0 00-.434.437v.726c0 .24.193.437.434.437h3.53c.24 0 .434-.197.434-.437zm-6.037-3.591l1.897 1.621a.95.95 0 01.179-.02h3.283l-.207-.498a8.145 8.145 0 00-1.07-1.854c-.496-.65-.78-.81-.782-.81-1.056-.546-1.583-1.484-1.835-1.935l-.087-.149c-.1-.165-.3-.165-.448-.075-.151.092-.221.364-.129.52.003 0 .003.004.003.004l.003.002 1.569 2.661a.411.411 0 01-.35.625.41.41 0 01-.353-.204l-1.57-2.659s-.002 0-.002-.002a1.215 1.215 0 01-.157-.628.241.241 0 00-.014-.032.228.228 0 01-.017-.04l-.526-2.58a.39.39 0 00-.367-.306c-.277.017-.347.067-.356.373-.028 1.109.224 4.484.227 4.518.022.176.098.386.233.608.117.21.254.37.397.481.177.135.33.253.48.379zm6.359 1.862c.302.23.501.594.501 1.006v.725a1.26 1.26 0 01-1.252 1.264h-3.53a1.258 1.258 0 01-1.251-1.264v-.725c0-.314.117-.597.305-.818l-1.658-1.417a9.397 9.397 0 00-.418-.33 2.45 2.45 0 01-.638-.738 2.392 2.392 0 01-.342-.955l-.002-.03c-.028-.374-.257-3.481-.23-4.586.022-.97.689-1.151 1.083-1.176a1.204 1.204 0 011.261.96l.364 1.779c.546-.302 1.21-.154 1.527.364l.1.177c.23.411.662 1.173 1.494 1.607.056.026.437.23 1.058 1.04a9.2 9.2 0 011.177 2.039l.45 1.078zm4.07-12.49a.406.406 0 00-.58 0l-3.106 3.137-1.236-1.246a.41.41 0 00-.58 0 .418.418 0 000 .585l1.524 1.54a.412.412 0 00.58 0l3.398-3.43a.418.418 0 000-.586z"
            />
        </svg>
    );
};

export default IconCareShieldLight;
