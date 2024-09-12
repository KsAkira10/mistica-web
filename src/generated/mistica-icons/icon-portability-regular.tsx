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

const IconPortabilityRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M4.471 18.664c1.493 1.446 3.672 2.18 6.474 2.18 1.902 0 3.526-.34 4.834-1.009a.56.56 0 0 0-.512-.997c-1.146.588-2.6.888-4.322.888-2.502 0-4.418-.628-5.695-1.863-1.322-1.283-1.995-3.252-1.995-5.86s.673-4.58 1.995-5.86C6.527 4.908 8.443 4.28 10.945 4.28c2.5 0 4.417.628 5.694 1.863 1.322 1.283 1.995 3.252 1.995 5.86v.01q0 .726-.072 1.39a93 93 0 0 1-1.012-1.165l-.345-.4a.56.56 0 1 0-.849.731l.345.4.075.088c.639.74 1.028 1.193 1.244 1.408.317.317.658.476 1.003.476.347 0 .697-.162 1.025-.484.238-.236.517-.562.792-.884l.068-.08c.277-.327.566-.666.79-.89a.561.561 0 0 0-.793-.793c-.247.247-.54.59-.825.925l-.026.03-.03.034-.314.366q.045-.565.044-1.165v-.01c-.002-2.915-.79-5.154-2.336-6.65-1.493-1.446-3.672-2.18-6.473-2.18-2.802 0-4.98.734-6.474 2.18-1.549 1.498-2.336 3.742-2.336 6.663s.787 5.163 2.336 6.661"
            />
            <path
                fill={fillColor}
                d="M12.802 15.84h-4.37a.28.28 0 0 1-.28-.28v-4.943c0-.154.126-.28.28-.28h4.37c.154 0 .28.126.28.28v4.944a.28.28 0 0 1-.28.28m-.28-2.195V12.56h-3.81v1.084zm-.902.56v1.076h.902v-1.076zm-.56 0h-.897v1.076h.896zm-1.457 0h-.891v1.076h.89zM8.712 12h.89v-1.103h-.89zm1.451 0h.896v-1.103h-.896zm1.457 0h.902v-1.103h-.902z"
            />
            <path
                fill={fillColor}
                d="M12.98 5.42H9.523c-.3 0-.589.121-.799.334L6.55 7.96a1.12 1.12 0 0 0-.323.787v7.238c0 .734.292 1.196.535 1.457.264.277.74.61 1.53.61h4.692c.787 0 1.266-.33 1.53-.61.243-.26.534-.723.534-1.457V7.485c0-.734-.291-1.199-.535-1.457-.266-.277-.742-.607-1.532-.607m0 1.121c.645 0 .945.373.945.947v8.501c0 .574-.3.947-.944.947H8.29c-.643 0-.943-.373-.943-.947V8.75L9.522 6.54z"
            />
        </svg>
    );
};

export default IconPortabilityRegular;
