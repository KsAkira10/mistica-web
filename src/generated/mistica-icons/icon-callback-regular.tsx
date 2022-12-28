/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCallbackRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.38 18.744l-3.904.58-.56-4.034c-.057-.41.22-.797.616-.855a.736.736 0 01.828.637l.215 1.546A8.656 8.656 0 0019.898 12c0-4.681-3.688-8.493-8.218-8.493-4.529 0-8.217 3.812-8.217 8.493 0 4.681 3.688 8.493 8.217 8.493a7.877 7.877 0 002.987-.58.72.72 0 01.944.43.76.76 0 01-.416.976 9.328 9.328 0 01-3.52.681C6.339 22 2 17.512 2 12S6.342 2 11.676 2c5.333 0 9.675 4.488 9.675 10 0 1.957-.547 3.836-1.56 5.45l1.373-.204a.736.736 0 01.828.638.751.751 0 01-.613.86zm-8.223-7.56c.075-.276.117-.648-.107-.875l-.823-.84c-.56-.575-.593-1.488-.07-2.034l1.178-1.227c.523-.546 1.407-.522 1.968.053l.785.802c1.734 1.773.996 5.459-1.64 8.207-1.805 1.846-3.745 2.648-5.334 2.648-1.056 0-1.958-.353-2.57-.99l-.777-.812c-.556-.58-.58-1.493-.051-2.034l1.187-1.217c.528-.541 1.412-.508 1.968.072l.813.85c.22.232.58.189.846.112.491-.145 1.062-.527 1.594-1.073.524-.546.893-1.13 1.033-1.642zm-.261 2.449l-.005.005c-.678.69-1.393 1.16-2.07 1.357-.777.227-1.46.082-1.922-.4l-.813-.851a.382.382 0 00-.267-.126c-.06 0-.112.02-.15.058L6.484 14.89c-.099.101-.07.3.06.435l.776.811c1.127 1.174 3.875.875 6.353-1.662 2.397-2.502 2.785-5.434 1.645-6.603l-.785-.802c-.131-.136-.323-.16-.421-.063l-1.178 1.227c-.094.101-.066.3.065.43l.823.84c.472.484.608 1.189.388 1.99-.192.701-.645 1.44-1.313 2.14z"
            />
        </svg>
    );
};

export default IconCallbackRegular;
