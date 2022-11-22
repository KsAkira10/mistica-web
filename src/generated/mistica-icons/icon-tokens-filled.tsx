/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTokensFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M13.43 4.63l-.016.034-.029.066-.005.01a11.525 11.525 0 01-1.845 2.881 11.612 11.612 0 01-3.95 2.931 12.737 12.737 0 00-2.032-2.457 8.422 8.422 0 002.19-1.11 8.586 8.586 0 002.83-3.4.9.9 0 00.03-.068l.005-.013a1.52 1.52 0 012.763-.125l.027.063.02.045.014.03.008.018c.133.353.13.744-.01 1.095zM8.207 16.026a12.725 12.725 0 00-2.95 1.346 8.572 8.572 0 00-.327-2.294 8.515 8.515 0 00-2.386-3.885l-.005-.005a2.844 2.844 0 00-.074-.067l-.006-.006A1.516 1.516 0 013.49 8.511h.024a1.51 1.51 0 011.072.445c.02.02.042.038.065.055a11.46 11.46 0 012.115 2.671l.003.006a11.612 11.612 0 011.437 4.338zm10.659 2.754a8.579 8.579 0 011.247-5.97 12.745 12.745 0 01-3.117-.657 11.576 11.576 0 00-.87 8.3c.109.29.302.542.555.721h.002l.014.009.04.027a1.52 1.52 0 002.303-1.61l-.029-.114a8.117 8.117 0 01-.145-.707zm-6.83.99c.924.005 1.84.16 2.714.457a12.796 12.796 0 01-.302-3.226 11.577 11.577 0 00-5.386.115c-1.17.308-2.283.8-3.298 1.455l-.012.008c-.083.053-.17.11-.26.173a1.51 1.51 0 00-.476.692 8.235 8.235 0 01-.055.21 1.52 1.52 0 002.402 1.495l.01-.007A8.494 8.494 0 0112 19.77h.036zm2.52-4.057c.19-1.407.611-2.774 1.246-4.044a12.917 12.917 0 01-3.785-2.679 12.91 12.91 0 01-3.798 2.687 12.937 12.937 0 011.242 4.031 12.876 12.876 0 015.095.005zm7.002-4.615c.284-.284.444-.67.445-1.072a1.523 1.523 0 00-1.395-1.512l-.074-.005h-.015a8.462 8.462 0 01-5.992-3.188 12.775 12.775 0 01-1.657 2.705 11.593 11.593 0 004.065 2.734c1.096.435 2.253.698 3.43.78h.016l.025.001a1.518 1.518 0 001.152-.443z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTokensFilled;
