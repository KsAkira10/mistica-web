/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTongueFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.843 4.394a.573.573 0 01-.09.347l-.005.011a8.99 8.99 0 01-.723.925c-.05.055-.104.108-.157.16-.036.035-.072.07-.106.106-.185.19-.376.375-.577.549a9.127 9.127 0 01-.364.285 8.51 8.51 0 01-.566.404c-.157.1-.32.196-.482.288-.04.021-.076.044-.114.068a2.1 2.1 0 01-.113.067c.008.014.008.022.008.039.065.801.098 1.68.098 2.706 0 5.174-.865 8.837-4.77 9.672-.24.05-.496.084-.759.115a.86.86 0 00-.049.009c-.024.004-.047.009-.074.01-.314.029-.642.045-.986.045-2.065 0-3.516-.551-4.521-1.557-1.678-1.675-2.118-4.6-2.118-8.294 0-1.025.031-1.924.098-2.74a3.665 3.665 0 01-.246-.147c-.048-.03-.097-.061-.146-.09-.044-.028-.089-.054-.133-.08a5.747 5.747 0 01-.293-.181c-.16-.106-.31-.223-.46-.34a42.652 42.652 0 00-.106-.081c-.118-.089-.236-.177-.347-.274-.185-.162-.356-.339-.527-.515a3.92 3.92 0 00-.1-.099c-.056-.054-.112-.108-.163-.167a8.801 8.801 0 01-.703-.9.606.606 0 01.04-.703.617.617 0 01.142-.14.619.619 0 01.72.04.68.68 0 01.137.131 6.213 6.213 0 00.423.55 7.64 7.64 0 002.675 2.089c1.513.717 3.404 1.081 5.622 1.081 2.77 0 4.989-.577 6.658-1.692a7.38 7.38 0 002.054-2.02.355.355 0 01.067-.067l.025-.022a.617.617 0 01.765-.081.569.569 0 01.266.493zm-9.801 12.235a.61.61 0 00.613-.608l-.036-7.05a8.399 8.399 0 00-.252.012 6.152 6.152 0 01-.356.013c-.125 0-.245-.007-.363-.015a7.42 7.42 0 00-.264-.013l.039 7.059a.61.61 0 00.616.602h.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTongueFilled;
