/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconSettingsRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.43 23h-2.86c-.397 0-.713-.332-.713-.748v-1.037a8.29 8.29 0 01-2.214-.962l-.696.731a.698.698 0 01-1.013 0L3.91 18.867a.766.766 0 010-1.058l.697-.731a9.116 9.116 0 01-.917-2.323h-.977c-.396-.008-.712-.348-.712-.764v-3.003c0-.407.316-.748.712-.748h.989c.204-.814.504-1.6.917-2.322l-.7-.723a.766.766 0 010-1.058l2.024-2.121a.696.696 0 01.505-.223c.188 0 .372.076.504.223l.696.73a8.628 8.628 0 012.214-.961V2.748c0-.416.324-.748.72-.748h2.862c.396 0 .712.332.712.748v1.037a8.29 8.29 0 012.214.962l.692-.731a.696.696 0 01.504-.223c.188 0 .373.076.505.223l2.017 2.125a.785.785 0 010 1.063l-.697.73c.413.723.713 1.504.917 2.323h.98c.397 0 .713.332.713.748v3.003c0 .416-.316.747-.712.747h-.981a9.174 9.174 0 01-.917 2.323l.697.73a.785.785 0 010 1.063l-2.013 2.113a.698.698 0 01-1.013 0l-.696-.73a8.235 8.235 0 01-2.214.961v1.037a.734.734 0 01-.72.748zm-2.136-1.495h1.42v-.886a.74.74 0 01.585-.74 6.904 6.904 0 002.745-1.197.69.69 0 01.909.084l.6.63 1.013-1.062-.6-.63a.773.773 0 01-.08-.954 7.637 7.637 0 001.14-2.88.723.723 0 01.705-.614h.844v-1.495h-.844a.723.723 0 01-.705-.613 7.632 7.632 0 00-1.14-2.882.778.778 0 01.08-.953l.6-.63-1.013-1.063-.6.63a.685.685 0 01-.909.084A6.908 6.908 0 0013.3 5.137a.74.74 0 01-.585-.739v-.903H11.29v.895a.74.74 0 01-.585.739A6.904 6.904 0 007.96 6.326a.69.69 0 01-.909-.084l-.6-.63-1.02 1.054.6.63a.773.773 0 01.08.954 7.48 7.48 0 00-1.133 2.89.723.723 0 01-.705.612h-.848v1.496h.852c.349 0 .64.256.705.613a7.633 7.633 0 001.14 2.881.778.778 0 01-.08.953l-.6.63 1.013 1.063.6-.63a.685.685 0 01.909-.084 6.908 6.908 0 002.745 1.197.74.74 0 01.585.74v.894zm.712-3.003c-3.15 0-5.72-2.697-5.72-6.002 0-3.305 2.57-6.002 5.72-6.002s5.72 2.697 5.72 6.002c0 3.305-2.57 6.002-5.72 6.002zm0-10.5c-2.365 0-4.287 2.016-4.287 4.498s1.922 4.498 4.287 4.498 4.287-2.016 4.287-4.498-1.922-4.498-4.287-4.498z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.594 21.675H11.09a.98.98 0 01-.98-.98V18.84A7.356 7.356 0 018 18.188l-1.37 1.37a.997.997 0 01-1.406 0l-1.098-1.101a.998.998 0 010-1.407l1.367-1.367c-.317-.56-.543-1.464-.65-2.112H2.99c-.54 0-.98-.44-.98-.98v-1.504c0-.54.44-.98.98-.98h1.854c.107-.65.333-1.552.65-2.113L4.126 6.627a.997.997 0 010-1.406l1.098-1.098a.997.997 0 011.406 0L8 5.493a7.354 7.354 0 012.11-.653V2.99c0-.54.439-.98.98-.98h1.504c.54 0 .98.44.98.98v1.854a7.307 7.307 0 012.11.653l1.37-1.37a.998.998 0 011.405 0l1.098 1.098a.997.997 0 010 1.406L18.191 8c.308.62.526 1.328.652 2.11h1.855c.54 0 .98.439.98.98v1.504c0 .54-.44.98-.98.98h-1.855a7.356 7.356 0 01-.652 2.11l1.37 1.37a.997.997 0 010 1.405l-1.099 1.098a.997.997 0 01-1.406 0l-1.373-1.37a7.309 7.309 0 01-2.109.653v1.855c0 .543-.437.98-.98.98zm-1.364-1.12h1.224v-1.823c0-.494.375-.911.893-.99h.003a6.232 6.232 0 001.871-.574c.418-.207.886-.143 1.194.165l.008.009 1.336 1.336.922-.922-1.336-1.336-.009-.008c-.308-.308-.372-.79-.162-1.2.271-.537.462-1.164.571-1.867.078-.519.496-.894.989-.894h1.823v-1.224h-1.823c-.493 0-.91-.375-.989-.894-.11-.703-.3-1.33-.571-1.865-.21-.41-.146-.891.162-1.2l.009-.007 1.336-1.337-.922-.921-1.336 1.339-.008.008c-.308.308-.776.373-1.194.165a6.248 6.248 0 00-1.87-.574h-.004c-.518-.078-.893-.496-.893-.989V3.13H11.23v1.823c0 .493-.376.91-.894.99-.703.108-1.33.299-1.865.57a1.02 1.02 0 01-1.2-.162l-.008-.008-1.336-1.336-.921.921 1.336 1.336.008.009c.367.367.348.902.14 1.238-.204.333-.437 1.103-.549 1.829-.078.507-.504.89-.989.89H3.13v1.225h1.823c.485 0 .91.384.99.89.111.726.344 1.496.548 1.83.207.339.227.87-.14 1.238l-.008.008-1.336 1.336.921.922 1.336-1.336.009-.009c.308-.308.79-.372 1.199-.162.537.272 1.165.462 1.868.571.518.079.893.496.893.99l-.002 1.823zm.613-4.86c-2.484 0-3.851-1.367-3.851-3.852 0-2.484 1.367-3.851 3.851-3.851 2.485 0 3.852 1.367 3.852 3.851 0 2.485-1.37 3.852-3.852 3.852zm0-6.583c-1.863 0-2.73.868-2.73 2.731s.867 2.731 2.73 2.731 2.731-.868 2.731-2.73c0-1.864-.868-2.732-2.73-2.732z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconSettingsRegular;
