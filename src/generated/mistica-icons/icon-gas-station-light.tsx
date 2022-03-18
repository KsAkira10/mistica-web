/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconGasStationLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.843 19.178l-.009-10.546a.092.092 0 00-.004-.026l-.002-.005.003-.028c0-1.118-.423-1.768-.933-2.149a.056.056 0 01-.008-.013.052.052 0 00-.014-.017L16.75 2.276a.41.41 0 00-.58.58l3.042 3.036-.157-.003h-.047c-.54.006-2.54.19-2.54 2.67 0 2.482 2.022 2.675 2.56 2.683h.246c.297-.005 1.112-.075 1.742-.613l.006 8.549c0 1.633-1.227 1.832-1.756 1.843h-.194c-.53-.008-1.756-.204-1.756-1.857v-3.952a2.598 2.598 0 00-2.6-2.594h-.697V3.377c0-.63-.588-1.202-1.232-1.202H3.389c-.645 0-1.233.572-1.233 1.202v17.266c0 .639.577 1.202 1.233 1.202h9.398c.655 0 1.23-.563 1.23-1.202V13.44h.697c.98-.003 1.776.79 1.778 1.77v3.953c0 1.947 1.325 2.661 2.558 2.678h.087l.142-.003c1.183-.02 2.564-.731 2.564-2.661zm-8.648 1.462V3.377c0-.174-.22-.381-.409-.381H3.39c-.188 0-.41.204-.41.38V20.64c0 .19.208.381.41.381l9.398.003c.201-.003.408-.193.408-.384zm6.065-10.218c.798-.017 1.75-.348 1.75-1.85 0-1.5-.96-1.84-1.764-1.859l-.188-.003h-.039c-.787.009-1.725.333-1.725 1.846 0 1.521.95 1.852 1.747 1.863l.219.003zm-8.521-1.53V5.738c0-.075-.05-.151-.079-.168l-5.058.009c.007.003.001.02-.008.045a.336.336 0 00-.026.114v3.154c0 .079.04.138.062.16h5.078c-.009-.004-.003-.02.006-.044a.33.33 0 00.025-.116zm.823-3.154c0-.524-.4-.98-.857-.98l-5.103-.003c-.457 0-.858.46-.858.98v3.157c0 .532.393.98.858.98h5.103c.465 0 .857-.45.857-.98V5.738z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconGasStationLight;
