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

const IconFootballBallRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M14.756 20.162l.712-2.184c.061-.202.196-.387.378-.519.182-.131.414-.193.619-.199h2.633c-1.148 1.726-2.832 2.533-4.342 2.902zm-2.375.292h-.185c-.24 0-.49-.003-.706-.009-.367-.008-.81-.042-1.291-.109-.017-.07-.02-.14-.042-.204l-.832-2.563a2.248 2.248 0 00-.4-.731l.582-.88c.303.151.63.246.983.246h2.734c.336 0 .656-.078.947-.212l.535.874a2.212 2.212 0 00-.41.739l-.834 2.566c-.022.073-.03.151-.047.227a10.28 10.28 0 01-1.034.056zM4.7 17.218h2.475c.205 0 .418.07.597.202.182.132.317.317.381.527l.684 2.106c-1.457-.412-3.031-1.227-4.138-2.835zm6.744-13.983c.174-.003.373-.005.572-.005l.286.002c.549.009 1.266.065 2.042.227l-1.863 1.353c-.336.255-.874.26-1.227-.005l-1.846-1.34a11.152 11.152 0 012.036-.232zM9.52 14.255l-.14-.423-.698-2.154a1.045 1.045 0 01.384-1.177l2.193-1.593a1.07 1.07 0 011.23.005l2.188 1.591c.372.27.526.74.384 1.177l-.835 2.565a1.055 1.055 0 01-1.003.732H10.5a1.036 1.036 0 01-.98-.723zm10.95-2.7l-1.715-1.247a1.025 1.025 0 01-.375-.52c-.07-.214-.07-.44.003-.65l.806-2.49c.74 1.19 1.233 2.78 1.28 4.907zm-4.72-7.681a7.06 7.06 0 012.605 1.709 2.224 2.224 0 00-.311.61l-.832 2.56c-.093.272-.123.56-.104.85l-1.154.484a2.234 2.234 0 00-.557-.58l-2.18-1.583a2.072 2.072 0 00-.733-.341V6.15c.266-.073.515-.187.725-.347l2.182-1.586c.14-.098.25-.224.359-.344zm-7.748.006c.106.117.213.24.344.336l2.177 1.58c.218.165.468.28.734.352v1.429c-.264.07-.513.18-.726.339L8.35 9.501c-.232.166-.42.373-.571.6l-1.194-.552a2.164 2.164 0 00-.1-.86l-.832-2.566a2.257 2.257 0 00-.266-.54A7.107 7.107 0 018.003 3.88zm-3.465 2.8l.779 2.404c.07.199.067.426-.003.641a1.05 1.05 0 01-.381.527l-1.656 1.205c.05-2.065.535-3.617 1.26-4.776zm-.098 9.306c-.132 0-.26.014-.387.036-.378-.86-.641-1.88-.74-3.1.051-.031.11-.054.16-.09l2.177-1.583c.204-.145.38-.327.526-.532l1.23.569c-.008.257.025.518.11.773l.974 3.003h.05c.015.022.034.039.048.061l-.664 1.003a2.19 2.19 0 00-.77-.137H4.44v-.003zm14.736.042h-2.73a2.27 2.27 0 00-.732.129l-.596-.97c.114-.17.213-.358.277-.56l.835-2.565c.087-.266.117-.535.109-.802l1.17-.493c.15.213.326.398.53.544l2.182 1.588c.065.048.14.079.208.118-.098 1.215-.359 2.23-.726 3.081a2.208 2.208 0 00-.527-.07zM12.322 2.003C12.222 2 12.12 2 12.017 2c-.21 0-.418.003-.597.006-1.88.036-9.395.74-9.395 9.812 0 9.053 7.504 9.815 9.432 9.86.226.005.484.008.736.008h.196c1.978-.017 9.322-.694 9.322-9.81.003-9.13-7.411-9.845-9.389-9.873z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFootballBallRegular;
