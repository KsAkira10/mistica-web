/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAddMoreQueryRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 5.192c0-1.126-.885-1.963-2.633-2.484-1.201-.359-2.776-.555-4.434-.558-1.653 0-3.227.196-4.428.555C8.9 3.139 8.04 3.795 7.787 4.66v.003c-.048.17-.073.347-.073.53v2.54c0 .022.006.042.013.062l.01.039c-1.236.016-5.583.462-5.583 5.865 0 5.46 4.468 5.888 5.658 5.905h.093a.082.082 0 01.004.02c.001.01.002.02.007.028.358.717 1.154 1.249 2.431 1.63 1.21.358 2.782.555 4.429.555 1.647 0 3.221-.197 4.431-.555 1.748-.521 2.633-1.359 2.633-2.485V5.192zM10.698 3.864c1.09-.324 2.538-.504 4.076-.507 1.54 0 2.992.18 4.081.505.692.204 1.49.549 1.706 1.061-.176.398-.77.768-1.697 1.045-1.09.325-2.538.504-4.079.504-1.537 0-2.986-.179-4.075-.504-.939-.28-1.533-.655-1.7-1.059.179-.397.758-.767 1.688-1.045zM7.83 18.397c-4.022-.056-4.456-3.303-4.456-4.695 0-4.02 2.761-4.644 4.406-4.661h.109c.14 0 .286.003.414.006 4.056.095 4.493 3.308 4.493 4.686 0 1.378-.434 4.588-4.464 4.66-.101.004-.219.004-.334.004H7.83zm.863-1.751a.607.607 0 01-.608.605.607.607 0 01-.608-.605V14.31H5.133a.607.607 0 01-.608-.605c0-.334.271-.605.608-.605h2.344v-2.303a.607.607 0 011.216 0V13.1h2.35c.336 0 .608.271.608.605a.607.607 0 01-.608.605h-2.35v2.336zm10.165 3.479c-1.098.328-2.549.507-4.081.501-1.532 0-2.98-.179-4.079-.504-.672-.199-1.084-.417-1.341-.619 1.16-.19 2.843-.765 3.837-2.42a.25.25 0 01.04.012.21.21 0 00.053.013c.493.037 1 .056 1.501.056 1.653 0 3.227-.196 4.429-.554a5.852 5.852 0 001.406-.62v2.807c0 .661-.961 1.087-1.765 1.328zm-4.84-6.387c0-.498-.05-.94-.12-1.358.28.022.585.034.893.036 1.655 0 3.227-.196 4.428-.554a5.803 5.803 0 001.407-.62v3.143c-.202.325-.757.776-1.757 1.073-1.35.404-3.283.58-5.165.47a7.298 7.298 0 00.314-2.19zM8.934 7.736V6.514c.386.238.857.446 1.426.614 1.201.361 2.773.557 4.428.557 1.655 0 3.23-.199 4.429-.557a6.13 6.13 0 001.406-.597V9.63c-.2.325-.754.773-1.757 1.073-1.092.325-2.54.504-4.078.504-.266 0-.714 0-.986-.045a.588.588 0 00-.221.003c-.98-2.538-3.39-3.143-4.675-3.283l.01-.04c.009-.036.018-.069.018-.105z"
            />
        </svg>
    );
};

export default IconAddMoreQueryRegular;
