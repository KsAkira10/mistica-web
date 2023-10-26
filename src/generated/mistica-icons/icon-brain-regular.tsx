/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBrainRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.93 3.987c3.027.24 4.091 2.773 4.091 4.958 0 .56-.084 1.896-.787 3.059.703 1.16.787 2.49.787 3.05 0 2.202-1.08 4.757-4.095 4.97-.493 1.165-1.532 1.82-2.924 1.82-.91 0-1.555-.443-1.992-.966-.414.49-1.061.966-2.017.966-1.394 0-2.436-.661-2.927-1.83-3.028-.243-4.092-2.775-4.092-4.96 0-.56.084-1.896.787-3.056-.703-1.157-.787-2.49-.787-3.05 0-2.202 1.084-4.757 4.095-4.97.493-1.165 1.532-1.82 2.924-1.82.91 0 1.555.442 1.992.966.415-.49 1.062-.966 2.017-.966 1.395 0 2.437.658 2.927 1.829Zm-.43 14.717.012.003c2.848-.048 3.154-2.563 3.145-3.661 0-.381-.056-1.69-.77-2.628-.745-.776-1.905-.728-2.247-.692l-.22.024-.082.01c-.073.008-.17.028-.289.053a.675.675 0 0 1-.812-.495.662.662 0 0 1 .507-.796 5.502 5.502 0 0 1 .76-.115h.005c.02-.064 0-.132-.093-.227-.257-.263-.277-.714-.005-.966s.67-.275.927-.009l.07.073c.305.314.493.743.46 1.196.434.082.91.244 1.36.527.39-.835.432-1.748.432-2.056 0-1.1-.308-3.658-3.154-3.658h-.008c-.636.008-.914.512-1.026.82l-.044.138-1.295-.395.062-.182c.207-.577.653-1.174 1.314-1.488-.305-.47-.796-.7-1.507-.7-.798 0-1.202.77-1.317 1.034-.002.263-.008.885-.008 1.058v12.85c.006.136.003.697 0 .924.084.26.44 1.168 1.325 1.168.706 0 1.204-.238 1.512-.71a3.07 3.07 0 0 1-.397-.212c-.51-.328-.849-.728-1.012-1.196a.655.655 0 0 1 .423-.84.682.682 0 0 1 .86.414c.062.18.222.353.471.513.238.154.473.221.641.221Zm-6.507 1.812c.802 0 1.205-.77 1.323-1.028.002-.266.008-.885.008-1.058V5.578a33.73 33.73 0 0 1 0-.924c-.084-.258-.44-1.168-1.325-1.168-.686 0-1.17.23-1.482.675.712.302 1.174.91 1.39 1.512l.05.149a.674.674 0 0 1-.65.888.657.657 0 0 1-.63-.443l-.053-.162c-.11-.306-.415-.816-1.05-.816h-.006c-2.925 0-3.233 2.558-3.233 3.659 0 .372.06 1.633.731 2.566.14.106.348.182.622.204l.017.001c.257.016.954.057 1.045-.81l.011-.12a.668.668 0 0 1 .717-.626.671.671 0 0 1 .639.7l-.017.18c-.076.714-.46 1.49-1.283 1.83.008.07.053.125.182.173.345.129.563.52.434.86-.103.271-.341.448-.61.448a.606.606 0 0 1-.208-.034 1.973 1.973 0 0 1-.117-.042c-.527-.196-.964-.638-1.028-1.255a2.873 2.873 0 0 1-.65-.145c-.446.865-.49 1.854-.49 2.176 0 1.098.308 3.658 3.154 3.658h.003l.006.002.013.001a.295.295 0 0 0 .034-.005.19.19 0 0 1 .056-.006c.176.003.403-.064.641-.219.25-.16.41-.333.47-.512a.68.68 0 0 1 .86-.415.66.66 0 0 1 .424.84c-.16.468-.502.869-1.012 1.197-.156.1-.316.18-.473.244.308.453.79.677 1.487.677Z"
            />
        </svg>
    );
};

export default IconBrainRegular;
