/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconWinnerCheckRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.821 18.475l-2.201-3.787a7.44 7.44 0 002.007-5.115C19.627 5.408 16.22 2 12.054 2 7.889 2 4.48 5.408 4.48 9.573c0 1.93.717 3.714 1.93 5.038l-2.236 3.864a.581.581 0 00.039.645c.15.19.378.267.606.19l2.991-.874.907 3.142a.623.623 0 00.495.417h.077c.19 0 .378-.111.495-.3l2.235-3.904 2.235 3.904c.112.189.3.3.495.3h.077a.623.623 0 00.495-.417l.911-3.142 2.992.873c.228.078.455 0 .606-.189.102-.19.102-.417-.01-.645zM12.054 3.513c3.336 0 6.06 2.725 6.06 6.06 0 3.336-2.724 6.061-6.06 6.061-3.336 0-6.06-2.725-6.06-6.06 0-3.336 2.724-6.061 6.06-6.061zM9.44 19.988l-.684-2.386a.59.59 0 00-.267-.339c-.111-.078-.3-.078-.417-.039l-2.157.645 1.4-2.385a7.592 7.592 0 003.865 1.667l-1.74 2.837zm6.516-2.802c-.15-.04-.3-.04-.417.038-.112.078-.228.19-.267.34l-.683 2.385-1.663-2.875a7.445 7.445 0 003.903-1.59l1.362 2.346-2.235-.644zm-5.532-4.088l5.188-5.188c.3-.3.3-.756 0-1.062a.73.73 0 00-1.062 0l-4.13 4.132-1.324-1.324a.74.74 0 00-1.062 0c-.3.3-.3.756 0 1.062l2.39 2.38z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconWinnerCheckRegular;
