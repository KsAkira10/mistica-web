/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconMouseRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.972 11.734a.55.55 0 0 0 1.098 0V8.857a.55.55 0 0 0-1.098 0v2.877Z"
            />
            <path
                fill={fillColor}
                d="M12.003 6.422v-.36c0-.02-.011-.309-.157-.578-.174-.322-.462-.47-.91-.47h-1.92c-.896 0-1.663-.2-2.218-.575-.605-.411-.938-1.025-.938-1.725a.55.55 0 0 1 1.098 0c0 .888 1.064 1.204 2.062 1.204h1.918c.869 0 1.544.39 1.9 1.096.254.501.26.989.26 1.045v.367c1.504.09 2.694.545 3.543 1.352.998.947 1.502 2.356 1.502 4.185v4.311c0 1.897-.44 3.264-1.348 4.174-.921.933-2.319 1.386-4.274 1.386-1.779 0-3.165-.462-4.12-1.37-.998-.946-1.502-2.355-1.502-4.184v-4.314c0-1.829.504-3.238 1.501-4.185.863-.82 2.073-1.276 3.603-1.359Zm-4.009 6.082c1.481.183 2.986.274 4.476.274h.101a36.6 36.6 0 0 0 4.476-.274v-.538c.003-3.003-1.479-4.46-4.526-4.46-3.048 0-4.527 1.46-4.527 4.463v.535Zm0 1.102v2.674c0 3 1.482 4.46 4.527 4.46 1.647 0 2.793-.348 3.498-1.06.692-.697 1.029-1.81 1.029-3.403v-2.671a37.78 37.78 0 0 1-4.474.268h-.106a37.8 37.8 0 0 1-4.474-.268Z"
            />
        </svg>
    );
};

export default IconMouseRegular;
