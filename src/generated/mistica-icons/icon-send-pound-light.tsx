/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSendPoundLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.646 12.906c.212.217.49.333.772.333.146 0 .291-.03.428-.092.423-.179.682-.58.682-1.048V2h-9.835c-.456 0-.846.27-1.02.7-.174.43-.08.903.24 1.232l2.483 2.55L9.883 10.1a.377.377 0 0 0 0 .53c.14.15.371.15.517 0l4.035-4.148-3-3.081a.376.376 0 0 1-.08-.41.366.366 0 0 1 .338-.233h9.1v9.346a.374.374 0 0 1-.225.348.352.352 0 0 1-.4-.082l-3-3.082-2.45 2.516a.382.382 0 0 0 0 .532c.14.15.371.15.517 0l1.928-1.98 2.483 2.55Zm-6.203 1.545a.745.745 0 0 1-.734-.753c0-.416.33-.754.734-.754.404 0 .734.338.734.754 0 .415-.33.753-.734.753ZM9.45 21.623a.372.372 0 0 0-.367-.377H4.314c.235-.318.376-.714.376-1.144l-.004-2.628h2.558a.373.373 0 0 0 .372-.376.372.372 0 0 0-.367-.377H4.685l-.004-2.642c0-1.058.809-1.888 1.839-1.888.466 0 .889.164 1.227.468.151.14.386.126.518-.029a.382.382 0 0 0-.028-.531 2.494 2.494 0 0 0-1.712-.662c-1.42 0-2.573 1.184-2.573 2.642l.004 2.642h-.752a.372.372 0 0 0-.367.377c0 .207.165.376.367.376h.753l.004 2.628c0 .633-.498 1.145-1.114 1.145a.372.372 0 0 0-.367.376c0 .208.165.377.367.377h6.246a.37.37 0 0 0 .357-.377Zm-5.493-4.149h.73l-.002-.753h-.729l.001.753Z"
            />
        </svg>
    );
};

export default IconSendPoundLight;
