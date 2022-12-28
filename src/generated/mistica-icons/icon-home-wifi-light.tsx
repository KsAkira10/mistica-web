/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconHomeWifiLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.57 10.69c.425.416.544 1.002.317 1.529-.245.56-.831.922-1.497.922h-.737v7.4c0 .805-.72 1.459-1.608 1.459H5.838c-.885 0-1.607-.654-1.607-1.46v-7.4h-.62c-.667 0-1.25-.36-1.498-.921-.227-.527-.108-1.11.316-1.526l8.389-8.247c.609-.595 1.755-.595 2.361 0l8.392 8.245zm-.483 1.204a.53.53 0 00-.134-.617l-8.388-8.245a.804.804 0 00-.56-.219.806.806 0 00-.564.22L3.05 11.276a.53.53 0 00-.134.617c.085.2.316.413.697.413h1.053c.239 0 .432.188.432.418v7.818c0 .344.333.623.74.623h12.204c.41 0 .743-.279.743-.623v-7.818c0-.23.194-.418.433-.418h1.172c.381 0 .612-.213.697-.413zm-8.562 5.749c0-.122 0-.495-.495-.507h-.077c-.478.006-.478.367-.478.501v.006c.003.144.01.498.49.504.56-.012.56-.367.56-.504zm-.47-1.34c.664.014 1.338.435 1.338 1.34 0 .908-.672 1.326-1.338 1.337h-.096c-.672-.008-1.346-.426-1.346-1.343 0-.916.671-1.332 1.334-1.337h.006l.103.003zm5.794-5c-2.325-2.51-5.776-2.343-5.902-2.331-3.71.037-5.692 2.087-5.792 2.19l-.001.001a.408.408 0 00.031.59c.177.156.45.141.612-.03h.001c.053-.055 1.84-1.88 5.178-1.918h.018c.26-.005 3.237-.07 5.206 2.052a.45.45 0 00.615.035.406.406 0 00.034-.59zm-5.899.11c.106-.005 2.843-.094 4.587 1.785.16.17.145.435-.034.589a.446.446 0 01-.612-.034c-1.468-1.583-3.892-1.517-3.918-1.506-2.397.026-3.814 1.483-3.863 1.533l-.001.001a.445.445 0 01-.612.031.406.406 0 01-.034-.589l.006-.006c.13-.132 1.748-1.776 4.481-1.804zm3.04 3.677c-1.156-1.246-2.957-1.184-3.023-1.18-1.796.019-2.865 1.105-2.95 1.19l-.003.005a.408.408 0 00.031.589.443.443 0 00.612-.029c.024-.024.892-.905 2.333-.922.037 0 1.486-.03 2.353.902.16.174.436.185.612.034a.406.406 0 00.034-.589z"
            />
        </svg>
    );
};

export default IconHomeWifiLight;
