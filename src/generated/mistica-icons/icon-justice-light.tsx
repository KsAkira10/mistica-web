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

const IconJusticeLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M5.74 2.184a1404.4 1404.4 0 0 0-3.704 6.67.551.551 0 0 1-.018.091C2.009 8.982 2 9.02 2 9.037c0 2.333 1.924 4.261 4.26 4.261s4.26-1.928 4.26-4.26c0 0 0-.113-.036-.185L7.072 2.74h4.556v18.152H5.704c-.224 0-.372.148-.372.372s.148.372.372.372h10.74c.224 0 .372-.148.372-.372s-.148-.372-.372-.372h-4.076V2.74h4.556l-3.408 6.113c-.036.076-.036.184-.036.184 0 2.333 1.924 4.261 4.26 4.261 2.332 0 4.26-1.928 4.26-4.26 0 0 0-.113-.036-.185L18.26 2.184S18.148 2 17.924 2H6.072s-.22 0-.332.184Zm.52.628 3.26 5.853H3l3.26-5.853ZM2.78 9.405h7c-.224 1.78-1.708 3.15-3.52 3.15a3.499 3.499 0 0 1-3.48-3.15Zm11.704-.736 3.256-5.853 3.256 5.853h-6.512Zm-.224.736h7c-.224 1.78-1.704 3.15-3.52 3.15a3.499 3.499 0 0 1-3.48-3.15ZM19.408 21.26a.74.74 0 1 1-1.48 0 .74.74 0 0 1 1.48 0Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.834 14.104c.003.01.006.021.006.033 0 .876-.241 1.563-.712 2.042-.398.4-.947.63-1.627.678-.081.005-.972.008-1.056.008-.062 0-.919 0-.98-.003-.718-.034-1.292-.266-1.71-.683-.467-.47-.705-1.143-.714-1.997v-.012l-.001-.017-.001-.016c0-.015.003-.028.007-.04a.17.17 0 0 0 .007-.028l.001-.025c0-.013 0-.024.004-.036l2.373-7.866-1.713-.001-2.161-.002v12.72h1.708c.754 0 1.353.219 1.78.647.442.446.666 1.087.666 1.905a.42.42 0 0 1-.412.429H6.7a.42.42 0 0 1-.411-.429c0-.818.227-1.46.67-1.905.425-.428 1.022-.647 1.775-.647h1.709V6.14l-2.162.002-1.712.001 2.375 7.866a.142.142 0 0 1 .004.036c0 .008 0 .016.002.025l.005.026a.176.176 0 0 1 .006.042l-.001.014a.133.133 0 0 0-.002.02v.01c-.008.858-.246 1.527-.714 1.998-.414.417-.992.65-1.709.683-.058.003-.918.003-.977.003-.087 0-.978-.003-1.056-.008-.684-.048-1.23-.278-1.63-.678-.474-.48-.715-1.166-.715-2.04v-.002c0-.012.003-.023.006-.033l.005-.023.004-.029a.241.241 0 0 1 .019-.083l3.204-7.78c-.367.057-.68.172-.893.385a.399.399 0 0 1-.583-.012.446.446 0 0 1 .014-.607c.41-.412.972-.636 1.672-.67.056-.003 4.14-.006 5.916-.006a1.31 1.31 0 0 1-.666-.341c-.27-.272-.406-.67-.406-1.194 0-.52.137-.921.406-1.193.255-.258.619-.39 1.084-.395h.084c.482 0 .857.132 1.115.395.269.27.406.672.406 1.193s-.135.922-.406 1.194a1.29 1.29 0 0 1-.664.341c1.776 0 5.862.003 5.916.006.7.034 1.263.26 1.672.67a.44.44 0 0 1 .014.607.404.404 0 0 1-.297.132.394.394 0 0 1-.286-.12c-.215-.213-.529-.328-.893-.384l3.207 7.779c.011.027.015.058.02.09l.002.022.006.023ZM11.425 4.322c.118.117.333.148.507.154h.09c.18 0 .417-.028.543-.154.126-.13.154-.384.154-.578 0-.19-.028-.45-.154-.58-.126-.125-.364-.15-.543-.15h-.079c-.173.002-.397.03-.518.15-.126.13-.154.39-.154.58 0 .194.028.449.154.578Zm1.305 1.817h-1.47v12.72h1.47V6.14Zm8.073 7.57-2.77-6.718-2.028 6.714 4.798.003Zm-1.361 2.29c.479-.033.854-.182 1.112-.442.233-.233.378-.566.434-.989l-5.106-.003c.059.423.204.76.44.992.268.271.663.42 1.17.445.079.003.888.003.947.003.081 0 .91 0 1.003-.006Zm-4.182 3.717H8.73c-.532 0-.938.138-1.204.407-.202.207-.33.495-.387.862h9.712c-.056-.37-.185-.655-.387-.862-.266-.272-.67-.407-1.204-.407ZM3.19 13.712l4.798-.003L5.96 6.994 3.19 13.71Zm4.482 1.846c.235-.233.38-.569.437-.992l-5.107.003c.059.423.202.756.437.989.258.26.633.409 1.112.442.09.006.922.006 1.003.006.056 0 .866 0 .944-.003.507-.025.905-.173 1.174-.445Z"
                />
            </svg>
        );
    }
};

export default IconJusticeLight;
