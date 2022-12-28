/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconHamburguerFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.84 7.646c0-.692-.264-1.104-.488-1.325a1.444 1.444 0 00-.84-.443l-.104-.007-.02-.001c-.549-.02-2.215-.006-2.215-.006V3.727c0-.868-.678-1.571-1.513-1.571-.832 0-1.512.706-1.512 1.571v2.137h-1.939c-.639 0-1.025.252-1.238.465-.218.222-.482.63-.482 1.322 0 .695.264 1.101.485 1.323.098.095.207.173.325.238l.01.287V9.5l.029.72h.213c1.667 0 2.798.644 3.507 1.916.305.546.53 1.21.68 1.994.011.06.024.116.037.174.015.066.03.133.042.205.227.112.443.246.622.425.496.496.748 1.196.748 2.084 0 .888-.255 1.589-.75 2.084a2.338 2.338 0 01-.937.555l-.027.1c-.241.87-.457 1.628-1.2 2.08h3.02a.7.7 0 00.168-.02c1.846-.41 2.14-2.05 2.154-3.757.003-.075.082-1.826.174-3.781.069-1.457.118-2.524.154-3.304v-.004l.084-1.762c.118-.065.23-.143.325-.238.224-.219.487-.628.487-1.325zm-1.23 0c0 .137-.02.314-.11.403-.092.09-.28.104-.383.104h-6.905c-.126 0-.297-.017-.384-.104-.087-.087-.106-.266-.106-.403 0-.135.02-.317.106-.404.09-.09.258-.106.384-.106h6.905c.129 0 .297.017.383.106.09.087.11.27.11.404zm-5.98 6.762H4.71c.37-1.731 1.135-2.185 2.16-2.3a.56.56 0 00.073-.014h.076a5.06 5.06 0 01.742.003l3.857-.003a3 3 0 01.27-.011.754.754 0 01.083-.006c.157 0 .297.011.434.025.51.05.922.194 1.25.446.476.367.79.96.974 1.86zm-.32 5.151a3.58 3.58 0 01-.16.454c-.16.364-.364.476-.876.53l-.233.002-.717.014a4.538 4.538 0 01-.44.008c-.095 0-.19-.002-.305-.008l-3.854.003c-.135.005-.972.014-1.104.014-1.008 0-1.277-.188-1.566-1.017h9.255zm-9.975-2.636c-.372-.39-.605-.804-.692-1.238h4.519c-.087.434-.314.849-.69 1.238-.473.49-.991.748-1.532.76h-.036c-.555 0-1.081-.256-1.569-.76zm11.266 2.602l.026-.092c.336-.11.627-.277.857-.515.46-.457.692-1.107.692-1.928 0-.635-.143-1.165-.42-1.585a1.98 1.98 0 00-.27-.342 2.113 2.113 0 00-.577-.395 9.01 9.01 0 00-.162-.787 6.35 6.35 0 00-.055-.191l-.023-.08a6.992 6.992 0 00-.173-.502c-.027-.07-.053-.141-.082-.207a4.281 4.281 0 00-.247-.48 3.47 3.47 0 00-.47-.624 2.966 2.966 0 00-1.58-.857 4.923 4.923 0 00-.765-.112 3.777 3.777 0 01-.138-.012c-.08-.008-.16-.016-.248-.016a.85.85 0 00-.044.001l-.04.002a5.346 5.346 0 00-.312.014l-3.767.002a5.9 5.9 0 00-.832-.002h-.176a.554.554 0 00-.205.039c-2.314.336-2.938 2.252-3.174 3.812a2.12 2.12 0 00-.577.398c-.456.46-.689 1.106-.689 1.927 0 .82.233 1.468.692 1.927.244.241.538.41.88.518.406 1.367.835 2.398 2.896 2.398l4.925-.002.316.002h.513s.733-.002.98-.02c.305-.016.55-.097.77-.181a1.899 1.899 0 00.541-.311 2.007 2.007 0 00.583-.748c.148-.32.252-.675.355-1.05z"
            />
        </svg>
    );
};

export default IconHamburguerFilled;
