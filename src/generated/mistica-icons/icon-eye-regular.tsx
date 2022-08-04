/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconEyeRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path d="M16.454 11.798a4.472 4.472 0 11-8.944 0 4.472 4.472 0 018.944 0z" fill={fillColor} />
                <path
                    d="M22 11.583v.358c-.036 0-.036.036-.036.036-.02.02-.03.03-.033.04-.003.007-.003.016-.003.031v.036c-1.824 4.079-5.545 6.512-9.946 6.512-4.4 0-8.122-2.433-9.946-6.44v-.036C2 12.084 2 12.084 2 12.048v-.429c.02-.02.03-.03.033-.04.003-.008.003-.016.003-.032v-.035C3.86 7.432 7.58 5 11.982 5c4.4 0 8.122 2.433 9.982 6.476v.036c.02.02.03.029.033.04.003.007.003.016.003.031zm-18.533.215c1.646 3.363 4.794 5.367 8.515 5.367 3.721 0 6.87-2.004 8.515-5.367-1.645-3.363-4.794-5.367-8.515-5.367-3.72 0-6.87 2.004-8.515 5.367z"
                    fill={fillColor}
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.982 7.208c-2.577 0-4.653 2.137-4.653 4.79 0 2.652 2.076 4.79 4.653 4.79 2.577 0 4.653-2.138 4.653-4.79 0-2.653-2.077-4.79-4.653-4.79zm0 8.106c-1.788 0-3.22-1.475-3.22-3.316 0-1.841 1.432-3.316 3.22-3.316 1.788 0 3.22 1.475 3.22 3.316 0 1.841-1.432 3.316-3.22 3.316z"
                    fill={fillColor}
                />
                <path
                    d="M22 12.146v-.37c0-.016 0-.025-.003-.034a.125.125 0 00-.033-.04v-.038C20.104 7.504 16.383 5 11.982 5c-4.4 0-8.122 2.504-9.946 6.701v.037c0 .016 0 .025-.003.034a.125.125 0 01-.033.04v.445c0 .016 0 .025.003.034.004.01.012.02.033.04v.038C3.86 16.496 7.581 19 11.982 19c4.4 0 8.122-2.504 9.946-6.706v-.037c0-.015 0-.024.003-.033a.125.125 0 01.033-.04s0-.038.036-.038zm-10.018 5.375c-3.72 0-6.87-2.063-8.514-5.523 1.645-3.464 4.793-5.523 8.514-5.523 3.72 0 6.87 2.059 8.514 5.523-1.645 3.464-4.793 5.523-8.514 5.523z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.705 12.374c-.194.239-4.83 5.774-9.678 5.774-4.849 0-9.535-5.535-9.731-5.77a.592.592 0 01-.003-.76l.003-.003c.235-.279 4.874-5.77 9.706-5.77 4.851 0 9.507 5.538 9.703 5.773a.592.592 0 010 .756zm-9.678 4.58c3.602 0 7.3-3.736 8.409-4.955-1.115-1.218-4.835-4.96-8.434-4.96-3.603 0-7.32 3.736-8.435 4.957 1.124 1.219 4.86 4.958 8.46 4.958zm2.456-4.874c0-2.252-1.893-2.442-2.38-2.453-.07-.003-.157-.003-.233-.003-.501.003-2.353.17-2.353 2.442 0 2.275 1.871 2.451 2.37 2.46.075 0 .151 0 .227-.003.473-.008 2.37-.185 2.37-2.443z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconEyeRegular;
