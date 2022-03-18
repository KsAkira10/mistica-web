/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconInternetRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.479 2 2 6.479 2 12s4.474 10 10 10 10-4.479 10-10S17.521 2 12 2zM8.522 4.17C7.356 5.854 6.575 8.372 6.47 11.288H3.43c.261-3.186 2.3-5.868 5.092-7.116zm-2.057 8.543H3.431c.26 3.186 2.298 5.868 5.086 7.116-1.165-1.686-1.947-4.205-2.052-7.116zm4.822 7.715c-1.792-.686-3.236-3.88-3.391-7.715h3.391v7.715zm-3.391-9.141h3.391V3.572c-1.792.686-3.236 3.88-3.391 7.715zm12.674 0h-3.035c-.105-2.911-.887-5.43-2.052-7.116 2.788 1.248 4.826 3.93 5.087 7.116zm-4.466 0c-.155-3.835-1.6-7.03-3.391-7.715v7.715h3.391zm-3.391 9.14v-7.714h3.391c-.155 3.835-1.6 7.03-3.391 7.715zm4.817-7.714c-.105 2.916-.887 5.434-2.052 7.116 2.793-1.248 4.831-3.93 5.087-7.116H17.53z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.63 19.302c1.675 1.614 4.112 2.432 7.244 2.432 3.134 0 5.571-.818 7.243-2.434 1.737-1.673 2.62-4.174 2.62-7.429s-.88-5.756-2.62-7.431c-1.675-1.614-4.112-2.432-7.243-2.432-3.132 0-5.566.821-7.241 2.435-1.737 1.675-2.62 4.176-2.62 7.431s.88 5.753 2.617 7.428zM3.687 8.05C4.491 5.662 6.17 4.137 8.71 3.49c-.417.433-.8.957-1.143 1.567-.494.878-.88 1.893-1.15 2.994H3.688zm7.576 0V3.23c-1.008.192-1.96 1.017-2.722 2.375a10.536 10.536 0 00-.97 2.445h3.692zm0 1.12H7.324a15.49 15.49 0 00-.229 2.684c0 1.153.121 2.269.353 3.303h3.815V9.17zm0 7.107h-3.51c.214.66.477 1.274.788 1.827.76 1.355 1.714 2.182 2.722 2.374v-4.2zm1.12 0h3.298c-.214.66-.477 1.274-.788 1.827-.709 1.262-1.58 2.064-2.51 2.324v-4.15zm3.603-1.12h-3.602V9.17h3.726c.15.855.229 1.758.229 2.683 0 1.153-.121 2.269-.353 3.303zm.865 1.12a11.413 11.413 0 01-.983 2.376 7.486 7.486 0 01-1.28 1.705c2.572-.532 4.329-1.897 5.256-4.08h-2.993zm3.377-1.12H17.13c.216-1.046.33-2.16.33-3.303 0-.92-.074-1.82-.215-2.683h3.12c.17.819.254 1.72.254 2.703 0 1.221-.13 2.316-.391 3.283zm-13.924 0a16.363 16.363 0 01-.33-3.303c0-.92.074-1.82.215-2.683H3.387c-.168.818-.253 1.72-.253 2.703 0 1.221.13 2.316.391 3.283h2.779zm-2.396 1.12c.877 2.066 2.494 3.398 4.842 3.987a7.516 7.516 0 01-1.184-1.611c-.4-.712-.73-1.512-.983-2.376H3.908zm8.476-8.227h3.48a10.54 10.54 0 00-.97-2.445c-.71-1.262-1.582-2.064-2.51-2.324v4.77zm3.484-2.994c.493.879.88 1.893 1.149 2.994h3.048c-.846-2.512-2.662-4.07-5.432-4.656a7.451 7.451 0 011.235 1.662z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconInternetRegular;
