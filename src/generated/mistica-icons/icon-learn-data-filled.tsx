/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLearnDataFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M8.563 4.125l.001.008c.19.546.896 1.02 2.056 1.367 1.227.375 2.846.574 4.563.574 1.726 0 3.336-.2 4.563-.574 1.137-.34 1.835-.799 2.042-1.328 0-.009.008-.017.008-.017-.148-.571-.837-1.053-2.056-1.426-1.22-.367-2.837-.574-4.563-.574-1.717 0-3.344.207-4.571.574-1.154.359-1.86.84-2.05 1.387l.007.01zm5.785 8.162l-5.467 2.44-.376-.169-5.11-2.249 5.46-2.431.009-.009 2.44 1.07 2.87 1.272h.009l.165.076zm-1.81 4.016a1.564 1.564 0 00-.198.042 8.551 8.551 0 00-.216.05c-.025 0-.042 0-.067.01a9.76 9.76 0 00-1.633.54 7.11 7.11 0 00-.622.308 4.86 4.86 0 00-.714.457.261.261 0 01-.325 0 .864.864 0 00-.123-.085.703.703 0 00-.066-.04 7.243 7.243 0 00-1.296-.707 10.55 10.55 0 00-1.218-.423 13.448 13.448 0 00-.79-.204l-.014-.004v-1.77l3.112 1.387a1.192 1.192 0 001.003-.001l.339-.15 2.87-1.278-.041 1.868zm2.648-4.963c1.725 0 3.344-.194 4.563-.566 1.21-.367 1.874-.922 2.092-1.339V5.491c-.448.356-1.061.647-1.843.88-1.3.389-3.017.605-4.818.605-1.8 0-3.51-.216-4.82-.605-.796-.233-1.41-.541-1.858-.897v3.222a.49.49 0 00-.121.038 3.508 3.508 0 01-.01.004L2.886 11.18a1.22 1.22 0 00-.731 1.129c0 .49.283.922.731 1.12l1.12.5v2.324c0 .63.457 1.168 1.079 1.286.854.15 2.042.473 2.905 1.145.157.126.333.208.515.258v.639c0 .697.703 1.271 2.098 1.694 1.236.367 2.863.575 4.572.575 1.708 0 3.333-.21 4.563-.575 1.392-.423 2.106-.997 2.106-1.694v-3.546a5.712 5.712 0 01-1.843.896c-1.291.398-3.011.613-4.818.613-.737 0-1.443-.05-2.132-.117.359-.157.625-.465.732-.838.456.034.921.059 1.403.059 1.725 0 3.344-.207 4.563-.574 1.21-.373 1.874-.93 2.098-1.345v-3.986c-.482.364-1.104.672-1.843.888-1.202.364-2.77.572-4.437.597a1.188 1.188 0 00-.457-.888h.076z"
            />
        </svg>
    );
};

export default IconLearnDataFilled;
