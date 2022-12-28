/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconOfferPercentLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.91 11.993l2.518-2.74a.356.356 0 00-.192-.59l-3.646-.737.43-3.7a.355.355 0 00-.146-.329.354.354 0 00-.361-.037l-3.38 1.55-1.823-3.242c-.128-.224-.494-.224-.621 0L9.866 5.411l-3.38-1.55a.36.36 0 00-.502.366l.429 3.7-3.646.736a.365.365 0 00-.27.238.356.356 0 00.078.352l2.522 2.74-2.517 2.74a.356.356 0 00.192.59l3.645.736-.43 3.7a.355.355 0 00.147.33.347.347 0 00.356.036l3.38-1.55 1.823 3.242a.355.355 0 00.621 0l1.823-3.243 3.38 1.55a.36.36 0 00.507-.366l-.2-1.737a.36.36 0 00-.713.082l.128 1.107-3.102-1.422a.356.356 0 00-.461.15l-1.672 2.973-1.672-2.977a.36.36 0 00-.461-.151l-3.102 1.422.393-3.393a.358.358 0 00-.284-.394l-3.343-.672 2.311-2.516a.354.354 0 000-.484L3.535 9.23l3.343-.672a.355.355 0 00.284-.394l-.393-3.393L9.87 6.193c.168.078.37.014.46-.15l1.673-2.97 1.676 2.978a.36.36 0 00.462.151l3.101-1.422-.392 3.393c-.023.183.1.357.283.394l3.343.672-2.311 2.516a.354.354 0 000 .485l2.311 2.515-1.132.229a.357.357 0 00.142.7l1.753-.353a.365.365 0 00.27-.237.356.356 0 00-.078-.353l-2.521-2.748zm-1.552 3.215a.714.714 0 010 1.427.714.714 0 010-1.427zm-7.94.178c0-.196.16-.356.357-.356a.708.708 0 00.712-.714v-1.788h-.356a.357.357 0 010-.714h.356v-1.61c0-1.084.882-1.967 1.964-1.967.448 0 .887.156 1.234.44a.357.357 0 01.055.503.356.356 0 01-.503.055 1.25 1.25 0 00-2.033.97v1.61h1.787a.357.357 0 010 .713h-1.787v1.788a1.4 1.4 0 01-.192.714h3.226a.357.357 0 010 .713H9.774a.357.357 0 01-.357-.357z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.33 16.334c0 .154.127.28.281.28.087 0 .168-.04.221-.11l6.779-8.666a.28.28 0 00-.048-.392.28.28 0 00-.392.047L8.39 16.16a.283.283 0 00-.06.174zm.175-5.871c.274.266.666.4 1.165.4.498 0 .89-.134 1.165-.4.286-.275.431-.678.431-1.197 0-.518-.145-.921-.431-1.196-.275-.266-.667-.4-1.165-.4-.499 0-.891.134-1.165.4-.286.275-.432.678-.432 1.196 0 .519.146.922.432 1.197zm1.165-2.23c.717 0 1.036.32 1.036 1.036 0 .717-.32 1.037-1.036 1.037-.717 0-1.037-.32-1.037-1.037 0-.717.32-1.036 1.037-1.036zm3.498 7.692c.275.266.667.4 1.166.4.498 0 .89-.134 1.162-.4.286-.275.431-.678.431-1.196 0-.519-.145-.922-.43-1.196-.275-.267-.668-.401-1.166-.401-.499 0-.89.134-1.165.4-.283.275-.429.678-.429 1.197 0 .518.146.921.431 1.196zm1.166-2.23c.717 0 1.036.32 1.036 1.036 0 .717-.32 1.037-1.036 1.037-.717 0-1.037-.32-1.037-1.037 0-.717.32-1.036 1.037-1.036z"
                />
                <path
                    fill={fillColor}
                    d="M12.003 21.838c-.566 0-.931-.66-1.287-1.3l-.01-.02c-.213-.389-.507-.924-.723-.983-.234-.061-.745.247-1.159.495l-.006.004c-.647.392-1.26.762-1.736.485-.484-.28-.468-1-.452-1.764v-.024c.01-.452.02-1.055-.142-1.218-.163-.163-.77-.152-1.22-.143H5.25c-.765.017-1.488.03-1.768-.45-.274-.477.095-1.09.483-1.736l.015-.024c.247-.41.549-.912.485-1.14-.059-.216-.594-.51-.983-.723l-.013-.007c-.646-.356-1.309-.722-1.309-1.29 0-.566.66-.931 1.3-1.286l.02-.01c.389-.213.924-.508.982-.723.062-.234-.246-.746-.495-1.16l-.003-.006c-.392-.647-.762-1.26-.485-1.736.28-.484 1-.468 1.763-.451h.025c.452.009 1.055.02 1.218-.143.163-.163.152-.77.143-1.22v-.018c-.017-.765-.031-1.488.45-1.768.476-.274 1.089.095 1.735.484l.025.014c.41.247.912.549 1.14.485.216-.058.51-.593.723-.983l.01-.019c.358-.64.726-1.3 1.292-1.3.566 0 .931.66 1.287 1.3l.01.02c.213.389.507.924.723.982.235.062.75-.249 1.162-.498.647-.392 1.26-.762 1.737-.485.484.28.468 1 .451 1.764v.024c-.009.452-.02 1.055.143 1.218.163.163.77.152 1.219.143h.019c.764-.017 1.487-.031 1.767.45.274.476-.094 1.089-.483 1.735l-.015.025c-.247.41-.548.912-.485 1.14.059.216.594.51.983.723.65.355 1.32.725 1.32 1.296 0 .566-.66.932-1.301 1.287l-.019.01c-.389.213-.924.507-.983.723-.061.235.25.75.499 1.163.392.647.762 1.26.484 1.736-.28.484-1 .468-1.763.451h-.024c-.452-.009-1.055-.02-1.218.143-.163.163-.152.77-.143 1.22v.018c.017.765.03 1.488-.451 1.768-.476.274-1.088-.095-1.735-.484l-.024-.014c-.41-.247-.912-.549-1.14-.486-.216.06-.51.594-.723.984l-.002.003c-.358.651-.724 1.319-1.295 1.319zM9.92 18.969c.07 0 .14.009.21.028.448.121.75.67 1.07 1.255.238.435.566 1.031.804 1.031.238 0 .566-.594.804-1.03.32-.583.625-1.135 1.07-1.256.46-.121 1 .203 1.578.548l.021.013h.002c.39.236.976.59 1.167.482.194-.115.182-.801.173-1.26v-.014c-.014-.673-.027-1.31.306-1.642.333-.334.972-.323 1.647-.306h.026c.46.01 1.133.022 1.242-.173.11-.19-.245-.778-.48-1.167l-.001-.002c-.353-.582-.686-1.134-.56-1.599.12-.448.669-.75 1.254-1.07.435-.238 1.031-.566 1.031-.804 0-.238-.594-.566-1.03-.804-.583-.32-1.135-.624-1.256-1.07-.121-.46.203-1 .548-1.578l.013-.021v-.002c.236-.389.59-.976.482-1.166-.115-.196-.81-.182-1.27-.171h-.004c-.673.014-1.31.027-1.642-.306-.334-.333-.323-.972-.306-1.647v-.026c.01-.46.022-1.133-.173-1.242-.19-.11-.778.245-1.167.48l-.002.001c-.582.353-1.134.687-1.599.56-.448-.12-.75-.669-1.07-1.254-.238-.435-.566-1.031-.804-1.031-.238 0-.566.594-.804 1.03-.32.583-.624 1.135-1.07 1.256a.745.745 0 01-.21.025c-.417 0-.89-.286-1.39-.589-.39-.236-.977-.59-1.167-.481-.196.115-.182.81-.171 1.269v.004c.014.673.027 1.31-.306 1.643-.332.332-.969.319-1.642.305h-.005c-.459-.011-1.156-.025-1.269.17-.109.191.246.778.481 1.168h.001c.353.584.687 1.135.56 1.6-.12.449-.669.751-1.254 1.07-.435.239-1.031.566-1.031.804 0 .238.594.566 1.03.804.583.32 1.135.625 1.256 1.07.123.465-.208 1.014-.56 1.6l-.01.014c-.235.392-.58.968-.473 1.154.115.195.801.182 1.26.174h.014c.673-.015 1.31-.028 1.642.305.333.332.32.969.306 1.642v.005c-.011.46-.025 1.157.17 1.269.19.109.778-.246 1.167-.481l.002-.001c.496-.3.972-.585 1.39-.585z"
                />
            </svg>
        );
    }
};

export default IconOfferPercentLight;
