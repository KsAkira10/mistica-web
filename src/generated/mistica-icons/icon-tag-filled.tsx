'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTagFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m18.598 6.406 3.194-3.194a.715.715 0 0 0 .004-1.004.71.71 0 0 0-1.004 0l-3.194 3.194a.71.71 0 0 0 .5 1.213.7.7 0 0 0 .5-.209m-1.759.754c.336.332.782.518 1.254.518.473 0 .922-.181 1.25-.518l1.23-1.23v7.555c0 .568-.217 1.1-.622 1.504l-6.388 6.389A2.12 2.12 0 0 1 12.06 22c-.545 0-1.09-.209-1.504-.622l-7.933-7.934c-.4-.4-.622-.936-.622-1.504s.218-1.1.622-1.504l6.393-6.392c.4-.4.936-.623 1.504-.623h7.551l-1.23 1.231a1.78 1.78 0 0 0 0 2.508m-4.248 9.57c0-2.404 1.754-4.08 4.262-4.08a.532.532 0 0 0 0-1.064c-2.39 0-4.262-1.95-4.262-4.44a.53.53 0 0 0-.532-.53.53.53 0 0 0-.531.53c0 2.49-1.872 4.44-4.262 4.44a.53.53 0 0 0-.532.532.53.53 0 0 0 .532.531c2.508 0 4.262 1.677 4.262 4.08a.53.53 0 0 0 .531.532.53.53 0 0 0 .532-.532m1.863-4.649a4.88 4.88 0 0 0-2.395 2.295 4.88 4.88 0 0 0-2.394-2.295 5.3 5.3 0 0 0 2.394-2.494 5.3 5.3 0 0 0 2.395 2.494"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m18.598 6.406 3.194-3.194a.715.715 0 0 0 .004-1.004.71.71 0 0 0-1.004 0l-3.194 3.194a.71.71 0 0 0 .5 1.213.7.7 0 0 0 .5-.209m-1.759.754c.336.332.782.518 1.254.518.473 0 .922-.181 1.25-.518l1.23-1.23v7.555c0 .568-.217 1.1-.622 1.504l-6.388 6.389A2.12 2.12 0 0 1 12.06 22c-.545 0-1.09-.209-1.504-.622l-7.933-7.934c-.4-.4-.622-.936-.622-1.504s.218-1.1.622-1.504l6.393-6.392c.4-.4.936-.623 1.504-.623h7.551l-1.23 1.231a1.78 1.78 0 0 0 0 2.508m-4.248 9.57c0-2.404 1.754-4.08 4.262-4.08a.532.532 0 0 0 0-1.064c-2.39 0-4.262-1.95-4.262-4.44a.53.53 0 0 0-.532-.53.53.53 0 0 0-.531.53c0 2.49-1.872 4.44-4.262 4.44a.53.53 0 0 0-.532.532.53.53 0 0 0 .532.531c2.508 0 4.262 1.677 4.262 4.08a.53.53 0 0 0 .531.532.53.53 0 0 0 .532-.532m1.863-4.649a4.88 4.88 0 0 0-2.395 2.295 4.88 4.88 0 0 0-2.394-2.295 5.3 5.3 0 0 0 2.394-2.494 5.3 5.3 0 0 0 2.395 2.494"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.505 2.155c.739.003 1.336.602 1.341 1.339v.003h-.005v8.308c-.076.42-.28.804-.589 1.1l-8.327 8.27c-.275.327-.647.56-1.062.66a1.5 1.5 0 0 1-.274 0 1.13 1.13 0 0 1-.83-.33l-8.288-8.269a1.553 1.553 0 0 1 .291-2.157l8.336-8.327a2.13 2.13 0 0 1 1.062-.597zM15.82 5.71c-.32.277-.515.672-.546 1.092v.022c.033.432.235.835.563 1.118.291.325.697.521 1.134.546a1.6 1.6 0 0 0 1.118-.546c.32-.274.512-.664.538-1.084a1.66 1.66 0 0 0-.563-1.132 1.65 1.65 0 0 0-1.135-.554c-.428.02-.829.213-1.109.538"
                />
            </svg>
        );
    }
};

export default IconTagFilled;
