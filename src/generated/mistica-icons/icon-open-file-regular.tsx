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

const IconOpenFileRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.03 17.82a.507.507 0 00-.01.111c0 .06-.048.104-.11.104H4.14a.11.11 0 01-.104-.073l1.463-7.91c.005-.04.01-.076.01-.115 0-.059.048-.104.11-.104h14.75c.051 0 .09.031.104.073l-1.442 7.913zM3.444 5.774H9.57c.107 0 .18.064.18.123v1.028c0 .344.277.624.619.624h7.722c.107 0 .18.065.183.174l.064.86v.003H5.619c-.72 0-1.31.571-1.344 1.288l-.558 3.02L3.266 5.9c-.003-.062.07-.126.177-.126zm16.924 2.809h-.807c.003-.034.014-.064.011-.098l-.064-.812c0-.757-.636-1.376-1.417-1.376h-7.104v-.403c0-.756-.636-1.375-1.417-1.375H3.44c-.78 0-1.414.616-1.414 1.414l.77 11.95c0 .014-.005.028-.005.045 0 .747.605 1.355 1.347 1.355h14.77c.72 0 1.311-.574 1.345-1.288l1.448-7.947a.507.507 0 00.011-.112 1.348 1.348 0 00-1.344-1.353z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconOpenFileRegular;
