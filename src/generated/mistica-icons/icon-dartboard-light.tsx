/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconDartboardLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.027 6.891h-2.092l.944-.935 1.781.017c-.002 0-.633.918-.633.918zm-7.952 4.659c-.417-.283-.997-.423-1.784-.44-.152-.003-.586-.006-.583-.006-1.627.014-2.51.47-2.51 2.843 0 2.401.91 2.869 2.577 2.891l.185.003.398-.003c1.952-.033 2.613-.75 2.613-2.843 0-.795-.103-1.395-.341-1.837l1.215-1.205c.54.74.824 1.742.824 3.042 0 2.994-1.4 4.48-4.275 4.527l-.423.002-.201-.002c-2.871-.04-4.266-1.538-4.266-4.575 0-3.02 1.37-4.5 4.187-4.526l.645.005c1.271.031 2.24.348 2.95.928l-1.211 1.196zm.073 2.442c0 1.748-.387 2.003-1.801 2.028l-.381.003-.18-.003c-1.19-.017-1.764-.112-1.764-2.075 0-1.928.515-2.017 1.689-2.026.05 0 .428 0 .563.003.532.014.93.062 1.216.208l-1.521 1.51-.003-.659a.41.41 0 00-.41-.406h-.005a.407.407 0 00-.409.406v.003l.003 1.641v.006c0 .073.028.137.062.196a.409.409 0 00.347.205h.006l1.647-.026a.412.412 0 00.406-.414.408.408 0 00-.412-.4h-.006l-.633.01 1.435-1.423c.1.297.15.681.15 1.213zm5.04 0c0 2.782-.95 4.782-2.827 5.939-1.532.946-3.26 1.078-3.93 1.09-.137.002-.294.002-.454.002l-.244-.003c-.678-.008-2.42-.134-3.952-1.09-1.86-1.162-2.801-3.176-2.801-5.985 0-2.804.933-4.81 2.773-5.958 1.515-.947 3.246-1.065 3.921-1.068h.157c.194 0 .395.003.566.006.678.017 2.423.157 3.964 1.118.257.16.493.339.717.532l-1.2 1.188c-1-.846-2.321-1.124-3.526-1.152l-.664-.005c-2.288.02-5.01.96-5.01 5.341 0 4.398 2.761 5.359 5.075 5.393l.207.002.44-.005c2.322-.04 5.09-1 5.09-5.342 0-1.661-.41-2.826-1.042-3.641l1.207-1.2c1.014 1.18 1.532 2.8 1.532 4.838zm.1-9.896l.877-.69V5.51l-.877.869V4.096zm4.507 1.288a.413.413 0 00-.361-.218l-1.743-.02.11-.109a.407.407 0 00.002-.574l-.002-.003a.414.414 0 00-.583 0l-.233.233v-2.13a.405.405 0 00-.232-.366.413.413 0 00-.434.047l-1.7 1.334a.42.42 0 00-.157.319v3.297l-.813.807c-1.877-1.639-4.327-1.869-5.238-1.891a20.596 20.596 0 00-.588-.008l-.16.002c-1.588.014-7.507.555-7.507 7.843 0 7.3 5.972 7.872 7.563 7.894.084.003.171.003.255.003.165 0 .328-.003.47-.003 1.513-.028 7.564-.591 7.564-7.843 0-2.535-.745-4.244-1.779-5.415l.88-.874h3.134a.407.407 0 00.339-.179l1.185-1.725a.4.4 0 00.028-.42z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDartboardLight;
