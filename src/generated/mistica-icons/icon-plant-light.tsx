/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPlantLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M15.41 3.709h1.849c.714 0 1.3.56 1.3 1.252v1.924a.443.443 0 01-.015.107c-.106 1.792-1.215 2.767-3.134 2.767-.692 0-1.266-.14-1.742-.39-.482.911-.804 1.903-1.006 2.676h4.003c.717 0 1.3.56 1.3 1.246v1.493c0 .664-.55 1.205-1.233 1.238l-.549 4.774c.003.554-.504 1.041-1.129 1.041H8.928c-.622 0-1.131-.487-1.131-1.086l-.544-4.729c-.683-.033-1.232-.574-1.232-1.238v-1.493c0-.686.582-1.246 1.297-1.246h3.963a.02.02 0 00-.003-.009.02.02 0 01-.002-.008c-.166-1.854-.541-3.204-.975-4.185-.482.25-1.05.375-1.714.375-1.93 0-3.042-.988-3.14-2.784a.482.482 0 01-.014-.103V3.409c0-.695.585-1.258 1.305-1.258h1.854c2.034 0 3.154 1.076 3.157 3.031 0 .807-.205 1.479-.613 1.994-.009.006-.014.014-.02.023l-.115.126c.44.933.818 2.19 1.03 3.837a12.31 12.31 0 01.95-2.305l-.215-.269c-.342-.515-.504-1.129-.504-1.857 0-1.921 1.145-3.022 3.148-3.022zM8.59 7.4c.537 0 .988-.096 1.344-.28-.871-1.496-1.818-1.793-1.835-1.796h-.005a.409.409 0 01-.289-.501.426.426 0 01.513-.286c.08.02 1.215.342 2.243 1.986.222-.353.34-.799.34-1.34 0-1.492-.754-2.218-2.306-2.218H6.741a.45.45 0 00-.457.443v1.865a.315.315 0 01.011.09c.06 1.364.81 2.037 2.294 2.037zm9.117-.575l.003-1.87a.441.441 0 00-.451-.432h-1.846c-1.546 0-2.3.722-2.3 2.207 0 .56.115 1.017.34 1.367.649-.922 1.484-1.653 2.568-1.958a.428.428 0 01.528.284l.001.007a.405.405 0 01-.291.493c-.91.255-1.62.928-2.168 1.743.347.179.781.277 1.32.277 1.478 0 2.226-.667 2.285-2.042a.34.34 0 01.011-.076zm-.594 6.465a.437.437 0 00-.448-.428H7.318a.44.44 0 00-.449.431v1.493a.44.44 0 00.449.429h9.347a.44.44 0 00.448-.432V13.29zm-2.056 7.731c.154 0 .28-.123.28-.271l.535-4.72H8.105l.538 4.678c.002.19.128.313.285.313h6.13z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPlantLight;
