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

const IconOfferPercentFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.338 9.617L19.147 12l2.19 2.383a.712.712 0 01.156.706.72.72 0 01-.54.481l-3.17.637.37 3.217a.703.703 0 01-.287.66.723.723 0 01-.718.074L14.21 18.81l-1.587 2.823a.711.711 0 01-1.245 0L9.792 18.81l-2.937 1.348a.721.721 0 01-.718-.074.723.723 0 01-.288-.66l.375-3.217-3.17-.637a.706.706 0 01-.54-.481.724.724 0 01.156-.706L4.86 12 2.67 9.617a.711.711 0 01-.156-.706.72.72 0 01.54-.481l3.17-.637-.375-3.217a.703.703 0 01.288-.66.712.712 0 01.718-.074L9.792 5.19l1.587-2.823a.711.711 0 011.245 0L14.21 5.19l2.937-1.348a.713.713 0 011.006.733l-.37 3.218 3.17.637c.256.05.461.234.54.481a.725.725 0 01-.156.706zm-11.573 6.32h4.469c.297 0 .54-.243.54-.541a.533.533 0 00-.536-.536h-2.95c.06-.17.091-.348.091-.536V12.71h1.61a.533.533 0 00.536-.536.533.533 0 00-.535-.536h-1.61v-1.43a1.072 1.072 0 011.742-.834.536.536 0 10.677-.834 2.155 2.155 0 00-1.35-.477 2.15 2.15 0 00-2.145 2.15v1.43h-.178a.533.533 0 00-.535.536c0 .298.238.536.535.536h.174v1.613a.528.528 0 01-.535.536.534.534 0 00-.536.536c0 .298.238.537.536.537z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.668 10.018c.558 0 .757-.196.757-.756s-.2-.756-.757-.756c-.557 0-.756.199-.756.756 0 .558.199.756.756.756zm4.664 3.952c-.557 0-.756.197-.756.757s.199.756.756.756c.557 0 .756-.196.756-.756s-.198-.756-.756-.756z"
                />
                <path
                    fill={fillColor}
                    d="M21.234 11.018c-.25-.193-.557-.364-.854-.526l-.005-.003c-.25-.138-.7-.385-.802-.524.014-.178.29-.634.444-.89l.005-.007c.406-.672.825-1.366.473-1.974-.356-.616-1.174-.6-1.967-.583h-.01c-.294.006-.818.016-.976-.056-.072-.157-.062-.677-.056-.973v-.013c.017-.79.034-1.607-.582-1.966-.603-.346-1.294.069-1.963.47l-.01.006c-.254.154-.72.434-.896.448-.139-.103-.386-.551-.524-.802l-.002-.004c-.163-.297-.334-.605-.527-.855-.11-.142-.445-.571-.98-.571-.132 0-.536 0-.98.571-.194.25-.365.558-.527.855l-.003.004c-.138.25-.385.7-.524.802-.178-.013-.634-.29-.89-.444l-.008-.005c-.672-.405-1.366-.825-1.973-.472-.616.356-.6 1.174-.583 1.966v.01c.006.294.016.818-.056.976-.157.072-.677.062-.974.056h-.012c-.79-.017-1.608-.033-1.966.583-.353.607.066 1.302.472 1.973l.001.002c.154.255.434.72.448.896-.103.14-.551.386-.802.524l-.004.003c-.297.162-.605.333-.855.526-.143.11-.571.446-.571.98 0 .132 0 .536.571.981.25.193.558.364.855.527l.004.002c.25.138.7.385.802.524-.014.178-.29.634-.444.89l-.005.008c-.406.672-.825 1.366-.472 1.973.355.617 1.173.6 1.966.583h.01c.294-.006.818-.016.976.056.072.158.062.678.056.974v.012c-.017.79-.033 1.608.583 1.966.607.353 1.301-.066 1.973-.472h.002c.254-.155.72-.435.896-.45.14.104.386.553.524.803l.002.005c.163.297.334.605.527.854.11.14.446.571.98.571.132 0 .536 0 .98-.571.194-.25.365-.557.527-.854l.003-.005c.138-.25.385-.7.524-.802.178.014.634.29.89.444l.008.005c.672.406 1.366.825 1.973.472.611-.352.597-1.16.583-1.947v-.029c-.006-.294-.016-.818.056-.976.157-.072.677-.062.974-.056h.012c.79.017 1.608.034 1.966-.583.353-.607-.066-1.301-.472-1.973l-.001-.001c-.154-.255-.434-.72-.448-.897.103-.139.552-.386.802-.524l.005-.002c.296-.163.605-.334.854-.527.14-.11.571-.446.571-.98 0-.138 0-.538-.574-.984zM9.668 7.388c1.174 0 1.877.7 1.877 1.877 0 1.176-.7 1.877-1.877 1.877-1.176 0-1.877-.7-1.877-1.877s.704-1.877 1.877-1.877zm-1.403 9.376a.562.562 0 01-.095-.78l6.781-8.666a.561.561 0 01.883.692l-6.782 8.664a.56.56 0 01-.787.09zm6.067-.163c-1.174 0-1.877-.7-1.877-1.877 0-1.176.7-1.876 1.877-1.876 1.176 0 1.877.7 1.877 1.876 0 1.177-.703 1.877-1.877 1.877z"
                />
            </svg>
        );
    }
};

export default IconOfferPercentFilled;
