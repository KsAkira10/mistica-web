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

const IconCertificateLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.166 21.016c.207 0 .4-.185.4-.378V8.758h-2.543c-.972 0-1.81-.316-2.423-.915-.616-.603-.941-1.429-.941-2.384V2.985H5.84c-.182 0-.4.205-.4.379v5.761l.041 8.149-.042 3.367c0 .182.202.372.4.372h12.326v.003zm.187-13.087l-4.876-4.764v2.291c0 .728.238 1.347.691 1.79.457.445 1.098.683 1.852.683h2.333zm1-.016a.38.38 0 01.034.162v12.563c0 .653-.558 1.205-1.219 1.205H5.843c-.65 0-1.218-.564-1.218-1.205l.042-3.364-.042-8.143v-5.77c0-.63.583-1.205 1.218-1.205h7.502c.18 0 .353.07.479.194l5.358 5.235c.09.09.14.204.171.328zm-4.65 10.044l.894.33-1.255-2.753c-.482.44-1.14.687-1.944.76l1.311 2.88.333-.911a.516.516 0 01.661-.306zm-4.87 1.213l1.319-2.893c-.796-.112-1.42-.42-1.869-.922l-1.339 2.939.897-.337c.26-.098.557.04.658.303l.333.91zm2.06-9.1c-1.901 0-2.789.896-2.789 2.82 0 1.925.885 2.818 2.79 2.818s2.79-.896 2.79-2.818c0-1.924-.885-2.82-2.79-2.82zm2.889 4.946l1.473 3.238a.517.517 0 01-.577.723l-1.095-.403-.395 1.07c-.106.207-.28.313-.468.313h-.014a.514.514 0 01-.454-.302l-1.481-3.25-1.482 3.253a.516.516 0 01-.451.302h-.014a.518.518 0 01-.454-.274l-.412-1.107-1.056.392a.508.508 0 01-.549-.168.524.524 0 01-.067-.543l1.58-3.465c.005-.011.017-.02.022-.028-.249-.502-.395-1.115-.395-1.871 0-2.345 1.252-3.44 3.404-3.44 2.151 0 3.403 1.098 3.403 3.44 0 .88-.18 1.585-.518 2.12zm-3.448-2.501l-.563.09.44.484c.07.07.103.185.086.283l-.103.641.551-.283a.312.312 0 01.25-.022l.594.325-.098-.661a.339.339 0 01.09-.283l.439-.451-.613-.126a.326.326 0 01-.236-.174l-.274-.588-.283.583a.313.313 0 01-.28.182zm-.667.905l-.336-.345a.648.648 0 01-.149-.658.62.62 0 01.496-.426l.454-.07.204-.44c.208-.442.908-.445 1.118 0l.207.443.454.067c.23.036.42.199.496.426.076.23.02.482-.148.655l-.337.348.082.49a.642.642 0 01-.258.627.626.626 0 01-.65.04l-.4-.222-.401.224a.618.618 0 01-.653-.04.637.637 0 01-.257-.626l.078-.493z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCertificateLight;
