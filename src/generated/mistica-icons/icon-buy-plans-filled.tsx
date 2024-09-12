'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBuyPlansFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.07 10.508c.308-1.241.6-2.412.753-3.02l-.01-.002a.562.562 0 0 0-.543-.697h-3.39V5.555a.2.2 0 0 0-.006-.037v-.003l-.011-.044-.012-.034-.016-.034v-.003l-.017-.03-.006-.009-.008-.01-.009-.012-.005-.009-.013-.014-.012-.014-3.012-3.014-.014-.012-.014-.013-.008-.005-.011-.009-.011-.008-.009-.006-.03-.02h-.004L14.62 2.2l-.034-.011-.045-.012s-.025-.005-.036-.005h-.011c-.008-.003-.02-.003-.028-.003h-4.006c-.479 0-.787.308-.787.784v3.838H7.263a365 365 0 0 0-.44-2.535c-.218-1.219-1.37-2.101-2.736-2.101H2.739a.56.56 0 0 0-.56.56c0 .308.252.56.56.56h1.35c.813 0 1.513.505 1.634 1.177.179 1.017 1.501 8.689 1.633 9.54.162 1.028.546 1.832 1.137 2.39.569.532 1.31.815 2.148.815h6.27c.828 0 1.531-.283 2.092-.84.532-.533.916-1.286 1.182-2.311.092-.357.35-1.39.638-2.546zm-4.807-3.163a.42.42 0 0 1-.42.42h-4.37a.42.42 0 1 1 0-.84h4.37a.42.42 0 0 1 .42.42M12.288 20.19q0-.788-.459-1.23c-.291-.28-.695-.423-1.193-.423s-.902.143-1.194.423q-.458.442-.459 1.23 0 .786.46 1.23c.29.28.694.422 1.193.422.498 0 .902-.143 1.193-.423q.459-.442.46-1.23m2.617-1.23c.291-.28.692-.423 1.193-.423s.902.143 1.193.423q.459.442.46 1.23c0 .523-.157.935-.46 1.23-.291.28-.695.422-1.193.422s-.902-.143-1.193-.423q-.46-.442-.46-1.23 0-.786.46-1.23m.938-9.283a.42.42 0 1 0 0-.84h-4.37a.42.42 0 1 0 0 .84zm.42 1.493a.42.42 0 0 1-.42.42h-4.37a.42.42 0 1 1 0-.84h4.37a.42.42 0 0 1 .42.42m.784-5.146c0 2.468 0 6.306.003 6.905h-6.538V3.012h3.527v1.219c.003.532.107.935.317 1.235.179.252.532.555 1.193.557zM14.88 3.606l1.575 1.577h-.902c-.353 0-.67-.076-.673-.955z"
            />
        </svg>
    );
};

export default IconBuyPlansFilled;
