/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSupportAgentLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M17.928 19.145a.357.357 0 00.715 0V17.74c0-2.364-1.89-4.203-4.716-4.811a4.66 4.66 0 001.569-1.288h1.349c.987 0 1.79-.8 1.79-1.783v-.916a6.98 6.98 0 00-1.895-4.795 6.682 6.682 0 00-4.668-2.144 6.784 6.784 0 00-4.977 1.9 6.732 6.732 0 00-2.083 4.883.357.357 0 00.714 0c0-1.664.663-3.216 1.863-4.371a6.05 6.05 0 014.451-1.7c3.235.116 5.868 2.907 5.868 6.223v.916c0 .591-.481 1.071-1.075 1.071h-.887a4.59 4.59 0 00.525-2.143c0-2.56-2.09-4.643-4.66-4.643-2.568 0-4.66 2.083-4.66 4.643a4.643 4.643 0 002.561 4.143c-1.055.228-1.999.624-2.757 1.176C5.695 15.017 5 16.309 5 17.732v3.904a.357.357 0 00.714 0v-3.903c0-1.192.59-2.276 1.662-3.056 1.112-.807 2.685-1.255 4.435-1.255 3.533 0 6.097 1.811 6.097 4.31v1.413h.02zM7.886 8.79c0-2.168 1.77-3.927 3.941-3.927A3.939 3.939 0 0115.77 8.79c0 .792-.237 1.527-.642 2.143h-3.304a.357.357 0 00-.357.356c0 .196.16.356.357.356h2.702a3.935 3.935 0 01-2.702 1.072c-2.167 0-3.937-1.764-3.937-3.927zM18.282 22c.396 0 .718-.32.718-.716a.717.717 0 00-.718-.716.717.717 0 100 1.432z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M16.415 10.302h-.365a3.471 3.471 0 01-.798 1.196c-.745.717-1.832 1.081-3.232 1.081-1.398 0-2.488-.364-3.233-1.084-.773-.745-1.165-1.863-1.165-3.316 0-1.454.392-2.572 1.165-3.317.748-.717 1.835-1.081 3.233-1.081 1.398 0 2.487.364 3.232 1.084.773.748 1.165 1.863 1.165 3.316 0 .574-.06 1.094-.182 1.56h.18c.33 0 .582-.083.75-.249.168-.165.255-.428.255-.773v-.005l.009-.547c0-3.616-1.835-5.45-5.454-5.45-3.247 0-5.062 1.484-5.398 4.408a.28.28 0 01-.554-.064c.184-1.63.806-2.88 1.845-3.706 1-.795 2.381-1.199 4.107-1.199 1.919 0 3.406.499 4.423 1.48 1.056 1.016 1.59 2.543 1.59 4.537v.006l-.008.546c0 .498-.142.893-.42 1.168-.277.274-.66.409-1.145.409zm-1.623-.56h.862c.135-.454.203-.975.203-1.56 0-1.297-.336-2.278-.994-2.914-.636-.616-1.594-.927-2.843-.927-1.25 0-2.205.311-2.843.927-.661.636-.995 1.617-.995 2.913 0 1.297.336 2.278.995 2.914.638.616 1.593.927 2.843.927 1.249 0 2.204-.311 2.843-.927a2.82 2.82 0 00.573-.793h-.642a.524.524 0 01-.124.204c-.115.115-.283.171-.49.171-.208 0-.376-.056-.49-.17-.107-.107-.166-.267-.166-.48 0-.445.26-.652.658-.652.3 0 .52.118.61.367zM3.535 21.834h16.933a.28.28 0 00.28-.28v-1.639c0-1.493-.462-2.764-1.342-3.677-.958-.995-2.39-1.521-4.137-1.521H8.734c-1.75 0-3.18.526-4.137 1.52-.877.914-1.342 2.185-1.342 3.678v1.639c0 .154.126.28.28.28zm.28-.56v-1.359c0-1.344.41-2.481 1.185-3.288.863-.894 2.118-1.347 3.734-1.347h6.535c1.616 0 2.871.453 3.734 1.347.776.807 1.185 1.944 1.185 3.288v1.359H3.815z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconSupportAgentLight;
